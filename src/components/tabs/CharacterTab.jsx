import React from 'react';
import { useCharacterStore } from '../../state/store';

export default function CharacterTab() {
  const { character, updateCharacter } = useCharacterStore();

  if (!character) return <div className="p-4 text-white">Create a character to begin</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateCharacter({ [name]: value });
  };

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold text-white">Character Identity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300">Character Name</label>
          <input
            type="text"
            name="name"
            value={character.name || ''}
            onChange={handleChange}
            className="input-field mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Background</label>
          <input
            type="text"
            name="background"
            value={character.background || ''}
            onChange={handleChange}
            className="input-field mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Race</label>
          <select
            name="race"
            value={character.race || ''}
            onChange={handleChange}
            className="input-field mt-1"
          >
            <option value="">Select Race</option>
            <option value="human">Human</option>
            <option value="elf">Elf</option>
            <option value="dwarf">Dwarf</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-300">Class</label>
            <input
              type="text"
              name="class"
              value={character.class || ''}
              onChange={handleChange}
              className="input-field mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Level</label>
            <input
              type="number"
              name="level"
              value={character.level || 1}
              onChange={handleChange}
              className="input-field mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}