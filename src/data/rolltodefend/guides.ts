import { CHECKED_AT, officialGameFacts, siteDescription } from './sources';
import type { Guide, GuideCategory, GuideVideo } from './types';

const youtubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const videos = {
  howToPlay: {
    id: 'UzGrAltqQC4',
    title: 'How to Play Roll to Defend Roblox - Full Guide',
    channel: 'Quick Roblox guide creator',
    url: 'https://www.youtube.com/watch?v=UzGrAltqQC4',
    thumbnailUrl: youtubeThumbnail('UzGrAltqQC4'),
    publishedAt: '2026-07-04',
    checkedAt: CHECKED_AT,
  },
  maxLuck: {
    id: 'MyFbJZW4mXE',
    title: 'I Used MAX LUCK to Get STRONGEST Army in Roblox Roll to Defend!',
    channel: 'Quacks',
    url: 'https://www.youtube.com/watch?v=MyFbJZW4mXE',
    thumbnailUrl: youtubeThumbnail('MyFbJZW4mXE'),
    publishedAt: '2026-06-29',
    viewCountLabel: '37K+ views in current search results',
    checkedAt: CHECKED_AT,
  },
  luck: {
    id: 'rIzvxP_v1og',
    title:
      'How to Increase Your Luck and Boost Your Luck Faster in Roll to Defend Roblox',
    channel: 'Roblox tutorial creator',
    url: 'https://www.youtube.com/watch?v=rIzvxP_v1og',
    thumbnailUrl: youtubeThumbnail('rIzvxP_v1og'),
    publishedAt: '2026-07-04',
    checkedAt: CHECKED_AT,
  },
  noobToPro: {
    id: '-vUuHLcHlSg',
    title: 'NOOB To PRO in Roblox Roll to Defend!',
    channel: 'Roblox progression creator',
    url: 'https://www.youtube.com/watch?v=-vUuHLcHlSg',
    thumbnailUrl: youtubeThumbnail('-vUuHLcHlSg'),
    publishedAt: '2026-06-30',
    checkedAt: CHECKED_AT,
  },
} satisfies Record<string, GuideVideo>;

const localCover = '/rolltodefend/hero.jpg';
const videoCover = (video: GuideVideo) => video.thumbnailUrl;

export { siteDescription };

export const guideCategoryIntro: Record<GuideCategory, string> = {
  Beginner:
    'Start with rolling units, placing enough damage, learning zombie pressure, and buying zones only when your income can recover.',
  Codes:
    'Track the current code status without importing fake lists or codes from different Roblox defense games.',
  Units:
    'Judge units by role, damage uptime, rarity, upgrade cost, and whether the next zone will replace them.',
  Zones:
    'Use zone purchases as progression gates, not impulse buys that drain your upgrade budget.',
  Luck: 'Understand group luck, friend luck, boost timing, and when rolling harder actually helps.',
  Economy:
    'Turn active waves and offline income into a repeatable loop for rolls, upgrades, and zones.',
  Safety:
    'Avoid fake Discord links, copied Trello boards, script pages, Robux traps, and wrong-game guides.',
  Updates:
    'Track Roblox update signals, badge milestones, code-watch changes, and new guide priorities.',
};

export const relatedRouteLabels: Record<string, string> = {
  '/': 'Roll to Defend Wiki',
  '/codes': 'Roll to Defend Codes',
  '/guides': 'All Roll to Defend Guides',
  '/units': 'Units Wiki',
  '/tier-list': 'Tier List Watch',
  '/zones': 'Zones and Upgrades',
  '/luck': 'Luck and Boosts',
  '/planner': 'Roll Session Planner',
  '/download': 'Official Roblox Page',
  '/discord': 'Discord and Trello Status',
  '/updates': 'Update Tracker',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/how-to-play': 'How to Play',
  '/guides/codes-status-guide': 'Codes Status Guide',
  '/guides/best-units-watch-guide': 'Best Units Watch',
  '/guides/zones-and-upgrades-guide': 'Zones and Upgrades Guide',
  '/guides/luck-and-group-bonus-guide': 'Luck Guide',
  '/guides/offline-income-guide': 'Offline Income Guide',
  '/guides/discord-trello-safety-guide': 'Discord and Trello Safety',
  '/guides/fake-scripts-warning': 'Fake Scripts Warning',
};

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Roll to Defend Beginner Guide',
    seoTitle: 'Roll to Defend Beginner Guide - Units, Zones, Luck and Waves',
    seoDescription:
      'Start Roll to Defend on Roblox with a clean beginner route for rolling units, fighting zombies, buying zones, using luck, and spending offline income.',
    summary:
      'A first-session route for new players: roll enough units to hold the lane, upgrade deliberately, buy zones at the right time, use luck with a plan, and avoid fake code or script shortcuts.',
    category: 'Beginner',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.howToPlay),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Built from the official Roblox description, Roblox universe and badge APIs, current search results, competitor pages, and recent YouTube guide results.',
    video: videos.howToPlay,
    videoSearchQueries: [
      'Roll to Defend beginner guide',
      'Roll to Defend how to play',
      'Roll to Defend Roblox tutorial',
    ],
    tags: ['Roblox', 'First Session', 'Zombie Waves'],
    relatedRoutes: [
      '/units',
      '/zones',
      '/luck',
      '/planner',
      '/guides/offline-income-guide',
    ],
    body: [
      {
        heading: 'Treat the first hour as a defense setup',
        paragraphs: [
          'Roll to Defend is a Roblox incremental simulator wrapped around a zombie defense loop. The official page gives the shortest version of the game: roll units, fight zombies, buy zones, play with friends for more luck, join the group for extra luck, and keep earning income offline. That means the first hour is not only about pulling the rarest unit. It is about building a defense that survives long enough to make the next roll and zone purchase possible.',
          'Start by rolling enough units to cover the early pressure. If a unit helps hold zombies back and keeps income moving, it deserves attention even when it is not your dream pull. If a shiny pull does not change survival or income, do not drain every upgrade resource into it just because the rarity looks good.',
        ],
        bullets: [
          'Roll until your lane is stable instead of chasing perfect luck immediately.',
          'Upgrade the unit or system that fixes the current wave problem.',
          'Buy a zone only when you can still recover money for rolls and upgrades.',
          'Before leaving Roblox, spend offline income in a way that sets up the next session.',
        ],
      },
      {
        heading: 'Use badge milestones as a reality check',
        paragraphs: [
          'Public Roblox badges show how much the game is built around repeated rolls. The badge ladder includes Roll 10 Times, Roll 100 Times, Roll 1,000 Times, Roll 10,000 Times, and much rarer milestones beyond that. There are also rarity-threshold badges such as Roll over 1/10K, 1/1M, 1/100M, and 1/1B. This tells us that progression is supposed to involve many attempts, not one magical first pull.',
          'Because rolling volume matters, a beginner should avoid spending as if every pull is permanent. Upgrade enough to keep clearing, then roll again when your economy supports it. The best early account is flexible: it can accept a good unit, move to a better zone, and keep earning while offline.',
        ],
      },
      {
        heading: 'Buy zones when the next area helps more than another roll',
        paragraphs: [
          'Zones are the main progression gate after your first units are working. A zone purchase is good when it unlocks better income, better space, better pressure management, or a clearer next goal. It is weak when it leaves you broke with under-upgraded units and no money to respond to stronger zombie waves.',
          'A simple beginner rule is to compare the zone cost against your next two useful actions. If buying the zone means you cannot roll or upgrade afterward, wait. If your current defense is stable and offline income can refill the gap, the zone is probably the better long-term move.',
        ],
      },
      {
        heading: 'Do not let code pages or scripts steer your first run',
        paragraphs: [
          'Current search demand for Roll to Defend codes is strong, but no verified working public code list is confirmed by this site yet. That makes fake code pages and script pages tempting. Avoid them. If a page asks for a script executor, account login, password, extension, or Robux shortcut, it is outside the safe Roblox flow.',
          'Use codes as a watch item, not a plan. The reliable beginner plan is still the official loop: roll units, defend against zombies, buy zones, use luck bonuses, and let offline income carry the next session.',
        ],
      },
    ],
    faq: [
      {
        question: 'What type of game is Roll to Defend?',
        answer:
          'It is a Roblox roll-based zombie defense and incremental simulator. Players roll random units, fight zombie waves, buy zones, use luck bonuses, and earn income offline.',
      },
      {
        question: 'What should beginners focus on first?',
        answer:
          'Stabilize the defense with usable units, upgrade what solves the current wave, then buy zones only when you can still recover money for more rolls.',
      },
      {
        question: 'Are codes required to progress?',
        answer:
          'No. Codes are not confirmed as a reliable public progression path right now, so the site treats them as a watch item instead of a required beginner step.',
      },
    ],
  },
  {
    slug: 'how-to-play',
    title: 'How to Play Roll to Defend',
    seoTitle: 'How to Play Roll to Defend Roblox - Full Gameplay Guide',
    seoDescription:
      'Learn how Roll to Defend works: rolling units, placing damage, surviving zombie waves, buying zones, stacking luck, and using offline income.',
    summary:
      'A plain-English explanation of the game loop for players who searched how to play Roll to Defend before committing time to the Roblox experience.',
    category: 'Beginner',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.howToPlay),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'Uses official Roblox wording and recent how-to-play YouTube results as source context.',
    video: videos.howToPlay,
    videoSearchQueries: [
      'Roll to Defend how to play',
      'How to Play Roll to Defend Roblox',
    ],
    tags: ['How to Play', 'Roblox', 'Core Loop'],
    relatedRoutes: ['/guides/beginner-guide', '/units', '/zones', '/luck'],
    body: [
      {
        heading: 'The loop is roll, defend, earn, expand',
        paragraphs: [
          'Roll to Defend starts with a roll machine fantasy: you are trying to pull units strong enough to hold back zombies. The defense part matters because rolls are not just collectibles. A unit has to help your lane, your wave clear, or your income route. If it does not improve one of those jobs, it may be a temporary pull rather than a long-term carry.',
          'After the first useful pulls, the game becomes a loop. Roll for units, use those units to fight zombies, earn money from active and offline progress, buy zones, and repeat the process with better opportunities. The official page also points to luck from friends and the group, so social bonuses are part of the intended progression.',
        ],
      },
      {
        heading: 'Units are tools, not just rarity trophies',
        paragraphs: [
          'A higher rarity unit is exciting, but new players should still ask what role it fills. Does it hit enough zombies? Does it solve a wave where you were leaking enemies? Does it stay useful after the next zone? A unit that answers yes is worth upgrades. A unit that only looks rare can wait until your economy is stronger.',
          'Because Roll to Defend is young and public unit data is thin, this site avoids pretending every stat is known. The right guide style is decision-first: judge units by what they do for your current run, then update rankings as verified names and values become available.',
        ],
      },
      {
        heading: 'Zones change the cost of mistakes',
        paragraphs: [
          'Buying a new zone can feel like progress by itself, but it can also expose a weak team. If the zone raises pressure or changes the layout before your core units are ready, the purchase may slow you down. If your current defense is comfortable and money refills quickly, the next zone can become the best use of cash.',
          'Use offline income as a buffer. When you come back with enough money to both expand and recover, zones feel much smoother than when you spend your last cash and hope the next wave is kind.',
        ],
      },
      {
        heading: 'Luck boosts are best during active rolling',
        paragraphs: [
          'The official description tells players to play with friends for more luck and join the group for extra luck. Those bonuses are most useful when you are actively rolling and ready to evaluate the results. Turning on or chasing luck without enough money to roll is mostly wasted momentum.',
          'Plan a luck session by saving enough money for several rolls, checking whether friends or group bonuses are active, and stopping when a unit actually improves the run. Infinite chasing is how players spend the whole session and still fail to upgrade the defense.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Roll to Defend a tower defense game?',
        answer:
          'It uses zombie defense and unit placement ideas, but the official Roblox genre is Simulation / Incremental Simulator and the main twist is rolling random units.',
      },
      {
        question: 'Does Roll to Defend have offline income?',
        answer:
          'Yes. The official description says players continue to earn income offline, so end each session with your strongest earning setup active.',
      },
      {
        question: 'Should I roll or buy a zone first?',
        answer:
          'Roll or upgrade until the current defense is stable. Buy a zone when you can afford the expansion and still recover enough money to improve units afterward.',
      },
    ],
  },
  {
    slug: 'codes-status-guide',
    title: 'Roll to Defend Codes Status Guide',
    seoTitle: 'Roll to Defend Codes - Current Status and Safe Redeem Checks',
    seoDescription:
      'Check whether Roll to Defend has working Roblox codes, how to verify new codes, and how to avoid fake code lists, copied rewards, and unsafe links.',
    summary:
      'The honest code answer: no verified working public Roll to Defend codes are confirmed by this site yet, but the page explains where to check and what not to trust.',
    category: 'Codes',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Cross-checked official Roblox page, current code-search results, Earnaldo status pages, Creator Exchange, and YouTube code results.',
    videoSearchQueries: [
      'Roll to Defend codes',
      'Roll to Defend Roblox codes',
      'Roll to Defend code redeem',
    ],
    tags: ['Codes', 'Safety', 'Roblox'],
    relatedRoutes: [
      '/codes',
      '/updates',
      '/discord',
      '/guides/fake-scripts-warning',
    ],
    body: [
      {
        heading: 'Current answer: no verified working codes yet',
        paragraphs: [
          'Roll to Defend has strong code-search demand, but this site has not confirmed a reliable working public code list. The official Roblox page checked on July 5, 2026 describes the gameplay loop, luck bonuses, group bonus, and offline income, but it does not publish a code list in the public description.',
          'That may change. Young Roblox games often add codes after updates, like milestones, or Discord announcements. The right approach is to keep a code status page live, refresh it often, and refuse to import unverified strings just because search traffic wants an answer.',
        ],
      },
      {
        heading: 'Where real codes would usually appear first',
        paragraphs: [
          'If Roll to Defend adds codes, the safest sources are the Roblox game description, the D:/Drive group, an official Discord or social link listed by the creator, or a visible in-game code panel. A random page that never names the place ID, universe ID, creator, or current update state is weaker evidence.',
          'Before trusting a new code, check whether multiple sources point to the exact same string and whether they are clearly talking about Roll to Defend, place ID 129559579789369. Similar defense or anime games can create misleading search results.',
        ],
        bullets: [
          'Verify the game name and place ID before copying a code.',
          'Do not enter Roblox credentials on third-party reward pages.',
          'Treat script pages and executor downloads as unsafe, not as code sources.',
          'Prefer official creator channels over reposted code tables.',
        ],
      },
      {
        heading: 'How this page should evolve after codes appear',
        paragraphs: [
          'Once working codes are verified, this page should list active, watch, and expired codes separately. Each entry should include the reward, checked date, source label, and confidence. It should also keep old codes out of the active table once they expire.',
          'Until then, the best page is a clear code-watch article. It answers the search intent without making up rewards, and it teaches players how to avoid copied code lists from other Roblox games.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are there working Roll to Defend codes today?',
        answer:
          'No verified working public codes are confirmed by this site as of July 10, 2026. ROLL remains a watchlist code because current trackers disagree.',
      },
      {
        question: 'Should the site still have a codes page?',
        answer:
          'Yes. Players search for codes heavily, so a transparent status page is better than leaving the query to fake lists.',
      },
      {
        question: 'Can I use codes from other defense games?',
        answer:
          'No. Codes are game-specific unless the Roll to Defend creator confirms otherwise.',
      },
    ],
  },
  {
    slug: 'best-units-watch-guide',
    title: 'Roll to Defend Best Units Watch',
    seoTitle:
      'Roll to Defend Best Units - Tier List Watch and Ranking Criteria',
    seoDescription:
      'Judge the best Roll to Defend units by role, wave value, rarity, luck cost, upgrade timing, and source confidence while full stats are still thin.',
    summary:
      'A safe alternative to a fake unit tier list: rank units by what they solve in your current run, then update the page when verified names and stats exist.',
    category: 'Units',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.maxLuck),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'popular_youtube',
    sourceNotes:
      'Tier-list demand exists, but verified unit datasets are thin. Uses official gameplay, badge data, and current max-luck videos as context without copying unverified ranks.',
    video: videos.maxLuck,
    videoSearchQueries: [
      'Roll to Defend best units',
      'Roll to Defend tier list',
      'Roll to Defend max luck units',
    ],
    tags: ['Units', 'Tier List Watch', 'Luck'],
    relatedRoutes: [
      '/units',
      '/tier-list',
      '/luck',
      '/guides/luck-and-group-bonus-guide',
    ],
    body: [
      {
        heading: 'The best unit is the one that fixes the current wave',
        paragraphs: [
          'Until full Roll to Defend unit stats are verified, the strongest ranking system is practical. A unit is good when it helps you survive the zombie wave you are currently losing to, improves your ability to farm money, or stays useful after the next zone purchase. Rarity is part of the story, but it is not the whole ranking.',
          'Ask what the unit does. A fast attacker may protect the early lane better than a slow rare unit. A heavier unit may become valuable once zombies have more health. A unit that looks strong but cannot cover the right pressure point may be a flex pull instead of a carry.',
        ],
      },
      {
        heading: 'Use a tier-list framework, not copied names',
        paragraphs: [
          'Search results already show tier-list demand, and competitor pages are building early ranking frameworks. That does not mean the site should publish a giant S-tier table with invented values. Roll to Defend is still new, and exact unit names, damage numbers, and upgrade economics need in-game or source-backed verification.',
          'The launch version should use a watch framework: role, rarity signal, wave impact, upgrade cost, replacement risk, and source confidence. As reliable unit data arrives, the page can turn into a real tier list without betraying early readers.',
        ],
        bullets: [
          'Role: what zombie pressure does the unit solve?',
          'Uptime: does it keep damaging when waves get crowded?',
          'Cost: can upgrades pay back before the next zone?',
          'Replacement: will the next roll session likely beat it?',
          'Evidence: is the claim official, tested, or just a copied comment?',
        ],
      },
      {
        heading: 'Match the unit to the wave problem',
        paragraphs: [
          'For now, the most useful best-units advice is scenario based. If the first zombies reach the line too fast, a control or quick-hit unit can be better than a rare unit that takes too long to matter. If the line is stable but the final group survives, a heavier damage unit becomes the better upgrade.',
          'Use three checkpoints before spending again: did the new unit change the wave you were losing, did its first upgrade feel cheaper than another roll session, and does it still help after buying the next zone? If the answer is no, keep it as a temporary slot instead of making it the account carry.',
        ],
        bullets: [
          'Early lane leaks: prioritize quick attackers or control.',
          'Money stalls: stop rolling and buy the upgrade that improves income or clear speed.',
          'Next-zone pressure: keep one flexible unit slot rather than maxing a short-lived pull.',
          'Boss-style waves: add heavier damage only after the normal wave is safe.',
        ],
      },
      {
        heading: 'Luck sessions should have stop rules',
        paragraphs: [
          'Max-luck videos are useful because they show what players care about: chasing the strongest army. For normal players, the key is a stop rule. Roll during a luck window when you have enough money to make several attempts, then stop when a unit meaningfully improves the defense or when the next useful upgrade becomes cheaper than more rolling.',
          'Without a stop rule, luck turns into a trap. You can spend the whole session chasing a rarer unit while the zombies are still beating the same weak defense.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Roll to Defend Wiki have a full unit tier list?',
        answer:
          'Not yet. The site has a tier-list watch framework and will add exact rankings when unit names, stats, and upgrade data are reliable.',
      },
      {
        question: 'Are rare units always better?',
        answer:
          'Rare units are usually important, but the best unit for a player is the one that improves wave survival and progression at the current account stage.',
      },
      {
        question: 'What should I do after pulling a strong unit?',
        answer:
          'Test whether it improves the wave problem, upgrade it enough to feel the difference, then compare the next roll cost against zone or upgrade progress.',
      },
    ],
  },
  {
    slug: 'zones-and-upgrades-guide',
    title: 'Roll to Defend Zones and Upgrades Guide',
    seoTitle:
      'Roll to Defend Zones Guide - When to Buy Zones and Upgrade Units',
    seoDescription:
      'Learn when to buy zones in Roll to Defend, when to upgrade units first, and how to avoid expanding before your zombie defense is ready.',
    summary:
      'A zone timing guide for players deciding whether the next cash spend should be expansion, more rolls, or upgrades.',
    category: 'Zones',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on official Roblox gameplay copy, current zone long-tail demand, and public guide/video results.',
    videoSearchQueries: [
      'Roll to Defend zones',
      'Roll to Defend upgrades',
      'When to buy zones Roll to Defend',
    ],
    tags: ['Zones', 'Upgrades', 'Economy'],
    relatedRoutes: [
      '/zones',
      '/planner',
      '/guides/offline-income-guide',
      '/units',
    ],
    body: [
      {
        heading: 'Zones are progress gates, not shopping buttons',
        paragraphs: [
          'The official game page says players buy zones, which makes zones one of the clearest wiki topics. A zone purchase is supposed to open the next stage of progress. It should not leave you unable to roll, unable to upgrade, or unable to handle the next zombie pressure.',
          'Think of a zone as a gate. Walk through when your current defense has spare strength and your money can recover. Wait when zombies are already leaking or when the zone cost consumes all the cash you needed for the unit that actually keeps you alive.',
        ],
      },
      {
        heading: 'Upgrade first when a single unit solves the wave',
        paragraphs: [
          'If one unit is clearly carrying, an upgrade can be stronger than a zone purchase. Upgrading the carry can stabilize waves, improve active income, and make the eventual zone buy safer. This is especially true when the new zone would expose the same weak defense to harder pressure.',
          'Upgrade first when the next upgrade is affordable, the unit is not about to be replaced, and the current wave problem is damage or uptime rather than space. Buy the zone first when your units are already comfortable and the current area has stopped offering good progress.',
        ],
      },
      {
        heading: 'Use offline income to smooth expansion',
        paragraphs: [
          'Offline income is the friendliest way to buy a zone without ruining the run. If you leave with a stable defense and return with enough income to expand plus roll or upgrade afterward, the zone buy feels planned instead of desperate.',
          'A good pre-logout plan is simple: upgrade the best defense, stop wasting cash on low-value rolls, and leave with a next-zone target. When you return, compare the zone cost against the cash needed to recover after buying it.',
        ],
      },
    ],
    faq: [
      {
        question: 'When should I buy a new zone?',
        answer:
          'Buy a zone when your current defense is stable and you can still afford useful rolls or upgrades after the purchase.',
      },
      {
        question: 'Should I upgrade units or save for zones?',
        answer:
          'Upgrade first if a clear carry unit solves your current wave problem. Save for a zone when upgrades are no longer moving progress efficiently.',
      },
      {
        question: 'Can a zone purchase slow me down?',
        answer:
          'Yes. Expanding while underpowered can drain money and make stronger zombie pressure harder to manage.',
      },
    ],
  },
  {
    slug: 'luck-and-group-bonus-guide',
    title: 'Roll to Defend Luck and Group Bonus Guide',
    seoTitle:
      'Roll to Defend Luck Guide - Friends, Group Bonus and Better Rolls',
    seoDescription:
      'Use Roll to Defend luck bonuses wisely with friends, group bonus checks, roll-session timing, and stop rules for chasing rare units.',
    summary:
      'A practical luck guide for players trying to boost roll quality without wasting a session on endless pulls.',
    category: 'Luck',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.luck),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Official Roblox description confirms friend luck and group extra luck. YouTube luck guides support the long-tail intent.',
    video: videos.luck,
    videoSearchQueries: [
      'Roll to Defend luck',
      'Roll to Defend group luck',
      'How to increase luck Roll to Defend',
    ],
    tags: ['Luck', 'Group Bonus', 'Rolls'],
    relatedRoutes: [
      '/luck',
      '/units',
      '/guides/best-units-watch-guide',
      '/planner',
    ],
    body: [
      {
        heading: 'Luck matters when you can afford to roll',
        paragraphs: [
          'The official Roll to Defend page directly mentions two luck signals: play with friends for more luck and join the group for extra luck. That makes luck a real mechanic, not just a community rumor. The part players often miss is timing. Luck is valuable when you have enough money and attention to roll, compare, and keep the result that improves the defense.',
          'If you chase luck while broke, you only create frustration. Prepare the session first: save enough money for a meaningful batch of rolls, confirm your group or friend bonus if available, then roll with a clear stop rule.',
        ],
      },
      {
        heading: 'Friend and group bonuses should support a plan',
        paragraphs: [
          'Playing with friends can make rolling feel more social and more efficient. Joining the creator group is also listed by the official page as a way to get extra luck. Use those bonuses before a planned roll session rather than after you have already spent everything.',
          'The cleanest sequence is to stabilize waves, collect or save income, activate the available luck bonuses, roll a batch, and immediately evaluate whether the new unit changes your run. If it does, upgrade and test. If it does not, stop before the session becomes pure gambling.',
        ],
      },
      {
        heading: 'Stop when upgrades beat more rolls',
        paragraphs: [
          'Luck improves chances, but it does not remove opportunity cost. If another roll costs more than an upgrade that would fix the current wave, upgrade first. If a new zone would unlock better progress and you already have a stable team, stop rolling and expand.',
          'The best luck users are not the players who roll forever. They are the players who know exactly what result would justify continuing and what result tells them to return to upgrades.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I get more luck in Roll to Defend?',
        answer:
          'The official page says playing with friends gives more luck and joining the group gives extra luck.',
      },
      {
        question: 'When should I use a luck session?',
        answer:
          'Use it when you have enough money for multiple rolls and enough time to compare the new units immediately.',
      },
      {
        question: 'Does more luck guarantee the best unit?',
        answer:
          'No. Luck improves the chance of better rolls, but you still need a stop rule and an upgrade plan.',
      },
    ],
  },
  {
    slug: 'offline-income-guide',
    title: 'Roll to Defend Offline Income Guide',
    seoTitle: 'Roll to Defend Offline Income - Best Pre-Logout Checklist',
    seoDescription:
      'Set up Roll to Defend offline income by upgrading useful units, avoiding bad last-minute rolls, and returning with a clear zone or luck plan.',
    summary:
      'A pre-logout checklist for making offline income support the next roll, upgrade, or zone purchase.',
    category: 'Economy',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'The official Roblox description states that players continue to earn income offline.',
    videoSearchQueries: [
      'Roll to Defend offline income',
      'Roll to Defend money',
      'Roll to Defend income guide',
    ],
    tags: ['Offline Income', 'Economy', 'Zones'],
    relatedRoutes: ['/planner', '/zones', '/guides/zones-and-upgrades-guide'],
    body: [
      {
        heading: 'Offline income rewards your last good decision',
        paragraphs: [
          'Roll to Defend keeps earning income while you are away, so the final minute of a session matters. If you leave after random rolls and no upgrades, the offline period may produce less useful progress. If you leave with a stable defense and a clear next target, the next login starts with momentum.',
          'Before logging off, ask what the money should do next. Is it meant to buy a zone, fund a luck session, or finish a unit upgrade? That answer decides whether you should spend now or save.',
        ],
      },
      {
        heading: 'Use a short pre-logout checklist',
        paragraphs: [
          'The checklist does not need to be complicated. First, upgrade the unit that most clearly improves survival or income. Second, stop rolling if the current cash pile is better saved for the next zone. Third, leave with one visible target so the next session starts fast.',
          'Avoid using the last moments of a session to chase a rare unit with no money left to upgrade it. That makes the offline period carry a weaker setup and delays the next useful purchase.',
        ],
        bullets: [
          'Upgrade your current carry if the next upgrade pays back quickly.',
          'Save money when the next zone is close.',
          'Do not start a luck session right before leaving.',
          'Write down or remember the next target before closing Roblox.',
        ],
      },
      {
        heading: 'Spend returned income by comparing three paths',
        paragraphs: [
          'When you come back, compare rolls, upgrades, and zones. Roll if your current units are weak and you can afford several attempts. Upgrade if one unit is clearly carrying. Buy a zone if the current area is stable and expansion will unlock better progress.',
          'This three-path comparison is more useful than a fixed script because the game changes after every lucky pull, wave wall, and zone unlock.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Roll to Defend earn money offline?',
        answer:
          'Yes. The official Roblox description says you continue to earn income offline.',
      },
      {
        question: 'What should I do before logging off?',
        answer:
          'Upgrade your most useful unit, avoid bad last-minute rolls, and leave with a clear next target such as a zone, unit upgrade, or roll session.',
      },
      {
        question: 'Should I spend all returned money immediately?',
        answer:
          'No. Compare whether rolls, upgrades, or zones produce the strongest next step before spending everything.',
      },
    ],
  },
  {
    slug: 'discord-trello-safety-guide',
    title: 'Roll to Defend Discord and Trello Safety Guide',
    seoTitle:
      'Roll to Defend Discord and Trello - Official Link Status and Safety',
    seoDescription:
      'Check Roll to Defend Discord and Trello status, learn how to verify official links, and avoid copied boards, fake invites, and reward traps.',
    summary:
      'A safety-first guide for players searching community links, Discord invites, Trello boards, updates, and code announcements.',
    category: 'Safety',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Current search results include Discord and Trello intent, but official public verification is thin. This guide keeps link claims conservative.',
    videoSearchQueries: [
      'Roll to Defend Discord',
      'Roll to Defend Trello',
      'Roll to Defend official links',
    ],
    tags: ['Discord', 'Trello', 'Safety'],
    relatedRoutes: [
      '/discord',
      '/download',
      '/updates',
      '/guides/fake-scripts-warning',
    ],
    body: [
      {
        heading: 'Treat official links as source claims, not decoration',
        paragraphs: [
          'Players search for Roll to Defend Discord and Trello because new Roblox games often announce updates, codes, and balance notes through community channels. The risk is that fake invites and copied boards can appear before the official links are easy to verify.',
          'A safe link should come from the official Roblox page, the D:/Drive group, or another creator-controlled channel. If the link only appears on a reposted guide page and asks for account actions, do not treat it as official.',
        ],
      },
      {
        heading: 'How to verify a Discord invite',
        paragraphs: [
          'Start from Roblox, not from a random search result. Open the official game page and look for social links or group announcements. Check whether the server name, branding, and moderator messages match Roll to Defend and D:/Drive. Do not join servers that promise free Robux, script keys, permanent auto-roll, or password-based rewards.',
          'If a creator video includes a Discord invite, treat it as community evidence, not final proof. It can still be useful, but the official Roblox-controlled source should win when links conflict.',
        ],
      },
      {
        heading: 'Trello boards need extra caution',
        paragraphs: [
          'No official Trello board is verified by this site yet. A copied Trello can look convincing because it can reuse game names, icons, and generic unit categories. Before using any board as data, check whether it is linked by the creator and whether the details match current in-game systems.',
          'Until a board is verified, this site should use Trello demand as a safety page and not as a source for unit stats, tier lists, zones, or codes.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there an official Roll to Defend Trello?',
        answer:
          'This site has not verified an official Trello yet. Use only boards linked by creator-controlled channels.',
      },
      {
        question: 'Where should I find the official Discord?',
        answer:
          'Start from the official Roblox page or D:/Drive group. Avoid invite pages that ask for credentials or script downloads.',
      },
      {
        question: 'Can a community Discord be useful?',
        answer:
          'Yes, but use it as a signal. Official Roblox and creator channels should remain the source of truth.',
      },
    ],
  },
  {
    slug: 'fake-scripts-warning',
    title: 'Roll to Defend Fake Scripts Warning',
    seoTitle:
      'Roll to Defend Scripts Warning - Avoid Auto Roll and Exploit Traps',
    seoDescription:
      'Avoid Roll to Defend script pages, auto-roll executors, fake free Robux claims, and unsafe downloads that put Roblox accounts at risk.',
    summary:
      'A safety page for script-search traffic: no executor instructions, no exploit links, and clear safer alternatives for progressing inside Roblox.',
    category: 'Safety',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Search results include script pages for Roll to Defend. This page captures the demand safely without providing exploit instructions.',
    videoSearchQueries: [
      'Roll to Defend scripts',
      'Roll to Defend auto roll',
      'Roll to Defend free key',
    ],
    tags: ['Safety', 'Scripts', 'Roblox Account'],
    relatedRoutes: ['/download', '/codes', '/guides/codes-status-guide'],
    body: [
      {
        heading: 'Scripts are not a safe shortcut',
        paragraphs: [
          'Roll to Defend script searches are already appearing. Some pages advertise auto-roll, free keys, Discord-gated executors, or permanent boosts. This site does not provide those links or instructions. They can violate Roblox rules, expose your account, install unsafe files, or push players into fake reward funnels.',
          'The safer path is slower but stable: use the official Roblox experience, stack legitimate luck bonuses, plan roll sessions, buy zones carefully, and use offline income to fund the next attempt.',
        ],
      },
      {
        heading: 'Warning signs to leave immediately',
        paragraphs: [
          'Leave any page that asks for your Roblox password, asks you to disable security settings, requires an executor download, promises free Robux, hides the tool behind a suspicious key system, or claims that official updates cannot detect it. Those are not normal guide steps.',
          'A real guide should be readable without installing software. A real code should be redeemed inside Roblox or through an official in-game panel, not through a third-party account form.',
        ],
        bullets: [
          'No Roblox password should be entered outside Roblox.',
          'No guide needs an executor download.',
          'No code page should require a browser extension.',
          'No free Robux promise should be trusted as a game guide.',
        ],
      },
      {
        heading: 'Use the planner instead of automation',
        paragraphs: [
          'If the reason you wanted a script was faster progress, use the session planner and luck guide instead. They help decide whether your next move should be rolling, upgrading, buying a zone, or waiting for offline income.',
          'That keeps the account inside the normal Roblox flow and builds a site identity around trustworthy play, which is much stronger for a guide wiki than chasing unsafe traffic.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does this site provide Roll to Defend scripts?',
        answer:
          'No. This site does not provide scripts, executors, auto-roll tools, exploit links, or modified clients.',
      },
      {
        question: 'Are auto-roll scripts safe?',
        answer:
          'They can put your Roblox account and device at risk, and they may violate Roblox or game rules.',
      },
      {
        question: 'What is the safe alternative?',
        answer:
          'Use official gameplay, luck bonuses, planned roll sessions, zone timing, and offline income.',
      },
    ],
  },
  {
    slug: 'latest-update-checklist',
    title: 'Roll to Defend Latest Update Checklist',
    seoTitle: 'Roll to Defend Latest Update - What to Check After Patches',
    seoDescription:
      'Track Roll to Defend Roblox update signals, badge changes, new code-watch checks, unit data needs, and guide refresh priorities.',
    summary:
      'A player and site-maintainer checklist for what should be refreshed whenever Roll to Defend updates.',
    category: 'Updates',
    difficulty: 'Intermediate',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'Roblox API snapshot checked July 5, 2026 showed the game updated the same day.',
    videoSearchQueries: [
      'Roll to Defend latest update',
      'Roll to Defend update',
      'Roll to Defend new codes',
    ],
    tags: ['Updates', 'Codes Watch', 'Wiki Maintenance'],
    relatedRoutes: ['/updates', '/codes', '/units', '/tier-list'],
    body: [
      {
        heading: 'Start with official Roblox signals',
        paragraphs: [
          'The Roblox API snapshot checked on July 5, 2026 reported Roll to Defend updated on July 5, 2026. That is a strong signal that the game is actively maintained, but it is not the same as detailed patch notes. A good update page should record the timestamp and then check what actually changed.',
          'After each update, inspect the game description, media, badges, group announcements, and any official social links. Only then should guides change claims about codes, unit rankings, zones, or luck.',
        ],
      },
      {
        heading: 'Refresh the pages players will search first',
        paragraphs: [
          'New updates usually create demand for codes, best units, tier list, zones, and latest changes. Those pages should be checked first. If no new codes exist, say that clearly. If unit data is still thin, update the watch page instead of inventing ranks.',
          'The homepage should link the high-value update paths so players can move from latest update to codes, units, luck, and planner decisions quickly.',
        ],
      },
      {
        heading: 'Use badge changes as a system clue',
        paragraphs: [
          'Roll badges and rarity-threshold badges reveal how the game values repeated attempts and rare pulls. If new badges appear, they can indicate new milestones, rarity ranges, or progression goals. They should be logged before writing new guide advice.',
          'Badge data is not a complete unit database, but it is a reliable source for public milestones because it comes from Roblox APIs.',
        ],
      },
    ],
    faq: [
      {
        question: 'When was Roll to Defend last checked?',
        answer:
          'This site checked official Roblox and API data on July 5, 2026.',
      },
      {
        question: 'Does a Roblox update mean new codes are active?',
        answer:
          'No. Updates can add codes, but each code still needs direct verification before being listed as working.',
      },
      {
        question: 'What pages should change after updates?',
        answer:
          'Codes, units, tier list, zones, luck, and homepage update modules should be reviewed first.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export const allCoreRoutes = [
  '/',
  '/codes',
  '/guides',
  '/units',
  '/tier-list',
  '/zones',
  '/luck',
  '/planner',
  '/download',
  '/discord',
  '/updates',
  '/disclaimer',
  ...guides.map((guide) => `/guides/${guide.slug}`),
];
