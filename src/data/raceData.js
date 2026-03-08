// D&D 5e Complete Races - ALL Subraces from CSV
export const raceData = {
  human: {
    key: 'human',
    name: 'Human',
    source: 'PHB',
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
      standard: {
        key: 'human.standard',
        name: 'Standard Human',
        source: 'PHB',
        abilityScoreIncrease: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
        features: [],
      },
      variant: {
        key: 'human.variant',
        name: 'Variant Human',
        source: 'PHB',
        abilityScoreIncrease: {},
        features: [
          { name: 'Ability Score Increase', description: 'Two different ability scores increase by 1.', type: 'ability' },
          { name: 'Skills', description: 'You gain proficiency in one skill of your choice.', type: 'skill' },
          { name: 'Feat', description: 'You gain one feat of your choice.', type: 'feat' },
        ],
      },
      markOfFinding: {
        key: 'human.markOfFinding',
        name: 'Mark of Finding',
        source: 'ERLW',
        abilityScoreIncrease: { wis: 1, cha: 1 },
        features: [
          { name: 'Intuitive Direction', description: 'You always know which way is north.', type: 'special' },
          { name: 'Finder\'s Magic', description: 'You can cast hunter\'s mark once per long rest.', type: 'spell' },
        ],
      },
      markOfHandling: {
        key: 'human.markOfHandling',
        name: 'Mark of Handling',
        source: 'ERLW',
        abilityScoreIncrease: { wis: 1, cha: 1 },
        features: [
          { name: 'Intuitive Direction', description: 'You always know which way is north.', type: 'special' },
          { name: 'Handler\'s Magic', description: 'You can cast beast bond and speak with animals.', type: 'spell' },
        ],
      },
      markOfMaking: {
        key: 'human.markOfMaking',
        name: 'Mark of Making',
        source: 'ERLW',
        abilityScoreIncrease: { int: 1, cha: 1 },
        features: [
          { name: 'Intuitive Direction', description: 'You always know which way is north.', type: 'special' },
          { name: 'Maker\'s Magic', description: 'You can cast mending and magic weapon.', type: 'spell' },
        ],
      },
      markOfPassage: {
        key: 'human.markOfPassage',
        name: 'Mark of Passage',
        source: 'ERLW',
        abilityScoreIncrease: { dex: 1, cha: 1 },
        features: [
          { name: 'Intuitive Direction', description: 'You always know which way is north.', type: 'special' },
          { name: 'Passage\'s Magic', description: 'You can cast expeditious retreat and misty step.', type: 'spell' },
        ],
      },
      markOfSentinel: {
        key: 'human.markOfSentinel',
        name: 'Mark of Sentinel',
        source: 'ERLW',
        abilityScoreIncrease: { str: 1, cha: 1 },
        features: [
          { name: 'Intuitive Direction', description: 'You always know which way is north.', type: 'special' },
          { name: 'Sentinel\'s Magic', description: 'You can cast alarm and shield.', type: 'spell' },
        ],
      },
      keldon: {
        key: 'human.keldon',
        name: 'Keldon Human',
        source: 'Plane Shift Dominaria',
        abilityScoreIncrease: { str: 2, con: 1 },
        features: [
          { name: 'Keldon Fire', description: 'You have resistance to fire damage.', type: 'defense' },
        ],
      },
      gavony: {
        key: 'human.gavony',
        name: 'Gavony Human',
        source: 'Plane Shift Innistrad',
        abilityScoreIncrease: { wis: 2, cha: 1 },
        features: [
          { name: 'Innistrad Origin', description: 'You are from Gavony on Innistrad.', type: 'special' },
        ],
      },
      kessig: {
        key: 'human.kessig',
        name: 'Kessig Human',
        source: 'Plane Shift Innistrad',
        abilityScoreIncrease: { dex: 2, wis: 1 },
        features: [
          { name: 'Innistrad Origin', description: 'You are from Kessig on Innistrad.', type: 'special' },
        ],
      },
      nephalia: {
        key: 'human.nephalia',
        name: 'Nephalia Human',
        source: 'Plane Shift Innistrad',
        abilityScoreIncrease: { int: 2, cha: 1 },
        features: [
          { name: 'Innistrad Origin', description: 'You are from Nephalia on Innistrad.', type: 'special' },
        ],
      },
      stensia: {
        key: 'human.stensia',
        name: 'Stensia Human',
        source: 'Plane Shift Innistrad',
        abilityScoreIncrease: { str: 2, cha: 1 },
        features: [
          { name: 'Innistrad Origin', description: 'You are from Stensia on Innistrad.', type: 'special' },
        ],
      },
    },
  },

  elf: {
    key: 'elf',
    name: 'Elf',
    source: 'PHB',
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
      highElf: { key: 'elf.highElf', name: 'High Elf', source: 'PHB', abilityScoreIncrease: { int: 1 }, features: [
        { name: 'Cantrip', description: 'You know one wizard cantrip.', type: 'spell' },
        { name: 'Elf Weapon Training', description: 'Longsword, shortsword, shortbow, longbow.', type: 'weapon' },
      ]},
      woodElf: { key: 'elf.woodElf', name: 'Wood Elf', source: 'PHB', abilityScoreIncrease: { wis: 1 }, features: [
        { name: 'Fleet of Foot', description: 'Speed 35 feet.', type: 'speed' },
        { name: 'Mask of the Wild', description: 'Hide when lightly obscured by nature.', type: 'skill' },
      ]},
      drow: { key: 'elf.drow', name: 'Drow (Dark Elf)', source: 'PHB', abilityScoreIncrease: { cha: 1 }, features: [
        { name: 'Superior Darkvision', description: 'Darkvision 120 feet.', type: 'senses' },
        { name: 'Sunlight Sensitivity', description: 'Disadvantage in sunlight.', type: 'weakness' },
        { name: 'Drow Magic', description: 'Dancing lights, faerie fire, darkness.', type: 'spell' },
      ]},
      eladrin: { key: 'elf.eladrin', name: 'Eladrin', source: 'MToF', abilityScoreIncrease: { int: 1 }, features: [
        { name: 'Fey Step', description: 'Misty step once per long rest.', type: 'spell' },
      ]},
      seaElf: { key: 'elf.seaElf', name: 'Sea Elf', source: 'MToF', abilityScoreIncrease: { con: 1 }, features: [
        { name: 'Child of the Sea', description: 'Swim speed 30 feet, breathe air and water.', type: 'movement' },
      ]},
      shadarKai: { key: 'elf.shadarKai', name: 'Shadar-Kai', source: 'MToF', abilityScoreIncrease: { con: 1 }, features: [
        { name: 'Necrotic Resistance', description: 'Resistance to necrotic damage.', type: 'defense' },
        { name: 'Blessing of the Raven Queen', description: 'Teleport 30 feet once per long rest.', type: 'spell' },
      ]},
    },
  },

  dwarf: {
    key: 'dwarf',
    name: 'Dwarf',
    source: 'PHB',
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
      hillDwarf: { key: 'dwarf.hillDwarf', name: 'Hill Dwarf', source: 'PHB', abilityScoreIncrease: { wis: 1 }, features: [
        { name: 'Dwarven Toughness', description: 'HP max increases by 1, and by 1 each level.', type: 'hp' },
      ]},
      mountainDwarf: { key: 'dwarf.mountainDwarf', name: 'Mountain Dwarf', source: 'PHB', abilityScoreIncrease: { str: 2 }, features: [
        { name: 'Dwarven Armor Training', description: 'Light and medium armor proficiency.', type: 'armor' },
      ]},
      duergar: { key: 'dwarf.duergar', name: 'Duergar (Gray Dwarf)', source: 'SCAG', abilityScoreIncrease: { str: 1 }, features: [
        { name: 'Duergar Resilience', description: 'Advantage vs. poison, spells, illusions.', type: 'defense' },
        { name: 'Duergar Magic', description: 'Enlarge/reduce and invisibility once each.', type: 'spell' },
      ]},
    },
  },

  halfling: {
    key: 'halfling',
    name: 'Halfling',
    source: 'PHB',
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
      lightfoot: { key: 'halfling.lightfoot', name: 'Lightfoot Halfling', source: 'PHB', abilityScoreIncrease: { cha: 1 }, features: [
        { name: 'Naturally Stealthy', description: 'Hide behind larger creatures.', type: 'skill' },
      ]},
      stout: { key: 'halfling.stout', name: 'Stout Halfling', source: 'PHB', abilityScoreIncrease: { con: 1 }, features: [
        { name: 'Stout Resilience', description: 'Advantage vs. poison, resistance to poison damage.', type: 'defense' },
      ]},
      ghostwise: { key: 'halfling.ghostwise', name: 'Ghostwise Halfling', source: 'SCAG', abilityScoreIncrease: { wis: 1 }, features: [
        { name: 'Silent Speech', description: 'Telepathy within 30 feet.', type: 'special' },
      ]},
    },
  },

  gnome: {
    key: 'gnome',
    name: 'Gnome',
    source: 'PHB',
    description: 'A gnome\'s energy and enthusiasm shines through.',
    speed: 25,
    size: 'Small',
    abilityScoreIncrease: { int: 2 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Gnome Cunning', description: 'Advantage on INT/WIS/CHA saves vs. magic.', type: 'defense' },
    ],
    subraces: {
      forestGnome: { key: 'gnome.forestGnome', name: 'Forest Gnome', source: 'PHB', abilityScoreIncrease: { dex: 1 }, features: [
        { name: 'Natural Illusionist', description: 'Minor illusion cantrip.', type: 'spell' },
        { name: 'Speak with Small Beasts', description: 'Communicate with small beasts.', type: 'special' },
      ]},
      rockGnome: { key: 'gnome.rockGnome', name: 'Rock Gnome', source: 'PHB', abilityScoreIncrease: { con: 1 }, features: [
        { name: 'Artificer\'s Lore', description: 'Double proficiency on History checks about magic items.', type: 'skill' },
        { name: 'Tinker', description: 'Craft clockwork devices.', type: 'tool' },
      ]},
      deepGnome: { key: 'gnome.deepGnome', name: 'Deep Gnome (Svirfneblin)', source: 'SCAG', abilityScoreIncrease: { dex: 1 }, features: [
        { name: 'Superior Darkvision', description: 'Darkvision 120 feet.', type: 'senses' },
        { name: 'Stone Camouflage', description: 'Advantage on Stealth in rocky terrain.', type: 'skill' },
      ]},
    },
  },

  dragonborn: {
    key: 'dragonborn',
    name: 'Dragonborn',
    source: 'PHB',
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

  halfElf: {
    key: 'halfElf',
    name: 'Half-Elf',
    source: 'PHB',
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
    source: 'PHB',
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
    source: 'PHB',
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
      asmodeus: { key: 'tiefling.asmodeus', name: 'Asmodeus', source: 'MToF', abilityScoreIncrease: { int: 1 }, features: [] },
      baalzebul: { key: 'tiefling.baalzebul', name: 'Baalzebul', source: 'MToF', abilityScoreIncrease: { int: 1 }, features: [] },
      dispater: { key: 'tiefling.dispater', name: 'Dispater', source: 'MToF', abilityScoreIncrease: { dex: 1 }, features: [] },
      fierna: { key: 'tiefling.fierna', name: 'Fierna', source: 'MToF', abilityScoreIncrease: { wis: 1 }, features: [] },
      glasya: { key: 'tiefling.glasya', name: 'Glasya', source: 'MToF', abilityScoreIncrease: { dex: 1 }, features: [] },
      levistus: { key: 'tiefling.levistus', name: 'Levistus', source: 'MToF', abilityScoreIncrease: { con: 1 }, features: [] },
      mammon: { key: 'tiefling.mammon', name: 'Mammon', source: 'MToF', abilityScoreIncrease: { int: 1 }, features: [] },
      mephistopheles: { key: 'tiefling.mephistopheles', name: 'Mephistopheles', source: 'MToF', abilityScoreIncrease: { int: 1 }, features: [] },
      zariel: { key: 'tiefling.zariel', name: 'Zariel', source: 'MToF', abilityScoreIncrease: { str: 1 }, features: [] },
    },
  },

  // ===== EXPANDED RACES =====
  aarakocra: {
    key: 'aarakocra',
    name: 'Aarakocra',
    source: 'EEPC',
    description: 'Bird-like humanoids native to the Elemental Plane of Air.',
    speed: 25,
    flySpeed: 50,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, wis: 1 },
    features: [
      { name: 'Flight', description: 'Flying speed 50 feet.', type: 'movement' },
      { name: 'Talons', description: 'Unarmed strikes deal 1d4 + STR slashing.', type: 'attack' },
    ],
    subraces: {},
  },

  aasimar: {
    key: 'aasimar',
    name: 'Aasimar',
    source: 'VGtM',
    description: 'Humans with celestial heritage.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { cha: 2 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Celestial Resistance', description: 'Resistance to necrotic and radiant damage.', type: 'defense' },
      { name: 'Healing Hands', description: 'Restore HP equal to your level.', type: 'special' },
    ],
    subraces: {
      protector: { key: 'aasimar.protector', name: 'Protector', source: 'VGtM', abilityScoreIncrease: { wis: 1 }, features: [
        { name: 'Radiant Soul', description: 'Fly and deal extra radiant damage.', type: 'special' },
      ]},
      scourge: { key: 'aasimar.scourge', name: 'Scourge', source: 'VGtM', abilityScoreIncrease: { con: 1 }, features: [
        { name: 'Radiant Consumption', description: 'Deal radiant damage to nearby creatures.', type: 'special' },
      ]},
      fallen: { key: 'aasimar.fallen', name: 'Fallen', source: 'VGtM', abilityScoreIncrease: { str: 1 }, features: [
        { name: 'Necrotic Shroud', description: 'Frighten creatures near you.', type: 'special' },
      ]},
    },
  },

  changeling: {
    key: 'changeling',
    name: 'Changeling',
    source: 'ERLW',
    description: 'Shapeshifters who can alter their appearance.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { cha: 2, dex: 1 },
    features: [
      { name: 'Shapechanger', description: 'Change appearance and voice at will.', type: 'special' },
      { name: 'Changeling Instincts', description: 'Two skills from Deception, Insight, Intimidation, Persuasion.', type: 'skill' },
    ],
    subraces: {},
  },

  firbolg: {
    key: 'firbolg',
    name: 'Firbolg',
    source: 'VGtM',
    description: 'Gentle giants who live in harmony with nature.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { wis: 2, str: 1 },
    features: [
      { name: 'Firbolg Magic', description: 'Detect magic and disguise self.', type: 'spell' },
      { name: 'Hidden Step', description: 'Turn invisible as bonus action.', type: 'special' },
      { name: 'Powerful Build', description: 'Count as one size larger for carrying capacity.', type: 'special' },
    ],
    subraces: {},
  },

  goliath: {
    key: 'goliath',
    name: 'Goliath',
    source: 'VGtM',
    description: 'Tower humanoids who live in the mountains.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, con: 1 },
    features: [
      { name: 'Natural Athlete', description: 'Proficiency in Athletics.', type: 'skill' },
      { name: 'Stone\'s Endurance', description: 'Reduce damage by 1d12 + CON.', type: 'defense' },
      { name: 'Powerful Build', description: 'Count as one size larger for carrying capacity.', type: 'special' },
    ],
    subraces: {},
  },

  kenku: {
    key: 'kenku',
    name: 'Kenku',
    source: 'VGtM',
    description: 'Bird-like humanoids who communicate through mimicry.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, wis: 1 },
    features: [
      { name: 'Expert Forgery', description: 'Duplicate handwriting and craft.', type: 'skill' },
      { name: 'Kenku Training', description: 'Two skills from Acrobatics, Deception, Stealth, Sleight of Hand.', type: 'skill' },
      { name: 'Mimicry', description: 'Mimic sounds you\'ve heard.', type: 'special' },
    ],
    subraces: {},
  },

  tabaxi: {
    key: 'tabaxi',
    name: 'Tabaxi',
    source: 'VGtM',
    description: 'Cat-like humanoids known for curiosity and agility.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, cha: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Feline Agility', description: 'Speed doubles for a turn.', type: 'movement' },
      { name: 'Cat\'s Claws', description: 'Climbing speed 20 feet.', type: 'movement' },
    ],
    subraces: {},
  },

  tortle: {
    key: 'tortle',
    name: 'Tortle',
    source: 'TP',
    description: 'Turtle-like humanoids with natural armor.',
    speed: 30,
    swimSpeed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, wis: 1 },
    features: [
      { name: 'Natural Armor', description: 'AC equals 17 + Dex modifier.', type: 'defense' },
      { name: 'Hold Breath', description: 'Hold breath for up to 1 hour.', type: 'special' },
      { name: 'Shell Defense', description: 'Withdraw into shell for +4 AC.', type: 'defense' },
    ],
    subraces: {},
  },

  triton: {
    key: 'triton',
    name: 'Triton',
    source: 'VGtM',
    description: 'Amphibious humanoids from the ocean depths.',
    speed: 30,
    swimSpeed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 1, con: 1, cha: 1 },
    features: [
      { name: 'Amphibious', description: 'Breathe air and water.', type: 'special' },
      { name: 'Control Air and Water', description: 'Fog cloud, gust of wind, wall of water.', type: 'spell' },
      { name: 'Emissary of the Sea', description: 'Communicate with aquatic creatures.', type: 'special' },
    ],
    subraces: {},
  },

  warforged: {
    key: 'warforged',
    name: 'Warforged',
    source: 'ERLW',
    description: 'Living constructs created for war.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 2 },
    features: [
      { name: 'Construct', description: 'Your creature type is Construct.', type: 'special' },
      { name: 'Integrated Protection', description: 'Built-in armor (AC 13 + Dex + proficiency).', type: 'defense' },
      { name: 'Sentry\'s Rest', description: 'Don\'t need to sleep.', type: 'special' },
    ],
    subraces: {},
  },

  kalashtar: {
    key: 'kalashtar',
    name: 'Kalashtar',
    source: 'ERLW',
    description: 'Humans bonded to spirits from the Plane of Dreams.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { wis: 2, cha: 1 },
    features: [
      { name: 'Dual Mind', description: 'Advantage on Wisdom saves.', type: 'defense' },
      { name: 'Mental Discipline', description: 'Resistance to psychic damage.', type: 'defense' },
      { name: 'Mind Link', description: 'Telepathic communication.', type: 'special' },
    ],
    subraces: {},
  },

  shifter: {
    key: 'shifter',
    name: 'Shifter',
    source: 'ERLW',
    description: 'Humans with lycanthrope heritage.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Shifting', description: 'Shift as bonus action gaining temporary HP.', type: 'special' },
    ],
    subraces: {
      beasthide: { key: 'shifter.beasthide', name: 'Beasthide', source: 'ERLW', abilityScoreIncrease: { con: 2 }, features: [
        { name: 'Shifting Feature', description: '+1 AC while shifted.', type: 'defense' },
      ]},
      longtooth: { key: 'shifter.longtooth', name: 'Longtooth', source: 'ERLW', abilityScoreIncrease: { str: 2 }, features: [
        { name: 'Shifting Feature', description: 'Bite attack while shifted.', type: 'attack' },
      ]},
      swiftstride: { key: 'shifter.swiftstride', name: 'Swiftstride', source: 'ERLW', abilityScoreIncrease: { cha: 2 }, features: [
        { name: 'Shifting Feature', description: '+10 feet speed while shifted.', type: 'movement' },
      ]},
      wildhunt: { key: 'shifter.wildhunt', name: 'Wildhunt', source: 'ERLW', abilityScoreIncrease: { wis: 2 }, features: [
        { name: 'Shifting Feature', description: 'Can\'t be surprised while shifted.', type: 'defense' },
      ]},
    },
  },

  bugbear: {
    key: 'bugbear',
    name: 'Bugbear',
    source: 'VGtM',
    description: 'Large goblinoids known for their strength.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, dex: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Fury of the Small', description: 'Extra 1d6 damage to smaller creatures.', type: 'attack' },
      { name: 'Long-Limbed', description: '+5 feet melee reach.', type: 'attack' },
    ],
    subraces: {},
  },

  goblin: {
    key: 'goblin',
    name: 'Goblin',
    source: 'VGtM',
    description: 'Small, cunning humanoids.',
    speed: 30,
    size: 'Small',
    abilityScoreIncrease: { dex: 2, con: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Fury of the Small', description: 'Extra 1d6 damage once per short rest.', type: 'attack' },
      { name: 'Nimble Escape', description: 'Disengage or Hide as bonus action.', type: 'special' },
    ],
    subraces: {},
  },

  hobgoblin: {
    key: 'hobgoblin',
    name: 'Hobgoblin',
    source: 'VGtM',
    description: 'Disciplined martial humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 2, int: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Martial Training', description: 'Martial weapons and medium armor.', type: 'weapon' },
      { name: 'Saving Face', description: 'Add 1d10 to missed attack rolls.', type: 'special' },
    ],
    subraces: {},
  },

  kobold: {
    key: 'kobold',
    name: 'Kobold',
    source: 'VGtM',
    description: 'Small draconic humanoids.',
    speed: 30,
    size: 'Small',
    abilityScoreIncrease: { dex: 2 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Draconic Cry', description: 'Allies gain advantage on attacks.', type: 'special' },
      { name: 'Pack Tactics', description: 'Advantage on attacks near allies.', type: 'special' },
    ],
    subraces: {},
  },

  lizardfolk: {
    key: 'lizardfolk',
    name: 'Lizardfolk',
    source: 'VGtM',
    description: 'Reptilian humanoids.',
    speed: 30,
    swimSpeed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 2, wis: 1 },
    features: [
      { name: 'Bite', description: 'Natural weapon 1d6 + STR piercing.', type: 'attack' },
      { name: 'Cunning Artisan', description: 'Craft items from creature remains.', type: 'special' },
      { name: 'Natural Armor', description: 'AC equals 13 + Dex.', type: 'defense' },
    ],
    subraces: {},
  },

  orc: {
    key: 'orc',
    name: 'Orc',
    source: 'VGtM',
    description: 'Fierce warrior humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, con: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Aggressive', description: 'Move toward enemies as bonus action.', type: 'movement' },
      { name: 'Powerful Build', description: 'Count as one size larger for carrying capacity.', type: 'special' },
    ],
    subraces: {},
  },

  yuanTi: {
    key: 'yuanTi',
    name: 'Yuan-Ti Pureblood',
    source: 'VGtM',
    description: 'Serpent humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { int: 1, cha: 2 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Magic Resistance', description: 'Advantage on saves vs. spells.', type: 'defense' },
      { name: 'Poison Immunity', description: 'Immune to poison damage and condition.', type: 'defense' },
    ],
    subraces: {},
  },

  // ===== TCoE LINEAGES =====
  customLineage: {
    key: 'customLineage',
    name: 'Custom Lineage',
    source: 'TCoE',
    description: 'Create your own unique lineage.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: {},
    features: [
      { name: 'Ability Score Increase', description: 'One ability score increases by 2.', type: 'ability' },
      { name: 'Darkvision or Skill', description: 'Darkvision 60ft OR one skill proficiency.', type: 'special' },
      { name: 'Feat', description: 'One feat of your choice.', type: 'feat' },
    ],
    subraces: {},
  },

  dhampir: {
    key: 'dhampir',
    name: 'Dhampir',
    source: 'VRGtR',
    description: 'Living humans with vampire heritage.',
    speed: 35,
    size: 'Medium',
    abilityScoreIncrease: { str: 1, dex: 1, cha: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Deathless Nature', description: 'Don\'t need to breathe.', type: 'special' },
      { name: 'Vampiric Bite', description: 'Natural weapon 1d4 + CON piercing.', type: 'attack' },
      { name: 'Spider Climb', description: 'Climbing speed equal to walking speed.', type: 'movement' },
    ],
    subraces: {},
  },

  hexblood: {
    key: 'hexblood',
    name: 'Hexblood',
    source: 'VRGtR',
    description: 'Humans transformed by hag magic.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 1, int: 1, wis: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Eerie Token', description: 'Create a magical token of yourself.', type: 'special' },
      { name: 'Hag Magic', description: 'One cantrip from druid or warlock lists.', type: 'spell' },
    ],
    subraces: {},
  },

  reborn: {
    key: 'reborn',
    name: 'Reborn',
    source: 'VRGtR',
    description: 'Those who have died and returned to life.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 1, int: 1, wis: 1 },
    features: [
      { name: 'Deathless Nature', description: 'Don\'t need to breathe, eat, or drink.', type: 'special' },
      { name: 'Knowledge from a Past Life', description: 'Two skill proficiencies.', type: 'skill' },
      { name: 'Wounded Healer', description: 'Stabilize dying creatures as bonus action.', type: 'special' },
    ],
    subraces: {},
  },

  // ===== SPELLJAMMER =====
  astralElf: {
    key: 'astralElf',
    name: 'Astral Elf',
    source: 'Spelljammer',
    description: 'Elves who live in wildspace.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, cha: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Fey Ancestry', description: 'Advantage vs. charmed.', type: 'defense' },
      { name: 'Starlight Step', description: 'Teleport 30 feet once per long rest.', type: 'spell' },
    ],
    subraces: {},
  },

  autognome: {
    key: 'autognome',
    name: 'Autognome',
    source: 'Spelljammer',
    description: 'Living construct gnomes.',
    speed: 30,
    size: 'Small',
    abilityScoreIncrease: { int: 2, con: 1 },
    features: [
      { name: 'Construct', description: 'Your creature type is Construct.', type: 'special' },
      { name: 'Built for Success', description: 'Add 1d4 to one ability check per long rest.', type: 'special' },
      { name: 'Healing Machine', description: 'Can be healed by mending spell.', type: 'special' },
    ],
    subraces: {},
  },

  giff: {
    key: 'giff',
    name: 'Giff',
    source: 'Spelljammer',
    description: 'Hippo-like mercenaries.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, wis: 1 },
    features: [
      { name: 'Astral Spark', description: 'Extra force damage once per long rest.', type: 'attack' },
      { name: 'Firearms Proficiency', description: 'Proficiency with firearms.', type: 'weapon' },
      { name: 'Powerful Build', description: 'Count as one size larger for carrying capacity.', type: 'special' },
    ],
    subraces: {},
  },

  hadozee: {
    key: 'hadozee',
    name: 'Hadozee',
    source: 'Spelljammer',
    description: 'Gliding ape-like humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, con: 1 },
    features: [
      { name: 'Glide', description: 'Glide up to 5 times your height when falling.', type: 'movement' },
      { name: 'Feet First', description: 'Take no damage from falling.', type: 'defense' },
    ],
    subraces: {},
  },

  plasmoid: {
    key: 'plasmoid',
    name: 'Plasmoid',
    source: 'Spelljammer',
    description: 'Amorphous ooze creatures.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 2, int: 1 },
    features: [
      { name: 'Amorphous', description: 'Squeeze through spaces as small as 1 inch.', type: 'special' },
      { name: 'Hold Breath', description: 'Hold breath for up to 1 hour.', type: 'special' },
      { name: 'Natural Weapon', description: 'Pseudopod deals 1d6 + STR bludgeoning.', type: 'attack' },
    ],
    subraces: {},
  },

  thriKreen: {
    key: 'thriKreen',
    name: 'Thri-Kreen',
    source: 'Spelljammer',
    description: 'Insectoid humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, wis: 1 },
    features: [
      { name: 'Second Wind', description: 'Regain 1d10 + level HP once per long rest.', type: 'defense' },
      { name: 'Sleepless', description: 'Don\'t need to sleep.', type: 'special' },
      { name: 'Natural Armor', description: 'AC equals 13 + Dex.', type: 'defense' },
    ],
    subraces: {},
  },

  // ===== RAVNICA =====
  centaur: {
    key: 'centaur',
    name: 'Centaur',
    source: 'GGtR',
    description: 'Half-human, half-horse humanoids.',
    speed: 40,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, wis: 1 },
    features: [
      { name: 'Fey', description: 'Your creature type is Fey.', type: 'special' },
      { name: 'Charge', description: 'Move 30 feet, bonus action attack.', type: 'attack' },
      { name: 'Hooves', description: 'Natural weapons 1d4 + STR bludgeoning.', type: 'attack' },
    ],
    subraces: {},
  },

  loxodon: {
    key: 'loxodon',
    name: 'Loxodon',
    source: 'GGtR',
    description: 'Elephant-like humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 2, wis: 1 },
    features: [
      { name: 'Natural Armor', description: 'AC equals 12 + CON.', type: 'defense' },
      { name: 'Powerful Build', description: 'Count as one size larger for carrying capacity.', type: 'special' },
      { name: 'Trunk', description: 'Use trunk to grab and make unarmed strikes.', type: 'attack' },
    ],
    subraces: {},
  },

  minotaur: {
    key: 'minotaur',
    name: 'Minotaur',
    source: 'GGtR',
    description: 'Bull-headed humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, con: 1 },
    features: [
      { name: 'Horns', description: 'Natural weapons 1d6 + STR piercing.', type: 'attack' },
      { name: 'Goring Rush', description: 'Dash, bonus action horn attack.', type: 'attack' },
      { name: 'Hammering Horns', description: 'Push creature 10 feet when hitting with horns.', type: 'attack' },
    ],
    subraces: {},
  },

  vedalken: {
    key: 'vedalken',
    name: 'Vedalken',
    source: 'GGtR',
    description: 'Logical, blue-skinned humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { int: 2, wis: 1 },
    features: [
      { name: 'Vedalken Dispassion', description: 'Advantage on INT/WIS/CHA saves vs. charmed/frightened.', type: 'defense' },
      { name: 'Tireless Precision', description: 'One INT/WIS/CHA skill proficiency.', type: 'skill' },
    ],
    subraces: {},
  },

  simicHybrid: {
    key: 'simicHybrid',
    name: 'Simic Hybrid',
    source: 'GGtR',
    description: 'Genetically modified humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 2 },
    features: [
      { name: 'Animal Enhancement', description: 'Choose: Darkvision, Grasping Appendages, or Gliding Skin.', type: 'special' },
    ],
    subraces: {},
  },

  // ===== THEROS =====
  leonin: {
    key: 'leonin',
    name: 'Leonin',
    source: 'MOoT',
    description: 'Lion-like humanoids.',
    speed: 35,
    size: 'Medium',
    abilityScoreIncrease: { con: 2, cha: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Claws', description: 'Natural weapons 1d4 + STR slashing.', type: 'attack' },
      { name: 'Daunting Roar', description: 'Roar to frighten creatures within 10 feet.', type: 'special' },
    ],
    subraces: {},
  },

  satyr: {
    key: 'satyr',
    name: 'Satyr',
    source: 'MOoT',
    description: 'Goat-legged fey humanoids.',
    speed: 35,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, cha: 1 },
    features: [
      { name: 'Fey', description: 'Your creature type is Fey.', type: 'special' },
      { name: 'Magic Resistance', description: 'Advantage on saves vs. spells.', type: 'defense' },
      { name: 'Ram', description: 'Natural weapons 1d4 + STR bludgeoning.', type: 'attack' },
    ],
    subraces: {},
  },

  // ===== WITCHLIGHT =====
  fairy: {
    key: 'fairy',
    name: 'Fairy',
    source: 'WBtW',
    description: 'Tiny fey creatures with magical abilities.',
    speed: 30,
    flySpeed: 30,
    size: 'Small',
    abilityScoreIncrease: { dex: 1, cha: 2 },
    features: [
      { name: 'Fey', description: 'Your creature type is Fey.', type: 'special' },
      { name: 'Flight', description: 'Flying speed 30 feet.', type: 'movement' },
      { name: 'Fairy Magic', description: 'Druidcraft, faerie fire, enlarge/reduce.', type: 'spell' },
    ],
    subraces: {},
  },

  harengon: {
    key: 'harengon',
    name: 'Harengon',
    source: 'WBtW',
    description: 'Rabbit-like humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, wis: 1 },
    features: [
      { name: 'Fey', description: 'Your creature type is Fey.', type: 'special' },
      { name: 'Hare-Trigger', description: 'Add proficiency bonus to initiative.', type: 'special' },
      { name: 'Lucky Footwork', description: 'Add 1d4 to failed Dex saves.', type: 'defense' },
      { name: 'Rabbit Hop', description: 'Jump 15 feet as bonus action.', type: 'movement' },
    ],
    subraces: {},
  },

  // ===== OTHER =====
  owlin: {
    key: 'owlin',
    name: 'Owlin',
    source: 'Strixhaven',
    description: 'Owl-like humanoids.',
    speed: 30,
    flySpeed: 60,
    size: 'Medium',
    abilityScoreIncrease: { dex: 1, wis: 1, int: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Flight', description: 'Flying speed 60 feet.', type: 'movement' },
      { name: 'Silent Feathers', description: 'Proficiency in Stealth.', type: 'skill' },
    ],
    subraces: {},
  },

  kender: {
    key: 'kender',
    name: 'Kender',
    source: 'Dragonlance',
    description: 'Curious, fearless halfling-like humanoids.',
    speed: 30,
    size: 'Small',
    abilityScoreIncrease: { dex: 2, cha: 1 },
    features: [
      { name: 'Fearless', description: 'Advantage on saves vs. frightened.', type: 'defense' },
      { name: 'Kender Pockets', description: 'Retrieve small items quickly.', type: 'special' },
      { name: 'Taunt', description: 'Provoke enemies as bonus action.', type: 'special' },
    ],
    subraces: {},
  },

  locathah: {
    key: 'locathah',
    name: 'Locathah',
    source: 'LR',
    description: 'Fish-like aquatic humanoids.',
    speed: 30,
    swimSpeed: 40,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, wis: 1 },
    features: [
      { name: 'Aquatic', description: 'Breathe only underwater.', type: 'special' },
      { name: 'Leviathan Will', description: 'Advantage on saves vs. charmed/frightened.', type: 'defense' },
    ],
    subraces: {},
  },

  grung: {
    key: 'grung',
    name: 'Grung',
    source: 'OGA',
    description: 'Poisonous frog humanoids.',
    speed: 25,
    swimSpeed: 25,
    size: 'Small',
    abilityScoreIncrease: { dex: 2, wis: 1 },
    features: [
      { name: 'Arboreal Leap', description: 'Climbing speed 25 feet.', type: 'movement' },
      { name: 'Poisonous Skin', description: 'Creatures touching you take poison damage.', type: 'defense' },
      { name: 'Standing Leap', description: 'Jump distance doubled.', type: 'movement' },
    ],
    subraces: {},
  },

  verdan: {
    key: 'verdan',
    name: 'Verdan',
    source: 'AI',
    description: 'Gelatinous telepathic humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 2, cha: 1 },
    features: [
      { name: 'Black Telepathy', description: 'Telepathy within 30 feet.', type: 'special' },
      { name: 'Limited Telepathy', description: 'Detect thoughts once per long rest.', type: 'spell' },
    ],
    subraces: {},
  },
}

// Helper: Get all race keys for dropdowns
export const getAllRaceKeys = () => {
  const keys = []
  Object.entries(raceData).forEach(([key, race]) => {
    keys.push({ key, name: race.name, isSubrace: false })
    if (race.subraces && Object.keys(race.subraces).length > 0) {
      Object.entries(race.subraces).forEach(([subKey, subrace]) => {
        keys.push({ key: `${key}.${subKey}`, name: subrace.name, isSubrace: true, parent: key })
      })
    }
  })
  return keys
}

// Helper: Get race data by key
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

// Helper: Get all features for a race
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