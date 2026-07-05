import Container from '@/components/layout/container';
import { FaqSection } from '@/components/rolltodefend/faq-section';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import {
  getGuide,
  guides,
  relatedRouteLabels,
} from '@/data/rolltodefend/guides';
import { officialGameFacts } from '@/data/rolltodefend/sources';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    guides.map((guide) => ({ locale, slug: guide.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return constructMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    locale,
    pathname: `/guides/${slug}`,
    image: '/rolltodefend/og-image.jpg',
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.summary,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        image: `${officialGameFacts.domain}/rolltodefend/og-image.jpg`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Roll to Defend Wiki',
            item: officialGameFacts.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: `${officialGameFacts.domain}/guides`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: `${officialGameFacts.domain}/guides/${guide.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-[#10140F] py-12 text-[#F9FFF1]">
      <JsonLd data={jsonLd} />
      <Container className="px-4">
        <article className="rounded-lg border border-[#3A4F2D] bg-[#182215] p-6 md:p-8">
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
            {guide.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-[#3A4F2D] text-[#DCE9D2]"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mt-5 font-display text-4xl font-black md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-[#DCE9D2] text-lg leading-8">
            {guide.summary}
          </p>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-lg border border-[#3A4F2D]">
            <Image
              src={guide.coverImageUrl}
              alt={`${guide.title} cover`}
              fill
              priority
              sizes="(min-width: 1024px) 820px, 100vw"
              className="object-cover"
            />
          </div>

          {guide.video ? (
            <div className="mt-8 overflow-hidden rounded-lg border border-[#3A4F2D] bg-black">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${guide.video.id}`}
                title={guide.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="bg-[#10140F] px-4 py-3 text-[#DCE9D2] text-sm">
                Walkthrough cross-check:{' '}
                <a
                  href={guide.video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#B7F44A] underline underline-offset-4"
                >
                  {guide.video.title}
                </a>{' '}
                by {guide.video.channel}
              </div>
            </div>
          ) : null}

          <div className="mt-8 space-y-8">
            {guide.body.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-bold">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4 text-[#DCE9D2] text-base leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2 text-[#DCE9D2] text-sm leading-7">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>- {bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-lg border border-[#3A4F2D] bg-[#10140F] p-5">
            <h2 className="font-display text-2xl font-bold">
              Related next steps
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {guide.relatedRoutes.map((route) => (
                <LocaleLink
                  key={route}
                  href={route}
                  className="group flex min-w-0 items-center justify-between gap-3 rounded-md border border-[#3A4F2D] bg-[#182215] px-4 py-3 text-left transition hover:border-[#B7F44A]"
                >
                  <span className="min-w-0 break-words font-medium text-[#FFF2C5]">
                    {relatedRouteLabels[route] ?? route}
                  </span>
                  <span className="shrink-0 text-[#B7F44A]">-&gt;</span>
                </LocaleLink>
              ))}
            </div>
          </section>

          <div className="mt-10">
            <FaqSection items={guide.faq} />
          </div>
        </article>
      </Container>
    </div>
  );
}
