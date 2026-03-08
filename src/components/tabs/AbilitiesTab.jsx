import React from 'react';
import { useCharacterStore } from '../../state/store';
import { getModifier } from '../../data/dndRules';

const ABILITIES = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

export default function AbilitiesTab() {
  const { character, updateAbility } = useCharacterStore();
  const abilities = character?.abilities || { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };

  return (
    <div className="p-6 bg-tab-gold/20 backdrop-blur-sm rounded-xl m-4 space-y-6">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">💪 Ability Scores</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {ABILITIES.map((ability) => {
          const score = abilities[ability] || 10;
          const mod = getModifier(score);
          const sign = mod >= 0 ? '+' : '';
          
          return (
            <div key={ability} className="bg-dark-purple-950/80 p-4 rounded-lg border border-yellow-600/50 text-center">
              <label className="block text-xs font-bold uppercase text-yellow-400">{ability}</label>
              <input type="number" value={score} onChange={(e) => updateAbility(ability, parseInt(e.target.value) || 10)} className="w-full text-center text-xl font-bold bg-transparent border-b border-yellow-600/50 focus:outline-none focus:border-yellow-400 text-white" />
              <div className="mt-2 text-2xl font-bold text-yellow-400">{sign}{mod}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}