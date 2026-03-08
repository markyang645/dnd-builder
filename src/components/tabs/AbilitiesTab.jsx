import React from 'react';
// ✅ Correct (named import)
import { useCharacterStore } from '../../state/store';

const ABILITIES = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

export default function AbilitiesTab() {
  const { character, updateAbility } = useCharacterStore();

  if (!character) return <div className="p-4">Create a character to begin</div>;

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Ability Scores</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {ABILITIES.map((ability) => {
          const score = character?.abilities[ability];
          const mod = Math.floor((score - 10) / 2);
          const sign = mod >= 0 ? '+' : '';
          
          return (
            <div key={ability} className="bg-gray-50 p-4 rounded-lg border text-center">
              <label className="block text-xs font-bold uppercase text-gray-500">{ability}</label>
              <input
                type="number"
                value={score}
                onChange={(e) => updateAbility(ability, parseInt(e.target.value) || 0)}
                className="w-full text-center text-xl font-bold bg-transparent border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              />
              <div className="mt-2 text-2xl font-bold text-indigo-600">
                {sign}{mod}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}