import React, { useEffect } from 'react';
import { useCharacterStore } from '../../state/store';

export default function ClassTab() {
  const { character, createCharacter, updateCharacter } = useCharacterStore();

  useEffect(() => {
    if (!character) createCharacter('New Character');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (character) updateCharacter(name, value);
  };

  if (!character) return <div className="p-8 text-center text-gray-400">Loading...</div>;

  return (
    <div className="space-y-4 p-6 bg-tab-blood/20 backdrop-blur-sm rounded-xl m-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">⚔️ Class & Level</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-red-300">Class</label>
          <select name="class" value={character.class || ''} onChange={handleChange} className="input-field mt-1">
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
          <input type="number" name="level" value={character.level || 1} onChange={handleChange} min="1" max="20" className="input-field mt-1" />
        </div>

        <div>
          <label className="block text-sm font-medium text-red-300">Subclass (Optional)</label>
          <input type="text" name="subclass" value={character.subclass || ''} onChange={handleChange} className="input-field mt-1" placeholder="e.g., Champion, Berserker" />
        </div>
      </div>
    </div>
  );
}