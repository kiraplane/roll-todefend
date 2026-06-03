import { CrittersBrowser } from '@/components/clashofcritters/critters-browser';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { critters } from '@/data/clashofcritters/critters';
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
    title: 'Duck Survival Tier Roles - Hero Role Database',
    description:
      'Browse Duck Survival hero role profiles for DPS, control, tower support, defenders, burst damage, and economy picks.',
    locale,
    pathname: '/heroes',
  });
}

export default function HeroesPage() {
  const roleCount = new Set(critters.map((critter) => critter.role)).size;
  const elementCount = new Set(critters.map((critter) => critter.element)).size;
  const tierCount = new Set(critters.map((critter) => critter.tier)).size;

  return (
    <div className="bg-[#FFF7E8] py-12 text-[#2A2118]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#7C5CFF] text-white">
            Duck Survival tier roles
          </Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Duck Survival Hero Role Database
          </h1>
          <p className="text-lg leading-8 text-[#5A4631]">
            Use these Duck Survival role profiles as a practical tier-list
            companion. The point is not to pretend every hero has perfect public
            data; it is to help you decide which job your team actually needs
            before spending upgrades.
          </p>
          <div className="grid gap-3 text-sm md:grid-cols-4">
            {[
              ['Profiles', critters.length],
              ['Roles', roleCount],
              ['Elements', elementCount],
              ['Tiers', tierCount],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-md border border-[#F2D5A8] bg-white px-3 py-2"
              >
                <span className="block text-[#7A5B36]">{label}</span>
                <strong className="font-display text-xl text-[#2A2118]">
                  {value}
                </strong>
              </div>
            ))}
          </div>
        </header>

        <CrittersBrowser critters={critters} />

        <section className="rounded-lg border border-[#F2D5A8] bg-white p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold">
            Reading the Duck Survival role list
          </h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-[#5A4631] md:grid-cols-3">
            <p>
              Start with the blocker: damage, survival, control, tower uptime,
              or economy.
            </p>
            <p>
              Pick one role that fixes that blocker before spreading resources
              across several upgrades.
            </p>
            <p>
              Move back to the tier list or best team page when you need to
              compare role priority.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
