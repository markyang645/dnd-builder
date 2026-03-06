// D&D 5e Official Rules Data

export const abilityScores = ['str', 'dex', 'con', 'int', 'wis', 'cha']

export const abilityLabels = {
  str: 'Strength',
  dex: 'Dexterity',
  con: 'Constitution',
  int: 'Intelligence',
  wis: 'Wisdom',
  cha: 'Charisma',
}

// Standard Array for ability scores
export const standardArray = [15, 14, 13, 12, 10, 8]

// Point Buy costs (score: cost)
export const pointBuyCosts = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 7,
  15: 9,
}
export const pointBuyTotal = 27
export const pointBuyMin = 8
export const pointBuyMax = 15

// Racial Ability Score Increases (PHB + Tasha's)
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

// Class Saving Throw Proficiencies
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
  barbarian: 12,
  bard: 8,
  cleric: 8,
  druid: 8,
  fighter: 10,
  monk: 8,
  paladin: 10,
  ranger: 10,
  rogue: 8,
  sorcerer: 6,
  warlock: 8,
  wizard: 6,
}

// Proficiency Bonus by Level
export const getProficiencyBonus = (level) => {
  if (level >= 17) return 6
  if (level >= 13) return 5
  if (level >= 9) return 4
  if (level >= 5) return 3
  return 2
}

// Ability Score Improvement Levels
export const asiLevels = [4, 8, 12, 16, 19]

// Skill List (18 skills)
export const skills = {
  acrobatics: 'dex',
  animalHandling: 'wis',
  arcana: 'int',
  athletics: 'str',
  deception: 'cha',
  history: 'int',
  insight: 'wis',
  intimidation: 'cha',
  investigation: 'int',
  medicine: 'wis',
  nature: 'int',
  perception: 'wis',
  performance: 'cha',
  persuasion: 'cha',
  religion: 'int',
  sleightOfHand: 'dex',
  stealth: 'dex',
  survival: 'wis',
}

// Background Skill Proficiencies
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

// Base Speed by Race (feet)
export const racialSpeed = {
  human: 30,
  elf: 30,
  dwarf: 25,
  halfling: 25,
  dragonborn: 30,
  gnome: 25,
  'half-elf': 30,
  'half-orc': 30,
  tiefling: 30,
}

// Helper: Calculate Ability Modifier
export const getModifier = (score) => {
  return Math.floor((score - 10) / 2)
}

// Helper: Calculate Total Hit Points
export const calculateHP = (level, classType, conMod, takeAverage = true) => {
  const hitDie = classHitDice[classType] || 8
  let hp = hitDie + conMod // Level 1: max hit die
  
  if (level > 1) {
    const avgPerLevel = Math.floor(hitDie / 2) + 1
    hp += (level - 1) * (takeAverage ? avgPerLevel : avgPerLevel)
    hp += (level - 1) * conMod
  }
  
  return Math.max(hp, level) // Minimum 1 HP per level
}

// Helper: Calculate Armor Class
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

// Helper: Roll 4d6 drop lowest
export const roll4d6DropLowest = () => {
  const rolls = Array(4).fill(0).map(() => Math.floor(Math.random() * 6) + 1)
  rolls.sort((a, b) => a - b)
  return rolls.slice(1).reduce((a, b) => a + b, 0)
}

// Helper: Calculate Point Buy Cost
export const calculatePointBuyCost = (scores) => {
  return Object.values(scores).reduce((total, score) => {
    return total + (pointBuyCosts[score] || 0)
  }, 0)
}

// Helper: Validate Point Buy
export const isValidPointBuy = (scores) => {
  const cost = calculatePointBuyCost(scores)
  const allInRange = Object.values(scores).every(s => s >= pointBuyMin && s <= pointBuyMax)
  return cost <= pointBuyTotal && allInRange
}