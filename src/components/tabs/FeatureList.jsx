import React from 'react'

// Feature Icon by Type
const getFeatureIcon = (type) => {
  const icons = {
    ability: '💪',
    size: '📏',
    speed: '🏃',
    language: '🗣️',
    senses: '👁️',
    skill: '🎯',
    defense: '🛡️',
    rest: '😴',
    spell: '✨',
    weapon: '⚔️',
    tool: '🔧',
    hp: '❤️',
    armor: '👕',
    movement: '👣',
    special: '⭐',
    attack: '💥',
    weakness: '⚠️',
  }
  return icons[type] || '📋'
}

// Feature Type Color
const getFeatureColor = (type) => {
  const colors = {
    ability: 'text-red-400',
    size: 'text-blue-400',
    speed: 'text-green-400',
    language: 'text-purple-400',
    senses: 'text-yellow-400',
    skill: 'text-orange-400',
    defense: 'text-blue-400',
    rest: 'text-indigo-400',
    spell: 'text-pink-400',
    weapon: 'text-red-400',
    tool: 'text-gray-400',
    hp: 'text-red-400',
    armor: 'text-blue-400',
    movement: 'text-green-400',
    special: 'text-yellow-400',
    attack: 'text-red-400',
    weakness: 'text-orange-400',
  }
  return colors[type] || 'text-purple-300'
}

// Single Feature Card
export const FeatureCard = ({ feature, compact = false }) => {
  if (!feature) return null
  
  return (
    <div className={`bg-neutral-950 border border-purple-800 rounded-lg p-3 ${compact ? 'text-xs' : ''}`}>
      <div className="flex items-start gap-2">
        <span className="text-lg">{getFeatureIcon(feature.type)}</span>
        <div className="flex-1">
          <h4 className={`font-bold ${getFeatureColor(feature.type)} ${compact ? 'text-xs' : 'text-sm'}`}>
            {feature.name}
          </h4>
          <p className={`text-purple-400 ${compact ? 'text-[10px]' : 'text-xs'} mt-1`}>
            {feature.description}
          </p>
          {feature.options && (
            <div className={`text-purple-300 ${compact ? 'text-[10px]' : 'text-xs'} mt-1`}>
              Options: {feature.options.join(', ')}
            </div>
          )}
          {feature.weapons && (
            <div className={`text-purple-300 ${compact ? 'text-[10px]' : 'text-xs'} mt-1`}>
              Weapons: {feature.weapons.join(', ')}
            </div>
          )}
          {feature.armor && (
            <div className={`text-purple-300 ${compact ? 'text-[10px]' : 'text-xs'} mt-1`}>
              Armor: {feature.armor.join(', ')}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// List of Features
export const FeatureList = ({ features, title, compact = false }) => {
  if (!features || features.length === 0) return null
  
  return (
    <div className="space-y-2">
      {title && (
        <h3 className="text-sm font-bold text-purple-300 mb-2">{title}</h3>
      )}
      <div className="space-y-2">
        {features.map((feature, index) => (
          <FeatureCard 
            key={`${feature.name}-${index}`} 
            feature={feature} 
            compact={compact}
          />
        ))}
      </div>
    </div>
  )
}

// Race Features (combines base + subrace)
export const RaceFeatures = ({ raceKey, compact = false }) => {
  const { getRaceFeatures, getRaceData } = require('../../data/raceData')
  
  if (!raceKey) return null
  
  const race = getRaceData(raceKey)
  const features = getRaceFeatures(raceKey)
  
  return (
    <div className="space-y-3">
      <FeatureList 
        features={features} 
        title={`${race.name} Features`}
        compact={compact}
      />
    </div>
  )
}

export default FeatureList