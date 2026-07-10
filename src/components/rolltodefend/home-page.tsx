import Container from '@/components/layout/container';
import {
  RollToDefendMobileMenu,
  RollToDefendRouteSidebar,
} from '@/components/rolltodefend/wiki-navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { activeCodes, codeCheckSummary } from '@/data/rolltodefend/codes';
import { guides, siteDescription } from '@/data/rolltodefend/guides';
import { officialGameFacts } from '@/data/rolltodefend/sources';
import { topicPageList } from '@/data/rolltodefend/topics';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Clock,
  ExternalLink,
  Map,
  Play,
  ShieldAlert,
  Sparkles,
  Trophy,
} from 'lucide-react';
import Image from 'next/image';

const primaryLinks = [
  {
    title: 'Beginner',
    body: 'Roll useful units, stabilize zombie waves, and buy zones only when your economy can recover.',
    href: '/guides/beginner-guide',
    icon: BookOpen,
  },
  {
    title: 'Units',
    body: 'Use role, wave value, rarity, and upgrade cost before trusting any tier-list claim.',
    href: '/units',
    icon: Trophy,
  },
  {
    title: 'Zones',
    body: 'Decide when expansion beats another roll or another upgrade.',
    href: '/zones',
    icon: Map,
  },
  {
    title: 'Luck',
    body: 'Plan friend and group luck windows instead of rolling without a stop rule.',
    href: '/luck',
    icon: Sparkles,
  },
  {
    title: 'Codes',
    body:
      activeCodes.length > 0
        ? `${activeCodes.length} verified working codes tracked.`
        : 'No verified working public codes yet; compare the latest tracker notes before trusting lists.',
    href: '/codes',
    icon: ShieldAlert,
  },
  {
    title: 'Planner',
    body: 'Compare rolling, upgrading, buying a zone, or waiting for offline income.',
    href: '/planner',
    icon: Clock,
  },
];

const keywordLinks = [
  { keyword: 'roll to defend', href: '/' },
  { keyword: 'roll to defend Wiki', href: '/' },
  { keyword: 'roll to defend codes', href: '/codes' },
  {
    keyword: 'roll to defend best units',
    href: '/guides/best-units-watch-guide',
  },
  { keyword: 'roll to defend tier list', href: '/tier-list' },
  { keyword: 'roll to defend luck', href: '/luck' },
  { keyword: 'roll to defend zones', href: '/zones' },
  { keyword: 'roll to defend discord', href: '/discord' },
];

const startSteps = [
  {
    title: 'Stabilize the lane',
    href: '/guides/how-to-play',
    body: 'Roll enough units to stop early zombie pressure before chasing rare pulls.',
  },
  {
    title: 'Check luck bonuses',
    href: '/luck',
    body: 'Use friend and group luck when you have money ready for a real roll batch.',
  },
  {
    title: 'Buy zones deliberately',
    href: '/guides/zones-and-upgrades-guide',
    body: 'Expand when your defense can recover, not when the button first becomes affordable.',
  },
  {
    title: 'Leave with a target',
    href: '/guides/offline-income-guide',
    body: 'Offline income is strongest when your next roll, upgrade, or zone is obvious.',
  },
];

const latestUpdateItems = [
  {
    title: 'Roblox API refreshed',
    date: officialGameFacts.updatedAt.slice(0, 10),
    body: `${officialGameFacts.activePlayersAtCheck.toLocaleString()} players online and ${officialGameFacts.visitsAtCheck.toLocaleString()} visits were visible during the July 5 check.`,
  },
  {
    title: 'Codes watch is active',
    date: codeCheckSummary.checkedAt,
    body:
      activeCodes.length > 0
        ? `${activeCodes.length} working codes are listed.`
        : 'No verified working public codes are listed yet, so the page stays transparent instead of inventing rewards.',
  },
  {
    title: 'Badge milestones mapped',
    date: '2026-07-05',
    body: 'Roll count and rarity-threshold badges confirm that repeated rolls and rare pulls are core progression signals.',
  },
];

export function RollToDefendHomePage() {
  const latestGuides = guides.slice(0, 6);
  const featuredVideo = guides.find((guide) => guide.video)?.video;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${officialGameFacts.domain}/#website`,
        name: officialGameFacts.siteName,
        url: officialGameFacts.domain,
        description: siteDescription,
      },
      {
        '@type': 'Organization',
        name: officialGameFacts.siteName,
        url: officialGameFacts.domain,
        logo: `${officialGameFacts.domain}/rolltodefend/icon.png`,
      },
      {
        '@type': 'VideoGame',
        name: officialGameFacts.name,
        gamePlatform: ['Roblox'],
        applicationCategory: 'Game',
        genre: officialGameFacts.genre,
        url: officialGameFacts.officialRobloxUrl,
        publisher: {
          '@type': 'Organization',
          name: officialGameFacts.creatorName,
        },
      },
    ],
  };

  return (
    <div className="bg-[#10140F] text-[#F9FFF1]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#3A4F2D] border-b">
        <Image
          src="/rolltodefend/hero.jpg"
          alt="Roll to Defend Roblox zombie defense gameplay media"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,20,15,0.98)_0%,rgba(16,20,15,0.9)_42%,rgba(16,20,15,0.48)_74%,rgba(16,20,15,0.88)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#10140F] to-transparent" />

        <Container className="relative px-4 py-8 md:py-10 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#B7F44A] text-[#10140F]">
                  Roblox Defense
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#F5B642] bg-[#10140F]/80 text-[#FFF2C5]"
                >
                  Roll Units + Buy Zones
                </Badge>
              </div>
              <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
                Roll to Defend Wiki
              </h1>
              <p className="max-w-2xl text-[#DCE9D2] text-lg leading-8 md:text-xl">
                Source-aware Roblox guides for rolling units, fighting zombie
                waves, timing zones, using luck boosts, tracking codes, and
                staying away from fake script links.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#B7F44A] text-[#10140F] hover:bg-[#D7FF78]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    Start Guide
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#74D4FF] bg-[#10140F]/70 text-[#F9FFF1] hover:bg-[#74D4FF] hover:text-[#10140F]"
                >
                  <LocaleLink href="/planner">Planner</LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#F5B642] bg-[#10140F]/70 text-[#FFF2C5] hover:bg-[#F5B642] hover:text-[#10140F]"
                >
                  <a
                    href={officialGameFacts.officialRobloxUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Roblox
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {keywordLinks.slice(2).map((item) => (
                  <LocaleLink
                    key={item.keyword}
                    href={item.href}
                    className="rounded-md border border-[#3A4F2D] bg-[#10140F]/75 px-3 py-2 font-medium text-[#DCE9D2] text-sm transition hover:border-[#B7F44A] hover:text-[#B7F44A]"
                  >
                    {item.keyword.replace('roll to defend ', '')}
                  </LocaleLink>
                ))}
              </div>
            </div>

            <aside
              aria-label="Roll to Defend guide video"
              className="rounded-lg border border-[#3A4F2D] bg-[#10140F]/88 p-4 shadow-2xl"
            >
              {featuredVideo ? (
                <div className="overflow-hidden rounded-md border border-[#3A4F2D] bg-black">
                  <iframe
                    className="aspect-video w-full"
                    src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                    title={featuredVideo.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <a
                    href={featuredVideo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 bg-[#182215] px-3 py-2 text-[#DCE9D2] text-xs transition hover:text-[#B7F44A]"
                  >
                    <span className="inline-flex min-w-0 items-center gap-2">
                      <Play className="size-3 shrink-0 text-[#F5B642]" />
                      <span className="min-w-0 truncate">Guide video</span>
                    </span>
                    <ExternalLink className="size-3 shrink-0" />
                  </a>
                </div>
              ) : null}
            </aside>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8">
        <RollToDefendMobileMenu currentPath="/" />
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-10">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {primaryLinks.map((link) => (
                <LocaleLink
                  key={link.title}
                  href={link.href}
                  className="group rounded-lg border border-[#3A4F2D] bg-[#182215] p-5 transition hover:border-[#B7F44A]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#B7F44A] text-[#10140F]">
                      <link.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-display text-[#FFF2C5] text-xl font-bold">
                        {link.title}
                      </h2>
                      <p className="mt-2 text-[#DCE9D2] text-sm leading-6">
                        {link.body}
                      </p>
                    </div>
                  </div>
                </LocaleLink>
              ))}
            </section>

            <section className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-[#3A4F2D] bg-[#182215] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#B7F44A] text-xs uppercase tracking-[0.18em]">
                      Latest Game Updates
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      Live wiki pulse
                    </h2>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-[#DCE9D2] hover:text-[#B7F44A]"
                  >
                    <LocaleLink href="/updates">
                      All updates
                      <ArrowRight className="size-4" />
                    </LocaleLink>
                  </Button>
                </div>

                <div className="mt-6 space-y-5">
                  {latestUpdateItems.map((item) => (
                    <LocaleLink
                      key={item.title}
                      href="/updates"
                      className="group grid gap-3 rounded-md border border-transparent p-2 transition hover:border-[#3A4F2D] hover:bg-[#10140F]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="font-display font-bold text-[#FFF2C5]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-[#DCE9D2] text-sm leading-6">
                            {item.body}
                          </p>
                        </div>
                        <time className="shrink-0 text-[#DCE9D2] text-xs">
                          {item.date}
                        </time>
                      </div>
                    </LocaleLink>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#3A4F2D] bg-[#182215] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#F5B642] text-xs uppercase tracking-[0.18em]">
                      Start Here
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      Your first defense route
                    </h2>
                  </div>
                  <Trophy className="size-8 text-[#F5B642]" />
                </div>
                <div className="mt-6 space-y-4">
                  {startSteps.map((step, index) => (
                    <LocaleLink
                      key={step.title}
                      href={step.href}
                      className="group flex gap-3 rounded-lg border border-transparent p-2 transition hover:border-[#3A4F2D] hover:bg-[#10140F]"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#74D4FF] text-[#DCE9D2]">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-[#F9FFF1]">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-[#DCE9D2] text-sm leading-6">
                          {step.body}
                        </p>
                      </div>
                      <ArrowRight className="ml-auto mt-2 size-4 shrink-0 text-[#B7F44A] transition group-hover:translate-x-0.5" />
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-semibold text-[#B7F44A] text-xs uppercase tracking-[0.18em]">
                    Topic Hubs
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Core Roll to Defend routes
                  </h2>
                </div>
                <Button asChild variant="outline">
                  <LocaleLink href="/guides">All guides</LocaleLink>
                </Button>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {topicPageList.map((topic) => (
                  <LocaleLink
                    key={topic.route}
                    href={topic.route}
                    className="group rounded-lg border border-[#3A4F2D] bg-[#182215] p-5 transition hover:border-[#F5B642]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-[#FFF2C5] text-xl font-bold">
                        {topic.label}
                      </h3>
                      <ArrowRight className="size-4 shrink-0 text-[#F5B642] transition group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-3 text-[#DCE9D2] text-sm leading-6">
                      {topic.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section>
              <div>
                <p className="font-semibold text-[#B7F44A] text-xs uppercase tracking-[0.18em]">
                  Latest Guides
                </p>
                <h2 className="mt-2 font-display text-3xl font-black">
                  Player decisions covered
                </h2>
              </div>
              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {latestGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group rounded-lg border border-[#3A4F2D] bg-[#182215] p-5 transition hover:border-[#B7F44A]"
                  >
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#74D4FF] text-[#10140F]">
                        {guide.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-[#3A4F2D] text-[#DCE9D2]"
                      >
                        {guide.difficulty}
                      </Badge>
                    </div>
                    <h3 className="mt-4 font-display text-[#FFF2C5] text-2xl font-bold">
                      {guide.title}
                    </h3>
                    <p className="mt-3 text-[#DCE9D2] text-sm leading-6">
                      {guide.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>
          </main>

          <RollToDefendRouteSidebar currentPath="/" />
        </div>
      </Container>
    </div>
  );
}
