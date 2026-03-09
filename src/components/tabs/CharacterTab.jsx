import React, { useEffect } from 'react';
import { useCharacterStore } from '../../state/store';
import { raceData } from '../../data/raceData';

export default function CharacterTab() {
  const { character, createCharacter, updateCharacter } = useCharacterStore();

  useEffect(() => {
    if (!character) createCharacter('New Character');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (character) updateCharacter(name, value);
  };

  if (!character) return null;

  const race = character.race || '';
  const subrace = character.subrace || '';
  const raceInfo = raceData[race];
  
  // Safely get subraces (ensure it's an array)
  const subraces = Array.isArray(raceInfo?.subraces) ? raceInfo.subraces : [];
  const subraceInfo = subraces.find(sr => sr.name === subrace);

  // Get features (race + subrace)
  const features = [];
  if (raceInfo?.features && Array.isArray(raceInfo.features)) {
    features.push(...raceInfo.features);
  }
  if (subraceInfo?.features && Array.isArray(subraceInfo.features)) {
    features.push(...subraceInfo.features);
  }

  return (
    <div className="p-6 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-xl m-4 space-y-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">✨ Character Identity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-purple-300">Character Name</label>
          <input
            type="text"
            name="name"
            value={character.name || ''}
            onChange={handleChange}
            placeholder="Enter character name"
            className="input-field mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-300">Race</label>
          <select
            name="race"
            value={race}
            onChange={handleChange}
            className="input-field mt-1"
          >
            <option value="">Select Race</option>
            {Object.keys(raceData).map(r => (
              <option key={r} value={r}>{raceData[r].name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-300">Subrace</label>
          <select
            name="subrace"
            value={subrace}
            onChange={handleChange}
            className="input-field mt-1"
            disabled={subraces.length === 0}
          >
            <option value="">Select Subrace</option>
            {subraces.map(sr => (
              <option key={sr.name} value={sr.name}>{sr.name}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-purple-300">Alignment</label>
          <select
            name="alignment"
            value={character.alignment || ''}
            onChange={handleChange}
            className="input-field mt-1"
          >
            <option value="">Select Alignment</option>
            <option value="lawful-good">Lawful Good</option>
            <option value="neutral-good">Neutral Good</option>
            <option value="chaotic-good">Chaotic Good</option>
            <option value="lawful-neutral">Lawful Neutral</option>
            <option value="true-neutral">True Neutral</option>
            <option value="chaotic-neutral">Chaotic Neutral</option>
            <option value="lawful-evil">Lawful Evil</option>
            <option value="neutral-evil">Neutral Evil</option>
            <option value="chaotic-evil">Chaotic Evil</option>
          </select>
        </div>
      </div>

      {features.length > 0 && (
        <div className="bg-dark-purple-950/50 border border-purple-700/50 p-4 rounded-lg">
          <h3 className="text-sm font-bold text-purple-300 mb-3">🧬 Racial Features</h3>
          <div className="space-y-2">
            {features.map((feature, i) => (
              <div key={i} className="text-sm text-gray-300">
                <span className="text-purple-400 font-semibold">{feature.name}:</span>
                <span className="text-gray-400 ml-2">{feature.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
