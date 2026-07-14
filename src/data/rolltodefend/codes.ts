import { officialGameFacts } from './sources';
import type { GameCode } from './types';

export const CODE_CHECKED_AT = '2026-07-14';

export const activeCodes: GameCode[] = [
  {
    code: 'SUMMER2026',
    reward: '40k coins, 250 brains, one luck boost, and one roll boost',
    status: 'active',
    firstSeen: '2026-07-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Pocket Tactics, Destructoid, current YouTube code results',
    confidence: 'medium',
    notes:
      'Newest summer code cross-checked on July 14. Redeem before a rebirth or rare-roll push so both currency and boost rewards are useful.',
  },
  {
    code: 'UPDATE3',
    reward: '150k coins, 5k brains, two roll boosts, and one stellar potion',
    status: 'active',
    firstSeen: '2026-07-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Pocket Tactics, Destructoid, current YouTube code results',
    confidence: 'medium',
    notes:
      'Newest Update 3 code reported active in the July 14 source pass. It was not game-tested here, so keep it source-checked.',
  },
  {
    code: 'ROLL',
    reward: '100k coins, 250 brains, one luck boost, and one roll boost',
    status: 'active',
    firstSeen: '2026-07-09',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Pocket Tactics, Destructoid, Pro Game Guides',
    confidence: 'medium',
    notes:
      'Promoted on July 11 after Pocket Tactics, Destructoid, and Pro Game Guides all listed ROLL as the current active code. PCGamesN previously conflicted, so treat it as source-checked rather than game-tested.',
  },
];

export const watchCodes: GameCode[] = [];

export const expiredCodes: GameCode[] = [
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
    `${activeCodes.length} active Roll to Defend codes are source-checked. July 14 added SUMMER2026 and UPDATE3 from the newest public code trackers.`,
  sourcesChecked: [
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
