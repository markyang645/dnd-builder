import React from 'react';
import { useCharacterStore } from '../../state/store';
import { getAllRaces, getRaceData, getRaceFeatures } from '../../data/raceData';

export default function CharacterTab() {
  const { character, createCharacter, updateCharacter } = useCharacterStore();
  const allRaces = getAllRaces();
  
  // Separate base races from subraces
  const baseRaces = allRaces.filter(r => !r.isSubrace);
  
  // Get subraces for selected race
  const selectedRace = character?.race || '';
  const subraces = allRaces.filter(r => r.isSubrace && r.parentRace === selectedRace);
  
  // Auto-create character if none exists
  React.useEffect(() => {
    if (!character) {
      createCharacter('New Character');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (character) {
      updateCharacter(name, value);
    }
  };

  // Get race features for display
  const features = selectedRace ? getRaceFeatures(selectedRace) : [];
  const raceInfo = selectedRace ? getRaceData(selectedRace) : null;

  return (
    <div className="space-y-4 p-6 bg-tab-purple/20 backdrop-blur-sm rounded-xl m-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">✨ Character Identity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-purple-200">Character Name</label>
          <input
            type="text"
            name="name"
            value={character?.name || ''}
            onChange={handleChange}
            className="input-field mt-1"
            placeholder="Enter name..."
          />
        </div>

        {/* Background */}
        <div>
          <label className="block text-sm font-medium text-purple-200">Background</label>
          <select
            name="background"
            value={character?.background || ''}
            onChange={handleChange}
            className="input-field mt-1"
          >
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

        {/* Race - BASE RACES ONLY */}
        <div>
          <label className="block text-sm font-medium text-purple-200">Species/Race</label>
          <select
            name="race"
            value={selectedRace}
            onChange={handleChange}
            className="input-field mt-1"
          >
            <option value="">Select Race</option>
            {baseRaces.map(race => (
              <option key={race.key} value={race.key}>{race.name}</option>
            ))}
          </select>
        </div>

        {/* Subrace - ONLY SHOWS IF SELECTED RACE HAS SUBRACES */}
        {subraces.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-purple-200">Subrace/Variant</label>
            <select
              name="subrace"
              value={character?.subrace || ''}
              onChange={handleChange}
              className="input-field mt-1"
            >
              <option value="">Select Subrace</option>
              {subraces.map(subrace => (
                <option key={subrace.key} value={subrace.key}>{subrace.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* Class */}
        <div>
          <label className="block text-sm font-medium text-purple-200">Class</label>
          <select
            name="class"
            value={character?.class || ''}
            onChange={handleChange}
            className="input-field mt-1"
          >
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

        {/* Level */}
        <div>
          <label className="block text-sm font-medium text-purple-200">Level</label>
          <input
            type="number"
            name="level"
            value={character?.level || 1}
            onChange={handleChange}
            min="1"
            max="20"
            className="input-field mt-1"
          />
        </div>

        {/* Alignment */}
        <div>
          <label className="block text-sm font-medium text-purple-200">Alignment</label>
          <select
            name="alignment"
            value={character?.alignment || ''}
            onChange={handleChange}
            className="input-field mt-1"
          >
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

      {/* Race Features Display */}
      {features.length > 0 && (
        <div className="bg-dark-purple-950/50 border border-purple-700/50 p-4 rounded-lg">
          <h3 className="text-sm font-bold text-purple-300 mb-2">🎯 {raceInfo?.name} Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-300">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span><strong className="text-purple-300">{f.name}:</strong> {f.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}