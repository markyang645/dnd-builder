import React, { useState } from 'react'
import { useCharacterStore } from './state/store'
import { raceData, appearanceOptions, inchesToFeetInches } from './data/raceData'
import { abilityLabels, asiLevels, pointBuyCosts, pointBuyTotal, standardArray, pointBuyMin, pointBuyMax } from './data/dndRules'
import { skills, skillsByAbility, classSkillProficiencies, backgroundSkills } from './data/skillsData'

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [showRollHistory, setShowRollHistory] = useState(false)
  const [lastRoll, setLastRoll] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  
  const { 
    character, 
    createCharacter, 
    updateCharacter, 
    updateAbility,
    setActiveStatTab,
    getPointBuyCost,
    validatePointBuy,
    rollAbilityScores,
    rollInitiative,
    rollSavingThrow,
    rollLevelUpHP,
    rollSkillCheck,
    toggleSkillProficiency,
    getSkillModifier,
    rollHistory,
    clearRollHistory,
    validationErrors,
    clearValidationErrors,
    rollBreakdowns,
  } = useCharacterStore()

  // RENAMED TABS - Clearer, more intuitive names
  const mainTabs = [
    { name: 'CHARACTER', icon: '👤', color: 'bg-purple-600' },
    { name: 'CLASS', icon: '⚔️', color: 'bg-red-600' },
    { name: 'ABILITIES', icon: '📊', color: 'bg-yellow-500' },
    { name: 'SKILLS', icon: '🎯', color: 'bg-blue-500' },
    { name: 'DETAILS', icon: '📖', color: 'bg-green-600' },
    { name: 'EXPORT', icon: '📤', color: 'bg-sky-600' },
    { name: 'CUSTOM', icon: '🛠️', color: 'bg-orange-600' },
  ]

  const statTabs = [
    { id: 'standard', name: 'Standard', icon: '📋' },
    { id: 'pointbuy', name: 'Point Buy', icon: '💰' },
    { id: 'roll', name: 'Roll', icon: '🎲' },
  ]

  const currentRace = raceData[character?.race] || raceData.human
  const ageValue = character?.age || currentRace.ageRange.min
  const heightValue = character?.height || currentRace.heightRange.min
  const weightValue = character?.weight || currentRace.weightRange.min
  
  const pointBuyCost = character ? getPointBuyCost(character.abilities) : 0
  const pointBuyValid = character ? validatePointBuy(character.abilities) : true
  const pointBuyPercent = Math.min(100, (pointBuyCost / pointBuyTotal) * 100)

  const currentStatTab = character?.activeStatTab || 'pointbuy'

  const handleRoll = (rollFn, label) => {
    const result = rollFn()
    setLastRoll({ label, result, timestamp: Date.now() })
    return result
  }

  const getAvailableScores = (currentAbility) => {
    const otherScores = []
    Object.entries(character.abilities).forEach(([ability, score]) => {
      if (ability !== currentAbility && score !== null && score !== undefined && score !== 0) {
        otherScores.push(score)
      }
    })
    
    let available = [...standardArray]
    otherScores.forEach(usedScore => {
      const index = available.indexOf(usedScore)
      if (index > -1) {
        available.splice(index, 1)
      }
    })
    
    const currentScore = character.abilities[currentAbility]
    if (currentScore && standardArray.includes(currentScore)) {
      available.push(currentScore)
    }
    
    available = [...new Set(available)].sort((a, b) => b - a)
    
    return available
  }

  if (!character) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="bg-neutral-900 border border-purple-700 rounded-xl p-8 max-w-md w-full text-center shadow-2xl shadow-purple-900/50">
          <h1 className="text-4xl font-bold mb-6 text-white">🎲 D&D Builder</h1>
          <p className="text-purple-300 mb-8">Create your next legendary character</p>
          <button onClick={() => createCharacter('New Character', 'pointbuy')} className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg text-lg mb-4">+ Create New Character</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-neutral-900 border-r border-purple-800 z-40 transition-all duration-300 ${sidebarOpen ? 'w-72' : 'w-0'} overflow-hidden`}>
        <div className="p-4 h-full overflow-y-auto">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="absolute -right-3 top-4 bg-purple-700 hover:bg-purple-600 text-white rounded-full p-1 border border-purple-500">{sidebarOpen ? '◀' : '▶'}</button>
          <div className="mb-4 pb-4 border-b border-purple-800">
            <h2 className="text-lg font-bold text-white">{character.name}</h2>
            <p className="text-xs text-purple-300">Lv.{character.level}</p>
          </div>
          <div className="space-y-2 text-xs">
            <div className="bg-neutral-950 p-2 rounded border border-purple-800"><div className="text-purple-400">HP</div><div className="text-xl font-bold text-white">{character.hitPoints || 0}</div></div>
            <div className="bg-neutral-950 p-2 rounded border border-purple-800"><div className="text-purple-400">AC</div><div className="text-xl font-bold text-white">{character.armorClass || 10}</div></div>
            <div className="bg-neutral-950 p-2 rounded border border-purple-800"><div className="text-purple-400">Initiative</div><div className="text-xl font-bold text-white">{character.initiative >= 0 ? '+' : ''}{character.initiative || 0}</div></div>
            <div className="bg-neutral-950 p-2 rounded border border-purple-800"><div className="text-purple-400">Proficiency</div><div className="text-xl font-bold text-white">+{character.proficiencyBonus || 2}</div></div>
            <div className="bg-neutral-950 p-2 rounded border border-purple-800"><div className="text-purple-400 text-[10px]">Spell Save DC</div><div className="text-lg font-bold text-white">{character.spellSaveDC || 0}</div></div>
            <div className="bg-neutral-950 p-2 rounded border border-purple-800"><div className="text-purple-400 text-[10px]">Attack Bonus</div><div className="text-lg font-bold text-white">+{character.attackBonus || 0}</div></div>
            <div className="bg-neutral-950 p-2 rounded border border-purple-800"><div className="text-purple-400 text-[10px]">ASI Available</div><div className="text-lg font-bold text-white">{character.asiAvailable || 0}</div></div>
          </div>
          {validationErrors?.length > 0 && (
            <div className="mt-4 p-3 bg-red-900/50 border border-red-700 rounded text-[10px] text-red-300">
              <div className="font-bold mb-1">⚠️ Errors:</div>
              {validationErrors.map((err, i) => (<div key={i}>• {err}</div>))}
              <button onClick={clearValidationErrors} className="mt-2 text-red-400 hover:text-white underline">Dismiss</button>
            </div>
          )}
        </div>
      </aside>

      {/* Roll History */}
      {showRollHistory && (
        <div className="fixed right-4 top-4 w-64 bg-neutral-900 border border-purple-800 rounded-lg p-3 z-50 max-h-96 overflow-y-auto shadow-xl">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-bold text-white">📜 Roll History</h3>
            <button onClick={() => setShowRollHistory(false)} className="text-purple-400 hover:text-white">✕</button>
          </div>
          {rollHistory?.length === 0 ? <p className="text-purple-400 text-xs">No rolls yet</p> : (
            <div className="space-y-1">
              {rollHistory.slice(-10).reverse().map((roll, i) => (
                <div key={i} className="bg-neutral-950 p-1.5 rounded text-[10px] text-white">
                  <span className="text-purple-400">[{new Date(roll.timestamp).toLocaleTimeString()}]</span> {roll.type}: {roll.result}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Last Roll Toast */}
      {lastRoll && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-neutral-900 border border-purple-800 rounded-lg p-3 z-50 shadow-xl">
          <div className="flex justify-between items-center gap-4">
            <div><span className="text-purple-400 text-xs">{lastRoll.label}</span><div className="text-xl font-bold text-white">{lastRoll.result?.total || lastRoll.result?.gain || lastRoll.result}</div></div>
            <button onClick={() => setLastRoll(null)} className="text-purple-400 hover:text-white">✕</button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-72' : 'ml-0'}`}>
        <header className="bg-neutral-900 border-b border-purple-800 sticky top-0 z-30">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between mb-3">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="bg-purple-800 hover:bg-purple-700 text-white font-semibold py-1.5 px-3 rounded-lg transition-all border border-purple-600 text-sm">{sidebarOpen ? '◀ Hide' : '▶ Show'}</button>
              <button onClick={() => createCharacter('New Character', 'pointbuy')} className="bg-purple-800 hover:bg-purple-700 text-white font-semibold py-1.5 px-3 rounded-lg transition-all border border-purple-600 text-sm">+ New</button>
            </div>

            {/* Stat Method Tabs */}
            <div className="flex gap-2 mb-3">
              {statTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveStatTab(tab.id)}
                  className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all text-xs border-2 ${
                    currentStatTab === tab.id
                      ? 'bg-purple-600 border-white text-white shadow-lg shadow-purple-600/50'
                      : 'bg-neutral-900 border-purple-800 text-purple-300 hover:border-purple-500 hover:bg-neutral-800'
                  }`}
                >
                  {tab.icon} {tab.name}
                </button>
              ))}
            </div>

            {/* Main Tab Navigation - RENAMED */}
            <div className="grid grid-cols-3 md:grid-cols-7 gap-1.5">
              {mainTabs.map((tab, index) => (
                <button key={tab.name} onClick={() => setActiveTab(index)} className={`py-2 px-1 rounded-lg font-semibold transition-all text-[10px] md:text-xs border ${activeTab === index ? `${tab.color} text-white font-bold shadow-lg border-white/30` : 'bg-neutral-900 text-purple-300 hover:bg-neutral-800 hover:text-white border-purple-800'}`}>
                  <span className="block text-base mb-0.5">{tab.icon}</span>
                  <span className="hidden md:inline">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-6">
          {/* TAB 0: CHARACTER (was WHO YOU ARE?) */}
          {activeTab === 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-300">Character Basics</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-neutral-900 border border-purple-800 rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-3 text-purple-300">Race & Identity</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-purple-300">Race</label>
                      <select value={character.race} onChange={(e) => updateCharacter('race', e.target.value)} className="w-full bg-black border-2 border-purple-800 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition-all">
                        <option value="">Select Race...</option>
                        {Object.entries(raceData).map(([key, data]) => (<option key={key} value={key}>{data.name}</option>))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-purple-300">Alignment</label>
                      <select value={character.alignment} onChange={(e) => updateCharacter('alignment', e.target.value)} className="w-full bg-black border-2 border-purple-800 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition-all">
                        <option value="">Select Alignment...</option>
                        {['lawful-good','neutral-good','chaotic-good','lawful-neutral','true-neutral','chaotic-neutral','lawful-evil','neutral-evil','chaotic-evil'].map(a => (<option key={a} value={a}>{a.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</option>))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-900 border border-purple-800 rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-3 text-purple-300">Physical Description</h3>
                  <div className="space-y-3">
                    <div><label className="block text-xs font-medium mb-1.5 text-purple-300">Age: <span className="text-purple-400">{ageValue} yrs</span></label><input type="range" min={currentRace.ageRange.min} max={currentRace.ageRange.max} value={ageValue} onChange={(e) => updateCharacter('age', parseInt(e.target.value))} className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer accent-purple-500" /></div>
                    <div><label className="block text-xs font-medium mb-1.5 text-purple-300">Height: <span className="text-purple-400">{inchesToFeetInches(heightValue)}</span></label><input type="range" min={currentRace.heightRange.min} max={currentRace.heightRange.max} value={heightValue} onChange={(e) => updateCharacter('height', parseInt(e.target.value))} className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer accent-purple-500" /></div>
                    <div><label className="block text-xs font-medium mb-1.5 text-purple-300">Weight: <span className="text-purple-400">{weightValue} lbs</span></label><input type="range" min={currentRace.weightRange.min} max={currentRace.weightRange.max} value={weightValue} onChange={(e) => updateCharacter('weight', parseInt(e.target.value))} className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer accent-purple-500" /></div>
                    <div><label className="block text-xs font-medium mb-1.5 text-purple-300">Gender</label><input type="text" value={character.gender || ''} onChange={(e) => updateCharacter('gender', e.target.value)} className="w-full bg-black border-2 border-purple-800 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition-all" placeholder="e.g., Male, Female" /></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 1: CLASS (was WHAT YOU DO?) */}
          {activeTab === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-300">Class & Background</h2>
              <div className="bg-neutral-900 border border-purple-800 rounded-xl p-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div><label className="block text-xs font-medium mb-1.5 text-purple-300">Class</label><select value={character.class} onChange={(e) => updateCharacter('class', e.target.value)} className="w-full bg-black border-2 border-purple-800 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition-all"><option value="">Select Class...</option>{['barbarian','bard','cleric','druid','fighter','monk','paladin','ranger','rogue','sorcerer','warlock','wizard'].map(c => (<option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>))}</select></div>
                  <div><label className="block text-xs font-medium mb-1.5 text-purple-300">Level</label><input type="number" min="1" max="20" value={character.level} onChange={(e) => updateCharacter('level', parseInt(e.target.value) || 1)} className="w-full bg-black border-2 border-purple-800 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition-all" /></div>
                  <div><label className="block text-xs font-medium mb-1.5 text-purple-300">Background</label><select value={character.background} onChange={(e) => updateCharacter('background', e.target.value)} className="w-full bg-black border-2 border-purple-800 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition-all"><option value="">Select Background...</option>{['acolyte','charlatan','criminal','entertainer','folk-hero','guild-artisan','hermit','noble','outlander','sage','sailor','soldier','urchin'].map(b => (<option key={b} value={b}>{b.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</option>))}</select></div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ABILITIES (was WHAT YOU GOT?) */}
          {activeTab === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-300">Ability Scores</h2>
              <div className="text-purple-400 text-sm mb-4">Current Method: <span className="text-white font-bold">{currentStatTab === 'standard' ? '📋 Standard Array' : currentStatTab === 'pointbuy' ? '💰 Point Buy' : '🎲 Roll'}</span></div>
              
              {currentStatTab === 'standard' && (
                <div className="bg-neutral-900 border border-purple-800 rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-4 text-purple-300">📋 Standard Array</h3>
                  <p className="text-purple-400 text-sm mb-4">Assign these scores: 15, 14, 13, 12, 10, 8</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[15, 14, 13, 12, 10, 8].map(score => (
                      <span key={score} className="bg-black px-3 py-1 rounded-lg border border-purple-800 text-white font-bold">{score}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                    {Object.entries(character.abilities).map(([ability, score]) => {
                      const availableScores = getAvailableScores(ability)
                      return (
                        <div key={ability} className="bg-black p-3 rounded-lg border border-purple-800">
                          <label className="block text-xs font-medium mb-1 uppercase text-purple-400">{abilityLabels[ability] || ability}</label>
                          <select value={score || ''} onChange={(e) => updateAbility(ability, e.target.value)} className="w-full bg-neutral-950 border-2 border-purple-800 rounded-lg px-3 py-2 text-white text-center text-xl font-bold mb-1 focus:outline-none focus:border-purple-500 transition-all">
                            <option value="">Select...</option>
                            {availableScores.map(s => (<option key={s} value={s}>{s}</option>))}
                          </select>
                          <div className="text-center text-sm font-bold text-purple-300">Mod: {score ? ((score - 10) >= 0 ? '+' : '') + Math.floor((score - 10) / 2) : '-'}</div>
                          <button onClick={() => handleRoll(() => rollSavingThrow(ability), `${abilityLabels[ability]} Save`)} className="mt-2 w-full bg-purple-800 hover:bg-purple-700 text-white text-xs py-1.5 px-3 rounded transition-all">Roll Save</button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {currentStatTab === 'pointbuy' && (
                <div className="bg-neutral-900 border border-purple-800 rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-4 text-purple-300">💰 Point Buy</h3>
                  <div className={`p-4 rounded-lg mb-4 ${pointBuyValid ? 'bg-green-900/50 border border-green-700' : 'bg-red-900/50 border border-red-700'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-bold text-lg">Points Spent</span>
                      <span className={`text-lg font-bold ${pointBuyValid ? 'text-green-400' : 'text-red-400'}`}>{pointBuyValid ? '✅ Valid' : '❌ Over Budget'}</span>
                    </div>
                    <div className="w-full bg-black rounded-full h-4 border border-purple-800">
                      <div className={`h-4 rounded-full transition-all duration-300 ${pointBuyValid ? 'bg-gradient-to-r from-green-600 to-green-400' : 'bg-gradient-to-r from-red-600 to-red-400'}`} style={{ width: `${pointBuyPercent}%` }}></div>
                    </div>
                    <p className="text-xs text-purple-400 mt-2 text-center">{pointBuyPercent.toFixed(0)}% of budget used</p>
                  </div>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-2 text-center text-xs mb-4">
                    {Object.entries(pointBuyCosts).map(([score, cost]) => (
                      <div key={score} className={`bg-black p-2 rounded border ${parseInt(score) === 14 || parseInt(score) === 15 ? 'border-yellow-600' : 'border-purple-800'}`}>
                        <div className="text-purple-400">Score {score}</div>
                        <div className="text-white font-bold">{cost} pts</div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(character.abilities).map(([ability, score]) => (
                      <div key={ability} className="bg-black p-3 rounded-lg border border-purple-800">
                        <label className="block text-xs font-medium mb-1 uppercase text-purple-400">{abilityLabels[ability] || ability}</label>
                        <input type="number" min={pointBuyMin} max={pointBuyMax} value={score} onChange={(e) => updateAbility(ability, e.target.value)} className="w-full bg-neutral-950 border-2 border-purple-800 rounded-lg px-3 py-2 text-white text-center text-xl font-bold mb-1 focus:outline-none focus:border-purple-500 transition-all" />
                        <div className="text-center text-sm font-bold text-purple-300">Mod: {(score - 10) >= 0 ? '+' : ''}{Math.floor((score - 10) / 2)}</div>
                        <div className="text-center text-[10px] text-purple-400">Cost: {pointBuyCosts[score] || 0} pts</div>
                        <button onClick={() => handleRoll(() => rollSavingThrow(ability), `${abilityLabels[ability]} Save`)} className="mt-2 w-full bg-purple-800 hover:bg-purple-700 text-white text-xs py-1.5 px-3 rounded transition-all">Roll Save</button>
                      </div>
                    ))}
                  </div>
                  <div className={`mt-4 p-4 rounded-lg border-2 ${pointBuyValid ? 'bg-green-900/30 border-green-600' : 'bg-red-900/30 border-red-600'}`}>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-xl">Points Remaining</span>
                      <span className={`text-3xl font-bold ${pointBuyValid ? 'text-green-400' : 'text-red-400'}`}>{pointBuyTotal - pointBuyCost} / {pointBuyTotal}</span>
                    </div>
                    <div className="w-full bg-black rounded-full h-3 mt-2">
                      <div className={`h-3 rounded-full transition-all ${pointBuyValid ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: `${100 - pointBuyPercent}%` }}></div>
                    </div>
                  </div>
                </div>
              )}

              {currentStatTab === 'roll' && (
                <div className="bg-neutral-900 border border-purple-800 rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-4 text-purple-300">🎲 Roll Stats (4d6 drop lowest)</h3>
                  <p className="text-purple-400 text-sm mb-4">Roll 4 six-sided dice, drop the lowest, sum the remaining 3.</p>
                  <button onClick={() => handleRoll(rollAbilityScores, 'Ability Scores')} className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg mb-4">🎲 Roll New Stats</button>
                  {rollBreakdowns && Object.keys(rollBreakdowns).length > 0 && (
                    <div className="space-y-3 mb-4">
                      <h4 className="text-sm font-bold text-purple-300">Roll Breakdown:</h4>
                      {Object.entries(rollBreakdowns).map(([ability, breakdown]) => (
                        <div key={ability} className="bg-black p-3 rounded-lg border border-purple-800">
                          <div className="flex justify-between items-center">
                            <span className="text-white font-bold uppercase text-sm">{abilityLabels[ability] || ability}</span>
                            <span className="text-xl font-bold text-purple-300">{character.abilities[ability]}</span>
                          </div>
                          <div className="text-xs text-purple-400 mt-1 font-mono">{breakdown}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(character.abilities).map(([ability, score]) => (
                      <div key={ability} className="bg-black p-3 rounded-lg border border-purple-800">
                        <label className="block text-xs font-medium mb-1 uppercase text-purple-400">{abilityLabels[ability] || ability}</label>
                        <input type="number" min="1" max="20" value={score} onChange={(e) => updateAbility(ability, e.target.value)} className="w-full bg-neutral-950 border-2 border-purple-800 rounded-lg px-3 py-2 text-white text-center text-xl font-bold mb-1 focus:outline-none focus:border-purple-500 transition-all" />
                        <div className="text-center text-sm font-bold text-purple-300">Mod: {(score - 10) >= 0 ? '+' : ''}{Math.floor((score - 10) / 2)}</div>
                        {rollBreakdowns[ability] && (<div className="text-[10px] text-purple-400 mt-1 font-mono truncate" title={rollBreakdowns[ability]}>{rollBreakdowns[ability]}</div>)}
                        <button onClick={() => handleRoll(() => rollSavingThrow(ability), `${abilityLabels[ability]} Save`)} className="mt-2 w-full bg-purple-800 hover:bg-purple-700 text-white text-xs py-1.5 px-3 rounded transition-all">Roll Save</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SKILLS (unchanged) */}
          {activeTab === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-300">Skills & Proficiencies</h2>
              
              {character.class && (
                <div className="bg-neutral-900 border border-purple-800 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-purple-300">Skill Proficiencies</span>
                      <p className="text-xs text-purple-400 mt-1">
                        {classSkillProficiencies[character.class]?.from.includes('any') 
                          ? 'Choose any skills' 
                          : `Choose from ${classSkillProficiencies[character.class]?.from.length} available skills`}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-white">
                        {character.skillProficiencies?.length || 0} / {classSkillProficiencies[character.class]?.count || 0}
                      </span>
                      <p className="text-xs text-purple-400">Selected</p>
                    </div>
                  </div>
                  <div className="w-full bg-black rounded-full h-3">
                    <div 
                      className="bg-purple-600 h-3 rounded-full transition-all"
                      style={{ width: `${((character.skillProficiencies?.length || 0) / (classSkillProficiencies[character.class]?.count || 1)) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              {Object.entries(skillsByAbility).map(([ability, skillKeys]) => (
                <div key={ability} className="bg-neutral-900 border border-purple-800 rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-3 text-purple-300 capitalize flex items-center gap-2">
                    {abilityLabels[ability]} 
                    <span className="text-sm text-purple-400">
                      ({(character.modifiers?.[ability] || 0) >= 0 ? '+' : ''}{character.modifiers?.[ability] || 0})
                    </span>
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {skillKeys.map(skillKey => {
                      const skill = skills[skillKey]
                      const isProficient = character.skillProficiencies?.includes(skillKey)
                      const modifier = getSkillModifier(skillKey)
                      const classSkills = character.class ? classSkillProficiencies[character.class] : null
                      const canSelect = !classSkills || classSkills.from.includes(skillKey) || classSkills.from.includes('any')
                      const atMax = (character.skillProficiencies?.length || 0) >= (classSkills?.count || 0)
                      
                      return (
                        <button
                          key={skillKey}
                          onClick={() => {
                            if (canSelect || isProficient) {
                              toggleSkillProficiency(skillKey)
                            }
                          }}
                          disabled={!canSelect && !isProficient}
                          className={`p-3 rounded-lg border transition-all text-left ${
                            isProficient
                              ? 'bg-purple-900/50 border-purple-500 shadow-lg shadow-purple-600/20'
                              : !canSelect
                              ? 'bg-neutral-950 border-neutral-800 opacity-50 cursor-not-allowed'
                              : 'bg-black border-purple-800 hover:border-purple-600 hover:bg-neutral-900'
                          }`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-white font-semibold">{skill.name}</span>
                            <span className={`text-lg font-bold ${isProficient ? 'text-purple-400' : 'text-purple-300'}`}>
                              {modifier >= 0 ? '+' : ''}{modifier}
                            </span>
                          </div>
                          <div className="text-xs text-purple-400">{skill.description}</div>
                          {isProficient && <div className="text-xs text-purple-500 mt-1 flex items-center gap-1">✓ Proficient (+{character.proficiencyBonus || 2})</div>}
                          {!canSelect && !isProficient && <div className="text-xs text-neutral-500 mt-1">Not available for {character.class}</div>}
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleRoll(() => rollSkillCheck(skillKey), `${skill.name} Check`)
                            }}
                            className="mt-2 w-full bg-purple-800 hover:bg-purple-700 text-white text-xs py-1.5 px-3 rounded transition-all"
                          >
                            🎲 Roll Check
                          </button>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: DETAILS (was WHAT YOU BUILT OF?) */}
          {activeTab === 4 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-300">Character Details</h2>
              <div className="bg-neutral-900 border border-purple-800 rounded-xl p-4 space-y-3">
                {['personalityTraits','ideals','bonds','flaws','backstory'].map(field => (
                  <div key={field}>
                    <label className="block text-xs font-medium mb-1.5 text-purple-300 capitalize">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
                    <textarea value={character[field] || ''} onChange={(e) => updateCharacter(field, e.target.value)} className="w-full bg-black border-2 border-purple-800 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition-all min-h-[80px]" placeholder={`Enter ${field}...`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: EXPORT (was WHAT YA SHARE?) */}
          {activeTab === 5 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-300">Export Character</h2>
              <div className="bg-neutral-900 border border-purple-800 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-purple-300">Download Your Character</h3>
                <p className="text-purple-300 mb-4 text-sm">Export your character as a JSON file to share or backup</p>
                <button onClick={() => { const dataStr = JSON.stringify(character, null, 2); const dataBlob = new Blob([dataStr], { type: 'application/json' }); const url = URL.createObjectURL(dataBlob); const link = document.createElement('a'); link.href = url; link.download = `${character.name.replace(/\s+/g, '_')}_character.json`; link.click(); }} className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg">📥 Download JSON</button>
              </div>
            </div>
          )}

          {/* TAB 6: CUSTOM (was WHAT YA MAKE?) */}
          {activeTab === 6 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-300">Custom Content</h2>
              <div className="bg-neutral-900 border border-purple-800 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-purple-300">Homebrew Creator</h3>
                <p className="text-purple-300 mb-4 text-sm">Create custom races, classes, and items</p>
                <div className="grid md:grid-cols-2 gap-3 max-w-md mx-auto">
                  {['Race','Class','Background','Item'].map(item => (
                    <button key={item} className="bg-purple-800 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all border border-purple-600 text-sm">Create {item}</button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App