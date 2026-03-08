import React from 'react';
import { useCharacterStore } from '../../state/store';
import { alignments } from '../../data/dndRules';

export default function DetailsTab() {
  const { character, updateCharacter } = useCharacterStore();

  return (
    <div className="p-6 bg-tab-sky/20 backdrop-blur-sm rounded-xl m-4 space-y-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">📜 Character Details</h2>
      <p className="text-gray-400 text-sm">Personal information, backstory, and roleplay details</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-sky-200">Alignment</label>
          <select value={character?.alignment || ''} onChange={(e) => updateCharacter('alignment', e.target.value)} className="input-field mt-1 border-sky-600/50">
            <option value="">Select Alignment</option>
            {alignments.map(a => <option key={a} value={a}>{a.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-sky-200">Age</label>
          <input type="text" value={character?.age || ''} onChange={(e) => updateCharacter('age', e.target.value)} className="input-field mt-1 border-sky-600/50" placeholder="e.g., 25" />
        </div>

        <div>
          <label className="block text-sm font-medium text-sky-200">Gender</label>
          <input type="text" value={character?.gender || ''} onChange={(e) => updateCharacter('gender', e.target.value)} className="input-field mt-1 border-sky-600/50" placeholder="e.g., Male, Female, Non-binary" />
        </div>

        <div>
          <label className="block text-sm font-medium text-sky-200">Height</label>
          <input type="text" value={character?.height || ''} onChange={(e) => updateCharacter('height', e.target.value)} className="input-field mt-1 border-sky-600/50" placeholder="e.g., 5'10&quot;" />
        </div>

        <div>
          <label className="block text-sm font-medium text-sky-200">Weight</label>
          <input type="text" value={character?.weight || ''} onChange={(e) => updateCharacter('weight', e.target.value)} className="input-field mt-1 border-sky-600/50" placeholder="e.g., 180 lbs" />
        </div>

        <div>
          <label className="block text-sm font-medium text-sky-200">Eyes</label>
          <input type="text" value={character?.eyes || ''} onChange={(e) => updateCharacter('eyes', e.target.value)} className="input-field mt-1 border-sky-600/50" placeholder="e.g., Blue, Green" />
        </div>

        <div>
          <label className="block text-sm font-medium text-sky-200">Hair</label>
          <input type="text" value={character?.hair || ''} onChange={(e) => updateCharacter('hair', e.target.value)} className="input-field mt-1 border-sky-600/50" placeholder="e.g., Brown, Long" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-sky-200">Backstory</label>
        <textarea value={character?.backstory || ''} onChange={(e) => updateCharacter('backstory', e.target.value)} rows={6} className="input-field mt-1 border-sky-600/50" placeholder="Write your character's story, origins, motivations..." />
      </div>

      <div>
        <label className="block text-sm font-medium text-sky-200">Personality Traits</label>
        <textarea value={character?.personalityTraits || ''} onChange={(e) => updateCharacter('personalityTraits', e.target.value)} rows={3} className="input-field mt-1 border-sky-600/50" placeholder="e.g., Brave, Cunning, Loyal..." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-sky-200">Ideals</label>
          <textarea value={character?.ideals || ''} onChange={(e) => updateCharacter('ideals', e.target.value)} rows={3} className="input-field mt-1 border-sky-600/50" placeholder="What drives your character?" />
        </div>
        <div>
          <label className="block text-sm font-medium text-sky-200">Bonds</label>
          <textarea value={character?.bonds || ''} onChange={(e) => updateCharacter('bonds', e.target.value)} rows={3} className="input-field mt-1 border-sky-600/50" placeholder="Who or what matters to your character?" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-sky-200">Flaws</label>
        <textarea value={character?.flaws || ''} onChange={(e) => updateCharacter('flaws', e.target.value)} rows={3} className="input-field mt-1 border-sky-600/50" placeholder="What weaknesses does your character have?" />
      </div>
    </div>
  );
}