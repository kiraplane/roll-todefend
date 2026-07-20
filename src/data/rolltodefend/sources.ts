import type { DataSource } from './types';

export const CHECKED_AT = '2026-07-20';
export const OFFICIAL_CHECKED_AT = '2026-07-20';

export const officialGameFacts = {
  name: 'Roll to Defend',
  siteName: 'Roll to Defend Wiki',
  domain: 'https://www.roll-todefend.wiki',
  canonicalHost: 'www.roll-todefend.wiki',
  robloxPlaceId: '129559579789369',
  robloxUniverseId: '10168931576',
  creatorName: 'D:/Drive',
  creatorType: 'Roblox Group',
  creatorId: '861213399',
  genre: 'Roblox roll-based zombie tower defense / incremental simulator',
  status: 'Live Roblox experience',
  createdAt: '2026-05-14T23:02:41.665Z',
  updatedAt: '2026-07-14T00:01:06.2982936Z',
  maxPlayers: 6,
  activePlayersAtCheck: 4218,
  visitsAtCheck: 7411366,
  favoritesAtCheck: 18345,
  officialRobloxUrl:
    'https://www.roblox.com/games/129559579789369/Roll-to-Defend',
  officialGroupUrl: 'https://www.roblox.com/communities/861213399/D-Drive',
  robloxIconUrl:
    'https://tr.rbxcdn.com/180DAY-751015d2663478833737f9fc3a84615a/512/512/Image/Png/noFilter',
  robloxThumbnailUrl:
    'https://tr.rbxcdn.com/180DAY-0f7d72ef34f40f1729a9cf0535f14167/768/432/Image/Png/noFilter',
};

export const siteDescription =
  'Roll to Defend Wiki helps Roblox players roll better units, fight zombie waves, time zone buys, use luck boosts, track codes, and avoid fake links.';

export const officialSources: DataSource[] = [
  {
    type: 'official',
    label: 'Roll to Defend on Roblox',
    url: officialGameFacts.officialRobloxUrl,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Primary source for the title, place ID, creator, official gameplay loop, max players, and safe play link.',
  },
  {
    type: 'roblox_api',
    label: 'Roblox universe API snapshot',
    url: `https://games.roblox.com/v1/games?universeIds=${officialGameFacts.robloxUniverseId}`,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Confirmed universe ID, creation date, July 5 update timestamp, Simulation / Incremental Simulator category, live player count, visits, favorites, and max players.',
  },
  {
    type: 'roblox_api',
    label: 'Roblox badges API',
    url: `https://badges.roblox.com/v1/universes/${officialGameFacts.robloxUniverseId}/badges?limit=100&sortOrder=Asc`,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Confirmed roll milestones and rarity thresholds such as Roll 10 Times, Roll 100,000 Times, and Roll over 1/1B.',
  },
  {
    type: 'competitor',
    label: 'Earnaldo Roll to Defend hub',
    url: 'https://earnaldo.com/blog/roll-to-defend',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Competitor guide confirms the same roll-for-units, zombie waves, zones, luck bonuses, and offline income positioning.',
  },
  {
    type: 'competitor',
    label: 'Existing Roll to Defend wiki competitor',
    url: 'https://roll-to-defend.wiki/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Benchmarked same-domain competitor pattern: codes status, tier-list caution, source pages, guide hub, and roll planner intent.',
  },
  {
    type: 'youtube',
    label: 'Roll to Defend YouTube guide results',
    url: 'https://www.youtube.com/results?search_query=Roll+to+Defend+Roblox+guide',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used to select support videos for beginner, luck, upgrades, and noob-to-pro guide topics.',
  },
  {
    type: 'search',
    label: 'Long-tail search pass',
    url: 'https://www.google.com/search?q=Roll+to+Defend+Roblox+guide',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Current search results show demand for codes, wiki, beginner guide, how to play, luck, upgrades, zones, best units, tier list, Discord, Trello, and scripts safety.',
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
];
