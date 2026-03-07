// D&D 5e Skills - Complete List

export const skills = {
  acrobatics: {
    name: 'Acrobatics',
    ability: 'dex',
    description: 'Balance, tumble, escape bonds',
  },
  animalHandling: {
    name: 'Animal Handling',
    ability: 'wis',
    description: 'Calm animals, intuit intentions',
  },
  arcana: {
    name: 'Arcana',
    ability: 'int',
    description: 'Recall lore about spells, magic items',
  },
  athletics: {
    name: 'Athletics',
    ability: 'str',
    description: 'Climb, jump, swim, grapple',
  },
  deception: {
    name: 'Deception',
    ability: 'cha',
    description: 'Lie, con, bluff others',
  },
  history: {
    name: 'History',
    ability: 'int',
    description: 'Recall lore about history',
  },
  insight: {
    name: 'Insight',
    ability: 'wis',
    description: 'Determine true intentions',
  },
  intimidation: {
    name: 'Intimidation',
    ability: 'cha',
    description: 'Influence through threats',
  },
  investigation: {
    name: 'Investigation',
    ability: 'int',
    description: 'Deduce clues, solve puzzles',
  },
  medicine: {
    name: 'Medicine',
    ability: 'wis',
    description: 'Diagnose wounds, stabilize dying',
  },
  nature: {
    name: 'Nature',
    ability: 'int',
    description: 'Recall lore about terrain, plants',
  },
  perception: {
    name: 'Perception',
    ability: 'wis',
    description: 'Spot, hear, notice things',
  },
  performance: {
    name: 'Performance',
    ability: 'cha',
    description: 'Delight audience with performance',
  },
  persuasion: {
    name: 'Persuasion',
    ability: 'cha',
    description: 'Influence through diplomacy',
  },
  religion: {
    name: 'Religion',
    ability: 'int',
    description: 'Recall lore about deities, rites',
  },
  sleightOfHand: {
    name: 'Sleight of Hand',
    ability: 'dex',
    description: 'Pick pockets, conceal objects',
  },
  stealth: {
    name: 'Stealth',
    ability: 'dex',
    description: 'Hide, move silently',
  },
  survival: {
    name: 'Survival',
    ability: 'wis',
    description: 'Track, hunt, navigate wilderness',
  },
}

// Skills grouped by ability
export const skillsByAbility = {
  str: ['athletics'],
  dex: ['acrobatics', 'sleightOfHand', 'stealth'],
  int: ['arcana', 'history', 'investigation', 'nature', 'religion'],
  wis: ['animalHandling', 'insight', 'medicine', 'perception', 'survival'],
  cha: ['deception', 'intimidation', 'performance', 'persuasion'],
}

// Class skill proficiencies (number they get)
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

// Background skill proficiencies
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