import React from 'react';
import { useCharacterStore } from '../../state/store';
import { races, subraces, classes, backgrounds, alignments, languages, armorTypes } from '../../data/dndRules';

export default function CharacterTab() {
  const { character, createCharacter, updateCharacter } = useCharacterStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (character) {
      updateCharacter(name, value);
    } else if (value && name === 'name') {
      createCharacter(value);
    }
  };

  const selectedRace = character?.race || '';
  const availableSubraces = subraces[selectedRace] || [];

  return (
    <div className="space-y-4 p-6 bg-tab-purple/20 backdrop-blur-sm rounded-xl m-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">✨ Character Identity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-purple-200">Character Name *</label>
          <input type="text" name="name" value={character?.name || ''} onChange={handleChange} className="input-field mt-1 border-purple-500/50 focus:border-purple-400" placeholder="Enter name..." />
        </div>

        {/* Background */}
        <div>
          <label className="block text-sm font-medium text-purple-200">Background</label>
          <select name="background" value={character?.background || ''} onChange={handleChange} className="input-field mt-1">
            <option value="">Select Background</option>
            {backgrounds.map(bg => <option key={bg} value={bg}>{bg.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>)}
          </select>
        </div>

        {/* Race */}
        <div>
          <label className="block text-sm font-medium text-purple-200">Species/Race</label>
          <select name="race" value={character?.race || ''} onChange={handleChange} className="input-field mt-1">
            <option value="">Select Race</option>
            {races.map(r => <option key={r} value={r}>{r.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>)}
          </select>
        </div>

        {/* Subrace (conditional) */}
        {availableSubraces.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-purple-200">Subrace</label>
            <select name="subrace" value={character?.subrace || ''} onChange={handleChange} className="input-field mt-1">
              <option value="">Select Subrace</option>
              {availableSubraces.map(sr => <option key={sr} value={sr}>{sr.replace(/([A-Z])/g, ' $1').replace(/\b\w/g, l => l.toUpperCase())}</option>)}
            </select>
          </div>
        )}

        {/* Class */}
        <div>
          <label className="block text-sm font-medium text-purple-200">Class</label>
          <select name="class" value={character?.class || ''} onChange={handleChange} className="input-field mt-1">
            <option value="">Select Class</option>
            {classes.map(c => <option key={c} value={c}>{c.replace(/\b\w/g, l => l.toUpperCase())}</option>)}
          </select>
        </div>

        {/* Level */}
        <div>
          <label className="block text-sm font-medium text-purple-200">Level</label>
          <input type="number" name="level" value={character?.level || 1} onChange={handleChange} min="1" max="20" className="input-field mt-1" />
        </div>

        {/* Alignment */}
        <div>
          <label className="block text-sm font-medium text-purple-200">Alignment</label>
          <select name="alignment" value={character?.alignment || ''} onChange={handleChange} className="input-field mt-1">
            <option value="">Select Alignment</option>
            {alignments.map(a => <option key={a} value={a}>{a.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>)}
          </select>
        </div>

        {/* Languages */}
        <div>
          <label className="block text-sm font-medium text-purple-200">Extra Language</label>
          <select name="language" value={character?.language || ''} onChange={handleChange} className="input-field mt-1">
            <option value="">Common (auto)</option>
            {languages.filter(l => l !== 'common').map(l => <option key={l} value={l}>{l.replace(/\b\w/g, l => l.toUpperCase())}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}