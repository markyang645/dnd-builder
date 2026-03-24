import { PDFDocument, StandardFonts } from 'pdf-lib';

// WotC Fillable PDF Field Names - Verified Mapping
const FIELD_MAPPING = {
  // Identity
  'CharacterName': 'name',
  'ClassLevel': 'classAndLevel',
  'Background': 'background',
  'PlayerName': 'playerName',
  'Race': 'race',
  'Alignment': 'alignment',
  'XP': 'xp',
  
  // Stats
  'ProficiencyBonus': 'proficiencyBonus',
  'Inspiration': 'inspiration',
  
  // HP & AC
  'HPMax': 'hpMax',
  'HPCurrent': 'hpCurrent',
  'TempHP': 'tempHp',
  'AC': 'ac',
  'Initiative': 'initiative',
  'Speed': 'speed',
  
  // Death Saves
  'DeathSaveSuccesses': 'deathSaveSuccesses',
  'DeathSaveFailures': 'deathSaveFailures',
  
  // Abilities (scores)
  'STRScore': 'strScore',
  'DEXScore': 'dexScore',
  'CONScore': 'conScore',
  'INTScore': 'intScore',
  'WISScore': 'wisScore',
  'CHAScore': 'chaScore',
  
  // Saving Throws
  'STRSave': 'strSave',
  'DEXSave': 'dexSave',
  'CONSave': 'conSave',
  'INTSave': 'intSave',
  'WISSave': 'wisSave',
  'CHASave': 'chaSave',
  
  // Skills
  'Acrobatics': 'skillAcrobatics',
  'AnimalHandling': 'skillAnimalHandling',
  'Arcana': 'skillArcana',
  'Athletics': 'skillAthletics',
  'Deception': 'skillDeception',
  'History': 'skillHistory',
  'Insight': 'skillInsight',
  'Intimidation': 'skillIntimidation',
  'Investigation': 'skillInvestigation',
  'Medicine': 'skillMedicine',
  'Nature': 'skillNature',
  'Perception': 'skillPerception',
  'Performance': 'skillPerformance',
  'Persuasion': 'skillPersuasion',
  'Religion': 'skillReligion',
  'SleightOfHand': 'skillSleightOfHand',
  'Stealth': 'skillStealth',
  'Survival': 'skillSurvival',
  
  // Passive
  'PassivePerception': 'passivePerception',
  
  // Features & Traits
  'FeaturesTraits': 'featuresTraits',
  
  // Attacks & Spellcasting
  'AttacksSpellcasting': 'attacksSpellcasting',
  
  // Equipment
  'Equipment': 'equipment',
  
  // Appearance
  'Age': 'age',
  'Height': 'height',
  'Weight': 'weight',
  'Eyes': 'eyes',
  'Skin': 'skin',
  'Hair': 'hair',
  
  // Personality
  'PersonalityTraits': 'personalityTraits',
  'Ideals': 'ideals',
  'Bonds': 'bonds',
  'Flaws': 'flaws',
  
  // Backstory
  'Backstory': 'backstory',
};

// Calculate ability modifier
const getModifier = (score) => Math.floor((score - 10) / 2);

// Calculate proficiency bonus by level
const getProficiencyBonus = (level) => {
  if (level >= 17) return 6;
  if (level >= 13) return 5;
  if (level >= 9) return 4;
  if (level >= 5) return 3;
  return 2;
};

// Get nested value from object (e.g., 'abilities.str')
const getNestedValue = (obj, path) => {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : '', obj);
};

// Format modifier with sign
const formatMod = (num) => {
  const n = parseInt(num);
  return n >= 0 ? `+${n}` : n.toString();
};

export const generateCharacterPDF = async (character) => {
  try {
    // Load the PDF template from public folder
    const response = await fetch('/5E_CharacterSheet.pdf');
    if (!response.ok) throw new Error('PDF template not found');
    
    const pdfBytes = await response.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const form = pdfDoc.getForm();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    
    // Extract character data
    const level = character.level || 1;
    const profBonus = getProficiencyBonus(level);
    const abilities = character.abilities || { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };
    const skillProficiencies = character.skillProficiencies || [];
    
    // Calculate derived values
    const strMod = getModifier(abilities.str);
    const dexMod = getModifier(abilities.dex);
    const conMod = getModifier(abilities.con);
    const intMod = getModifier(abilities.int);
    const wisMod = getModifier(abilities.wis);
    const chaMod = getModifier(abilities.cha);
    
    const perceptionProficient = skillProficiencies.includes('perception');
    const passivePerception = 10 + wisMod + (perceptionProficient ? profBonus : 0);
    
    // Build field values object
    const fieldValues = {
      // Identity
      CharacterName: character.name || '',
      ClassLevel: `${character.class || ''} ${level}`,
      Background: character.background || '',
      PlayerName: character.playerName || '',
      Race: character.race || '',
      Alignment: character.alignment || '',
      XP: character.xp || '0',
      
      // Stats
      ProficiencyBonus: profBonus.toString(),
      Inspiration: '○',
      
      // HP & AC
      HPMax: (character.maxHitPoints || 10).toString(),
      HPCurrent: (character.hitPoints || 10).toString(),
      TempHP: (character.tempHitPoints || 0).toString(),
      AC: (character.armorClass || 10).toString(),
      Initiative: formatMod(dexMod),
      Speed: (character.speed || 30).toString(),
      
      // Death Saves
      DeathSaveSuccesses: '○ ○ ○',
      DeathSaveFailures: '○ ○ ○',
      
      // Ability Scores
      STRScore: abilities.str.toString(),
      DEXScore: abilities.dex.toString(),
      CONScore: abilities.con.toString(),
      INTScore: abilities.int.toString(),
      WISScore: abilities.wis.toString(),
      CHAScore: abilities.cha.toString(),
      
      // Saving Throws
      STRSave: formatMod(strMod),
      DEXSave: formatMod(dexMod),
      CONSave: formatMod(conMod),
      INTSave: formatMod(intMod),
      WISSave: formatMod(wisMod),
      CHASave: formatMod(chaMod),
      
      // Skills (with proficiency indicator)
      Acrobatics: formatMod(getModifier(abilities.dex) + (skillProficiencies.includes('acrobatics') ? profBonus : 0)),
      AnimalHandling: formatMod(getModifier(abilities.wis) + (skillProficiencies.includes('animalHandling') ? profBonus : 0)),
      Arcana: formatMod(getModifier(abilities.int) + (skillProficiencies.includes('arcana') ? profBonus : 0)),
      Athletics: formatMod(getModifier(abilities.str) + (skillProficiencies.includes('athletics') ? profBonus : 0)),
      Deception: formatMod(getModifier(abilities.cha) + (skillProficiencies.includes('deception') ? profBonus : 0)),
      History: formatMod(getModifier(abilities.int) + (skillProficiencies.includes('history') ? profBonus : 0)),
      Insight: formatMod(getModifier(abilities.wis) + (skillProficiencies.includes('insight') ? profBonus : 0)),
      Intimidation: formatMod(getModifier(abilities.cha) + (skillProficiencies.includes('intimidation') ? profBonus : 0)),
      Investigation: formatMod(getModifier(abilities.int) + (skillProficiencies.includes('investigation') ? profBonus : 0)),
      Medicine: formatMod(getModifier(abilities.wis) + (skillProficiencies.includes('medicine') ? profBonus : 0)),
      Nature: formatMod(getModifier(abilities.int) + (skillProficiencies.includes('nature') ? profBonus : 0)),
      Perception: formatMod(passivePerception - 10),
      Performance: formatMod(getModifier(abilities.cha) + (skillProficiencies.includes('performance') ? profBonus : 0)),
      Persuasion: formatMod(getModifier(abilities.cha) + (skillProficiencies.includes('persuasion') ? profBonus : 0)),
      Religion: formatMod(getModifier(abilities.int) + (skillProficiencies.includes('religion') ? profBonus : 0)),
      SleightOfHand: formatMod(getModifier(abilities.dex) + (skillProficiencies.includes('sleightOfHand') ? profBonus : 0)),
      Stealth: formatMod(getModifier(abilities.dex) + (skillProficiencies.includes('stealth') ? profBonus : 0)),
      Survival: formatMod(getModifier(abilities.wis) + (skillProficiencies.includes('survival') ? profBonus : 0)),
      
      // Passive
      PassivePerception: passivePerception.toString(),
      
      // Features & Traits
      FeaturesTraits: character.featuresTraits || '',
      
      // Attacks & Spellcasting
      AttacksSpellcasting: character.attacksSpellcasting || '',
      
      // Equipment
      Equipment: character.equipment?.join(', ') || '',
      
      // Appearance
      Age: character.age || '',
      Height: character.height || '',
      Weight: character.weight || '',
      Eyes: character.eyes || '',
      Skin: character.skin || '',
      Hair: character.hair || '',
      
      // Personality
      PersonalityTraits: character.personalityTraits || '',
      Ideals: character.ideals || '',
      Bonds: character.bonds || '',
      Flaws: character.flaws || '',
      
      // Backstory
      Backstory: character.backstory || '',
    };
    
    // Fill form fields
    const errors = [];
    for (const [pdfField, charPath] of Object.entries(FIELD_MAPPING)) {
      try {
        const field = form.getTextField(pdfField);
        const value = fieldValues[pdfField] || '';
        if (value) field.setText(value);
      } catch (e) {
        errors.push(`Field "${pdfField}" not found in PDF`);
      }
    }
    
    // Flatten form (make fields non-editable)
    form.flatten();
    
    // Save and return
    return await pdfDoc.save();
  } catch (error) {
    console.error('PDF Generation Error:', error);
    throw new Error(`PDF generation failed: ${error.message}`);
  }
};

// Download PDF file
export const downloadPDF = (pdfBytes, filename = 'character.pdf') => {
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Download JSON file
export const downloadJSON = (character, filename = 'character.json') => {
  const blob = new Blob([JSON.stringify(character, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Import JSON file (returns parsed character)
export const importJSON = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const character = JSON.parse(e.target.result);
        resolve(character);
      } catch (error) {
        reject(new Error('Invalid JSON file'));
      }
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
};
