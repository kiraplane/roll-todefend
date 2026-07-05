import Container from '@/components/layout/container';
import { FaqSection } from '@/components/rolltodefend/faq-section';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guideCategoryIntro, guides } from '@/data/rolltodefend/guides';
import { officialGameFacts } from '@/data/rolltodefend/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Roll to Defend Guides - Units, Zones, Luck, Codes and Safety',
    description:
      'Read Roll to Defend guides for Roblox codes, beginner routes, units, zones, luck boosts, offline income, Discord links, and script safety.',
    locale,
    pathname: '/guides',
    image: '/rolltodefend/og-image.jpg',
  });
}

export default function GuidesPage() {
  const categories = Array.from(new Set(guides.map((guide) => guide.category)));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Roll to Defend Guides',
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${officialGameFacts.domain}/guides/${guide.slug}`,
      name: guide.title,
    })),
  };

  return (
    <div className="bg-[#10140F] py-12 text-[#F9FFF1]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#B7F44A] text-[#10140F]">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Roll to Defend Guides
          </h1>
          <p className="text-[#DCE9D2] text-lg leading-8">
            Decision-first Roblox guides for codes, rolling units, zombie waves,
            zones, luck boosts, offline income, official links, and script
            safety.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-lg border border-[#3A4F2D] bg-[#182215] p-5"
            >
              <h2 className="font-display text-xl font-bold">{category}</h2>
              <p className="mt-2 text-[#DCE9D2] text-sm leading-6">
                {guideCategoryIntro[category]}
              </p>
            </div>
          ))}
        </section>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#3A4F2D] bg-[#182215]"
            >
              <div className="relative aspect-video border-[#3A4F2D] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10140F]/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#74D4FF] text-[#10140F]">
                  {guide.category}
                </Badge>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#3A4F2D] text-[#DCE9D2]"
                  >
                    {guide.difficulty}
                  </Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#3A4F2D] text-[#DCE9D2]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-[#DCE9D2] text-sm leading-6">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#B7F44A] text-[#10140F] hover:bg-[#D7FF78]"
                >
                  <LocaleLink href={`/guides/${guide.slug}`}>
                    Read guide
                  </LocaleLink>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <FaqSection
          items={[
            {
              question: 'Which Roll to Defend guide should I read first?',
              answer:
                'Start with the beginner guide, then read how to play, units, zones, luck, and offline income once you understand the Roblox loop.',
            },
            {
              question: 'Why is there no full unit database yet?',
              answer:
                'Reliable Roll to Defend-specific unit data is still thin. The site uses decision guides first and avoids publishing invented tier-list data.',
            },
            {
              question: 'Are guide facts official?',
              answer:
                'Official facts come from Roblox and Roblox API data. Codes and strategies are cross-checked from current public sources and marked conservatively.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
