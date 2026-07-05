# Roll to Defend Wiki PRD and Implementation Plan

Checked: 2026-07-05

## Demand Packet

- Site name: Roll to Defend Wiki
- Domain: https://www.roll-todefend.wiki
- Official Roblox page: https://www.roblox.com/games/129559579789369/Roll-to-Defend
- Roblox place ID: 129559579789369
- Roblox universe ID: 10168931576
- Creator: D:/Drive
- Core keywords: roll to defend, roll to defend Wiki, roll to defend codes, roll to defend guide, roll to defend best units, roll to defend tier list, roll to defend luck, roll to defend zones

## Game Summary

Roll to Defend is a Roblox roll-based zombie defense and incremental simulator. The official gameplay loop is:

- roll for random units
- fight zombies with those units
- unlock / buy zones
- play with friends for more luck
- join the group for extra luck
- continue earning income offline

This is not a classic fixed-tower database site at launch. It is better positioned as a source-aware Roblox guide hub: codes status, beginner guide, units/tier-list watch, zones, luck, offline income, official links, and safe-link warnings.

## Current Official Facts

Source: Roblox API snapshot checked on 2026-07-05.

- Created: 2026-05-14
- Last updated: 2026-07-05
- Genre: Simulation / Incremental Simulator
- Max players: 6
- Active players at check: about 8,027
- Visits at check: about 1,911,309
- Favorites at check: about 6,665
- Badges confirm roll-count and rare-roll milestones, including Roll 10 Times, Roll 1,000 Times, Roll 100,000 Times, and rarity thresholds such as Roll over 1/1M and Roll over 1/1B.

## Keyword Matrix

| Keyword | Intent | Route | Priority | Status | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| roll to defend | Head term | `/` | P0 | keep | Official Roblox page, current search | Homepage must explain the exact game loop. |
| roll to defend Wiki | Wiki intent | `/` | P0 | keep | User requirement, competitor EMD sites | Homepage and metadata use Roll to Defend Wiki. |
| roll to defend codes | Reward intent | `/codes` | P0 | keep | Current search and competitor pages | Publish honest code-watch page; no verified working codes yet. |
| roll to defend guide | Guide intent | `/guides` | P0 | keep | YouTube and web results | Guide index plus hand-written articles. |
| how to play roll to defend | Beginner intent | `/guides/how-to-play` | P0 | keep | YouTube result with exact title | Use video-supported guide, not transcript spin. |
| roll to defend beginner guide | First-session intent | `/guides/beginner-guide` | P0 | keep | YouTube/search | Cover rolls, zombies, zones, luck, offline income. |
| roll to defend best units | Ranking intent | `/guides/best-units-watch-guide` | P0 | keep | Search and competitor page breadth | Use watch framework until stats are verified. |
| roll to defend tier list | Ranking intent | `/tier-list` | P0 | keep | Search and competitor routes | Tier-list watch page, not fake S-tier table. |
| roll to defend luck | System intent | `/luck` | P0 | keep | Official page mentions friend/group luck | Also guide article for roll-session timing. |
| roll to defend zones | Progression intent | `/zones` | P0 | keep | Official page says buy zones | Zone timing hub and guide article. |
| roll to defend offline income | Economy intent | `/guides/offline-income-guide` | P1 | keep | Official page mentions offline income | Pre-logout checklist. |
| roll to defend discord | Community intent | `/discord` | P1 | keep | Search results | Verify from creator-controlled sources. |
| roll to defend trello | Community/wiki intent | `/discord` | P1 | keep | Search pattern from Roblox games | Include Trello status on Discord page; no unverified board claims. |
| roll to defend scripts | Unsafe shortcut | `/guides/fake-scripts-warning` | P1 | keep | Search result includes script pages | Safety page only; no scripts, executors, or keys. |
| roll to defend free robux | Unsafe / monetized shortcut | `/guides/fake-scripts-warning` | P2 | watch | Search-adjacent results | Mention risk; do not provide instructions. |

## Competitor Benchmark

### roll-to-defend.wiki

- Strengths: exact-match domain, source-aware copy, codes status, tier-list caution, sources pages, planner concept.
- Weaknesses to improve: make the homepage more polished, write longer original guide articles, add stronger internal linking, and keep route labels compact.
- Pages we must match: codes, guides, tier-list watch, Discord/Trello status, official sources, planner.

### rolltodefend.org

- Strengths: broad homepage hub, many long-tail route ideas, real Roblox media, code-status transparency.
- Weaknesses to improve: avoid very broad thin-page expansion until each route has enough source-backed content.
- Pages we must match: codes status, beginner guide, units wiki, zones wiki, latest update, Discord/Trello status.

### Earnaldo Roll to Defend pages

- Strengths: concise summary, comparison angle, honest "no confirmed code list" stance.
- Weaknesses to improve: avoid free-Robux lead, build a deeper wiki-style internal-link structure, add player decision tools.
- Pages we must match: hub, codes, guide, comparison/safety concepts where useful.

## Site Type Decision

Best fit: source-aware Roblox game guide wiki, not a full database at launch.

Reasons:

- The game is new and fast-growing, so long-tail demand exists.
- Official facts confirm core mechanics, but public unit stats and exact formulas are thin.
- Codes demand is strong, but no verified working public codes are confirmed by this site yet.
- A fake database or fake tier list would hurt trust. A watch framework can rank evidence first and become a real database later.

## Launch Pages

Core pages:

- `/`
- `/codes`
- `/guides`
- `/units`
- `/tier-list`
- `/zones`
- `/luck`
- `/planner`
- `/download`
- `/discord`
- `/updates`
- `/disclaimer`

Guide articles:

- `/guides/beginner-guide`
- `/guides/how-to-play`
- `/guides/codes-status-guide`
- `/guides/best-units-watch-guide`
- `/guides/zones-and-upgrades-guide`
- `/guides/luck-and-group-bonus-guide`
- `/guides/offline-income-guide`
- `/guides/discord-trello-safety-guide`
- `/guides/fake-scripts-warning`
- `/guides/latest-update-checklist`

## Tool Decision

Build a lightweight Roll Session Planner at `/planner`.

Why it fits:

- The game is about choosing between rolls, upgrades, zones, and offline income.
- Exact formulas are not public enough for a fake optimizer.
- A user-input planner can still be useful without claiming hidden data.

Inputs:

- current cash
- roll cost
- key upgrade cost
- next zone cost
- income per minute
- offline hours
- friend/group luck ready

Output:

- suggested next move
- reason
- projected offline income
- roll count now and after offline income

## Visual Direction

Use the official Roblox icon and gameplay media. The site palette should read as zombie defense / field / coin economy:

- deep green-black background: `#10140F`
- panel green: `#182215`
- border moss: `#3A4F2D`
- bright luck green: `#B7F44A`
- coin amber: `#F5B642`
- small sky-blue accent: `#74D4FF`

Homepage should stay compact and guide-first, with official gameplay media visible in the first viewport and the next content band peeking below.

## Implementation Notes

- Data namespace: `src/data/rolltodefend/`
- Components namespace: `src/components/rolltodefend/`
- Route group: `src/app/[locale]/(rolltodefend)/`
- Use metadata on every public page.
- Use YouTube thumbnails for video-supported guides.
- Keep codes page transparent until a working code is verified.
- Keep tier-list and unit pages as watch/status pages until source-backed unit data exists.
- Remove old template residue after migration.
- Do not add ad integrations unless a future task provides ad requirements and a dedicated ad configuration document.

## Validation Plan

- `pnpm lint`
- `pnpm exec tsc --noEmit`
- `pnpm build`
- Start local dev server and inspect `/`, `/codes`, `/guides/beginner-guide`, `/tier-list`, and `/planner`.

## Deployment Handoff

The requirements ask for GitHub, Cloudflare Workers, domain association, and GA setup. Those steps depend on available authenticated CLIs / accounts. If credentials are available locally, use:

- GitHub repo target: `nophenia`
- Cloudflare Worker/project target: `nophenia`
- Domain: `www.roll-todefend.wiki`
- GA property: Roll to Defend Wiki

If credentials are not available, finish the code, validation, and git-ready state, then hand off the exact commands and remaining account steps.
