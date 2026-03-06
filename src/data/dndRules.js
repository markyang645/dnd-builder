// D&D 5e Official Rules - Complete

export const abilityScores = ['str', 'dex', 'con', 'int', 'wis', 'cha']

export const abilityLabels = {
  str: 'Strength',
  dex: 'Dexterity',
  con: 'Constitution',
  int: 'Intelligence',
  wis: 'Wisdom',
  cha: 'Charisma',
}

// Ability Score Limits
export const ABILITY_MIN = 1
export const ABILITY_MAX = 20
export const ABILITY_MAX_WITH_ASI = 20

// Point Buy Rules
export const pointBuyCosts = {
  8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9,
}
export const pointBuyTotal = 27
export const pointBuyMin = 8
export const pointBuyMax = 15

// Standard Array
export const standardArray = [15, 14, 13, 12, 10, 8]

// ASI Levels (when you get Ability Score Improvement)
export const asiLevels = [4, 8, 12, 16, 19]

// Proficiency Bonus by Level
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
  elf: { dex: 2 },
  dwarf: { con: 2 },
  halfling: { dex: 2 },
  dragonborn: { str: 2, cha: 1 },
  gnome: { int: 2 },
  'half-elf': { cha: 2 },
  'half-orc': { str: 2, con: 1 },
  tiefling: { cha: 2, int: 1 },
}

// Class Saving Throws
export const classSavingThrows = {
  barbarian: ['str', 'con'],
  bard: ['dex', 'cha'],
  cleric: ['wis', 'cha'],
  druid: ['int', 'wis'],
  fighter: ['str', 'con'],
  monk: ['str', 'dex'],
  paladin: ['wis', 'cha'],
  ranger: ['str', 'dex'],
  rogue: ['dex', 'int'],
  sorcerer: ['con', 'cha'],
  warlock: ['wis', 'cha'],
  wizard: ['int', 'wis'],
}

// Class Hit Dice
export const classHitDice = {
  barbarian: 12, bard: 8, cleric: 8, druid: 8,
  fighter: 10, monk: 8, paladin: 10, ranger: 10,
  rogue: 8, sorcerer: 6, warlock: 8, wizard: 6,
}

// Class Primary Abilities
export const classPrimaryAbility = {
  barbarian: 'str',
  bard: 'cha',
  cleric: 'wis',
  druid: 'wis',
  fighter: 'str',
  monk: 'dex',
  paladin: 'cha',
  ranger: 'dex',
  rogue: 'dex',
  sorcerer: 'cha',
  warlock: 'cha',
  wizard: 'int',
}

// Speed by Race
export const racialSpeed = {
  human: 30, elf: 30, dwarf: 25, halfling: 25,
  dragonborn: 30, gnome: 25, 'half-elf': 30, 'half-orc': 30, tiefling: 30,
}

// Armor Class Calculations
export const calculateAC = (armorType, dexMod, shield = false) => {
  const acTable = {
    'none': 10 + dexMod,
    'light': 11 + dexMod,
    'medium': 12 + Math.min(dexMod, 2),
    'heavy': 16,
  }
  let ac = acTable[armorType] || acTable['none']
  if (shield) ac += 2
  return ac
}

// Helper Functions
export const getModifier = (score) => Math.floor((score - 10) / 2)

export const calculateHP = (level, classType, conMod, takeAverage = false) => {
  const hitDie = classHitDice[classType] || 8
  let hp = hitDie + conMod
  if (level > 1) {
    const avgPerLevel = Math.floor(hitDie / 2) + 1
    hp += (level - 1) * (takeAverage ? avgPerLevel : avgPerLevel)
    hp += (level - 1) * conMod
  }
  return Math.max(hp, level)
}

export const calculateSpellSaveDC = (classType, abilities, proficiencyBonus) => {
  const primaryAbility = classPrimaryAbility[classType] || 'wis'
  const abilityMod = getModifier(abilities[primaryAbility] || 10)
  return 8 + proficiencyBonus + abilityMod
}

export const calculateAttackBonus = (classType, abilities, proficiencyBonus, isFinesse = false) => {
  const primaryAbility = classPrimaryAbility[classType] || 'str'
  const abilityMod = getModifier(abilities[primaryAbility] || 10)
  return proficiencyBonus + abilityMod
}

export const calculateCarryingCapacity = (strengthScore) => strengthScore * 15

export const calculatePushDragLift = (strengthScore) => strengthScore * 30

// Validation Functions
export const isValidAbilityScore = (score) => score >= ABILITY_MIN && score <= ABILITY_MAX

export const isValidPointBuy = (abilities) => {
  let cost = 0
  for (const score of Object.values(abilities)) {
    if (score < pointBuyMin || score > pointBuyMax) return false
    cost += pointBuyCosts[score] || 0
  }
  return cost <= pointBuyTotal
}

export const getPointBuyCost = (abilities) => {
  return Object.values(abilities).reduce((total, score) => total + (pointBuyCosts[score] || 0), 0)
}

export const getAvailableASI = (level, classType = 'fighter') => {
  // Most classes get ASI at 4, 8, 12, 16, 19
  // Fighter gets extra at 6, 14
  // Rogue gets extra at 10
  let asiCount = asiLevels.filter(l => l <= level).length
  
  if (classType === 'fighter') {
    if (level >= 6) asiCount++
    if (level >= 14) asiCount++
  }
  if (classType === 'rogue' && level >= 10) asiCount++
  
  return asiCount
}

export const canIncreaseAbility = (currentScore, newScore) => {
  if (newScore < ABILITY_MIN) return { valid: false, error: 'Minimum score is 1' }
  if (newScore > ABILITY_MAX) return { valid: false, error: 'Maximum score is 20 (without magic items)' }
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
  acolyte: ['insight', 'religion'],
  charlatan: ['deception', 'sleightOfHand'],
  criminal: ['deception', 'stealth'],
  entertainer: ['acrobatics', 'performance'],
  'folk-hero': ['animalHandling', 'survival'],
  'guild-artisan': ['insight', 'persuasion'],
  hermit: ['medicine', 'religion'],
  noble: ['history', 'persuasion'],
  outlander: ['athletics', 'survival'],
  sage: ['arcana', 'history'],
  sailor: ['athletics', 'perception'],
  soldier: ['athletics', 'intimidation'],
  urchin: ['sleightOfHand', 'stealth'],
}