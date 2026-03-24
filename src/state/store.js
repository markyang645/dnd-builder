import { create } from 'zustand'
import { 
  racialASI, classSavingThrows, classHitDice, getProficiencyBonus,
  racialSpeed, getModifier, calculateAC, isValidPointBuy, pointBuyCosts,
  pointBuyTotal, pointBuyMin, pointBuyMax, ABILITY_MIN, ABILITY_MAX,
  calculateSpellSaveDC, calculateAttackBonus, calculateCarryingCapacity,
  asiLevels, classPrimaryAbility, standardArray, getPointBuyCost,
} from '../data/dndRules'
import {
  rollD20, rollDamage, rollInitiative,
  rollSkillCheck, rollSavingThrow, rollAttack, rollDeathSave,
  generateAbilityScores, formatRoll, rollDie,
} from '../lib/dice'
import { skills, classSkillProficiencies, backgroundSkills } from '../data/skillsData'
import { raceData, getRaceData } from '../data/raceData'

const genId = () => Math.random().toString(36).slice(2)

export const useCharacterStore = create(
  (set, get) => ({
    character: null,
    characters: [],
    rollHistory: [],
    validationErrors: [],
    rollBreakdowns: {},

    createCharacter: (name, statMethod = 'pointbuy') =>
      set((state) => {
        let abilities = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }
        let rollResults = []
        let rollBreakdowns = {}
        
        if (statMethod === 'standard') {
          abilities = { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 }
        } else if (statMethod === 'roll') {
          const scores = generateAbilityScores()
          abilities = {}
          scores.forEach(result => {
            abilities[result.ability] = result.score
            rollBreakdowns[result.ability] = result.breakdown
          })
          rollResults = scores.map(r => ({
            ability: r.ability,
            result: r.breakdown,
            timestamp: Date.now(),
          }))
        }

        const newCharacter = {
          id: genId(), name: name || 'New Character',
          race: '', subrace: '', class: '', subclass: '', background: '',
          level: 1, alignment: '',
          age: '', gender: '', height: '', weight: '',
          eyes: '', hair: '', hairStyle: '', skin: '', favoriteColor: '',
          abilities,
          baseAbilities: { ...abilities },
          modifiers: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
          savingThrows: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
          skillProficiencies: [],
          proficiencyBonus: 2,
          hitPoints: 10,
          maxHitPoints: 10,
          tempHitPoints: 0,
          hpHistory: [],
          armorClass: 10, speed: 30, initiative: 0,
          spellSaveDC: 0, attackBonus: 0,
          carryingCapacity: 150, pushDragLift: 300,
          asiAvailable: 0, asiUsed: 0,
          personalityTraits: '', ideals: '', bonds: '', flaws: '', backstory: '',
          armorType: 'none', hasShield: false, weapons: [], equipment: [],
          statMethod: statMethod,
          activeStatTab: statMethod,
          createdAt: Date.now(), updatedAt: Date.now(),
        }
        
        const calculated = get().calculateDerivedStats(newCharacter)
        
        return {
          character: calculated,
          characters: [...state.characters, calculated],
          rollHistory: rollResults.length ? [...state.rollHistory, ...rollResults] : state.rollHistory,
          rollBreakdowns,
          validationErrors: [],
        }
      }),

    setActiveStatTab: (tab) => set((state) => {
      if (!state.character) return state
      
      let abilities = { ...state.character.baseAbilities }
      let rollResults = []
      let rollBreakdowns = {}
      
      if (tab === 'standard') {
        abilities = { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 }
      } else if (tab === 'roll') {
        const scores = generateAbilityScores()
        abilities = {}
        scores.forEach(result => {
          abilities[result.ability] = result.score
          rollBreakdowns[result.ability] = result.breakdown
        })
        rollResults = scores.map(r => ({
          ability: r.ability,
          result: r.breakdown,
          timestamp: Date.now(),
        }))
      }
      
      const updated = { 
        ...state.character, 
        baseAbilities: { ...abilities },
        abilities: { ...abilities },
        statMethod: tab,
        activeStatTab: tab,
      }
      
      return {
        character: get().calculateDerivedStats(updated),
        rollBreakdowns: tab === 'roll' ? rollBreakdowns : state.rollBreakdowns,
        rollHistory: rollResults.length ? [...(state.rollHistory || []), ...rollResults] : state.rollHistory,
      }
    }),

    updateCharacter: (key, value) =>
      set((state) => {
        if (!state.character) return state
        const updated = { ...state.character, [key]: value, updatedAt: Date.now() }
        if (['race', 'class', 'level', 'abilities', 'armorType', 'hasShield', 'background'].includes(key)) {
          return { character: get().calculateDerivedStats(updated) }
        }
        return { character: updated }
      }),

    updateAbility: (ability, value) =>
      set((state) => {
        if (!state.character) return state
        const numValue = parseInt(value) || 10
        let validationErrors = []
        
        if (numValue < ABILITY_MIN) validationErrors.push(`${ability.toUpperCase()} cannot be below ${ABILITY_MIN}`)
        if (numValue > ABILITY_MAX) validationErrors.push(`${ability.toUpperCase()} cannot exceed ${ABILITY_MAX}`)
        
        if (state.character.statMethod === 'pointbuy') {
          if (numValue < pointBuyMin) validationErrors.push(`${ability.toUpperCase()} minimum for Point Buy is ${pointBuyMin}`)
          if (numValue > pointBuyMax) validationErrors.push(`${ability.toUpperCase()} maximum for Point Buy is ${pointBuyMax}`)
        }
        
        const clampedValue = Math.max(
          state.character.statMethod === 'pointbuy' ? pointBuyMin : ABILITY_MIN,
          Math.min(state.character.statMethod === 'pointbuy' ? pointBuyMax : ABILITY_MAX, numValue)
        )
        
        if (state.character.statMethod === 'pointbuy') {
          const testAbilities = { ...state.character.baseAbilities, [ability]: clampedValue }
          const cost = getPointBuyCost(testAbilities)
          if (cost > pointBuyTotal) validationErrors.push(`Point Buy cost (${cost}) exceeds maximum (${pointBuyTotal})`)
        }
        
        const updated = {
          ...state.character,
          baseAbilities: { ...state.character.baseAbilities, [ability]: clampedValue },
          abilities: { ...state.character.baseAbilities, [ability]: clampedValue },
          updatedAt: Date.now(),
        }
        
        return { character: get().calculateDerivedStats(updated), validationErrors }
      }),

    calculateDerivedStats: (char) => {
// AUTO-APPLY PROFICIENCIES FROM RACE, CLASS, BACKGROUND
let skillProficiencies = char.skillProficiencies || []
const appliedProficiencies = new Set(skillProficiencies)

// Apply Race Proficiencies
if (char.race) {
const race = getRaceData(char.race)
if (race && race.skillProficiencies && Array.isArray(race.skillProficiencies)) {
race.skillProficiencies.forEach(skill => appliedProficiencies.add(skill))
}
// Special race features that grant proficiencies
if (char.race === 'elf') appliedProficiencies.add('perception')
if (char.race === 'half-orc') appliedProficiencies.add('intimidation')
if (char.race === 'halfling') { /* Lucky is not a skill */ }
}

// Apply Class Proficiencies
if (char.class) {
const classSkills = classSkillProficiencies[char.class.toLowerCase()]
if (classSkills && classSkills.from && Array.isArray(classSkills.from)) {
// Class grants choice of N skills from their list
// This is handled in UI, but we track what's available
}
}

// Apply Background Proficiencies
if (char.background) {
const bgSkills = backgroundSkills[char.background]
if (bgSkills && Array.isArray(bgSkills)) {
bgSkills.forEach(skill => appliedProficiencies.add(skill))
}
}

skillProficiencies = Array.from(appliedProficiencies)
      if (!char) return null
      
      const baseAbilities = char.baseAbilities || char.abilities || { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }
      
      let abilities = { ...baseAbilities }
      if (char.race) {
        const race = getRaceData(char.race)
        if (race && race.abilityScoreIncrease) {
          Object.entries(race.abilityScoreIncrease).forEach(([ability, bonus]) => {
            if (abilities[ability] !== undefined) {
              abilities[ability] = baseAbilities[ability] + bonus
            }
          })
        }
      }
      
      const modifiers = {}
      Object.entries(abilities).forEach(([ability, score]) => {
        modifiers[ability] = getModifier(score)
      })
      
      const profBonus = getProficiencyBonus(char.level || 1)
      const savingThrows = {}
      const proficientSaves = char.class ? classSavingThrows[char.class] || [] : []
      Object.entries(modifiers).forEach(([ability, mod]) => {
        savingThrows[ability] = proficientSaves.includes(ability) ? mod + profBonus : mod
      })
      
      // FIXED HP CALCULATION
      let hitPoints = char.hitPoints || 10
      let maxHitPoints = char.maxHitPoints || 10
      let hpHistory = char.hpHistory || []
      
      // Recalculate HP based on level and class
      if (char.class && char.level >= 1) {
        const hitDie = classHitDice[char.class] || 8
        const conMod = modifiers.con || 0
        
        // If no HP history, initialize from scratch
        if (!hpHistory || hpHistory.length === 0) {
          const level1HP = hitDie + conMod
          hitPoints = level1HP
          maxHitPoints = level1HP
          hpHistory = [{ 
            level: 1, 
            roll: `Max (${hitDie}) + ${conMod >= 0 ? '+' : ''}${conMod} CON`, 
            gain: level1HP, 
            total: level1HP, 
            timestamp: Date.now() 
          }]
        } else {
          // Recalculate max HP from history
          maxHitPoints = hpHistory.reduce((total, entry) => total + entry.gain, 0)
          // Keep current HP if valid, otherwise set to max
          if (hitPoints > maxHitPoints || hitPoints < 0) {
            hitPoints = maxHitPoints
          }
        }
      }
      
      const dexMod = modifiers.dex || 0
      const ac = calculateAC(char.armorType || 'none', dexMod, char.hasShield || false)
      const speed = char.race ? (getRaceData(char.race).speed || 30) : 30
      const initiative = dexMod
      const spellSaveDC = char.class ? calculateSpellSaveDC(char.class, abilities, profBonus) : 0
      const attackBonus = char.class ? calculateAttackBonus(char.class, abilities, profBonus) : 0
      const carryingCapacity = calculateCarryingCapacity(abilities.str || 10)
      const pushDragLift = carryingCapacity * 2
      const asiCount = asiLevels.filter(l => l <= (char.level || 1)).length
      
      return {
        ...char,
        abilities,
        modifiers,
        savingThrows,
        hitPoints,
        maxHitPoints,
        hpHistory,
        armorClass: ac,
        speed,
        initiative,
        spellSaveDC,
        attackBonus,
        carryingCapacity,
        pushDragLift,
        proficiencyBonus: profBonus,
        asiAvailable: asiCount,
      }
    },

    // NEW: Set HP directly
    setHitPoints: (hp) =>
      set((state) => {
        if (!state.character) return state
        const newHP = Math.max(0, Math.min(state.character.maxHitPoints, hp))
        return {
          character: {
            ...state.character,
            hitPoints: newHP,
          }
        }
      }),

    // NEW: Add temp HP
    addTempHP: (amount) =>
      set((state) => {
        if (!state.character) return state
        const currentTemp = state.character.tempHitPoints || 0
        const newTemp = Math.max(currentTemp, amount) // Temp HP don't stack, take higher
        return {
          character: {
            ...state.character,
            tempHitPoints: newTemp,
          }
        }
      }),

    // NEW: Clear temp HP
    clearTempHP: () =>
      set((state) => {
        if (!state.character) return state
        return {
          character: {
            ...state.character,
            tempHitPoints: 0,
          }
        }
      }),

    // NEW: Damage character
    takeDamage: (amount, damageType = '') =>
      set((state) => {
        if (!state.character) return state
        
        let remainingDamage = amount
        let tempHP = state.character.tempHitPoints || 0
        
        // Temp HP absorbs damage first
        if (tempHP > 0) {
          if (tempHP >= remainingDamage) {
            tempHP -= remainingDamage
            remainingDamage = 0
          } else {
            remainingDamage -= tempHP
            tempHP = 0
          }
        }
        
        const newHP = Math.max(0, state.character.hitPoints - remainingDamage)
        
        return {
          character: {
            ...state.character,
            hitPoints: newHP,
            tempHitPoints: tempHP,
          }
        }
      }),

    // NEW: Heal character
    heal: (amount) =>
      set((state) => {
        if (!state.character) return state
        const newHP = Math.min(state.character.maxHitPoints, state.character.hitPoints + amount)
        return {
          character: {
            ...state.character,
            hitPoints: newHP,
          }
        }
      }),

    rollLevelUpHP: () => {
      const state = get()
      if (!state.character) return null
      const currentLevel = state.character.level || 1
      const newLevel = currentLevel + 1
      if (newLevel > 20) return { error: 'Maximum level is 20' }
      const hitDie = classHitDice[state.character.class] || 8
      const conMod = state.character.modifiers?.con || getModifier(state.character.abilities?.con || 10)
      let hpGain = 0, rollResult = ''
      
      if (newLevel === 1) {
        hpGain = hitDie + conMod
        rollResult = `Max (${hitDie}) + ${conMod >= 0 ? '+' : ''}${conMod} CON`
      } else {
        const roll = rollDie(hitDie)
        hpGain = Math.max(1, roll + conMod)
        rollResult = `1d${hitDie}=${roll} + ${conMod >= 0 ? '+' : ''}${conMod} CON`
      }
      
      const hpHistory = state.character.hpHistory || []
      const newHpHistory = [...hpHistory, { 
        level: newLevel, 
        roll: rollResult, 
        gain: hpGain, 
        total: (state.character.maxHitPoints || 0) + hpGain, 
        timestamp: Date.now() 
      }]
      
      set((prev) => ({ 
        rollHistory: [...(prev.rollHistory || []), { 
          type: 'level-up-hp', 
          level: newLevel, 
          hitDie: `1d${hitDie}`, 
          conMod, 
          result: `${hpGain} HP gained (${rollResult})`, 
          timestamp: Date.now() 
        }], 
        character: prev.character ? { 
          ...prev.character, 
          level: newLevel, 
          hitPoints: (prev.character.maxHitPoints || 0) + hpGain, 
          maxHitPoints: (prev.character.maxHitPoints || 0) + hpGain, 
          hpHistory: newHpHistory 
        } : null 
      }))
      
      return { level: newLevel, gain: hpGain, result: rollResult }
    },

    validatePointBuy: (abilities) => isValidPointBuy(abilities),
    getPointBuyCost: (abilities) => getPointBuyCost(abilities),
    loadCharacter: (id) => set((state) => ({ character: state.characters.find((c) => c.id === id) || null })),
    deleteCharacter: (id) => set((state) => ({ characters: state.characters.filter((c) => c.id !== id), character: state.character?.id === id ? null : state.character })),
    addSkillProficiency: (skill) => set((state) => { if (!state.character) return state; if (state.character.skillProficiencies.includes(skill)) return state; const updated = { ...state.character, skillProficiencies: [...state.character.skillProficiencies, skill] }; return { character: get().calculateDerivedStats(updated) } }),
    setArmor: (armorType, hasShield = false) => set((state) => { if (!state.character) return state; const updated = { ...state.character, armorType, hasShield }; return { character: get().calculateDerivedStats(updated) } }),
    clearRollHistory: () => set({ rollHistory: [] }),
    clearValidationErrors: () => set({ validationErrors: [] }),
  
    rollAbilityScores: () =>
      set((state) => {
        if (!state.character) return state
        const scores = generateAbilityScores()
        const abilities = {}
        const rollBreakdowns = {}
        scores.forEach(result => {
          abilities[result.ability] = result.score
          rollBreakdowns[result.ability] = result.breakdown
        })
        const rollResults = scores.map(r => ({ ability: r.ability, result: r.breakdown, timestamp: Date.now() }))
        const updated = { 
          ...state.character, 
          baseAbilities: { ...abilities },
          abilities: { ...abilities },
          statMethod: 'roll', 
          activeStatTab: 'roll' 
        }
        return {
          character: get().calculateDerivedStats(updated),
          rollBreakdowns,
          rollHistory: [...(state.rollHistory || []), ...rollResults],
        }
      }),})
)


