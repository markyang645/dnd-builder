// D&D 5e Complete Races - ALL Official Sources
// PHB, XGE, MToF, TCoE, ERLW, VGtM, EEPC, SCAG, GGtR, MOoT, LR, TP, AI, OGA, WBtW, Strixhaven, Spelljammer, VRGtR, FToD, DSotDQ, BGG, PSA, EGW, Plane Shift

export const raceData = {
  // ===== CORE PHB RACES (9) =====
  human: {
    key: 'human',
    name: 'Human',
    source: 'PHB',
    description: 'Humans are the most adaptable and ambitious people among the common races. They have widely varying tastes, morals, and customs.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
    features: [
      { name: 'Ability Score Increase', description: 'Your ability scores each increase by 1.', type: 'ability' },
      { name: 'Size', description: 'Humans are Medium creatures.', type: 'size' },
      { name: 'Speed', description: 'Your base walking speed is 30 feet.', type: 'speed' },
      { name: 'Languages', description: 'You can speak, read, and write Common and one extra language of your choice.', type: 'language' },
    ],
    subraces: {
      variant: {
        key: 'human.variant',
        name: 'Variant Human',
        source: 'PHB',
        abilityScoreIncrease: {},
        features: [
          { name: 'Ability Score Increase', description: 'Two different ability scores of your choice increase by 1.', type: 'ability' },
          { name: 'Skills', description: 'You gain proficiency in one skill of your choice.', type: 'skill' },
          { name: 'Feat', description: 'You gain one feat of your choice.', type: 'feat' },
        ],
      },
    },
  },

  elf: {
    key: 'elf',
    name: 'Elf',
    source: 'PHB',
    description: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light.', type: 'senses' },
      { name: 'Keen Senses', description: 'You have proficiency in the Perception skill.', type: 'skill', skill: 'perception' },
      { name: 'Fey Ancestry', description: 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.', type: 'defense' },
      { name: 'Trance', description: 'Elves don\'t need to sleep. Instead, they meditate deeply for 4 hours a day.', type: 'rest' },
      { name: 'Languages', description: 'You can speak, read, and write Common and Elvish.', type: 'language' },
    ],
    subraces: {
      highElf: {
        key: 'elf.highElf',
        name: 'High Elf',
        source: 'PHB',
        abilityScoreIncrease: { int: 1 },
        features: [
          { name: 'Cantrip', description: 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.', type: 'spell' },
          { name: 'Elf Weapon Training', description: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.', type: 'weapon', weapons: ['longsword', 'shortsword', 'shortbow', 'longbow'] },
          { name: 'Extra Language', description: 'You can speak, read, and write one extra language of your choice.', type: 'language' },
        ],
      },
      woodElf: {
        key: 'elf.woodElf',
        name: 'Wood Elf',
        source: 'PHB',
        abilityScoreIncrease: { wis: 1 },
        features: [
          { name: 'Fleet of Foot', description: 'Your base walking speed increases to 35 feet.', type: 'speed', speed: 35 },
          { name: 'Mask of the Wild', description: 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.', type: 'skill' },
          { name: 'Elf Weapon Training', description: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.', type: 'weapon', weapons: ['longsword', 'shortsword', 'shortbow', 'longbow'] },
        ],
      },
      drow: {
        key: 'elf.drow',
        name: 'Drow (Dark Elf)',
        source: 'PHB',
        abilityScoreIncrease: { cha: 1 },
        features: [
          { name: 'Superior Darkvision', description: 'Your darkvision has a range of 120 feet.', type: 'senses', darkvision: 120 },
          { name: 'Sunlight Sensitivity', description: 'You have disadvantage on attack rolls and Perception checks that rely on sight when you, the target, or whatever you are trying to perceive is in direct sunlight.', type: 'weakness' },
          { name: 'Drow Magic', description: 'You know the dancing lights cantrip. At 3rd level, you can cast faerie fire once. At 5th level, you can cast darkness once.', type: 'spell' },
          { name: 'Drow Weapon Training', description: 'You have proficiency with rapiers, shortswords, and hand crossbows.', type: 'weapon', weapons: ['rapier', 'shortsword', 'handCrossbow'] },
        ],
      },
      eladrin: {
        key: 'elf.eladrin',
        name: 'Eladrin',
        source: 'MToF',
        abilityScoreIncrease: { int: 1 },
        features: [
          { name: 'Fey Step', description: 'You can cast misty step once using this trait. You regain the ability to do so when you finish a short or long rest.', type: 'spell' },
          { name: 'Elf Weapon Training', description: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.', type: 'weapon', weapons: ['longsword', 'shortsword', 'shortbow', 'longbow'] },
        ],
      },
      seaElf: {
        key: 'elf.seaElf',
        name: 'Sea Elf',
        source: 'MToF',
        abilityScoreIncrease: { con: 1 },
        features: [
          { name: 'Sea Elf Training', description: 'You have proficiency with the spear, trident, light crossbow, and net.', type: 'weapon', weapons: ['spear', 'trident', 'lightCrossbow', 'net'] },
          { name: 'Child of the Sea', description: 'You have a swimming speed of 30 feet, and you can breathe air and water.', type: 'movement' },
        ],
      },
      shadarKai: {
        key: 'elf.shadarKai',
        name: 'Shadar-Kai',
        source: 'MToF',
        abilityScoreIncrease: { con: 1 },
        features: [
          { name: 'Necrotic Resistance', description: 'You have resistance to necrotic damage.', type: 'defense' },
          { name: 'Blessing of the Raven Queen', description: 'You can teleport up to 30 feet to an unoccupied space you can see. You regain the ability to do so when you finish a long rest.', type: 'spell' },
        ],
      },
    },
  },

  dwarf: {
    key: 'dwarf',
    name: 'Dwarf',
    source: 'PHB',
    description: 'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.',
    speed: 25,
    size: 'Medium',
    abilityScoreIncrease: { con: 2 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet as if it were bright light.', type: 'senses' },
      { name: 'Dwarven Resilience', description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.', type: 'defense' },
      { name: 'Dwarven Combat Training', description: 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.', type: 'weapon', weapons: ['battleaxe', 'handaxe', 'lightHammer', 'warhammer'] },
      { name: 'Tool Proficiency', description: 'You gain proficiency with the artisan\'s tools of your choice.', type: 'tool' },
      { name: 'Stonecunning', description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient.', type: 'skill' },
      { name: 'Languages', description: 'You can speak, read, and write Common and Dwarvish.', type: 'language' },
    ],
    subraces: {
      hillDwarf: {
        key: 'dwarf.hillDwarf',
        name: 'Hill Dwarf',
        source: 'PHB',
        abilityScoreIncrease: { wis: 1 },
        features: [
          { name: 'Dwarven Toughness', description: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.', type: 'hp' },
        ],
      },
      mountainDwarf: {
        key: 'dwarf.mountainDwarf',
        name: 'Mountain Dwarf',
        source: 'PHB',
        abilityScoreIncrease: { str: 2 },
        features: [
          { name: 'Dwarven Armor Training', description: 'You have proficiency with light and medium armor.', type: 'armor', armor: ['light', 'medium'] },
        ],
      },
      duergar: {
        key: 'dwarf.duergar',
        name: 'Duergar (Gray Dwarf)',
        source: 'SCAG',
        abilityScoreIncrease: { str: 1 },
        features: [
          { name: 'Duergar Resilience', description: 'You have advantage on saving throws against poison, spells, and illusions, as well as resistance to poison damage.', type: 'defense' },
          { name: 'Duergar Magic', description: 'You can cast enlarge/reduce and invisibility on yourself once each. You regain the ability at long rest.', type: 'spell' },
        ],
      },
    },
  },

  halfling: {
    key: 'halfling',
    name: 'Halfling',
    source: 'PHB',
    description: 'The comforts of home are the goals of most halflings: a place to settle in peace and quiet.',
    speed: 25,
    size: 'Small',
    abilityScoreIncrease: { dex: 2 },
    features: [
      { name: 'Lucky', description: 'When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.', type: 'special' },
      { name: 'Brave', description: 'You have advantage on saving throws against being frightened.', type: 'defense' },
      { name: 'Halfling Nimbleness', description: 'You can move through the space of any creature that is of a size larger than yours.', type: 'movement' },
      { name: 'Languages', description: 'You can speak, read, and write Common and Halfling.', type: 'language' },
    ],
    subraces: {
      lightfoot: {
        key: 'halfling.lightfoot',
        name: 'Lightfoot Halfling',
        source: 'PHB',
        abilityScoreIncrease: { cha: 1 },
        features: [
          { name: 'Naturally Stealthy', description: 'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.', type: 'skill' },
        ],
      },
      stout: {
        key: 'halfling.stout',
        name: 'Stout Halfling',
        source: 'PHB',
        abilityScoreIncrease: { con: 1 },
        features: [
          { name: 'Stout Resilience', description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.', type: 'defense' },
        ],
      },
      ghostwise: {
        key: 'halfling.ghostwise',
        name: 'Ghostwise Halfling',
        source: 'SCAG',
        abilityScoreIncrease: { wis: 1 },
        features: [
          { name: 'Silent Speech', description: 'You can speak telepathically to any creature within 30 feet of you. The creature understands you only if you share a language.', type: 'special' },
        ],
      },
    },
  },

  dragonborn: {
    key: 'dragonborn',
    name: 'Dragonborn',
    source: 'PHB',
    description: 'Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, cha: 1 },
    features: [
      { name: 'Draconic Ancestry', description: 'Choose a dragon type. You gain damage resistance and a breath weapon based on your ancestry.', type: 'special', options: ['black', 'blue', 'brass', 'bronze', 'copper', 'gold', 'green', 'red', 'silver', 'white'] },
      { name: 'Breath Weapon', description: 'You can use your action to exhale destructive energy. Damage type depends on your ancestry.', type: 'attack' },
      { name: 'Damage Resistance', description: 'You have resistance to the damage type associated with your draconic ancestry.', type: 'defense' },
      { name: 'Languages', description: 'You can speak, read, and write Common and Draconic.', type: 'language' },
    ],
    subraces: {},
  },

  gnome: {
    key: 'gnome',
    name: 'Gnome',
    source: 'PHB',
    description: 'A gnome\'s energy and enthusiasm for living shines through every inch of his or her tiny body.',
    speed: 25,
    size: 'Small',
    abilityScoreIncrease: { int: 2 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet as if it were bright light.', type: 'senses' },
      { name: 'Gnome Cunning', description: 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.', type: 'defense' },
      { name: 'Languages', description: 'You can speak, read, and write Common and Gnomish.', type: 'language' },
    ],
    subraces: {
      forestGnome: {
        key: 'gnome.forestGnome',
        name: 'Forest Gnome',
        source: 'PHB',
        abilityScoreIncrease: { dex: 1 },
        features: [
          { name: 'Natural Illusionist', description: 'You know the minor illusion cantrip.', type: 'spell' },
          { name: 'Speak with Small Beasts', description: 'Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts.', type: 'special' },
        ],
      },
      rockGnome: {
        key: 'gnome.rockGnome',
        name: 'Rock Gnome',
        source: 'PHB',
        abilityScoreIncrease: { con: 1 },
        features: [
          { name: 'Artificer\'s Lore', description: 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus.', type: 'skill' },
          { name: 'Tinker', description: 'You have proficiency with artisan\'s tools (tinker\'s tools). You can craft clockwork devices.', type: 'tool' },
        ],
      },
      deepGnome: {
        key: 'gnome.deepGnome',
        name: 'Deep Gnome (Svirfneblin)',
        source: 'SCAG',
        abilityScoreIncrease: { dex: 1 },
        features: [
          { name: 'Superior Darkvision', description: 'Your darkvision has a range of 120 feet.', type: 'senses', darkvision: 120 },
          { name: 'Stone Camouflage', description: 'You have advantage on Dexterity (Stealth) checks to hide in rocky terrain.', type: 'skill' },
        ],
      },
    },
  },

  halfElf: {
    key: 'halfElf',
    name: 'Half-Elf',
    source: 'PHB',
    description: 'Half-elves are wanderers who dwell on the borders of both human and elven societies.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { cha: 2 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet as if it were bright light.', type: 'senses' },
      { name: 'Fey Ancestry', description: 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.', type: 'defense' },
      { name: 'Skill Versatility', description: 'You gain proficiency in two skills of your choice.', type: 'skill', count: 2 },
      { name: 'Languages', description: 'You can speak, read, and write Common, Elvish, and one extra language of your choice.', type: 'language' },
    ],
    subraces: {},
  },

  halfOrc: {
    key: 'halfOrc',
    name: 'Half-Orc',
    source: 'PHB',
    description: 'Half-orcs are a blend of human and orc heritage. They are strong, fierce, and often feared.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, con: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet as if it were bright light.', type: 'senses' },
      { name: 'Menacing', description: 'You gain proficiency in the Intimidation skill.', type: 'skill', skill: 'intimidation' },
      { name: 'Relentless Endurance', description: 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead.', type: 'defense' },
      { name: 'Savage Attacks', description: 'When you score a critical hit with a melee weapon attack, you can roll one of the weapon\'s damage dice one additional time.', type: 'attack' },
      { name: 'Languages', description: 'You can speak, read, and write Common and Orc.', type: 'language' },
    ],
    subraces: {},
  },

  tiefling: {
    key: 'tiefling',
    name: 'Tiefling',
    source: 'PHB',
    description: 'Tieflings are humans with infernal heritage, bearing the mark of devils or demons.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { cha: 2, int: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet as if it were bright light.', type: 'senses' },
      { name: 'Hellish Resistance', description: 'You have resistance to fire damage.', type: 'defense' },
      { name: 'Infernal Legacy', description: 'You know the thaumaturgy cantrip. At 3rd level, you can cast hellish rebuke once. At 5th level, you can cast darkness once.', type: 'spell' },
      { name: 'Languages', description: 'You can speak, read, and write Common and Infernal.', type: 'language' },
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

  // ===== EXPANDED RACES (VGtM, MToF, ERLW, TCoE, etc.) =====
  aarakocra: {
    key: 'aarakocra',
    name: 'Aarakocra',
    source: 'EEPC',
    description: 'Aarakocra are bird-like humanoids native to the Elemental Plane of Air.',
    speed: 25,
    flySpeed: 50,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, wis: 1 },
    features: [
      { name: 'Flight', description: 'You have a flying speed of 50 feet.', type: 'movement' },
      { name: 'Talons', description: 'Your talons are natural weapons, which you can use to make unarmed strikes dealing 1d4 + your Strength modifier slashing damage.', type: 'attack' },
      { name: 'Languages', description: 'You can speak, read, and write Common and Aarakocra.', type: 'language' },
    ],
    subraces: {},
  },

  aasimar: {
    key: 'aasimar',
    name: 'Aasimar',
    source: 'VGtM',
    description: 'Aasimar are humans with celestial or good-aligned outsider heritage.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { cha: 2 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet as if it were bright light.', type: 'senses' },
      { name: 'Celestial Resistance', description: 'You have resistance to necrotic damage and radiant damage.', type: 'defense' },
      { name: 'Healing Hands', description: 'As an action, you can touch a creature and restore hit points equal to your level.', type: 'special' },
      { name: 'Light Bearer', description: 'You know the light cantrip.', type: 'spell' },
    ],
    subraces: {
      protector: {
        key: 'aasimar.protector',
        name: 'Protector',
        source: 'VGtM',
        abilityScoreIncrease: { wis: 1 },
        features: [{ name: 'Radiant Soul', description: 'You can unleash radiant energy. You gain a flying speed and deal extra radiant damage.', type: 'special' }],
      },
      scourge: {
        key: 'aasimar.scourge',
        name: 'Scourge',
        source: 'VGtM',
        abilityScoreIncrease: { con: 1 },
        features: [{ name: 'Radiant Consumption', description: 'You can unleash radiant energy that damages creatures near you.', type: 'special' }],
      },
      fallen: {
        key: 'aasimar.fallen',
        name: 'Fallen',
        source: 'VGtM',
        abilityScoreIncrease: { str: 1 },
        features: [{ name: 'Necrotic Shroud', description: 'You can unleash necrotic energy that frightens creatures near you.', type: 'special' }],
      },
    },
  },

  changeling: {
    key: 'changeling',
    name: 'Changeling',
    source: 'ERLW',
    description: 'Changelings are shapeshifters who can alter their appearance at will.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { cha: 2, dex: 1 },
    features: [
      { name: 'Shapechanger', description: 'You can change your appearance and voice at will.', type: 'special' },
      { name: 'Changeling Instincts', description: 'You gain proficiency with two of the following skills: Deception, Insight, Intimidation, or Persuasion.', type: 'skill' },
      { name: 'Languages', description: 'You can speak, read, and write Common and two other languages.', type: 'language' },
    ],
    subraces: {},
  },

  firbolg: {
    key: 'firbolg',
    name: 'Firbolg',
    source: 'VGtM',
    description: 'Firbolgs are gentle giants who live in harmony with nature.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { wis: 2, str: 1 },
    features: [
      { name: 'Firbolg Magic', description: 'You can cast detect magic and disguise self. You can\'t cast disguise self on yourself.', type: 'spell' },
      { name: 'Hidden Step', description: 'You can turn invisible as a bonus action. You regain the ability at short or long rest.', type: 'special' },
      { name: 'Powerful Build', description: 'You count as one size larger for carrying capacity and push/drag/lift.', type: 'special' },
      { name: 'Speech of Beast and Leaf', description: 'You can communicate simple ideas with beasts and plants.', type: 'special' },
    ],
    subraces: {},
  },

  goliath: {
    key: 'goliath',
    name: 'Goliath',
    source: 'VGtM',
    description: 'Goliaths are towering humanoids who live in the mountains.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, con: 1 },
    features: [
      { name: 'Natural Athlete', description: 'You have proficiency in the Athletics skill.', type: 'skill', skill: 'athletics' },
      { name: 'Stone\'s Endurance', description: 'You can reduce damage taken by 1d12 + your Constitution modifier. You regain the ability at short or long rest.', type: 'defense' },
      { name: 'Powerful Build', description: 'You count as one size larger for carrying capacity and push/drag/lift.', type: 'special' },
      { name: 'Mountain Born', description: 'You\'re acclimated to high altitude and cold environments.', type: 'special' },
    ],
    subraces: {},
  },

  kenku: {
    key: 'kenku',
    name: 'Kenku',
    source: 'VGtM',
    description: 'Kenku are bird-like humanoids who communicate through mimicry.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, wis: 1 },
    features: [
      { name: 'Expert Forgery', description: 'You can duplicate other people\'s handwriting and craft.', type: 'skill' },
      { name: 'Kenku Training', description: 'You are proficient in two of: Acrobatics, Deception, Stealth, or Sleight of Hand.', type: 'skill' },
      { name: 'Mimicry', description: 'You can mimic sounds you\'ve heard, including voices.', type: 'special' },
    ],
    subraces: {},
  },

  tabaxi: {
    key: 'tabaxi',
    name: 'Tabaxi',
    source: 'VGtM',
    description: 'Tabaxi are cat-like humanoids known for their curiosity and agility.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, cha: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Feline Agility', description: 'Your speed doubles for a turn. You regain the ability after moving 0 feet on a turn.', type: 'movement' },
      { name: 'Cat\'s Claws', description: 'You have a climbing speed of 20 feet.', type: 'movement' },
      { name: 'Cat\'s Talent', description: 'You have proficiency in Perception and Stealth.', type: 'skill' },
    ],
    subraces: {},
  },

  tortle: {
    key: 'tortle',
    name: 'Tortle',
    source: 'TP',
    description: 'Tortles are turtle-like humanoids with natural armor.',
    speed: 30,
    swimSpeed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, wis: 1 },
    features: [
      { name: 'Natural Armor', description: 'Your AC equals 17 + your Dexterity modifier. You can\'t wear armor.', type: 'defense' },
      { name: 'Hold Breath', description: 'You can hold your breath for up to 1 hour.', type: 'special' },
      { name: 'Shell Defense', description: 'You can withdraw into your shell for +4 AC but have disadvantage on Dexterity saves.', type: 'defense' },
    ],
    subraces: {},
  },

  triton: {
    key: 'triton',
    name: 'Triton',
    source: 'VGtM',
    description: 'Tritons are amphibious humanoids from the ocean depths.',
    speed: 30,
    swimSpeed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 1, con: 1, cha: 1 },
    features: [
      { name: 'Amphibious', description: 'You can breathe air and water.', type: 'special' },
      { name: 'Control Air and Water', description: 'You can cast fog cloud, gust of wind, and wall of water once each.', type: 'spell' },
      { name: 'Emissary of the Sea', description: 'You can communicate simple ideas with aquatic creatures.', type: 'special' },
      { name: 'Guardians of the Depths', description: 'You have resistance to cold damage.', type: 'defense' },
    ],
    subraces: {},
  },

  // ===== TCoE LINEAGES =====
  customLineage: {
    key: 'customLineage',
    name: 'Custom Lineage',
    source: 'TCoE',
    description: 'Create your own unique lineage with customizable traits.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: {},
    features: [
      { name: 'Ability Score Increase', description: 'One ability score of your choice increases by 2.', type: 'ability' },
      { name: 'Size', description: 'You are Medium or Small.', type: 'size' },
      { name: 'Speed', description: 'Your walking speed is 30 feet.', type: 'speed' },
      { name: 'Darkvision or Skill', description: 'You have darkvision 60ft OR proficiency in one skill.', type: 'special' },
      { name: 'Feat', description: 'You gain one feat of your choice.', type: 'feat' },
      { name: 'Languages', description: 'You can speak, read, and write Common and one other language.', type: 'language' },
    ],
    subraces: {},
  },

  dhampir: {
    key: 'dhampir',
    name: 'Dhampir',
    source: 'VRGtR',
    description: 'Dhampirs are living humans with vampire heritage.',
    speed: 35,
    size: 'Medium',
    abilityScoreIncrease: { str: 1, dex: 1, cha: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Deathless Nature', description: 'You don\'t need to breathe.', type: 'special' },
      { name: 'Vampiric Bite', description: 'Your bite is a natural weapon dealing 1d4 + CON piercing damage.', type: 'attack' },
      { name: 'Spider Climb', description: 'You gain a climbing speed equal to your walking speed.', type: 'movement' },
    ],
    subraces: {},
  },

  hexblood: {
    key: 'hexblood',
    name: 'Hexblood',
    source: 'VRGtR',
    description: 'Hexbloods are humans transformed by hag magic.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 1, int: 1, wis: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Eerie Token', description: 'You can create a magical token of yourself.', type: 'special' },
      { name: 'Hag Magic', description: 'You know one cantrip from druid or warlock lists.', type: 'spell' },
    ],
    subraces: {},
  },

  reborn: {
    key: 'reborn',
    name: 'Reborn',
    source: 'VRGtR',
    description: 'Reborn are those who have died and returned to life.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 1, int: 1, wis: 1 },
    features: [
      { name: 'Deathless Nature', description: 'You don\'t need to breathe, eat, or drink.', type: 'special' },
      { name: 'Knowledge from a Past Life', description: 'You have proficiency in two skills of your choice.', type: 'skill' },
      { name: 'Wounded Healer', description: 'You can stabilize dying creatures as a bonus action.', type: 'special' },
    ],
    subraces: {},
  },

  // ===== RAVNICA (GGtR) =====
  centaur: {
    key: 'centaur',
    name: 'Centaur',
    source: 'GGtR',
    description: 'Centaurs are half-human, half-horse humanoids.',
    speed: 40,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, wis: 1 },
    features: [
      { name: 'Fey', description: 'Your creature type is Fey.', type: 'special' },
      { name: 'Charge', description: 'If you move at least 30 feet toward a target, you can make a bonus action attack.', type: 'attack' },
      { name: 'Hooves', description: 'Your hooves are natural weapons dealing 1d4 + STR bludgeoning damage.', type: 'attack' },
      { name: 'Powerful Build', description: 'You count as one size larger for carrying capacity.', type: 'special' },
    ],
    subraces: {},
  },

  loxodon: {
    key: 'loxodon',
    name: 'Loxodon',
    source: 'GGtR',
    description: 'Loxodons are elephant-like humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 2, wis: 1 },
    features: [
      { name: 'Natural Armor', description: 'Your AC equals 12 + CON modifier.', type: 'defense' },
      { name: 'Powerful Build', description: 'You count as one size larger for carrying capacity.', type: 'special' },
      { name: 'Trunk', description: 'You can use your trunk to grab objects and make unarmed strikes.', type: 'attack' },
    ],
    subraces: {},
  },

  minotaur: {
    key: 'minotaur',
    name: 'Minotaur',
    source: 'GGtR',
    description: 'Minotaurs are bull-headed humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, con: 1 },
    features: [
      { name: 'Horns', description: 'Your horns are natural weapons dealing 1d6 + STR piercing damage.', type: 'attack' },
      { name: 'Goring Rush', description: 'When you Dash, you can make a bonus action horn attack.', type: 'attack' },
      { name: 'Hammering Horns', description: 'You can push a creature 10 feet when you hit with horns.', type: 'attack' },
    ],
    subraces: {},
  },

  vedalken: {
    key: 'vedalken',
    name: 'Vedalken',
    source: 'GGtR',
    description: 'Vedalken are logical, blue-skinned humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { int: 2, wis: 1 },
    features: [
      { name: 'Vedalken Dispassion', description: 'You have advantage on INT, WIS, and CHA saves against being charmed or frightened.', type: 'defense' },
      { name: 'Tireless Precision', description: 'You have proficiency in one INT, WIS, or CHA skill.', type: 'skill' },
    ],
    subraces: {},
  },

  simicHybrid: {
    key: 'simicHybrid',
    name: 'Simic Hybrid',
    source: 'GGtR',
    description: 'Simic hybrids are genetically modified humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 2 },
    features: [
      { name: 'Animal Enhancement', description: 'Choose one: Darkvision, Grasping Appendages, or Gliding Skin.', type: 'special' },
    ],
    subraces: {},
  },

  // ===== THEROS (MOoT) =====
  leonin: {
    key: 'leonin',
    name: 'Leonin',
    source: 'MOoT',
    description: 'Leonin are lion-like humanoids.',
    speed: 35,
    size: 'Medium',
    abilityScoreIncrease: { con: 2, cha: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Claws', description: 'Your claws are natural weapons dealing 1d4 + STR slashing damage.', type: 'attack' },
      { name: 'Daunting Roar', description: 'You can roar to frighten creatures within 10 feet.', type: 'special' },
    ],
    subraces: {},
  },

  satyr: {
    key: 'satyr',
    name: 'Satyr',
    source: 'MOoT',
    description: 'Satyrs are goat-legged fey humanoids.',
    speed: 35,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, cha: 1 },
    features: [
      { name: 'Fey', description: 'Your creature type is Fey.', type: 'special' },
      { name: 'Magic Resistance', description: 'You have advantage on saves against spells and magical effects.', type: 'defense' },
      { name: 'Ram', description: 'Your horns are natural weapons dealing 1d4 + STR bludgeoning damage.', type: 'attack' },
    ],
    subraces: {},
  },

  // ===== WILD BEYOND THE WITCHLIGHT (WBtW) =====
  fairy: {
    key: 'fairy',
    name: 'Fairy',
    source: 'WBtW',
    description: 'Fairies are tiny fey creatures with magical abilities.',
    speed: 30,
    flySpeed: 30,
    size: 'Small',
    abilityScoreIncrease: { dex: 1, cha: 2 },
    features: [
      { name: 'Fey', description: 'Your creature type is Fey.', type: 'special' },
      { name: 'Flight', description: 'You have a flying speed of 30 feet.', type: 'movement' },
      { name: 'Fairy Magic', description: 'You know druidcraft. At 3rd level you can cast faerie fire. At 5th level you can cast enlarge/reduce.', type: 'spell' },
    ],
    subraces: {},
  },

  harengon: {
    key: 'harengon',
    name: 'Harengon',
    source: 'WBtW',
    description: 'Harengon are rabbit-like humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, wis: 1 },
    features: [
      { name: 'Fey', description: 'Your creature type is Fey.', type: 'special' },
      { name: 'Hare-Trigger', description: 'You can add your proficiency bonus to initiative rolls.', type: 'special' },
      { name: 'Lucky Footwork', description: 'When you fail a Dex save, you can use reaction to add 1d4.', type: 'defense' },
      { name: 'Rabbit Hop', description: 'You can jump 15 feet as a bonus action.', type: 'movement' },
    ],
    subraces: {},
  },

  // ===== SPELLJAMMER =====
  astralElf: {
    key: 'astralElf',
    name: 'Astral Elf',
    source: 'Spelljammer',
    description: 'Astral elves are elves who live in wildspace.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, cha: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Fey Ancestry', description: 'You have advantage on saves against being charmed.', type: 'defense' },
      { name: 'Starlight Step', description: 'You can teleport up to 30 feet once per long rest.', type: 'spell' },
    ],
    subraces: {},
  },

  autognome: {
    key: 'autognome',
    name: 'Autognome',
    source: 'Spelljammer',
    description: 'Autognomes are living construct gnomes.',
    speed: 30,
    size: 'Small',
    abilityScoreIncrease: { int: 2, con: 1 },
    features: [
      { name: 'Construct', description: 'Your creature type is Construct.', type: 'special' },
      { name: 'Built for Success', description: 'You can add 1d4 to one ability check per long rest.', type: 'special' },
      { name: 'Healing Machine', description: 'You can be healed by mending spell.', type: 'special' },
    ],
    subraces: {},
  },

  giff: {
    key: 'giff',
    name: 'Giff',
    source: 'Spelljammer',
    description: 'Giff are hippo-like mercenaries.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, wis: 1 },
    features: [
      { name: 'Astral Spark', description: 'You can deal extra force damage once per long rest.', type: 'attack' },
      { name: 'Firearms Proficiency', description: 'You have proficiency with firearms.', type: 'weapon' },
      { name: 'Powerful Build', description: 'You count as one size larger for carrying capacity.', type: 'special' },
    ],
    subraces: {},
  },

  hadozee: {
    key: 'hadozee',
    name: 'Hadozee',
    source: 'Spelljammer',
    description: 'Hadozee are gliding ape-like humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, con: 1 },
    features: [
      { name: 'Glide', description: 'You can glide up to 5 times your height when falling.', type: 'movement' },
      { name: 'Hadozee Harness', description: 'You can wear armor designed for your body.', type: 'special' },
      { name: 'Feet First', description: 'You take no damage from falling.', type: 'defense' },
    ],
    subraces: {},
  },

  plasmoid: {
    key: 'plasmoid',
    name: 'Plasmoid',
    source: 'Spelljammer',
    description: 'Plasmoids are amorphous ooze creatures.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 2, int: 1 },
    features: [
      { name: 'Amorphous', description: 'You can squeeze through spaces as small as 1 inch.', type: 'special' },
      { name: 'Hold Breath', description: 'You can hold your breath for up to 1 hour.', type: 'special' },
      { name: 'Natural Weapon', description: 'Your pseudopod deals 1d6 + STR bludgeoning damage.', type: 'attack' },
    ],
    subraces: {},
  },

  thriKreen: {
    key: 'thriKreen',
    name: 'Thri-Kreen',
    source: 'Spelljammer',
    description: 'Thri-kreen are insectoid humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, wis: 1 },
    features: [
      { name: 'Second Wind', description: 'You can regain 1d10 + level HP once per long rest.', type: 'defense' },
      { name: 'Sleepless', description: 'You don\'t need to sleep.', type: 'special' },
      { name: 'Natural Armor', description: 'Your AC equals 13 + Dex modifier.', type: 'defense' },
    ],
    subraces: {},
  },

  // ===== EBERRON (ERLW) =====
  warforged: {
    key: 'warforged',
    name: 'Warforged',
    source: 'ERLW',
    description: 'Warforged are living constructs created for war.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 2 },
    features: [
      { name: 'Construct', description: 'Your creature type is Construct.', type: 'special' },
      { name: 'Integrated Protection', description: 'Your body has built-in armor (AC 13 + Dex + proficiency).', type: 'defense' },
      { name: 'Sentry\'s Rest', description: 'You don\'t need to sleep and are conscious during long rests.', type: 'special' },
    ],
    subraces: {},
  },

  kalashtar: {
    key: 'kalashtar',
    name: 'Kalashtar',
    source: 'ERLW',
    description: 'Kalashtar are humans bonded to spirits from the Plane of Dreams.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { wis: 2, cha: 1 },
    features: [
      { name: 'Dual Mind', description: 'You have advantage on all Wisdom saving throws.', type: 'defense' },
      { name: 'Mental Discipline', description: 'You have resistance to psychic damage.', type: 'defense' },
      { name: 'Mind Link', description: 'You can telepathically communicate with creatures you can see.', type: 'special' },
    ],
    subraces: {},
  },

  shifter: {
    key: 'shifter',
    name: 'Shifter',
    source: 'ERLW',
    description: 'Shifters are humans with lycanthrope heritage.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { dex: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Shifting', description: 'You can shift as a bonus action gaining temporary HP and special abilities.', type: 'special' },
      { name: 'Languages', description: 'You can speak, read, and write Common and Shifter.', type: 'language' },
    ],
    subraces: {
      beasthide: { key: 'shifter.beasthide', name: 'Beasthide', source: 'ERLW', abilityScoreIncrease: { con: 2 }, features: [{ name: 'Shifting Feature', description: 'You gain +1 AC while shifted.', type: 'defense' }] },
      longtooth: { key: 'shifter.longtooth', name: 'Longtooth', source: 'ERLW', abilityScoreIncrease: { str: 2 }, features: [{ name: 'Shifting Feature', description: 'You can make a bite attack while shifted.', type: 'attack' }] },
      swiftstride: { key: 'shifter.swiftstride', name: 'Swiftstride', source: 'ERLW', abilityScoreIncrease: { cha: 2 }, features: [{ name: 'Shifting Feature', description: 'Your speed increases by 10 feet while shifted.', type: 'movement' }] },
      wildhunt: { key: 'shifter.wildhunt', name: 'Wildhunt', source: 'ERLW', abilityScoreIncrease: { wis: 2 }, features: [{ name: 'Shifting Feature', description: 'You can\'t be surprised while shifted.', type: 'defense' }] },
    },
  },

  // ===== MONSTER RACES (VGtM) =====
  bugbear: {
    key: 'bugbear',
    name: 'Bugbear',
    source: 'VGtM',
    description: 'Bugbears are large goblinoids known for their strength.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, dex: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Fury of the Small', description: 'You deal extra 1d6 damage to smaller creatures once per short rest.', type: 'attack' },
      { name: 'Long-Limbed', description: 'Your melee reach is 5 feet greater.', type: 'attack' },
      { name: 'Sneaky', description: 'You have proficiency in Stealth.', type: 'skill', skill: 'stealth' },
    ],
    subraces: {},
  },

  goblin: {
    key: 'goblin',
    name: 'Goblin',
    source: 'VGtM',
    description: 'Goblins are small, cunning humanoids.',
    speed: 30,
    size: 'Small',
    abilityScoreIncrease: { dex: 2, con: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Fury of the Small', description: 'You deal extra 1d6 damage once per short rest.', type: 'attack' },
      { name: 'Nimble Escape', description: 'You can Disengage or Hide as a bonus action.', type: 'special' },
    ],
    subraces: {},
  },

  hobgoblin: {
    key: 'hobgoblin',
    name: 'Hobgoblin',
    source: 'VGtM',
    description: 'Hobgoblins are disciplined martial humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 2, int: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Martial Training', description: 'You have proficiency with martial weapons and medium armor.', type: 'weapon' },
      { name: 'Saving Face', description: 'You can add 1d10 to missed attack rolls once per short rest.', type: 'special' },
    ],
    subraces: {},
  },

  kobold: {
    key: 'kobold',
    name: 'Kobold',
    source: 'VGtM',
    description: 'Kobolds are small draconic humanoids.',
    speed: 30,
    size: 'Small',
    abilityScoreIncrease: { dex: 2 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Draconic Cry', description: 'Allies within 10 feet gain advantage on attacks.', type: 'special' },
      { name: 'Pack Tactics', description: 'You have advantage on attacks near allies.', type: 'special' },
      { name: 'Sunlight Sensitivity', description: 'You have disadvantage in sunlight.', type: 'weakness' },
    ],
    subraces: {},
  },

  lizardfolk: {
    key: 'lizardfolk',
    name: 'Lizardfolk',
    source: 'VGtM',
    description: 'Lizardfolk are reptilian humanoids.',
    speed: 30,
    swimSpeed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 2, wis: 1 },
    features: [
      { name: 'Bite', description: 'Your bite is a natural weapon dealing 1d6 + STR piercing damage.', type: 'attack' },
      { name: 'Cunning Artisan', description: 'You can craft items from creature remains.', type: 'special' },
      { name: 'Hold Breath', description: 'You can hold your breath for 15 minutes.', type: 'special' },
      { name: 'Natural Armor', description: 'Your AC equals 13 + Dex modifier.', type: 'defense' },
    ],
    subraces: {},
  },

  orc: {
    key: 'orc',
    name: 'Orc',
    source: 'VGtM',
    description: 'Orcs are fierce warrior humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { str: 2, con: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Aggressive', description: 'You can move toward enemies as a bonus action.', type: 'movement' },
      { name: 'Powerful Build', description: 'You count as one size larger for carrying capacity.', type: 'special' },
    ],
    subraces: {},
  },

  yuanTi: {
    key: 'yuanTi',
    name: 'Yuan-Ti Pureblood',
    source: 'VGtM',
    description: 'Yuan-ti are serpent humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { int: 1, cha: 2 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Innate Spellcasting', description: 'You can cast animal friendship on snakes.', type: 'spell' },
      { name: 'Magic Resistance', description: 'You have advantage on saves against spells.', type: 'defense' },
      { name: 'Poison Immunity', description: 'You are immune to poison damage and poisoned condition.', type: 'defense' },
    ],
    subraces: {},
  },

  // ===== OTHER =====
  locathah: {
    key: 'locathah',
    name: 'Locathah',
    source: 'LR',
    description: 'Locathah are fish-like aquatic humanoids.',
    speed: 30,
    swimSpeed: 40,
    size: 'Medium',
    abilityScoreIncrease: { dex: 2, wis: 1 },
    features: [
      { name: 'Aquatic', description: 'You can breathe only underwater.', type: 'special' },
      { name: 'Leviathan Will', description: 'You have advantage on saves against being charmed or frightened.', type: 'defense' },
      { name: 'Limited Amphibiousness', description: 'You can breathe air for 1 hour.', type: 'special' },
    ],
    subraces: {},
  },

  grung: {
    key: 'grung',
    name: 'Grung',
    source: 'OGA',
    description: 'Grungs are poisonous frog humanoids.',
    speed: 25,
    swimSpeed: 25,
    size: 'Small',
    abilityScoreIncrease: { dex: 2, wis: 1 },
    features: [
      { name: 'Arboreal Leap', description: 'You have a climbing speed of 25 feet.', type: 'movement' },
      { name: 'Poisonous Skin', description: 'Creatures that touch you take poison damage.', type: 'defense' },
      { name: 'Standing Leap', description: 'Your jump distance is doubled.', type: 'movement' },
    ],
    subraces: {},
  },

  kender: {
    key: 'kender',
    name: 'Kender',
    source: 'Dragonlance',
    description: 'Kenders are curious, fearless halfling-like humanoids.',
    speed: 30,
    size: 'Small',
    abilityScoreIncrease: { dex: 2, cha: 1 },
    features: [
      { name: 'Fearless', description: 'You have advantage on saves against being frightened.', type: 'defense' },
      { name: 'Kender Pockets', description: 'You can retrieve small items from your pockets quickly.', type: 'special' },
      { name: 'Taunt', description: 'You can provoke enemies as a bonus action.', type: 'special' },
    ],
    subraces: {},
  },

  owlin: {
    key: 'owlin',
    name: 'Owlin',
    source: 'Strixhaven',
    description: 'Owlins are owl-like humanoids.',
    speed: 30,
    flySpeed: 60,
    size: 'Medium',
    abilityScoreIncrease: { dex: 1, wis: 1, int: 1 },
    features: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet.', type: 'senses' },
      { name: 'Flight', description: 'You have a flying speed of 60 feet.', type: 'movement' },
      { name: 'Silent Feathers', description: 'You have proficiency in Stealth.', type: 'skill', skill: 'stealth' },
    ],
    subraces: {},
  },

  verdan: {
    key: 'verdan',
    name: 'Verdan',
    source: 'AI',
    description: 'Verdans are gelatinous telepathic humanoids.',
    speed: 30,
    size: 'Medium',
    abilityScoreIncrease: { con: 2, cha: 1 },
    features: [
      { name: 'Black Telepathy', description: 'You can telepathically communicate within 30 feet.', type: 'special' },
      { name: 'Limited Telepathy', description: 'You can detect thoughts once per long rest.', type: 'spell' },
      { name: 'Nothing of Yourself', description: 'You can change your appearance.', type: 'special' },
    ],
    subraces: {},
  },
}

// Helper: Get all race keys for dropdowns
export const getAllRaceKeys = () => {
  const keys = []
  Object.entries(raceData).forEach(([key, race]) => {
    keys.push({ key, name: race.name, isSubrace: false })
    if (race.subraces) {
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