// D&D Dice Rolling Utilities

// Roll a single die (e.g., rollDie(6) = 1-6)
export const rollDie = (sides) => {
  return Math.floor(Math.random() * sides) + 1
}

// Roll multiple dice and sum (e.g., rollDice(4, 6) = 4d6)
export const rollDice = (count, sides) => {
  let total = 0
  const rolls = []
  for (let i = 0; i < count; i++) {
    const roll = rollDie(sides)
    rolls.push(roll)
    total += roll
  }
  return { total, rolls }
}

// Roll 4d6 and drop the lowest (standard D&D ability score generation)
export const roll4d6DropLowest = () => {
  const rolls = []
  for (let i = 0; i < 4; i++) {
    rolls.push(rollDie(6))
  }
  rolls.sort((a, b) => a - b) // Sort ascending
  const dropped = rolls.slice(1) // Remove lowest
  return {
    total: dropped.reduce((a, b) => a + b, 0),
    rolls,
    dropped: rolls[0],
    kept: dropped,
  }
}

// Roll d20 with modifier (for attacks, saves, checks)
export const rollD20 = (modifier = 0, { advantage = false, disadvantage = false } = {}) => {
  let roll1 = rollDie(20)
  let roll2 = null
  let finalRoll = roll1
  
  if (advantage) {
    roll2 = rollDie(20)
    finalRoll = Math.max(roll1, roll2)
  } else if (disadvantage) {
    roll2 = rollDie(20)
    finalRoll = Math.min(roll1, roll2)
  }
  
  const total = finalRoll + modifier
  const natural20 = finalRoll === 20
  const natural1 = finalRoll === 1
  
  return {
    roll: finalRoll,
    rolls: roll2 ? [roll1, roll2] : [roll1],
    modifier,
    total,
    advantage,
    disadvantage,
    natural20,
    natural1,
    success: total >= 20, // DC 20 baseline
  }
}

// Roll damage (e.g., "1d8+3" for a longsword with +3 STR)
export const rollDamage = (diceNotation, modifier = 0) => {
  // Parse "2d6+3" or "1d8" or "d10+2"
  const match = diceNotation.match(/^(\d*)d(\d+)([+-]\d+)?$/)
  if (!match) return { total: modifier, error: 'Invalid dice notation' }
  
  const [, countStr, sidesStr, modStr] = match
  const count = countStr ? parseInt(countStr) : 1
  const sides = parseInt(sidesStr)
  const extraMod = modStr ? parseInt(modStr) : 0
  
  const { total: diceTotal, rolls } = rollDice(count, sides)
  const total = diceTotal + extraMod + modifier
  
  return {
    total,
    diceTotal,
    modifier: extraMod + modifier,
    rolls,
    notation: diceNotation,
  }
}

// Roll hit points for level up (class hit die + CON mod)
export const rollHitPoints = (hitDieSides, conModifier, takeAverage = false) => {
  if (takeAverage) {
    return Math.floor(hitDieSides / 2) + 1 + conModifier
  }
  const roll = rollDie(hitDieSides)
  return Math.max(1, roll + conModifier) // Minimum 1 HP per level
}

// Roll initiative (d20 + DEX mod)
export const rollInitiative = (dexModifier) => {
  return rollD20(dexModifier)
}

// Roll a skill check (d20 + ability mod + proficiency if applicable)
export const rollSkillCheck = (abilityMod, proficiencyBonus = 0, proficient = false) => {
  const totalMod = abilityMod + (proficient ? proficiencyBonus : 0)
  return rollD20(totalMod)
}

// Roll a saving throw (d20 + ability mod + proficiency if applicable)
export const rollSavingThrow = (abilityMod, proficiencyBonus = 0, proficient = false) => {
  const totalMod = abilityMod + (proficient ? proficiencyBonus : 0)
  return rollD20(totalMod)
}

// Roll an attack (d20 + attack bonus)
export const rollAttack = (attackBonus, { advantage = false, disadvantage = false } = {}) => {
  return rollD20(attackBonus, { advantage, disadvantage })
}

// Roll death saving throw (pure d20, no modifier)
export const rollDeathSave = () => {
  const roll = rollDie(20)
  return {
    roll,
    success: roll >= 10,
    natural20: roll === 20,
    natural1: roll === 1,
    instantStabilize: roll === 20,
    instantFail: roll === 1,
  }
}

// Generate a full ability score array using 4d6 drop lowest
export const generateAbilityScores = () => {
  const scores = []
  for (let i = 0; i < 6; i++) {
    const { total } = roll4d6DropLowest()
    scores.push(total)
  }
  return scores.sort((a, b) => b - a) // Highest to lowest for assignment
}

// Format roll result for display
export const formatRoll = (roll) => {
  if (roll.natural20) return `🎲 NATURAL 20!`
  if (roll.natural1) return `🎲 NATURAL 1!`
  if (roll.advantage) return `🎲 ${roll.rolls[0]} or ${roll.rolls[1]} → ${roll.roll}`
  if (roll.disadvantage) return `🎲 ${roll.rolls[0]} or ${roll.rolls[1]} → ${roll.roll}`
  return `🎲 ${roll.roll}`
}