// D&D 5e Class Data - Generated from dnd5e_class_levels.csv
export const classData = {
  barbarian: {
    name: 'Barbarian',
    hitDie: 12,
    primaryAbility: 'Strength',
    savingThrows: ['Strength', 'Constitution'],
    armorProficiencies: ['Light', 'Medium', 'Shields'],
    weaponProficiencies: ['Simple', 'Martial'],
    skillChoices: 2,
    skillsFrom: ['Animal Handling', 'Athletics', 'Intimidation', 'Nature', 'Perception', 'Survival'],
    description: 'A fierce warrior of primitive background who can enter a battle rage',
    levels: {
      1: { features: ['Rage (2x/day, +2 damage)', 'Unarmored Defense'], rages: 2, rageDamage: 2 },
      2: { features: ['Reckless Attack', 'Danger Sense'], rages: 2, rageDamage: 2 },
      3: { features: ['Primal Path'], rages: 3, rageDamage: 2 },
      4: { features: ['Ability Score Improvement'], rages: 3, rageDamage: 2 },
      5: { features: ['Extra Attack', 'Fast Movement'], rages: 3, rageDamage: 2 },
      6: { features: ['Path Feature'], rages: 4, rageDamage: 2 },
      7: { features: ['Feral Instinct'], rages: 4, rageDamage: 2 },
      8: { features: ['Ability Score Improvement'], rages: 4, rageDamage: 2 },
      9: { features: ['Brutal Critical (1 die)'], rages: 4, rageDamage: 3 },
      10: { features: ['Path Feature'], rages: 4, rageDamage: 3 },
      11: { features: ['Relentless Rage'], rages: 4, rageDamage: 3 },
      12: { features: ['Ability Score Improvement'], rages: 5, rageDamage: 3 },
      13: { features: ['Brutal Critical (2 dice)'], rages: 5, rageDamage: 3 },
      14: { features: ['Path Feature'], rages: 5, rageDamage: 3 },
      15: { features: ['Persistent Rage'], rages: 5, rageDamage: 3 },
      16: { features: ['Ability Score Improvement'], rages: 5, rageDamage: 4 },
      17: { features: ['Brutal Critical (3 dice)'], rages: 6, rageDamage: 4 },
      18: { features: ['Indomitable Might'], rages: 6, rageDamage: 4 },
      19: { features: ['Ability Score Improvement'], rages: 6, rageDamage: 4 },
      20: { features: ['Primal Champion (+4 STR/CON)'], rages: 'Unlimited', rageDamage: 4 },
    },
  },
  fighter: {
    name: 'Fighter',
    hitDie: 10,
    primaryAbility: 'Strength or Dexterity',
    savingThrows: ['Strength', 'Constitution'],
    armorProficiencies: ['All', 'Shields'],
    weaponProficiencies: ['Simple', 'Martial'],
    skillChoices: 2,
    skillsFrom: ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival'],
    description: 'A master of martial combat, skilled with a variety of weapons and armor',
    levels: {
      1: { features: ['Fighting Style', 'Second Wind'], actionSurges: 0, extraAttacks: 0 },
      2: { features: ['Action Surge (1/rest)'], actionSurges: 1, extraAttacks: 0 },
      3: { features: ['Martial Archetype'], actionSurges: 1, extraAttacks: 0 },
      4: { features: ['Ability Score Improvement'], actionSurges: 1, extraAttacks: 0 },
      5: { features: ['Extra Attack'], actionSurges: 1, extraAttacks: 1 },
      6: { features: ['Ability Score Improvement'], actionSurges: 1, extraAttacks: 1 },
      7: { features: ['Archetype Feature'], actionSurges: 1, extraAttacks: 1 },
      8: { features: ['Ability Score Improvement'], actionSurges: 1, extraAttacks: 1 },
      9: { features: ['Indomitable (1/rest)'], actionSurges: 1, extraAttacks: 1 },
      10: { features: ['Archetype Feature'], actionSurges: 1, extraAttacks: 1 },
      11: { features: ['Extra Attack (2)'], actionSurges: 1, extraAttacks: 2 },
      12: { features: ['Ability Score Improvement'], actionSurges: 1, extraAttacks: 2 },
      13: { features: ['Indomitable (2/rest)'], actionSurges: 1, extraAttacks: 2 },
      14: { features: ['Ability Score Improvement'], actionSurges: 1, extraAttacks: 2 },
      15: { features: ['Archetype Feature'], actionSurges: 1, extraAttacks: 2 },
      16: { features: ['Ability Score Improvement'], actionSurges: 1, extraAttacks: 2 },
      17: { features: ['Action Surge (2/rest)', 'Indomitable (3/rest)'], actionSurges: 2, extraAttacks: 2 },
      18: { features: ['Archetype Feature'], actionSurges: 2, extraAttacks: 2 },
      19: { features: ['Ability Score Improvement'], actionSurges: 2, extraAttacks: 2 },
      20: { features: ['Extra Attack (3)'], actionSurges: 2, extraAttacks: 3 },
    },
  },
  // Add other 10 classes similarly...
}

// Subclass data from dnd5e_classes_subclasses.csv
export const subclassData = {
  barbarian: ['Path of the Berserker', 'Path of the Totem Warrior', 'Path of the Ancestral Guardian', 'Path of the Storm Herald', 'Path of the Zealot', 'Path of the Beast', 'Path of Wild Magic', 'Path of the Giant', 'Path of the Battlerager'],
  fighter: ['Champion', 'Battle Master', 'Eldritch Knight', 'Arcane Archer', 'Cavalier', 'Samurai', 'Rune Knight', 'Psi Warrior', 'Echo Knight'],
  // Add all 100+ subclasses...
}

export default classData