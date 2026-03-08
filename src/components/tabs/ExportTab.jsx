import React from 'react';
// ✅ Correct (named import)
import { useCharacterStore } from '../../state/store';

export default function ExportTab() {
  const { character } = useCharacterStore();

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(character, null, 2));
    alert('Character JSON copied to clipboard!');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Export Character</h2>
      <button
        onClick={handleCopy}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Copy JSON to Clipboard
      </button>
      <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded text-xs overflow-auto max-h-96">
        {JSON.stringify(character, null, 2)}
      </pre>
    </div>
  );
}
