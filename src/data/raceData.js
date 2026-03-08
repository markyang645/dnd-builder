// D&D 5e Races - Pure JS Data (NO JSX)
export const raceData = {
  human: {
    key: 'human',
    name: 'Human',
    description: 'Humans are the most adaptable and ambitious people among the common races.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
    features: [
      { name: 'Ability Score Increase', description: 'Your ability scores each increase by 1.', type: 'ability' },
      { name: 'Size', description: 'Humans are Medium creatures.', type: 'size' },
      { name: 'Speed', description: 'Your base walking speed is 30 feet.', type: 'speed' },
      { name: 'Languages', description: 'You can speak, read, and write Common and one extra language.', type: 'language' },
    ],
    subraces: {
      standard: { key: 'human.standard', name: 'Standard Human', abilityScoreIncrease: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 }, features: [] },
      variant: { key: 'human.variant', name: 'Variant Human', abilityScoreIncrease: {}, features: [
        { name: 'Ability Score Increase', description: 'Two different ability scores increase by 1.', type: 'ability' },
        { name: 'Skills', description: 'You gain proficiency in one skill of your choice.', type: 'skill' },
        { name: 'Feat', description: 'You gain one feat of your choice.', type: 'feat' },
      ]},
      markOfFinding: { key: 'human.markOfFinding', name: 'Mark of Finding', abilityScoreIncrease: { wis: 1, cha: 1 }, features: [
        { name: 'Intuitive Direction', description: 'You always know which way is north.', type: 'special' },
        { name: 'Finder\'s Magic', description: 'You can cast hunter\'s mark once per long rest.', type: 'spell' },
      ]},
      markOfHandling: { key: 'human.markOfHandling', name: 'Mark of Handling', abilityScoreIncrease: { wis: 1, cha: 1 }, features: [
        { name: 'Intuitive Direction', description: 'You always know which way is north.', type: 'special' },
        { name: 'Handler\'s Magic', description: 'You can cast beast bond and speak with animals.', type: 'spell' },
      ]},
      markOfMaking: { key: 'human.markOfMaking', name: 'Mark of Making', abilityScoreIncrease: { int: 1, cha: 1 }, features: [
        { name: 'Intuitive Direction', description: 'You always know which way is north.', type: 'special' },
        { name: 'Maker\'s Magic', description: 'You can cast mending and magic weapon.', type: 'spell' },
      ]},
      markOfPassage: { key: 'human.markOfPassage', name: 'Mark of Passage', abilityScoreIncrease: { dex: 1, cha: 1 }, features: [
        { name: 'Intuitive Direction', description: 'You always know which way is north.', type: 'special' },
        { name: 'Passage\'s Magic', description: 'You can cast expeditious retreat and misty step.', type: 'spell' },
      ]},
      markOfSentinel: { key: 'human.markOfSentinel', name: 'Mark of Sentinel', abilityScoreIncrease: { str: 1, cha: 1 }, features: [
        { name: 'Intuitive Direction', description: 'You always know which way is north.', type: 'special' },
        { name: 'Sentinel\'s Magic', description: 'You can cast alarm and shield.', type: 'spell' },
      ]},
    },
  },
  elf: {
    key: 'elf',
    name: 'Elf',
    description: 'Elves are a magical people of otherworldly grace.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Keen Senses', description: 'You have proficiency in Perception.', type: 'skill' },
      { name: 'Fey Ancestry', description: 'Advantage vs. charmed, immune to sleep.', type: 'defense' },
      { name: 'Trance', description: 'Meditate 4 hours instead of sleeping.', type: 'rest' },
    ],
    subraces: {
      highElf: { key: 'elf.highElf', name: 'High Elf', abilityScoreIncrease: { int: 1 }, features: [
        { name: 'Cantrip', description: 'You know one wizard cantrip.', type: 'spell' },
        { name: 'Elf Weapon Training', description: 'Longsword, shortsword, shortbow, longbow.', type: 'weapon' },
      ]},
      woodElf: { key: 'elf.woodElf', name: 'Wood Elf', abilityScoreIncrease: { wis: 1 }, features: [
        { name: 'Fleet of Foot', description: 'Speed 35 feet.', type: 'speed' },
        { name: 'Mask of the Wild', description: 'Hide when lightly obscured by nature.', type: 'skill' },
      ]},
      drow: { key: 'elf.drow', name: 'Drow', abilityScoreIncrease: { cha: 1 }, features: [
        { name: 'Superior Darkvision', description: 'Darkvision 120 feet.', type: 'senses' },
        { name: 'Sunlight Sensitivity', description: 'Disadvantage in sunlight.', type: 'weakness' },
        { name: 'Drow Magic', description: 'Dancing lights, faerie fire, darkness.', type: 'spell' },
      ]},
    },
  },
  dwarf: {
    key: 'dwarf',
    name: 'Dwarf',
    description: 'Bold and hardy, dwarves are skilled warriors and miners.',
    speed: 25,
    size: 'Medium',
    abilityScoreIncrease: { con: 2 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Dwarven Resilience', description: 'Advantage vs. poison, resistance to poison damage.', type: 'defense' },
      { name: 'Dwarven Combat Training', description: 'Battleaxe, handaxe, light hammer, warhammer.', type: 'weapon' },
      { name: 'Tool Proficiency', description: 'Artisan\'s tools of your choice.', type: 'tool' },
      { name: 'Stonecunning', description: 'Double proficiency on History checks about stonework.', type: 'skill' },
    ],
    subraces: {
      hillDwarf: { key: 'dwarf.hillDwarf', name: 'Hill Dwarf', abilityScoreIncrease: { wis: 1 }, features: [
        { name: 'Dwarven Toughness', description: 'HP max increases by 1, and by 1 each level.', type: 'hp' },
      ]},
      mountainDwarf: { key: 'dwarf.mountainDwarf', name: 'Mountain Dwarf', abilityScoreIncrease: { str: 2 }, features: [
        { name: 'Dwarven Armor Training', description: 'Light and medium armor proficiency.', type: 'armor' },
      ]},
    },
  },
  halfling: {
    key: 'halfling',
    name: 'Halfling',
    description: 'The comforts of home are the goals of most halflings.',
    speed: 25,
    size: 'Small',
    abilityScoreIncrease: { dex: 2 },
    features: [
      { name: 'Lucky', description: 'Reroll natural 1s on attacks, checks, saves.', type: 'special' },
      { name: 'Brave', description: 'Advantage on saves vs. frightened.', type: 'defense' },
      { name: 'Halfling Nimbleness', description: 'Move through larger creatures\' space.', type: 'movement' },
    ],
    subraces: {
      lightfoot: { key: 'halfling.lightfoot', name: 'Lightfoot Halfling', abilityScoreIncrease: { cha: 1 }, features: [
        { name: 'Naturally Stealthy', description: 'Hide behind larger creatures.', type: 'skill' },
      ]},
      stout: { key: 'halfling.stout', name: 'Stout Halfling', abilityScoreIncrease: { con: 1 }, features: [
        { name: 'Stout Resilience', description: 'Advantage vs. poison, resistance to poison damage.', type: 'defense' },
      ]},
    },
  },
  dragonborn: {
    key: 'dragonborn',
    name: 'Dragonborn',
    description: 'Dragonborn look like dragons standing erect in humanoid form.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, cha: 1 },
    features: [
      { name: 'Draconic Ancestry', description: 'Choose a dragon type for damage resistance and breath weapon.', type: 'special' },
      { name: 'Breath Weapon', description: 'Exhale destructive energy.', type: 'attack' },
      { name: 'Damage Resistance', description: 'Resistance to damage type based on ancestry.', type: 'defense' },
    ],
    subraces: {},
  },
  gnome: {
    key: 'gnome',
    name: 'Gnome',
    description: 'A gnome\'s energy and enthusiasm shines through.',
    speed: 25,
    size: 'Small',
    abilityScoreIncrease: { int: 2 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Gnome Cunning', description: 'Advantage on INT/WIS/CHA saves vs. magic.', type: 'defense' },
    ],
    subraces: {
      forestGnome: { key: 'gnome.forestGnome', name: 'Forest Gnome', abilityScoreIncrease: { dex: 1 }, features: [
        { name: 'Natural Illusionist', description: 'Minor illusion cantrip.', type: 'spell' },
        { name: 'Speak with Small Beasts', description: 'Communicate with small beasts.', type: 'special' },
      ]},
      rockGnome: { key: 'gnome.rockGnome', name: 'Rock Gnome', abilityScoreIncrease: { con: 1 }, features: [
        { name: 'Artificer\'s Lore', description: 'Double proficiency on History checks about magic items.', type: 'skill' },
        { name: 'Tinker', description: 'Craft clockwork devices.', type: 'tool' },
      ]},
    },
  },
  halfElf: {
    key: 'halfElf',
    name: 'Half-Elf',
    description: 'Half-elves dwell on the borders of human and elven societies.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { cha: 2 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Fey Ancestry', description: 'Advantage vs. charmed, immune to sleep.', type: 'defense' },
      { name: 'Skill Versatility', description: 'Two skill proficiencies of your choice.', type: 'skill' },
    ],
    subraces: {},
  },
  halfOrc: {
    key: 'halfOrc',
    name: 'Half-Orc',
    description: 'Half-orcs are a blend of human and orc heritage.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, con: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Menacing', description: 'Proficiency in Intimidation.', type: 'skill' },
      { name: 'Relentless Endurance', description: 'Drop to 1 HP instead of 0 once per long rest.', type: 'defense' },
      { name: 'Savage Attacks', description: 'Roll extra damage die on critical hits.', type: 'attack' },
    ],
    subraces: {},
  },
  tiefling: {
    key: 'tiefling',
    name: 'Tiefling',
    description: 'Tieflings are humans with infernal heritage.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { cha: 2, int: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Hellish Resistance', description: 'Resistance to fire damage.', type: 'defense' },
      { name: 'Infernal Legacy', description: 'Thaumaturgy, hellish rebuke, darkness.', type: 'spell' },
    ],
    subraces: {
      asmodeus: { key: 'tiefling.asmodeus', name: 'Asmodeus', abilityScoreIncrease: { int: 1 }, features: [] },
      baalzebul: { key: 'tiefling.baalzebul', name: 'Baalzebul', abilityScoreIncrease: { int: 1 }, features: [] },
      dispater: { key: 'tiefling.dispater', name: 'Dispater', abilityScoreIncrease: { dex: 1 }, features: [] },
      fierna: { key: 'tiefling.fierna', name: 'Fierna', abilityScoreIncrease: { wis: 1 }, features: [] },
      glasya: { key: 'tiefling.glasya', name: 'Glasya', abilityScoreIncrease: { dex: 1 }, features: [] },
      levistus: { key: 'tiefling.levistus', name: 'Levistus', abilityScoreIncrease: { con: 1 }, features: [] },
      mammon: { key: 'tiefling.mammon', name: 'Mammon', abilityScoreIncrease: { int: 1 }, features: [] },
      mephistopheles: { key: 'tiefling.mephistopheles', name: 'Mephistopheles', abilityScoreIncrease: { int: 1 }, features: [] },
      zariel: { key: 'tiefling.zariel', name: 'Zariel', abilityScoreIncrease: { str: 1 }, features: [] },
    },
  },
}

// Helper: Get all races (including subraces) - PURE JS, NO JSX
export const getAllRaces = () => {
  const races = []
  Object.entries(raceData).forEach(([key, race]) => {
    races.push({ key, name: race.name, description: race.description, isSubrace: false })
    if (race.subraces) {
      Object.entries(race.subraces).forEach(([subKey, subrace]) => {
        races.push({ key: subrace.key, name: subrace.name, description: subrace.description, parentRace: key, isSubrace: true })
      })
    }
  })
  return races
}

// Helper: Get race or subrace data
export const getRaceData = (raceKey) => {
  if (raceKey.includes('.')) {
    const [baseKey, subKey] = raceKey.split('.')
    const baseRace = raceData[baseKey]
    if (baseRace && baseRace.subraces[subKey]) {
      return { ...baseRace, ...baseRace.subraces[subKey], isSubrace: true, baseRaceName: baseRace.name }
    }
  }
  return { ...raceData[raceKey], isSubrace: false }
}

// Helper: Get all features for a race (base + subrace)
export const getRaceFeatures = (raceKey) => {
  const race = getRaceData(raceKey)
  const features = [...(race.features || [])]
  if (race.isSubrace) {
    const baseRace = raceData[raceKey.split('.')[0]]
    if (baseRace) {
      baseRace.features.forEach(feature => {
        if (!features.find(f => f.name === feature.name)) {
          features.push(feature)
        }
      })
    }
  }
  return features
}

export default raceData