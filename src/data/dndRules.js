// D&D 5e Official Rules - Canon Accurate
export const abilityScores = ['str', 'dex', 'con', 'int', 'wis', 'cha']
export const abilityLabels = {
  str: 'Strength', dex: 'Dexterity', con: 'Constitution',
  int: 'Intelligence', wis: 'Wisdom', cha: 'Charisma',
}

// Ability Score Limits
export const ABILITY_MIN = 3
export const ABILITY_MAX = 20

// Point Buy Rules (PHB p.13)
export const pointBuyCosts = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 }
export const pointBuyTotal = 27
export const pointBuyMin = 8
export const pointBuyMax = 15

// Standard Array
export const standardArray = [15, 14, 13, 12, 10, 8]

// ASI Levels (PHB)
export const asiLevels = [4, 8, 12, 16, 19]

// Proficiency Bonus by Level (PHB Character Advancement)
export const getProficiencyBonus = (level) => {
  if (level >= 17) return 6
  if (level >= 13) return 5
  if (level >= 9) return 4
  if (level >= 5) return 3
  return 2
}

// Racial ASI (PHB Races)
export const racialASI = {
  human: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
  elf: { dex: 2 }, dwarf: { con: 2 }, halfling: { dex: 2 },
  dragonborn: { str: 2, cha: 1 }, gnome: { int: 2 },
  'half-elf': { cha: 2 }, 'half-orc': { str: 2, con: 1 },
  tiefling: { cha: 2, int: 1 },
}

// Class Saving Throw Proficiencies (PHB Classes)
export const classSavingThrows = {
  barbarian: ['str','con'], bard: ['dex','cha'], cleric: ['wis','cha'],
  druid: ['int','wis'], fighter: ['str','con'], monk: ['str','dex'],
  paladin: ['wis','cha'], ranger: ['str','dex'], rogue: ['dex','int'],
  sorcerer: ['con','cha'], warlock: ['wis','cha'], wizard: ['int','wis'],
}

// Class Hit Dice (PHB)
export const classHitDice = {
  barbarian: 12, bard: 8, cleric: 8, druid: 8,
  fighter: 10, monk: 8, paladin: 10, ranger: 10,
  rogue: 8, sorcerer: 6, warlock: 8, wizard: 6,
}

// Level 1 HP Formula: Max Hit Die + Con Mod (PHB)
export const getLevel1HP = (className, conMod) => {
  const hitDie = classHitDice[className] || 8
  return hitDie + conMod
}

// Class Primary Abilities for Spellcasting
export const classPrimaryAbility = {
  bard: 'cha', cleric: 'wis', druid: 'wis', paladin: 'cha',
  ranger: 'wis', sorcerer: 'cha', warlock: 'cha', wizard: 'int',
}

// Speed by Race (PHB)
export const racialSpeed = {
  human: 30, elf: 30, dwarf: 25, halfling: 25,
  dragonborn: 30, gnome: 25, 'half-elf': 30, 'half-orc': 30, tiefling: 30,
}

// Helper: Ability Modifier = floor((score - 10) / 2) (PHB)
export const getModifier = (score) => Math.floor((score - 10) / 2)

// Armor Class Calculation (PHB Equipment)
export const calculateAC = (armorType, dexMod, shield = false, baseAC = null) => {
  // If baseAC is provided (e.g., natural armor), use that instead of 10
  const base = baseAC !== null ? baseAC : 10
  
  switch (armorType) {
    case 'none': return base + dexMod
    case 'light': return base + 1 + dexMod  // Leather: 11 + Dex
    case 'medium': return base + 2 + Math.min(dexMod, 2)  // Hide: 12 + Dex (max +2)
    case 'heavy': return base + (armorType === 'heavy' ? 6 : 0)  // Chain Mail: 16, no Dex
    default: return base + dexMod
  }
}

// Spell Save DC = 8 + spellcasting ability mod + proficiency bonus (PHB)
export const calculateSpellSaveDC = (classType, abilities, proficiencyBonus) => {
  const primaryAbility = classPrimaryAbility[classType] || 'wis'
  return 8 + proficiencyBonus + getModifier(abilities[primaryAbility] || 10)
}

// Spell Attack Bonus = spellcasting ability mod + proficiency bonus (PHB)
export const calculateAttackBonus = (classType, abilities, proficiencyBonus) => {
  const primaryAbility = classPrimaryAbility[classType] || 'str'
  return proficiencyBonus + getModifier(abilities[primaryAbility] || 10)
}

// Carrying Capacity = Strength score × 15 lbs (PHB)
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

// Dropdown Options (PHB Canon)
export const races = ['human', 'elf', 'dwarf', 'halfling', 'dragonborn', 'gnome', 'half-elf', 'half-orc', 'tiefling']
export const subraces = {
  elf: ['highElf', 'woodElf', 'drow'],
  dwarf: ['hillDwarf', 'mountainDwarf'],
  halfling: ['lightfoot', 'stout'],
  gnome: ['forestGnome', 'rockGnome'],
}
export const classes = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard']
export const backgrounds = ['acolyte', 'charlatan', 'criminal', 'entertainer', 'folk-hero', 'guild-artisan', 'hermit', 'noble', 'outlander', 'sage', 'sailor', 'soldier', 'urchin']
export const alignments = ['lawful-good', 'neutral-good', 'chaotic-good', 'lawful-neutral', 'neutral', 'chaotic-neutral', 'lawful-evil', 'neutral-evil', 'chaotic-evil']
export const languages = ['common', 'dwarvish', 'elvish', 'giant', 'gnomish', 'goblin', 'halfling', 'orc', 'draconic', 'abyssal', 'celestial', 'infernal', 'primordial', 'sylvan', 'undercommon']

// Skills (PHB)
export const skills = {
  acrobatics: { name: 'Acrobatics', ability: 'dex', description: 'Balance, tumble, escape bonds' },
  animalHandling: { name: 'Animal Handling', ability: 'wis', description: 'Calm animals, intuit intentions' },
  arcana: { name: 'Arcana', ability: 'int', description: 'Recall lore about spells, magic items' },
  athletics: { name: 'Athletics', ability: 'str', description: 'Climb, jump, swim, grapple' },
  deception: { name: 'Deception', ability: 'cha', description: 'Lie, con, bluff others' },
  history: { name: 'History', ability: 'int', description: 'Recall lore about history' },
  insight: { name: 'Insight', ability: 'wis', description: 'Determine true intentions' },
  intimidation: { name: 'Intimidation', ability: 'cha', description: 'Influence through threats' },
  investigation: { name: 'Investigation', ability: 'int', description: 'Deduce clues, solve puzzles' },
  medicine: { name: 'Medicine', ability: 'wis', description: 'Diagnose wounds, stabilize dying' },
  nature: { name: 'Nature', ability: 'int', description: 'Recall lore about terrain, plants' },
  perception: { name: 'Perception', ability: 'wis', description: 'Spot, hear, notice things' },
  performance: { name: 'Performance', ability: 'cha', description: 'Delight audience with performance' },
  persuasion: { name: 'Persuasion', ability: 'cha', description: 'Influence through diplomacy' },
  religion: { name: 'Religion', ability: 'int', description: 'Recall lore about deities, rites' },
  sleightOfHand: { name: 'Sleight of Hand', ability: 'dex', description: 'Pick pockets, conceal objects' },
  stealth: { name: 'Stealth', ability: 'dex', description: 'Hide, move silently' },
  survival: { name: 'Survival', ability: 'wis', description: 'Track, hunt, navigate wilderness' },
}

// Class Skill Proficiencies (PHB)
export const classSkillProficiencies = {
  barbarian: { count: 2, from: ['animalHandling', 'athletics', 'intimidation', 'nature', 'perception', 'survival'] },
  bard: { count: 3, from: Object.keys(skills) },
  cleric: { count: 2, from: ['history', 'insight', 'medicine', 'persuasion', 'religion'] },
  druid: { count: 2, from: ['arcana', 'animalHandling', 'insight', 'medicine', 'nature', 'perception', 'religion', 'survival'] },
  fighter: { count: 2, from: ['acrobatics', 'animalHandling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'] },
  monk: { count: 2, from: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth'] },
  paladin: { count: 2, from: ['athletics', 'insight', 'intimidation', 'medicine', 'persuasion', 'religion'] },
  ranger: { count: 3, from: ['animalHandling', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival'] },
  rogue: { count: 4, from: ['acrobatics', 'athletics', 'deception', 'insight', 'intimidation', 'investigation', 'perception', 'performance', 'persuasion', 'sleightOfHand', 'stealth'] },
  sorcerer: { count: 2, from: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion'] },
  warlock: { count: 2, from: ['arcana', 'deception', 'history', 'intimidation', 'investigation', 'nature', 'religion'] },
  wizard: { count: 2, from: ['arcana', 'history', 'insight', 'investigation', 'medicine', 'religion'] },
}

// Background Skill Proficiencies (PHB)
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