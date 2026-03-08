import React, { useEffect } from 'react';
import { useCharacterStore } from '../../state/store';
import { classData, subclassData } from '../../data/classData';
import { classHitDice, getProficiencyBonus, getModifier, calculateAC, classSavingThrows } from '../../data/dndRules';

export default function ClassTab() {
  const { character, createCharacter, updateCharacter } = useCharacterStore();

  useEffect(() => {
    if (!character) createCharacter('New Character');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (character) updateCharacter(name, value);
  };

  if (!character) return null;

  const className = character.class || '';
  const level = character.level || 1;
  const classInfo = classData[className];
  const levelInfo = classInfo?.levels?.[level] || {};
  
  const hitDie = classInfo?.hitDie || 8;
  const conMod = getModifier(character.abilities?.con || 10);
  const level1HP = hitDie + conMod;
  const profBonus = getProficiencyBonus(level);
  const dexMod = getModifier(character.abilities?.dex || 10);
  const ac = calculateAC(character.armorType || 'none', dexMod, character.hasShield || false);
  const savingThrows = className ? classSavingThrows[className] || [] : [];
  const availableSubclasses = subclassData[className] || [];

  return (
    <div className="p-6 bg-tab-blood/20 backdrop-blur-sm rounded-xl m-4 space-y-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">⚔️ Class & Features</h2>
      
      {/* Class Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-red-300">Class</label>
          <select name="class" value={className} onChange={handleChange} className="input-field mt-1">
            <option value="">Select Class</option>
            {Object.keys(classData).map(c => (
              <option key={c} value={c}>{classData[c].name}</option>
            ))}
          </select>
        </div>
        
        {availableSubclasses.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-red-300">Subclass</label>
            <select name="subclass" value={character.subclass || ''} onChange={handleChange} className="input-field mt-1">
              <option value="">Select Subclass</option>
              {availableSubclasses.map(sc => <option key={sc} value={sc}>{sc}</option>)}
            </select>
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-red-300">Level</label>
          <input type="number" name="level" value={level} onChange={handleChange} min="1" max="20" className="input-field mt-1" />
        </div>
      </div>

      {/* Class Description */}
      {classInfo && (
        <div className="bg-dark-purple-950/50 border border-red-700/50 p-4 rounded-lg">
          <p className="text-gray-300 text-sm">{classInfo.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-400 mt-2">
            <div><span className="text-red-400">Hit Die:</span> d{classInfo.hitDie}</div>
            <div><span className="text-red-400">Primary:</span> {classInfo.primaryAbility}</div>
            <div><span className="text-red-400">Saves:</span> {classInfo.savingThrows.join(', ')}</div>
            <div><span className="text-red-400">Skills:</span> Choose {classInfo.skillChoices} from {classInfo.skillsFrom.length}</div>
          </div>
        </div>
      )}

      {/* Stats Box */}
      <div className="bg-dark-purple-950/50 border border-red-700/50 p-4 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-gray-400 text-xs">Hit Points (Level 1)</p>
          <p className="text-red-400 font-bold text-2xl">{level1HP}</p>
          <p className="text-gray-500 text-xs">d{hitDie} + {conMod >= 0 ? '+' : ''}{conMod} CON</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Armor Class</p>
          <p className="text-red-400 font-bold text-2xl">{ac}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Proficiency Bonus</p>
          <p className="text-red-400 font-bold text-2xl">+{profBonus}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Saving Throws</p>
          <p className="text-red-400 font-bold text-sm">{savingThrows.map(s => s.toUpperCase()).join(', ')}</p>
        </div>
      </div>

      {/* Level Features */}
      {levelInfo.features && levelInfo.features.length > 0 && (
        <div className="bg-dark-purple-950/50 border border-red-700/50 p-4 rounded-lg">
          <h3 className="text-sm font-bold text-red-300 mb-3">📜 Level {level} Features</h3>
          <div className="space-y-2">
            {levelInfo.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-red-400">•</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          {/* Show special mechanics if present */}
          {levelInfo.rages !== undefined && (
            <p className="text-xs text-gray-400 mt-2">Rages: {levelInfo.rages}, Rage Damage: +{levelInfo.rageDamage}</p>
          )}
          {levelInfo.actionSurges !== undefined && (
            <p className="text-xs text-gray-400 mt-2">Action Surges: {levelInfo.actionSurges}, Extra Attacks: {levelInfo.extraAttacks}</p>
          )}
        </div>
      )}

      {/* All Features Timeline */}
      {classInfo && (
        <div className="bg-dark-purple-950/50 border border-red-700/50 p-4 rounded-lg">
          <h3 className="text-sm font-bold text-red-300 mb-3">📈 Class Progression</h3>
          <div className="space-y-1 max-h-60 overflow-y-auto text-xs">
            {Object.entries(classInfo.levels).map(([lvl, data]) => (
              <div key={lvl} className={`flex gap-2 ${parseInt(lvl) === level ? 'text-red-400 font-bold' : 'text-gray-400'}`}>
                <span className="min-w-[2rem]">Lvl {lvl}:</span>
                <span>{data.features?.join(', ')}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}