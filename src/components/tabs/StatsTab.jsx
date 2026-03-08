import React, { useEffect } from 'react';
import { useCharacterStore } from '../../state/store';
import { skills } from '../../data/skillsData';
import { getProficiencyBonus, getModifier } from '../../data/dndRules';

const ABILITIES = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

export default function StatsTab() {
  const { character, createCharacter, updateAbility, toggleSkillProficiency } = useCharacterStore();

  useEffect(() => {
    if (!character) createCharacter('New Character');
  }, []);

  if (!character) return <div className="p-8 text-center text-gray-400">Loading...</div>;

  const abilities = character.abilities || { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };
  const profBonus = getProficiencyBonus(character.level || 1);
  const skillProficiencies = character.skillProficiencies || [];

  return (
    <div className="space-y-6 p-6 bg-tab-yellow/20 backdrop-blur-sm rounded-xl m-4">
      {/* Ability Scores */}
      <div>
        <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-4">💪 Ability Scores</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {ABILITIES.map((ability) => {
            const score = abilities[ability] || 10;
            const mod = getModifier(score);
            const sign = mod >= 0 ? '+' : '';
            
            return (
              <div key={ability} className="bg-dark-purple-950/80 p-4 rounded-lg border border-yellow-600/50 text-center">
                <label className="block text-xs font-bold uppercase text-yellow-400">{ability}</label>
                <input
                  type="number"
                  value={score}
                  onChange={(e) => updateAbility(ability, parseInt(e.target.value) || 10)}
                  className="w-full text-center text-xl font-bold bg-transparent border-b border-yellow-600/50 focus:outline-none focus:border-yellow-400 text-white"
                />
                <div className="mt-2 text-2xl font-bold text-yellow-400">{sign}{mod}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-4">🎯 Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {Object.entries(skills).map(([key, skill]) => {
            const isProficient = skillProficiencies.includes(key);
            const abilityMod = getModifier(abilities[skill.ability] || 10);
            const total = abilityMod + (isProficient ? profBonus : 0);
            const sign = total >= 0 ? '+' : '';

            return (
              <div 
                key={key} 
                className={`flex items-center justify-between p-3 rounded border backdrop-blur-sm ${
                  isProficient 
                    ? 'bg-green-900/50 border-green-500 shadow-lg shadow-green-500/20' 
                    : 'bg-dark-purple-950/50 border-dark-purple-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={isProficient}
                    onChange={() => toggleSkillProficiency(key)}
                    className="h-4 w-4 text-green-500 rounded focus:ring-green-500"
                  />
                  <div>
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-xs text-gray-400 ml-2 uppercase">({skill.ability})</span>
                  </div>
                </div>
                <div className="font-bold text-green-400 text-lg">{sign}{total}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}