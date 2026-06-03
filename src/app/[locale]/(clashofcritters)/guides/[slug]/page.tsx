import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getGuide, guides } from '@/data/clashofcritters/guides';
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
  if (!guide) return {};
  return constructMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    locale,
    pathname: `/guides/${slug}`,
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

  return (
    <div className="bg-[#FFF4DC] py-12 text-[#1F241D]">
      <Container className="grid gap-8 px-4 lg:grid-cols-[1fr_300px]">
        <article className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#F2A93B] text-[#1F241D]">
              {guide.difficulty}
            </Badge>
            {guide.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mt-5 font-display text-4xl font-black md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#4E4A38]">
            {guide.summary}
          </p>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-lg bg-[#FFF4DC]">
            <Image
              src={guide.coverImageUrl}
              alt={guide.title}
              fill
              priority
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-cover"
            />
          </div>

          {guide.video ? (
            <div className="mt-8 overflow-hidden rounded-lg border border-[#E7C980] bg-black">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${guide.video.id}`}
                title={guide.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="bg-[#1F241D] px-4 py-3 text-sm text-[#FFF4DC]">
                Source video:{' '}
                {guide.video.url ? (
                  <a
                    href={guide.video.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    {guide.video.title}
                  </a>
                ) : (
                  guide.video.title
                )}{' '}
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
                <div className="mt-3 space-y-4 text-base leading-8 text-[#4E4A38]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-[#4E4A38]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>- {bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </article>

        <aside className="space-y-4">
          <div className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-5 shadow-sm">
            <h2 className="font-display text-xl font-bold">
              Related Duck Survival pages
            </h2>
            <div className="mt-4 grid gap-2">
              <Button asChild variant="outline">
                <LocaleLink href="/codes">Codes</LocaleLink>
              </Button>
              <Button asChild variant="outline">
                <LocaleLink href="/tier-list">Tier list</LocaleLink>
              </Button>
              <Button asChild variant="outline">
                <LocaleLink href="/best-team">Best team</LocaleLink>
              </Button>
              <Button asChild variant="outline">
                <LocaleLink href="/guides/best-skills">Best skills</LocaleLink>
              </Button>
              <Button asChild variant="outline">
                <LocaleLink href="/download">Download safely</LocaleLink>
              </Button>
            </div>
          </div>
        </aside>
      </Container>
    </div>
  );
}
