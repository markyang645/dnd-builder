export const classData = {
  'Rogue': {
    name: "Rogue",
    hitDie: "",
    primaryAbility: "",
    savingThrows: [],
    levels: {
      1: {
        features: ['Expertise', 'Sneak Attack (1d6)', 'Thieves\' Cant'],
        asi: false,
        special: "Sneak Attack: 1d6",
      },
      2: {
        features: ['Cunning Action'],
        asi: false,
        special: "Sneak Attack: 1d6",
      },
      3: {
        features: ['Roguish Archetype'],
        asi: false,
        special: "Sneak Attack: 2d6",
      },
      4: {
        features: ['ASI'],
        asi: true,
        special: "Sneak Attack: 2d6",
      },
      5: {
        features: ['Uncanny Dodge'],
        asi: false,
        special: "Sneak Attack: 3d6",
      },
      6: {
        features: ['Expertise'],
        asi: false,
        special: "Sneak Attack: 3d6",
      },
      7: {
        features: ['Evasion'],
        asi: false,
        special: "Sneak Attack: 4d6",
      },
      8: {
        features: ['ASI'],
        asi: true,
        special: "Sneak Attack: 4d6",
      },
      9: {
        features: ['Roguish Archetype Feature'],
        asi: false,
        special: "Sneak Attack: 5d6",
      },
      10: {
        features: ['ASI'],
        asi: true,
        special: "Sneak Attack: 5d6",
      },
      11: {
        features: ['Reliable Talent'],
        asi: false,
        special: "Sneak Attack: 6d6",
      },
      12: {
        features: ['ASI'],
        asi: true,
        special: "Sneak Attack: 6d6",
      },
      13: {
        features: ['Roguish Archetype Feature'],
        asi: false,
        special: "Sneak Attack: 7d6",
      },
      14: {
        features: ['Blindsense'],
        asi: false,
        special: "Sneak Attack: 7d6",
      },
      15: {
        features: ['Slippery Mind'],
        asi: false,
        special: "Sneak Attack: 8d6",
      },
      16: {
        features: ['ASI'],
        asi: true,
        special: "Sneak Attack: 8d6",
      },
      17: {
        features: ['Roguish Archetype Feature'],
        asi: false,
        special: "Sneak Attack: 9d6",
      },
      18: {
        features: ['Elusive'],
        asi: false,
        special: "Sneak Attack: 9d6",
      },
      19: {
        features: ['ASI'],
        asi: true,
        special: "Sneak Attack: 10d6",
      },
      20: {
        features: ['Stroke of Luck'],
        asi: false,
        special: "Sneak Attack: 10d6",
      }
    }
  },
  'Bard': {
    name: "Bard",
    hitDie: "",
    primaryAbility: "",
    savingThrows: [],
    levels: {
      1: {
        features: ['Spellcasting', 'Bardic Inspiration (d6)'],
        asi: false,
      },
      2: {
        features: ['Jack of All Trades', 'Song of Rest (d6)'],
        asi: false,
      },
      3: {
        features: ['Bard College', 'Expertise'],
        asi: false,
      },
      4: {
        features: ['ASI'],
        asi: true,
      },
      5: {
        features: ['Bardic Inspiration (d8)', 'Font of Inspiration'],
        asi: false,
      },
      6: {
        features: ['Countercharm', 'College Feature'],
        asi: false,
      },
      7: {
        features: [''],
        asi: false,
      },
      8: {
        features: ['ASI'],
        asi: true,
      },
      9: {
        features: ['Song of Rest (d8)'],
        asi: false,
      },
      10: {
        features: ['Bardic Inspiration (d10)', 'Expertise', 'Magical Secrets'],
        asi: false,
      },
      11: {
        features: [''],
        asi: false,
      },
      12: {
        features: ['ASI'],
        asi: true,
      },
      13: {
        features: ['Song of Rest (d10)'],
        asi: false,
      },
      14: {
        features: ['Magical Secrets', 'College Feature'],
        asi: false,
      },
      15: {
        features: ['Bardic Inspiration (d12)'],
        asi: false,
      },
      16: {
        features: ['ASI'],
        asi: true,
      },
      17: {
        features: ['Song of Rest (d12)'],
        asi: false,
      },
      18: {
        features: ['Magical Secrets'],
        asi: false,
      },
      19: {
        features: ['ASI'],
        asi: true,
      },
      20: {
        features: ['Superior Inspiration'],
        asi: false,
      }
    }
  },
  'Artificer': {
    name: "Artificer",
    hitDie: "",
    primaryAbility: "",
    savingThrows: [],
    levels: {
      1: {
        features: ['Magical Tinkering', 'Spellcasting'],
        asi: false,
      },
      2: {
        features: ['Infuse Item'],
        asi: false,
        special: "Infusions Known: 4",
      },
      3: {
        features: ['Artificer Specialist', 'The Right Tool for the Job'],
        asi: false,
        special: "Infusions Known: 4",
      },
      4: {
        features: ['ASI'],
        asi: true,
        special: "Infusions Known: 4",
      },
      5: {
        features: ['Artificer Specialist Feature'],
        asi: false,
        special: "Infusions Known: 4",
      },
      6: {
        features: ['Tool Expertise'],
        asi: false,
        special: "Infusions Known: 6",
      },
      7: {
        features: ['Flash of Genius'],
        asi: false,
        special: "Infusions Known: 6",
      },
      8: {
        features: ['ASI'],
        asi: true,
        special: "Infusions Known: 6",
      },
      9: {
        features: ['Artificer Specialist Feature'],
        asi: false,
        special: "Infusions Known: 6",
      },
      10: {
        features: ['Magic Item Adept'],
        asi: false,
        special: "Infusions Known: 8",
      },
      11: {
        features: ['Spell-Storing Item'],
        asi: false,
        special: "Infusions Known: 8",
      },
      12: {
        features: ['ASI'],
        asi: true,
        special: "Infusions Known: 8",
      },
      13: {
        features: ['Artificer Specialist Feature'],
        asi: false,
        special: "Infusions Known: 8",
      },
      14: {
        features: ['Magic Item Savant'],
        asi: false,
        special: "Infusions Known: 10",
      },
      15: {
        features: ['Artificer Specialist Feature'],
        asi: false,
        special: "Infusions Known: 10",
      },
      16: {
        features: ['ASI'],
        asi: true,
        special: "Infusions Known: 10",
      },
      17: {
        features: ['Artificer Specialist Feature'],
        asi: false,
        special: "Infusions Known: 10",
      },
      18: {
        features: ['Magic Item Master'],
        asi: false,
        special: "Infusions Known: 12",
      },
      19: {
        features: ['ASI'],
        asi: true,
        special: "Infusions Known: 12",
      },
      20: {
        features: ['Soul of Artifice'],
        asi: false,
        special: "Infusions Known: 12",
      }
    }
  },
  'Barbarian': {
    name: "Barbarian",
    hitDie: "",
    primaryAbility: "",
    savingThrows: [],
    levels: {
      1: {
        features: ['Rage', 'Unarmored Defense'],
        asi: false,
        special: "Rages: 2, Rage Damage: +2",
      },
      2: {
        features: ['Reckless Attack', 'Danger Sense'],
        asi: false,
        special: "Rages: 2, Rage Damage: +2",
      },
      3: {
        features: ['Primal Path'],
        asi: false,
        special: "Rages: 3, Rage Damage: +2",
      },
      4: {
        features: ['ASI'],
        asi: true,
        special: "Rages: 3, Rage Damage: +2",
      },
      5: {
        features: ['Extra Attack', 'Fast Movement'],
        asi: false,
        special: "Rages: 3, Rage Damage: +2",
      },
      6: {
        features: ['Path Feature'],
        asi: false,
        special: "Rages: 4, Rage Damage: +2",
      },
      7: {
        features: ['Feral Instinct'],
        asi: false,
        special: "Rages: 4, Rage Damage: +2",
      },
      8: {
        features: ['ASI'],
        asi: true,
        special: "Rages: 4, Rage Damage: +2",
      },
      9: {
        features: ['Brutal Critical (1 die)'],
        asi: false,
        special: "Rages: 4, Rage Damage: +3",
      },
      10: {
        features: ['Path Feature'],
        asi: false,
        special: "Rages: 4, Rage Damage: +3",
      },
      11: {
        features: ['Relentless Rage'],
        asi: false,
        special: "Rages: 4, Rage Damage: +3",
      },
      12: {
        features: ['ASI'],
        asi: true,
        special: "Rages: 5, Rage Damage: +3",
      },
      13: {
        features: ['Brutal Critical (2 dice)'],
        asi: false,
        special: "Rages: 5, Rage Damage: +3",
      },
      14: {
        features: ['Path Feature'],
        asi: false,
        special: "Rages: 5, Rage Damage: +3",
      },
      15: {
        features: ['Persistent Rage'],
        asi: false,
        special: "Rages: 5, Rage Damage: +3",
      },
      16: {
        features: ['ASI'],
        asi: true,
        special: "Rages: 5, Rage Damage: +4",
      },
      17: {
        features: ['Brutal Critical (3 dice)'],
        asi: false,
        special: "Rages: 6, Rage Damage: +4",
      },
      18: {
        features: ['Indomitable Might'],
        asi: false,
        special: "Rages: 6, Rage Damage: +4",
      },
      19: {
        features: ['ASI'],
        asi: true,
        special: "Rages: 6, Rage Damage: +4",
      },
      20: {
        features: ['Primal Champion'],
        asi: false,
        special: "Rages: Unlimited, Rage Damage: +4",
      }
    }
  },
  'Paladin': {
    name: "Paladin",
    hitDie: "",
    primaryAbility: "",
    savingThrows: [],
    levels: {
      1: {
        features: ['Divine Sense', 'Lay on Hands'],
        asi: false,
        special: "Lay on Hands Pool: 5",
      },
      2: {
        features: ['Fighting Style', 'Spellcasting', 'Divine Smite'],
        asi: false,
      },
      3: {
        features: ['Divine Health', 'Sacred Oath'],
        asi: false,
      },
      4: {
        features: ['ASI'],
        asi: true,
      },
      5: {
        features: ['Extra Attack'],
        asi: false,
      },
      6: {
        features: ['Aura of Protection'],
        asi: false,
      },
      7: {
        features: ['Sacred Oath Feature'],
        asi: false,
      },
      8: {
        features: ['ASI'],
        asi: true,
      },
      9: {
        features: [''],
        asi: false,
      },
      10: {
        features: ['Aura of Courage'],
        asi: false,
      },
      11: {
        features: ['Improved Divine Smite'],
        asi: false,
      },
      12: {
        features: ['ASI'],
        asi: true,
      },
      13: {
        features: [''],
        asi: false,
      },
      14: {
        features: ['Cleansing Touch'],
        asi: false,
      },
      15: {
        features: ['Sacred Oath Feature'],
        asi: false,
      },
      16: {
        features: ['ASI'],
        asi: true,
      },
      17: {
        features: [''],
        asi: false,
      },
      18: {
        features: ['Aura Improvements'],
        asi: false,
      },
      19: {
        features: ['ASI'],
        asi: true,
      },
      20: {
        features: ['Sacred Oath Feature'],
        asi: false,
      }
    }
  },
  'Ranger': {
    name: "Ranger",
    hitDie: "",
    primaryAbility: "",
    savingThrows: [],
    levels: {
      1: {
        features: ['Favored Enemy', 'Natural Explorer'],
        asi: false,
        special: "Spells Known: 0",
      },
      2: {
        features: ['Fighting Style', 'Spellcasting'],
        asi: false,
        special: "Spells Known: 2",
      },
      3: {
        features: ['Ranger Archetype', 'Primeval Awareness'],
        asi: false,
        special: "Spells Known: 3",
      },
      4: {
        features: ['ASI'],
        asi: true,
        special: "Spells Known: 3",
      },
      5: {
        features: ['Extra Attack'],
        asi: false,
        special: "Spells Known: 4",
      },
      6: {
        features: ['Favored Enemy/Natural Explorer Improvement'],
        asi: false,
        special: "Spells Known: 4",
      },
      7: {
        features: ['Ranger Archetype Feature'],
        asi: false,
        special: "Spells Known: 5",
      },
      8: {
        features: ['ASI', 'Land\'s Stride'],
        asi: true,
        special: "Spells Known: 5",
      },
      9: {
        features: [''],
        asi: false,
        special: "Spells Known: 6",
      },
      10: {
        features: ['Natural Explorer Improvement', 'Hide in Plain Sight'],
        asi: false,
        special: "Spells Known: 6",
      },
      11: {
        features: ['Ranger Archetype Feature'],
        asi: false,
        special: "Spells Known: 7",
      },
      12: {
        features: ['ASI'],
        asi: true,
        special: "Spells Known: 7",
      },
      13: {
        features: [''],
        asi: false,
        special: "Spells Known: 8",
      },
      14: {
        features: ['Favored Enemy Improvement', 'Vanish'],
        asi: false,
        special: "Spells Known: 8",
      },
      15: {
        features: ['Ranger Archetype Feature'],
        asi: false,
        special: "Spells Known: 9",
      },
      16: {
        features: ['ASI'],
        asi: true,
        special: "Spells Known: 9",
      },
      17: {
        features: [''],
        asi: false,
        special: "Spells Known: 10",
      },
      18: {
        features: ['Feral Senses'],
        asi: false,
        special: "Spells Known: 10",
      },
      19: {
        features: ['ASI'],
        asi: true,
        special: "Spells Known: 11",
      },
      20: {
        features: ['Foe Slayer'],
        asi: false,
        special: "Spells Known: 11",
      }
    }
  },
  'Sorcerer': {
    name: "Sorcerer",
    hitDie: "",
    primaryAbility: "",
    savingThrows: [],
    levels: {
      1: {
        features: ['Spellcasting', 'Sorcerous Origin'],
        asi: false,
        special: "Sorcery Points: 0/Cantrips: 4/Spells Known: 2",
      },
      2: {
        features: ['Font of Magic'],
        asi: false,
        special: "Sorcery Points: 2/Cantrips: 4/Spells Known: 3",
      },
      3: {
        features: ['Metamagic'],
        asi: false,
        special: "Sorcery Points: 3/Cantrips: 4/Spells Known: 4",
      },
      4: {
        features: ['ASI'],
        asi: true,
        special: "Sorcery Points: 4/Cantrips: 5/Spells Known: 5",
      },
      5: {
        features: [''],
        asi: false,
        special: "Sorcery Points: 5/Cantrips: 5/Spells Known: 6",
      },
      6: {
        features: ['Sorcerous Origin Feature'],
        asi: false,
        special: "Sorcery Points: 6/Cantrips: 5/Spells Known: 7",
      },
      7: {
        features: [''],
        asi: false,
        special: "Sorcery Points: 7/Cantrips: 5/Spells Known: 8",
      },
      8: {
        features: ['ASI'],
        asi: true,
        special: "Sorcery Points: 8/Cantrips: 5/Spells Known: 9",
      },
      9: {
        features: [''],
        asi: false,
        special: "Sorcery Points: 9/Cantrips: 5/Spells Known: 10",
      },
      10: {
        features: ['Metamagic'],
        asi: false,
        special: "Sorcery Points: 10/Cantrips: 6/Spells Known: 11",
      },
      11: {
        features: [''],
        asi: false,
        special: "Sorcery Points: 11/Cantrips: 6/Spells Known: 12",
      },
      12: {
        features: ['ASI'],
        asi: true,
        special: "Sorcery Points: 12/Cantrips: 6/Spells Known: 12",
      },
      13: {
        features: [''],
        asi: false,
        special: "Sorcery Points: 13/Cantrips: 6/Spells Known: 13",
      },
      14: {
        features: ['Sorcerous Origin Feature'],
        asi: false,
        special: "Sorcery Points: 14/Cantrips: 6/Spells Known: 13",
      },
      15: {
        features: [''],
        asi: false,
        special: "Sorcery Points: 15/Cantrips: 6/Spells Known: 14",
      },
      16: {
        features: ['ASI'],
        asi: true,
        special: "Sorcery Points: 16/Cantrips: 6/Spells Known: 14",
      },
      17: {
        features: ['Metamagic'],
        asi: false,
        special: "Sorcery Points: 17/Cantrips: 6/Spells Known: 15",
      },
      18: {
        features: ['Sorcerous Origin Feature'],
        asi: false,
        special: "Sorcery Points: 18/Cantrips: 6/Spells Known: 15",
      },
      19: {
        features: ['ASI'],
        asi: true,
        special: "Sorcery Points: 19/Cantrips: 6/Spells Known: 15",
      },
      20: {
        features: ['Sorcerous Restoration'],
        asi: false,
        special: "Sorcery Points: 20/Cantrips: 6/Spells Known: 15",
      }
    }
  },
  'Fighter': {
    name: "Fighter",
    hitDie: "",
    primaryAbility: "",
    savingThrows: [],
    levels: {
      1: {
        features: ['Fighting Style', 'Second Wind'],
        asi: false,
        special: "Action Surges: 0, Extra Attacks: 0",
      },
      2: {
        features: ['Action Surge (x1)'],
        asi: false,
        special: "Action Surges: 1, Extra Attacks: 0",
      },
      3: {
        features: ['Martial Archetype'],
        asi: false,
        special: "Action Surges: 1, Extra Attacks: 0",
      },
      4: {
        features: ['ASI'],
        asi: true,
        special: "Action Surges: 1, Extra Attacks: 0",
      },
      5: {
        features: ['Extra Attack'],
        asi: false,
        special: "Action Surges: 1, Extra Attacks: 1",
      },
      6: {
        features: ['ASI'],
        asi: true,
        special: "Action Surges: 1, Extra Attacks: 1",
      },
      7: {
        features: ['Martial Archetype Feature'],
        asi: false,
        special: "Action Surges: 1, Extra Attacks: 1",
      },
      8: {
        features: ['ASI'],
        asi: true,
        special: "Action Surges: 1, Extra Attacks: 1",
      },
      9: {
        features: ['Indomitable (x1)'],
        asi: false,
        special: "Action Surges: 1, Extra Attacks: 1",
      },
      10: {
        features: ['Martial Archetype Feature'],
        asi: false,
        special: "Action Surges: 1, Extra Attacks: 1",
      },
      11: {
        features: ['Extra Attack (x2)'],
        asi: false,
        special: "Action Surges: 1, Extra Attacks: 2",
      },
      12: {
        features: ['ASI'],
        asi: true,
        special: "Action Surges: 1, Extra Attacks: 2",
      },
      13: {
        features: ['Indomitable (x2)'],
        asi: false,
        special: "Action Surges: 1, Extra Attacks: 2",
      },
      14: {
        features: ['ASI'],
        asi: true,
        special: "Action Surges: 1, Extra Attacks: 2",
      },
      15: {
        features: ['Martial Archetype Feature'],
        asi: false,
        special: "Action Surges: 1, Extra Attacks: 2",
      },
      16: {
        features: ['ASI'],
        asi: true,
        special: "Action Surges: 1, Extra Attacks: 2",
      },
      17: {
        features: ['Action Surge (x2)', 'Indomitable (x3)'],
        asi: false,
        special: "Action Surges: 2, Extra Attacks: 2",
      },
      18: {
        features: ['Martial Archetype Feature'],
        asi: false,
        special: "Action Surges: 2, Extra Attacks: 2",
      },
      19: {
        features: ['ASI'],
        asi: true,
        special: "Action Surges: 2, Extra Attacks: 2",
      },
      20: {
        features: ['Extra Attack (x3)'],
        asi: false,
        special: "Action Surges: 2, Extra Attacks: 3",
      }
    }
  },
  'Cleric': {
    name: "Cleric",
    hitDie: "",
    primaryAbility: "",
    savingThrows: [],
    levels: {
      1: {
        features: ['Spellcasting', 'Divine Domain'],
        asi: false,
      },
      2: {
        features: ['Channel Divinity (x1)', 'Divine Domain Feature'],
        asi: false,
      },
      3: {
        features: [''],
        asi: false,
      },
      4: {
        features: ['ASI'],
        asi: true,
      },
      5: {
        features: ['Destroy Undead (CR 1/2)'],
        asi: false,
      },
      6: {
        features: ['Channel Divinity (x2)', 'Divine Domain Feature'],
        asi: false,
      },
      7: {
        features: [''],
        asi: false,
      },
      8: {
        features: ['ASI', 'Destroy Undead (CR 1)', 'Divine Domain Feature'],
        asi: true,
      },
      9: {
        features: [''],
        asi: false,
      },
      10: {
        features: ['Divine Intervention'],
        asi: false,
      },
      11: {
        features: ['Destroy Undead (CR 2)'],
        asi: false,
      },
      12: {
        features: ['ASI'],
        asi: true,
      },
      13: {
        features: [''],
        asi: false,
      },
      14: {
        features: ['Destroy Undead (CR 3)'],
        asi: false,
      },
      15: {
        features: [''],
        asi: false,
      },
      16: {
        features: ['ASI'],
        asi: true,
      },
      17: {
        features: ['Destroy Undead (CR 4)', 'Divine Domain Feature'],
        asi: false,
      },
      18: {
        features: ['Channel Divinity (x3)'],
        asi: false,
      },
      19: {
        features: ['ASI'],
        asi: true,
      },
      20: {
        features: ['Divine Intervention Improvement'],
        asi: false,
      }
    }
  },
  'Wizard': {
    name: "Wizard",
    hitDie: "",
    primaryAbility: "",
    savingThrows: [],
    levels: {
      1: {
        features: ['Spellcasting', 'Arcane Recovery'],
        asi: false,
        special: "Cantrips: 3/Spells Known: 6",
      },
      2: {
        features: ['Arcane Tradition'],
        asi: false,
        special: "Cantrips: 3/Spells Known: 8",
      },
      3: {
        features: [''],
        asi: false,
        special: "Cantrips: 3/Spells Known: 10",
      },
      4: {
        features: ['ASI'],
        asi: true,
        special: "Cantrips: 4/Spells Known: 12",
      },
      5: {
        features: [''],
        asi: false,
        special: "Cantrips: 4/Spells Known: 14",
      },
      6: {
        features: ['Arcane Tradition Feature'],
        asi: false,
        special: "Cantrips: 4/Spells Known: 16",
      },
      7: {
        features: [''],
        asi: false,
        special: "Cantrips: 4/Spells Known: 18",
      },
      8: {
        features: ['ASI'],
        asi: true,
        special: "Cantrips: 4/Spells Known: 20",
      },
      9: {
        features: [''],
        asi: false,
        special: "Cantrips: 4/Spells Known: 22",
      },
      10: {
        features: ['Arcane Tradition Feature'],
        asi: false,
        special: "Cantrips: 5/Spells Known: 24",
      },
      11: {
        features: [''],
        asi: false,
        special: "Cantrips: 5/Spells Known: 26",
      },
      12: {
        features: ['ASI'],
        asi: true,
        special: "Cantrips: 5/Spells Known: 28",
      },
      13: {
        features: [''],
        asi: false,
        special: "Cantrips: 5/Spells Known: 30",
      },
      14: {
        features: ['Arcane Tradition Feature'],
        asi: false,
        special: "Cantrips: 5/Spells Known: 32",
      },
      15: {
        features: [''],
        asi: false,
        special: "Cantrips: 5/Spells Known: 34",
      },
      16: {
        features: ['ASI'],
        asi: true,
        special: "Cantrips: 5/Spells Known: 36",
      },
      17: {
        features: [''],
        asi: false,
        special: "Cantrips: 5/Spells Known: 38",
      },
      18: {
        features: ['Spell Mastery'],
        asi: false,
        special: "Cantrips: 5/Spells Known: 40",
      },
      19: {
        features: ['ASI'],
        asi: true,
        special: "Cantrips: 5/Spells Known: 42",
      },
      20: {
        features: ['Signature Spells'],
        asi: false,
        special: "Cantrips: 5/Spells Known: 44",
      }
    }
  },
  'Monk': {
    name: "Monk",
    hitDie: "",
    primaryAbility: "",
    savingThrows: [],
    levels: {
      1: {
        features: ['Unarmored Defense', 'Martial Arts'],
        asi: false,
        special: "Ki: 0, Martial Arts: 1d4, Move: +0",
      },
      2: {
        features: ['Ki', 'Unarmored Movement'],
        asi: false,
        special: "Ki: 2, Martial Arts: 1d4, Move: +10",
      },
      3: {
        features: ['Monastic Tradition', 'Deflect Missiles'],
        asi: false,
        special: "Ki: 3, Martial Arts: 1d4, Move: +10",
      },
      4: {
        features: ['ASI', 'Slow Fall'],
        asi: true,
        special: "Ki: 4, Martial Arts: 1d4, Move: +10",
      },
      5: {
        features: ['Extra Attack', 'Stunning Strike'],
        asi: false,
        special: "Ki: 5, Martial Arts: 1d6, Move: +10",
      },
      6: {
        features: ['Ki-Empowered Strikes', 'Monastic Tradition Feature'],
        asi: false,
        special: "Ki: 6, Martial Arts: 1d6, Move: +15",
      },
      7: {
        features: ['Evasion', 'Stillness of Mind'],
        asi: false,
        special: "Ki: 7, Martial Arts: 1d6, Move: +15",
      },
      8: {
        features: ['ASI'],
        asi: true,
        special: "Ki: 8, Martial Arts: 1d6, Move: +15",
      },
      9: {
        features: ['Unarmored Movement Improvement'],
        asi: false,
        special: "Ki: 9, Martial Arts: 1d6, Move: +15",
      },
      10: {
        features: ['Purity of Body'],
        asi: false,
        special: "Ki: 10, Martial Arts: 1d6, Move: +20",
      },
      11: {
        features: ['Monastic Tradition Feature'],
        asi: false,
        special: "Ki: 11, Martial Arts: 1d8, Move: +20",
      },
      12: {
        features: ['ASI'],
        asi: true,
        special: "Ki: 12, Martial Arts: 1d8, Move: +20",
      },
      13: {
        features: ['Tongue of the Sun and Moon'],
        asi: false,
        special: "Ki: 13, Martial Arts: 1d8, Move: +20",
      },
      14: {
        features: ['Diamond Soul'],
        asi: false,
        special: "Ki: 14, Martial Arts: 1d8, Move: +25",
      },
      15: {
        features: ['Timeless Body'],
        asi: false,
        special: "Ki: 15, Martial Arts: 1d8, Move: +25",
      },
      16: {
        features: ['ASI'],
        asi: true,
        special: "Ki: 16, Martial Arts: 1d8, Move: +25",
      },
      17: {
        features: ['Monastic Tradition Feature'],
        asi: false,
        special: "Ki: 17, Martial Arts: 1d10, Move: +25",
      },
      18: {
        features: ['Empty Body'],
        asi: false,
        special: "Ki: 18, Martial Arts: 1d10, Move: +30",
      },
      19: {
        features: ['ASI'],
        asi: true,
        special: "Ki: 19, Martial Arts: 1d10, Move: +30",
      },
      20: {
        features: ['Perfect Self'],
        asi: false,
        special: "Ki: 20, Martial Arts: 1d10, Move: +30",
      }
    }
  },
  'Warlock': {
    name: "Warlock",
    hitDie: "",
    primaryAbility: "",
    savingThrows: [],
    levels: {
      1: {
        features: ['Otherworldly Patron', 'Pact Magic'],
        asi: false,
        special: "Cantrips: 2/Spells Known: 2/Slot Level: 1/Invocations: 0",
      },
      2: {
        features: ['Eldritch Invocations'],
        asi: false,
        special: "Cantrips: 2/Spells Known: 3/Slot Level: 1/Invocations: 2",
      },
      3: {
        features: ['Pact Boon'],
        asi: false,
        special: "Cantrips: 2/Spells Known: 4/Slot Level: 2/Invocations: 2",
      },
      4: {
        features: ['ASI'],
        asi: true,
        special: "Cantrips: 3/Spells Known: 5/Slot Level: 2/Invocations: 2",
      },
      5: {
        features: [''],
        asi: false,
        special: "Cantrips: 3/Spells Known: 6/Slot Level: 3/Invocations: 3",
      },
      6: {
        features: ['Otherworldly Patron Feature'],
        asi: false,
        special: "Cantrips: 3/Spells Known: 7/Slot Level: 3/Invocations: 3",
      },
      7: {
        features: [''],
        asi: false,
        special: "Cantrips: 3/Spells Known: 8/Slot Level: 4/Invocations: 4",
      },
      8: {
        features: ['ASI'],
        asi: true,
        special: "Cantrips: 3/Spells Known: 9/Slot Level: 4/Invocations: 4",
      },
      9: {
        features: [''],
        asi: false,
        special: "Cantrips: 3/Spells Known: 10/Slot Level: 5/Invocations: 5",
      },
      10: {
        features: ['Otherworldly Patron Feature'],
        asi: false,
        special: "Cantrips: 4/Spells Known: 10/Slot Level: 5/Invocations: 5",
      },
      11: {
        features: ['Mystic Arcanum (6th)'],
        asi: false,
        special: "Cantrips: 4/Spells Known: 11/Slot Level: 5/Invocations: 5",
      },
      12: {
        features: ['ASI'],
        asi: true,
        special: "Cantrips: 4/Spells Known: 11/Slot Level: 5/Invocations: 6",
      },
      13: {
        features: ['Mystic Arcanum (7th)'],
        asi: false,
        special: "Cantrips: 4/Spells Known: 12/Slot Level: 5/Invocations: 6",
      },
      14: {
        features: ['Otherworldly Patron Feature'],
        asi: false,
        special: "Cantrips: 4/Spells Known: 12/Slot Level: 5/Invocations: 6",
      },
      15: {
        features: ['Mystic Arcanum (8th)'],
        asi: false,
        special: "Cantrips: 4/Spells Known: 13/Slot Level: 5/Invocations: 7",
      },
      16: {
        features: ['ASI'],
        asi: true,
        special: "Cantrips: 4/Spells Known: 13/Slot Level: 5/Invocations: 7",
      },
      17: {
        features: ['Mystic Arcanum (9th)'],
        asi: false,
        special: "Cantrips: 4/Spells Known: 14/Slot Level: 5/Invocations: 7",
      },
      18: {
        features: [''],
        asi: false,
        special: "Cantrips: 4/Spells Known: 14/Slot Level: 5/Invocations: 8",
      },
      19: {
        features: ['ASI'],
        asi: true,
        special: "Cantrips: 4/Spells Known: 15/Slot Level: 5/Invocations: 8",
      },
      20: {
        features: ['Eldritch Master'],
        asi: false,
        special: "Cantrips: 4/Spells Known: 15/Slot Level: 5/Invocations: 8",
      }
    }
  },
  'Druid': {
    name: "Druid",
    hitDie: "",
    primaryAbility: "",
    savingThrows: [],
    levels: {
      1: {
        features: ['Druidic', 'Spellcasting'],
        asi: false,
      },
      2: {
        features: ['Wild Shape', 'Druid Circle'],
        asi: false,
        special: "Wild Shape: CR 1/4 (no swim/fly)",
      },
      3: {
        features: [''],
        asi: false,
        special: "Wild Shape: CR 1/2 (no fly)",
      },
      4: {
        features: ['Wild Shape Improvement', 'ASI'],
        asi: true,
        special: "Wild Shape: CR 1/2 (no fly)",
      },
      5: {
        features: [''],
        asi: false,
        special: "Wild Shape: CR 1",
      },
      6: {
        features: ['Druid Circle Feature'],
        asi: false,
        special: "Wild Shape: CR 2",
      },
      7: {
        features: [''],
        asi: false,
        special: "Wild Shape: CR 2",
      },
      8: {
        features: ['Wild Shape Improvement', 'ASI'],
        asi: true,
        special: "Wild Shape: CR 2 (fly)",
      },
      9: {
        features: [''],
        asi: false,
        special: "Wild Shape: CR 3",
      },
      10: {
        features: ['Druid Circle Feature'],
        asi: false,
        special: "Wild Shape: CR 3",
      },
      11: {
        features: [''],
        asi: false,
        special: "Wild Shape: CR 3",
      },
      12: {
        features: ['ASI'],
        asi: true,
        special: "Wild Shape: CR 4",
      },
      13: {
        features: [''],
        asi: false,
        special: "Wild Shape: CR 4",
      },
      14: {
        features: ['Druid Circle Feature'],
        asi: false,
        special: "Wild Shape: CR 5",
      },
      15: {
        features: [''],
        asi: false,
        special: "Wild Shape: CR 5",
      },
      16: {
        features: ['ASI'],
        asi: true,
        special: "Wild Shape: CR 5",
      },
      17: {
        features: [''],
        asi: false,
        special: "Wild Shape: CR 6",
      },
      18: {
        features: ['Timeless Body', 'Beast Spells'],
        asi: false,
        special: "Wild Shape: CR 6",
      },
      19: {
        features: ['ASI'],
        asi: true,
        special: "Wild Shape: CR 7",
      },
      20: {
        features: ['Archdruid'],
        asi: false,
        special: "Wild Shape: CR 8",
      }
    }
  },

  // Blood Hunter (Homebrew - Matt Mercer)
  bloodhunter: {
    name: "Blood Hunter",
    hitDie: 10,
    primaryAbility: "Strength or Dexterity",
    savingThrows: ["Dexterity", "Intelligence"],
    levels: {
      1: { features: ["Hunter's Bane", "Blood Maledict (1/rest)", "Hemocraft Die: 1d4"] },
      2: { features: ["Fighting Style", "Crimson Rite"] },
      3: { features: ["Blood Hunter Order", "Crimson Rites: 1"] },
      4: { features: ["Ability Score Improvement"] },
      5: { features: ["Extra Attack", "Hemocraft Die: 1d6"] },
      6: { features: ["Brand of Castigation", "Blood Maledict (2/rest)", "Blood Curses Known: 2"] },
      7: { features: ["Order Feature", "Crimson Rite Improvement", "Crimson Rites: 2"] },
      8: { features: ["Ability Score Improvement"] },
      9: { features: ["Grim Psychometry"] },
      10: { features: ["Dark Augmentation", "Blood Curses Known: 3"] },
      11: { features: ["Order Feature", "Hemocraft Die: 1d8"] },
      12: { features: ["Ability Score Improvement"] },
      13: { features: ["Brand of Tethering", "Blood Maledict (3/rest)"] },
      14: { features: ["Hardened Soul", "Crimson Rite Improvement", "Crimson Rites: 3", "Blood Curses Known: 4"] },
      15: { features: ["Order Feature"] },
      16: { features: ["Ability Score Improvement"] },
      17: { features: ["Blood Maledict (4/rest)", "Hemocraft Die: 1d10"] },
      18: { features: ["Order Feature", "Blood Curses Known: 5"] },
      19: { features: ["Ability Score Improvement"] },
      20: { features: ["Sanguine Mastery"] }
    }
  }
};
