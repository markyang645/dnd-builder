import React, { useState } from 'react';
import { 
  CharacterTab, ClassTab, AbilitiesTab, SkillsTab, 
  DetailsTab, ExportTab, CustomTab 
} from './components/tabs';
import { useCharacterStore } from './state/store';

const tabs = [
  { key: 'character', label: 'CHARACTER', color: 'purple', gradient: 'from-purple-600 to-purple-400' },
  { key: 'class', label: 'CLASS', color: 'blood-red', gradient: 'from-[#8b0000] to-[#c41e1e]' },
  { key: 'abilities', label: 'ABILITIES', color: 'gold', gradient: 'from-[#ffd700] to-[#ffed4a]' },
  { key: 'skills', label: 'SKILLS', color: 'green', gradient: 'from-[#22c55e] to-[#4ade80]' },
  { key: 'details', label: 'DETAILS', color: 'galaxy-blue', gradient: 'from-[#4b6cb7] to-[#7a94d4]' },
  { key: 'export', label: 'EXPORT', color: 'orange', gradient: 'from-[#ff8c00] to-[#ffb84d]' },
  { key: 'custom', label: 'CUSTOM', color: 'periwinkle', gradient: 'from-[#ccccff] to-[#e6e6ff]' },
];

function App() {
  const [activeTab, setActiveTab] = useState('character');
  const { character } = useCharacterStore();

  const renderTab = () => {
    switch (activeTab) {
      case 'character': return <CharacterTab />;
      case 'class': return <ClassTab />;
      case 'abilities': return <AbilitiesTab />;
      case 'skills': return <SkillsTab />;
      case 'details': return <DetailsTab />;
      case 'export': return <ExportTab />;
      case 'custom': return <CustomTab />;
      default: return <CharacterTab />;
    }
  };

  const activeTabData = tabs.find(t => t.key === activeTab);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-dark-purple-900/50 backdrop-blur-sm border-r border-dark-purple-800 p-4 hidden md:block">
        <h1 className="text-xl font-bold text-purple-400 mb-6">D&D Builder</h1>
        {character ? (
          <div className="space-y-2 text-sm text-gray-300">
            <p><strong>Name:</strong> {character.name}</p>
            <p><strong>Level:</strong> {character.level}</p>
            <p><strong>Class:</strong> {character.class}</p>
          </div>
        ) : (
          <p className="text-gray-500 text-sm">Create a character to begin</p>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Tab Navigation */}
        <div className="bg-dark-purple-950/80 backdrop-blur-sm px-2 pt-2 flex gap-1 overflow-x-auto border-b border-dark-purple-800">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-xs font-bold rounded-t-md transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.key
                  ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg scale-105 border-t border-l border-r border-white/20`
                  : 'bg-dark-purple-900/50 text-gray-400 hover:text-white hover:bg-dark-purple-800/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className={`flex-1 overflow-y-auto bg-gradient-to-br ${activeTabData?.gradient}/10`}>
          {renderTab()}
        </div>
      </main>
    </div>
  );
}

export default App;