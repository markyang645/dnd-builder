import React from 'react';
import { useCharacterStore } from '../../state/store';

export default function CharacterTab() {
  const { character, createCharacter, updateCharacter } = useCharacterStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (character) {
      updateCharacter(name, value);
    } else {
      createCharacter(value || 'New Character');
    }
  };

  return (
    <div className="space-y-4 p-6 bg-tab-purple/20 backdrop-blur-sm rounded-xl m-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">✨ Character Identity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-purple-200">Character Name</label>
          <input
            type="text"
            name="name"
            value={character?.name || ''}
            onChange={handleChange}
            className="input-field mt-1 border-purple-500/50 focus:border-purple-400"
            placeholder="Enter name..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-200">Background</label>
          <input
            type="text"
            name="background"
            value={character?.background || ''}
            onChange={handleChange}
            className="input-field mt-1 border-purple-500/50 focus:border-purple-400"
            placeholder="e.g., Acolyte, Soldier..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-200">Race</label>
          <select
            name="race"
            value={character?.race || ''}
            onChange={handleChange}
            className="input-field mt-1 border-purple-500/50 focus:border-purple-400"
          >
            <option value="">Select Race</option>
            <option value="human">Human</option>
            <option value="elf">Elf</option>
            <option value="dwarf">Dwarf</option>
            <option value="halfling">Halfling</option>
            <option value="dragonborn">Dragonborn</option>
            <option value="gnome">Gnome</option>
            <option value="halfElf">Half-Elf</option>
            <option value="halfOrc">Half-Orc</option>
            <option value="tiefling">Tiefling</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-purple-200">Class</label>
            <input
              type="text"
              name="class"
              value={character?.class || ''}
              onChange={handleChange}
              className="input-field mt-1 border-purple-500/50 focus:border-purple-400"
              placeholder="e.g., Fighter, Wizard..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-200">Level</label>
            <input
              type="number"
              name="level"
              value={character?.level || 1}
              onChange={handleChange}
              className="input-field mt-1 border-purple-500/50 focus:border-purple-400"
              min="1"
              max="20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}