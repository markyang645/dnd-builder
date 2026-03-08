import React, { useEffect } from 'react';
import { useCharacterStore } from '../../state/store';
import { getAllRaces, getRaceData, getRaceFeatures } from '../../data/raceData';

export default function CharacterTab() {
  const { character, createCharacter, updateCharacter } = useCharacterStore();
  const allRaces = getAllRaces();
  const baseRaces = allRaces.filter(r => !r.isSubrace);
  const selectedRace = character?.race || '';
  const subraces = allRaces.filter(r => r.isSubrace && r.parentRace === selectedRace);

  useEffect(() => {
    if (!character) createCharacter('New Character');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (character) updateCharacter(name, value);
  };

  const features = selectedRace ? getRaceFeatures(selectedRace) : [];
  const raceInfo = selectedRace ? getRaceData(selectedRace) : null;

  if (!character) return <div className="p-8 text-center text-gray-400">Loading...</div>;

  return (
    <div className="space-y-4 p-6 bg-tab-purple/20 backdrop-blur-sm rounded-xl m-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">✨ Character Identity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-purple-200">Character Name</label>
          <input type="text" name="name" value={character.name || ''} onChange={handleChange} className="input-field mt-1" />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-200">Background</label>
          <select name="background" value={character.background || ''} onChange={handleChange} className="input-field mt-1">
            <option value="">Select Background</option>
            <option value="acolyte">Acolyte</option>
            <option value="charlatan">Charlatan</option>
            <option value="criminal">Criminal</option>
            <option value="entertainer">Entertainer</option>
            <option value="folk-hero">Folk Hero</option>
            <option value="guild-artisan">Guild Artisan</option>
            <option value="hermit">Hermit</option>
            <option value="noble">Noble</option>
            <option value="outlander">Outlander</option>
            <option value="sage">Sage</option>
            <option value="sailor">Sailor</option>
            <option value="soldier">Soldier</option>
            <option value="urchin">Urchin</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-200">Race</label>
          <select name="race" value={selectedRace} onChange={handleChange} className="input-field mt-1">
            <option value="">Select Race</option>
            {baseRaces.map(r => <option key={r.key} value={r.key}>{r.name}</option>)}
          </select>
        </div>

        {subraces.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-purple-200">Subrace</label>
            <select name="subrace" value={character.subrace || ''} onChange={handleChange} className="input-field mt-1">
              <option value="">Select Subrace</option>
              {subraces.map(s => <option key={s.key} value={s.key}>{s.name}</option>)}
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-purple-200">Class</label>
          <select name="class" value={character.class || ''} onChange={handleChange} className="input-field mt-1">
            <option value="">Select Class</option>
            <option value="artificer">Artificer</option>
            <option value="barbarian">Barbarian</option>
            <option value="bard">Bard</option>
            <option value="cleric">Cleric</option>
            <option value="druid">Druid</option>
            <option value="fighter">Fighter</option>
            <option value="monk">Monk</option>
            <option value="paladin">Paladin</option>
            <option value="ranger">Ranger</option>
            <option value="rogue">Rogue</option>
            <option value="sorcerer">Sorcerer</option>
            <option value="warlock">Warlock</option>
            <option value="wizard">Wizard</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-200">Level</label>
          <input type="number" name="level" value={character.level || 1} onChange={handleChange} min="1" max="20" className="input-field mt-1" />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-200">Alignment</label>
          <select name="alignment" value={character.alignment || ''} onChange={handleChange} className="input-field mt-1">
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
      </div>

      {/* Race Info Card - Shows description + features */}
      {raceInfo && (
        <div className="bg-dark-purple-950/50 border border-purple-700/50 p-4 rounded-lg space-y-3">
          <h3 className="text-lg font-bold text-purple-300">🎯 {raceInfo.name}</h3>
          <p className="text-gray-300 text-sm">{raceInfo.description}</p>
          
          {/* Physical Traits (without inchesToFeetInches) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-gray-400">
            <div><span className="text-purple-400">Size:</span> {raceInfo.size}</div>
            <div><span className="text-purple-400">Speed:</span> {raceInfo.speed} ft</div>
            {raceInfo.ageRange && (
              <div><span className="text-purple-400">Age:</span> {raceInfo.ageRange.min}-{raceInfo.ageRange.max} yrs</div>
            )}
          </div>

          {/* Ability Score Increases */}
          {raceInfo.abilityScoreIncrease && Object.entries(raceInfo.abilityScoreIncrease).filter(([_, val]) => val > 0).length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-purple-300 mb-1">Ability Score Increases</h4>
              <div className="flex flex-wrap gap-2">
                {Object.entries(raceInfo.abilityScoreIncrease).filter(([_, val]) => val > 0).map(([ability, bonus]) => (
                  <span key={ability} className="px-2 py-1 bg-purple-900/50 rounded text-xs text-purple-200">
                    {ability.toUpperCase()} +{bonus}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {features.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-purple-300 mb-2">Racial Features</h4>
              <div className="space-y-2">
                {features.map((f, i) => (
                  <div key={i} className="bg-neutral-950/50 border border-purple-800 rounded p-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <div>
                        <span className="font-bold text-purple-300">{f.name}</span>
                        <p className="text-gray-400 mt-1">{f.description}</p>
                        {f.options && <p className="text-purple-400 text-[10px] mt-1">Options: {f.options.join(', ')}</p>}
                        {f.weapons && <p className="text-purple-400 text-[10px] mt-1">Weapons: {f.weapons.join(', ')}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Appearance Section - Simplified (no dropdowns until we restore appearanceOptions) */}
      <div className="bg-dark-purple-950/50 border border-purple-700/50 p-4 rounded-lg">
        <h3 className="text-sm font-bold text-purple-300 mb-3">🎨 Appearance</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <label className="block text-xs text-gray-400">Age</label>
            <input type="text" name="age" value={character.age || ''} onChange={handleChange} className="input-field mt-1 text-sm" />
          </div>
          <div>
            <label className="block text-xs text-gray-400">Gender</label>
            <input type="text" name="gender" value={character.gender || ''} onChange={handleChange} className="input-field mt-1 text-sm" />
          </div>
          <div>
            <label className="block text-xs text-gray-400">Eyes</label>
            <input type="text" name="eyes" value={character.eyes || ''} onChange={handleChange} className="input-field mt-1 text-sm" placeholder="e.g., Blue" />
          </div>
          <div>
            <label className="block text-xs text-gray-400">Hair</label>
            <input type="text" name="hair" value={character.hair || ''} onChange={handleChange} className="input-field mt-1 text-sm" placeholder="e.g., Brown" />
          </div>
        </div>
      </div>
    </div>
  );
}