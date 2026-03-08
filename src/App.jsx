import React, { useState } from 'react';
import { 
  CharacterTab, ClassTab, AbilitiesTab, SkillsTab, 
  DetailsTab, ExportTab, CustomTab 
} from './components/tabs';
import { useCharacterStore } from './state/store';

const tabs = [
  { key: 'character', label: 'CHARACTER', gradient: 'bg-tab-purple', hover: 'hover:bg-purple-600' },
  { key: 'class', label: 'CLASS', gradient: 'bg-tab-blood', hover: 'hover:bg-red-700' },
  { key: 'abilities', label: 'ABILITIES', gradient: 'bg-tab-gold', hover: 'hover:bg-yellow-500' },
  { key: 'skills', label: 'SKILLS', gradient: 'bg-tab-green', hover: 'hover:bg-green-600' },
  { key: 'details', label: 'DETAILS', gradient: 'bg-tab-sky', hover: 'hover:bg-sky-500' },
  { key: 'export', label: 'EXPORT', gradient: 'bg-tab-orange', hover: 'hover:bg-orange-600' },
  { key: 'custom', label: 'CUSTOM', gradient: 'bg-tab-purple', hover: 'hover:bg-purple-600' },
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
    <div className="min-h-screen bg-vantablack flex">
      {/* Sidebar */}
      <aside className="w-64 bg-dark-purple-900/50 backdrop-blur-sm border-r border-dark-purple-800 p-4 hidden md:block">
        <h1 className="text-xl font-bold text-purple-400 mb-6">D&D Builder</h1>
        <div className="space-y-2 text-sm text-gray-300">
          <p><strong>Name:</strong> {character?.name || 'Unnamed'}</p>
          <p><strong>Level:</strong> {character?.level || 1}</p>
          <p><strong>Class:</strong> {character?.class || 'None'}</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Tab Navigation */}
        <div className="bg-dark-purple-950/80 backdrop-blur-sm px-4 pt-4 flex gap-2 overflow-x-auto border-b border-dark-purple-800">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 text-sm font-bold rounded-t-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.key
                  ? `${tab.gradient} text-white shadow-lg scale-110 border-t-2 border-l-2 border-r-2 border-white/30`
                  : `bg-dark-purple-900/50 text-gray-400 ${tab.hover} hover:text-white`
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto">
          {renderTab()}
        </div>
      </main>
    </div>
  );
}

export default App;