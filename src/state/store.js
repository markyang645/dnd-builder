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
  roll4d6DropLowest,
  isValidPointBuy,
  pointBuyCosts,
  pointBuyTotal,
} from './data/dndRules'

const genId = () => Math.random().toString(36).slice(2)

export const useCharacterStore = create(
  persist(
    (set, get) => ({
      character: null,
      characters: [],

      // Create new character with D&D 5e defaults
      createCharacter: (name, statMethod = 'standard') =>
        set((state) => {
          let abilities = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }
          
          // Set abilities based on stat generation method
          if (statMethod === 'standard') {
            abilities = { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 }
          } else if (statMethod === 'roll') {
            abilities = {
              str: roll4d6DropLowest(),
              dex: roll4d6DropLowest(),
              con: roll4d6DropLowest(),
              int: roll4d6DropLowest(),
              wis: roll4d6DropLowest(),
              cha: roll4d6DropLowest(),
            }
          }
          // point-buy starts at default 10s (user allocates)

          const newCharacter = {
            id: genId(),
            name: name || 'New Character',
            // Identity
            race: '',
            subrace: '',
            class: '',
            subclass: '',
            background: '',
            level: 1,
            alignment: '',
            // Physical
            age: '',
            gender: '',
            height: '',
            weight: '',
            eyes: '',
            hair: '',
            hairStyle: '',
            skin: '',
            favoriteColor: '',
            // Abilities (base, before racial ASI)
            abilities: abilities,
            // Calculated Stats (auto-updated)
            modifiers: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
            savingThrows: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
            skillProficiencies: [],
            proficiencyBonus: 2,
            hitPoints: 0,
            maxHitPoints: 0,
            armorClass: 10,
            speed: 30,
            initiative: 0,
            // Flavor
            personalityTraits: '',
            ideals: '',
            bonds: '',
            flaws: '',
            backstory: '',
            // Equipment
            armorType: 'none',
            hasShield: false,
            weapons: [],
            equipment: [],
            // Meta
            statMethod: statMethod,
            createdAt: Date.now(),
            updatedAt: Date.now(),
          }
          
          return {
            character: newCharacter,
            characters: [...state.characters, newCharacter],
          }
        }),

      // Update any character field
      updateCharacter: (key, value) =>
        set((state) => {
          if (!state.character) return state
          
          const updated = {
            ...state.character,
            [key]: value,
            updatedAt: Date.now(),
          }
          
          // Auto-calculate derived stats when relevant fields change
          if (['race', 'class', 'level', 'abilities', 'armorType', 'hasShield'].includes(key)) {
            return {
              character: get().calculateDerivedStats(updated),
            }
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
            abilities: {
              ...state.character.abilities,
              [ability]: Math.max(1, Math.min(20, numValue)),
            },
            updatedAt: Date.now(),
          }
          
          return {
            character: get().calculateDerivedStats(updated),
          }
        }),

      // Calculate all derived stats (HP, AC, modifiers, etc.)
      calculateDerivedStats: (char) => {
        if (!char) return null
        
        // Calculate ability modifiers
        const modifiers = {}
        Object.entries(char.abilities).forEach(([ability, score]) => {
          modifiers[ability] = getModifier(score)
        })
        
        // Apply racial ASI
        if (char.race && racialASI[char.race]) {
          Object.entries(racialASI[char.race]).forEach(([ability, bonus]) => {
            const baseScore = char.abilities[ability] || 10
            modifiers[ability] = getModifier(baseScore + bonus)
          })
        }
        
        // Proficiency bonus
        const profBonus = getProficiencyBonus(char.level || 1)
        
        // Saving throws (proficient = ability mod + prof bonus)
        const savingThrows = {}
        const proficientSaves = char.class ? classSavingThrows[char.class] || [] : []
        Object.entries(modifiers).forEach(([ability, mod]) => {
          savingThrows[ability] = proficientSaves.includes(ability) ? mod + profBonus : mod
        })
        
        // Hit Points
        const conMod = modifiers.con || 0
        const hp = calculateHP(char.level || 1, char.class || 'fighter', conMod)
        
        // Armor Class
        const dexMod = modifiers.dex || 0
        const ac = calculateAC(char.armorType || 'none', dexMod, char.hasShield || false)
        
        // Speed
        const speed = char.race ? racialSpeed[char.race] || 30 : 30
        
        // Initiative (DEX modifier)
        const initiative = dexMod
        
        return {
          ...char,
          modifiers,
          savingThrows,
          proficiencyBonus: profBonus,
          hitPoints: hp,
          maxHitPoints: hp,
          armorClass: ac,
          speed,
          initiative,
        }
      },

      // Set stat generation method
      setStatMethod: (method) =>
        set((state) => {
          if (!state.character) return state
          
          let abilities = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }
          
          if (method === 'standard') {
            abilities = { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 }
          } else if (method === 'roll') {
            abilities = {
              str: roll4d6DropLowest(),
              dex: roll4d6DropLowest(),
              con: roll4d6DropLowest(),
              int: roll4d6DropLowest(),
              wis: roll4d6DropLowest(),
              cha: roll4d6DropLowest(),
            }
          }
          // point-buy keeps 10s (user allocates)
          
          const updated = {
            ...state.character,
            abilities,
            statMethod: method,
          }
          
          return {
            character: get().calculateDerivedStats(updated),
          }
        }),

      // Validate point buy
      validatePointBuy: (abilities) => {
        return isValidPointBuy(abilities)
      },

      // Get point buy cost
      getPointBuyCost: (abilities) => {
        let total = 0
        Object.values(abilities).forEach(score => {
          total += pointBuyCosts[score] || 0
        })
        return total
      },

      // Load character by ID
      loadCharacter: (id) =>
        set((state) => ({
          character: state.characters.find((c) => c.id === id) || null,
        })),

      // Delete character
      deleteCharacter: (id) =>
        set((state) => ({
          characters: state.characters.filter((c) => c.id !== id),
          character: state.character?.id === id ? null : state.character,
        })),

      // Add skill proficiency
      addSkillProficiency: (skill) =>
        set((state) => {
          if (!state.character) return state
          if (state.character.skillProficiencies.includes(skill)) return state
          
          const updated = {
            ...state.character,
            skillProficiencies: [...state.character.skillProficiencies, skill],
          }
          
          return {
            character: get().calculateDerivedStats(updated),
          }
        }),

      // Set armor
      setArmor: (armorType, hasShield = false) =>
        set((state) => {
          if (!state.character) return state
          
          const updated = {
            ...state.character,
            armorType,
            hasShield,
          }
          
          return {
            character: get().calculateDerivedStats(updated),
          }
        }),
    }),
    { name: 'dnd-character-store' }
  )
)