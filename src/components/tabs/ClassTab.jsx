import React, { useEffect } from 'react';
import { useCharacterStore } from '../../state/store';
import { classHitDice, getProficiencyBonus, getModifier, calculateAC, classSavingThrows } from '../../data/dndRules';

export default function ClassTab() {
  const { character, createCharacter, updateCharacter } = useCharacterStore();

  useEffect(() => {
    if (!character) createCharacter('New Character');
  }, [character, createCharacter]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (character) updateCharacter(name, value);
  };

  if (!character) return null;

  const className = character.class || '';
  const level = character.level || 1;
  const hitDie = className ? classHitDice[className] || 8 : 8;
  const conMod = getModifier(character.abilities?.con || 10);
  const level1HP = hitDie + conMod;
  const profBonus = getProficiencyBonus(level);
  const dexMod = getModifier(character.abilities?.dex || 10);
  const ac = calculateAC(character.armorType || 'none', dexMod, character.hasShield || false);
  const savingThrows = className ? classSavingThrows[className] || [] : [];

  return (
    <div className="p-6 bg-tab-blood/20 backdrop-blur-sm rounded-xl m-4 space-y-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">⚔️ Class & Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-red-300">Class</label>
          <select name="class" value={className} onChange={handleChange} className="input-field mt-1">
            <option value="">Select Class</option>
            <option value="artificer">Artificer</option>
            <option value="barbarian">Barbarian</option>
            <option value="bard">Bard</option>
            <option value="cleric">Cleric</option>
            <option value="druid">Druid</option>
            <option value="fighter">Fighter</option>
            <option value="monk">Monk</option>
            <option value="paladin">Paladin</option>
            <option value="ranger">Ranger</option>
            <option value="rogue">Rogue</option>
            <option value="sorcerer">Sorcerer</option>
            <option value="warlock">Warlock</option>
            <option value="wizard">Wizard</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-red-300">Level</label>
          <input type="number" name="level" value={level} onChange={handleChange} min="1" max="20" className="input-field mt-1" />
        </div>
      </div>

      <div className="bg-dark-purple-950/50 border border-red-700/50 p-4 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-gray-400 text-xs">Hit Points (Level 1)</p>
          <p className="text-red-400 font-bold text-2xl">{level1HP}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Armor Class</p>
          <p className="text-red-400 font-bold text-2xl">{ac}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Proficiency Bonus</p>
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