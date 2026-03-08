import React from 'react';
import { useCharacterStore } from '../../state/store';
import { skills } from '../../data/skillsData';

export default function SkillsTab() {
  const { character, toggleSkillProficiency } = useCharacterStore();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {skills.map((skill) => {
          const isProficient = character?.skillProficiencies.includes(skill.key);
          const abilityMod = Math.floor((character?.abilities[skill.ability] - 10) / 2);
          const total = isProficient ? abilityMod + 2 : abilityMod;
          const sign = total >= 0 ? '+' : '';

          return (
            <div 
              key={skill.key} 
              className={`flex items-center justify-between p-3 rounded border ${isProficient ? 'bg-indigo-50 border-indigo-200' : 'bg-white'}`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={isProficient}
                  onChange={() => toggleSkillProficiency(skill.key)}
                  className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                />
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-xs text-gray-500 uppercase">({skill.ability})</span>
              </div>
              <div className="font-bold text-gray-800">{sign}{total}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
