import React, { useEffect } from 'react';
import { useCharacterStore } from '../../state/store';

export default function CharacterTab() {
  const { character, createCharacter, updateCharacter } = useCharacterStore();

  useEffect(() => {
    if (!character) createCharacter('New Character');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (character) updateCharacter(name, value);
  };

  if (!character) return <div className="p-8 text-center text-gray-400">Loading...</div>;

  return (
    <div className="space-y-4 p-6 bg-tab-purple/20 backdrop-blur-sm rounded-xl m-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">✨ Character Identity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-purple-200">Character Name</label>
          <input type="text" name="name" value={character.name || ''} onChange={handleChange} className="input-field mt-1" placeholder="Enter name..." />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-200">Race</label>
          <select name="race" value={character.race || ''} onChange={handleChange} className="input-field mt-1">
            <option value="">Select Race</option>
            <option value="human">Human</option>
            <option value="elf">Elf</option>
            <option value="dwarf">Dwarf</option>
            <option value="halfling">Halfling</option>
            <option value="dragonborn">Dragonborn</option>
            <option value="gnome">Gnome</option>
            <option value="half-elf">Half-Elf</option>
            <option value="half-orc">Half-Orc</option>
            <option value="tiefling">Tiefling</option>
          </select>
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
    </div>
  );
}