import type { TeamBuild } from './types';

export const teams: TeamBuild[] = [
  {
    id: 'beginner-safe-core',
    name: 'Beginner Safe Core',
    purpose: 'First stable clears',
    core: ['fortress-defender', 'shooter-carry', 'control-support'],
    substitutes: [
      'Your strongest tank or base defender',
      'Any upgraded shooter carry',
      'Any Frost or stun skill',
    ],
    notes:
      'Use this shape when you are losing before dawn. Stabilize the lane, then add damage.',
    confidence: 'medium',
  },
  {
    id: 'stage-push-control',
    name: 'Stage Push Control',
    purpose: 'Hard night waves',
    core: ['control-support', 'emp-tower-support', 'shooter-carry'],
    substitutes: [
      'Focused Laser for damage',
      'Meteor Strike for burst',
      'Machine Gun Tower upgrades',
    ],
    notes:
      'Control first, damage second. This template helps when enemies pile up faster than your carry can clear.',
    confidence: 'medium',
  },
  {
    id: 'boss-burst',
    name: 'Boss Burst Setup',
    purpose: 'Guild Boss and big enemies',
    core: ['dragon-burst', 'shooter-carry', 'control-support'],
    substitutes: [
      'Any high-upgraded Burning or Physical carry',
      'Frost Shield if survival is shaky',
      'EMP if boss waves interrupt your damage',
    ],
    notes:
      'Use burst only after survival is handled. A dead carry does less damage than a lower-tier unit protected by control.',
    confidence: 'medium',
  },
  {
    id: 'arena-tempo',
    name: 'Arena Tempo Team',
    purpose: 'Arena PvP pressure',
    core: ['tempo-flex', 'shooter-carry', 'emp-tower-support'],
    substitutes: [
      'Your highest-star attacker',
      'Any fast damage skill',
      'A shield slot if you lose trades',
    ],
    notes:
      'Arena rewards pressure, but do not remove all defense. If you win damage trades but lose base health, add a defensive slot.',
    confidence: 'needs_verification',
  },
];
