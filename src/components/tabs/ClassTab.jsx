import React from 'react';
import { useCharacterStore } from '../../state/store';

export default function ClassTab() {
  const { character, createCharacter, updateCharacter } = useCharacterStore();

  if (!character) {
    return (
      <div className="p-6 bg-tab-blood/20 backdrop-blur-sm rounded-xl m-4">
        <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-4">⚔️ Class & Features</h2>
        <p className="text-gray-400">Enter a character name in the Character tab to begin.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-tab-blood/20 backdrop-blur-sm rounded-xl m-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-4">⚔️ Class & Features</h2>
      <div className="bg-dark-purple-950/50 border border-red-700/50 p-6 rounded-lg space-y-4">
        <div>
          <label className="block text-sm font-medium text-red-300">Class</label>
          <input
            type="text"
            value={character.class || ''}
            onChange={(e) => updateCharacter({ class: e.target.value })}
            className="input-field mt-1 border-red-500/50 focus:border-red-400"
            placeholder="e.g., Fighter, Wizard, Rogue..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-red-300">Level</label>
          <input
            type="number"
            value={character.level || 1}
            onChange={(e) => updateCharacter({ level: parseInt(e.target.value) || 1 })}
            className="input-field mt-1 border-red-500/50 focus:border-red-400"
            min="1"
            max="20"
          />
        </div>
        <div className="pt-4 border-t border-red-700/30">
          <p className="text-gray-400 text-sm">
            <span className="text-red-400 font-bold">Class:</span> {character.class || 'None'}
          </p>
          <p className="text-gray-400 text-sm mt-2">
            <span className="text-red-400 font-bold">Level:</span> {character.level || 1}
          </p>
        </div>
      </div>
    </div>
  );
}