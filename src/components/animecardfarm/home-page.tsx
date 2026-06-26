import {
  AnimeCardFarmMobileMenu,
  AnimeCardFarmRouteSidebar,
} from '@/components/animecardfarm/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { activeCodes } from '@/data/animecardfarm/codes';
import { guides, siteDescription } from '@/data/animecardfarm/guides';
import { officialGameFacts } from '@/data/animecardfarm/sources';
import { topicPageList } from '@/data/animecardfarm/topics';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Clock,
  Coins,
  Download,
  ExternalLink,
  Play,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';

const primaryLinks = [
  {
    title: 'Codes',
    body: `${activeCodes.length} source-checked codes, spelling notes, and reward planning.`,
    href: '/codes',
    icon: Sparkles,
  },
  {
    title: 'Beginner Route',
    body: 'First-session path for packs, upgrades, offline money, and mutations.',
    href: '/guides/beginner-guide',
    icon: BookOpen,
  },
  {
    title: 'Packs',
    body: 'Use pack tiers as an income ladder instead of random spending.',
    href: '/packs',
    icon: Boxes,
  },
  {
    title: 'Mutations',
    body: 'Handle mutated cards, trait gems, and upgrade timing safely.',
    href: '/mutations',
    icon: Sparkles,
  },
  {
    title: 'Offline Money',
    body: 'Leave Roblox with your best income setup active.',
    href: '/guides/offline-money-guide',
    icon: Clock,
  },
  {
    title: 'Official Roblox',
    body: 'Open the correct Anime Card Farm place and avoid wrong-game links.',
    href: '/download',
    icon: Download,
  },
];

const keywordLinks = [
  { keyword: 'anime card farm', href: '/' },
  { keyword: 'anime card farm Wiki', href: '/' },
  { keyword: 'anime card farm codes', href: '/codes' },
  { keyword: 'anime card farm roblox wiki', href: '/guides' },
  { keyword: 'anime card farm packs', href: '/packs' },
  { keyword: 'anime card farm cards', href: '/cards' },
  { keyword: 'anime card farm traits', href: '/mutations' },
  {
    keyword: 'anime card farm tier list',
    href: '/guides/best-cards-watch-guide',
  },
];

const startSteps = [
  {
    title: 'Claim codes',
    href: '/codes',
    body: 'Copy POTIONS and TRAITS! carefully, then plan the reward window.',
  },
  {
    title: 'Open with a target',
    href: '/guides/packs-and-upgrades-guide',
    body: 'Pull until cards improve income, then pause and upgrade.',
  },
  {
    title: 'Prepare offline income',
    href: '/guides/offline-money-guide',
    body: 'Log out with upgraded earners and a clear next pack goal.',
  },
  {
    title: 'Check mutations',
    href: '/guides/mutations-and-traits-guide',
    body: 'Spend trait resources only on cards you can keep.',
  },
];

const latestUpdateItems = [
  {
    title: 'Roblox universe refresh',
    date: officialGameFacts.updatedAt.slice(0, 10),
    body: 'The official Roblox experience was refreshed before this wiki pass. Use the official place as the source of truth for live game state.',
  },
  {
    title: 'Codes watch is live',
    date:
      activeCodes[0]?.lastChecked ?? officialGameFacts.updatedAt.slice(0, 10),
    body: `${activeCodes.length} active codes are source-checked, with TRAIT! kept separate as a spelling watch item.`,
  },
  {
    title: 'Wrong-game filter added',
    date: officialGameFacts.updatedAt.slice(0, 10),
    body: 'Anime Card Clash and Anime Card Collection results are intentionally separated from Anime Card Farm pages.',
  },
];

export function AnimeCardFarmHomePage() {
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
        logo: `${officialGameFacts.domain}/animecardfarm/icon.png`,
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
    <div className="bg-[#080D17] text-[#F6FBFF]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#27415F] border-b">
        <Image
          src="/animecardfarm/hero.jpg"
          alt="Anime Card Farm Roblox card pack art"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,13,23,0.98)_0%,rgba(8,13,23,0.9)_42%,rgba(8,13,23,0.46)_72%,rgba(8,13,23,0.88)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080D17] to-transparent" />

        <Container className="relative px-4 py-8 md:py-10 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#67F7D3] text-[#07101C]">
                  Roblox Tycoon
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#FFD35C] bg-[#080D17]/80 text-[#FFF6D6]"
                >
                  Packs + Offline Money
                </Badge>
              </div>
              <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
                Anime Card Farm Wiki
              </h1>
              <p className="max-w-2xl text-[#D7E7F5] text-lg leading-8 md:text-xl">
                Codes, pack routes, upgrade priorities, offline money setup,
                mutations, trait gems, and Roblox safety checks for Anime Card
                Farm players.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#67F7D3] text-[#07101C] hover:bg-[#9DFFE9]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    Start Guide
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#FF4FD8] bg-[#080D17]/70 text-[#F6FBFF] hover:bg-[#FF4FD8] hover:text-[#07101C]"
                >
                  <LocaleLink href="/codes">Codes</LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#FFD35C] bg-[#080D17]/70 text-[#FFF6D6] hover:bg-[#FFD35C] hover:text-[#07101C]"
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
                    className="rounded-md border border-[#27415F] bg-[#080D17]/70 px-3 py-2 font-medium text-[#B8C8D8] text-sm transition hover:border-[#67F7D3] hover:text-[#67F7D3]"
                  >
                    {item.keyword.replace('anime card farm ', '')}
                  </LocaleLink>
                ))}
              </div>
            </div>

            <aside
              aria-label="Anime Card Farm guide video"
              className="rounded-lg border border-[#27415F] bg-[#080D17]/85 p-4 shadow-2xl"
            >
              {featuredVideo ? (
                <div className="overflow-hidden rounded-md border border-[#27415F] bg-black">
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
                    className="flex items-center justify-between gap-3 bg-[#101827] px-3 py-2 text-[#B8C8D8] text-xs transition hover:text-[#67F7D3]"
                  >
                    <span className="inline-flex min-w-0 items-center gap-2">
                      <Play className="size-3 shrink-0 text-[#FF4FD8]" />
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
        <AnimeCardFarmMobileMenu currentPath="/" />
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-10">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {primaryLinks.map((link) => (
                <LocaleLink
                  key={link.title}
                  href={link.href}
                  className="group rounded-lg border border-[#27415F] bg-[#101827] p-5 transition hover:border-[#67F7D3]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#67F7D3] text-[#07101C]">
                      <link.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-display text-[#FFF6D6] text-xl font-bold">
                        {link.title}
                      </h2>
                      <p className="mt-2 text-[#B8C8D8] text-sm leading-6">
                        {link.body}
                      </p>
                    </div>
                  </div>
                </LocaleLink>
              ))}
            </section>

            <section className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-[#27415F] bg-[#101827] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#67F7D3] text-xs uppercase tracking-[0.18em]">
                      Latest Game Updates
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      Live wiki pulse
                    </h2>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-[#D7E7F5] hover:text-[#67F7D3]"
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
                      className="group grid gap-3 rounded-md border border-transparent p-2 transition hover:border-[#27415F] hover:bg-[#080D17]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="font-display font-bold text-[#FFF6D6]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-[#B8C8D8] text-sm leading-6">
                            {item.body}
                          </p>
                        </div>
                        <time className="shrink-0 text-[#B8C8D8] text-xs">
                          {item.date}
                        </time>
                      </div>
                    </LocaleLink>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#27415F] bg-[#101827] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#FFD35C] text-xs uppercase tracking-[0.18em]">
                      Start Here
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      Your first farm route
                    </h2>
                  </div>
                  <Coins className="size-8 text-[#FFD35C]" />
                </div>
                <div className="mt-6 space-y-4">
                  {startSteps.map((step, index) => (
                    <LocaleLink
                      key={step.title}
                      href={step.href}
                      className="group flex gap-3 rounded-lg border border-transparent p-2 transition hover:border-[#27415F] hover:bg-[#080D17]"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#FF4FD8] text-[#D7E7F5]">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-[#F6FBFF]">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-[#B8C8D8] text-sm leading-6">
                          {step.body}
                        </p>
                      </div>
                      <ArrowRight className="ml-auto mt-2 size-4 shrink-0 text-[#67F7D3] transition group-hover:translate-x-0.5" />
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-semibold text-[#67F7D3] text-xs uppercase tracking-[0.18em]">
                    Topic Hubs
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Core Anime Card Farm routes
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
                    className="group rounded-lg border border-[#27415F] bg-[#101827] p-5 transition hover:border-[#FFD35C]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-[#FFF6D6] text-xl font-bold">
                        {topic.label}
                      </h3>
                      <ArrowRight className="size-4 shrink-0 text-[#FFD35C] transition group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-3 text-[#B8C8D8] text-sm leading-6">
                      {topic.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section>
              <div>
                <p className="font-semibold text-[#67F7D3] text-xs uppercase tracking-[0.18em]">
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
                    className="group rounded-lg border border-[#27415F] bg-[#101827] p-5 transition hover:border-[#67F7D3]"
                  >
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#FF4FD8] text-[#07101C]">
                        {guide.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-[#27415F] text-[#B8C8D8]"
                      >
                        {guide.difficulty}
                      </Badge>
                    </div>
                    <h3 className="mt-4 font-display text-[#FFF6D6] text-2xl font-bold">
                      {guide.title}
                    </h3>
                    <p className="mt-3 text-[#B8C8D8] text-sm leading-6">
                      {guide.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>
          </main>

          <AnimeCardFarmRouteSidebar currentPath="/" />
        </div>
      </Container>
    </div>
  );
}
