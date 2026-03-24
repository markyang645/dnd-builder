import React from 'react';
import { useCharacterStore } from '../../state/store';
import { generateCharacterPDF, downloadPDF, downloadJSON } from '../../lib/pdfFiller';

export default function ExportTab() {
  const { character } = useCharacterStore();
  const [isGenerating, setIsGenerating] = React.useState(false);
  const handleExportAll = async () => {
    if (!character) return;
    setIsGenerating(true);
    try {
      downloadJSON(character, `${character.name || 'character'}.json`);
      const pdfBytes = await generateCharacterPDF(character);
      downloadPDF(pdfBytes, `${character.name || 'character'}.pdf`);
      alert('✅ Character exported! Downloaded JSON + PDF');
    } catch (error) {
      console.error('Export error:', error);
      alert('❌ Error exporting character. Check console for details.');
    } finally { setIsGenerating(false); }
  };
  const handleExportJSON = () => { if (!character) return; downloadJSON(character, `${character.name || 'character'}.json`); };
  const handleImportJSON = (event) => {
    const file = event.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => { try { const imported = JSON.parse(e.target.result); alert('✅ Character JSON loaded!'); } catch (error) { alert('❌ Invalid JSON file'); } };
    reader.readAsText(file);
  };
  return (
    <div className="p-6 bg-tab-orange/20 backdrop-blur-sm rounded-xl m-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-4">💾 Export Character</h2>
      {!character ? <p className="text-gray-400">Create a character first to export</p> : (
        <div className="space-y-4">
          <button onClick={handleExportAll} disabled={isGenerating} className="btn-primary w-full md:w-auto">{isGenerating ? '⏳ Generating...' : '📥 Download PDF + JSON'}</button>
          <div className="flex gap-2">
            <button onClick={handleExportJSON} className="btn-secondary flex-1">📄 JSON Only</button>
            <label className="btn-secondary flex-1 cursor-pointer text-center">📤 Import JSON<input type="file" accept=".json" onChange={handleImportJSON} className="hidden" /></label>
          </div>
          <div className="bg-dark-purple-950/80 border border-orange-600/50 text-gray-100 p-4 rounded-lg text-xs overflow-auto max-h-96"><pre>{JSON.stringify(character, null, 2)}</pre></div>
        </div>
      )}
    </div>
  );
}
