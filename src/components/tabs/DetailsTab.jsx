import React from 'react';
import { useCharacterStore } from '../../state/store';

export default function DetailsTab() {
  const { character, updateCharacter } = useCharacterStore();

  if (!character) return <div className="p-4 text-white">Create a character to begin</div>;

  return (
    <div className="p-6 bg-tab-sky/20 backdrop-blur-sm rounded-xl m-4 space-y-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">📜 Character Details</h2>
      
      <div>
        <label className="block text-sm font-medium text-sky-200">Alignment</label>
        <input
          type="text"
          name="alignment"
          value={character.alignment || ''}
          onChange={(e) => updateCharacter({ alignment: e.target.value })}
          className="input-field mt-1 border-sky-600/50 focus:border-sky-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-sky-200">Backstory</label>
        <textarea
          name="backstory"
          rows={6}
          value={character.backstory || ''}
          onChange={(e) => updateCharacter({ backstory: e.target.value })}
          className="input-field mt-1 border-sky-600/50 focus:border-sky-400"
        />
      </div>
    </div>
  );
}