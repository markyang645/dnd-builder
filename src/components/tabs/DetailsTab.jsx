import React from 'react';
// ✅ Correct (named import)
import { useStore } from '../../state/store';

export default function DetailsTab() {
  const { character, updateCharacter } = useStore();

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Character Details</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Alignment</label>
        <input
          type="text"
          name="alignment"
          value={character.alignment || ''}
          onChange={(e) => updateCharacter({ alignment: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Backstory</label>
        <textarea
          name="backstory"
          rows={6}
          value={character.backstory || ''}
          onChange={(e) => updateCharacter({ backstory: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2"
        />
      </div>
    </div>
  );
}