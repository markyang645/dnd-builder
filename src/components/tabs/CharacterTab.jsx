import React, { useEffect } from 'react';
import { useCharacterStore } from '../../state/store';

export default function CharacterTab() {
  const { character, createCharacter, updateCharacter } = useCharacterStore();

  // Auto-create character on mount
  useEffect(() => {
    if (!character) {
      createCharacter('New Character');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateCharacter(name, value);
  };

  const races = [
    { key: 'human', name: 'Human' },
    { key: 'elf', name: 'Elf' },
    { key: 'dwarf', name: 'Dwarf' },
    { key: 'halfling', name: 'Halfling' },
    { key: 'dragonborn', name: 'Dragonborn' },
    { key: 'gnome', name: 'Gnome' },
    { key: 'half-elf', name: 'Half-Elf' },
    { key: 'half-orc', name: 'Half-Orc' },
    { key: 'tiefling', name: 'Tiefling' },
  ];

  const backgrounds = [
    'acolyte', 'charlatan', 'criminal', 'entertainer',
    'folk-hero', 'guild-artisan', 'hermit', 'noble',
    'outlander', 'sage', 'sailor', 'soldier', 'urchin'
  ];

  const classes = [
    'artificer', 'barbarian', 'bard', 'cleric', 'druid',
    'fighter', 'monk', 'paladin', 'ranger', 'rogue',
    'sorcerer', 'warlock', 'wizard'
  ];

  const alignments = [
    'lawful-good', 'neutral-good', 'chaotic-good',
    'lawful-neutral', 'neutral', 'chaotic-neutral',
    'lawful-evil', 'neutral-evil', 'chaotic-evil'
  ];

  if (!character) {
    return <div className="p-8 text-center text-gray-400">Loading...</div>;
  }

  return (
    <div className="space-y-4 p-6 bg-tab-purple/20 backdrop-blur-sm rounded-xl m-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">✨ Character Identity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-purple-200">Character Name</label>
          <input
            type="text"
            name="name"
            value={character.name || ''}
            onChange={handleChange}
            className="input-field mt-1"
            placeholder="Enter name..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-200">Background</label>
          <select name="background" value={character.background || ''} onChange={handleChange} className="input-field mt-1">
            <option value="">Select Background</option>
            {backgrounds.map(bg => (
              <option key={bg} value={bg}>{bg.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-200">Race</label>
          <select name="race" value={character.race || ''} onChange={handleChange} className="input-field mt-1">
            <option value="">Select Race</option>
            {races.map(r => (
              <option key={r.key} value={r.key}>{r.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-200">Class</label>
          <select name="class" value={character.class || ''} onChange={handleChange} className="input-field mt-1">
            <option value="">Select Class</option>
            {classes.map(c => (
              <option key={c} value={c}>{c.replace(/\b\w/g, l => l.toUpperCase())}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-200">Level</label>
          <input
            type="number"
            name="level"
            value={character.level || 1}
            onChange={handleChange}
            min="1"
            max="20"
            className="input-field mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-200">Alignment</label>
          <select name="alignment" value={character.alignment || ''} onChange={handleChange} className="input-field mt-1">
            <option value="">Select Alignment</option>
            {alignments.map(a => (
              <option key={a} value={a}>{a.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}