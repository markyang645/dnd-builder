import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { 
  racialASI, 
  classSavingThrows, 
  classHitDice, 
  getProficiencyBonus, 
  backgroundSkills,
  racialSpeed,
  getModifier,
  calculateAC,
  isValidPointBuy,
  pointBuyCosts,
  pointBuyTotal,
} from '../data/dndRules'
import {
  roll4d6DropLowest,
  rollD20,
  rollDamage,
  rollInitiative,
  rollSkillCheck,
  rollSavingThrow,
  rollAttack,
  rollDeathSave,
  rollDie,
  generateAbilityScores,
  formatRoll,
} from '../lib/dice'

const genId = () => Math.random().toString(36).slice(2)

export const useCharacterStore = create(
  persist(
    (set, get) => ({
      character: null,
      characters: [],
      rollHistory: [],

      // Create new character
      createCharacter: (name, statMethod = 'standard') =>
        set((state) => {
          let abilities = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }
          let rollResults = []
          
          if (statMethod === 'standard') {
            abilities = { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 }
          } else if (statMethod === 'roll') {
            const scores = generateAbilityScores()
            abilities = { str: scores[0], dex: scores[1], con: scores[2], int: scores[3], wis: scores[4], cha: scores[5] }
            rollResults = scores.map((score, i) => ({
              ability: ['str','dex','con','int','wis','cha'][i],
              result: `4d6 drop lowest = ${score}`,
              timestamp: Date.now(),
            }))
          }

          const newCharacter = {
            id: genId(),
            name: name || 'New Character',
            race: '', subrace: '', class: '', subclass: '', background: '',
            level: 1, alignment: '',
            age: '', gender: '', height: '', weight: '',
            eyes: '', hair: '', hairStyle: '', skin: '', favoriteColor: '',
            abilities,
            modifiers: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
            savingThrows: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
            skillProficiencies: [],
            proficiencyBonus: 2,
            hitPoints: 0,
            maxHitPoints: 0,
            hpHistory: [],
            armorClass: 10,
            speed: 30,
            initiative: 0,
            personalityTraits: '', ideals: '', bonds: '', flaws: '', backstory: '',
            armorType: 'none', hasShield: false, weapons: [], equipment: [],
            statMethod,
            createdAt: Date.now(),
            updatedAt: Date.now(),
          }
          
          // Calculate initial HP at level 1
          const calculated = get().calculateDerivedStats(newCharacter)
          
          return {
            character: calculated,
            characters: [...state.characters, calculated],
            rollHistory: rollResults.length ? [...state.rollHistory, ...rollResults] : state.rollHistory,
          }
        }),

      updateCharacter: (key, value) =>
        set((state) => {
          if (!state.character) return state
          const updated = { ...state.character, [key]: value, updatedAt: Date.now() }
          if (['race', 'class', 'level', 'abilities', 'armorType', 'hasShield'].includes(key)) {
            return { character: get().calculateDerivedStats(updated) }
          }
          return { character: updated }
        }),

      updateAbility: (ability, value) =>
        set((state) => {
          if (!state.character) return state
          const numValue = parseInt(value) || 10
          const updated = {
            ...state.character,
            abilities: { ...state.character.abilities, [ability]: Math.max(1, Math.min(20, numValue)) },
            updatedAt: Date.now(),
          }
          return { character: get().calculateDerivedStats(updated) }
        }),

      calculateDerivedStats: (char) => {
        if (!char) return null
        
        const modifiers = {}
        Object.entries(char.abilities).forEach(([ability, score]) => {
          modifiers[ability] = getModifier(score)
        })
        
        if (char.race && racialASI[char.race]) {
          Object.entries(racialASI[char.race]).forEach(([ability, bonus]) => {
            const baseScore = char.abilities[ability] || 10
            modifiers[ability] = getModifier(baseScore + bonus)
          })
        }
        
        const profBonus = getProficiencyBonus(char.level || 1)
        const savingThrows = {}
        const proficientSaves = char.class ? classSavingThrows[char.class] || [] : []
        Object.entries(modifiers).forEach(([ability, mod]) => {
          savingThrows[ability] = proficientSaves.includes(ability) ? mod + profBonus : mod
        })
        
        // Calculate HP from history or initialize at level 1
        let hitPoints = char.hitPoints || 0
        let maxHitPoints = char.maxHitPoints || 0
        let hpHistory = char.hpHistory || []
        
        if (hpHistory.length === 0 && char.class) {
          // First time calculation - level 1 HP
          const hitDie = classHitDice[char.class] || 8
          const conMod = modifiers.con || 0
          const level1HP = hitDie + conMod
          hitPoints = level1HP
          maxHitPoints = level1HP
          hpHistory = [{
            level: 1,
            roll: `Max (${hitDie}) + ${conMod >= 0 ? '+' : ''}${conMod} CON`,
            gain: level1HP,
            total: level1HP,
            timestamp: Date.now(),
          }]
        }
        
        const dexMod = modifiers.dex || 0
        const ac = calculateAC(char.armorType || 'none', dexMod, char.hasShield || false)
        const speed = char.race ? racialSpeed[char.race] || 30 : 30
        const initiative = dexMod
        
        return {
          ...char,
          modifiers,
          savingThrows,
          proficiencyBonus: profBonus,
          hitPoints,
          maxHitPoints,
          hpHistory,
          armorClass: ac,
          speed,
          initiative,
        }
      },

      setStatMethod: (method) =>
        set((state) => {
          if (!state.character) return state
          let abilities = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }
          let rollResults = []
          
          if (method === 'standard') {
            abilities = { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 }
          } else if (method === 'roll') {
            const scores = generateAbilityScores()
            abilities = { str: scores[0], dex: scores[1], con: scores[2], int: scores[3], wis: scores[4], cha: scores[5] }
            rollResults = scores.map((score, i) => ({
              ability: ['str','dex','con','int','wis','cha'][i],
              result: `4d6 drop lowest = ${score}`,
              timestamp: Date.now(),
            }))
          }
          
          const updated = { ...state.character, abilities, statMethod: method }
          return {
            character: get().calculateDerivedStats(updated),
            rollHistory: rollResults.length ? [...(state.rollHistory || []), ...rollResults] : state.rollHistory,
          }
        }),

      rollAbilityScores: () =>
        set((state) => {
          if (!state.character) return state
          const scores = generateAbilityScores()
          const abilities = { str: scores[0], dex: scores[1], con: scores[2], int: scores[3], wis: scores[4], cha: scores[5] }
          const rollResults = scores.map((score, i) => ({
            ability: ['str','dex','con','int','wis','cha'][i],
            result: `4d6 drop lowest = ${score}`,
            timestamp: Date.now(),
          }))
          const updated = { ...state.character, abilities, statMethod: 'roll' }
          return {
            character: get().calculateDerivedStats(updated),
            rollHistory: [...(state.rollHistory || []), ...rollResults],
          }
        }),

      rollInitiative: () => {
        const state = get()
        if (!state.character) return null
        const dexMod = state.character.modifiers?.dex || getModifier(state.character.abilities?.dex || 10)
        const result = rollD20(dexMod)
        const rollEntry = {
          type: 'initiative',
          result: formatRoll(result),
          total: result.total,
          timestamp: Date.now(),
        }
        set((prev) => ({ rollHistory: [...(prev.rollHistory || []), rollEntry] }))
        return result
      },

      rollSkillCheck: (skillName, abilityKey) => {
        const state = get()
        if (!state.character) return null
        const abilityMod = state.character.modifiers?.[abilityKey] || getModifier(state.character.abilities?.[abilityKey] || 10)
        const profBonus = state.character.proficiencyBonus || 2
        const proficient = state.character.skillProficiencies?.includes(skillName)
        const result = rollD20(abilityMod + (proficient ? profBonus : 0))
        const rollEntry = {
          type: 'skill',
          skill: skillName,
          ability: abilityKey,
          result: formatRoll(result),
          total: result.total,
          proficient,
          timestamp: Date.now(),
        }
        set((prev) => ({ rollHistory: [...(prev.rollHistory || []), rollEntry] }))
        return result
      },

      rollSavingThrow: (abilityKey) => {
        const state = get()
        if (!state.character) return null
        const abilityMod = state.character.modifiers?.[abilityKey] || getModifier(state.character.abilities?.[abilityKey] || 10)
        const profBonus = state.character.proficiencyBonus || 2
        const proficientSaves = state.character.class ? classSavingThrows[state.character.class] || [] : []
        const proficient = proficientSaves.includes(abilityKey)
        const result = rollD20(abilityMod + (proficient ? profBonus : 0))
        const rollEntry = {
          type: 'save',
          ability: abilityKey,
          result: formatRoll(result),
          total: result.total,
          proficient,
          timestamp: Date.now(),
        }
        set((prev) => ({ rollHistory: [...(prev.rollHistory || []), rollEntry] }))
        return result
      },

      rollAttack: (attackBonus, { advantage = false, disadvantage = false } = {}) => {
        const state = get()
        if (!state.character) return null
        const result = rollD20(attackBonus, { advantage, disadvantage })
        const rollEntry = {
          type: 'attack',
          result: formatRoll(result),
          total: result.total,
          advantage,
          disadvantage,
          natural20: result.roll === 20,
          natural1: result.roll === 1,
          timestamp: Date.now(),
        }
        set((prev) => ({ rollHistory: [...(prev.rollHistory || []), rollEntry] }))
        return result
      },

      rollDamage: (diceNotation, modifier = 0) => {
        const state = get()
        if (!state.character) return null
        const result = rollDamage(diceNotation, modifier)
        const rollEntry = {
          type: 'damage',
          dice: diceNotation,
          modifier,
          result: `${result.total} (${result.rolls.join(', ')}${modifier ? ` + ${modifier}` : ''})`,
          total: result.total,
          timestamp: Date.now(),
        }
        set((prev) => ({ rollHistory: [...(prev.rollHistory || []), rollEntry] }))
        return result
      },

      rollDeathSave: () => {
        const result = rollD20(0)
        const rollEntry = {
          type: 'death-save',
          result: result.roll,
          success: result.roll >= 10,
          natural20: result.roll === 20,
          natural1: result.roll === 1,
          timestamp: Date.now(),
        }
        set((prev) => ({ rollHistory: [...(prev.rollHistory || []), rollEntry] }))
        return result
      },

      rollLevelUpHP: () => {
        const state = get()
        if (!state.character) return null
        
        const currentLevel = state.character.level || 1
        const newLevel = currentLevel + 1
        
        if (newLevel > 20) {
          return { error: 'Maximum level is 20' }
        }
        
        const hitDie = classHitDice[state.character.class] || 8
        const conMod = state.character.modifiers?.con || getModifier(state.character.abilities?.con || 10)
        
        let hpGain = 0
        let rollResult = ''
        
        if (newLevel === 1) {
          hpGain = hitDie + conMod
          rollResult = `Max (${hitDie}) + ${conMod >= 0 ? '+' : ''}${conMod} CON`
        } else {
          const roll = rollDie(hitDie)
          hpGain = Math.max(1, roll + conMod)
          rollResult = `1d${hitDie}=${roll} + ${conMod >= 0 ? '+' : ''}${conMod} CON`
        }
        
        const rollEntry = {
          type: 'level-up-hp',
          level: newLevel,
          hitDie: `1d${hitDie}`,
          conMod,
          result: `${hpGain} HP gained (${rollResult})`,
          timestamp: Date.now(),
        }
        
        const hpHistory = state.character.hpHistory || []
        const newHpHistory = [...hpHistory, {
          level: newLevel,
          roll: rollResult,
          gain: hpGain,
          total: (state.character.maxHitPoints || 0) + hpGain,
          timestamp: Date.now(),
        }]
        
        set((prev) => ({ 
          rollHistory: [...(prev.rollHistory || []), rollEntry],
          character: prev.character ? {
            ...prev.character,
            level: newLevel,
            hitPoints: (prev.character.maxHitPoints || 0) + hpGain,
            maxHitPoints: (prev.character.maxHitPoints || 0) + hpGain,
            hpHistory: newHpHistory,
          } : null,
        }))
        
        return { level: newLevel, gain: hpGain, result: rollResult }
      },

      validatePointBuy: (abilities) => isValidPointBuy(abilities),

      getPointBuyCost: (abilities) => {
        let total = 0
        Object.values(abilities).forEach(score => { total += pointBuyCosts[score] || 0 })
        return total
      },

      loadCharacter: (id) => set((state) => ({ character: state.characters.find((c) => c.id === id) || null })),

      deleteCharacter: (id) => set((state) => ({
        characters: state.characters.filter((c) => c.id !== id),
        character: state.character?.id === id ? null : state.character,
      })),

      addSkillProficiency: (skill) => set((state) => {
        if (!state.character) return state
        if (state.character.skillProficiencies.includes(skill)) return state
        const updated = { ...state.character, skillProficiencies: [...state.character.skillProficiencies, skill] }
        return { character: get().calculateDerivedStats(updated) }
      }),

      setArmor: (armorType, hasShield = false) => set((state) => {
        if (!state.character) return state
        const updated = { ...state.character, armorType, hasShield }
        return { character: get().calculateDerivedStats(updated) }
      }),

      clearRollHistory: () => set({ rollHistory: [] }),
    }),
    { name: 'dnd-character-store' }
  )
)