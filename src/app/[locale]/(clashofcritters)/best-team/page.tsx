import { FaqSection } from '@/components/clashofcritters/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { critters } from '@/data/clashofcritters/critters';
import { teams } from '@/data/clashofcritters/teams';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const critterBySlug = new Map(critters.map((item) => [item.slug, item.name]));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Duck Survival Best Team - Team Building Guide',
    description:
      'Duck Survival best team templates for beginner progression, stage pushing, boss damage, Arena pressure, and tower defense.',
    locale,
    pathname: '/best-team',
  });
}

export default function BestTeamPage() {
  return (
    <div className="bg-[#FFF4DC] py-12 text-[#1F241D]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#6FC24A] text-[#1F241D]">Team guide</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Duck Survival Best Team
          </h1>
          <p className="text-lg leading-8 text-[#4E4A38]">
            Use these Duck Survival team templates when your lineup needs a
            clearer job. The best teams combine a carry, a survival answer, and
            enough control or utility to keep night waves manageable.
          </p>
        </header>

        <section className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold">
            How to build a better Duck Survival team
          </h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-[#4E4A38] md:grid-cols-3">
            <p>1. Pick one defensive anchor before adding extra damage.</p>
            <p>
              2. Add control or support if enemies are reaching your backline.
            </p>
            <p>
              3. Upgrade the core together instead of chasing every new hero.
            </p>
          </div>
        </section>

        <div className="grid gap-5">
          {teams.map((team) => (
            <section
              key={team.id}
              className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <Badge variant="outline">{team.purpose}</Badge>
                  <h2 className="mt-3 font-display text-2xl font-bold">
                    {team.name}
                  </h2>
                </div>
                <Badge className="bg-[#2F3E34] text-[#FFF4DC]">
                  Team template
                </Badge>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div>
                  <h3 className="font-semibold">Core</h3>
                  <ul className="mt-2 space-y-2 text-sm text-[#5A4631]">
                    {team.core.map((slug) => (
                      <li key={slug}>
                        <LocaleLink
                          href={`/heroes/${slug}`}
                          className="text-[#2F3E34] underline underline-offset-4"
                        >
                          {critterBySlug.get(slug) ?? slug}
                        </LocaleLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Substitutes</h3>
                  <ul className="mt-2 space-y-2 text-sm text-[#4E4A38]">
                    {team.substitutes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm leading-6 text-[#4E4A38]">{team.notes}</p>
              </div>
            </section>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-[#F2A93B] text-[#1F241D]">
            <LocaleLink href="/tier-list">
              Compare with the tier list
            </LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/guides/best-skills">Read best skills</LocaleLink>
          </Button>
        </div>

        <FaqSection
          items={[
            {
              question: 'What is the safest Duck Survival beginner team shape?',
              answer:
                'Use one defensive anchor, one reliable damage dealer, and one control or support pick before experimenting with specialists.',
            },
            {
              question: 'Should I copy a Duck Survival team exactly?',
              answer:
                'No. Use the template, then swap based on your unlocked heroes, upgrades, and current stage problem.',
            },
            {
              question: 'When do I need more control?',
              answer:
                'Add control when enemies stack up, leak through lanes, or force your damage units to fall behind.',
            },
            {
              question: 'Where should I check individual units?',
              answer:
                'Open the Duck Survival tier list before committing upgrades to a team slot.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
