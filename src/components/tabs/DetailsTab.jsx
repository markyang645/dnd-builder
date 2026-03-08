import React, { useEffect } from 'react';
import { useCharacterStore } from '../../state/store';

export default function DetailsTab() {
  const { character, createCharacter, updateCharacter } = useCharacterStore();

  useEffect(() => {
    if (!character) createCharacter('New Character');
  }, [character, createCharacter]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (character) updateCharacter(name, value);
  };

  return (
    <div className="p-6 bg-tab-sky/20 backdrop-blur-sm rounded-xl m-4 space-y-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">📜 Character Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-sky-200">Alignment</label>
          <select name="alignment" value={character?.alignment || ''} onChange={handleChange} className="input-field mt-1">
            <option value="">Select Alignment</option>
            <option value="lawful-good">Lawful Good</option>
            <option value="neutral-good">Neutral Good</option>
            <option value="chaotic-good">Chaotic Good</option>
            <option value="lawful-neutral">Lawful Neutral</option>
            <option value="neutral">Neutral</option>
            <option value="chaotic-neutral">Chaotic Neutral</option>
            <option value="lawful-evil">Lawful Evil</option>
            <option value="neutral-evil">Neutral Evil</option>
            <option value="chaotic-evil">Chaotic Evil</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-sky-200">Age</label>
          <input type="text" name="age" value={character?.age || ''} onChange={handleChange} className="input-field mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium text-sky-200">Gender</label>
          <input type="text" name="gender" value={character?.gender || ''} onChange={handleChange} className="input-field mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium text-sky-200">Height</label>
          <input type="text" name="height" value={character?.height || ''} onChange={handleChange} className="input-field mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium text-sky-200">Weight</label>
          <input type="text" name="weight" value={character?.weight || ''} onChange={handleChange} className="input-field mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium text-sky-200">Eyes</label>
          <input type="text" name="eyes" value={character?.eyes || ''} onChange={handleChange} className="input-field mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium text-sky-200">Hair</label>
          <input type="text" name="hair" value={character?.hair || ''} onChange={handleChange} className="input-field mt-1" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-sky-200">Backstory</label>
        <textarea name="backstory" rows={6} value={character?.backstory || ''} onChange={handleChange} className="input-field mt-1" />
      </div>

      <div>
        <label className="block text-sm font-medium text-sky-200">Personality Traits</label>
        <textarea name="personalityTraits" rows={3} value={character?.personalityTraits || ''} onChange={handleChange} className="input-field mt-1" />
      </div>

      <div>
        <label className="block text-sm font-medium text-sky-200">Ideals</label>
        <textarea name="ideals" rows={3} value={character?.ideals || ''} onChange={handleChange} className="input-field mt-1" />
      </div>

      <div>
        <label className="block text-sm font-medium text-sky-200">Bonds</label>
        <textarea name="bonds" rows={3} value={character?.bonds || ''} onChange={handleChange} className="input-field mt-1" />
      </div>

      <div>
        <label className="block text-sm font-medium text-sky-200">Flaws</label>
        <textarea name="flaws" rows={3} value={character?.flaws || ''} onChange={handleChange} className="input-field mt-1" />
      </div>
    </div>
  );
}