import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guides } from '@/data/clashofcritters/guides';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  Download,
  ShieldCheck,
  Sparkles,
  Swords,
  Trophy,
} from 'lucide-react';
import Image from 'next/image';

const corePages = [
  {
    title: 'Duck Survival Gift Codes',
    body: 'Active rewards, redemption notes, and what to spend first after claiming codes.',
    href: '/codes',
    icon: ClipboardList,
  },
  {
    title: 'Duck Survival Tier List',
    body: 'Role priorities for carry damage, control, base defense, burst, and support.',
    href: '/tier-list',
    icon: Trophy,
  },
  {
    title: 'Beginner Guide',
    body: 'A practical first-week route for tutorial rewards, base upgrades, and team focus.',
    href: '/guides/beginner-guide',
    icon: BookOpen,
  },
  {
    title: 'Best Skills',
    body: 'Pick wave clear, freeze, EMP, boss damage, or defense by reading the failed night.',
    href: '/guides/best-skills',
    icon: Sparkles,
  },
  {
    title: 'Best Team',
    body: 'Team templates for early clears, stage pushing, bosses, Arena, and stable defense.',
    href: '/best-team',
    icon: Swords,
  },
  {
    title: 'Tower Defense Guide',
    body: 'Daytime base planning, night wave diagnosis, tower timing, and fortress upgrades.',
    href: '/guides/tower-defense-guide',
    icon: ShieldCheck,
  },
  {
    title: 'Download',
    body: 'Official install path and safer alternatives to random Duck Survival mod APK files.',
    href: '/download',
    icon: Download,
  },
];

const starterPath = [
  {
    title: 'Claim rewards first',
    body: 'Redeem Duck Survival gift codes before you spend early diamonds, keys, or upgrade materials.',
    href: '/codes',
  },
  {
    title: 'Check the bottleneck',
    body: 'If the base breaks, upgrade defense. If enemies survive, upgrade damage. If waves arrive too fast, add control.',
    href: '/guides/beginner-guide',
  },
  {
    title: 'Spend around roles',
    body: 'Use the Duck Survival tier list and best skills guide to support one clear carry instead of scattering resources.',
    href: '/tier-list',
  },
];

export function ClashHomePage() {
  const latestGuides = guides.slice(0, 4);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Duck Survival Wiki',
    url: '/',
    description:
      'Duck Survival Wiki for gift codes, tier list, beginner guide, best skills, best team, tower defense tips, download help, and mod APK safety.',
  };

  return (
    <div className="bg-[#FFF4DC] text-[#1F241D]">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static local schema data.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-[#E7C980] border-b bg-[#FFF4DC]">
        <Container className="grid items-center gap-8 px-4 py-8 md:py-10 lg:min-h-[540px] lg:grid-cols-[1.04fr_0.96fr]">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-[#2F3E34] text-[#FFF4DC]">
                Independent fan wiki
              </Badge>
              <Badge className="bg-[#6FC24A] text-[#1F241D]">
                Gift codes, tier list, guides
              </Badge>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl font-display text-5xl font-black leading-tight tracking-normal text-[#1F241D] md:text-7xl">
                Duck Survival Wiki
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#4E4A38] md:text-xl">
                Start with Duck Survival gift codes, compare the Duck Survival
                tier list, then use plain-English guides for beginner
                progression, best skills, best team builds, tower defense
                upgrades, download safety, and mod APK risks.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[#F2A93B] text-[#1F241D] hover:bg-[#E7C980]"
              >
                <LocaleLink href="/codes">
                  Gift codes
                  <ArrowRight className="size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#2F3E34] bg-[#FFFAF0] text-[#2F3E34]"
              >
                <LocaleLink href="/tier-list">Tier list</LocaleLink>
              </Button>
              <Button asChild size="lg" variant="outline">
                <LocaleLink href="/guides/beginner-guide">
                  Beginner guide
                </LocaleLink>
              </Button>
            </div>
          </div>

          <aside className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-5 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7B643A]">
              Start here
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold">
              Three pages cover most early questions
            </h2>
            <div className="mt-5 divide-y divide-[#E7C980]">
              {starterPath.map((item, index) => (
                <LocaleLink
                  key={item.title}
                  href={item.href}
                  className="group grid grid-cols-[36px_1fr_auto] items-start gap-3 py-4 first:pt-0 last:pb-0"
                >
                  <span className="flex size-8 items-center justify-center rounded-md bg-[#2F3E34] font-display text-sm font-black text-[#FFF4DC]">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-display text-lg font-bold group-hover:text-[#E76825]">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-[#4E4A38]">
                      {item.body}
                    </span>
                  </span>
                  <ArrowRight className="mt-1 size-4 text-[#E76825]" />
                </LocaleLink>
              ))}
            </div>
          </aside>
        </Container>
      </section>

      <section className="py-12">
        <Container className="space-y-6 px-4">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#7B643A]">
              Core Duck Survival pages
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              Choose the page that matches the decision in front of you
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {corePages.map((item) => (
              <LocaleLink
                key={item.title}
                href={item.href}
                className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#E76825]"
              >
                <item.icon className="mb-4 size-7 text-[#E76825]" />
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#4E4A38]">
                  {item.body}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container className="space-y-6 px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.18em] text-[#7B643A]">
                Latest Duck Survival guides
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">
                Recent walkthroughs with video sources and practical notes
              </h2>
            </div>
            <Button asChild variant="outline">
              <LocaleLink href="/guides">Open all guides</LocaleLink>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {latestGuides.map((guide) => (
              <LocaleLink
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="grid overflow-hidden rounded-lg border border-[#E7C980] bg-[#FFFAF0] shadow-sm transition hover:border-[#E76825] sm:grid-cols-[180px_1fr]"
              >
                <div className="relative aspect-video bg-[#FFF4DC] sm:aspect-auto">
                  <Image
                    src={guide.coverImageUrl}
                    alt={guide.title}
                    fill
                    sizes="(min-width: 768px) 180px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{guide.difficulty}</Badge>
                    <Badge className="bg-[#2F3E34] text-[#FFF4DC]">
                      {guide.updatedAt}
                    </Badge>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#4E4A38]">
                    {guide.summary}
                  </p>
                </div>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
