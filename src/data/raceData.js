// D&D 5e Races - Complete with Descriptions, Subraces, and Bonuses

export const raceData = {
  human: {
    name: 'Human',
    description: 'Humans are the most adaptable and ambitious people among the common races. They have widely varying tastes, morals, and customs. Humans individualistic, striving for achievement in many fields.',
    speed: 30,
    ageRange: { min: 18, max: 80 },
    heightRange: { min: 60, max: 78 },
    weightRange: { min: 120, max: 250 },
    abilityScores: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
    features: [
      'Ability Score Increase: +1 to all ability scores',
      'Size: Medium',
      'Speed: 30 feet',
      'Languages: Common and one extra language of your choice',
    ],
    subraces: {
      variant: {
        name: 'Variant Human',
        description: 'Variant humans gain different abilities, reflecting their diverse nature. They gain a feat and skill proficiency at 1st level.',
        abilityScores: {},
        features: [
          'Ability Score Increase: +1 to two different ability scores of your choice',
          'Skills: Proficiency in one skill of your choice',
          'Feat: One feat of your choice',
          'Languages: Common and one extra language',
        ],
      },
    },
  },
  
  elf: {
    name: 'Elf',
    description: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They dwell in places of ethereal beauty, in the midst of ancient forests or silver spires glittering with faerie light.',
    speed: 30,
    ageRange: { min: 100, max: 750 },
    heightRange: { min: 60, max: 72 },
    weightRange: { min: 100, max: 180 },
    abilityScores: { dex: 2 },
    features: [
      'Darkvision: 60 feet',
      'Keen Senses: Proficiency in Perception',
      'Fey Ancestry: Advantage vs. charmed, immune to sleep',
      'Trance: 4 hours of meditation instead of sleep',
      'Languages: Common, Elvish',
    ],
    subraces: {
      highElf: {
        name: 'High Elf',
        description: 'High elves are proud and aloof, with a culture centered on art, elegance, and magical prowess. They are the traditional elves of legend.',
        abilityScores: { int: 1 },
        features: [
          'Cantrip: One wizard cantrip of your choice (INT-based)',
          'Elf Weapon Training: Proficiency with longsword, shortsword, shortbow, longbow',
          'Extra Language: One extra language',
        ],
      },
      woodElf: {
        name: 'Wood Elf',
        description: 'Wood elves are wild and free-spirited, living in harmony with nature. They are swift and skilled hunters and trackers.',
        abilityScores: { wis: 1 },
        features: [
          'Fleet of Foot: Speed increases to 35 feet',
          'Mask of the Wild: Can hide in natural phenomena',
          'Elf Weapon Training: Proficiency with longsword, shortsword, shortbow, longbow',
        ],
      },
      drow: {
        name: 'Drow (Dark Elf)',
        description: 'Drow are dark elves who dwell in the Underdark. They are known for their cunning, cruelty, and mastery of dark magic.',
        abilityScores: { cha: 1 },
        features: [
          'Superior Darkvision: 120 feet',
          'Sunlight Sensitivity: Disadvantage on attack rolls and Perception in sunlight',
          'Drow Magic: Dancing Lights cantrip; at 3rd level: Faerie Fire; at 5th level: Darkness',
          'Drow Weapon Training: Proficiency with rapier, shortsword, hand crossbow',
        ],
      },
    },
  },
  
  dwarf: {
    name: 'Dwarf',
    description: 'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human.',
    speed: 25,
    ageRange: { min: 50, max: 350 },
    heightRange: { min: 48, max: 60 },
    weightRange: { min: 150, max: 250 },
    abilityScores: { con: 2 },
    features: [
      'Darkvision: 60 feet',
      'Dwarven Resilience: Advantage vs. poison, resistance to poison damage',
      'Dwarven Combat Training: Proficiency with battleaxe, handaxe, light hammer, warhammer',
      'Tool Proficiency: Artisan\'s tools of your choice',
      'Stonecunning: Double proficiency on History checks related to stonework',
      'Languages: Common, Dwarvish',
    ],
    subraces: {
      hillDwarf: {
        name: 'Hill Dwarf',
        description: 'Hill dwarves are wise and sturdy, with a deep connection to the earth. They are known for their endurance and vitality.',
        abilityScores: { wis: 1 },
        features: [
          'Dwarven Toughness: HP maximum increases by 1, and increases by 1 every level',
        ],
      },
      mountainDwarf: {
        name: 'Mountain Dwarf',
        description: 'Mountain dwarves are strong and fierce warriors, adapted to life in high peaks and deep mines.',
        abilityScores: { str: 2 },
        features: [
          'Dwarven Armor Training: Proficiency with light and medium armor',
        ],
      },
    },
  },
  
  halfling: {
    name: 'Halfling',
    description: 'The comforts of home are the goals of most halflings: a place to settle in peace and quiet, far from marauding monsters and clashing armies. Halflings are practical and down-to-earth.',
    speed: 25,
    ageRange: { min: 20, max: 150 },
    heightRange: { min: 36, max: 42 },
    weightRange: { min: 60, max: 100 },
    abilityScores: { dex: 2 },
    features: [
      'Lucky: Reroll natural 1s on attack rolls, ability checks, and saving throws',
      'Brave: Advantage vs. frightened',
      'Halfling Nimbleness: Move through space of any creature larger than you',
      'Languages: Common, Halfling',
    ],
    subraces: {
      lightfoot: {
        name: 'Lightfoot Halfling',
        description: 'Lightfoot halflings are stealthy and charming, able to hide even when observed. They are the most common type of halfling.',
        abilityScores: { cha: 1 },
        features: [
          'Naturally Stealthy: Can hide even when obscured only by a creature larger than you',
        ],
      },
      stout: {
        name: 'Stout Halfling',
        description: 'Stout halflings are hardy and resistant to poison, with a connection to dwarven traditions.',
        abilityScores: { con: 1 },
        features: [
          'Stout Resilience: Advantage vs. poison, resistance to poison damage',
        ],
      },
    },
  },
  
  dragonborn: {
    name: 'Dragonborn',
    description: 'Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. They are proud and honorable, with a strong sense of loyalty to their clan.',
    speed: 30,
    ageRange: { min: 15, max: 80 },
    heightRange: { min: 72, max: 84 },
    weightRange: { min: 200, max: 350 },
    abilityScores: { str: 2, cha: 1 },
    features: [
      'Draconic Ancestry: Choose a dragon type for damage resistance and breath weapon',
      'Breath Weapon: Exhale destructive energy (damage type based on ancestry)',
      'Damage Resistance: Resistance to damage type based on ancestry',
      'Languages: Common, Draconic',
    ],
    subraces: {},
    breathWeapons: {
      black: { type: 'acid', shape: 'line' },
      blue: { type: 'lightning', shape: 'line' },
      brass: { type: 'fire', shape: 'line' },
      bronze: { type: 'lightning', shape: 'line' },
      copper: { type: 'acid', shape: 'line' },
      gold: { type: 'fire', shape: 'cone' },
      green: { type: 'poison', shape: 'cone' },
      red: { type: 'fire', shape: 'cone' },
      silver: { type: 'cold', shape: 'cone' },
      white: { type: 'cold', shape: 'cone' },
    },
  },
  
  gnome: {
    name: 'Gnome',
    description: 'A gnome\'s energy and enthusiasm for living shines through every inch of his or her tiny body. Gnomes are smaller than dwarves but larger than halflings, with a love of invention and illusion.',
    speed: 25,
    ageRange: { min: 100, max: 500 },
    heightRange: { min: 40, max: 48 },
    weightRange: { min: 60, max: 90 },
    abilityScores: { int: 2 },
    features: [
      'Darkvision: 60 feet',
      'Gnome Cunning: Advantage on INT, WIS, and CHA saving throws against magic',
      'Languages: Common, Gnomish',
    ],
    subraces: {
      forestGnome: {
        name: 'Forest Gnome',
        description: 'Forest gnomes are reclusive and elusive, living in deep woods. They have a natural affinity for nature and illusion magic.',
        abilityScores: { dex: 1 },
        features: [
          'Natural Illusionist: Know the Minor Illusion cantrip',
          'Speak with Small Beasts: Communicate simple ideas with Small or smaller beasts',
        ],
      },
      rockGnome: {
        name: 'Rock Gnome',
        description: 'Rock gnomes are tinkerers and inventors, obsessed with mechanical devices and alchemical experiments.',
        abilityScores: { con: 1 },
        features: [
          'Artificer\'s Lore: Double proficiency on History checks related to magic items, alchemical objects, or technological devices',
          'Tinker: Proficiency with artisan\'s tools (tinker\'s tools); can craft clockwork devices',
        ],
      },
    },
  },
  
  halfElf: {
    name: 'Half-Elf',
    description: 'Half-elves are wanderers who dwell on the borders of both human and elven societies. They combine the curiosity and ambition of humans with the grace and refinement of elves.',
    speed: 30,
    ageRange: { min: 20, max: 180 },
    heightRange: { min: 60, max: 72 },
    weightRange: { min: 100, max: 200 },
    abilityScores: { cha: 2 },
    features: [
      'Darkvision: 60 feet',
      'Fey Ancestry: Advantage vs. charmed, immune to sleep',
      'Skill Versatility: Proficiency in two skills of your choice',
      'Languages: Common, Elvish, and one extra language',
    ],
    subraces: {},
  },
  
  halfOrc: {
    name: 'Half-Orc',
    description: 'Half-orcs are a blend of human and orc heritage. They are strong, fierce, and often feared by those who don\'t know them. Many half-orcs struggle to find their place in the world.',
    speed: 30,
    ageRange: { min: 14, max: 75 },
    heightRange: { min: 66, max: 84 },
    weightRange: { min: 180, max: 300 },
    abilityScores: { str: 2, con: 1 },
    features: [
      'Darkvision: 60 feet',
      'Menacing: Proficiency in Intimidation',
      'Relentless Endurance: When reduced to 0 HP, drop to 1 HP instead (once per long rest)',
      'Savage Attacks: Roll one extra damage die on critical hits with melee weapons',
      'Languages: Common, Orc',
    ],
    subraces: {},
  },
  
  tiefling: {
    name: 'Tiefling',
    description: 'Tieflings are humans with infernal heritage, bearing the mark of devils or demons. They have horns, tails, and unusual skin colors. Despite their appearance, tieflings can be good, evil, or anything in between.',
    speed: 30,
    ageRange: { min: 18, max: 100 },
    heightRange: { min: 60, max: 72 },
    weightRange: { min: 120, max: 220 },
    abilityScores: { cha: 2, int: 1 },
    features: [
      'Darkvision: 60 feet',
      'Hellish Resistance: Resistance to fire damage',
      'Infernal Legacy: Thaumaturgy cantrip; at 3rd level: Hellish Rebuke; at 5th level: Darkness',
      'Languages: Common, Infernal',
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
          key: `${key}.${subKey}`,
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

// =====================================================
// APPEARANCE OPTIONS (kept from original file)
// =====================================================

export const appearanceOptions = {
  eyeColors: [
    'Brown', 'Blue', 'Green', 'Hazel', 'Gray', 'Amber',
    'Violet', 'Red', 'Gold', 'Silver', 'Black', 'White',
    'Pale Blue', 'Dark Brown', 'Light Blue', 'Emerald',
  ],
  hairColors: [
    'Black', 'Brown', 'Blonde', 'Red', 'Gray', 'White',
    'Auburn', 'Chestnut', 'Platinum', 'Silver', 'Blue',
    'Green', 'Purple', 'Pink', 'Orange', 'Golden',
  ],
  hairStyles: [
    'Short', 'Medium', 'Long', 'Bald', 'Buzz Cut',
    'Ponytail', 'Braids', 'Dreadlocks', 'Mohawk', 'Afro',
    'Curly', 'Wavy', 'Straight', 'Spiky', 'Top Knot',
  ],
  skinTones: [
    'Fair', 'Light', 'Medium', 'Olive', 'Tan',
    'Dark', 'Deep', 'Pale', 'Bronze', 'Ebony',
    'Porcelain', 'Peach', 'Beige', 'Caramel', 'Mahogany',
  ],
}

// Helper to convert inches to feet/inches
export const inchesToFeetInches = (inches) => {
  const feet = Math.floor(inches / 12)
  const remainingInches = inches % 12
  return `${feet}'${remainingInches}"`
}