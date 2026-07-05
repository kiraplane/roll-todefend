import { officialGameFacts } from './sources';
import type { GameCode } from './types';

export const CODE_CHECKED_AT = '2026-07-05';

export const activeCodes: GameCode[] = [];

export const watchCodes: GameCode[] = [];

export const expiredCodes: GameCode[] = [];

export const codeCheckSummary = {
  checkedAt: CODE_CHECKED_AT,
  status:
    'No verified working Roll to Defend codes are confirmed by this site yet. Keep the page bookmarked, because codes demand is active and new Roblox games can add redeem rewards after milestones or updates.',
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
      label: 'Creator Exchange',
      url: 'https://creatorexchange.io/roblox-game/10168931576/roll-to-defend',
    },
    {
      label: 'Google / YouTube current results',
      url: 'https://www.google.com/search?q=Roll+to+Defend+codes',
    },
  ],
};
