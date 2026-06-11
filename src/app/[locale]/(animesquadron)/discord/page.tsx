import { FaqSection } from '@/components/animesquadron/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { officialGameFacts, sources } from '@/data/animesquadron/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Squadron Discord, Trello and Wiki Links',
    description:
      'Check Anime Squadron Discord, Trello, Wiki, official Roblox links, and safe community-link status without falling for fake code or download pages.',
    locale,
    pathname: '/discord',
    image: '/animesquadron/og-image.png',
  });
}

export default function DiscordPage() {
  return (
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#37D6D0] text-[#041414]">Community</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron Discord, Trello and Wiki
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            Use Roblox as the anchor, treat invite links carefully, and keep
            codes, tier list decisions, and download steps on stable pages.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Official Roblox',
              status: 'Verified',
              body: 'Use the Roblox game page by Komplex Studio as the primary official link.',
              href: officialGameFacts.officialRobloxUrl,
            },
            {
              title: 'Discord',
              status: 'Watch',
              body: 'Mentioned by launch coverage and community guides, but invite links can change. Prefer links surfaced from Roblox or developer channels.',
              href: sources.destructoidCodes.url,
            },
            {
              title: 'Trello / Official Wiki',
              status: 'Not verified',
              body: 'No official Trello or official Wiki was verified during the June 11, 2026 check.',
              href: sources.destructoidCodes.url,
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5"
            >
              <Badge className="bg-[#E03A22] text-[#FFF5EA]">
                {item.status}
              </Badge>
              <h2 className="mt-4 font-display text-2xl font-bold">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
                {item.body}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-[#37D6D0] underline underline-offset-4"
              >
                Source check
              </a>
            </article>
          ))}
        </section>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
          >
            <LocaleLink href="/guides/discord-trello-wiki-guide">
              Read link guide
            </LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/download">Safe play link</LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/codes">Active codes</LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/tier-list">Tier list</LocaleLink>
          </Button>
        </div>

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">
            Best way to use Discord updates
          </h2>
          <div className="mt-4 grid gap-4 text-sm leading-7 text-[#D5C6B7] md:grid-cols-3">
            <p>
              <strong className="text-[#FFF5EA]">Codes:</strong> test new code
              claims inside the Roblox game before changing your reward plan.
            </p>
            <p>
              <strong className="text-[#FFF5EA]">Units:</strong> wait for a role
              to become clear before spending Perfect Cubes or rare rerolls.
            </p>
            <p>
              <strong className="text-[#FFF5EA]">Links:</strong> avoid external
              downloads, executors, forms, or pages that ask for account
              details.
            </p>
          </div>
        </section>

        <FaqSection
          items={[
            {
              question: 'Is there an official Anime Squadron Trello?',
              answer:
                'No official Trello was verified during the June 11, 2026 check.',
            },
            {
              question: 'Is this site official?',
              answer:
                'No. Anime Squadron Wiki is an unofficial fan-made guide site.',
            },
            {
              question: 'Where should I get safe links?',
              answer:
                'Use the official Roblox page first, then stable codes, tier list, and guide pages for gameplay decisions.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
