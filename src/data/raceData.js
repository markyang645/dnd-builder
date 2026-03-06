export const raceData = {
  human: {
    name: 'Human',
    ageRange: { min: 18, max: 80 },
    heightRange: { min: 60, max: 78 }, // inches (5'0" to 6'6")
    weightRange: { min: 120, max: 250 }, // lbs
  },
  elf: {
    name: 'Elf',
    ageRange: { min: 100, max: 750 },
    heightRange: { min: 60, max: 72 }, // 5'0" to 6'0"
    weightRange: { min: 100, max: 180 },
  },
  dwarf: {
    name: 'Dwarf',
    ageRange: { min: 50, max: 350 },
    heightRange: { min: 48, max: 60 }, // 4'0" to 5'0"
    weightRange: { min: 150, max: 250 },
  },
  halfling: {
    name: 'Halfling',
    ageRange: { min: 20, max: 150 },
    heightRange: { min: 36, max: 42 }, // 3'0" to 3'6"
    weightRange: { min: 60, max: 100 },
  },
  dragonborn: {
    name: 'Dragonborn',
    ageRange: { min: 15, max: 80 },
    heightRange: { min: 72, max: 84 }, // 6'0" to 7'0"
    weightRange: { min: 200, max: 350 },
  },
  gnome: {
    name: 'Gnome',
    ageRange: { min: 100, max: 500 },
    heightRange: { min: 40, max: 48 }, // 3'4" to 4'0"
    weightRange: { min: 60, max: 90 },
  },
  'half-elf': {
    name: 'Half-Elf',
    ageRange: { min: 20, max: 180 },
    heightRange: { min: 60, max: 72 },
    weightRange: { min: 100, max: 200 },
  },
  'half-orc': {
    name: 'Half-Orc',
    ageRange: { min: 14, max: 75 },
    heightRange: { min: 66, max: 84 }, // 5'6" to 7'0"
    weightRange: { min: 180, max: 300 },
  },
  tiefling: {
    name: 'Tiefling',
    ageRange: { min: 18, max: 100 },
    heightRange: { min: 60, max: 72 },
    weightRange: { min: 120, max: 220 },
  },
}

export const appearanceOptions = {
  eyeColors: [
    'Brown', 'Blue', 'Green', 'Hazel', 'Gray', 'Amber',
    'Violet', 'Red', 'Gold', 'Silver', 'Black', 'White',
    'Pale Blue', 'Dark Brown', 'Light Blue', 'Emerald',
  ],
  hairColors: [
    'Black', 'Brown', 'Blonde', 'Red', 'Gray', 'White',
    'Auburn', 'Chestnut', 'Platinum', 'Silver', 'Blue',
    'Green', 'Purple', 'Pink', 'Orange', 'Golden',
  ],
  hairStyles: [
    'Short', 'Medium', 'Long', 'Bald', 'Buzz Cut',
    'Ponytail', 'Braids', 'Dreadlocks', 'Mohawk', 'Afro',
    'Curly', 'Wavy', 'Straight', 'Spiky', 'Top Knot',
  ],
  skinTones: [
    'Fair', 'Light', 'Medium', 'Olive', 'Tan',
    'Dark', 'Deep', 'Pale', 'Bronze', 'Ebony',
    'Porcelain', 'Peach', 'Beige', 'Caramel', 'Mahogany',
  ],
}

// Helper to convert inches to feet/inches
export const inchesToFeetInches = (inches) => {
  const feet = Math.floor(inches / 12)
  const remainingInches = inches % 12
  return `${feet}'${remainingInches}"`
}