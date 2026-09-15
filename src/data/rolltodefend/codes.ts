import { officialGameFacts } from './sources';
import type { GameCode } from './types';

export const CODE_CHECKED_AT = '2026-09-15';

export const activeCodes: GameCode[] = [
  {
    code: 'SORRY4DELAYZ',
    reward: '150k coins, 5k brains, and one stellar potion',
    status: 'active',
    firstSeen: '2026-07-25',
    lastChecked: '2026-09-15',
    sourceLabel: 'Pro Game Guides',
    confidence: 'medium',
    notes:
      'The only code retained as active by the September 6 Game.Guide pass. Redeem before a major rolling or rebirth session.',
  },
];

export const watchCodes: GameCode[] = [
  {
    code: 'SUMMER2026',
    reward: '40k coins, 250 brains, one luck boost, and one roll boost',
    status: 'watch',
    firstSeen: '2026-07-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'NerdsChalk September 1; Game.Guide September 6 conflict',
    confidence: 'low',
    notes:
      'A September 1 source retains it, but the newer September 6 tracker marks it expired. Keep it as a last retry, not a confirmed working code.',
  },
];

export const expiredCodes: GameCode[] = [
  {
    code: 'UPDATE3',
    reward: '150k coins, 5k brains, two roll boosts, and one stellar potion',
    status: 'expired',
    firstSeen: '2026-07-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Game.Guide September 6, 2026',
    confidence: 'medium',
    notes: 'Moved to expired by the current September code-history check.',
  },
  {
    code: 'ROLL',
    reward: '100k coins, 250 brains, one luck boost, and one roll boost',
    status: 'expired',
    firstSeen: '2026-07-09',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Game.Guide September 6, 2026',
    confidence: 'medium',
    notes: 'Moved to expired by the current September code-history check.',
  },
  {
    code: 'JULY4TH',
    reward: 'Former event reward',
    status: 'expired',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Pocket Tactics July 7, 2026 codes check',
    confidence: 'medium',
    notes:
      'Current Roll to Defend code trackers list this as removed/expired. It stays out of the active table until an official source reactivates it.',
  },
  {
    code: 'ADMINABUSED',
    reward: 'Former admin-event reward',
    status: 'expired',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Pocket Tactics July 7, 2026 codes check',
    confidence: 'medium',
    notes:
      'Reported as removed/expired by current guide sources. Keep it visible only as an expired-code explanation for players searching old videos.',
  },
];

export const codeCheckSummary = {
  checkedAt: CODE_CHECKED_AT,
  status:
    `${activeCodes.length} active Roll to Defend code is source-checked. SUMMER2026 remains a conflicting retry candidate; UPDATE3 and ROLL moved to expired history.`,
  sourcesChecked: [
    {
      label: 'Game.Guide codes — updated September 6, 2026',
      url: 'https://www.game.guide/roblox-codes/roll-to-defend',
    },
    {
      label: 'NerdsChalk codes — updated September 1, 2026',
      url: 'https://nerdschalk.com/roll-to-defend-codes/',
    },
    {
      label: 'Official Roblox game page',
      url: officialGameFacts.officialRobloxUrl,
    },
    {
      label: 'Roblox group',
      url: officialGameFacts.officialGroupUrl,
    },
    {
      label: 'Earnaldo codes status',
      url: 'https://earnaldo.com/blog/roll-to-defend-codes',
    },
    {
      label: 'Pocket Tactics codes status',
      url: 'https://www.pockettactics.com/roll-to-defend-codes',
    },
    {
      label: 'Destructoid codes status',
      url: 'https://www.destructoid.com/roll-to-defend-codes/',
    },
    {
      label: 'Pro Game Guides codes status',
      url: 'https://progameguides.com/roblox/roll-to-defend-codes/',
    },
    {
      label: 'PCGamesN codes status',
      url: 'https://www.pcgamesn.com/roll-to-defend/codes',
    },
    {
      label: 'Creator Exchange',
      url: 'https://creatorexchange.io/roblox-game/10168931576/roll-to-defend',
    },
    {
      label: 'Google / YouTube current results',
      url: 'https://www.google.com/search?q=Roll+to+Defend+codes',
    },
  ],
};
