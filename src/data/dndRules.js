// D&D 5e Official Rules - Complete with Point Buy

export const abilityScores = ['str', 'dex', 'con', 'int', 'wis', 'cha']

export const abilityLabels = {
  str: 'Strength', dex: 'Dexterity', con: 'Constitution',
  int: 'Intelligence', wis: 'Wisdom', cha: 'Charisma',
}

// Ability Score Limits
export const ABILITY_MIN = 1
export const ABILITY_MAX = 20

// Point Buy Rules (PHB p.13)
export const pointBuyCosts = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 }
export const pointBuyTotal = 27
export const pointBuyMin = 8
export const pointBuyMax = 15

// Standard Array
export const standardArray = [15, 14, 13, 12, 10, 8]

// ASI Levels
export const asiLevels = [4, 8, 12, 16, 19]

// Proficiency Bonus
export const getProficiencyBonus = (level) => {
  if (level >= 17) return 6
  if (level >= 13) return 5
  if (level >= 9) return 4
  if (level >= 5) return 3
  return 2
}

// Racial ASI
export const racialASI = {
  human: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
  elf: { dex: 2 }, dwarf: { con: 2 }, halfling: { dex: 2 },
  dragonborn: { str: 2, cha: 1 }, gnome: { int: 2 },
  'half-elf': { cha: 2 }, 'half-orc': { str: 2, con: 1 },
  tiefling: { cha: 2, int: 1 },
}

// Class Saving Throws
export const classSavingThrows = {
  barbarian: ['str','con'], bard: ['dex','cha'], cleric: ['wis','cha'],
  druid: ['int','wis'], fighter: ['str','con'], monk: ['str','dex'],
  paladin: ['wis','cha'], ranger: ['str','dex'], rogue: ['dex','int'],
  sorcerer: ['con','cha'], warlock: ['wis','cha'], wizard: ['int','wis'],
}

// Class Hit Dice
export const classHitDice = {
  barbarian: 12, bard: 8, cleric: 8, druid: 8,
  fighter: 10, monk: 8, paladin: 10, ranger: 10,
  rogue: 8, sorcerer: 6, warlock: 8, wizard: 6,
}

// Class Primary Abilities
export const classPrimaryAbility = {
  barbarian: 'str', bard: 'cha', cleric: 'wis', druid: 'wis',
  fighter: 'str', monk: 'dex', paladin: 'cha', ranger: 'dex',
  rogue: 'dex', sorcerer: 'cha', warlock: 'cha', wizard: 'int',
}

// Speed by Race
export const racialSpeed = {
  human: 30, elf: 30, dwarf: 25, halfling: 25,
  dragonborn: 30, gnome: 25, 'half-elf': 30, 'half-orc': 30, tiefling: 30,
}

// Helper Functions
export const getModifier = (score) => Math.floor((score - 10) / 2)

export const calculateAC = (armorType, dexMod, shield = false) => {
  const acTable = { 'none': 10 + dexMod, 'light': 11 + dexMod, 'medium': 12 + Math.min(dexMod, 2), 'heavy': 16 }
  let ac = acTable[armorType] || acTable['none']
  if (shield) ac += 2
  return ac
}

export const calculateSpellSaveDC = (classType, abilities, proficiencyBonus) => {
  const primaryAbility = classPrimaryAbility[classType] || 'wis'
  return 8 + proficiencyBonus + getModifier(abilities[primaryAbility] || 10)
}

export const calculateAttackBonus = (classType, abilities, proficiencyBonus) => {
  const primaryAbility = classPrimaryAbility[classType] || 'str'
  return proficiencyBonus + getModifier(abilities[primaryAbility] || 10)
}

export const calculateCarryingCapacity = (strengthScore) => strengthScore * 15

// Point Buy Validation
export const getPointBuyCost = (abilities) => {
  return Object.values(abilities).reduce((total, score) => total + (pointBuyCosts[score] || 0), 0)
}

export const isValidPointBuy = (abilities) => {
  const cost = getPointBuyCost(abilities)
  const allInRange = Object.values(abilities).every(s => s >= pointBuyMin && s <= pointBuyMax)
  return cost <= pointBuyTotal && allInRange
}

export const validateAbilityForPointBuy = (score) => {
  if (score < pointBuyMin) return { valid: false, error: `Minimum is ${pointBuyMin}` }
  if (score > pointBuyMax) return { valid: false, error: `Maximum is ${pointBuyMax}` }
  return { valid: true }
}

// Skills
export const skills = {
  acrobatics: 'dex', animalHandling: 'wis', arcana: 'int', athletics: 'str',
  deception: 'cha', history: 'int', insight: 'wis', intimidation: 'cha',
  investigation: 'int', medicine: 'wis', nature: 'int', perception: 'wis',
  performance: 'cha', persuasion: 'cha', religion: 'int', sleightOfHand: 'dex',
  stealth: 'dex', survival: 'wis',
}

export const backgroundSkills = {
  acolyte: ['insight','religion'], charlatan: ['deception','sleightOfHand'],
  criminal: ['deception','stealth'], entertainer: ['acrobatics','performance'],
  'folk-hero': ['animalHandling','survival'], 'guild-artisan': ['insight','persuasion'],
  hermit: ['medicine','religion'], noble: ['history','persuasion'],
  outlander: ['athletics','survival'], sage: ['arcana','history'],
  sailor: ['athletics','perception'], soldier: ['athletics','intimidation'],
  urchin: ['sleightOfHand','stealth'],
}