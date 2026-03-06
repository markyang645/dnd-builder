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
  calculateHP,
  calculateAC,
  standardArray,
  isValidPointBuy,
  pointBuyCosts,
  pointBuyTotal,
} from '../data/dndRules'
import {
  roll4d6DropLowest,
  rollD20,
  rollDamage,
  rollHitPoints,
  rollInitiative,
  rollSkillCheck,
  rollSavingThrow,
  rollAttack,
  rollDeathSave,
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

      // Create new character with D&D 5e defaults
      createCharacter: (name, statMethod = 'standard') =>
        set((state) => {
          let abilities = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }
          let rollResults = []
          
          if (statMethod === 'standard') {
            abilities = { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 }
          } else if (statMethod === 'roll') {
            const scores = generateAbilityScores()
            abilities = {
              str: scores[0], dex: scores[1], con: scores[2],
              int: scores[3], wis: scores[4], cha: scores[5],
            }
            rollResults = scores.map((score, i) => ({
              ability: ['str','dex','con','int','wis','cha'][i],
              result: `4d6 drop lowest = ${score}`,
              timestamp: Date.now(),
            }))
          }
          // point-buy starts at default 10s

          const newCharacter = {
            id: genId(),
            name: name || 'New Character',
            // Identity
            race: '', subrace: '', class: '', subclass: '', background: '',
            level: 1, alignment: '',
            // Physical
            age: '', gender: '', height: '', weight: '',
            eyes: '', hair: '', hairStyle: '', skin: '', favoriteColor: '',
            // Abilities (base, before racial ASI)
            abilities,
            // Calculated Stats
            modifiers: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
            savingThrows: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
            skillProficiencies: [],
            proficiencyBonus: 2,
            hitPoints: 0, maxHitPoints: 0,
            armorClass: 10, speed: 30, initiative: 0,
            // Flavor
            personalityTraits: '', ideals: '', bonds: '', flaws: '', backstory: '',
            // Equipment
            armorType: 'none', hasShield: false, weapons: [], equipment: [],
            // Meta
            statMethod,
            createdAt: Date.now(),
            updatedAt: Date.now(),
          }
          
          return {
            character: newCharacter,
            characters: [...state.characters, newCharacter],
            rollHistory: rollResults.length ? [...state.rollHistory, ...rollResults] : state.rollHistory,
          }
        }),

      // Update any character field
      updateCharacter: (key, value) =>
        set((state) => {
          if (!state.character) return state
          const updated = { ...state.character, [key]: value, updatedAt: Date.now() }
          if (['race', 'class', 'level', 'abilities', 'armorType', 'hasShield'].includes(key)) {
            return { character: get().calculateDerivedStats(updated) }
          }
          return { character: updated }
        }),

      // Update ability score
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

      // Calculate all derived stats
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
        const conMod = modifiers.con || 0
        const hp = calculateHP(char.level || 1, char.class || 'fighter', conMod)
        const dexMod = modifiers.dex || 0
        const ac = calculateAC(char.armorType || 'none', dexMod, char.hasShield || false)
        const speed = char.race ? racialSpeed[char.race] || 30 : 30
        const initiative = dexMod
        return { ...char, modifiers, savingThrows, proficiencyBonus: profBonus, hitPoints: hp, maxHitPoints: hp, armorClass: ac, speed, initiative }
      },

      // Set stat generation method
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

      // Roll new ability scores (4d6 drop lowest)
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

      // Roll initiative
      rollInitiative: () => {
        const state = get()
        if (!state.character) return null
        const dexMod = state.character.modifiers?.dex || getModifier(state.character.abilities?.dex || 10)
        const result = rollInitiative(dexMod)
        const rollEntry = {
          type: 'initiative',
          result: formatRoll(result),
          total: result.total,
          timestamp: Date.now(),
        }
        set((prev) => ({ rollHistory: [...(prev.rollHistory || []), rollEntry] }))
        return result
      },

      // Roll skill check
      rollSkillCheck: (skillName, abilityKey) => {
        const state = get()
        if (!state.character) return null
        const abilityMod = state.character.modifiers?.[abilityKey] || getModifier(state.character.abilities?.[abilityKey] || 10)
        const profBonus = state.character.proficiencyBonus || 2
        const proficient = state.character.skillProficiencies?.includes(skillName)
        const result = rollSkillCheck(abilityMod, profBonus, proficient)
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

      // Roll saving throw
      rollSavingThrow: (abilityKey) => {
        const state = get()
        if (!state.character) return null
        const abilityMod = state.character.modifiers?.[abilityKey] || getModifier(state.character.abilities?.[abilityKey] || 10)
        const profBonus = state.character.proficiencyBonus || 2
        const proficientSaves = state.character.class ? classSavingThrows[state.character.class] || [] : []
        const proficient = proficientSaves.includes(abilityKey)
        const result = rollSavingThrow(abilityMod, profBonus, proficient)
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

      // Roll attack
      rollAttack: (attackBonus, { advantage = false, disadvantage = false } = {}) => {
        const state = get()
        if (!state.character) return null
        const result = rollAttack(attackBonus, { advantage, disadvantage })
        const rollEntry = {
          type: 'attack',
          result: formatRoll(result),
          total: result.total,
          advantage,
          disadvantage,
          natural20: result.natural20,
          natural1: result.natural1,
          timestamp: Date.now(),
        }
        set((prev) => ({ rollHistory: [...(prev.rollHistory || []), rollEntry] }))
        return result
      },

      // Roll damage
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

      // Roll death save
      rollDeathSave: () => {
        const result = rollDeathSave()
        const rollEntry = {
          type: 'death-save',
          result: result.roll,
          success: result.success,
          natural20: result.natural20,
          natural1: result.natural1,
          timestamp: Date.now(),
        }
        set((prev) => ({ rollHistory: [...(prev.rollHistory || []), rollEntry] }))
        return result
      },

      // Roll HP on level up
      rollLevelUpHP: () => {
        const state = get()
        if (!state.character) return null
        const hitDie = classHitDice[state.character.class] || 8
        const conMod = state.character.modifiers?.con || getModifier(state.character.abilities?.con || 10)
        const hpGain = rollHitPoints(hitDie, conMod, false)
        const rollEntry = {
          type: 'level-up-hp',
          hitDie: `1d${hitDie}`,
          conMod,
          result: `${hpGain} HP gained`,
          timestamp: Date.now(),
        }
        set((prev) => ({ 
          rollHistory: [...(prev.rollHistory || []), rollEntry],
          character: prev.character ? {
            ...prev.character,
            hitPoints: (prev.character.hitPoints || 0) + hpGain,
            maxHitPoints: (prev.character.maxHitPoints || 0) + hpGain,
          } : null,
        }))
        return hpGain
      },

      // Validate point buy
      validatePointBuy: (abilities) => isValidPointBuy(abilities),

      // Get point buy cost
      getPointBuyCost: (abilities) => {
        let total = 0
        Object.values(abilities).forEach(score => { total += pointBuyCosts[score] || 0 })
        return total
      },

      // Load character by ID
      loadCharacter: (id) => set((state) => ({ character: state.characters.find((c) => c.id === id) || null })),

      // Delete character
      deleteCharacter: (id) => set((state) => ({
        characters: state.characters.filter((c) => c.id !== id),
        character: state.character?.id === id ? null : state.character,
      })),

      // Add skill proficiency
      addSkillProficiency: (skill) => set((state) => {
        if (!state.character) return state
        if (state.character.skillProficiencies.includes(skill)) return state
        const updated = { ...state.character, skillProficiencies: [...state.character.skillProficiencies, skill] }
        return { character: get().calculateDerivedStats(updated) }
      }),

      // Set armor
      setArmor: (armorType, hasShield = false) => set((state) => {
        if (!state.character) return state
        const updated = { ...state.character, armorType, hasShield }
        return { character: get().calculateDerivedStats(updated) }
      }),

      // Clear roll history
      clearRollHistory: () => set({ rollHistory: [] }),
    }),
    { name: 'dnd-character-store' }
  )
)