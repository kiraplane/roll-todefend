import type { DataSource } from './types';

export const CHECKED_AT = '2026-06-27';

export const officialGameFacts = {
  name: 'Anime Card Farm',
  inGameName: 'Anime Card Factory',
  siteName: 'Anime Card Farm Wiki',
  domain: 'https://www.animecardfarm.wiki',
  canonicalHost: 'www.animecardfarm.wiki',
  robloxPlaceId: '125039473548047',
  robloxUniverseId: '10144587520',
  creatorName: 'dream without the vale',
  creatorType: 'Roblox Group',
  creatorId: '871710876',
  genre: 'Roblox idle card collector / tycoon',
  status: 'Live Roblox experience',
  createdAt: '2026-05-09T20:45:04.606Z',
  updatedAt: '2026-06-25T23:27:11.6321264Z',
  maxPlayers: 8,
  activePlayersAtCheck: 7677,
  visitsAtCheck: 4405478,
  favoritesAtCheck: 271413,
  officialRobloxUrl:
    'https://www.roblox.com/games/125039473548047/Anime-Card-Farm',
  officialGroupUrl:
    'https://www.roblox.com/communities/871710876/dream-without-the-vale',
  discordUrl: 'https://discord.com/invite/xyBFac6R7q',
};

export const siteDescription =
  'Anime Card Farm Wiki helps Roblox players use codes, choose pack upgrades, grow offline income, understand mutations, and avoid wrong-game guides.';

export const officialSources: DataSource[] = [
  {
    type: 'official',
    label: 'Anime Card Farm on Roblox',
    url: officialGameFacts.officialRobloxUrl,
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Primary source for the game name, developer group, live Roblox status, max players, and official gameplay description.',
  },
  {
    type: 'roblox_api',
    label: 'Roblox universe API snapshot',
    url: `https://games.roblox.com/v1/games?universeIds=${officialGameFacts.robloxUniverseId}`,
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Confirmed creation date, latest update timestamp, Simulation/Tycoon genre, visits, favorites, and live player count at research time.',
  },
  {
    type: 'codes_site',
    label: 'Beebom Anime Card Farm codes',
    url: 'https://beebom.com/anime-card-farm-codes/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Current code source with redemption steps and rewards; one trait-code spelling differs from several other sources.',
  },
  {
    type: 'codes_site',
    label: 'Roblox Den Anime Card Farm codes',
    url: 'https://robloxden.com/game-codes/anime-card-farm',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Cross-check for active codes, rewards, and case-sensitive entry.',
  },
  {
    type: 'codes_site',
    label: 'RoCodes Anime Card Farm codes',
    url: 'https://rocodes.gg/codes/anime-card-farm',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Cross-check for active code count and reward categories.',
  },
  {
    type: 'serper',
    label: 'Serper long-tail discovery',
    url: 'https://google.serper.dev/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Balanced autocomplete plus related/PAA pass for Anime Card Farm, Roblox, codes, wiki, and tier-list seeds.',
  },
  {
    type: 'youtube',
    label: 'Anime Card Farm guide video results',
    url: 'https://www.youtube.com/results?search_query=Anime+Card+Farm+Roblox+guide',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used for guide topic selection and interface/progression context, not as copied article text.',
  },
];

export const officialQuickLinks = [
  {
    label: 'Roblox',
    href: officialGameFacts.officialRobloxUrl,
  },
  {
    label: 'Group',
    href: officialGameFacts.officialGroupUrl,
  },
  {
    label: 'Discord',
    href: officialGameFacts.discordUrl,
  },
];
