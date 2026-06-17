import type { DataSource } from './types';

export const CHECKED_AT = '2026-06-15';

export const sources = {
  robloxGame: {
    type: 'official',
    label: 'Roblox game page',
    url: 'https://www.roblox.com/games/71132543521245/Anime-Squadron',
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Official store page for the public game identity, creator, genre, and official play link.',
  },
  robloxApi: {
    type: 'api',
    label: 'Roblox games API snapshot',
    url: 'https://games.roblox.com/v1/games?universeIds=8356066619',
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Used for early-access title, creator Komplex Studio, root place id, max players, Strategy/Tower Defense genre, and store description.',
  },
  beebomCodes: {
    type: 'guide_site',
    label: 'Beebom Anime Squadron codes',
    url: 'https://beebom.com/anime-squadron-codes/',
    checkedAt: '2026-06-17',
    confidence: 'medium',
    note: 'Rechecked June 17, 2026. Used as a code and redeem-flow cross-check, not copied as article prose.',
  },
  destructoidCodes: {
    type: 'guide_site',
    label: 'Destructoid Anime Squadron codes',
    url: 'https://www.destructoid.com/anime-squadron-codes/',
    checkedAt: '2026-06-17',
    confidence: 'medium',
    note: 'Rechecked June 17, 2026. Used for active-code overlap, inactive-code checks, and community-link caution.',
  },
  proGameGuidesCodes: {
    type: 'guide_site',
    label: 'Pro Game Guides Anime Squadron codes',
    url: 'https://progameguides.com/roblox/anime-squadron-codes/',
    checkedAt: '2026-06-17',
    confidence: 'medium',
    note: 'Rechecked June 17, 2026. Used for active-code overlap, inactive-code checks, and launch-stage search demand.',
  },
  pcgamesnCodes: {
    type: 'guide_site',
    label: 'PCGamesN Anime Squadron codes',
    url: 'https://www.pcgamesn.com/anime-squadron/codes',
    checkedAt: '2026-06-17',
    confidence: 'medium',
    note: 'Checked June 17, 2026. Used to cross-check the newest 40kCCU and 5kInterested code additions.',
  },
  pocketTacticsCodes: {
    type: 'guide_site',
    label: 'Pocket Tactics Anime Squadron codes',
    url: 'https://www.pockettactics.com/anime-squadron-codes',
    checkedAt: '2026-06-17',
    confidence: 'medium',
    note: 'Checked June 17, 2026. Used as a secondary current-code source.',
  },
  radioTimesCodes: {
    type: 'guide_site',
    label: 'Radio Times Anime Squadron codes',
    url: 'https://www.radiotimes.com/technology/gaming/anime-squadron-codes/',
    checkedAt: '2026-06-17',
    confidence: 'medium',
    note: 'Checked June 17, 2026. Used to confirm the current active list and older expired-code group.',
  },
  rolimonsGroup: {
    type: 'community',
    label: 'Komplex Studio Roblox group cross-check',
    url: 'https://www.rolimons.com/group/9190691',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used only as a public creator/group identity cross-check.',
  },
} satisfies Record<string, DataSource>;

export const officialGameFacts = {
  name: 'Anime Squadron',
  robloxTitle: '[Early Access] Anime Squadron',
  siteName: 'Anime Squadron Wiki',
  domain: 'https://www.animesquadron.wiki',
  developer: 'Komplex Studio',
  publisher: 'Komplex Studio',
  launchStatus: 'Early Access',
  rootPlaceId: '71132543521245',
  universeId: '8356066619',
  maxPlayers: 16,
  genre: ['Strategy', 'Tower Defense', 'Lane Battler'],
  officialRobloxUrl:
    'https://www.roblox.com/games/71132543521245/Anime-Squadron',
  officialWebsiteUrl:
    'https://www.roblox.com/games/71132543521245/Anime-Squadron',
  primarySource: sources.robloxGame,
};
