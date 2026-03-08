import React, { useState } from 'react';
import { 
  CharacterTab, ClassTab, AbilitiesTab, SkillsTab, 
  DetailsTab, ExportTab, CustomTab 
} from './components/tabs';
import { useCharacterStore } from './state/store';

// Simple Icon Components (or import from lucide-react)
const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium rounded-t-lg transition ${
      active 
        ? 'bg-white text-indigo-700 border-t border-l border-r border-gray-200' 
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`}
  >
    {children}
  </button>
);

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

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar (Simplified) */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4 hidden md:block">
        <h1 className="text-xl font-bold text-indigo-600 mb-6">D&D Builder</h1>
        <div className="space-y-2 text-sm text-gray-600">
          <p><strong>Name:</strong> {character.name || 'Unnamed'}</p>
          <p><strong>Level:</strong> {character.level}</p>
          <p><strong>Class:</strong> {character.class}</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Tab Navigation */}
        <div className="bg-gray-200 px-4 pt-4 flex gap-1 overflow-x-auto">
          <TabButton active={activeTab === 'character'} onClick={() => setActiveTab('character')}>CHARACTER</TabButton>
          <TabButton active={activeTab === 'class'} onClick={() => setActiveTab('class')}>CLASS</TabButton>
          <TabButton active={activeTab === 'abilities'} onClick={() => setActiveTab('abilities')}>ABILITIES</TabButton>
          <TabButton active={activeTab === 'skills'} onClick={() => setActiveTab('skills')}>SKILLS</TabButton>
          <TabButton active={activeTab === 'details'} onClick={() => setActiveTab('details')}>DETAILS</TabButton>
          <TabButton active={activeTab === 'export'} onClick={() => setActiveTab('export')}>EXPORT</TabButton>
          <TabButton active={activeTab === 'custom'} onClick={() => setActiveTab('custom')}>CUSTOM</TabButton>
        </div>

        {/* Tab Content */}
        <div className="flex-1 bg-white m-4 rounded-b-lg shadow overflow-y-auto">
          {renderTab()}
        </div>
      </main>
    </div>
  );
}

export default App;