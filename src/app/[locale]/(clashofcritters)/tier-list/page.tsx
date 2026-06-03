import { FaqSection } from '@/components/clashofcritters/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { critters } from '@/data/clashofcritters/critters';
import { tierEntries } from '@/data/clashofcritters/tier-list';
import type { Critter } from '@/data/clashofcritters/types';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { Shield, Sparkles, Swords } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const tiers: Critter['tier'][] = ['S', 'A', 'B', 'C', 'Unranked'];
const tierNotes: Record<Critter['tier'], string> = {
  S: 'Highest-priority Duck Survival hero roles with the clearest first-upgrade value.',
  A: 'Strong Duck Survival hero choices when their role fits your current blocker.',
  B: 'Useful situational hero picks that need better team context before heavy investment.',
  C: 'Low-priority hero picks unless you need a very specific element or role.',
  Unranked:
    'Hero roles that still need stronger live play signals before being ranked.',
};
const tierEntryBySlug = tierEntries.reduce((map, entry) => {
  const list = map.get(entry.critterSlug) || [];
  list.push(entry);
  map.set(entry.critterSlug, list);
  return map;
}, new Map<string, typeof tierEntries>());

function RoleIcon({ role }: { role: Critter['role'] }) {
  const Icon =
    role === 'DPS'
      ? Swords
      : role === 'Tank' || role === 'Guardian'
        ? Shield
        : Sparkles;
  return <Icon className="size-7 text-[#E76825]" aria-hidden />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Duck Survival Tier List - Roles and Upgrade Priority',
    description:
      'Duck Survival tier list guide for best heroes, carry roles, control support, defensive slots, burst damage, utility picks, and upgrade priority.',
    locale,
    pathname: '/tier-list',
  });
}

export default function TierListPage() {
  return (
    <div className="bg-[#FFF4DC] py-12 text-[#1F241D]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#2F3E34] text-[#FFF4DC]">Tier list</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Duck Survival Tier List
          </h1>
          <p className="text-lg leading-8 text-[#4E4A38]">
            Use this Duck Survival tier list as a role-priority guide for best
            heroes, upgrade order, and team slots. No reliable public hero icon
            database was found, so this page does not use hand-drawn hero icons
            as placeholders.
          </p>
        </header>

        <section className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold">
            How to use this Duck Survival tier list
          </h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-[#4E4A38] md:grid-cols-3">
            <p>
              1. Prioritize your current bottleneck: survival, control, or
              damage.
            </p>
            <p>
              2. Upgrade one core team before spreading resources across
              backups.
            </p>
            <p>
              3. Open the linked hero profile when a role looks useful for your
              lineup.
            </p>
          </div>
        </section>

        <div className="grid gap-4">
          {tiers.map((tier) => {
            const entries = critters.filter((item) => item.tier === tier);
            if (entries.length === 0) return null;

            return (
              <section
                key={tier}
                className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] shadow-sm"
              >
                <div className="flex items-center gap-3 border-[#E7C980] border-b p-5">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-[#E76825] font-display text-2xl font-black text-white">
                    {tier}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold">
                      Duck Survival tier list: {tier} tier
                    </h2>
                    <p className="text-sm text-[#7B643A]">
                      {entries.length} hero entries · {tierNotes[tier]}
                    </p>
                  </div>
                </div>
                <div className="grid gap-0 divide-y divide-[#E7C980]">
                  {entries.map((critter) => {
                    const notes = tierEntryBySlug.get(critter.slug) || [];
                    const firstSkill = critter.skills[0];
                    const reason =
                      notes[0]?.reason ||
                      `${critter.name} is listed as a ${critter.tier} Duck Survival hero role. Compare its ${critter.role.toLowerCase()} job, ${critter.element.toLowerCase()} element, and skill text before spending upgrades.`;

                    return (
                      <div
                        key={critter.slug}
                        className="grid gap-4 p-5 md:grid-cols-[72px_180px_1fr_auto] md:items-center"
                      >
                        <LocaleLink
                          href={`/heroes/${critter.slug}`}
                          className="flex size-16 items-center justify-center rounded-lg bg-[#FFF4DC]"
                          aria-label={`Open ${critter.name} Duck Survival role profile`}
                        >
                          <RoleIcon role={critter.role} />
                        </LocaleLink>
                        <div className="min-w-0">
                          <LocaleLink
                            href={`/heroes/${critter.slug}`}
                            className="font-display text-xl font-bold hover:text-[#E76825]"
                          >
                            {critter.name}
                          </LocaleLink>
                          <div className="mt-1 text-sm text-[#7B643A]">
                            {critter.element} · {critter.role} ·{' '}
                            {critter.rarity}
                          </div>
                        </div>
                        <div className="space-y-2 text-sm leading-6 text-[#4E4A38]">
                          <p>{reason}</p>
                          {firstSkill ? (
                            <p>
                              <strong className="text-[#1F241D]">Skill:</strong>{' '}
                              {firstSkill.name}
                              {firstSkill.type ? ` · ${firstSkill.type}` : ''}
                            </p>
                          ) : null}
                        </div>
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {notes.slice(0, 2).map((note) => (
                            <Badge key={note.mode} variant="outline">
                              {note.mode.replace('_', ' ')}
                            </Badge>
                          ))}
                          <Button asChild variant="outline" size="sm">
                            <LocaleLink href={`/heroes/${critter.slug}`}>
                              Profile
                            </LocaleLink>
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <section className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-6">
          <h2 className="font-display text-2xl font-bold">
            Duck Survival tier list ranking rules
          </h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-[#4E4A38] md:grid-cols-2">
            <p>
              This Duck Survival tier list values control, team fit, role
              clarity, and whether an upgrade solves a real stage, boss, or base
              problem. It is not an official hero-icon tier database.
            </p>
            <p>
              Lower tier does not mean unusable. It means the hero is more
              situational or needs a clearer team context before becoming a
              priority upgrade.
            </p>
          </div>
          <Button asChild className="mt-5 bg-[#F2A93B] text-[#1F241D]">
            <LocaleLink href="/best-team">Use the team guide</LocaleLink>
          </Button>
        </section>

        <FaqSection
          items={[
            {
              question:
                'Should I only upgrade S-tier Duck Survival tier list roles?',
              answer:
                'No. Upgrade S-tier roles when they fit your team, but a tank, support, or control role can be more urgent than a higher-damage unit.',
            },
            {
              question: 'What matters most for beginners?',
              answer:
                'Duck Survival beginners should value stable clears: one defensive anchor, one damage carry, and one control or utility option.',
            },
            {
              question: 'Can a B-tier hero still be useful?',
              answer:
                'Yes. Role coverage, available upgrades, and current stage needs can make a lower-ranked hero the right temporary investment.',
            },
            {
              question: 'Where do I compare full teams?',
              answer:
                'Use the Best Team page after checking this Duck Survival tier list so you can turn individual roles into a real lineup.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
