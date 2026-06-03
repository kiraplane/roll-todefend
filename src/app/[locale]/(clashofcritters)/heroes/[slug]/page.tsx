import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { critters, getCritter } from '@/data/clashofcritters/critters';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import { Shield, Sparkles, Swords } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

function publicNotes(items: string[]) {
  const hiddenPattern = /source|wiki|fandom|verification|checked/i;
  return items.filter((item) => !hiddenPattern.test(item));
}

function getRoleIcon(role: string) {
  if (role === 'DPS') return Swords;
  if (role === 'Tank' || role === 'Guardian') return Shield;
  return Sparkles;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    critters.map((critter) => ({ locale, slug: critter.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const critter = getCritter(slug);
  if (!critter) return {};
  return constructMetadata({
    title: `${critter.name} - Duck Survival Role, Tier and Upgrade Notes`,
    description: `${critter.name} profile for Duck Survival: tier, role, upgrade priority, strengths, weaknesses, and team fit.`,
    locale,
    pathname: `/heroes/${slug}`,
  });
}

export default async function HeroRolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const critter = getCritter(slug);

  if (!critter) {
    notFound();
  }

  const strengths = publicNotes(critter.strengths);
  const weaknesses = publicNotes(critter.weaknesses);
  const firstSkill = critter.skills[0];
  const howToGet = publicNotes(critter.howToGet ? [critter.howToGet] : [])[0];
  const RoleIcon = getRoleIcon(critter.role);

  return (
    <div className="bg-[#FFF7E8] py-12 text-[#2A2118]">
      <Container className="space-y-8 px-4">
        <header className="grid gap-8 rounded-lg border border-[#F2D5A8] bg-white p-6 shadow-sm lg:grid-cols-[220px_1fr]">
          <div className="flex items-center justify-center rounded-lg bg-[#FFF7E8] p-6">
            <div className="flex size-40 items-center justify-center rounded-lg border border-[#F2D5A8] bg-[#FFF4DC]">
              <RoleIcon className="size-16 text-[#E76825]" aria-hidden />
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[#7C5CFF] text-white">
                Tier {critter.tier}
              </Badge>
              <Badge variant="outline">{critter.element}</Badge>
              <Badge variant="outline">{critter.role}</Badge>
              <Badge variant="outline">{critter.rarity}</Badge>
            </div>
            <h1 className="font-display text-4xl font-black md:text-6xl">
              {critter.name}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[#5A4631]">
              {critter.summary} In Duck Survival, this profile is best read as a
              role decision: does your current team need this job more than the
              next shiny upgrade?
            </p>
          </div>
        </header>

        <section className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-lg border border-[#F2D5A8] bg-white p-5">
            <h2 className="font-display text-2xl font-bold">
              What this role fixes
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5A4631]">
              {firstSkill
                ? `${firstSkill.name}: ${firstSkill.description}`
                : `Use this ${critter.role.toLowerCase()} role when that job is missing from your lineup.`}
            </p>
          </div>

          <div className="rounded-lg border border-[#F2D5A8] bg-white p-5">
            <h2 className="font-display text-2xl font-bold">Upgrade path</h2>
            <p className="mt-3 text-sm leading-6 text-[#5A4631]">
              {critter.evolution.stages.join(' -> ')}
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5A4631]">
              <strong>Upgrade test:</strong> {critter.evolution.trial}
            </p>
          </div>

          <div className="rounded-lg border border-[#F2D5A8] bg-white p-5">
            <h2 className="font-display text-2xl font-bold">
              How to think about it
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5A4631]">
              Treat {critter.name} as a {critter.role.toLowerCase()} pick with{' '}
              {critter.element.toLowerCase()} coverage. It becomes worth
              prioritizing when that role solves the exact wave, boss, or base
              defense problem stopping your progress.
            </p>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-[#F2D5A8] bg-white p-5">
            <h2 className="font-display text-2xl font-bold">Strengths</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#5A4631]">
              {(strengths.length
                ? strengths
                : [
                    `Fits ${critter.role.toLowerCase()} slots when your team needs ${critter.element.toLowerCase()} coverage.`,
                  ]
              ).map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-[#F2D5A8] bg-white p-5">
            <h2 className="font-display text-2xl font-bold">Weaknesses</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#5A4631]">
              {(weaknesses.length
                ? weaknesses
                : ['Needs team context before it becomes a priority upgrade.']
              ).map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-lg border border-[#F2D5A8] bg-white p-5">
          <h2 className="font-display text-2xl font-bold">
            Where this profile points next
          </h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-[#5A4631] md:grid-cols-3">
            <p>
              {howToGet ||
                'Use this role checklist against your current unlocked heroes and skills.'}
            </p>
            <p>
              Strong partners:{' '}
              {critter.bestPartners.length
                ? critter.bestPartners.join(', ')
                : 'a frontliner, a damage anchor, or a control support.'}
            </p>
            <p>
              If the role sounds useful but not urgent, compare it with the Duck
              Survival tier list before spending rare resources.
            </p>
          </div>
        </section>

        <Button asChild className="bg-[#FF7A1A] text-white">
          <LocaleLink href="/heroes">Back to all roles</LocaleLink>
        </Button>
      </Container>
    </div>
  );
}
