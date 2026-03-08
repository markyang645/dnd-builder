import React from 'react';
import { useCharacterStore } from '../../state/store';
import { skills, getProficiencyBonus } from '../../data/dndRules';

export default function SkillsTab() {
  const { character, toggleSkillProficiency } = useCharacterStore();

  if (!character) return <div className="p-8 text-center text-gray-400">✨ Enter a name in Character tab to begin ✨</div>;

  const skillsArray = Object.values(skills);
  const profBonus = getProficiencyBonus(character.level || 1);

  return (
    <div className="p-6 bg-tab-green/20 backdrop-blur-sm rounded-xl m-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-4">🎯 Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {skillsArray.map((skill) => {
          const skillKey = skill.ability; // acrobatics, athletics, etc.
          const isProficient = (character.skillProficiencies || []).includes(skillKey);
          const abilityMod = Math.floor(((character.abilities?.[skill.ability] || 10) - 10) / 2);
          const total = abilityMod + (isProficient ? profBonus : 0);
          const sign = total >= 0 ? '+' : '';

          return (
            <div key={skillKey} className={`flex items-center justify-between p-3 rounded border backdrop-blur-sm ${isProficient ? 'bg-green-900/50 border-green-500' : 'bg-dark-purple-950/50 border-dark-purple-700'}`}>
              <div className="flex items-center gap-3">
                <input type="checkbox" checked={isProficient} onChange={() => toggleSkillProficiency(skillKey)} className="h-4 w-4 text-green-500 rounded" />
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