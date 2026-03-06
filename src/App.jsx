import React, { useState } from 'react'
import { useCharacterStore } from './state/store'
import { raceData, appearanceOptions, inchesToFeetInches } from './data/raceData'
import { abilityLabels, asiLevels, pointBuyCosts, pointBuyTotal, standardArray } from './data/dndRules'

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
    rollHistory,
    clearRollHistory,
    validationErrors,
    clearValidationErrors,
  } = useCharacterStore()

  const tabs = [
    { name: 'WHO YOU ARE?', icon: '👤', color: 'bg-tab-purple', friend: 'Mark/Star/Dante' },
    { name: 'WHAT YOU DO?', icon: '⚔️', color: 'bg-tab-blood', friend: 'Zefhyr' },
    { name: 'WHAT YOU GOT?', icon: '🎒', color: 'bg-tab-gold', friend: 'Kris/Sunny' },
    { name: 'WHAT YOU BUILT OF?', icon: '📖', color: 'bg-tab-green', friend: 'Ej/Neptune' },
    { name: 'WHAT YA SHARE?', icon: '📤', color: 'bg-tab-sky', friend: 'Zero' },
    { name: 'WHAT YA MAKE?', icon: '🛠️', color: 'bg-tab-orange', friend: 'Armando' },
  ]

  const statTabs = [
    { id: 'standard', name: 'Standard Array', icon: '📋' },
    { id: 'pointbuy', name: 'Point Buy', icon: '💰' },
    { id: 'roll', name: 'Roll Stats', icon: '🎲' },
  ]

  const currentRace = raceData[character?.race] || raceData.human
  const ageValue = character?.age || currentRace.ageRange.min
  const heightValue = character?.height || currentRace.heightRange.min
  const weightValue = character?.weight || currentRace.weightRange.min
  const pointBuyCost = character ? getPointBuyCost(character.abilities) : 0
  const pointBuyValid = character ? validatePointBuy(character.abilities) : true

  const handleRoll = (rollFn, label) => {
    const result = rollFn()
    setLastRoll({ label, result, timestamp: Date.now() })
    return result
  }

  if (!character) {
    return (
      <div className="min-h-screen bg-friend-gradient flex items-center justify-center p-4">
        <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-8 max-w-md w-full text-center shadow-xl">
          <h1 className="text-4xl font-bold mb-6 text-white">🎲 D&D Builder</h1>
          <p className="text-dark-purple-300 mb-8">Create your next legendary character</p>
          <button
            onClick={() => createCharacter('New Character', 'pointbuy')}
            className="w-full bg-dark-purple-600 hover:bg-dark-purple-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg text-lg mb-4"
          >
            + Create New Character
          </button>
          <p className="text-dark-purple-400 text-sm">Starts with Point Buy method</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-purple-950 flex">
      {/* Sidebar - Stats Panel */}
      <aside className={`fixed left-0 top-0 h-full bg-dark-purple-900/90 backdrop-blur-sm border-r border-dark-purple-700 z-40 transition-all duration-300 ${sidebarOpen ? 'w-72' : 'w-0'} overflow-hidden`}>
        <div className="p-4 h-full overflow-y-auto">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute -right-3 top-4 bg-dark-purple-700 hover:bg-dark-purple-600 text-white rounded-full p-1 border border-dark-purple-500"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>

          <div className="mb-4 pb-4 border-b border-dark-purple-700">
            <h2 className="text-lg font-bold text-white">{character.name}</h2>
            <p className="text-xs text-dark-purple-300">
              Lv.{character.level} {character.race ? character.race.charAt(0).toUpperCase() + character.race.slice(1) : ''} {character.class ? character.class.charAt(0).toUpperCase() + character.class.slice(1) : ''}
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-dark-purple-950 p-2 rounded border border-dark-purple-700">
              <div className="text-dark-purple-400">HP</div>
              <div className="text-xl font-bold text-white">{character.hitPoints || 0}</div>
              {character.hpHistory?.length > 0 && (
                <div className="mt-1 text-[10px] text-dark-purple-400 max-h-20 overflow-y-auto">
                  {character.hpHistory.map((hp, i) => (
                    <div key={i} className="flex justify-between">
                      <span>Lv.{hp.level}</span><span>+{hp.gain}</span>
                    </div>
                  ))}
                </div>
              )}
              {character.level < 20 && (
                <button onClick={() => { const r = handleRoll(rollLevelUpHP, `Level ${character.level + 1} HP`); if (r && !r.error) alert(`🎉 +${r.gain} HP`); }} className="mt-1 text-[10px] text-dark-purple-400 hover:text-white">+ Roll HP</button>
              )}
            </div>
            <div className="bg-dark-purple-950 p-2 rounded border border-dark-purple-700"><div className="text-dark-purple-400">AC</div><div className="text-xl font-bold text-white">{character.armorClass || 10}</div></div>
            <div className="bg-dark-purple-950 p-2 rounded border border-dark-purple-700"><div className="text-dark-purple-400">Initiative</div><div className="text-xl font-bold text-white">{character.initiative >= 0 ? '+' : ''}{character.initiative || 0}</div><button onClick={() => handleRoll(rollInitiative, 'Initiative')} className="text-[10px] text-dark-purple-400 hover:text-white">🎲 Roll</button></div>
            <div className="bg-dark-purple-950 p-2 rounded border border-dark-purple-700"><div className="text-dark-purple-400">Speed</div><div className="text-xl font-bold text-white">{character.speed || 30}ft</div></div>
            <div className="bg-dark-purple-950 p-2 rounded border border-dark-purple-700"><div className="text-dark-purple-400">Proficiency</div><div className="text-xl font-bold text-white">+{character.proficiencyBonus || 2}</div></div>
            <div className="bg-dark-purple-950 p-2 rounded border border-dark-purple-700"><div className="text-dark-purple-400">Passive Perception</div><div className="text-xl font-bold text-white">{10 + (character.modifiers?.wis || 0)}</div></div>
            <div className="mt-4 pt-4 border-t border-dark-purple-700 space-y-2">
              <div className="bg-dark-purple-950 p-2 rounded border border-dark-purple-700"><div className="text-dark-purple-400 text-[10px]">Spell Save DC</div><div className="text-lg font-bold text-white">{character.spellSaveDC || 0}</div></div>
              <div className="bg-dark-purple-950 p-2 rounded border border-dark-purple-700"><div className="text-dark-purple-400 text-[10px]">Attack Bonus</div><div className="text-lg font-bold text-white">+{character.attackBonus || 0}</div></div>
              <div className="bg-dark-purple-950 p-2 rounded border border-dark-purple-700"><div className="text-dark-purple-400 text-[10px]">Carrying Capacity</div><div className="text-lg font-bold text-white">{character.carryingCapacity || 150} lbs</div></div>
              <div className="bg-dark-purple-950 p-2 rounded border border-dark-purple-700"><div className="text-dark-purple-400 text-[10px]">Push/Drag/Lift</div><div className="text-lg font-bold text-white">{character.pushDragLift || 300} lbs</div></div>
              <div className="bg-dark-purple-950 p-2 rounded border border-dark-purple-700"><div className="text-dark-purple-400 text-[10px]">ASI Available</div><div className="text-lg font-bold text-white">{character.asiAvailable || 0}</div>{character.asiAvailable > 0 && <div className="text-[10px] text-green-400 mt-1">Next: Lv.{asiLevels.find(l => l > character.level) || '—'}</div>}</div>
            </div>
            <div className="mt-4 pt-4 border-t border-dark-purple-700">
              <h3 className="text-xs font-bold text-dark-purple-300 mb-2">Abilities</h3>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(character.abilities).map(([ability, score]) => (
                  <div key={ability} className="bg-dark-purple-950 p-2 rounded border border-dark-purple-700 text-center">
                    <div className="text-[10px] text-dark-purple-400 uppercase">{ability}</div>
                    <div className="text-lg font-bold text-white">{score}</div>
                    <div className="text-[10px] text-dark-purple-300">{(score - 10) >= 0 ? '+' : ''}{Math.floor((score - 10) / 2)}</div>
                  </div>
                ))}
              </div>
            </div>
            {validationErrors?.length > 0 && (
              <div className="mt-4 p-3 bg-red-900/50 border border-red-700 rounded text-[10px] text-red-300">
                <div className="font-bold mb-1">⚠️ Errors:</div>
                {validationErrors.map((err, i) => (<div key={i}>• {err}</div>))}
                <button onClick={clearValidationErrors} className="mt-2 text-red-400 hover:text-white underline">Dismiss</button>
              </div>
            )}
            <div className="mt-4 pt-4 border-t border-dark-purple-700">
              <button onClick={() => setShowRollHistory(!showRollHistory)} className="w-full bg-dark-purple-800 hover:bg-dark-purple-700 text-white text-xs py-2 px-3 rounded transition-all">📜 Roll History ({rollHistory?.length || 0})</button>
            </div>
          </div>
        </div>
      </aside>

      {/* Roll History Panel */}
      {showRollHistory && (
        <div className="fixed right-4 top-4 w-64 bg-dark-purple-900/95 backdrop-blur-sm border border-dark-purple-700 rounded-lg p-3 z-50 max-h-96 overflow-y-auto shadow-xl">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-bold text-white">📜 Roll History</h3>
            <button onClick={() => setShowRollHistory(false)} className="text-dark-purple-400 hover:text-white">✕</button>
          </div>
          {rollHistory?.length === 0 ? <p className="text-dark-purple-400 text-xs">No rolls yet</p> : (
            <div className="space-y-1">
              {rollHistory.slice(-10).reverse().map((roll, i) => (
                <div key={i} className="bg-dark-purple-950 p-1.5 rounded text-[10px] text-white">
                  <span className="text-dark-purple-400">[{new Date(roll.timestamp).toLocaleTimeString()}]</span> {roll.type}: {roll.result}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Last Roll Toast */}
      {lastRoll && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-dark-purple-900/95 backdrop-blur-sm border border-dark-purple-700 rounded-lg p-3 z-50 shadow-xl">
          <div className="flex justify-between items-center gap-4">
            <div><span className="text-dark-purple-400 text-xs">{lastRoll.label}</span><div className="text-xl font-bold text-white">{lastRoll.result?.total || lastRoll.result?.gain || lastRoll.result}</div></div>
            <button onClick={() => setLastRoll(null)} className="text-dark-purple-400 hover:text-white">✕</button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-72' : 'ml-0'}`}>
        <header className="bg-dark-purple-900 border-b border-dark-purple-700 sticky top-0 z-30">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between mb-3">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="bg-dark-purple-800 hover:bg-dark-purple-700 text-white font-semibold py-1.5 px-3 rounded-lg transition-all duration-200 border border-dark-purple-600 text-sm">{sidebarOpen ? '◀ Hide Stats' : '▶ Show Stats'}</button>
              <div className="flex gap-2">
                <button onClick={() => createCharacter('New Character', 'pointbuy')} className="bg-dark-purple-800 hover:bg-dark-purple-700 text-white font-semibold py-1.5 px-3 rounded-lg transition-all duration-200 border border-dark-purple-600 text-sm">+ New</button>
              </div>
            </div>

            {/* Stat Method Tabs */}
            <div className="bg-dark-purple-950 border border-dark-purple-700 rounded-lg p-2 mb-3">
              <div className="flex gap-2">
                {statTabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveStatTab(tab.id)}
                    className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all text-xs border-2 ${
                      character.activeStatTab === tab.id
                        ? 'bg-dark-purple-600 border-white text-white'
                        : 'bg-dark-purple-900 border-dark-purple-700 text-dark-purple-300 hover:border-dark-purple-500'
                    }`}
                  >
                    <span className="block text-base mb-0.5">{tab.icon}</span>
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5">
              {tabs.map((tab, index) => (
                <button key={tab.name} onClick={() => setActiveTab(index)} className={`py-2 px-1 rounded-lg font-semibold transition-all duration-200 text-[10px] md:text-xs border ${activeTab === index ? `${tab.color} text-white font-bold shadow-lg border-white/30` : 'bg-dark-purple-900/50 text-dark-purple-300 hover:bg-dark-purple-800 hover:text-white border-dark-purple-700'}`} title={tab.friend}>
                  <span className="block text-base mb-0.5">{tab.icon}</span>
                  <span className="hidden md:inline">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-6">
          {/* TAB 1: WHO YOU ARE? */}
          {activeTab === 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-dark-purple-300">Who You Are?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-3 text-dark-purple-300">Race & Identity</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-dark-purple-300">Race</label>
                      <select value={character.race} onChange={(e) => updateCharacter('race', e.target.value)} className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-dark-purple-500 transition-all">
                        <option value="">Select Race...</option>
                        {Object.entries(raceData).map(([key, data]) => (<option key={key} value={key}>{data.name}</option>))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-dark-purple-300">Alignment</label>
                      <select value={character.alignment} onChange={(e) => updateCharacter('alignment', e.target.value)} className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-dark-purple-500 transition-all">
                        <option value="">Select Alignment...</option>
                        {['lawful-good','neutral-good','chaotic-good','lawful-neutral','true-neutral','chaotic-neutral','lawful-evil','neutral-evil','chaotic-evil'].map(a => (<option key={a} value={a}>{a.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</option>))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-3 text-dark-purple-300">Physical</h3>
                  <div className="space-y-3">
                    <div><label className="block text-xs font-medium mb-1.5 text-dark-purple-300">Age: <span className="text-dark-purple-400">{ageValue} yrs</span></label><input type="range" min={currentRace.ageRange.min} max={currentRace.ageRange.max} value={ageValue} onChange={(e) => updateCharacter('age', parseInt(e.target.value))} className="w-full h-2 bg-dark-purple-950 rounded-lg appearance-none cursor-pointer accent-dark-purple-500" /></div>
                    <div><label className="block text-xs font-medium mb-1.5 text-dark-purple-300">Height: <span className="text-dark-purple-400">{inchesToFeetInches(heightValue)}</span></label><input type="range" min={currentRace.heightRange.min} max={currentRace.heightRange.max} value={heightValue} onChange={(e) => updateCharacter('height', parseInt(e.target.value))} className="w-full h-2 bg-dark-purple-950 rounded-lg appearance-none cursor-pointer accent-dark-purple-500" /></div>
                    <div><label className="block text-xs font-medium mb-1.5 text-dark-purple-300">Weight: <span className="text-dark-purple-400">{weightValue} lbs</span></label><input type="range" min={currentRace.weightRange.min} max={currentRace.weightRange.max} value={weightValue} onChange={(e) => updateCharacter('weight', parseInt(e.target.value))} className="w-full h-2 bg-dark-purple-950 rounded-lg appearance-none cursor-pointer accent-dark-purple-500" /></div>
                    <div><label className="block text-xs font-medium mb-1.5 text-dark-purple-300">Gender</label><input type="text" value={character.gender || ''} onChange={(e) => updateCharacter('gender', e.target.value)} className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-dark-purple-500 transition-all" placeholder="e.g., Male, Female" /></div>
                  </div>
                </div>
              </div>
              <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-4">
                <h3 className="text-lg font-bold mb-3 text-dark-purple-300">Appearance</h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {['eyes','hair','hairStyle','skin','favoriteColor'].map(field => (
                    <div key={field}>
                      <label className="block text-xs font-medium mb-1.5 text-dark-purple-300 capitalize">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
                      <select value={character[field] || ''} onChange={(e) => updateCharacter(field, e.target.value)} className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-dark-purple-500 transition-all">
                        <option value="">Select...</option>
                        {field === 'favoriteColor' ? (<>
                          <option value="teal">Teal (Andromeda)</option><option value="orange">Orange (Armando)</option><option value="purple">Purple (Mark/Star/Dante)</option><option value="green">Green (Ej/Neptune)</option><option value="gold">Gold (Kris/Sunny)</option><option value="sky-blue">Sky Blue (Zero)</option><option value="blood-red">Blood Red (Zefhyr)</option>
                        </>) : field === 'eyes' ? appearanceOptions.eyeColors.map(c => (<option key={c} value={c}>{c}</option>)) : field === 'hair' ? appearanceOptions.hairColors.map(c => (<option key={c} value={c}>{c}</option>)) : field === 'hairStyle' ? appearanceOptions.hairStyles.map(s => (<option key={s} value={s}>{s}</option>)) : appearanceOptions.skinTones.map(t => (<option key={t} value={t}>{t}</option>))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: WHAT YOU DO? */}
          {activeTab === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-dark-purple-300">What You Do?</h2>
              <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-dark-purple-300">Class</label>
                    <select value={character.class} onChange={(e) => updateCharacter('class', e.target.value)} className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-dark-purple-500 transition-all">
                      <option value="">Select Class...</option>
                      {['barbarian','bard','cleric','druid','fighter','monk','paladin','ranger','rogue','sorcerer','warlock','wizard'].map(c => (<option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-dark-purple-300">Level</label>
                    <input type="number" min="1" max="20" value={character.level} onChange={(e) => updateCharacter('level', parseInt(e.target.value) || 1)} className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-dark-purple-500 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-dark-purple-300">Background</label>
                    <select value={character.background} onChange={(e) => updateCharacter('background', e.target.value)} className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-dark-purple-500 transition-all">
                      <option value="">Select Background...</option>
                      {['acolyte','charlatan','criminal','entertainer','folk-hero','guild-artisan','hermit','noble','outlander','sage','sailor','soldier','urchin'].map(b => (<option key={b} value={b}>{b.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</option>))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: WHAT YOU GOT? - STAT METHODS */}
          {activeTab === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-dark-purple-300">What You Got?</h2>
              
              {/* Standard Array Tab */}
              {character.activeStatTab === 'standard' && (
                <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-4 text-dark-purple-300">Standard Array</h3>
                  <p className="text-dark-purple-400 text-sm mb-4">Assign these scores to your abilities:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {standardArray.map(score => (
                      <span key={score} className="bg-dark-purple-950 px-3 py-1 rounded-lg border border-dark-purple-700 text-white font-bold">{score}</span>
                    ))}
                  </div>
                  <p className="text-xs text-dark-purple-400">Click an ability below and type a value from the array.</p>
                </div>
              )}

              {/* Point Buy Tab */}
              {character.activeStatTab === 'pointbuy' && (
                <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-4 text-dark-purple-300">Point Buy</h3>
                  <div className={`p-3 rounded-lg mb-4 ${pointBuyValid ? 'bg-green-900/50 border border-green-700' : 'bg-red-900/50 border border-red-700'}`}>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Points Spent: {pointBuyCost} / {pointBuyTotal}</span>
                      <span className={pointBuyValid ? 'text-green-400' : 'text-red-400'}>{pointBuyValid ? '✅ Valid' : '❌ Over budget'}</span>
                    </div>
                    <div className="w-full bg-dark-purple-950 rounded-full h-2 mt-2">
                      <div className={`h-2 rounded-full transition-all ${pointBuyValid ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: `${Math.min(100, (pointBuyCost / pointBuyTotal) * 100)}%` }}></div>
                    </div>
                  </div>
                  <div className="text-xs text-dark-purple-400 mb-3">
                    <span className="font-semibold">Cost Table:</span> 8=0pts, 9=1, 10=2, 11=3, 12=4, 13=5, 14=7, 15=9
                  </div>
                </div>
              )}

              {/* Roll Stats Tab */}
              {character.activeStatTab === 'roll' && (
                <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-4 text-center">
                  <h3 className="text-lg font-bold mb-4 text-dark-purple-300">Roll Stats (4d6 drop lowest)</h3>
                  <p className="text-dark-purple-400 text-sm mb-4">Roll 4 six-sided dice, drop the lowest, sum the rest. Repeat 6 times.</p>
                  <button onClick={() => handleRoll(rollAbilityScores, 'Ability Scores')} className="bg-dark-purple-600 hover:bg-dark-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg">
                    🎲 Roll New Stats
                  </button>
                  {character.abilities && (
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {Object.entries(character.abilities).map(([ability, score]) => (
                        <span key={ability} className="bg-dark-purple-950 px-3 py-1 rounded-lg border border-dark-purple-700 text-white">
                          {ability.toUpperCase()}: {score}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Ability Score Inputs (shared) */}
              <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-4">
                <h3 className="text-lg font-bold mb-4 text-dark-purple-300">Assign Scores</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(character.abilities).map(([ability, score]) => (
                    <div key={ability} className="bg-dark-purple-950 p-3 rounded-lg border border-dark-purple-700">
                      <label className="block text-xs font-medium mb-1 uppercase text-dark-purple-400">{abilityLabels[ability] || ability}</label>
                      <input 
                        type="number" 
                        min={character.activeStatTab === 'pointbuy' ? pointBuyMin : ABILITY_MIN} 
                        max={character.activeStatTab === 'pointbuy' ? pointBuyMax : ABILITY_MAX} 
                        value={score} 
                        onChange={(e) => updateAbility(ability, e.target.value)} 
                        className="w-full bg-dark-purple-900 border-2 border-dark-purple-700 rounded-lg px-3 py-2 text-white text-center text-xl font-bold mb-1 focus:outline-none focus:border-dark-purple-500 transition-all" 
                      />
                      <div className="text-center text-sm font-bold text-dark-purple-300">Mod: {(score - 10) >= 0 ? '+' : ''}{Math.floor((score - 10) / 2)}</div>
                      <button onClick={() => handleRoll(() => rollSavingThrow(ability), `${abilityLabels[ability]} Save`)} className="mt-2 w-full bg-dark-purple-800 hover:bg-dark-purple-700 text-white text-xs py-1.5 px-3 rounded transition-all">Roll Save</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: WHAT YOU BUILT OF? */}
          {activeTab === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-dark-purple-300">What You Built Of?</h2>
              <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-4 space-y-3">
                {['personalityTraits','ideals','bonds','flaws','backstory'].map(field => (
                  <div key={field}>
                    <label className="block text-xs font-medium mb-1.5 text-dark-purple-300 capitalize">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
                    <textarea value={character[field] || ''} onChange={(e) => updateCharacter(field, e.target.value)} className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-dark-purple-500 transition-all min-h-[80px]" placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').trim()}...`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: WHAT YA SHARE? */}
          {activeTab === 4 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-dark-purple-300">What Ya Share?</h2>
              <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-dark-purple-300">Export Character</h3>
                <p className="text-dark-purple-300 mb-4 text-sm">Download your character as JSON</p>
                <button onClick={() => { const dataStr = JSON.stringify(character, null, 2); const dataBlob = new Blob([dataStr], { type: 'application/json' }); const url = URL.createObjectURL(dataBlob); const link = document.createElement('a'); link.href = url; link.download = `${character.name.replace(/\s+/g, '_')}_character.json`; link.click(); }} className="bg-dark-purple-600 hover:bg-dark-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg">📥 Download</button>
              </div>
            </div>
          )}

          {/* TAB 6: WHAT YA MAKE? */}
          {activeTab === 5 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-dark-purple-300">What Ya Make?</h2>
              <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-dark-purple-300">Custom Content</h3>
                <p className="text-dark-purple-300 mb-4 text-sm">Create homebrew content</p>
                <div className="grid md:grid-cols-2 gap-3 max-w-md mx-auto">
                  {['Race','Class','Background','Item'].map(item => (
                    <button key={item} className="bg-dark-purple-800 hover:bg-dark-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all border border-dark-purple-600 text-sm">Create {item}</button>
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