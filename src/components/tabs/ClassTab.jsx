import React from 'react';
import { useCharacterStore } from '../../state/store';
import { classes, subclasses, classSavingThrows, classHitDice, getProficiencyBonus, getModifier, calculateAC } from '../../data/dndRules';

const classFeatures = {
  barbarian: {
    1: ["Rage (2x/day, +2 damage)", "Unarmored Defense"],
    2: ["Reckless Attack", "Danger Sense"],
    3: ["Primal Path (Subclass)"],
    5: ["Extra Attack", "Fast Movement"],
    7: ["Feral Instinct"],
    9: ["Brutal Critical (1 die)"],
    11: ["Relentless Rage"],
    15: ["Persistent Rage"],
    18: ["Indomitable Might"],
    20: ["Primal Champion (+4 STR/CON)"],
  },
  fighter: {
    1: ["Fighting Style", "Second Wind"],
    2: ["Action Surge (1/rest)"],
    3: ["Martial Archetype (Subclass)"],
    5: ["Extra Attack"],
    9: ["Indomitable (1/rest)"],
    11: ["Extra Attack (2)"],
    17: ["Action Surge (2/rest)", "Indomitable (2/rest)"],
    20: ["Extra Attack (3)"],
  },
  wizard: {
    1: ["Spellcasting", "Arcane Recovery"],
    2: ["Arcane Tradition (Subclass)"],
    18: ["Spell Mastery"],
    20: ["Signature Spells"],
  },
  rogue: {
    1: ["Expertise", "Sneak Attack (1d6)", "Thieves' Cant"],
    2: ["Cunning Action"],
    3: ["Roguish Archetype (Subclass)"],
    5: ["Uncanny Dodge"],
    7: ["Evasion"],
    11: ["Reliable Talent"],
    15: ["Slippery Mind"],
    18: ["Elusive"],
    20: ["Stroke of Luck"],
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
  const totalHP = hitDie + ((level - 1) * (Math.floor(hitDie / 2) + 1 + conMod)) + conMod;
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
          <label className="block text-sm font-medium text-red-300">Subclass</label>
          <select value={character?.subclass || ''} onChange={(e) => updateCharacter('subclass', e.target.value)} className="input-field mt-1 border-red-500/50">
            <option value="">Select Subclass</option>
            {(subclasses[className] || []).map(sc => <option key={sc} value={sc}>{sc.replace(/([A-Z])/g, ' $1').replace(/\b\w/g, l => l.toUpperCase())}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-red-300">Level</label>
          <input type="number" value={level} onChange={(e) => updateCharacter('level', parseInt(e.target.value) || 1)} min="1" max="20" className="input-field mt-1 border-red-500/50" />
        </div>
      </div>

      {/* Stats Box - HP THAT MEANS SOMETHING */}
      <div className="bg-dark-purple-950/50 border border-red-700/50 p-4 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <p className="text-gray-400 text-xs">Hit Points (Total)</p>
          <p className="text-red-400 font-bold text-2xl">{totalHP}</p>
          <p className="text-gray-500 text-xs">d{hitDie} + {conMod >= 0 ? '+' : ''}{conMod} CON per level</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Armor Class</p>
          <p className="text-red-400 font-bold text-2xl">{ac}</p>
          {character?.hasShield && <p className="text-gray-500 text-xs">(+2 shield)</p>}
        </div>
        <div>
          <p className="text-gray-400 text-xs">Proficiency Bonus</p>
          <p className="text-red-400 font-bold text-2xl">+{profBonus}</p>
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