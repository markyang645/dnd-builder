// D&D Dice Rolling Utilities

// Roll a single die (e.g., rollDie(6) = 1-6)
export const rollDie = (sides) => Math.floor(Math.random() * sides) + 1

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

// Roll 4d6 drop lowest - RETURNS FULL BREAKDOWN
export const roll4d6DropLowest = () => {
  const rolls = []
  for (let i = 0; i < 4; i++) {
    rolls.push(rollDie(6))
  }
  const sorted = [...rolls].sort((a, b) => a - b)
  const dropped = sorted[0]
  const kept = sorted.slice(1)
  const total = kept.reduce((a, b) => a + b, 0)
  
  return {
    total,
    allRolls: rolls,
    sortedRolls: sorted,
    dropped,
    kept,
    breakdown: `${rolls.join(', ')} → drop ${dropped} → ${kept.join(' + ')} = ${total}`,
  }
}

// Generate 6 ability scores with full roll breakdowns
export const generateAbilityScores = () => {
  const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha']
  const results = []
  
  for (let i = 0; i < 6; i++) {
    const roll = roll4d6DropLowest()
    results.push({
      ability: abilities[i],
      score: roll.total,
      breakdown: roll.breakdown,
      allRolls: roll.allRolls,
      dropped: roll.dropped,
      kept: roll.kept,
    })
  }
  
  return results
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
  return {
    roll: finalRoll,
    rolls: roll2 ? [roll1, roll2] : [roll1],
    modifier,
    total,
    advantage,
    disadvantage,
    natural20: finalRoll === 20,
    natural1: finalRoll === 1,
  }
}

// Roll damage (e.g., "1d8+3" for a longsword with +3 STR)
export const rollDamage = (diceNotation, modifier = 0) => {
  const match = diceNotation.match(/^(\d*)d(\d+)([+-]\d+)?$/)
  if (!match) return { total: modifier, error: 'Invalid dice notation' }
  
  const [, countStr, sidesStr, modStr] = match
  const count = countStr ? parseInt(countStr) : 1
  const sides = parseInt(sidesStr)
  const extraMod = modStr ? parseInt(modStr) : 0
  
  const { total: diceTotal, rolls } = rollDice(count, sides)
  const total = diceTotal + extraMod + modifier
  
  return { total, diceTotal, modifier: extraMod + modifier, rolls, notation: diceNotation }
}

// Format roll result for display
export const formatRoll = (roll) => {
  if (roll.natural20) return `🎲 NATURAL 20!`
  if (roll.natural1) return `🎲 NATURAL 1!`
  if (roll.advantage) return `🎲 ${roll.rolls[0]} or ${roll.rolls[1]} → ${roll.roll}`
  if (roll.disadvantage) return `🎲 ${roll.rolls[0]} or ${roll.rolls[1]} → ${roll.roll}`
  return `🎲 ${roll.roll}`
}