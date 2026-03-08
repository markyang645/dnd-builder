import React from 'react';
import { useCharacterStore } from '../../state/store';

export default function ExportTab() {
  const { character, createCharacter } = useCharacterStore();

  const handleCopy = () => {
    if (character) {
      navigator.clipboard.writeText(JSON.stringify(character, null, 2));
      alert('Character JSON copied to clipboard!');
    } else {
      createCharacter('New Character');
    }
  };

  return (
    <div className="p-6 bg-tab-orange/20 backdrop-blur-sm rounded-xl m-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-4">💾 Export Character</h2>
      <button
        onClick={handleCopy}
        className="btn-primary mb-4"
      >
        Copy JSON to Clipboard
      </button>
      <pre className="bg-dark-purple-950/80 border border-orange-600/50 text-gray-100 p-4 rounded-lg text-xs overflow-auto max-h-96">
        {character ? JSON.stringify(character, null, 2) : '// Create a character to see export data'}
      </pre>
    </div>
  );
}