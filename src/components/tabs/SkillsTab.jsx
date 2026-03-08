import React from 'react';
import { useCharacterStore } from '../../state/store';
import { skills } from '../../data/skillsData';

export default function SkillsTab() {
  const { character, createCharacter, toggleSkillProficiency } = useCharacterStore();

  const skillsArray = Object.values(skills);
  const skillProficiencies = character?.skillProficiencies || [];
  const abilities = character?.abilities || { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };

  return (
    <div className="p-6 bg-tab-green/20 backdrop-blur-sm rounded-xl m-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-4">🎯 Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {skillsArray.map((skill) => {
          const isProficient = skillProficiencies.includes(skill.ability);
          const abilityMod = Math.floor(((abilities[skill.ability] || 10) - 10) / 2);
          const total = isProficient ? abilityMod + 2 : abilityMod;
          const sign = total >= 0 ? '+' : '';

          return (
            <div 
              key={skill.ability} 
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
                  onChange={() => {
                    if (character) {
                      toggleSkillProficiency(skill.ability);
                    } else {
                      createCharacter('New Character');
                    }
                  }}
                  className="h-4 w-4 text-green-500 rounded focus:ring-green-500"
                />
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-xs text-gray-400 uppercase">({skill.ability})</span>
              </div>
              <div className="font-bold text-green-400">{sign}{total}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}