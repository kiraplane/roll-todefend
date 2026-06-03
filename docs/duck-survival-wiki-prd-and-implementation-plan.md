# Duck Survival Wiki 需求与实现文档

状态：方案草案  
日期：2026-06-03  
参考需求：[xuqiu.md](./xuqiu.md)

## 1. 项目目标

基于当前项目的 Next.js、next-intl、Tailwind、shadcn/ui、Cloudflare Workers 部署框架，做一个面向 `Duck Survival` 玩家搜索需求的英文攻略站，站点名称为 `Duck Survival Wiki`。

这个站点不做泛泛的游戏官网介绍，而是优先回答玩家搜索时最急的问题：

1. `Duck Survival codes`、`gift codes`、`codes reddit`：玩家想马上拿可用兑换码。
2. `Duck Survival mod apk`：玩家想找 APK 或修改版，但本站需要用合规方式承接，给官方下载入口和风险解释，不提供 mod 下载。
3. `Duck Survival guide`、`beginner guide`、`best heroes`、`best skills`、`best team`：玩家想知道前期怎么养、技能怎么选、队伍怎么搭。
4. `Duck Survival tower defense`、`base upgrade`、`arena`、`guild boss`：玩家遇到系统玩法和战斗卡点，需要短平快的攻略。

核心目标：

1. 快速覆盖近期增长关键词，尤其是 `duck survival gift codes reddit` 和 `duck survival mod apk`。
2. 在数据不完整的阶段，用 YouTube gameplay / guide 视频作为内容种子，写成人话攻略文章。
3. 复用当前 Clash of Critters 攻略站的页面结构、组件模式和数据文件方式，尽快上线 MVP。
4. 参考 KingshotGuide 的 guide 写法：短答案、视频参考、最大误区、真正重要的点、执行步骤、FAQ。
5. 参考 `bridgerwestern.wiki` 的分类入口和 guide 密度，参考 `pokopiaguide.com` 的数据库式导航和按钮布局。

非目标：

- 不提供、托管、引导下载 `mod apk`、破解包、无限钻石、无限金币、作弊脚本。
- 不声称本站为 Duck Survival 官方网站。
- 不做登录、评论、复杂后台、付费功能。
- MVP 不强求完整英雄/技能数据库，如果游戏公开数据不足，先用 guides 和 codes 承接搜索流量。

## 2. 调研结论

### 2.1 官方商店信息

官方 Google Play 页面显示，`Duck Survival` 由 `Joy Nice Games` 发布，类型包含 Strategy、Tower defense、Single player、Stylized、Weapons、Gun、Zombie。页面文案把玩法描述为鸭子对抗僵尸，核心循环是白天建设基地、招募士兵、布置机枪塔和 EMP 塔，夜晚抵御变异僵尸和 boss。商店页还强调英雄、元素组合、随机技能、装备、宝石、地牢、Guild Boss 和 Arena PvP。

截至本次调研，Google Play 页面展示的信息包括：

| 字段 | 信息 |
| --- | --- |
| 游戏名 | Duck Survival |
| 发行方 | Joy Nice Games |
| 分类 | Strategy / Tower defense |
| 下载量 | 500K+ |
| 评分展示 | 5.0 star，约 14.8K reviews |
| 内容分级 | Rated 12+，Violence |
| 更新时间 | May 24, 2026 |
| 可用平台 | Android，Windows |

这些信息决定了站点的内容方向：它不是纯放置游戏，而是 `roguelike shooter + tower defense + hero/team progression` 的组合。因此，页面要围绕 codes、英雄、技能、队伍、基地建设、活动和卡点攻略展开。

### 2.2 关键词判断

需求文件给出的近 7 天重要关键词：

| 关键词 | 增长 | 搜索意图 | 处理方式 |
| --- | ---: | --- | --- |
| `duck survival gift codes reddit` | Breakout | 想找社区汇总的可用兑换码，担心普通 codes 页面过期 | 用 `/codes` 承接，页面加入 Reddit / community codes FAQ，但不做论坛搬运 |
| `duck survival mod apk` | +400% | 想下载修改版、免广告、无限资源或非官方 APK | 用 `/download` 或 `/mod-apk` 承接，解释风险并引导官方商店，不提供下载 |

额外从搜索结果可见的近期需求：

| 关键词方向 | 页面 |
| --- | --- |
| `duck survival codes`, `duck survival codes june 2026`, `duck survival gift code` | `/codes` |
| `duck survival code not working`, `how to redeem duck survival codes` | `/codes` FAQ |
| `duck survival discord` | `/codes` 或 `/community` 的 FAQ 区 |
| `duck survival beginner guide` | `/guides/beginner-guide` |
| `duck survival best heroes`, `duck survival hero tier list` | `/tier-list`、`/heroes` |
| `duck survival best skills` | `/skills`、`/guides/best-skills` |
| `duck survival best team` | `/best-team` |
| `duck survival tower defense guide` | `/guides/tower-defense-guide` |
| `duck survival base upgrade priority` | `/guides/base-upgrade-priority` |
| `duck survival arena pvp` | `/guides/arena-pvp-guide` |
| `duck survival guild boss` | `/guides/guild-boss-guide` |

### 2.3 首批可用内容线索

近期多个 codes 页面和 Reddit 帖子都在讨论 Duck Survival codes。可以作为人工核验候选的 code 包括：

```txt
ThankYou
HEARDUCK
DUCK2M
DUCK777
DUCK2026
DUCKOP2026
DUCKIE
DUCKOP
DuckGo
```

实现时不要把这些候选直接写成永久可用。建议先人工进游戏验证，无法验证奖励时文案写 `Free rewards`，不要虚构具体钻石、钥匙、图纸数量。

## 3. 产品定位

建议定位：

> Duck Survival Wiki is a fast fan-made guide hub for codes, beginner progression, best heroes, best skills, team building, tower defense upgrades, and event strategy.

中文理解：

> 一个快速、实用、非官方的 Duck Survival 攻略站，帮助玩家少走弯路：先领兑换码，再看新手路线、英雄培养、技能选择、队伍搭配、塔防升级和活动打法。

站点承担三种角色：

| 角色 | 用户意图 | 主要页面 |
| --- | --- | --- |
| 快速答案站 | 立刻找 codes、兑换步骤、mod apk 是否安全 | `/codes`、`/download` |
| 攻略文章站 | 新玩家想知道怎么玩、怎么升级、怎么打活动 | `/guides`、`/guides/beginner-guide` |
| 数据库站 | 玩家想查英雄、技能、队伍、活动 | `/heroes`、`/skills`、`/best-team`、`/events` |

## 4. 内容策略

### 4.1 站点初期重点

目前 Duck Survival 的公开结构化数据不多，因此 MVP 不应该强行做一个空数据库。更稳的路线是：

1. 先用 `/codes` 抢最高频、最高转化的搜索需求。
2. 用 `/download` 或 `/mod-apk` 合规承接 `mod apk` 需求，解释风险，提供官方 Google Play 入口。
3. 用 YouTube 视频做 guides 的素材来源，把视频里的关键信息写成人话攻略。
4. 首页底部放 3 篇重点 guides，封面使用 guide 视频缩略图或自制封面。
5. 等英雄、技能、活动数据积累后，再补 `/heroes`、`/skills`、`/events`、`/teams`。

### 4.2 首批页面优先级

| 优先级 | 页面 | 路由 | 目标关键词 |
| --- | --- | --- | --- |
| P0 | 首页 | `/` | duck survival wiki, duck survival guide |
| P0 | Codes | `/codes` | duck survival codes, duck survival gift codes reddit |
| P0 | Download / Mod APK 风险页 | `/download` 或 `/mod-apk` | duck survival mod apk, duck survival apk |
| P0 | Guides 首页 | `/guides` | duck survival guide |
| P0 | 新手攻略 | `/guides/beginner-guide` | duck survival beginner guide |
| P0 | Best Heroes | `/tier-list` 或 `/guides/best-heroes` | duck survival best heroes, tier list |
| P0 | Best Skills | `/guides/best-skills` | duck survival best skills |
| P1 | Best Team | `/best-team` | duck survival best team |
| P1 | Tower Defense Guide | `/guides/tower-defense-guide` | duck survival tower defense guide |
| P1 | Base Upgrade Priority | `/guides/base-upgrade-priority` | duck survival base upgrade |
| P1 | Arena PvP Guide | `/guides/arena-pvp-guide` | duck survival arena pvp |
| P1 | Guild Boss Guide | `/guides/guild-boss-guide` | duck survival guild boss |
| P2 | Heroes Database | `/heroes`、`/heroes/[slug]` | duck survival heroes |
| P2 | Skills Database | `/skills`、`/skills/[slug]` | duck survival skills |
| P2 | Events | `/events`、`/events/[slug]` | duck survival events |
| P2 | FAQ | `/faq` | duck survival FAQ |

### 4.3 Guide 文章格式

学习 KingshotGuide 和当前 Clash of Critters guides 的写法，每篇 guide 建议固定结构：

1. `Short Answer`：先给结论，解决用户最急的问题。
2. `Video Reference`：嵌入 YouTube 视频，并说明这个视频适合看什么。
3. `The Biggest Mistake`：指出玩家最容易做错的事。
4. `What Actually Matters`：拆成 3-5 个真正影响结果的判断点。
5. `Step-by-step Plan`：给可执行步骤。
6. `Common Mistakes`：补充容易浪费资源的坑。
7. `What to Read Next`：导向 codes、best heroes、best skills、best team。
8. `FAQ`：每页至少 4-6 个问题，覆盖长尾搜索。

前台不建议展示 `updated at` 和 `source` 卡片。内部数据仍可以保留 `checkedAt`、`sourceUrl`、`videoId`、`channel` 字段，方便维护，但不要把来源和更新时间作为页面视觉重点。

## 5. 信息架构与路由

当前项目使用 `[locale]` 路由和 route group。Duck Survival 可以沿用这个架构，MVP 先做英文内容，未来再考虑中文、日文、韩文。

推荐路由：

| 页面 | 路由 | 页面类型 |
| --- | --- | --- |
| 首页 | `/` | 内容入口 + 热门 guide |
| Codes | `/codes` | 高频更新页 |
| Download / Mod APK Safety | `/download` 或 `/mod-apk` | 风险解释 + 官方入口 |
| Tier List / Best Heroes | `/tier-list` | 策略页 |
| Best Team | `/best-team` | 策略页 |
| Heroes | `/heroes` | 数据库列表 |
| Hero Detail | `/heroes/[slug]` | 数据详情页 |
| Skills | `/skills` | 数据库列表 |
| Skill Detail | `/skills/[slug]` | 数据详情页 |
| Guides | `/guides` | 文章索引 |
| Guide Detail | `/guides/[slug]` | 文章详情页 |
| Events | `/events` | 活动索引 |
| Event Detail | `/events/[slug]` | 活动详情页 |
| FAQ | `/faq` | 长尾 FAQ |
| Disclaimer | `/disclaimer` | 非官方声明 |
| Privacy / Terms | `/privacy-policy`、`/terms-of-service` | 法务页 |

MVP 可以先不做 `/heroes/[slug]` 和 `/skills/[slug]`。如果首批数据只有 5-10 个英雄或技能，先放在 guide 里，不要为了“看起来像数据库”而创建大量空页。

## 6. 页面需求

### 6.1 首页

首页第一屏必须明确站点名 `Duck Survival Wiki`，并直接给用户入口，而不是做传统营销 landing page。

推荐模块顺序：

1. Hero：站点名、简短定位、4 个主入口按钮：Codes、Beginner Guide、Best Heroes、Download Safely。
2. Quick Answers：展示 codes、mod apk safety、best skills、best team 的入口卡片。
3. How to Start：用 3-5 步说明新玩家路线：领 codes、过教程、白天建设、夜晚防守、集中升级核心英雄/技能。
4. Featured Guides：展示 3 篇 guide，封面使用视频缩略图或自制封面。
5. Popular Topics：英雄、技能、基地升级、塔防、Arena、Guild Boss。
6. FAQ：首页放 4-6 个基础 FAQ。

首页不要显示数据来源和更新时间。内部可以保留维护字段，但前台重点是“下一步点哪里”。

### 6.2 Codes 页面

目标：承接 `duck survival codes`、`duck survival gift codes reddit`、`duck survival codes june 2026`、`how to redeem duck survival codes`。

页面模块：

1. H1：`Duck Survival Codes`
2. 一句话说明：这些 codes 可用于领取 diamonds、gear keys、blueprints、banknotes 或 other rewards，具体以游戏内为准。
3. Working codes 列表：code、reward、copy button。
4. Expired codes 列表：如果没有，就显示暂无确认过期 codes。
5. How to redeem：教程完成后进入主菜单，点左上角 duck avatar / profile，打开 gift codes，输入 code，redeem。
6. Why codes are not working：大小写、已过期、教程未完成、服务器延迟、区域差异。
7. FAQ：覆盖 Reddit、Discord、new codes、case sensitive、where to find more codes。

实现细节：

- 使用 `CodeCopyButton`，按钮只做复制，不弹复杂 toast。
- 如果 reward 未验证，写 `Free rewards`，不要编奖励数量。
- 不显示 `last checked` 和 `source`。
- 内部数据文件仍保留 `status`、`checkedAt`、`sources`，方便维护。

### 6.3 Download / Mod APK 页面

目标：承接 `duck survival mod apk` 的增长，但必须合规。

页面定位：

> Duck Survival Mod APK searches are common, but this site does not provide modified APK files. Use the official Google Play listing whenever possible.

页面模块：

1. H1：`Duck Survival Download and Mod APK Safety`
2. Official download：Google Play 官方链接。
3. What is a mod APK：解释用户在找什么，不提供下载。
4. Why mod APKs are risky：账号封禁、恶意软件、支付风险、版本落后、数据丢失。
5. Safer alternatives：领取 codes、完成日常任务、集中升级、看 beginner guide。
6. FAQ：`Is Duck Survival mod APK safe?`、`Can I get unlimited diamonds?`、`Where is the official download?`。

禁止事项：

- 不提供 mod APK 下载按钮。
- 不链接到 mod APK 站点。
- 不写安装未知来源 APK 的步骤。
- 不写“无限钻石”“免费内购”等操作教程。

### 6.4 Guides 首页

目标：承接总词 `duck survival guide`，并把用户分发到具体问题。

页面模块：

1. Guide 分类 tab 或 filter：Beginner、Codes、Heroes、Skills、Tower Defense、Events、PvP。
2. 置顶 3 篇：Beginner Guide、Best Heroes、Best Skills。
3. 常规 guide grid：卡片包含封面、标题、摘要、难度标签。
4. SEO 内容区：简短说明 Duck Survival 的核心循环。
5. FAQ：怎么开始、先升什么、codes 在哪里、mod apk 是否安全。

### 6.5 Guide 详情页

沿用当前 Clash of Critters guide 数据结构，但字段改成 Duck Survival：

```ts
export interface DuckGuide {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  coverImageUrl: string;
  video?: {
    id: string;
    title: string;
    channel: string;
  };
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  body: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}
```

前台可以不渲染 `publishedAt` / `updatedAt`。如果为了排序需要日期，可保留在数据里，但不展示。

### 6.6 Heroes / Skills / Teams

如果首批数据不足，P0 先不强行上线数据库。P1/P2 再补：

```ts
export interface DuckHero {
  id: string;
  slug: string;
  name: string;
  role: 'DPS' | 'Tank' | 'Support' | 'Control' | 'Utility';
  element?: 'Burning' | 'Lightning' | 'Frost' | 'Energy' | 'Physical';
  rarity?: string;
  tier?: 'S' | 'A' | 'B' | 'C' | 'Unranked';
  image?: string;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  bestSkills: string[];
  bestPartners: string[];
}

export interface DuckSkill {
  id: string;
  slug: string;
  name: string;
  element?: string;
  type: 'Damage' | 'Control' | 'Defense' | 'Utility' | 'Summon';
  summary: string;
  bestFor: string[];
  notes: string;
}

export interface DuckTeamBuild {
  id: string;
  name: string;
  purpose: 'Beginner' | 'Stage Push' | 'Boss' | 'Arena' | 'F2P';
  core: string[];
  substitutes: string[];
  skillPriority: string[];
  notes: string;
}
```

页面可以先做成 guide 风格的“推荐列表”，等数据丰富后再做筛选表格。

## 7. YouTube 内容生产流程

因为公开 wiki 数据不多，YouTube 是早期最实际的攻略来源。建议流程：

1. 搜索 `Duck Survival beginner guide`、`Duck Survival gameplay`、`Duck Survival best heroes`、`Duck Survival best skills`、`Duck Survival arena`、`Duck Survival guild boss`。
2. 选择时长适中、画面清楚、有实战过程的视频。
3. 记录 `videoId`、标题、频道名、主题、可支持的页面。
4. 用视频内容作为参考，写成自己的攻略文章，不逐字搬运字幕。
5. 每篇文章嵌入 YouTube iframe。
6. guide 卡片封面可用 YouTube 缩略图或自制封面，文件放到 `public/ducksurvival/guides/`。
7. 首页精选 3 篇 guides，优先选 beginner、best heroes、best skills。

推荐首批 guide：

| 标题 | 路由 | 视频需求 |
| --- | --- | --- |
| Duck Survival Beginner Guide | `/guides/beginner-guide` | 新手完整 gameplay 或 tutorial |
| Duck Survival Best Heroes | `/guides/best-heroes` 或 `/tier-list` | 英雄展示、抽卡、阵容演示 |
| Duck Survival Best Skills | `/guides/best-skills` | 技能选择、实战 run |
| Duck Survival Best Team | `/best-team` | 队伍搭配、元素 synergy |
| Duck Survival Tower Defense Guide | `/guides/tower-defense-guide` | 白天建设、夜晚防守 |
| Duck Survival Base Upgrade Priority | `/guides/base-upgrade-priority` | 基地/塔升级路线 |
| Duck Survival Arena PvP Guide | `/guides/arena-pvp-guide` | Arena 战斗 |
| Duck Survival Guild Boss Guide | `/guides/guild-boss-guide` | Guild Boss / boss fight |

## 8. 视觉与交互

官方商店截图给人的风格是：末日废土、鸭子士兵、僵尸、枪械、塔防、金色奖励、橙红警示、军绿色装备。站点不应做成纯可爱黄鸭，也不应做成过重的黑红恐怖风。

推荐视觉方向：

| 用途 | 颜色 | 说明 |
| --- | --- | --- |
| 页面背景 | `#FFF4DC` | 温暖羊皮纸/奖励色，降低末日题材压迫感 |
| 主文字 | `#1F241D` | 接近深橄榄黑 |
| 主按钮 | `#F2A93B` | 鸭子黄色、奖励金色 |
| 强 CTA / hover | `#E76825` | 橙色火光与警示 |
| 深色区块 | `#2F3E34` | 军绿色、基地感 |
| 次强调 | `#6FC24A` | 僵尸绿/技能能量 |
| 危险/Mod APK 警示 | `#D64232` | 风险页使用 |
| 卡片背景 | `#FFFAF0` | 比纯白更贴近游戏气质 |
| 边框 | `#E7C980` | 暖金边框 |

交互规则：

- 主入口使用 icon + text 按钮，图标来自 `lucide-react`。
- Codes 使用 copy icon 按钮。
- FAQ 使用 accordion。
- Guide 分类使用 tabs 或 segmented controls。
- 数据库筛选使用搜索框、select、badge，不做复杂后台式筛选。
- 卡片圆角控制在 `rounded-lg` 或更小，保持攻略站而不是 SaaS landing page。
- 不做大面积紫蓝渐变，不做漂浮光球装饰。

## 9. 实现文件规划

建议从当前 Clash of Critters 命名空间复制一套 Duck Survival 结构，再逐步删掉无关页面。

```txt
src/app/[locale]/(ducksurvival)/
  layout.tsx
  codes/page.tsx
  download/page.tsx
  tier-list/page.tsx
  best-team/page.tsx
  guides/page.tsx
  guides/[slug]/page.tsx
  heroes/page.tsx
  heroes/[slug]/page.tsx
  skills/page.tsx
  skills/[slug]/page.tsx
  events/page.tsx
  disclaimer/page.tsx

src/components/ducksurvival/
  duck-home-page.tsx
  code-copy-button.tsx
  guide-card.tsx
  guide-detail.tsx
  faq-section.tsx
  youtube-embed.tsx
  hero-card.tsx
  skill-card.tsx

src/data/ducksurvival/
  site.ts
  types.ts
  codes.ts
  guides.ts
  heroes.ts
  skills.ts
  teams.ts
  events.ts

public/ducksurvival/
  guides/
  heroes/
  skills/
  ui/

scripts/duck/
  collect-youtube-guides.ts
  download-youtube-thumbnails.ts
  check-code-pages.ts
```

现有需要同步调整的文件：

| 文件 | 调整 |
| --- | --- |
| `package.json` | 项目名改为 `duck-survival-wiki`，新增可选 `duck:*` 脚本 |
| `src/routes.ts` | 改成 Duck Survival 的核心公开路由 |
| `src/app/sitemap.ts` | 加入 codes、download、guides、guide detail、heroes/skills 等页面 |
| `src/app/robots.ts` | 保持 sitemap 正确 |
| `src/app/manifest.ts` | 改站点名称、描述、图标 |
| `src/components/layout/navbar.tsx` | 导航改为 Codes、Guides、Best Heroes、Best Skills、Best Team、Download |
| `src/components/layout/footer.tsx` | 改站点简介和免责声明链接 |
| `src/lib/metadata` 相关文件 | 默认 title/description/canonical 改成 Duck Survival Wiki |

## 10. 实施阶段

### 阶段 0：项目改名与基础壳

目标：把当前 Clash 项目变成 Duck Survival Wiki 的外壳。

任务：

1. `package.json` 项目名改为 `duck-survival-wiki`。
2. route group 改为 `(ducksurvival)`。
3. `src/data/clashofcritters` 复制为 `src/data/ducksurvival`，再删减字段。
4. `src/components/clashofcritters` 复制为 `src/components/ducksurvival`。
5. 替换首页、导航、footer、metadata、manifest、sitemap 的站点名和路由。
6. 应用 Duck Survival 配色。

验收：

- `/` 展示 Duck Survival Wiki 首页。
- 导航全部指向 Duck 页面。
- 不再出现 Clash of Critters 的 visible text。

### 阶段 1：MVP 内容上线

目标：覆盖最高优先级搜索需求。

任务：

1. 完成 `/codes` 页面。
2. 完成 `/download` 或 `/mod-apk` 页面。
3. 完成 `/guides` 列表页。
4. 完成 3 篇 guide：Beginner Guide、Best Heroes、Best Skills。
5. 首页展示 3 篇 guides，并加入 FAQ。
6. 每个核心页面加入 FAQ。
7. 配置 FAQPage、Article、BreadcrumbList、WebSite、VideoGame JSON-LD。

验收：

- 首页、codes、download、guides、guide detail 都能访问。
- Codes 可以复制。
- Download 页面没有 mod APK 下载链接。
- 每个核心页面有 FAQ。
- `pnpm lint` 和 `pnpm next:build` 通过。

### 阶段 2：扩展攻略与轻数据库

目标：从文章站升级成攻略数据库雏形。

任务：

1. 新增 Best Team 页面。
2. 新增 Tower Defense、Base Upgrade、Arena PvP、Guild Boss guides。
3. 根据游戏内和视频资料整理首批 heroes、skills、teams。
4. `/heroes` 和 `/skills` 先做轻量卡片列表，不急着做复杂筛选表格。
5. guide detail 增加 related guides。

验收：

- 至少 8 篇 guides。
- `/heroes` 至少有 8-12 个条目。
- `/skills` 至少有 10-15 个条目。
- 内部链接形成闭环：codes -> beginner -> heroes/skills -> best team -> events。

### 阶段 3：持续更新与自动化辅助

目标：降低维护成本，但不自动发布未经确认内容。

任务：

1. `scripts/duck/check-code-pages.ts` 抓取公开 codes 页面快照，输出差异报告。
2. `scripts/duck/collect-youtube-guides.ts` 记录候选 YouTube 视频，输出 JSON。
3. `scripts/duck/download-youtube-thumbnails.ts` 下载 guide 缩略图。
4. 根据 Search Console 关键词新增 guide。
5. 如果出现可靠 wiki 或数据库，再补结构化同步脚本。

原则：

- 脚本只生成草稿和报告。
- 内容需要人工审核后再入库。
- 前台不展示来源和更新时间，避免页面显得像数据审计报告。

## 11. SEO 与结构化数据

每个页面需要独立 metadata：

| 页面 | title 示例 | description 方向 |
| --- | --- | --- |
| `/` | Duck Survival Wiki - Codes, Heroes, Skills and Guides | 总入口，覆盖 codes、beginner、heroes、skills、team |
| `/codes` | Duck Survival Codes | Active gift codes, redeem steps, why codes do not work |
| `/download` | Duck Survival Download and Mod APK Safety | Official download, mod APK risks, safe alternatives |
| `/guides/beginner-guide` | Duck Survival Beginner Guide | Day/night loop, base, heroes, skills, early upgrades |
| `/guides/best-heroes` | Duck Survival Best Heroes | Best heroes by early game, stage push, boss, arena |
| `/guides/best-skills` | Duck Survival Best Skills | Skill picks for wave clear, control, boss damage |

结构化数据：

- 首页：`WebSite`、`VideoGame`、`FAQPage`。
- Guides 列表：`CollectionPage`、`ItemList`。
- Guide 详情：`Article`、`BreadcrumbList`、`FAQPage`，有视频时加 `VideoObject`。
- Codes：`FAQPage`。
- Download / Mod APK safety：`FAQPage`。

Sitemap：

- 首页、核心页面、全部 guide detail 必须进入 sitemap。
- MVP 不建议把空的 hero/skill detail 批量放入 sitemap。

## 12. 风险与边界

### 12.1 Mod APK 风险

`duck survival mod apk` 是增长词，但也是高风险词。本站可以写安全解释页，但不能做下载站。

页面要明确：

- 本站不提供修改版 APK。
- 修改版可能带来账号、安全、支付、隐私和版本风险。
- 玩家应优先使用官方 Google Play。
- 想获得资源应查看 codes 和新手攻略。

### 12.2 数据不足风险

如果没有可靠 wiki、公开数据库或完整英雄技能表，不能硬造数据。解决方式：

- 用 video-based guides 起步。
- 英雄/技能页面先写“推荐与解释”，不要伪装成完整数据库。
- 每条具体数值尽量来自游戏内截图、官方商店或可靠视频画面。

### 12.3 内容同质化风险

Codes 页面天然容易同质化。差异化方向：

- 兑换步骤更清楚。
- FAQ 覆盖 Reddit、Discord、大小写、教程门槛、失效原因。
- 内链到 Beginner、Best Heroes、Best Skills。
- 不做夸张标题，不乱写奖励数量。

### 12.4 版权与素材风险

- 不直接盗用 Google Play 截图作为主视觉。
- YouTube iframe 可嵌入，缩略图如下载到本地需记录 video id 和 channel。
- 最稳的 guide 封面方案是自制或 AI 生成风格图，再配合 YouTube 视频嵌入。
- 站点 footer 和 disclaimer 需说明这是 unofficial fan guide。

## 13. 验收标准

MVP 上线验收：

1. 首页能在第一屏看到 `Duck Survival Wiki`、Codes、Beginner Guide、Best Heroes、Download 入口。
2. `/codes` 有可复制 codes、兑换步骤、FAQ。
3. `/download` 或 `/mod-apk` 能承接 mod apk 搜索，但没有任何非官方下载按钮。
4. `/guides` 有至少 3 篇 guide。
5. 每篇 guide 有 Short Answer、Video Reference、正文、FAQ。
6. 首页底部展示 3 篇 guide 入口，封面正常加载。
7. 全站 visible text 不再出现 Clash of Critters。
8. `pnpm lint` 通过。
9. `pnpm next:build` 或 `pnpm build` 通过。
10. sitemap 和 canonical 指向 Duck Survival 页面。

## 14. 参考资料

- 需求文件：[xuqiu.md](./xuqiu.md)
- 当前项目参考：[Clash of Critters 需求与实现文档](./clash-of-critters-prd-and-implementation-plan.md)
- 调整意见：[tiaozheng.md](./tiaozheng.md)
- 官方 Google Play：https://play.google.com/store/apps/details?id=com.mrtgd2us.google&hl=en_US
- Pocket Tactics Duck Survival codes：https://www.pockettactics.com/duck-survival-codes
- All Things How Duck Survival codes：https://allthings.how/duck-survival-codes/
- 参考 wiki 内容结构：https://www.bridgerwestern.wiki/
- 参考 UI 与数据库导航：https://pokopiaguide.com/
- KingshotGuide 本地项目：`/Users/he/Documents/AI/vibe coding/kingshot/kingshotguide`
