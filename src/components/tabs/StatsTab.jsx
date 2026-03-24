import React, { useState, useEffect } from 'react';
import { useCharacterStore } from '../../state/store';
import { skills } from '../../data/skillsData';
import { getProficiencyBonus, getModifier, pointBuyCosts, pointBuyTotal, pointBuyMin, pointBuyMax, standardArray, classSkillProficiencies, backgroundSkills } from '../../data/dndRules';
import { getRaceData } from '../../data/raceData';
const ABILITIES = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
const ABILITY_LABELS = {
str: 'Strength', dex: 'Dexterity', con: 'Constitution',
int: 'Intelligence', wis: 'Wisdom', cha: 'Charisma'
};
export default function StatsTab() {
const {
character,
createCharacter,
updateAbility,
toggleSkillProficiency,
setActiveStatTab,
rollAbilityScores,
rollBreakdowns
} = useCharacterStore();
const [pointBuyCost, setPointBuyCost] = useState(0);
const [error, setError] = useState('');
const [selectedNumber, setSelectedNumber] = useState(null);
const [standardArrayAssignments, setStandardArrayAssignments] = useState({});
const [availableNumbers, setAvailableNumbers] = useState([...standardArray]);
useEffect(() => {
if (!character) createCharacter('New Character');
}, []);
useEffect(() => {
if (character && character.statMethod === 'pointbuy') {
calculatePointBuyCost();
}
}, [character?.abilities]);
const calculatePointBuyCost = () => {
if (!character) return;
const abilities = character.baseAbilities || character.abilities;
let total = 0;
Object.values(abilities).forEach(score => {
if (score >= 8 && score <= 15) {
total += pointBuyCosts[score] || 0;
}
});
setPointBuyCost(total);
if (total > pointBuyTotal) {
setError(\Point buy cost (\) exceeds maximum (\)\);
} else {
setError('');
}
};
const handleAbilityChange = (ability, value) => {
if (!character) return;
const numValue = parseInt(value) || 8;
let clampedValue = numValue;
if (character.statMethod === 'pointbuy') {
clampedValue = Math.max(pointBuyMin, Math.min(pointBuyMax, numValue));
} else {
clampedValue = Math.max(3, Math.min(20, numValue));
}
updateAbility(ability, clampedValue);
};
const handleNumberClick = (number) => setSelectedNumber(number);
const handleAbilityClick = (ability) => {
if (selectedNumber === null) return;
const currentValue = standardArrayAssignments[ability];
if (currentValue !== undefined) {
setAvailableNumbers(prev => [...prev, currentValue]);
}
setAvailableNumbers(prev => prev.filter(n => n !== selectedNumber));
const newAssignments = { ...standardArrayAssignments, [ability]: selectedNumber };
setStandardArrayAssignments(newAssignments);
if (Object.keys(newAssignments).length === 6) {
Object.entries(newAssignments).forEach(([ability, score]) => {
updateAbility(ability, score);
});
setSelectedNumber(null);
} else {
setSelectedNumber(null);
}
};
const resetStandardArray = () => {
setStandardArrayAssignments({});
setAvailableNumbers([...standardArray]);
setSelectedNumber(null);
ABILITIES.forEach(ability => updateAbility(ability, 10));
};
const handleStandardArray = () => {
setActiveStatTab('standard');
resetStandardArray();
};
const handleRoll = () => {
rollAbilityScores();
setActiveStatTab('roll');
};
const handlePointBuy = () => {
setActiveStatTab('pointbuy');
};
if (!character) return <div className="p-8 text-center text-gray-400">Loading...</div>;
const abilities = character.baseAbilities || character.abilities || { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };
const profBonus = getProficiencyBonus(character.level || 1);
const skillProficiencies = character.skillProficiencies || [];
const remainingPoints = pointBuyTotal - pointBuyCost;

// SEPARATE AUTO-GRANTED VS CHOICE PROFICIENCIES
const autoGrantedSkills = new Set();
const classSkills = classSkillProficiencies[character.class?.toLowerCase()];
const maxChoiceSkills = classSkills ? classSkills.count : 0;
const classSkillList = classSkills ? classSkills.from : [];

// Race proficiencies
if (character.race) {
const race = getRaceData(character.race);
if (race) {
if (race.skillProficiencies) race.skillProficiencies.forEach(s => autoGrantedSkills.add(s));
if (character.race === 'elf') autoGrantedSkills.add('perception');
if (character.race === 'half-orc') autoGrantedSkills.add('intimidation');
}
}

// Background proficiencies
if (character.background) {
const bgSkills = backgroundSkills[character.background];
if (bgSkills) bgSkills.forEach(s => autoGrantedSkills.add(s));
}

// Split skills into granted vs available
const grantedSkills = Object.entries(skills).filter(([key]) => autoGrantedSkills.has(key));
const availableSkills = Object.entries(skills).filter(([key, skill]) => {
return !autoGrantedSkills.has(key) && (!classSkillList || classSkillList.includes(key));
});
const choiceProficiencies = skillProficiencies.filter(s => !autoGrantedSkills.has(s));
const remainingChoices = maxChoiceSkills - choiceProficiencies.length;

return (
<div className="p-6 max-w-7xl mx-auto">
{/* Method Selection */}
<div className="mb-6">
<h3 className="text-lg font-bold mb-3 text-yellow-400">?? Ability Score Generation Method</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<button
onClick={handlePointBuy}
className={\p-4 rounded-lg border-2 transition-all \\}
>
<div className="font-bold">Point Buy</div>
<div className="text-sm opacity-75">27 points (8-15)</div>
</button>
<button
onClick={handleStandardArray}
className={\p-4 rounded-lg border-2 transition-all \\}
>
<div className="font-bold">Standard Array</div>
<div className="text-sm opacity-75">15, 14, 13, 12, 10, 8</div>
</button>
<button
onClick={handleRoll}
className={\p-4 rounded-lg border-2 transition-all \\}
>
<div className="font-bold">?? Roll (4d6 drop lowest)</div>
<div className="text-sm opacity-75">Click to roll & view</div>
</button>
</div>
{character.statMethod === 'pointbuy' && (
<div className={\mt-3 p-4 rounded-lg border-2 \\}>
<div className="flex justify-between items-center">
<span className="font-bold text-lg">Points Used:</span>
<span className={\	ext-3xl font-bold \\}>[\/27]</span>
</div>
<div className="flex justify-between items-center mt-2">
<span className="text-sm text-gray-400">Remaining:</span>
<span className={\	ext-xl font-bold \\}>{remainingPoints} points</span>
</div>
{error && <div className="text-red-400 text-sm mt-2 font-semibold">?? {error}</div>}
</div>
)}
</div>

{/* Standard Array */}
{character.statMethod === 'standard' && (
<div className="mb-8 p-6 bg-dark-purple-900/50 border-2 border-yellow-500/50 rounded-lg">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-bold text-yellow-400">?? Standard Array Assignment</h3>
<button onClick={resetStandardArray} className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white font-bold">?? Reset</button>
</div>
<div className="mb-6">
<p className="text-sm text-gray-400 mb-3">{selectedNumber ? \Now click an ability to assign \\ : 'Click a number, then click an ability'}</p>
<div className="flex flex-wrap gap-3">
{standardArray.map((number) => {
const isAvailable = availableNumbers.includes(number);
const isSelected = selectedNumber === number;
return (
<button key={number} onClick={() => isAvailable && handleNumberClick(number)} disabled={!isAvailable} className={\w-16 h-16 rounded-lg text-2xl font-bold transition-all \\}>
{number}
</button>
);
})}
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
{ABILITIES.map((ability) => {
const assignedValue = standardArrayAssignments[ability];
return (
<button key={ability} onClick={() => handleAbilityClick(ability)} disabled={!assignedValue && selectedNumber === null} className={\p-4 rounded-lg border-2 transition-all \\}>
<div className="text-xs text-gray-400 uppercase font-bold mb-2">{ABILITY_LABELS[ability]}</div>
<div className="text-3xl font-bold text-white">{assignedValue || '—'}</div>
{assignedValue && <div className="text-sm text-green-400 mt-1">{getModifier(assignedValue) >= 0 ? '+' : ''}{getModifier(assignedValue)}</div>}
</button>
);
})}
</div>
<div className="mt-6 text-center">
<p className="text-lg font-bold">Assigned: <span className="text-yellow-400">{Object.keys(standardArrayAssignments).length}</span> / 6</p>
{Object.keys(standardArrayAssignments).length === 6 && <p className="text-green-400 font-bold mt-2">? All abilities assigned!</p>}
</div>
</div>
)}

{/* Rolled Scores with Breakdowns */}
{character.statMethod === 'roll' && (
<div className="mb-8">
<h3 className="text-lg font-bold mb-3 text-yellow-400">?? Rolled Ability Scores</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{ABILITIES.map((ability) => {
const score = abilities[ability] || 10;
const mod = getModifier(score);
const sign = mod >= 0 ? '+' : '';
const breakdown = rollBreakdowns && rollBreakdowns[ability] ? rollBreakdowns[ability] : 'Click Roll button to generate';
return (
<div key={ability} className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-4">
<label className="text-xs text-gray-400 uppercase font-bold block mb-2">{ABILITY_LABELS[ability]} ({ability.toUpperCase()})</label>
<div className="text-center mb-3">
<div className="text-3xl font-bold text-white mb-1">{score}</div>
<div className="text-lg text-yellow-400 font-bold">{sign}{mod}</div>
</div>
<div className="bg-dark-purple-950/50 rounded p-2 text-xs">
<div className="text-gray-400 mb-1">Roll Breakdown:</div>
<div className="text-green-400 font-mono">{breakdown}</div>
</div>
</div>
);
})}
</div>
<button onClick={handleRoll} className="mt-4 px-6 py-3 bg-yellow-600 hover:bg-yellow-500 rounded-lg text-white font-bold">
?? Roll Again
</button>
</div>
)}

{/* Point Buy */}
{character.statMethod === 'pointbuy' && (
<div className="mb-8">
<h3 className="text-lg font-bold mb-3 text-yellow-400">?? Ability Scores (Point Buy)</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{ABILITIES.map((ability) => {
const score = abilities[ability] || 10;
const mod = getModifier(score);
const sign = mod >= 0 ? '+' : '';
const cost = pointBuyCosts[score] || 0;
return (
<div key={ability} className="bg-dark-purple-900/50 border border-purple-500/30 rounded-lg p-4">
<label className="text-xs text-gray-400 uppercase font-bold block mb-2">{ABILITY_LABELS[ability]} ({ability.toUpperCase()})</label>
<div className="space-y-2">
<input type="number" min={pointBuyMin} max={pointBuyMax} value={score} onChange={(e) => handleAbilityChange(ability, e.target.value)} className="w-full text-center text-2xl font-bold bg-dark-purple-800 border-2 border-yellow-600/50 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-yellow-400" />
<div className="flex justify-between text-xs">
<span className="text-gray-400">Cost: {cost} pts</span>
<span className="text-gray-400">Mod: {sign}{mod}</span>
</div>
<input type="range" min={pointBuyMin} max={pointBuyMax} value={score} onChange={(e) => handleAbilityChange(ability, e.target.value)} className="w-full accent-yellow-500" />
</div>
</div>
);
})}
</div>
</div>
)}

{/* Skills - SEPARATED INTO GRANTED VS CHOICE */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{/* AUTO-GRANTED PROFICIENCIES */}
<div>
<h3 className="text-lg font-bold mb-3 text-green-400">? Auto-Granted Proficiencies</h3>
<div className="bg-green-900/20 border-2 border-green-500/50 rounded-lg p-4">
{grantedSkills.length === 0 ? (
<p className="text-gray-400 text-sm">Select a race, class, and background to see granted proficiencies</p>
) : (
<div className="space-y-2">
{grantedSkills.map(([key, skill]) => {
const abilityMod = getModifier(abilities[skill.ability] || 10);
const total = abilityMod + profBonus;
const sign = total >= 0 ? '+' : '';
let source = '';
if (character.race && getRaceData(character.race)) source = 'Race';
if (character.background && backgroundSkills[character.background]) source = 'Background';
return (
<div key={key} className="flex items-center justify-between p-3 rounded-lg bg-green-900/30 border border-green-500/50">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-green-400"></span>
<div>
<div className="font-bold text-green-400">{skill.name}</div>
<div className="text-xs text-gray-400 uppercase">{skill.ability} • {source}</div>
</div>
</div>
<div className="text-lg font-bold text-green-400">{sign}{total}</div>
</div>
);
})}
</div>
)}
</div>
</div>

{/* CHOICE PROFICIENCIES */}
<div>
<h3 className="text-lg font-bold mb-3 text-yellow-400">
?? Choose Proficiencies 
<span className="text-sm font-normal text-gray-400">({choiceProficiencies.length}/{maxChoiceSkills} from {character.class || 'class'})</span>
</h3>
<div className="bg-yellow-900/20 border-2 border-yellow-500/50 rounded-lg p-4">
{remainingChoices > 0 && (
<p className="text-yellow-400 text-sm mb-3">
?? You can still choose {remainingChoices} more skill{remainingChoices !== 1 ? 's' : ''}
</p>
)}
<div className="space-y-2 max-h-96 overflow-y-auto">
{availableSkills.map(([key, skill]) => {
const isProficient = choiceProficiencies.includes(key);
const abilityMod = getModifier(abilities[skill.ability] || 10);
const total = abilityMod + (isProficient ? profBonus : 0);
const sign = total >= 0 ? '+' : '';
const canSelect = remainingChoices > 0 || isProficient;
return (
<label key={key} className={\lex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all \\}>
<div className="flex items-center gap-3">
<input 
type="checkbox" 
checked={isProficient} 
onChange={() => canSelect && toggleSkillProficiency(key)} 
disabled={!canSelect}
className="w-5 h-5 rounded border-2 border-yellow-600 text-yellow-500 focus:ring-yellow-500 focus:ring-2 cursor-pointer" 
/>
<div>
<div className={\ont-bold \\}>{skill.name}</div>
<div className="text-xs text-gray-400 uppercase">{skill.ability}</div>
</div>
</div>
<div className={\	ext-lg font-bold \\}>{sign}{total}</div>
</label>
);
})}
</div>
</div>
</div>
</div>
</div>
);
}
