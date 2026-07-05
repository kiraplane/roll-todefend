import { CHECKED_AT, OFFICIAL_CHECKED_AT, officialGameFacts } from './sources';
import type { TopicPage } from './types';

const commonImage = '/rolltodefend/hero.jpg';

export const topicPages: Record<string, TopicPage> = {
  units: {
    route: '/units',
    label: 'Units',
    eyebrow: 'Unit Wiki',
    title: 'Roll to Defend Units Wiki',
    seoTitle: 'Roll to Defend Units Wiki - Best Units, Roles and Source Status',
    seoDescription:
      'Track Roll to Defend units by role, rarity signal, wave value, upgrade timing, and source confidence while exact stats are being verified.',
    summary:
      'Units are the center of Roll to Defend, but exact public data is still thin. This hub explains how to judge units without copying fake tier lists.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/best-units-watch-guide',
      '/tier-list',
      '/guides/luck-and-group-bonus-guide',
    ],
    sections: [
      {
        heading: 'Judge units by the wave problem they solve',
        paragraphs: [
          'Roll to Defend asks players to roll units and fight zombies. That means a unit is useful when it helps the current defense: better damage, better uptime, safer pressure management, or a stronger path toward the next zone.',
          'Until reliable unit names, stats, and upgrade curves are available, this wiki should stay source-aware. It can explain roles and ranking criteria now, then add a real unit database once the evidence is strong enough.',
        ],
      },
      {
        heading: 'Launch data policy',
        paragraphs: [
          'The site should not publish hundreds of empty unit pages at launch. Use this hub, the best-units watch guide, and a tier-list status page first. Add individual unit pages only after names, roles, and values are verified in-game or from trustworthy community datasets.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does this wiki have a complete unit list?',
        answer:
          'Not yet. A full list needs verified Roll to Defend-specific unit names and stats.',
      },
      {
        question: 'What makes a Roll to Defend unit good?',
        answer:
          'Wave impact, role coverage, upgrade payback, rarity value, and low replacement risk are the best early signals.',
      },
    ],
  },
  'tier-list': {
    route: '/tier-list',
    label: 'Tier List',
    eyebrow: 'Ranking Watch',
    title: 'Roll to Defend Tier List Watch',
    seoTitle:
      'Roll to Defend Tier List - Best Units Watch and Ranking Criteria',
    seoDescription:
      'A cautious Roll to Defend tier list watch page that explains best-unit ranking criteria without inventing unverified unit stats.',
    summary:
      'Tier-list demand exists, but a real ranking needs verified unit data. This page captures the intent and explains what evidence is still needed.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/best-units-watch-guide',
      '/units',
      '/guides/luck-and-group-bonus-guide',
    ],
    sections: [
      {
        heading: 'Why this is a watch page first',
        paragraphs: [
          'Players search for Roll to Defend tier list and best units, but reliable public unit stats are not mature enough for a hard S-to-D ranking. Publishing invented ranks would get clicks in the short term and lose trust in the long term.',
          'The launch tier-list page should rank the evidence instead: official facts, in-game verification, current videos, community consensus, and watch-only claims. When the data improves, this route can become the full tier list without changing the URL.',
        ],
      },
      {
        heading: 'Current ranking criteria',
        paragraphs: [
          'A unit should move up when it solves zombie pressure, scales well with upgrades, remains useful after zone purchases, and appears consistently in current gameplay evidence. It should stay watch-only when only one comment, one screenshot, or one unrelated game result supports the claim.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there a real Roll to Defend tier list?',
        answer:
          'Not enough reliable public data yet. This page is a tier-list watch framework until exact unit evidence is stronger.',
      },
      {
        question: 'Will rankings be added later?',
        answer:
          'Yes. The route is prepared for a full tier list once unit names, roles, and upgrade values are source-backed.',
      },
    ],
  },
  zones: {
    route: '/zones',
    label: 'Zones',
    eyebrow: 'Progression Gates',
    title: 'Roll to Defend Zones and Upgrades',
    seoTitle: 'Roll to Defend Zones - When to Buy Zones and Upgrade Units',
    seoDescription:
      'Learn how Roll to Defend zones work as progression gates, when to buy a new zone, and when upgrades or rolls should come first.',
    summary:
      'Zones are one of the confirmed official systems. Use this hub to decide whether the next cash spend should be expansion, upgrades, or rolls.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/zones-and-upgrades-guide',
      '/planner',
      '/guides/offline-income-guide',
    ],
    sections: [
      {
        heading: 'Buy zones when recovery is realistic',
        paragraphs: [
          'A zone purchase is strongest when your current defense is stable and your money can recover after the buy. Expanding too early can leave you with harder zombie pressure and not enough cash to fix the problem.',
          'Use zones as planned progression gates. If your current units are struggling, upgrade or roll before expanding. If waves are comfortable and offline income is ready to refill the budget, the next zone becomes more attractive.',
        ],
      },
      {
        heading: 'Use the planner for spending decisions',
        paragraphs: [
          'Because exact formulas can change, the launch site includes a simple roll session planner instead of a fake optimized calculator. Players enter their own costs and income, then compare roll, upgrade, zone, and offline wait decisions.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are zones confirmed in Roll to Defend?',
        answer: 'Yes. The official Roblox description says players buy zones.',
      },
      {
        question: 'Should I buy zones as soon as possible?',
        answer:
          'Not always. Buy when your defense is stable and you can still afford useful actions afterward.',
      },
    ],
  },
  luck: {
    route: '/luck',
    label: 'Luck',
    eyebrow: 'Roll Quality',
    title: 'Roll to Defend Luck, Friends and Group Bonus',
    seoTitle:
      'Roll to Defend Luck Guide - Friends, Group Bonus and Boost Timing',
    seoDescription:
      'Use Roll to Defend luck bonuses with friends and group checks, plan better roll sessions, and avoid wasting money on endless rerolls.',
    summary:
      'Luck is confirmed by the official page. This hub explains how to use friend and group bonuses as part of a planned roll session.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/luck-and-group-bonus-guide',
      '/guides/best-units-watch-guide',
      '/planner',
    ],
    sections: [
      {
        heading: 'Luck needs a bankroll and a stop rule',
        paragraphs: [
          'The official page says playing with friends gives more luck and joining the group gives extra luck. Those bonuses are valuable only when you have enough money to roll and enough discipline to stop after a useful result.',
          'Plan the session before rolling: check bonuses, save a batch budget, define what unit improvement would count as a win, then return to upgrades or zones when the next roll is no longer the best spend.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I increase luck?',
        answer:
          'The official page points to playing with friends and joining the group for extra luck.',
      },
      {
        question: 'Should I roll forever during a luck bonus?',
        answer:
          'No. Stop when a unit meaningfully improves your defense or when upgrades and zones become stronger uses of money.',
      },
    ],
  },
  download: {
    route: '/download',
    label: 'Roblox',
    eyebrow: 'Official Access',
    title: 'Roll to Defend Roblox Page and Safe Play Links',
    seoTitle: 'Roll to Defend Roblox - Official Game Page and Safe Links',
    seoDescription:
      'Open Roll to Defend safely through the official Roblox page, check place ID 129559579789369, and avoid APKs, scripts, and fake rewards.',
    summary:
      'Use the official Roblox experience for Roll to Defend. The known place ID is 129559579789369 and the universe ID is 10168931576.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/beginner-guide',
      '/codes',
      '/guides/fake-scripts-warning',
    ],
    sections: [
      {
        heading: 'Use Roblox as the source of truth',
        paragraphs: [
          `The official game page is ${officialGameFacts.officialRobloxUrl}. Roblox API data checked on ${OFFICIAL_CHECKED_AT} confirmed the creator as ${officialGameFacts.creatorName}, the genre as Simulation / Incremental Simulator, and the max player count as ${officialGameFacts.maxPlayers}.`,
          'Avoid APK mirrors, script executors, fake free-Robux pages, and third-party login forms. A safe play link should keep you inside Roblox.',
        ],
      },
      {
        heading: 'Check the place ID when search results look crowded',
        paragraphs: [
          'Roll to Defend searches can sit beside other Roblox defense games, code trackers, and script pages. The place ID 129559579789369 is the anchor for this site. If a page is talking about another place ID, another developer, or a different game loop, treat it as unrelated.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I play Roll to Defend?',
        answer: 'Use the official Roblox page for place ID 129559579789369.',
      },
      {
        question: 'Does this site provide APK or script links?',
        answer:
          'No. This site only links official Roblox and safe guide pages.',
      },
    ],
  },
  discord: {
    route: '/discord',
    label: 'Discord / Trello',
    eyebrow: 'Community Links',
    title: 'Roll to Defend Discord and Trello Status',
    seoTitle: 'Roll to Defend Discord and Trello - Official Link Status',
    seoDescription:
      'Track Roll to Defend Discord and Trello status, verify official links safely, and avoid fake invite pages or copied boards.',
    summary:
      'Discord and Trello searches are useful, but official verification is thin. This page keeps players on safe link-checking habits.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/download',
      '/updates',
      '/guides/discord-trello-safety-guide',
    ],
    sections: [
      {
        heading: 'Official status is conservative',
        paragraphs: [
          'This site has not verified an official Trello board yet. Discord references exist in search and third-party sources, but players should start from the official Roblox game page or D:/Drive group before trusting any invite.',
          'A community channel can be helpful for updates and code-watch signals, but it should not become the source for unit stats, codes, or account actions unless the creator controls the link.',
        ],
      },
      {
        heading: 'Safety checklist',
        paragraphs: [
          'Never enter Roblox credentials on a Discord, Trello, or reward page. Avoid servers that require script executors, key systems, or free-Robux tasks. Use official links for support and purchases.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there an official Roll to Defend Trello?',
        answer: 'No official Trello has been verified by this site yet.',
      },
      {
        question: 'Where should I verify Discord links?',
        answer:
          'Start from the official Roblox page, the D:/Drive group, or another creator-controlled channel.',
      },
    ],
  },
  updates: {
    route: '/updates',
    label: 'Updates',
    eyebrow: 'Live Status',
    title: 'Roll to Defend Updates and Code Watch',
    seoTitle: 'Roll to Defend Updates - Latest Roblox Status and Code Watch',
    seoDescription:
      'Track Roll to Defend Roblox update signals, badges, code-watch status, units, zones, luck, and guide refresh priorities.',
    summary:
      'Roll to Defend is actively updated. This page records verified public signals and what the wiki should refresh after patches.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/codes', '/guides/latest-update-checklist', '/tier-list'],
    sections: [
      {
        heading: 'Official Roblox update signal',
        paragraphs: [
          `Roblox API data checked on ${OFFICIAL_CHECKED_AT} reports the experience was last updated at ${officialGameFacts.updatedAt}. The same snapshot showed ${officialGameFacts.activePlayersAtCheck.toLocaleString()} active players and ${officialGameFacts.visitsAtCheck.toLocaleString()} visits.`,
          'That confirms active momentum, but not detailed patch notes. The site should update claims only after checking official text, badges, in-game UI, and creator channels.',
        ],
      },
      {
        heading: 'Badge milestones worth watching',
        paragraphs: [
          'Public badges include roll-count milestones and rarity-threshold milestones. New badge additions can signal new goals, balance changes, or expanded late-game targets. They should be checked before writing new tier-list or progression claims.',
        ],
      },
    ],
    faq: [
      {
        question:
          'Did this site find verified active codes after the latest update?',
        answer:
          'No verified working public codes are listed as active by this site as of July 5, 2026.',
      },
      {
        question: 'What should be checked after updates?',
        answer:
          'Codes, units, tier list, luck, zones, badges, Roblox description text, and official community channels.',
      },
    ],
  },
};

export const topicPageList = Object.values(topicPages);

export function getTopicPage(key: keyof typeof topicPages) {
  return topicPages[key];
}
