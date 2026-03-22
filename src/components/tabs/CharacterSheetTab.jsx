import React from 'react';
import { useCharacterStore } from '../../state/store';
import { getModifier, getProficiencyBonus } from '../../data/dndRules';
import { skills } from '../../data/skillsData';

export default function CharacterSheetTab() {
  const { character } = useCharacterStore();
  if (!character) return <div className="p-8 text-center text-gray-400"><h2 className="text-2xl font-bold mb-4">📄 Character Sheet</h2><p>Create a character first</p></div>;
  const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
  const abilityLabels = { str: 'STR', dex: 'DEX', con: 'CON', int: 'INT', wis: 'WIS', cha: 'CHA' };
  const level = character.level || 1;
  const profBonus = getProficiencyBonus(level);
  const skillProficiencies = character.skillProficiencies || [];
  const getMod = (score) => { const mod = getModifier(score); return mod >= 0 ? `+${mod}` : mod.toString(); };
  const getSaveMod = (ability) => {
    const mod = getModifier(character.abilities?.[ability] || 10);
    const classSaves = { barbarian: ['str','con'], bard: ['dex','cha'], cleric: ['wis','cha'], druid: ['int','wis'], fighter: ['str','con'], monk: ['str','dex'], paladin: ['wis','cha'], ranger: ['str','dex'], rogue: ['dex','int'], sorcerer: ['con','cha'], warlock: ['wis','cha'], wizard: ['int','wis'] };
    const isProficient = character.class && classSaves[character.class]?.includes(ability);
    const total = mod + (isProficient ? profBonus : 0);
    return total >= 0 ? `+${total}` : total.toString();
  };
  const passivePerception = 10 + getModifier(character.abilities?.wis || 10) + (skillProficiencies.includes('perception') ? profBonus : 0);
  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen overflow-y-auto">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl p-6 md:p-8 rounded-lg text-black">
        <div className="border-b-2 border-black pb-4 mb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div><label className="text-xs font-bold text-gray-500">CHARACTER NAME</label><div className="font-bold border-b">{character.name || '—'}</div></div>
            <div><label className="text-xs font-bold text-gray-500">CLASS & LEVEL</label><div className="font-bold border-b">{character.class || '—'} {level}</div></div>
            <div><label className="text-xs font-bold text-gray-500">BACKGROUND</label><div className="font-bold border-b">{character.background || '—'}</div></div>
            <div><label className="text-xs font-bold text-gray-500">PLAYER NAME</label><div className="font-bold border-b">{character.playerName || '—'}</div></div>
            <div><label className="text-xs font-bold text-gray-500">RACE</label><div className="font-bold border-b">{character.race || '—'}</div></div>
            <div><label className="text-xs font-bold text-gray-500">ALIGNMENT</label><div className="font-bold border-b">{character.alignment || '—'}</div></div>
            <div><label className="text-xs font-bold text-gray-500">XP</label><div className="font-bold border-b">{character.xp || '0'}</div></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
          <div className="md:col-span-3 space-y-3 border-r-2 border-black pr-4 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <div className="border-2 border-black rounded p-2 text-center"><div className="text-xs font-bold">PROFICIENCY BONUS</div><div className="text-xl font-bold">+{profBonus}</div></div>
              <div className="border-2 border-black rounded p-2 text-center"><div className="text-xs font-bold">INSPIRATION</div><div className="text-xl">○</div></div>
            </div>
            <div className="border-2 border-black rounded p-2">
              <div className="text-xs font-bold">HIT POINTS</div>
              <div className="flex items-center gap-2"><div className="text-2xl font-bold">{character.maxHitPoints || 10}</div><div className="text-xs text-gray-500">max</div></div>
              <div className="flex items-center gap-2"><div className="text-2xl font-bold">{character.hitPoints || 10}</div><div className="text-xs text-gray-500">current</div></div>
              <div className="text-xs">Temp HP: {character.tempHitPoints || 0}</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="border-2 border-black rounded p-2 text-center"><div className="text-xs font-bold">AC</div><div className="text-xl font-bold">{character.armorClass || 10}</div></div>
              <div className="border-2 border-black rounded p-2 text-center"><div className="text-xs font-bold">INITIATIVE</div><div className="text-xl font-bold">{getMod(character.abilities?.dex || 10)}</div></div>
              <div className="border-2 border-black rounded p-2 text-center"><div className="text-xs font-bold">SPEED</div><div className="text-xl font-bold">{character.speed || 30}</div></div>
            </div>
            <div className="border-2 border-black rounded p-2">
              <div className="text-xs font-bold">DEATH SAVES</div>
              <div className="flex justify-between mt-2 text-xs"><span>SUCCESSES</span><span>FAILURES</span></div>
              <div className="flex justify-between mt-1"><div className="flex gap-1">○ ○ ○</div><div className="flex gap-1">○ ○ ○</div></div>
            </div>
          </div>
          <div className="md:col-span-6 grid grid-cols-3 gap-3">
            {abilities.map((ability) => (
              <div key={ability} className="border-2 border-black rounded-lg p-2 text-center">
                <div className="text-xs font-bold mb-1">{abilityLabels[ability]}</div>
                <div className="text-2xl font-bold">{getMod(character.abilities?.[ability] || 10)}</div>
                <div className="border-2 border-black rounded-full w-12 h-12 mx-auto flex items-center justify-center text-xl font-bold bg-gray-100 mt-1">{character.abilities?.[ability] || 10}</div>
                <div className="mt-2 text-xs border-t border-gray-300 pt-1"><span className="font-bold">{getSaveMod(ability)}</span></div>
              </div>
            ))}
          </div>
          <div className="md:col-span-3 border-l-2 border-black pl-4">
            <div className="text-xs font-bold mb-2">SKILLS</div>
            <div className="space-y-1 text-xs max-h-80 overflow-y-auto">
              {Object.entries(skills).map(([key, skill]) => {
                const isProficient = skillProficiencies.includes(key);
                const abilityMod = getModifier(character.abilities?.[skill.ability] || 10);
                const total = abilityMod + (isProficient ? profBonus : 0);
                return (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-1"><div className={`h-2 w-2 rounded-full ${isProficient ? 'bg-green-500' : 'bg-gray-300'}`}></div><span>{skill.name}</span></div>
                    <div className="font-bold">{total >= 0 ? '+' : ''}{total}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 border-t-2 border-black pt-2"><div className="text-xs font-bold">PASSIVE WISDOM (PERCEPTION)</div><div className="text-xl font-bold">{passivePerception}</div></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="border-2 border-black rounded p-4 h-48 overflow-y-auto"><div className="text-xs font-bold border-b border-black pb-1 mb-2">ATTACKS & SPELLCASTING</div><div className="text-sm">{character.class ? `${character.class} Features (Level ${level})` : 'No class selected'}</div></div>
          <div className="border-2 border-black rounded p-4 h-48 overflow-y-auto"><div className="text-xs font-bold border-b border-black pb-1 mb-2">FEATURES & TRAITS</div><div className="text-sm">{character.race && <div className="font-bold mb-1">{character.race} Traits</div>}{character.features || 'No features added'}</div></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="border-2 border-black rounded p-4">
            <div className="text-xs font-bold border-b border-black pb-1 mb-2">APPEARANCE</div>
            <div className="text-xs space-y-1">
              <div>Age: {character.age || '—'}</div><div>Height: {character.height || '—'}</div><div>Weight: {character.weight || '—'}</div>
              <div>Eyes: {character.eyes || '—'}</div><div>Hair: {character.hair || '—'}</div>
            </div>
          </div>
          <div className="border-2 border-black rounded p-4 md:col-span-3">
            <div className="text-xs font-bold border-b border-black pb-1 mb-2">PERSONALITY</div>
            <div className="text-xs grid grid-cols-2 gap-2">
              <div><span className="font-bold">Traits:</span> {character.personalityTraits || '—'}</div>
              <div><span className="font-bold">Ideals:</span> {character.ideals || '—'}</div>
              <div><span className="font-bold">Bonds:</span> {character.bonds || '—'}</div>
              <div><span className="font-bold">Flaws:</span> {character.flaws || '—'}</div>
            </div>
          </div>
        </div>
        <div className="border-2 border-black rounded p-4"><div className="text-xs font-bold border-b border-black pb-1 mb-2">CHARACTER BACKSTORY</div><div className="text-sm">{character.backstory || 'No backstory written'}</div></div>
      </div>
    </div>
  );
}
