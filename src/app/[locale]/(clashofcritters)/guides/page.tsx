import { FaqSection } from '@/components/clashofcritters/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guides } from '@/data/clashofcritters/guides';
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
    title: 'Duck Survival Guides - Tier List, Gift Codes, Skills and Teams',
    description:
      'Duck Survival guides for tier list roles, gift codes, beginner progression, best skills, best team, tower defense, Arena, and Guild Boss strategy.',
    locale,
    pathname: '/guides',
  });
}

export default function GuidesPage() {
  return (
    <div className="bg-[#FFF4DC] py-12 text-[#1F241D]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#F2A93B] text-[#1F241D]">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Duck Survival Guides
          </h1>
          <p className="text-lg leading-8 text-[#4E4A38]">
            Start with beginner progression, the Duck Survival tier list, gift
            codes, best skills, and tower defense. Each guide is written around
            the decision players actually need to make before spending
            resources.
          </p>
        </header>

        <section className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold">
            How to use these Duck Survival guides
          </h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-[#4E4A38] md:grid-cols-3">
            <p>1. Read the short answer before changing your lineup.</p>
            <p>
              2. Match the advice to your failure type: base, wave, or boss.
            </p>
            <p>
              3. Use internal links to compare gift codes, tier list roles,
              skills, and team templates.
            </p>
          </div>
        </section>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#E7C980] bg-[#FFFAF0] shadow-sm"
            >
              <div className="relative aspect-video bg-[#FFF4DC]">
                <Image
                  src={guide.coverImageUrl}
                  alt={guide.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{guide.difficulty}</Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {guide.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#4E4A38]">
                  {guide.summary}
                </p>
                <Button asChild className="mt-5 bg-[#F2A93B] text-[#1F241D]">
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
              question:
                'Which Duck Survival guide should beginners read first?',
              answer:
                'Start with the Duck Survival beginner guide, then open gift codes, the Duck Survival tier list, and Best Skills before spending early rewards.',
            },
            {
              question: 'Which guide helps if I am stuck at night?',
              answer:
                'Use the tower defense guide if the base breaks, Best Skills if enemies arrive too quickly, and Best Team if your lineup shape feels wrong.',
            },
            {
              question: 'Which tier list guide should I read first?',
              answer:
                'Read the Duck Survival tier list before using rare pulls or upgrade materials. It explains carry, control, defense, burst, and utility roles.',
            },
            {
              question: 'Which skill guide helps with roguelike runs?',
              answer:
                'Read Best Skills when you are choosing between Meteor Strike, Frost Shield, EMP, Focused Laser, and defensive skills.',
            },
            {
              question: 'Do guides replace tier list and team pages?',
              answer:
                'No. Guides explain decisions; the tier list and team pages help you compare roles and put those decisions into a lineup.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
