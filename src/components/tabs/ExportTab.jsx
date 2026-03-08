import React from 'react';
import { useCharacterStore } from '../../state/store';

export default function ExportTab() {
  const { character } = useCharacterStore();

  if (!character) return <div className="p-4 text-white">Create a character to begin</div>;

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(character, null, 2));
    alert('Character JSON copied to clipboard!');
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
        {JSON.stringify(character, null, 2)}
      </pre>
    </div>
  );
}