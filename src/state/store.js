import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const genId = () => Math.random().toString(36).slice(2)

export const useCharacterStore = create(
  persist(
    (set) => ({
      character: null,
      characters: [],

      createCharacter: (name) =>
        set((state) => {
          const newCharacter = {
            id: genId(),
            name: name || 'New Character',
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
            skin: '',
            // Abilities
            abilities: {
              str: 10,
              dex: 10,
              con: 10,
              int: 10,
              wis: 10,
              cha: 10,
            },
            // Flavor
            personalityTraits: '',
            ideals: '',
            bonds: '',
            flaws: '',
            backstory: '',
            // Meta
            createdAt: Date.now(),
            updatedAt: Date.now(),
          }
          return {
            character: newCharacter,
            characters: [...state.characters, newCharacter],
          }
        }),

      updateCharacter: (key, value) =>
        set((state) => ({
          character: state.character
            ? {
                ...state.character,
                [key]: value,
                updatedAt: Date.now(),
              }
            : null,
        })),

      updateAbility: (ability, value) =>
        set((state) => ({
          character: state.character
            ? {
                ...state.character,
                abilities: {
                  ...state.character.abilities,
                  [ability]: parseInt(value) || 10,
                },
                updatedAt: Date.now(),
              }
            : null,
        })),

      loadCharacter: (id) =>
        set((state) => ({
          character: state.characters.find((c) => c.id === id) || null,
        })),

      deleteCharacter: (id) =>
        set((state) => ({
          characters: state.characters.filter((c) => c.id !== id),
          character: state.character?.id === id ? null : state.character,
        })),
    }),
    { name: 'dnd-character-store' }
  )
)