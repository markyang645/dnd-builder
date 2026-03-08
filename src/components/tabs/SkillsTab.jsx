import React from 'react';
import { useCharacterStore } from '../../state/store';
import { skills, getProficiencyBonus } from '../../data/dndRules';

export default function SkillsTab() {
  const { character, createCharacter, toggleSkillProficiency } = useCharacterStore();

  React.useEffect(() => {
    if (!character) createCharacter('New Character');
  }, []);

  const profBonus = getProficiencyBonus(character?.level || 1);
  const abilities = character?.abilities || { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };
  const skillProficiencies = character?.skillProficiencies || [];

  if (!character) return null;

  return (
    <div className="p-6 bg-tab-green/20 backdrop-blur-sm rounded-xl m-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-4">🎯 Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {skills.map((skill) => {
          const isProficient = skillProficiencies.includes(skill.key);
          const abilityMod = Math.floor(((abilities[skill.ability] || 10) - 10) / 2);
          const total = abilityMod + (isProficient ? profBonus : 0);
          const sign = total >= 0 ? '+' : '';

          return (
            <div key={skill.key} className={`flex items-center justify-between p-3 rounded border backdrop-blur-sm ${isProficient ? 'bg-green-900/50 border-green-500' : 'bg-purple-900/40 border-dark-purple-700'}`}>
              <div className="flex items-center gap-3">
                <input type="checkbox" checked={isProficient} onChange={() => toggleSkillProficiency(skill.key)} className="h-4 w-4 text-green-500 rounded" />
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
  );
}