// D&D 5e Races - Improved Structure for Feature Implementation

export const raceData = {
  human: {
    key: 'human',
    name: 'Human',
    description: 'Humans are the most adaptable and ambitious people among the common races. They have widely varying tastes, morals, and customs.',
    speed: 30,
    size: 'Medium',
    ageRange: { min: 18, max: 80 },
    heightRange: { min: 60, max: 78 },
    weightRange: { min: 120, max: 250 },
    abilityScoreIncrease: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
    features: [
      {
        name: 'Ability Score Increase',
        description: 'Your ability scores each increase by 1.',
        type: 'ability',
      },
      {
        name: 'Size',
        description: 'Humans are Medium creatures.',
        type: 'size',
      },
      {
        name: 'Speed',
        description: 'Your base walking speed is 30 feet.',
        type: 'speed',
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common and one extra language of your choice.',
        type: 'language',
      },
    ],
    subraces: {
      variant: {
        key: 'human.variant',
        name: 'Variant Human',
        description: 'Variant humans gain different abilities, reflecting their diverse nature.',
        abilityScoreIncrease: {},
        features: [
          {
            name: 'Ability Score Increase',
            description: 'Two different ability scores of your choice increase by 1.',
            type: 'ability',
          },
          {
            name: 'Skills',
            description: 'You gain proficiency in one skill of your choice.',
            type: 'skill',
          },
          {
            name: 'Feat',
            description: 'You gain one feat of your choice.',
            type: 'feat',
          },
        ],
      },
    },
  },
  
  elf: {
    key: 'elf',
    name: 'Elf',
    description: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.',
    speed: 30,
    size: 'Medium',
    ageRange: { min: 100, max: 750 },
    heightRange: { min: 60, max: 72 },
    weightRange: { min: 100, max: 180 },
    abilityScoreIncrease: { dex: 2 },
    features: [
      {
        name: 'Darkvision',
        description: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light.',
        type: 'senses',
      },
      {
        name: 'Keen Senses',
        description: 'You have proficiency in the Perception skill.',
        type: 'skill',
        skill: 'perception',
      },
      {
        name: 'Fey Ancestry',
        description: 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.',
        type: 'defense',
      },
      {
        name: 'Trance',
        description: 'Elves don\'t need to sleep. Instead, they meditate deeply for 4 hours a day.',
        type: 'rest',
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common and Elvish.',
        type: 'language',
      },
    ],
    subraces: {
      highElf: {
        key: 'elf.highElf',
        name: 'High Elf',
        description: 'High elves are proud and aloof, with a culture centered on art, elegance, and magical prowess.',
        abilityScoreIncrease: { int: 1 },
        features: [
          {
            name: 'Cantrip',
            description: 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.',
            type: 'spell',
          },
          {
            name: 'Elf Weapon Training',
            description: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.',
            type: 'weapon',
            weapons: ['longsword', 'shortsword', 'shortbow', 'longbow'],
          },
          {
            name: 'Extra Language',
            description: 'You can speak, read, and write one extra language of your choice.',
            type: 'language',
          },
        ],
      },
      woodElf: {
        key: 'elf.woodElf',
        name: 'Wood Elf',
        description: 'Wood elves are wild and free-spirited, living in harmony with nature.',
        abilityScoreIncrease: { wis: 1 },
        features: [
          {
            name: 'Fleet of Foot',
            description: 'Your base walking speed increases to 35 feet.',
            type: 'speed',
            speed: 35,
          },
          {
            name: 'Mask of the Wild',
            description: 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.',
            type: 'skill',
          },
          {
            name: 'Elf Weapon Training',
            description: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.',
            type: 'weapon',
            weapons: ['longsword', 'shortsword', 'shortbow', 'longbow'],
          },
        ],
      },
      drow: {
        key: 'elf.drow',
        name: 'Drow (Dark Elf)',
        description: 'Drow are dark elves who dwell in the Underdark, known for their cunning and mastery of dark magic.',
        abilityScoreIncrease: { cha: 1 },
        features: [
          {
            name: 'Superior Darkvision',
            description: 'Your darkvision has a range of 120 feet.',
            type: 'senses',
            darkvision: 120,
          },
          {
            name: 'Sunlight Sensitivity',
            description: 'You have disadvantage on attack rolls and Perception checks that rely on sight when you, the target, or whatever you are trying to perceive is in direct sunlight.',
            type: 'weakness',
          },
          {
            name: 'Drow Magic',
            description: 'You know the dancing lights cantrip. At 3rd level, you can cast faerie fire once. At 5th level, you can cast darkness once.',
            type: 'spell',
          },
          {
            name: 'Drow Weapon Training',
            description: 'You have proficiency with rapiers, shortswords, and hand crossbows.',
            type: 'weapon',
            weapons: ['rapier', 'shortsword', 'handCrossbow'],
          },
        ],
      },
    },
  },
  
  dwarf: {
    key: 'dwarf',
    name: 'Dwarf',
    description: 'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.',
    speed: 25,
    size: 'Medium',
    ageRange: { min: 50, max: 350 },
    heightRange: { min: 48, max: 60 },
    weightRange: { min: 150, max: 250 },
    abilityScoreIncrease: { con: 2 },
    features: [
      {
        name: 'Darkvision',
        description: 'You can see in dim light within 60 feet as if it were bright light.',
        type: 'senses',
      },
      {
        name: 'Dwarven Resilience',
        description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.',
        type: 'defense',
      },
      {
        name: 'Dwarven Combat Training',
        description: 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.',
        type: 'weapon',
        weapons: ['battleaxe', 'handaxe', 'lightHammer', 'warhammer'],
      },
      {
        name: 'Tool Proficiency',
        description: 'You gain proficiency with the artisan\'s tools of your choice.',
        type: 'tool',
      },
      {
        name: 'Stonecunning',
        description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient and add double your proficiency bonus.',
        type: 'skill',
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common and Dwarvish.',
        type: 'language',
      },
    ],
    subraces: {
      hillDwarf: {
        key: 'dwarf.hillDwarf',
        name: 'Hill Dwarf',
        description: 'Hill dwarves are wise and sturdy, with a deep connection to the earth.',
        abilityScoreIncrease: { wis: 1 },
        features: [
          {
            name: 'Dwarven Toughness',
            description: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.',
            type: 'hp',
          },
        ],
      },
      mountainDwarf: {
        key: 'dwarf.mountainDwarf',
        name: 'Mountain Dwarf',
        description: 'Mountain dwarves are strong and fierce warriors, adapted to life in high peaks.',
        abilityScoreIncrease: { str: 2 },
        features: [
          {
            name: 'Dwarven Armor Training',
            description: 'You have proficiency with light and medium armor.',
            type: 'armor',
            armor: ['light', 'medium'],
          },
        ],
      },
    },
  },
  
  halfling: {
    key: 'halfling',
    name: 'Halfling',
    description: 'The comforts of home are the goals of most halflings: a place to settle in peace and quiet.',
    speed: 25,
    size: 'Small',
    ageRange: { min: 20, max: 150 },
    heightRange: { min: 36, max: 42 },
    weightRange: { min: 60, max: 100 },
    abilityScoreIncrease: { dex: 2 },
    features: [
      {
        name: 'Lucky',
        description: 'When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
        type: 'special',
      },
      {
        name: 'Brave',
        description: 'You have advantage on saving throws against being frightened.',
        type: 'defense',
      },
      {
        name: 'Halfling Nimbleness',
        description: 'You can move through the space of any creature that is of a size larger than yours.',
        type: 'movement',
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common and Halfling.',
        type: 'language',
      },
    ],
    subraces: {
      lightfoot: {
        key: 'halfling.lightfoot',
        name: 'Lightfoot Halfling',
        description: 'Lightfoot halflings are stealthy and charming, able to hide even when observed.',
        abilityScoreIncrease: { cha: 1 },
        features: [
          {
            name: 'Naturally Stealthy',
            description: 'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.',
            type: 'skill',
          },
        ],
      },
      stout: {
        key: 'halfling.stout',
        name: 'Stout Halfling',
        description: 'Stout halflings are hardy and resistant to poison.',
        abilityScoreIncrease: { con: 1 },
        features: [
          {
            name: 'Stout Resilience',
            description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.',
            type: 'defense',
          },
        ],
      },
    },
  },
  
  dragonborn: {
    key: 'dragonborn',
    name: 'Dragonborn',
    description: 'Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.',
    speed: 30,
    size: 'Medium',
    ageRange: { min: 15, max: 80 },
    heightRange: { min: 72, max: 84 },
    weightRange: { min: 200, max: 350 },
    abilityScoreIncrease: { str: 2, cha: 1 },
    features: [
      {
        name: 'Draconic Ancestry',
        description: 'Choose a dragon type. You gain damage resistance and a breath weapon based on your ancestry.',
        type: 'special',
        options: ['black', 'blue', 'brass', 'bronze', 'copper', 'gold', 'green', 'red', 'silver', 'white'],
      },
      {
        name: 'Breath Weapon',
        description: 'You can use your action to exhale destructive energy. Damage type depends on your ancestry.',
        type: 'attack',
      },
      {
        name: 'Damage Resistance',
        description: 'You have resistance to the damage type associated with your draconic ancestry.',
        type: 'defense',
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common and Draconic.',
        type: 'language',
      },
    ],
    subraces: {},
  },
  
  gnome: {
    key: 'gnome',
    name: 'Gnome',
    description: 'A gnome\'s energy and enthusiasm for living shines through every inch of his or her tiny body.',
    speed: 25,
    size: 'Small',
    ageRange: { min: 100, max: 500 },
    heightRange: { min: 40, max: 48 },
    weightRange: { min: 60, max: 90 },
    abilityScoreIncrease: { int: 2 },
    features: [
      {
        name: 'Darkvision',
        description: 'You can see in dim light within 60 feet as if it were bright light.',
        type: 'senses',
      },
      {
        name: 'Gnome Cunning',
        description: 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.',
        type: 'defense',
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common and Gnomish.',
        type: 'language',
      },
    ],
    subraces: {
      forestGnome: {
        key: 'gnome.forestGnome',
        name: 'Forest Gnome',
        description: 'Forest gnomes are reclusive and elusive, living in deep woods.',
        abilityScoreIncrease: { dex: 1 },
        features: [
          {
            name: 'Natural Illusionist',
            description: 'You know the minor illusion cantrip.',
            type: 'spell',
          },
          {
            name: 'Speak with Small Beasts',
            description: 'Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts.',
            type: 'special',
          },
        ],
      },
      rockGnome: {
        key: 'gnome.rockGnome',
        name: 'Rock Gnome',
        description: 'Rock gnomes are tinkerers and inventors, obsessed with mechanical devices.',
        abilityScoreIncrease: { con: 1 },
        features: [
          {
            name: 'Artificer\'s Lore',
            description: 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus.',
            type: 'skill',
          },
          {
            name: 'Tinker',
            description: 'You have proficiency with artisan\'s tools (tinker\'s tools). You can craft clockwork devices.',
            type: 'tool',
          },
        ],
      },
    },
  },
  
  halfElf: {
    key: 'halfElf',
    name: 'Half-Elf',
    description: 'Half-elves are wanderers who dwell on the borders of both human and elven societies.',
    speed: 30,
    size: 'Medium',
    ageRange: { min: 20, max: 180 },
    heightRange: { min: 60, max: 72 },
    weightRange: { min: 100, max: 200 },
    abilityScoreIncrease: { cha: 2 },
    features: [
      {
        name: 'Darkvision',
        description: 'You can see in dim light within 60 feet as if it were bright light.',
        type: 'senses',
      },
      {
        name: 'Fey Ancestry',
        description: 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.',
        type: 'defense',
      },
      {
        name: 'Skill Versatility',
        description: 'You gain proficiency in two skills of your choice.',
        type: 'skill',
        count: 2,
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common, Elvish, and one extra language of your choice.',
        type: 'language',
      },
    ],
    subraces: {},
  },
  
  halfOrc: {
    key: 'halfOrc',
    name: 'Half-Orc',
    description: 'Half-orcs are a blend of human and orc heritage. They are strong, fierce, and often feared.',
    speed: 30,
    size: 'Medium',
    ageRange: { min: 14, max: 75 },
    heightRange: { min: 66, max: 84 },
    weightRange: { min: 180, max: 300 },
    abilityScoreIncrease: { str: 2, con: 1 },
    features: [
      {
        name: 'Darkvision',
        description: 'You can see in dim light within 60 feet as if it were bright light.',
        type: 'senses',
      },
      {
        name: 'Menacing',
        description: 'You gain proficiency in the Intimidation skill.',
        type: 'skill',
        skill: 'intimidation',
      },
      {
        name: 'Relentless Endurance',
        description: 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can\'t use this feature again until you finish a long rest.',
        type: 'defense',
      },
      {
        name: 'Savage Attacks',
        description: 'When you score a critical hit with a melee weapon attack, you can roll one of the weapon\'s damage dice one additional time and add it to the extra damage.',
        type: 'attack',
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common and Orc.',
        type: 'language',
      },
    ],
    subraces: {},
  },
  
  tiefling: {
    key: 'tiefling',
    name: 'Tiefling',
    description: 'Tieflings are humans with infernal heritage, bearing the mark of devils or demons.',
    speed: 30,
    size: 'Medium',
    ageRange: { min: 18, max: 100 },
    heightRange: { min: 60, max: 72 },
    weightRange: { min: 120, max: 220 },
    abilityScoreIncrease: { cha: 2, int: 1 },
    features: [
      {
        name: 'Darkvision',
        description: 'You can see in dim light within 60 feet as if it were bright light.',
        type: 'senses',
      },
      {
        name: 'Hellish Resistance',
        description: 'You have resistance to fire damage.',
        type: 'defense',
      },
      {
        name: 'Infernal Legacy',
        description: 'You know the thaumaturgy cantrip. At 3rd level, you can cast hellish rebuke once. At 5th level, you can cast darkness once.',
        type: 'spell',
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common and Infernal.',
        type: 'language',
      },
    ],
    subraces: {},
  },
}

// Helper function to get all races (including subraces)
export const getAllRaces = () => {
  const races = []
  
  Object.entries(raceData).forEach(([key, race]) => {
    races.push({
      key,
      name: race.name,
      description: race.description,
      isSubrace: false,
    })
    
    if (race.subraces) {
      Object.entries(race.subraces).forEach(([subKey, subrace]) => {
        races.push({
          key: subrace.key,
          name: subrace.name,
          description: subrace.description,
          parentRace: key,
          isSubrace: true,
        })
      })
    }
  })
  
  return races
}

// Helper to get race or subrace data
export const getRaceData = (raceKey) => {
  if (raceKey.includes('.')) {
    const [baseKey, subKey] = raceKey.split('.')
    const baseRace = raceData[baseKey]
    if (baseRace && baseRace.subraces[subKey]) {
      return {
        ...baseRace,
        ...baseRace.subraces[subKey],
        isSubrace: true,
        baseRaceName: baseRace.name,
      }
    }
  }
  return { ...raceData[raceKey], isSubrace: false }
}

// Get all features for a race (base + subrace)
export const getRaceFeatures = (raceKey) => {
  const race = getRaceData(raceKey)
  const features = [...(race.features || [])]
  
  if (race.isSubrace) {
    const baseRace = raceData[raceKey.split('.')[0]]
    if (baseRace) {
      // Add base race features that aren't overridden
      baseRace.features.forEach(feature => {
        if (!features.find(f => f.name === feature.name)) {
          features.push(feature)
        }
      })
    }
  }
  
  return features
}

// Appearance options (kept from original)
export const appearanceOptions = {
  eyeColors: [
    'Brown', 'Blue', 'Green', 'Hazel', 'Gray', 'Amber',
    'Violet', 'Red', 'Gold', 'Silver', 'Black', 'White',
  ],
  hairColors: [
    'Black', 'Brown', 'Blonde', 'Red', 'Gray', 'White',
    'Auburn', 'Silver', 'Blue', 'Green', 'Purple',
  ],
  hairStyles: [
    'Short', 'Medium', 'Long', 'Bald', 'Buzz Cut',
    'Ponytail', 'Braids', 'Dreadlocks', 'Curly', 'Wavy',
  ],
  skinTones: [
    'Fair', 'Light', 'Medium', 'Olive', 'Tan',
    'Dark', 'Deep', 'Pale', 'Bronze', 'Ebony',
  ],
}

// Helper to convert inches to feet/inches
export const inchesToFeetInches = (inches) => {
  const feet = Math.floor(inches / 12)
  const remainingInches = inches % 12
  return `${feet}'${remainingInches}"`
}