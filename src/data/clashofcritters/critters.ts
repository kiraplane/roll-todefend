import { CHECKED_AT, sources } from './sources';
import type { Critter } from './types';

export const critters: Critter[] = [
  {
    id: 'shooter-carry',
    slug: 'shooter-carry',
    name: 'Shooter Carry Role',
    rarity: 'Core carry',
    element: 'Physical',
    role: 'DPS',
    tier: 'S',
    summary:
      'A steady damage role for players who need one reliable carry before spreading resources across extra attackers.',
    stats: {
      attack: 'High',
      hp: 'Mid',
      defense: 'Low',
    },
    skills: [
      {
        name: 'Focused damage window',
        description:
          'Use this role when your team survives the wave but enemies or bosses do not die fast enough.',
        type: 'Sustained damage',
      },
    ],
    foods: [],
    evolution: {
      stages: ['Starter carry', 'Main lane carry', 'Boss damage anchor'],
      trial: 'Upgrade only when your lanes already survive long enough.',
    },
    howToGet:
      'Use this profile as a role checklist for your strongest upgraded shooter, gunner, or weapon-focused hero.',
    strengths: [
      'Easy first upgrade target when damage is the blocker.',
      'Pairs well with Frost, EMP, and base-control effects.',
      'Useful in both stage pushing and early boss attempts.',
    ],
    weaknesses: [
      'Needs protection when waves reach the backline.',
      'Less urgent if your base breaks before damage uptime matters.',
    ],
    bestPartners: ['control-support', 'emp-tower-support', 'fortress-defender'],
    sources: [sources.googlePlay],
    lastChecked: CHECKED_AT,
    confidence: 'medium',
  },
  {
    id: 'control-support',
    slug: 'control-support',
    name: 'Control Support Role',
    rarity: 'Control pick',
    element: 'Frost',
    role: 'Control',
    tier: 'S',
    summary:
      'The safest support role when waves arrive too quickly and your tower or hero damage needs more time to work.',
    stats: {
      attack: 'Mid',
      hp: 'Mid',
      defense: 'Mid',
    },
    skills: [
      {
        name: 'Freeze or slow effect',
        description:
          'Choose this role when enemies stack up, leak through lanes, or force your carry to lose damage uptime.',
        type: 'Control defense',
      },
    ],
    foods: [],
    evolution: {
      stages: ['Slow support', 'Wave control', 'Boss tempo support'],
      trial: 'Prioritize when your base falls before your damage can cycle.',
    },
    howToGet:
      'Use this profile for heroes or skill packages that apply freeze, slow, stun, or other tempo control.',
    strengths: [
      'Makes tower defense setups more forgiving.',
      'Improves damage uptime for shooter and burst roles.',
      'Strong when enemies stack at chokepoints.',
    ],
    weaknesses: [
      'Does not replace a real damage carry.',
      'Can feel weak if enemies are already controlled but not dying.',
    ],
    bestPartners: ['shooter-carry', 'dragon-burst', 'fortress-defender'],
    sources: [sources.googlePlay],
    lastChecked: CHECKED_AT,
    confidence: 'medium',
  },
  {
    id: 'emp-tower-support',
    slug: 'emp-tower-support',
    name: 'EMP Tower Support Role',
    rarity: 'Utility support',
    element: 'Energy',
    role: 'Support',
    tier: 'A',
    summary:
      'A utility role built around tower value, wave interruption, and defensive stability rather than raw hero damage.',
    stats: {
      attack: 'Mid',
      hp: 'Mid',
      defense: 'Mid',
    },
    skills: [
      {
        name: 'EMP timing support',
        description:
          'Disrupts dangerous wave timing and gives towers more time to clear high-pressure nights.',
        type: 'Utility control',
      },
    ],
    foods: [],
    evolution: {
      stages: ['Tower helper', 'EMP controller', 'Base-defense specialist'],
      trial:
        'Best when your build already uses towers as a major damage source.',
    },
    howToGet:
      'Use this profile for Energy support heroes, EMP-heavy builds, or tower-first upgrade paths.',
    strengths: [
      'Supports base-first progression.',
      'Makes Machine Gun Tower and EMP Tower setups more reliable.',
      'Good utility pick for players who prefer defensive clears.',
    ],
    weaknesses: [
      'Needs a damage partner.',
      'Can be lower priority if you are stuck on boss damage.',
    ],
    bestPartners: ['shooter-carry', 'fortress-defender', 'control-support'],
    sources: [sources.googlePlay],
    lastChecked: CHECKED_AT,
    confidence: 'medium',
  },
  {
    id: 'dragon-burst',
    slug: 'dragon-burst',
    name: 'Dragon Burst Role',
    rarity: 'Burst carry',
    element: 'Burning',
    role: 'DPS',
    tier: 'A',
    summary:
      'A burst-damage role inspired by the official listing mention of a little dragon carrying a machine gun.',
    stats: {
      attack: 'High',
      hp: 'Low',
      defense: 'Low',
    },
    skills: [
      {
        name: 'Burst wave clear',
        description:
          'Adds burst wave clear and boss pressure when enemies are already slowed or packed together.',
        type: 'Burst damage',
      },
    ],
    foods: [],
    evolution: {
      stages: ['Burst helper', 'Wave nuker', 'Boss finisher'],
      trial: 'Upgrade after you have enough control to keep it alive.',
    },
    howToGet:
      'Use this profile for dragon, burning, explosive, or burst-damage heroes once your survival is stable.',
    strengths: [
      'Excellent when enemies cluster.',
      'Pairs naturally with Frost and EMP control.',
      'Good second carry once your first damage role is stable.',
    ],
    weaknesses: [
      'Fragile without defensive support.',
      'Not the first answer if the base dies too early.',
    ],
    bestPartners: ['control-support', 'emp-tower-support', 'fortress-defender'],
    sources: [sources.googlePlay],
    lastChecked: CHECKED_AT,
    confidence: 'medium',
  },
  {
    id: 'fortress-defender',
    slug: 'fortress-defender',
    name: 'Fortress Defender Role',
    rarity: 'Defense core',
    element: 'Physical',
    role: 'Tank',
    tier: 'A',
    summary:
      'A defensive role for players who need more base durability before damage upgrades matter.',
    stats: {
      attack: 'Low',
      hp: 'High',
      defense: 'High',
    },
    skills: [
      {
        name: 'Fortify first contact',
        description:
          'Improves the first point of contact so towers and shooters have time to clear the wave.',
        type: 'Defense',
      },
    ],
    foods: [],
    evolution: {
      stages: ['Base blocker', 'Wall support', 'Night survival anchor'],
      trial: 'Prioritize when enemies break through before your skills cycle.',
    },
    howToGet:
      'Use this profile for defensive heroes, sturdy soldiers, wall upgrades, or base-first investments.',
    strengths: [
      'Fixes early survival failures.',
      'Works with almost any damage carry.',
      'Good for players who are losing before dawn.',
    ],
    weaknesses: [
      'Does not solve slow boss kills by itself.',
      'Can delay progress if over-upgraded after lanes are stable.',
    ],
    bestPartners: ['shooter-carry', 'control-support', 'emp-tower-support'],
    sources: [sources.googlePlay],
    lastChecked: CHECKED_AT,
    confidence: 'medium',
  },
  {
    id: 'tempo-flex',
    slug: 'tempo-flex',
    name: 'Tempo Flex Role',
    rarity: 'Tempo utility',
    element: 'Lightning',
    role: 'Utility',
    tier: 'B',
    summary:
      'A flexible side role for players experimenting with speed, cleanup, and Arena-style pressure after the main team is stable.',
    stats: {
      attack: 'Mid',
      hp: 'Low',
      defense: 'Low',
    },
    skills: [
      {
        name: 'Cleanup tempo',
        description:
          'Adds flexible cleanup and pressure, especially when your main carry almost clears waves.',
        type: 'Utility damage',
      },
    ],
    foods: [],
    evolution: {
      stages: ['Cleanup helper', 'Tempo flex', 'Arena utility'],
      trial: 'Treat as a side investment until your main team is stable.',
    },
    howToGet:
      'Use this profile for speed-focused, lightning-style, or Arena pressure options.',
    strengths: [
      'Flexible filler when you need faster cleanup.',
      'Can help Arena-style teams pressure earlier.',
      'Works as a temporary utility slot.',
    ],
    weaknesses: [
      'Lower first-priority value than tank, control, or main damage.',
      'Needs investment to feel different from a generic damage slot.',
    ],
    bestPartners: ['shooter-carry', 'dragon-burst'],
    sources: [sources.googlePlay],
    lastChecked: CHECKED_AT,
    confidence: 'needs_verification',
  },
];

export const critterBySlug = new Map(
  critters.map((critter) => [critter.slug, critter])
);

export function getCritter(slug: string) {
  return critterBySlug.get(slug);
}
