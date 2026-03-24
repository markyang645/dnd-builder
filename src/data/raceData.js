export const raceData = {
  human: {
skillProficiencies: [],
    name: "Human",
    description: "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that's why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
    subraces: [
      { name: "Variant", description: "Optional feat rules. Two different ability scores increase by 1. You gain proficiency in one skill of your choice and one Feat of your choice." },
      { name: "Mark of Finding", description: "Eberron variant. Wisdom +2, Constitution +1. Darkvision 60ft. Hunter's Intuition (add d4 to Perception/Survival). Can cast Hunter's Mark." },
      { name: "Mark of Handling", description: "Eberron variant. Wisdom +2, one other ability +1. Wild Intuition (add d4 to Animal Handling/Nature). Can cast Animal Friendship and Speak With Animals." },
      { name: "Mark of Making", description: "Eberron variant. Intelligence +2, one other ability +1. Artisan's Intuition (add d4 to Arcana/Artisan Tools). Can cast Mending and Magic Weapon." },
      { name: "Mark of Passage", description: "Eberron variant. Dexterity +2, one other ability +1. Walking speed 35ft. Can cast Misty Step." },
      { name: "Mark of Sentinel", description: "Eberron variant. Constitution +2, Wisdom +1. Can cast Shield. Vigilant Guardian (swap places with ally)." },
      { name: "Keldon", description: "Dominaria variant. Strength +2, Constitution +1. Proficiency in Athletics and Strength saves. Resistant to cold." },
      { name: "Gavony", description: "Innistrad variant. All ability scores increase by 1." },
      { name: "Kessig", description: "Innistrad variant. Dexterity +1, Wisdom +1. Proficiency in Survival. Walking speed 40ft." },
      { name: "Nephalia", description: "Innistrad variant. Intelligence +1, Charisma +1. Proficiency in four skills or tools." },
      { name: "Stensia", description: "Innistrad variant. Strength +1, Constitution +1. Proficiency in Intimidation. HP increases by 2." }
    ],
    features: [
      { name: "Ability Score Increase", description: "Your ability scores each increase by 1." },
      { name: "Age", description: "Humans reach adulthood in their late teens and live less than a century." },
      { name: "Alignment", description: "Humans tend toward no particular alignment. The best and the worst are found among them." },
      { name: "Size", description: "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Your size is Medium." },
      { name: "Speed", description: "Your base walking speed is 30 feet." },
      { name: "Languages", description: "You can speak, read, and write Common and one extra language of your choice." }
    ]
  },
  elf: {
skillProficiencies: ['perception'],
    name: "Elf",
    description: "Elves are a magical people of otherworldly grace, living in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry.",
    subraces: [
      { name: "High Elf", description: "Intelligence +1. You know one cantrip from the Wizard spell list. Proficiency with longsword, shortsword, shortbow, and longbow. One extra language." },
      { name: "Wood Elf", description: "Wisdom +1. Proficiency with longsword, shortsword, shortbow, and longbow. Walking speed 35 feet. Mask of the Wild (hide in natural phenomena)." },
      { name: "Dark Elf (Drow)", description: "Charisma +1. Superior Darkvision 120ft. Sunlight Sensitivity. Know Dancing Lights cantrip. Can cast Faerie Fire and Darkness. Proficiency with rapiers, shortswords, and hand crossbows." },
      { name: "Pallid Elf", description: "Wildemount variant. Wisdom +1. Advantage on Investigation and Insight checks. Know Light cantrip. Can cast Sleep and Invisibility." },
      { name: "Mark of Shadow", description: "Eberron variant. Charisma +1. Add d4 to Stealth/Performance checks. Know Minor Illusion. Can cast Invisibility." },
      { name: "Astral Elf", description: "Spelljammer variant. Increase one score by 2, one by 1. Know Dancing Lights, Light, or Sacred Flame. Starlight Step (teleport 30ft)." },
      { name: "Sea Elf", description: "Swimming speed 30ft. Can speak, read, and write Aquan." },
      { name: "Shadar-Kai", description: "Shadowfell variant. Constitution +1. Necrotic Resistance. Blessing of the Raven Queen (teleport 30ft)." }
    ],
    features: [
      { name: "Ability Score Increase", description: "Your Dexterity score increases by 2." },
      { name: "Age", description: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old." },
      { name: "Alignment", description: "Elves love freedom, variety, and self-expression, so they lean strongly towards the gentler aspects of chaos. They value and protect others' freedom as well as their own, and are good more often than not." },
      { name: "Size", description: "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium." },
      { name: "Speed", description: "Your base walking speed is 30 feet." },
      { name: "Darkvision", description: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
      { name: "Fey Ancestry", description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep." },
      { name: "Trance", description: "Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. After resting in this way, you gain the same benefit a human would from 8 hours of sleep." },
      { name: "Keen Senses", description: "You have proficiency in the Perception skill." },
      { name: "Languages", description: "You can speak, read, and write Common and Elven." }
    ]
  },
  dwarf: {
skillProficiencies: [],
    name: "Dwarf",
    description: "Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs – these common threads unite all dwarves.",
    subraces: [
      { name: "Hill Dwarf", description: "Wisdom +1. Hit point maximum increases by 1, and it increases by 1 every time you gain a level." },
      { name: "Mountain Dwarf", description: "Strength +2. Proficiency with light and medium armor." },
      { name: "Mark of Warding", description: "Eberron variant. Intelligence +1. Add d4 to Investigation/Thieves' Tools. Can cast Alarm, Mage Armor, and Arcane Lock." },
      { name: "Duergar", description: "Strength +1, Constitution +2. Superior Darkvision 120ft. Sunlight Sensitivity. Can cast Enlarge/Reduce and Invisibility." }
    ],
    features: [
      { name: "Ability Score Increase", description: "Your Constitution score increases by 2." },
      { name: "Age", description: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years." },
      { name: "Alignment", description: "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play." },
      { name: "Size", description: "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium." },
      { name: "Speed", description: "Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor." },
      { name: "Darkvision", description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light." },
      { name: "Dwarven Resilience", description: "You have advantage on saving throws against poison, and you have resistance against poison damage." },
      { name: "Dwarven Combat Training", description: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer." },
      { name: "Tool Proficiency", description: "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools." },
      { name: "Stonecunning", description: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus." },
      { name: "Languages", description: "You can speak, read, and write Common and Dwarvish." }
    ]
  },
  dragonborn: {
    name: "Dragonborn",
    description: "Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids.",
    subraces: [
      { name: "Chromatic", description: "Fizban's variant. Increase one score by 2, one by 1. Choose Black, Blue, Green, Red, or White ancestry. Breath Weapon (30ft line). Resistance to damage type." },
      { name: "Metallic", description: "Fizban's variant. Increase one score by 2, one by 1. Choose Brass, Bronze, Copper, Gold, or Silver ancestry. Breath Weapon (15ft cone). Resistance to damage type." },
      { name: "Gem", description: "Fizban's variant. Increase one score by 2, one by 1. Choose Amethyst, Crystal, Emerald, Sapphire, or Topaz ancestry. Breath Weapon (15ft cone). Psionic Mind (telepathy)." },
      { name: "Draconblood", description: "Wildemount variant. Intelligence +2, Charisma +1. Darkvision 60ft. Forceful Presence (advantage on Intimidation/Persuasion)." },
      { name: "Ravenite", description: "Wildemount variant. Strength +2, Constitution +1. Darkvision 60ft. Vengeful Assault (reaction attack when hit)." }
    ],
    features: [
      { name: "Ability Score Increase", description: "Your Strength score increases by 2, and your Charisma score increases by 1." },
      { name: "Age", description: "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80." },
      { name: "Alignment", description: "Dragonborn tend towards extremes, making a conscious choice for one side or the other between Good and Evil." },
      { name: "Size", description: "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium." },
      { name: "Speed", description: "Your base walking speed is 30 feet." },
      { name: "Draconic Ancestry", description: "You are distantly related to a particular kind of dragon. Choose a type of dragon; this determines the damage and area of your breath weapon, and the type of resistance you gain." },
      { name: "Breath Weapon", description: "You can use your action to exhale destructive energy. It deals damage in an area according to your ancestry. DC = 8 + CON mod + proficiency bonus. 2d6 damage (increases at higher levels)." },
      { name: "Damage Resistance", description: "You have resistance to the damage type associated with your ancestry." },
      { name: "Languages", description: "You can read, speak, and write Common and Draconic." }
    ]
  },
  tiefling: {
    name: "Tiefling",
    description: "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus, overlord of the Nine Hells, into their bloodline.",
    subraces: [
      { name: "Asmodeus", description: "Intelligence +1. Know Thaumaturgy cantrip. Can cast Hellish Rebuke (2nd level) and Darkness." },
      { name: "Baalzebul", description: "Intelligence +1. Know Thaumaturgy. Can cast Ray of Sickness (2nd level) and Crown of Madness." },
      { name: "Dispater", description: "Dexterity +1. Know Thaumaturgy. Can cast Disguise Self (2nd level) and Detect Thoughts." },
      { name: "Fierna", description: "Wisdom +1. Know Friends cantrip. Can cast Charm Person (2nd level) and Suggestion." },
      { name: "Glasya", description: "Dexterity +1. Know Minor Illusion. Can cast Disguise Self (2nd level) and Invisibility." },
      { name: "Levistus", description: "Constitution +1. Know Ray of Frost. Can cast Armor of Agathys (2nd level) and Darkness." },
      { name: "Mammon", description: "Intelligence +1. Know Mage Hand. Can cast Tenser's Floating Disk (2nd level) and Arcane Lock." },
      { name: "Mephistopheles", description: "Intelligence +1. Know Mage Hand. Can cast Burning Hands (2nd level) and Flame Blade." },
      { name: "Zariel", description: "Strength +1. Know Thaumaturgy. Can cast Searing Smite (2nd level) and Branding Smite." },
      { name: "Feral", description: "Intelligence +1, Dexterity +2. Replaces Ability Score Increase." },
      { name: "Devil's Tongue", description: "Know Vicious Mockery. Can cast Charm Person (2nd level) and Enthrall. Replaces Infernal Legacy." },
      { name: "Hellfire", description: "Can cast Burning Hands (2nd level). Replaces Hellish Rebuke." },
      { name: "Winged", description: "You have bat-like wings sprouting from your shoulders. You have a flying speed of 30 feet while you aren't wearing heavy armor." }
    ],
    features: [
      { name: "Ability Score Increase", description: "Your Charisma score increases by 2." },
      { name: "Age", description: "Tieflings mature at the same rate as humans but live a few years longer." },
      { name: "Alignment", description: "Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment." },
      { name: "Size", description: "Tieflings are about the same size and build as humans. Your size is Medium." },
      { name: "Speed", description: "Your base walking speed is 30 feet." },
      { name: "Darkvision", description: "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light." },
      { name: "Hellish Resistance", description: "You have resistance to fire damage." },
      { name: "Languages", description: "You can speak, read, and write Common and Infernal." }
    ]
  },
  halfling: {
skillProficiencies: [],
    name: "Halfling",
    description: "The comforts of home are the goals of most halflings' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies. Others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples.",
    subraces: [
      { name: "Lightfoot", description: "Charisma +1. Naturally Stealthy (hide behind creatures larger than you)." },
      { name: "Stout", description: "Constitution +1. Stout Resilience (advantage vs poison, resistance to poison damage)." },
      { name: "Ghostwise", description: "Wisdom +1. Silent Speech (telepathy within 30ft)." },
      { name: "Lotusden", description: "Wildemount variant. Wisdom +1. Know Druidcraft. Can cast Entangle and Spike Growth. Timberwalk (tracking disadvantage)." },
      { name: "Mark of Hospitality", description: "Eberron variant. Charisma +1. Add d4 to Persuasion/Brewer's/Cook's. Know Prestidigitation. Can cast Purify Food and Drink." },
      { name: "Mark of Healing", description: "Eberron variant. Wisdom +1. Add d4 to Medicine/Herbalism. Can cast Cure Wounds and Lesser Restoration." }
    ],
    features: [
      { name: "Ability Score Increase", description: "Your Dexterity score increases by 2." },
      { name: "Age", description: "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century." },
      { name: "Alignment", description: "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression." },
      { name: "Size", description: "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is small." },
      { name: "Speed", description: "Your base walking speed is 25 feet." },
      { name: "Lucky", description: "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die. You must use the new result, even if it is a 1." },
      { name: "Brave", description: "You have advantage on saving throws against being frightened." },
      { name: "Nimble", description: "You can move through the space of any creature that is of a size larger than yours." },
      { name: "Languages", description: "You can speak, read, and write Common and Halfling." }
    ]
  },
  gnome: {
    name: "Gnome",
    description: "A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter.",
    subraces: [
      { name: "Forest", description: "Dexterity +1. Know Minor Illusion cantrip. Speak with Small Beasts." },
      { name: "Rock", description: "Constitution +1. Artificer's Lore (double proficiency on History checks for magical items). Tinker (create clockwork devices)." },
      { name: "Mark of Scribing", description: "Eberron variant. Charisma +1. Add d4 to History/Calligrapher's. Know Message. Can cast Comprehend Languages." },
      { name: "Deep Gnome (Svirfneblin)", description: "Dexterity +1. Superior Darkvision 120ft. Stone Camouflage (advantage on Stealth in rocky terrain)." }
    ],
    features: [
      { name: "Ability Score Increase", description: "Your Intelligence score increases by 2." },
      { name: "Age", description: "Gnomes mature at the same rate as humans, and most are expected to settle into adult life around the age of 40. They can live to 350 years on average." },
      { name: "Alignment", description: "Gnomes are generally Good. Those who tend towards Law are sages, engineers, researchers, scholars, investigators, or inventors." },
      { name: "Size", description: "Gnomes are between 3 and 4 feet tall and weigh around 40 pounds. Your size is Small." },
      { name: "Speed", description: "Your base walking speed is 25 feet." },
      { name: "Darkvision", description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light." },
      { name: "Gnome Cunning", description: "You have advantage on all Intelligence, Wisdom, and Charisma saves against magic." },
      { name: "Languages", description: "You can read, speak, and write Common and Gnomish." }
    ]
  },
  "half-elf": {
    name: "Half-Elf",
    description: "Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves.",
    subraces: [
      { name: "Mark of Detection", description: "Eberron variant. Wisdom +2, one other +1. Add d4 to Investigation/Insight. Can cast Detect Magic and Detect Poison and Disease." },
      { name: "Mark of Storm", description: "Eberron variant. Charisma +2, Dexterity +1. Add d4 to Acrobatics/Navigator's Tools. Lightning Resistance. Know Gust cantrip." }
    ],
    features: [
      { name: "Ability Score Increase", description: "Your Charisma score increases by 2, and two other ability scores of your choice each increase by 1." },
      { name: "Age", description: "Half-elves age at much the same rate as humans, reaching adulthood at the age of 20. They live much longer than humans, however, often exceeding 180 years." },
      { name: "Alignment", description: "Half-elves share the chaotic bent of their elven heritage. They both value personal freedom and creative expression." },
      { name: "Size", description: "Half-elves are more or less the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium." },
      { name: "Speed", description: "Your base walking speed is 30 feet." },
      { name: "Darkvision", description: "Thanks to your elven heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light." },
      { name: "Fey Ancestry", description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep." },
      { name: "Languages", description: "You can read, speak, and write Common, Elven, and one language of your choice." },
      { name: "Skill Versatility", description: "You gain proficiency in two skills of your choice." }
    ]
  },
  "half-orc": {
    name: "Half-Orc",
    description: "When alliances between humans and orcs are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. Some venture into the world to prove their worth among humans and other more civilized races.",
    subraces: [
      { name: "Mark of Finding", description: "Eberron variant. Wisdom +2, Constitution +1. Darkvision 60ft. Add d4 to Perception/Survival. Can cast Hunter's Mark." }
    ],
    features: [
      { name: "Ability Score Increase", description: "Your Strength score increases by 2, and your Constitution score increases by 1." },
      { name: "Age", description: "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years." },
      { name: "Alignment", description: "Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good." },
      { name: "Size", description: "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium." },
      { name: "Speed", description: "Your base walking speed is 30 feet." },
      { name: "Darkvision", description: "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light." },
      { name: "Menacing", description: "You gain proficiency in the Intimidation skill." },
      { name: "Relentless Endurance", description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead." },
      { name: "Savage Attacks", description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time." },
      { name: "Languages", description: "You can speak, read, and write Common and Orc." }
    ]
  },
  aarakocra: { name: "Aarakocra", description: "A winged people who originated on the Elemental Plane of Air, aarakocra soar through the sky wherever they wander.", subraces: [], features: [{ name: "Flight", description: "Because of your wings, you have a flying speed equal to your walking speed." }, { name: "Talons", description: "You have talons that you can use to make unarmed strikes. 1d6 + STR slashing damage." }] },
  aasimar: { name: "Aasimar", description: "Whether descended from a celestial being or infused with heavenly power, aasimar are mortals who carry a spark of the Upper Planes within their souls.", subraces: [{ name: "Protector", description: "Wisdom +1. Radiant Soul (fly 30ft, extra radiant damage)." }, { name: "Scourge", description: "Constitution +1. Radiant Consumption (shed light, extra radiant damage)." }, { name: "Fallen", description: "Strength +1. Necrotic Shroud (frighten enemies, extra necrotic damage)." }], features: [{ name: "Darkvision", description: "60 feet." }, { name: "Celestial Resistance", description: "Resistance to necrotic and radiant damage." }, { name: "Healing Hands", description: "Restore HP equal to level." }, { name: "Light Bearer", description: "Know Light cantrip." }] },
  bugbear: { name: "Bugbear", description: "Neither bugs nor bears, bugbears are the hulking cousins of goblins and hobgoblins.", subraces: [], features: [{ name: "Long-Limbed", description: "Melee reach +5 feet." }, { name: "Sneaky", description: "Proficiency in Stealth." }, { name: "Surprise Attack", description: "Extra 2d6 damage if target hasn't acted." }] },
  firbolg: { name: "Firbolg", description: "Distant cousins of giants, the first firbolgs wandered the primeval forests of the multiverse.", subraces: [], features: [{ name: "Firbolg Magic", description: "Cast Detect Magic and Disguise Self." }, { name: "Hidden Step", description: "Bonus action invisibility." }, { name: "Powerful Build", description: "Count as one size larger for carrying capacity." }, { name: "Speech of Beast and Leaf", description: "Communicate with beasts and plants." }] },
  goblin: { name: "Goblin", description: "A subterranean folk, goblins can be found in every corner of the multiverse.", subraces: [], features: [{ name: "Fury of the Small", description: "Extra damage to larger creatures." }, { name: "Nimble Escape", description: "Bonus action Disengage or Hide." }] },
  goliath: { name: "Goliath", description: "The first goliaths lived on the highest mountain peaks — far above the tree line.", subraces: [], features: [{ name: "Little Giant", description: "Proficiency in Athletics. Count as larger for carrying." }, { name: "Stone's Endurance", description: "Reduce damage by d12 + CON." }, { name: "Mountain Born", description: "Resistance to cold. Acclimated to high altitude." }] },
  hobgoblin: { name: "Hobgoblin", description: "Hobgoblins trace their origins to the ancient courts of the Feywild.", subraces: [], features: [{ name: "Fey Gift", description: "Bonus action Help action." }, { name: "Fortune from the Many", description: "Bonus to missed rolls based on allies nearby." }] },
  kenku: { name: "Kenku", description: "Feathered folk who resemble ravens, kenku are blessed with keen observation and supernaturally accurate memories.", subraces: [], features: [{ name: "Expert Duplication", description: "Advantage on forgery checks." }, { name: "Kenku Recall", description: "Proficiency in two skills. Advantage on checks." }, { name: "Mimicry", description: "Accurately mimic sounds heard." }] },
  kobold: { name: "Kobold", description: "Some of the smallest draconic creatures in the multiverse, kobolds display their draconic ancestry in the glint of their scales.", subraces: [], features: [{ name: "Draconic Cry", description: "Advantage on attacks for allies." }, { name: "Kobold Legacy", description: "Choose Craftiness, Defiance, or Draconic Sorcery." }] },
  lizardfolk: { name: "Lizardfolk", description: "The saurian lizardfolk are thought by some sages to be distant cousins of dragonborn and kobolds.", subraces: [], features: [{ name: "Bite", description: "1d6 + STR slashing damage." }, { name: "Hold Breath", description: "15 minutes." }, { name: "Natural Armor", description: "AC 13 + DEX." }, { name: "Hungry Jaws", description: "Bonus action bite for temp HP." }] },
  tabaxi: { name: "Tabaxi", description: "Created by the Cat Lord—a divine being of the Upper Planes—to blend the qualities of humanoids and cats.", subraces: [], features: [{ name: "Cat's Claws", description: "Climbing speed 20ft. 1d4 + STR slashing damage." }, { name: "Cat's Talent", description: "Proficiency in Perception and Stealth." }, { name: "Feline Agility", description: "Double speed for a turn." }] },
  tortle: { name: "Tortle", description: "Tortles have a saying: 'We wear our homes on our backs.'", subraces: [], features: [{ name: "Claws", description: "1d6 + STR slashing damage." }, { name: "Hold Breath", description: "1 hour." }, { name: "Natural Armor", description: "Base AC 17." }, { name: "Shell Defense", description: "+4 AC, advantage on STR/CON saves, prone." }] },
  triton: { name: "Triton", description: "Originally from the Elemental Plane of Water, many tritons entered the Material Plane centuries ago.", subraces: [], features: [{ name: "Amphibious", description: "Breathe air and water." }, { name: "Control Air and Water", description: "Cast Fog Cloud, Gust of Wind, Water Walk." }, { name: "Guardian of the Depths", description: "Resistance to cold damage." }] },
  warforged: { name: "Warforged", description: "The warforged were built to fight in the Last War. A warforged can be a steadfast ally, a cold-hearted killing machine, or a visionary in search of purpose.", subraces: [{ name: "Envoy", description: "Two abilities +1. Skill, Tool, Language proficiency. Integrated Tool." }, { name: "Juggernaut", description: "Strength +2. Iron Fists (1d4 unarmed). Powerful Build." }, { name: "Skirmisher", description: "Dexterity +2. Walking speed +5ft. Light Step." }], features: [{ name: "Constructed Resilience", description: "Advantage vs poison. Poison resistance. No sleep/eat/breathe." }, { name: "Integrated Protection", description: "+1 AC. Don/doff armor takes 1 hour." }] },
  orc: { name: "Orc", description: "Orcs trace their creation to the one-eyed god Gruumsh, an unstoppable warrior and powerful leader.", subraces: [], features: [{ name: "Adrenaline Rush", description: "Bonus action Dash. Temp HP." }, { name: "Relentless Endurance", description: "Drop to 1 HP instead of 0." }, { name: "Powerful Build", description: "Count as larger for carrying." }] },
  minotaur: { name: "Minotaur", description: "Minotaurs are barrel-chested humanoids with heads resembling those of bulls.", subraces: [], features: [{ name: "Horns", description: "1d6 + STR piercing damage." }, { name: "Goring Rush", description: "Bonus action horn attack after Dash." }, { name: "Labyrinthine Recall", description: "Always know north. Advantage on Survival to navigate." }] },
  centaur: { name: "Centaur", description: "Centaurs gallop throughout the multiverse and trace their origins to many different realms.", subraces: [], features: [{ name: "Charge", description: "Bonus action hoof attack after 30ft move." }, { name: "Equine Build", description: "Larger for carrying. Climbing costs extra." }, { name: "Hooves", description: "1d6 + STR bludgeoning damage." }] },
  changeling: { name: "Changeling", description: "With ever-changing appearances, changelings reside in many societies undetected.", subraces: [], features: [{ name: "Changeling Instincts", description: "Proficiency in two skills (Deception, Insight, etc)." }, { name: "Shapechanger", description: "Change appearance and voice as action." }] },
  kalashtar: { name: "Kalashtar", description: "The kalashtar are a compound race created from the union of humanity and renegade spirits from the plane of dreams.", subraces: [], features: [{ name: "Dual Mind", description: "Advantage on Wisdom saves." }, { name: "Mental Discipline", description: "Resistance to psychic damage." }, { name: "Mind Link", description: "Telepathy within 10ft per level." }] },
  shifter: { name: "Shifter", description: "Shifters are sometimes called weretouched, as many display bestial traits that emerge suddenly.", subraces: [{ name: "Beasthide", description: "CON +1, STR +1. Temp HP when shifting." }, { name: "Longstride", description: "DEX +1, WIS +1. Increase shift duration." }, { name: "Longtooth", description: "STR +1, WIS +1. Bite attack when shifting." }, { name: "Swiftstride", description: "DEX +1, CHA +1. Move reaction when shifting." }], features: [{ name: "Shifting", description: "Bonus action to gain temp HP and special traits." }] },
  locathah: { name: "Locathah", description: "Locathah are fishlike humanoids native to the oceans.", subraces: [], features: [{ name: "Leviathan Will", description: "Advantage vs charmed/frightened/paralyzed." }, { name: "Limited Amphibiousness", description: "Breathe air/water 1 hour." }, { name: "Natural Armor", description: "AC 12 + DEX." }] },
  grung: { name: "Grung", description: "Grungs are small, froglike humanoids.", subraces: [], features: [{ name: "Arboreal Leap", description: "Jumping speed." }, { name: "Poisonous Skin", description: "Poison save DC 12." }, { name: "Water Dependency", description: "Need immersion daily." }] },
  "yuan-ti": { name: "Yuan-Ti Pureblood", description: "Yuan-ti were originally humans who transformed themselves into serpent folk through ancient rituals.", subraces: [], features: [{ name: "Magic Resistance", description: "Advantage on saves vs spells." }, { name: "Poison Immunity", description: "Immune to poison damage/condition." }, { name: "Innate Spellcasting", description: "Poison Spray, Animal Friendship (snakes), Suggestion." }] },
  vedalken: { name: "Vedalken", description: "Vedalken are tall, blue-skinned humanoids from Kaladesh.", subraces: [], features: [{ name: "Vedalken Dispassion", description: "Advantage on INT/WIS/CHA saves." }, { name: "Tireless Precision", description: "Proficiency in one skill/tool." }] },
  loxodon: { name: "Loxodon", description: "Loxodons are often oasis of calm in Ravnica.", subraces: [], features: [{ name: "Loxodon Serenity", description: "Advantage vs charmed/frightened." }, { name: "Natural Armour", description: "AC 12 + CON." }, { name: "Trunk", description: "Grasp objects, 5ft reach." }] },
  leonin: { name: "Leonin", description: "The leonin guard the shining lands of Oreskos, a golden plain where even the gods rarely trespass.", subraces: [], features: [{ name: "Claws", description: "1d4 + STR slashing." }, { name: "Daunting Roar", description: "Frighten creatures within 10ft." }] },
  satyr: { name: "Satyr", description: "Originating in the Feywild, satyrs thrive on the energy of merriment.", subraces: [], features: [{ name: "Ram", description: "1d6 + STR bludgeoning." }, { name: "Magic Resistance", description: "Advantage on saves vs spells." }, { name: "Mirthful Leaps", description: "Add d8 to jumps." }] },
  fairy: { name: "Fairy", description: "Fairies are small fey humanoids.", subraces: [], features: [{ name: "Flight", description: "Flying speed equal to walking." }, { name: "Fairy Magic", description: "Druidcraft, Faerie Fire, Enlarge/Reduce." }] },
  harengon: { name: "Harengon", description: "Harengons are rabbit-like humanoids.", subraces: [], features: [{ name: "Hare-Trigger", description: "Add d4 to Initiative." }, { name: "Rabbit Hop", description: "Bonus action jump." }] },
  dhampir: { name: "Dhampir", description: "Dhampirs are living vampires.", subraces: [], features: [{ name: "Spider Climb", description: "Climb walking speed." }, { name: "Vampiric Bite", description: "Bite attack, gain temp HP." }] },
  hexblood: { name: "Hexblood", description: "Hexbloods are creatures created by hags.", subraces: [], features: [{ name: "Eerie Token", description: "Create a doll token." }, { name: "Hex Magic", description: "Disguise Self, Hex." }] },
  reborn: { name: "Reborn", description: "Reborn are those who have died and returned.", subraces: [], features: [{ name: "Deathless Nature", description: "Don't need to eat/breathe." }, { name: "Knowledge from a Past Life", description: "Advantage on checks once per long rest." }] }
};


// Helper function to get race data by key
export const getRaceData = (raceKey) => {
  return raceData[raceKey] || null;
};

