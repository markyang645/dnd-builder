import React, { useState } from 'react'
import { useCharacterStore } from './state/store'

// Helper to calculate ability modifier
const getModifier = (score) => {
  const mod = Math.floor((score - 10) / 2)
  return mod >= 0 ? `+${mod}` : `${mod}`
}

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const { character, createCharacter, updateCharacter, updateAbility } = useCharacterStore()

  const tabs = [
    { name: 'WHO YOU ARE?', icon: '👤' },
    { name: 'WHAT YOU DO?', icon: '⚔️' },
    { name: 'WHAT YOU GOT?', icon: '🎒' },
    { name: 'WHAT YOU BUILT OF?', icon: '📖' },
    { name: 'WHAT YA SHARE?', icon: '📤' },
    { name: 'WHAT YA MAKE?', icon: '🛠️' },
  ]

  if (!character) {
    return (
      <div className="min-h-screen bg-dark-purple-950 flex items-center justify-center p-4">
        <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-8 max-w-md w-full text-center shadow-xl">
          <h1 className="text-4xl font-bold mb-6 text-white">🎲 D&D Builder</h1>
          <p className="text-dark-purple-300 mb-8">Create your next legendary character</p>
          <button
            onClick={() => createCharacter('New Character')}
            className="w-full bg-dark-purple-600 hover:bg-dark-purple-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg text-lg"
          >
            + Create New Character
          </button>
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
            <h1 className="text-2xl font-bold text-white">🎲 D&D Character Builder</h1>
            <button
              onClick={() => createCharacter('New Character')}
              className="bg-dark-purple-800 hover:bg-dark-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 border border-dark-purple-600"
            >
              + New
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(index)}
                className={`py-3 px-2 rounded-lg font-semibold transition-all duration-200 text-xs md:text-sm ${
                  activeTab === index
                    ? 'bg-dark-purple-600 text-white font-bold shadow-lg'
                    : 'bg-dark-purple-900/50 text-dark-purple-300 hover:bg-dark-purple-800 hover:text-white'
                }`}
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
                      className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all"
                    >
                      <option value="">Select Race...</option>
                      <option value="human">Human</option>
                      <option value="elf">Elf</option>
                      <option value="dwarf">Dwarf</option>
                      <option value="halfling">Halfling</option>
                      <option value="dragonborn">Dragonborn</option>
                      <option value="gnome">Gnome</option>
                      <option value="half-elf">Half-Elf</option>
                      <option value="half-orc">Half-Orc</option>
                      <option value="tiefling">Tiefling</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-purple-300">Alignment</label>
                    <select
                      value={character.alignment}
                      onChange={(e) => updateCharacter('alignment', e.target.value)}
                      className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all"
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
                    <label className="block text-sm font-medium mb-2 text-dark-purple-300">Age</label>
                    <input
                      type="text"
                      value={character.age}
                      onChange={(e) => updateCharacter('age', e.target.value)}
                      className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all"
                      placeholder="e.g., 25"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-purple-300">Gender</label>
                    <input
                      type="text"
                      value={character.gender}
                      onChange={(e) => updateCharacter('gender', e.target.value)}
                      className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all"
                      placeholder="e.g., Male, Female, Non-binary"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-dark-purple-300">Height</label>
                      <input
                        type="text"
                        value={character.height}
                        onChange={(e) => updateCharacter('height', e.target.value)}
                        className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all"
                        placeholder="e.g., 5'10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-dark-purple-300">Weight</label>
                      <input
                        type="text"
                        value={character.weight}
                        onChange={(e) => updateCharacter('weight', e.target.value)}
                        className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all"
                        placeholder="e.g., 150 lbs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-purple-300">Eyes</label>
                    <input
                      type="text"
                      value={character.eyes}
                      onChange={(e) => updateCharacter('eyes', e.target.value)}
                      className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all"
                      placeholder="Eye color"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-purple-300">Hair</label>
                    <input
                      type="text"
                      value={character.hair}
                      onChange={(e) => updateCharacter('hair', e.target.value)}
                      className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all"
                      placeholder="Hair color/style"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-purple-300">Skin</label>
                    <input
                      type="text"
                      value={character.skin}
                      onChange={(e) => updateCharacter('skin', e.target.value)}
                      className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all"
                      placeholder="Skin tone"
                    />
                  </div>
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
                  <select
                    value={character.class}
                    onChange={(e) => updateCharacter('class', e.target.value)}
                    className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all"
                  >
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
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={character.level}
                    onChange={(e) => updateCharacter('level', parseInt(e.target.value) || 1)}
                    className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-purple-300">Background</label>
                  <select
                    value={character.background}
                    onChange={(e) => updateCharacter('background', e.target.value)}
                    className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all"
                  >
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
            
            <div className="bg-dark-purple-900/50 backdrop-blur-sm border border-dark-purple-700 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-dark-purple-300">Ability Scores</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(character.abilities).map(([ability, score]) => (
                  <div key={ability} className="bg-dark-purple-950 p-4 rounded-lg border border-dark-purple-700">
                    <label className="block text-sm font-medium mb-2 uppercase text-dark-purple-400">
                      {ability}
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={score}
                      onChange={(e) => updateAbility(ability, e.target.value)}
                      className="w-full bg-dark-purple-900 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white text-center text-2xl font-bold mb-2 focus:outline-none focus:border-dark-purple-500 transition-all"
                    />
                    <div className="text-center text-lg font-bold text-dark-purple-300">
                      {getModifier(score)}
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
                <textarea
                  value={character.personalityTraits}
                  onChange={(e) => updateCharacter('personalityTraits', e.target.value)}
                  className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all min-h-[100px]"
                  placeholder="Describe your personality..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-dark-purple-300">Ideals</label>
                <textarea
                  value={character.ideals}
                  onChange={(e) => updateCharacter('ideals', e.target.value)}
                  className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all min-h-[100px]"
                  placeholder="What do you believe in?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-dark-purple-300">Bonds</label>
                <textarea
                  value={character.bonds}
                  onChange={(e) => updateCharacter('bonds', e.target.value)}
                  className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all min-h-[100px]"
                  placeholder="What ties you to the world?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-dark-purple-300">Flaws</label>
                <textarea
                  value={character.flaws}
                  onChange={(e) => updateCharacter('flaws', e.target.value)}
                  className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all min-h-[100px]"
                  placeholder="What are your weaknesses?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-dark-purple-300">Backstory</label>
                <textarea
                  value={character.backstory}
                  onChange={(e) => updateCharacter('backstory', e.target.value)}
                  className="w-full bg-dark-purple-950 border-2 border-dark-purple-700 rounded-lg px-4 py-3 text-white placeholder-dark-purple-400 focus:outline-none focus:border-dark-purple-500 focus:ring-2 focus:ring-dark-purple-500/20 transition-all min-h-[200px]"
                  placeholder="Tell your story..."
                />
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
              <p className="text-dark-purple-300 mb-6">
                Download your character as a JSON file to share with your DM or friends
              </p>
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
              <p className="text-dark-purple-300 mb-6">
                Create custom races, classes, items, and more for your campaign
              </p>
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