import { officialGameFacts } from './sources';
import type { GameCode } from './types';

export const CODE_CHECKED_AT = '2026-07-10';

export const activeCodes: GameCode[] = [];

export const watchCodes: GameCode[] = [
  {
    code: 'ROLL',
    reward: '100k coins, 250 brains, one luck boost, and one roll boost',
    status: 'watch',
    firstSeen: '2026-07-09',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Pocket Tactics active listing, PCGamesN no-working-code conflict',
    confidence: 'watch',
    notes:
      'Pocket Tactics and Sportskeeda list ROLL as working, while PCGamesN and Destructoid report no active working codes. Keep it in watch until official channels or a clearer current consensus confirms it.',
  },
];

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
    'No verified working Roll to Defend codes are confirmed by this site yet. ROLL is being watched because current trackers disagree, and it should move to active only after a second current source or official channel confirms it.',
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
