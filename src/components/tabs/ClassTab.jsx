import React from 'react';
import { useCharacterStore } from '../../state/store';

export default function ClassTab() {
  const { character } = useCharacterStore();

  if (!character) return <div className="p-4 text-white">Create a character to begin</div>;

  return (
    <div className="p-6 bg-tab-blood/20 backdrop-blur-sm rounded-xl m-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-4">⚔️ Class & Features</h2>
      <div className="bg-dark-purple-950/50 border border-red-700/50 p-6 rounded-lg">
        <p className="text-gray-300">
          Class: <span className="text-red-400 font-bold">{character.class || 'None'}</span>
        </p>
        <p className="text-gray-300 mt-2">
          Level: <span className="text-red-400 font-bold">{character.level || 1}</span>
        </p>
        <p className="text-gray-400 mt-4 text-sm">
          Class features will populate here based on your level.
        </p>
      </div>
    </div>
  );
}