import React from 'react';
import { useCharacterStore } from '../../state/store';
import { alignments } from '../../data/dndRules';

export default function DetailsTab() {
  const { character, updateCharacter, createCharacter } = useCharacterStore();

  return (
    <div className="p-6 bg-tab-sky/20 backdrop-blur-sm rounded-xl m-4 space-y-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">📜 Character Details</h2>
      
      <div>
        <label className="block text-sm font-medium text-sky-200">Alignment</label>
        <select value={character?.alignment || ''} onChange={(e) => character ? updateCharacter('alignment', e.target.value) : createCharacter('New Character')} className="input-field mt-1 border-sky-600/50">
          <option value="">Select Alignment</option>
          {alignments.map(a => <option key={a} value={a}>{a.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-sky-200">Backstory</label>
        <textarea value={character?.backstory || ''} onChange={(e) => character ? updateCharacter('backstory', e.target.value) : createCharacter('New Character')} rows={6} className="input-field mt-1 border-sky-600/50" placeholder="Write your character's story..." />
      </div>
    </div>
  );
}