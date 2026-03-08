import React from 'react';
import { useCharacterStore } from '../../state/store';
import { classes, subclasses, classSavingThrows, classHitDice, getProficiencyBonus, getModifier, calculateAC } from '../../data/dndRules';

export default function ClassTab() {
  const { character, createCharacter, updateCharacter } = useCharacterStore();

  React.useEffect(() => {
    if (!character) createCharacter('New Character');
  }, []);

  if (!character) return null;

  const className = character.class || '';
  const level = character.level || 1;
  const hitDie = className ? classHitDice[className] || 8 : 8;
  const conMod = getModifier(character.abilities?.con || 10);
  const totalHP = hitDie + ((level - 1) * (Math.floor(hitDie / 2) + 1 + conMod)) + conMod;
  const profBonus = getProficiencyBonus(level);
  const dexMod = getModifier(character.abilities?.dex || 10);
  const ac = calculateAC(character.armorType || 'none', dexMod, character.hasShield || false);
  const savingThrows = className ? classSavingThrows[className] || [] : [];
  const availableSubclasses = subclasses[className] || [];

  return (
    <div className="p-6 bg-tab-blood/20 backdrop-blur-sm rounded-xl m-4 space-y-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">⚔️ Class & Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-red-300">Class</label>
          <select value={className} onChange={(e) => updateCharacter('class', e.target.value)} className="input-field mt-1">
            <option value="">Select Class</option>
            {classes.map(c => <option key={c} value={c}>{c.replace(/\b\w/g, l => l.toUpperCase())}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-red-300">Subclass</label>
          <select value={character.subclass || ''} onChange={(e) => updateCharacter('subclass', e.target.value)} className="input-field mt-1">
            <option value="">Select Subclass</option>
            {availableSubclasses.map(sc => <option key={sc} value={sc}>{sc.replace(/([A-Z])/g, ' $1').replace(/\b\w/g, l => l.toUpperCase())}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-red-300">Level</label>
          <input type="number" value={level} onChange={(e) => updateCharacter('level', parseInt(e.target.value) || 1)} min="1" max="20" className="input-field mt-1" />
        </div>
      </div>

      <div className="bg-dark-purple-950/50 border border-red-700/50 p-4 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-gray-400 text-xs">Hit Points</p>
          <p className="text-red-400 font-bold text-2xl">{totalHP}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Armor Class</p>
          <p className="text-red-400 font-bold text-2xl">{ac}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Proficiency</p>
          <p className="text-red-400 font-bold text-2xl">+{profBonus}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Saving Throws</p>
          <p className="text-red-400 font-bold text-sm">{savingThrows.map(s => s.toUpperCase()).join(', ')}</p>
        </div>
      </div>
    </div>
  );
}