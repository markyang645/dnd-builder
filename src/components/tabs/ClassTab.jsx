import React from 'react';
// ✅ Correct (named import)
import { useCharacterStore } from '../../state/store';

export default function ClassTab() {
  const { character } = useCharacterStore();
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Class & Features</h2>
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded text-sm text-yellow-800">
        <p>Class features for <strong>{character.class}</strong> (Level {character.level}) will populate here.</p>
      </div>
      {/* Future: Map class features based on level */}
    </div>
  );
}