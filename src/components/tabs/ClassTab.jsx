import React from 'react';
import { useCharacterStore } from '../../state/store';
import { classes, classSavingThrows, classHitDice, getProficiencyBonus, getModifier, calculateAC } from '../../data/dndRules';

// Class features by level (from dnd5e_class_levels.csv)
const classFeatures = {
  barbarian: {
    1: ["Rage (2x/day, +2 damage)", "Unarmored Defense"],
    2: ["Reckless Attack", "Danger Sense"],
    3: ["Primal Path"],
    5: ["Extra Attack", "Fast Movement"],
    7: ["Feral Instinct"],
    9: ["Brutal Critical (1 die)"],
    11: ["Relentless Rage"],
    15: ["Persistent Rage"],
    18: ["Indomitable Might"],
    20: ["Primal Champion (+4 STR/CON, unlimited Rage)"],
  },
  bard: {
    1: ["Spellcasting", "Bardic Inspiration (d6)"],
    2: ["Jack of All Trades", "Song of Rest (d6)"],
    3: ["Bard College", "Expertise"],
    5: ["Bardic Inspiration (d8)", "Font of Inspiration"],
    10: ["Bardic Inspiration (d10)", "Magical Secrets"],
    15: ["Bardic Inspiration (d12)"],
    20: ["Superior Inspiration"],
  },
  cleric: {
    1: ["Spellcasting", "Divine Domain"],
    2: ["Channel Divinity (1/rest)", "Divine Domain Feature"],
    5: ["Destroy Undead (CR 1/2)"],
    6: ["Channel Divinity (2/rest)"],
    8: ["Destroy Undead (CR 1)", "Divine Domain Feature"],
    10: ["Divine Intervention"],
    11: ["Destroy Undead (CR 2)"],
    14: ["Destroy Undead (CR 3)"],
    17: ["Destroy Undead (CR 4)", "Channel Divinity (3/rest)"],
    20: ["Divine Intervention Improvement"],
  },
  fighter: {
    1: ["Fighting Style", "Second Wind"],
    2: ["Action Surge (1/rest)"],
    3: ["Martial Archetype"],
    5: ["Extra Attack"],
    9: ["Indomitable (1/rest)"],
    11: ["Extra Attack (2)"],
    17: ["Action Surge (2/rest)", "Indomitable (3/rest)"],
    20: ["Extra Attack (3)"],
  },
  paladin: {
    1: ["Divine Sense", "Lay on Hands (5 HP pool)"],
    2: ["Fighting Style", "Spellcasting", "Divine Smite"],
    3: ["Sacred Oath", "Divine Health"],
    5: ["Extra Attack"],
    6: ["Aura of Protection"],
    10: ["Aura of Courage"],
    11: ["Improved Divine Smite"],
    14: ["Cleansing Touch"],
    18: ["Aura Improvements (30ft)"],
  },
  rogue: {
    1: ["Expertise", "Sneak Attack (1d6)", "Thieves' Cant"],
    2: ["Cunning Action"],
    3: ["Roguish Archetype"],
    5: ["Uncanny Dodge"],
    7: ["Evasion"],
    11: ["Reliable Talent"],
    14: ["Blindsense"],
    15: ["Slippery Mind"],
    18: ["Elusive"],
    20: ["Stroke of Luck"],
  },
  wizard: {
    1: ["Spellcasting", "Arcane Recovery"],
    2: ["Arcane Tradition"],
    8: ["Ability Score Improvement"],
    18: ["Spell Mastery"],
    20: ["Signature Spells"],
  },
  sorcerer: {
    1: ["Spellcasting", "Sorcerous Origin"],
    2: ["Font of Magic (Sorcery Points)"],
    3: ["Metamagic"],
    20: ["Sorcerous Restoration"],
  },
  warlock: {
    1: ["Otherworldly Patron", "Pact Magic"],
    2: ["Eldritch Invocations"],
    3: ["Pact Boon"],
    11: ["Mystic Arcanum (6th)"],
    13: ["Mystic Arcanum (7th)"],
    15: ["Mystic Arcanum (8th)"],
    17: ["Mystic Arcanum (9th)"],
    20: ["Eldritch Master"],
  },
  ranger: {
    1: ["Favored Enemy", "Natural Explorer"],
    2: ["Fighting Style", "Spellcasting"],
    3: ["Ranger Archetype", "Primeval Awareness"],
    5: ["Extra Attack"],
    8: ["Land's Stride"],
    10: ["Hide in Plain Sight"],
    14: ["Vanish"],
    18: ["Feral Senses"],
    20: ["Foe Slayer"],
  },
  druid: {
    1: ["Druidic", "Spellcasting"],
    2: ["Wild Shape (CR 1/4)"],
    4: ["Wild Shape Improvement", "ASI"],
    18: ["Timeless Body", "Beast Spells"],
    20: ["Archdruid"],
  },
  monk: {
    1: ["Unarmored Defense", "Martial Arts (1d4)"],
    2: ["Ki (2 points)", "Unarmored Movement (+10ft)"],
    3: ["Monastic Tradition", "Deflect Missiles"],
    4: ["Slow Fall", "ASI"],
    5: ["Extra Attack", "Stunning Strike"],
    6: ["Ki-Empowered Strikes", "Unarmored Movement (+15ft)"],
    10: ["Purity of Body", "Unarmored Movement (+20ft)"],
    14: ["Diamond Soul"],
    18: ["Empty Body", "Unarmored Movement (+30ft)"],
    20: ["Perfect Self"],
  },
};

export default function ClassTab() {
  const { character, updateCharacter } = useCharacterStore();

  const className = character?.class || '';
  const level = character?.level || 1;
  const features = classFeatures[className] || {};
  const levelFeatures = Object.entries(features)
    .filter(([lvl]) => parseInt(lvl) <= level)
    .flatMap(([lvl, feats]) => feats.map(f => ({ level: lvl, feature: f })));

  const hitDie = className ? classHitDice[className] || 8 : 8;
  const conMod = getModifier(character?.abilities?.con || 10);
  const level1HP = hitDie + conMod;
  const profBonus = getProficiencyBonus(level);
  const dexMod = getModifier(character?.abilities?.dex || 10);
  const ac = calculateAC(character?.armorType || 'none', dexMod, character?.hasShield || false);
  const savingThrows = className ? classSavingThrows[className] || [] : [];

  return (
    <div className="p-6 bg-tab-blood/20 backdrop-blur-sm rounded-xl m-4 space-y-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">⚔️ Class & Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-red-300">Class</label>
          <select value={className} onChange={(e) => updateCharacter('class', e.target.value)} className="input-field mt-1 border-red-500/50">
            <option value="">Select Class</option>
            {classes.map(c => <option key={c} value={c}>{c.replace(/\b\w/g, l => l.toUpperCase())}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-red-300">Level</label>
          <input type="number" value={level} onChange={(e) => updateCharacter('level', parseInt(e.target.value) || 1)} min="1" max="20" className="input-field mt-1 border-red-500/50" />
        </div>
      </div>

      {/* Stats Box */}
      <div className="bg-dark-purple-950/50 border border-red-700/50 p-4 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <p className="text-gray-400 text-xs">Hit Points (Level 1)</p>
          <p className="text-red-400 font-bold text-lg">{level1HP}</p>
          <p className="text-gray-500 text-xs">{hitDie} + {conMod >= 0 ? '+' : ''}{conMod} CON</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Armor Class</p>
          <p className="text-red-400 font-bold text-lg">{ac}</p>
          {character?.hasShield && <p className="text-gray-500 text-xs">(+2 shield)</p>}
        </div>
        <div>
          <p className="text-gray-400 text-xs">Proficiency Bonus</p>
          <p className="text-red-400 font-bold text-lg">+{profBonus}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Saving Throws</p>
          <p className="text-red-400 font-bold text-lg">{savingThrows.map(s => s.toUpperCase()).join(', ')}</p>
        </div>
      </div>

      {/* Class Features List */}
      {levelFeatures.length > 0 ? (
        <div className="bg-dark-purple-950/50 border border-red-700/50 p-4 rounded-lg">
          <h3 className="text-sm font-bold text-red-300 mb-3">📜 Features by Level</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {levelFeatures.map((item, i) => (
              <div key={i} className={`flex items-start gap-3 p-2 rounded ${parseInt(item.level) === level ? 'bg-red-900/30 border border-red-500/50' : ''}`}>
                <span className="text-red-400 font-bold text-sm min-w-[3rem]">Level {item.level}</span>
                <span className="text-gray-300 text-sm">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-dark-purple-950/50 border border-red-700/50 p-4 rounded-lg text-center text-gray-400">
          Select a class to see features
        </div>
      )}
    </div>
  );
}