import { FaqSection } from '@/components/animesquadron/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { traitPlans } from '@/data/animesquadron/traits';
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
    title: 'Anime Squadron Reroll Guide - Stat Rerolls and Reroll Cubes',
    description:
      'Use Anime Squadron Stat Rerolls, Reroll Cubes, Trait Shards, and Perfect Cubes with a one-carry-at-a-time stop rule.',
    locale,
    pathname: '/reroll',
    image: '/animesquadron/og-image.png',
  });
}

export default function RerollPage() {
  return (
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#37D6D0] text-[#041414]">Reroll</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron Reroll Guide
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            Rerolls should change a clear. Focus one keeper unit, stop when the
            run improves, and avoid polishing starter filler.
          </p>
        </header>

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">
            Reroll decision ladder
          </h2>
          <ol className="mt-4 space-y-3 text-sm leading-7 text-[#D5C6B7]">
            <li>1. Redeem active codes first.</li>
            <li>2. Summon or choose the unit that will act as your carry.</li>
            <li>3. Test the next wave or boss wall before spending.</li>
            <li>4. Reroll only if the result can change that wall.</li>
            <li>
              5. Stop after a useful result instead of chasing perfection.
            </li>
          </ol>
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          {traitPlans
            .filter((plan) =>
              ['perfect-cube-stop-rule', 'stat-reroll-discipline'].includes(
                plan.slug
              )
            )
            .map((plan) => (
              <article
                key={plan.slug}
                className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5"
              >
                <Badge className="bg-[#E03A22] text-[#FFF5EA]">
                  {plan.priority}
                </Badge>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {plan.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
                  {plan.useWhen}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#F3B23A]">
                  Avoid: {plan.avoid}
                </p>
              </article>
            ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
          >
            <LocaleLink href="/guides/stat-reroll-guide">
              Read stat reroll guide
            </LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/traits">Open traits</LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/guides/trait-shards-reroll-cubes-farm">
              Trait Shards farm
            </LocaleLink>
          </Button>
        </div>

        <FaqSection
          items={[
            {
              question: 'Should I reroll every Anime Squadron unit once?',
              answer:
                'No. Focus rerolls on one keeper unit so the result can change your next clear.',
            },
            {
              question: 'When should I stop rerolling?',
              answer:
                'Stop when the result solves the current wave, boss, or mode wall.',
            },
            {
              question: 'Should starter filler get rerolls?',
              answer:
                'Only if it unexpectedly stays useful. Most filler should be replaced before scarce rerolls are spent.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
