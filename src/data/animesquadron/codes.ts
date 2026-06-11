import { CHECKED_AT, sources } from './sources';
import type { GameCode } from './types';

export const CODE_CHECKED_AT = '2026-06-11';

export const codes: GameCode[] = [
  {
    code: 'Tysm10kCCU!',
    reward: '3,500 Gems, 50 Trait Shards, and 3 Perfect Cubes',
    status: 'active',
    firstSeen: CODE_CHECKED_AT,
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: `${sources.beebomCodes.label}, ${sources.destructoidCodes.label}, ${sources.proGameGuidesCodes.label}`,
    notes:
      'Newest CCU milestone code confirmed across multiple June 2026 code trackers. Redeem before spending Perfect Cubes.',
  },
  {
    code: 'SorryForChanges!',
    reward: '20 Trait Shards and 10 Reroll Cubes',
    status: 'active',
    firstSeen: CODE_CHECKED_AT,
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: `${sources.beebomCodes.label}, ${sources.destructoidCodes.label}, ${sources.proGameGuidesCodes.label}`,
    notes:
      'New update-compensation code. Use it before deciding whether a trait or stat reroll is worth the cost.',
  },
  {
    code: '1kLikes!',
    reward: '2,000 Gems, 20 Trait Shards, and 30 Stat Rerolls',
    status: 'active',
    firstSeen: CHECKED_AT,
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: sources.beebomCodes.label,
    notes:
      'Still listed as active after the June 11 code refresh. Keep punctuation and capitalization exactly as shown.',
  },
  {
    code: 'SorryForBugs!',
    reward: 'Gems, Gold, Trait Shards, and Perfect Cubes',
    status: 'active',
    firstSeen: CHECKED_AT,
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: sources.beebomCodes.label,
    notes:
      'Reward amounts were not fully specified in the checked listing, so spend the rewards cautiously after redeeming.',
  },
  {
    code: '500Interested!',
    reward: '3,000 Gold, 500 Gems, and 15 Trait Shards',
    status: 'active',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: `${sources.beebomCodes.label}, ${sources.destructoidCodes.label}, ${sources.proGameGuidesCodes.label}`,
    notes: 'Cross-checked across multiple June 2026 Roblox code articles.',
  },
  {
    code: 'Tysm5kCCU!',
    reward: '2,500 Gems, 5,000 Gold, 50 Trait Shards, and 2 Perfect Cubes',
    status: 'active',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: `${sources.beebomCodes.label}, ${sources.destructoidCodes.label}, ${sources.proGameGuidesCodes.label}`,
    notes:
      'Best early code to redeem first because it combines summon currency, gold, trait materials, and Perfect Cubes.',
  },
  {
    code: 'SorryForDelay!',
    reward: '20 Trait Shards, 10 Reroll Cubes, and 1,000 Gold',
    status: 'active',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: `${sources.beebomCodes.label}, ${sources.destructoidCodes.label}, ${sources.proGameGuidesCodes.label}`,
    notes:
      'Useful before rerolling because it gives both gold and reroll materials.',
  },
  {
    code: 'EarlyAccess!',
    reward: '100 Trait Shards, 300 Gems, 30 Reroll Cubes, and 5,000 Gold',
    status: 'active',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: `${sources.beebomCodes.label}, ${sources.destructoidCodes.label}, ${sources.proGameGuidesCodes.label}`,
    notes:
      'High-value early access bundle. Redeem before making trait decisions.',
  },
  {
    code: 'ThankYouEA!',
    reward: '200 Gold and 2,000 Gems',
    status: 'active',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: `${sources.beebomCodes.label}, ${sources.destructoidCodes.label}, ${sources.proGameGuidesCodes.label}`,
    notes:
      'Spend gems after checking the current summon banner or first carry target.',
  },
  {
    code: '10KMembers!',
    reward: '25 Trait Shards and 1 Perfect Cube',
    status: 'active',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: `${sources.beebomCodes.label}, ${sources.destructoidCodes.label}, ${sources.proGameGuidesCodes.label}`,
    notes: 'Save the Perfect Cube for a unit you plan to keep using.',
  },
  {
    code: 'ThanksForSupport!',
    reward: 'Trait Shards and 25 Reroll Cubes',
    status: 'active',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: `${sources.beebomCodes.label}, ${sources.destructoidCodes.label}, ${sources.proGameGuidesCodes.label}`,
    notes:
      'Good reroll support, but avoid burning all rerolls on starter filler.',
  },
];

export const activeCodes = codes.filter((code) => code.status === 'active');
export const expiredCodes = codes.filter((code) => code.status === 'expired');
export const watchCodes = codes.filter((code) => code.status === 'watch');

export const codeCheckSummary = {
  checkedAt: CODE_CHECKED_AT,
  status: `${activeCodes.length} active codes tracked`,
  sourcesChecked: [
    sources.robloxGame,
    sources.beebomCodes,
    sources.destructoidCodes,
    sources.proGameGuidesCodes,
  ],
  reviewNotes: [
    'Anime Squadron codes are case-sensitive; copy them exactly, including punctuation.',
    'Redeem newest milestone and update-compensation codes before older launch codes.',
    'Use codes before rerolling traits or stats so the free shards, cubes, gems, and gold shape your first real spend.',
    'If a code fails, rejoin a fresh server and retry before assuming it is expired.',
    'No expired codes were confirmed during this June 11, 2026 check.',
  ],
};
