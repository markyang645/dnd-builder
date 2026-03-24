import React from 'react';
import { useCharacterStore } from '../../state/store';
import { getModifier, getProficiencyBonus } from '../../data/dndRules';

export default function CharacterSheetTab() {
  const { character } = useCharacterStore();
  
  if (!character) return (
    <div className="p-8 text-center">
      <p className="text-gray-400 text-lg">Create a character first</p>
    </div>
  );

  const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
  const abilityLabels = { 
    str: 'STR', dex: 'DEX', con: 'CON', 
    int: 'INT', wis: 'WIS', cha: 'CHA' 
  };
  
  const level = character.level || 1;
  const profBonus = getProficiencyBonus(level);
  const skillProficiencies = character.skillProficiencies || [];
  
  const getMod = (score) => { 
    const mod = getModifier(score); 
    return mod >= 0 ? `+${mod}` : mod.toString(); 
  };
  
  const getSaveMod = (ability) => {
    const mod = getModifier(character.abilities?.[ability] || 10);
    const classSaves = { 
      barbarian: ['str','con'], bard: ['dex','cha'], cleric: ['wis','cha'], 
      druid: ['int','wis'], fighter: ['str','con'], monk: ['str','dex'], 
      paladin: ['wis','cha'], ranger: ['str','dex'], rogue: ['dex','int'], 
      sorcerer: ['con','cha'], warlock: ['wis','cha'], wizard: ['int','wis'] 
    };
    const isProficient = character.class && classSaves[character.class]?.includes(ability);
    const total = mod + (isProficient ? profBonus : 0);
    return total >= 0 ? `+${total}` : total.toString();
  };
  
  const passivePerception = 10 + getModifier(character.abilities?.wis || 10) + 
    (skillProficiencies.includes('perception') ? profBonus : 0);

  // Group skills by ability for better organization
  const skillsByAbility = {
    STR: ['athletics'],
    DEX: ['acrobatics', 'sleightOfHand', 'stealth'],
    INT: ['arcana', 'history', 'investigation', 'nature', 'religion'],
    WIS: ['animalHandling', 'insight', 'medicine', 'perception', 'survival'],
    CHA: ['deception', 'intimidation', 'performance', 'persuasion'],
  };

  const skillLabels = {
    acrobatics: 'Acrobatics',
    animalHandling: 'Animal Handling',
    arcana: 'Arcana',
    athletics: 'Athletics',
    deception: 'Deception',
    history: 'History',
    insight: 'Insight',
    intimidation: 'Intimidation',
    investigation: 'Investigation',
    medicine: 'Medicine',
    nature: 'Nature',
    perception: 'Perception',
    performance: 'Performance',
    persuasion: 'Persuasion',
    religion: 'Religion',
    sleightOfHand: 'Sleight of Hand',
    stealth: 'Stealth',
    survival: 'Survival',
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-3">
          <label className="text-xs text-gray-400 uppercase font-bold">Character Name</label>
          <p className="text-white font-bold text-lg">{character.name || '—'}</p>
        </div>
        <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-3">
          <label className="text-xs text-gray-400 uppercase font-bold">Class & Level</label>
          <p className="text-white font-bold">{character.class || '—'} {level > 0 ? level : '1'}</p>
        </div>
        <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-3">
          <label className="text-xs text-gray-400 uppercase font-bold">Background</label>
          <p className="text-white font-bold">{character.background || '—'}</p>
        </div>
        <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-3">
          <label className="text-xs text-gray-400 uppercase font-bold">Player Name</label>
          <p className="text-white font-bold">{character.playerName || '—'}</p>
        </div>
        <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-3">
          <label className="text-xs text-gray-400 uppercase font-bold">Race</label>
          <p className="text-white font-bold">{character.race || '—'}</p>
        </div>
        <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-3">
          <label className="text-xs text-gray-400 uppercase font-bold">Alignment</label>
          <p className="text-white font-bold">{character.alignment || '—'}</p>
        </div>
        <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-3">
          <label className="text-xs text-gray-400 uppercase font-bold">XP</label>
          <p className="text-white font-bold">{character.xp || '0'}</p>
        </div>
        <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-3">
          <label className="text-xs text-gray-400 uppercase font-bold">Proficiency Bonus</label>
          <p className="text-white font-bold">+{profBonus}</p>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Left Column - HP & AC */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-4">
            <label className="text-xs text-gray-400 uppercase font-bold block mb-2">Hit Points</label>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white">{character.maxHitPoints || 10}</span>
              <span className="text-sm text-gray-400">max</span>
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-red-400">{character.hitPoints || 10}</span>
              <span className="text-sm text-gray-400">current</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Temp HP: {character.tempHitPoints || 0}</p>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-3 text-center">
              <label className="text-xs text-gray-400 uppercase font-bold block">AC</label>
              <p className="text-xl font-bold text-white">{character.armorClass || 10}</p>
            </div>
            <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-3 text-center">
              <label className="text-xs text-gray-400 uppercase font-bold block">Initiative</label>
              <p className="text-xl font-bold text-white">{getMod(character.abilities?.dex || 10)}</p>
            </div>
            <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-3 text-center">
              <label className="text-xs text-gray-400 uppercase font-bold block">Speed</label>
              <p className="text-xl font-bold text-white">{character.speed || 30}</p>
            </div>
          </div>
        </div>

        {/* Middle Column - Ability Scores */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-3 gap-3">
            {abilities.map((ability) => (
              <div key={ability} className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-4 text-center">
                <label className="text-xs text-gray-400 uppercase font-bold block mb-2">
                  {abilityLabels[ability]}
                </label>
                <p className="text-2xl font-bold text-white mb-1">{getMod(character.abilities?.[ability] || 10)}</p>
                <div className="w-12 h-12 mx-auto rounded-full bg-dark-purple-800 border-2 border-purple-500/50 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">{character.abilities?.[ability] || 10}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">Save: {getSaveMod(ability)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Skills */}
        <div className="lg:col-span-3">
          <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-4 h-full">
            <label className="text-xs text-gray-400 uppercase font-bold block mb-3">Skills</label>
            <div className="space-y-3">
              {Object.entries(skillsByAbility).map(([ability, skills]) => (
                <div key={ability}>
                  <p className="text-xs font-bold text-purple-400 mb-1">{ability}</p>
                  <div className="space-y-1">
                    {skills.map((skillKey) => {
                      const isProficient = skillProficiencies.includes(skillKey);
                      const abilityMod = getModifier(character.abilities?.[
                        skillKey === 'athletics' ? 'str' :
                        skillKey === 'acrobatics' || skillKey === 'sleightOfHand' || skillKey === 'stealth' ? 'dex' :
                        skillKey === 'arcana' || skillKey === 'history' || skillKey === 'investigation' || skillKey === 'nature' || skillKey === 'religion' ? 'int' :
                        skillKey === 'animalHandling' || skillKey === 'insight' || skillKey === 'medicine' || skillKey === 'perception' || skillKey === 'survival' ? 'wis' : 'cha'
                      ] || 10);
                      const total = abilityMod + (isProficient ? profBonus : 0);
                      
                      return (
                        <div key={skillKey} className="flex justify-between items-center text-sm">
                          <span className={`flex items-center gap-1 ${isProficient ? 'text-yellow-400 font-semibold' : 'text-gray-300'}`}>
                            {isProficient && <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>}
                            {skillLabels[skillKey]}
                          </span>
                          <span className={`font-mono ${isProficient ? 'text-yellow-400 font-bold' : 'text-gray-400'}`}>
                            {total >= 0 ? '+' : ''}{total}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Passive Perception */}
            <div className="mt-4 pt-3 border-t border-purple-500/30">
              <label className="text-xs text-gray-400 uppercase font-bold block">Passive Wisdom (Perception)</label>
              <p className="text-2xl font-bold text-white mt-1">{passivePerception}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attacks & Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-4">
          <label className="text-xs text-gray-400 uppercase font-bold block mb-2">Attacks & Spellcasting</label>
          <p className="text-gray-300 text-sm">
            {character.class ? `${character.class} Features (Level ${level})` : 'No class selected'}
          </p>
        </div>
        <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-4">
          <label className="text-xs text-gray-400 uppercase font-bold block mb-2">Features & Traits</label>
          <p className="text-gray-300 text-sm">
            {character.race && `${character.race} Traits`}
            {character.features || 'No features added'}
          </p>
        </div>
      </div>

      {/* Appearance & Personality */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-4">
          <label className="text-xs text-gray-400 uppercase font-bold block mb-3">Appearance</label>
          <div className="space-y-1 text-sm">
            <p><span className="text-gray-400">Age:</span> <span className="text-white">{character.age || '—'}</span></p>
            <p><span className="text-gray-400">Height:</span> <span className="text-white">{character.height || '—'}</span></p>
            <p><span className="text-gray-400">Weight:</span> <span className="text-white">{character.weight || '—'}</span></p>
            <p><span className="text-gray-400">Eyes:</span> <span className="text-white">{character.eyes || '—'}</span></p>
            <p><span className="text-gray-400">Hair:</span> <span className="text-white">{character.hair || '—'}</span></p>
          </div>
        </div>
        <div className="md:col-span-2 bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-4">
          <label className="text-xs text-gray-400 uppercase font-bold block mb-3">Personality</label>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="mb-2"><span className="text-gray-400">Traits:</span> <span className="text-white">{character.personalityTraits || '—'}</span></p>
              <p><span className="text-gray-400">Bonds:</span> <span className="text-white">{character.bonds || '—'}</span></p>
            </div>
            <div>
              <p className="mb-2"><span className="text-gray-400">Ideals:</span> <span className="text-white">{character.ideals || '—'}</span></p>
              <p><span className="text-gray-400">Flaws:</span> <span className="text-white">{character.flaws || '—'}</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Backstory */}
      <div className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-4">
        <label className="text-xs text-gray-400 uppercase font-bold block mb-2">Character Backstory</label>
        <p className="text-gray-300 text-sm">{character.backstory || 'No backstory written'}</p>
      </div>
    </div>
  );
}
