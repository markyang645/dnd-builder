import React from 'react';
import { useCharacterStore } from '../../state/store';
import { classHitDice, getModifier, calculateAC, getProficiencyBonus, classSavingThrows } from '../../data/dndRules';

export default function ClassTab() {
  const { character, updateCharacter } = useCharacterStore();

  if (!character) return <div className="p-8 text-center text-gray-400">✨ Enter a name in Character tab to begin ✨</div>;

  const conMod = getModifier(character.abilities?.con || 10);
  const hitDie = classHitDice[character.class] || 8;
  const level1HP = hitDie + conMod; // PHB: Max hit die + Con mod at level 1
  const profBonus = getProficiencyBonus(character.level || 1);
  const dexMod = getModifier(character.abilities?.dex || 10);
  const ac = calculateAC(character.armorType || 'none', dexMod, character.hasShield || false);
  const savingThrows = classSavingThrows[character.class] || [];

  return (
    <div className="p-6 bg-tab-blood/20 backdrop-blur-sm rounded-xl m-4 space-y-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">⚔️ Class & Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-red-300">Class</label>
          <select value={character.class || ''} onChange={(e) => updateCharacter('class', e.target.value)} className="input-field mt-1 border-red-500/50">
            <option value="">Select Class</option>
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
          <label className="block text-sm font-medium text-red-300">Level</label>
          <input type="number" value={character.level || 1} onChange={(e) => updateCharacter('level', parseInt(e.target.value) || 1)} min="1" max="20" className="input-field mt-1 border-red-500/50" />
        </div>
      </div>

      <div className="bg-dark-purple-950/50 border border-red-700/50 p-4 rounded-lg space-y-2">
        <p className="text-gray-300"><span className="text-red-400 font-bold">Hit Points (Level 1):</span> {level1HP} ({hitDie} + {conMod >= 0 ? '+' : ''}{conMod} CON)</p>
        <p className="text-gray-300"><span className="text-red-400 font-bold">Armor Class:</span> {ac} {character.hasShield && '(+2 shield)'}</p>
        <p className="text-gray-300"><span className="text-red-400 font-bold">Proficiency Bonus:</span> +{profBonus}</p>
        <p className="text-gray-300"><span className="text-red-400 font-bold">Saving Throw Proficiencies:</span> {savingThrows.map(s => s.toUpperCase()).join(', ')}</p>
      </div>
    </div>
  );
}