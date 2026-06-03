import { CHECKED_AT, sources } from './sources';
import type { GameCode } from './types';

export const codes: GameCode[] = [
  {
    code: 'ThankYou',
    reward: 'Free rewards',
    status: 'working',
    firstSeen: '2026-06',
    lastChecked: CHECKED_AT,
    sources: [sources.pocketTactics, sources.communityCodes],
    notes:
      'Newer community and guide-site reports list this as a working launch-period gift code.',
  },
  {
    code: 'HEARDUCK',
    reward: 'Free rewards',
    status: 'working',
    firstSeen: '2026-06',
    lastChecked: CHECKED_AT,
    sources: [sources.pocketTactics],
    notes:
      'Use the exact uppercase spelling; Duck Survival codes can be case-sensitive.',
  },
  {
    code: 'DUCK2M',
    reward: 'Free rewards',
    status: 'working',
    firstSeen: '2026-05',
    lastChecked: CHECKED_AT,
    sources: [sources.pocketTactics, sources.allThingsHow],
    notes: 'Often listed with launch and milestone code batches.',
  },
  {
    code: 'DUCK777',
    reward: '50 Diamonds, 1 S Gear Key, and 10 Blueprints',
    status: 'working',
    firstSeen: '2026-05',
    lastChecked: CHECKED_AT,
    sources: [sources.allThingsHow, sources.mrGuider],
    notes:
      'This is the clearest reward listing found across current code pages.',
  },
  {
    code: 'DUCK2026',
    reward: 'Free rewards',
    status: 'working',
    firstSeen: '2026-05',
    lastChecked: CHECKED_AT,
    sources: [sources.allThingsHow, sources.mrGuider, sources.communityCodes],
    notes:
      'A common launch-year code; redeem before spending early diamonds or keys.',
  },
  {
    code: 'DUCKOP2026',
    reward: 'Free rewards',
    status: 'working',
    firstSeen: '2026-05',
    lastChecked: CHECKED_AT,
    sources: [sources.allThingsHow, sources.mrGuider],
    notes:
      'If it fails, finish the tutorial and reopen the gift code screen before retrying.',
  },
  {
    code: 'DUCKIE',
    reward: 'Free rewards',
    status: 'working',
    firstSeen: '2026-05',
    lastChecked: CHECKED_AT,
    sources: [sources.allThingsHow, sources.mrGuider],
    notes: 'Listed as a newer code on several Duck Survival code pages.',
  },
  {
    code: 'DUCKOP',
    reward: 'Free rewards',
    status: 'working',
    firstSeen: '2026-05',
    lastChecked: CHECKED_AT,
    sources: [sources.allThingsHow, sources.mrGuider],
    notes:
      'Try this after DUCKOP2026 if you are clearing the full current code batch.',
  },
  {
    code: 'DuckGo',
    reward: 'Free rewards',
    status: 'working',
    firstSeen: '2026-05',
    lastChecked: CHECKED_AT,
    sources: [sources.allThingsHow, sources.communityCodes],
    notes:
      'The mixed-case spelling matters; copy it instead of typing it manually.',
  },
];

export const activeCodes = codes.filter((code) => code.status === 'working');
export const expiredCodes = codes.filter((code) => code.status === 'expired');
