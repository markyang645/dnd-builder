import React from 'react';
import { useCharacterStore } from '../../state/store';

export default function DetailsTab() {
  const { character, createCharacter, updateCharacter } = useCharacterStore();

  return (
    <div className="p-6 bg-tab-sky/20 backdrop-blur-sm rounded-xl m-4 space-y-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">📜 Character Details</h2>
      
      <div>
        <label className="block text-sm font-medium text-sky-200">Alignment</label>
        <input
          type="text"
          value={character?.alignment || ''}
          onChange={(e) => {
            if (character) {
              updateCharacter({ alignment: e.target.value });
            } else {
              createCharacter('New Character');
            }
          }}
          className="input-field mt-1 border-sky-600/50 focus:border-sky-400"
          placeholder="e.g., Chaotic Good, Lawful Neutral..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-sky-200">Backstory</label>
        <textarea
          value={character?.backstory || ''}
          onChange={(e) => {
            if (character) {
              updateCharacter({ backstory: e.target.value });
            } else {
              createCharacter('New Character');
            }
          }}
          rows={6}
          className="input-field mt-1 border-sky-600/50 focus:border-sky-400"
          placeholder="Write your character's story..."
        />
      </div>
    </div>
  );
}