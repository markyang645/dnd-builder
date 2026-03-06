import React, { useState } from 'react'
import { useCharacterStore } from './state/store'
import { raceData, appearanceOptions, inchesToFeetInches } from './data/raceData'
import { abilityLabels, skills, backgroundSkills, classSavingThrows, classHitDice } from './data/dndRules'
import { formatRoll } from './lib/dice'

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [showStatOptions, setShowStatOptions] = useState(false)
  const [showRollHistory, setShowRollHistory] = useState(false)
  const [lastRoll, setLastRoll] = useState(null)
  
  const { 
    character, 
    createCharacter, 
    updateCharacter, 
    updateAbility,
    setStatMethod,
    getPointBuyCost,
    validatePointBuy,
    rollAbilityScores,
    rollInitiative,
    rollSkillCheck,
    rollSavingThrow,
    rollAttack,
    rollDamage,
    rollDeathSave,
    rollLevelUpHP,
    rollHistory,
    clearRollHistory,
  } = useCharacterStore()

  const tabs = [
    { name: 'WHO YOU ARE?', icon: '👤', color: 'bg-tab-purple', friend: 'Mark/Star/Dante' },
    { name: 'WHAT YOU DO?', icon: '⚔️', color: 'bg-tab-blood', friend: 'Zefhyr' },
    { name: 'WHAT YOU GOT?', icon: '🎒', color: 'bg-tab-gold', friend: 'Kris/Sunny' },
    { name: 'WHAT YOU BUILT OF?', icon: '📖', color: 'bg-tab-green', friend: 'Ej/Neptune' },
    { name: 'WHAT YA SHARE?', icon: '📤', color: 'bg-tab-sky', friend: 'Zero' },
    { name: 'WHAT YA MAKE?', icon: '🛠️', color: 'bg-tab-orange', friend: 'Armando' },
  ]

  const currentRace = raceData[character?.race] || raceData.human
  const ageValue = character?.age || currentRace.ageRange.min
  const heightValue = character?.height || currentRace.heightRange.min
  const weightValue = character?.weight || currentRace.weightRange.min

  const pointBuyCost = character ? getPointBuyCost(character.abilities) : 0
  const pointBuyValid = character ? validatePointBuy(character.abilities) : true

  // Handle roll and display result
  const handleRoll = (rollFn, label) => {
    const result = rollFn()
    setLastRoll({ label, result, timestamp: Date.now() })
  }

  if (!character) {
    return (
      <div className="min-h-screen bg-friend-gradient flex items-center justify-center p-4">
        <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-8 max-w-md w-full text-center shadow-xl">
          <h1 className="text-4xl font-bold mb-6 text-white">🎲 D&D Builder</h1>
          <p className="text-dark-purple-300 mb-8">Create your next legendary character</p>
          <button
            onClick={() => createCharacter('New Character', 'standard')}
            className="w-full bg-dark-purple-600 hover:bg-dark-purple-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg text-lg mb-4"
          >
            + Create New Character
          </button>
          <p className="text-dark-purple-400 text-sm">
            Uses Standard Array (15, 14, 13, 12, 10, 8)
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-purple-950">
      {/* Header */}
      <header className="bg-dark-purple-900 border-b border-dark-purple-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-white">🎲 D&D Character Builder</h1>
              <p className="text-dark-purple-300 text-sm">
                {character.name} • Level {character.level} {character.race ? character.race.charAt(0).toUpperCase() + character.race.slice(1) : ''} {character.class ? character.class.charAt(0).toUpperCase() + character.class.slice(1) : ''}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowRollHistory(!showRollHistory)}
                className="bg-dark-purple-800 hover:bg-dark-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 border border-dark-purple-600"
                title="View Roll History"
              >
                📜 {rollHistory?.length || 0}
              </button>
              <button
                onClick={() => setShowStatOptions(!showStatOptions)}
                className="bg-dark-purple-800 hover:bg-dark-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 border border-dark-purple-600"
              >
                📊 Stats
              </button>
              <button
                onClick={() => createCharacter('New Character', 'standard')}
                className="bg-dark-purple-800 hover:bg-dark-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 border border-dark-purple-600"
              >
                + New
              </button>
            </div>
          </div>

          {/* Stat Generation Options Panel */}
          {showStatOptions && (
            <div className="bg-dark-purple-950 border border-dark-purple-700 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-bold text-white mb-3">Ability Score Generation</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <button
                  onClick={() => setStatMethod('standard')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    character.statMethod === 'standard'
                      ? 'bg-dark-purple-600 border-white text-white'
                      : 'bg-dark-purple-900 border-dark-purple-700 text-dark-purple-300 hover:border-dark-purple-500'
                  }`}
                >
                  <div className="font-bold">Standard Array</div>
                  <div className="text-sm opacity-80">15, 14, 13, 12, 10, 8</div>
                </button>
                <button
                  onClick={() => setStatMethod('pointbuy')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    character.statMethod === 'pointbuy'
                      ? 'bg-dark-purple-600 border-white text-white'
                      : 'bg-dark-purple-900 border-dark-purple-700 text-dark-purple-300 hover:border-dark-purple-500'
                  }`}
                >
                  <div className="font-bold">Point Buy</div>
                  <div className="text-sm opacity-80">27 points to spend</div>
                </button>
                <button
                  onClick={() => setStatMethod('roll')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    character.statMethod === 'roll'
                      ? 'bg-dark-purple-600 border-white text-white'
                      : 'bg-dark-purple-900 border-dark-purple-700 text-dark-purple-300 hover:border-dark-purple-500'
                  }`}
                >
                  <div className="font-bold">Roll 4d6</div>
                  <div className="text-sm opacity-80">Drop lowest die</div>
                </button>
              </div>
              <button
                onClick={() => handleRoll(rollAbilityScores, 'Ability Scores')}
                className="mt-4 w-full bg-dark-purple-600 hover:bg-dark-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
              >
                🎲 Roll New Ability Scores (4d6 drop lowest)
              </button>
            </div>
          )}

          {/* Roll History Panel */}
          {showRollHistory && (
            <div className="bg-dark-purple-950 border border-dark-purple-700 rounded-lg p-4 mb-4 max-h-64 overflow-y-auto">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-white">📜 Roll History</h3>
                <button
                  onClick={clearRollHistory}
                  className="text-dark-purple-400 hover:text-white text-sm"
                >
                  Clear All
                </button>
              </div>
              {rollHistory?.length === 0 ? (
                <p className="text-dark-purple-400 text-sm">No rolls yet. Start rolling!</p>
              ) : (
                <div className="space-y-2">
                  {rollHistory.slice(-10).reverse().map((roll, i) => (
                    <div key={i} className="bg-dark-purple-900 p-2 rounded text-sm text-white">
                      <span className="text-dark-purple-400">[{new Date(roll.timestamp).toLocaleTimeString()}]</span>
                      {' '}{roll.type}: {roll.result}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Last Roll Display */}
          {lastRoll && (
            <div className="bg-dark-purple-950 border border-dark-purple-700 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-dark-purple-400 text-sm">{lastRoll.label}</span>
                  <div className="text-2xl font-bold text-white">{lastRoll.result?.total || lastRoll.result}</div>
                </div>
                <button
                  onClick={() => setLastRoll(null)}
                  className="text-dark-purple-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Tab Navigation */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(index)}
                className={`py-3 px-2 rounded-lg font-semibold transition-all duration-200 text-xs md:text-sm border-2 ${
                  activeTab === index
                    ? `${tab.color} text-white font-bold shadow-lg border-white/30`
                    : 'bg-dark-purple-900/50 text-dark-purple-300 hover:bg-dark-purple-800 hover:text-white border-dark-purple-700'
                }`}
                title={tab.friend}
              >
                <span className="block text-lg mb-1">{tab.icon}</span>
                <span className="hidden md:inline">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Character Stats Summary Panel */}
        <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-6 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-4">📊 Character Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="bg-dark-purple-950 p-4 rounded-lg border border-dark-purple-700 text-center">
              <div className="text-dark-purple-400 text-sm">Hit Points</div>
              <div className="text-3xl font-bold text-white">{character.hitPoints || 0}</div>
              <button
                onClick={() => handleRoll(rollLevelUpHP, 'Level Up HP')}
                className="text-xs text-dark-purple-400 hover:text-white mt-1"
              >
                + Roll HP
              </button>
            </div>
            <div className="bg-dark-purple-950 p-4 rounded-lg border border-dark-purple-700 text-center">
              <div className="text-dark-purple-400 text-sm">Armor Class</div>
              <div className="text-3xl font-bold text-white">{character.armorClass || 10}</div>
            </div>
            <div className="bg-dark-purple-950 p-4 rounded-lg border border-dark-purple-700 text-center">
              <div className="text-dark-purple-400 text-sm">Initiative</div>
              <div className="text-3xl font-bold text-white">
                {character.initiative >= 0 ? '+' : ''}{character.initiative || 0}
              </div>
              <button
                onClick={() => handleRoll(rollInitiative, 'Initiative')}
                className="text-xs text-dark-purple-400 hover:text-white mt-1"
              >
                🎲 Roll
              </button>
            </div>
            <div className="bg-dark-purple-950 p-4 rounded-lg border border-dark-purple-700 text-center">
              <div className="text-dark-purple-400 text-sm">Speed</div>
              <div className="text-3xl font-bold text-white">{character.speed || 30}ft</div>
            </div>
            <div className="bg-dark-purple-950 p-4 rounded-lg border border-dark-purple-700 text-center">
              <div className="text-dark-purple-400 text-sm">Proficiency</div>
              <div className="text-3xl font-bold text-white">+{character.proficiencyBonus || 2}</div>
            </div>
            <div className="bg-dark-purple-950 p-4 rounded-lg border border-dark-purple-700 text-center">
              <div className="text-dark-purple-400 text-sm">Passive Perception</div>
              <div className="text-3xl font-bold text-white">{10 + (character.modifiers?.wis || 0)}</div>
            </div>
            <div className="bg-dark-purple-950 p-4 rounded-lg border border-dark-purple-700 text-center">
              <div className="text-dark-purple-400 text-sm">Level</div>
              <div className="text-3xl font-bold text-white">{character.level || 1}</div>
            </div>
          </div>
        </div>

        {/* TAB 1: WHO YOU ARE? */}
        {activeTab === 0 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-dark-purple-300 mb-6">Who You Are?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-dark-purple-300">Race & Identity</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-purple-300">Race</label>
                    <select
                      value={character.race}
                      onChange={(e) => updateCharacter('race', e.target.value)}
                      className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all"
                    >
                      <option value="">Select Race...</option>
                      {Object.entries(raceData).map(([key, data]) => (
                        <option key={key} value={key}>{data.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-purple-300">Alignment</label>
                    <select
                      value={character.alignment}
                      onChange={(e) => updateCharacter('alignment', e.target.value)}
                      className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all"
                    >
                      <option value="">Select Alignment...</option>
                      <option value="lawful-good">Lawful Good</option>
                      <option value="neutral-good">Neutral Good</option>
                      <option value="chaotic-good">Chaotic Good</option>
                      <option value="lawful-neutral">Lawful Neutral</option>
                      <option value="true-neutral">True Neutral</option>
                      <option value="chaotic-neutral">Chaotic Neutral</option>
                      <option value="lawful-evil">Lawful Evil</option>
                      <option value="neutral-evil">Neutral Evil</option>
                      <option value="chaotic-evil">Chaotic Evil</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-dark-purple-300">Physical Description</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-purple-300">Age: <span className="text-dark-purple-400">{ageValue} years</span></label>
                    <input type="range" min={currentRace.ageRange.min} max={currentRace.ageRange.max} value={ageValue}
                      onChange={(e) => updateCharacter('age', parseInt(e.target.value))}
                      className="w-full h-2 bg-dark-purple-950 rounded-lg appearance-none cursor-pointer accent-dark-purple-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-purple-300">Height: <span className="text-dark-purple-400">{inchesToFeetInches(heightValue)}</span></label>
                    <input type="range" min={currentRace.heightRange.min} max={currentRace.heightRange.max} value={heightValue}
                      onChange={(e) => updateCharacter('height', parseInt(e.target.value))}
                      className="w-full h-2 bg-dark-purple-950 rounded-lg appearance-none cursor-pointer accent-dark-purple-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-purple-300">Weight: <span className="text-dark-purple-400">{weightValue} lbs</span></label>
                    <input type="range" min={currentRace.weightRange.min} max={currentRace.weightRange.max} value={weightValue}
                      onChange={(e) => updateCharacter('weight', parseInt(e.target.value))}
                      className="w-full h-2 bg-dark-purple-950 rounded-lg appearance-none cursor-pointer accent-dark-purple-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-purple-300">Gender</label>
                    <input type="text" value={character.gender || ''} onChange={(e) => updateCharacter('gender', e.target.value)}
                      className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all"
                      placeholder="e.g., Male, Female, Non-binary" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-dark-purple-300">Appearance Details</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-purple-300">Eye Color</label>
                  <select value={character.eyes || ''} onChange={(e) => updateCharacter('eyes', e.target.value)}
                    className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all">
                    <option value="">Select...</option>
                    {appearanceOptions.eyeColors.map(color => (<option key={color} value={color}>{color}</option>))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-purple-300">Hair Color</label>
                  <select value={character.hair || ''} onChange={(e) => updateCharacter('hair', e.target.value)}
                    className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all">
                    <option value="">Select...</option>
                    {appearanceOptions.hairColors.map(color => (<option key={color} value={color}>{color}</option>))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-purple-300">Hair Style</label>
                  <select value={character.hairStyle || ''} onChange={(e) => updateCharacter('hairStyle', e.target.value)}
                    className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all">
                    <option value="">Select...</option>
                    {appearanceOptions.hairStyles.map(style => (<option key={style} value={style}>{style}</option>))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-purple-300">Skin Tone</label>
                  <select value={character.skin || ''} onChange={(e) => updateCharacter('skin', e.target.value)}
                    className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all">
                    <option value="">Select...</option>
                    {appearanceOptions.skinTones.map(tone => (<option key={tone} value={tone}>{tone}</option>))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-purple-300">Favorite Color</label>
                  <select value={character.favoriteColor || ''} onChange={(e) => updateCharacter('favoriteColor', e.target.value)}
                    className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all">
                    <option value="">Select...</option>
                    <option value="teal">Teal (Andromeda)</option>
                    <option value="orange">Orange (Armando)</option>
                    <option value="vantablack">Vantablack (Clyde)</option>
                    <option value="periwinkle">Periwinkle (Comet)</option>
                    <option value="purple">Purple (Mark/Star/Dante)</option>
                    <option value="green">Green (Ej/Neptune)</option>
                    <option value="yellow">Yellow (Gubby)</option>
                    <option value="gold">Gold (Kris/Sunny)</option>
                    <option value="sky-blue">Sky Blue (Zero)</option>
                    <option value="galaxy-blue">Galaxy Blue (Zero)</option>
                    <option value="blood-red">Blood Red (Zefhyr)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: WHAT YOU DO? */}
        {activeTab === 1 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-dark-purple-300 mb-6">What You Do?</h2>
            <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-6 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-purple-300">Class</label>
                  <select value={character.class} onChange={(e) => updateCharacter('class', e.target.value)}
                    className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all">
                    <option value="">Select Class...</option>
                    <option value="barbarian">Barbarian</option>
                    <option value="bard">Bard</option>
                    <option value="cleric">Cleric</option>
                    <option value="druid">Druid</option>
                    <option value="fighter">Fighter</option>
                    <option value="monk">Monk</option>
                    <option value="paladin">Paladin</option>
                    <option value="ranger">Ranger</option>
                    <option value="rogue">Rogue</option>
                    <option value="sorcerer">Sorcerer</option>
                    <option value="warlock">Warlock</option>
                    <option value="wizard">Wizard</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-purple-300">Level</label>
                  <input type="number" min="1" max="20" value={character.level}
                    onChange={(e) => updateCharacter('level', parseInt(e.target.value) || 1)}
                    className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-purple-300">Background</label>
                  <select value={character.background} onChange={(e) => updateCharacter('background', e.target.value)}
                    className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all">
                    <option value="">Select Background...</option>
                    <option value="acolyte">Acolyte</option>
                    <option value="charlatan">Charlatan</option>
                    <option value="criminal">Criminal</option>
                    <option value="entertainer">Entertainer</option>
                    <option value="folk-hero">Folk Hero</option>
                    <option value="guild-artisan">Guild Artisan</option>
                    <option value="hermit">Hermit</option>
                    <option value="noble">Noble</option>
                    <option value="outlander">Outlander</option>
                    <option value="sage">Sage</option>
                    <option value="sailor">Sailor</option>
                    <option value="soldier">Soldier</option>
                    <option value="urchin">Urchin</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: WHAT YOU GOT? */}
        {activeTab === 2 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-dark-purple-300 mb-6">What You Got?</h2>
            
            {/* Ability Scores with Roll Buttons */}
            <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-dark-purple-300">Ability Scores</h3>
              {character.statMethod === 'pointbuy' && (
                <div className={`mb-4 p-4 rounded-lg ${pointBuyValid ? 'bg-green-900/50 border border-green-700' : 'bg-red-900/50 border border-red-700'}`}>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Point Buy Cost: {pointBuyCost} / 27</span>
                    <span className={pointBuyValid ? 'text-green-400' : 'text-red-400'}>{pointBuyValid ? '✅ Valid' : '❌ Over budget'}</span>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(character.abilities).map(([ability, score]) => (
                  <div key={ability} className="bg-dark-purple-950 p-4 rounded-lg border border-dark-purple-700">
                    <label className="block text-sm font-medium mb-2 uppercase text-dark-purple-400">{abilityLabels[ability] || ability}</label>
                    <input type="number" min="1" max="20" value={score}
                      onChange={(e) => updateAbility(ability, e.target.value)}
                      className="w-full bg-dark-purple-900 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white text-center text-2xl font-bold mb-2 focus:outline-none focus:border-dark-purple-500 transition-all" />
                    <div className="text-center text-lg font-bold text-dark-purple-300">
                      Modifier: {(score - 10) >= 0 ? '+' : ''}{Math.floor((score - 10) / 2)}
                    </div>
                    {character.modifiers && character.modifiers[ability] !== Math.floor((score - 10) / 2) && (
                      <div className="text-center text-sm text-dark-purple-400 mt-1">
                        With racial ASI: {character.modifiers[ability] >= 0 ? '+' : ''}{character.modifiers[ability]}
                      </div>
                    )}
                    <button
                      onClick={() => handleRoll(() => rollSavingThrow(ability), `${abilityLabels[ability]} Save`)}
                      className="mt-2 w-full bg-dark-purple-800 hover:bg-dark-purple-700 text-white text-sm py-2 px-4 rounded transition-all"
                    >
                       Roll Save
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Saving Throws */}
            <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-dark-purple-300">Saving Throws</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(character.savingThrows || {}).map(([ability, value]) => (
                  <div key={ability} className="bg-dark-purple-950 p-3 rounded-lg border border-dark-purple-700 flex justify-between items-center">
                    <span className="text-dark-purple-300 capitalize">{abilityLabels[ability] || ability}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-white">{value >= 0 ? '+' : ''}{value}</span>
                      <button
                        onClick={() => handleRoll(() => rollSavingThrow(ability), `${abilityLabels[ability]} Save`)}
                        className="text-dark-purple-400 hover:text-white text-xs"
                      >
                        🎲
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: WHAT YOU BUILT OF? */}
        {activeTab === 3 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-dark-purple-300 mb-6">What You Built Of?</h2>
            <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-6 shadow-xl space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-dark-purple-300">Personality Traits</label>
                <textarea value={character.personalityTraits || ''} onChange={(e) => updateCharacter('personalityTraits', e.target.value)}
                  className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all min-h-[100px]"
                  placeholder="Describe your personality..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-dark-purple-300">Ideals</label>
                <textarea value={character.ideals || ''} onChange={(e) => updateCharacter('ideals', e.target.value)}
                  className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all min-h-[100px]"
                  placeholder="What do you believe in?" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-dark-purple-300">Bonds</label>
                <textarea value={character.bonds || ''} onChange={(e) => updateCharacter('bonds', e.target.value)}
                  className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all min-h-[100px]"
                  placeholder="What ties you to the world?" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-dark-purple-300">Flaws</label>
                <textarea value={character.flaws || ''} onChange={(e) => updateCharacter('flaws', e.target.value)}
                  className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all min-h-[100px]"
                  placeholder="What are your weaknesses?" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-dark-purple-300">Backstory</label>
                <textarea value={character.backstory || ''} onChange={(e) => updateCharacter('backstory', e.target.value)}
                  className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dark-purple-500 transition-all min-h-[200px]"
                  placeholder="Tell your story..." />
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: WHAT YA SHARE? */}
        {activeTab === 4 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-dark-purple-300 mb-6">What Ya Share?</h2>
            <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-6 shadow-xl text-center">
              <h3 className="text-xl font-bold mb-4 text-dark-purple-300">Export Character</h3>
              <p className="text-dark-purple-300 mb-6">Download your character as a JSON file to share with your DM or friends</p>
              <button
                onClick={() => {
                  const dataStr = JSON.stringify(character, null, 2)
                  const dataBlob = new Blob([dataStr], { type: 'application/json' })
                  const url = URL.createObjectURL(dataBlob)
                  const link = document.createElement('a')
                  link.href = url
                  link.download = `${character.name.replace(/\s+/g, '_')}_character.json`
                  link.click()
                }}
                className="bg-dark-purple-600 hover:bg-dark-purple-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg text-lg"
              >
                📥 Download Character
              </button>
            </div>
          </div>
        )}

        {/* TAB 6: WHAT YA MAKE? */}
        {activeTab === 5 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-dark-purple-300 mb-6">What Ya Make?</h2>
            <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-6 shadow-xl text-center">
              <h3 className="text-xl font-bold mb-4 text-dark-purple-300">Custom Content Creator</h3>
              <p className="text-dark-purple-300 mb-6">Create custom races, classes, items, and more for your campaign</p>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <button className="bg-dark-purple-800 hover:bg-dark-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-dark-purple-600">
                  Create Custom Race
                </button>
                <button className="bg-dark-purple-800 hover:bg-dark-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-dark-purple-600">
                  Create Custom Class
                </button>
                <button className="bg-dark-purple-800 hover:bg-dark-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-dark-purple-600">
                  Create Custom Background
                </button>
                <button className="bg-dark-purple-800 hover:bg-dark-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-dark-purple-600">
                  Create Custom Item
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App