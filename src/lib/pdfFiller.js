import { PDFDocument, StandardFonts } from 'pdf-lib';
const fieldMapping = {
  CharacterName: 'name', ClassLevel: 'class', Background: 'background',
  PlayerName: 'playerName', Race: 'race', Alignment: 'alignment', XP: 'xp',
  ProficiencyBonus: 'proficiencyBonus',
  HPMax: 'maxHitPoints', HPCurrent: 'hitPoints',
  AC: 'armorClass', Initiative: 'initiative', Speed: 'speed',
  STR: 'abilities.str', DEX: 'abilities.dex', CON: 'abilities.con',
  INT: 'abilities.int', WIS: 'abilities.wis', CHA: 'abilities.cha',
  STRSave: 'savingThrows.str', DEXSave: 'savingThrows.dex', CONSave: 'savingThrows.con',
  INTSave: 'savingThrows.int', WISSave: 'savingThrows.wis', CHASave: 'savingThrows.cha',
  PassivePerception: 'passivePerception', Age: 'age', Height: 'height',
  Weight: 'weight', Eyes: 'eyes', Skin: 'skin', Hair: 'hair',
  PersonalityTraits: 'personalityTraits', Ideals: 'ideals', Bonds: 'bonds',
  Flaws: 'flaws', Backstory: 'backstory', Features: 'features', Equipment: 'equipment',
};
const getNestedValue = (obj, path) => path.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : '', obj);
const getModifier = (score) => Math.floor((score - 10) / 2);
const getProficiencyBonus = (level) => level >= 17 ? 6 : level >= 13 ? 5 : level >= 9 ? 4 : level >= 5 ? 3 : 2;
export const generateCharacterPDF = async (character) => {
  try {
    const response = await fetch('/5E_CharacterSheet.pdf');
    const pdfBytes = await response.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const form = pdfDoc.getForm();
    const level = character.level || 1;
    const profBonus = getProficiencyBonus(level);
    const abilities = character.abilities || { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };
    const strMod = getModifier(abilities.str), dexMod = getModifier(abilities.dex), conMod = getModifier(abilities.con);
    const intMod = getModifier(abilities.int), wisMod = getModifier(abilities.wis), chaMod = getModifier(abilities.cha);
    const skillProficiencies = character.skillProficiencies || [];
    const perceptionProficient = skillProficiencies.includes('perception');
    const passivePerception = 10 + wisMod + (perceptionProficient ? profBonus : 0);
    const fieldValues = {
      CharacterName: character.name || '', ClassLevel: `${character.class || ''} ${level}`,
      Background: character.background || '', PlayerName: character.playerName || '',
      Race: character.race || '', Alignment: character.alignment || '', XP: character.xp || '0',
      ProficiencyBonus: profBonus.toString(),
      HPMax: (character.maxHitPoints || 10).toString(), HPCurrent: (character.hitPoints || 10).toString(),
      AC: (character.armorClass || 10).toString(),
      Initiative: (dexMod >= 0 ? '+' : '') + dexMod.toString(), Speed: (character.speed || 30).toString(),
      STR: abilities.str.toString(), DEX: abilities.dex.toString(), CON: abilities.con.toString(),
      INT: abilities.int.toString(), WIS: abilities.wis.toString(), CHA: abilities.cha.toString(),
      STRSave: (strMod >= 0 ? '+' : '') + strMod.toString(), DEXSave: (dexMod >= 0 ? '+' : '') + dexMod.toString(),
      CONSave: (conMod >= 0 ? '+' : '') + conMod.toString(), INTSave: (intMod >= 0 ? '+' : '') + intMod.toString(),
      WISSave: (wisMod >= 0 ? '+' : '') + wisMod.toString(), CHASave: (chaMod >= 0 ? '+' : '') + chaMod.toString(),
      PassivePerception: passivePerception.toString(), Age: character.age || '',
      Height: character.height || '', Weight: character.weight || '',
      Eyes: character.eyes || '', Skin: character.skin || '', Hair: character.hair || '',
      PersonalityTraits: character.personalityTraits || '', Ideals: character.ideals || '',
      Bonds: character.bonds || '', Flaws: character.flaws || '',
      Backstory: character.backstory || '', Features: character.features || '',
      Equipment: character.equipment?.join(', ') || '',
    };
    for (const [pdfField, charPath] of Object.entries(fieldMapping)) {
      try {
        const field = form.getTextField(pdfField);
        const value = fieldValues[pdfField] || getNestedValue(character, charPath) || '';
        field.setText(value.toString());
      } catch (e) {}
    }
    form.flatten();
    return await pdfDoc.save();
  } catch (error) { console.error('PDF Error:', error); throw error; }
};
export const downloadPDF = (pdfBytes, filename = 'character.pdf') => {
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a'); link.href = url; link.download = filename;
  document.body.appendChild(link); link.click(); document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
export const downloadJSON = (character, filename = 'character.json') => {
  const blob = new Blob([JSON.stringify(character, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a'); link.href = url; link.download = filename;
  document.body.appendChild(link); link.click(); document.body.removeChild(link);
  URL.revokeObjectURL(url);
};