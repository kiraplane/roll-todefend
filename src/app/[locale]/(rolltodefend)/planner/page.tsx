import Container from '@/components/layout/container';
import { FaqSection } from '@/components/rolltodefend/faq-section';
import { RollPlanner } from '@/components/rolltodefend/roll-planner';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { officialGameFacts } from '@/data/rolltodefend/sources';
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
    title: 'Roll to Defend Planner - Rolls, Upgrades, Zones and Offline Income',
    description:
      'Use the Roll to Defend planner to compare rolling units, upgrading a carry, buying a zone, or waiting for offline income.',
    locale,
    pathname: '/planner',
    image: '/rolltodefend/og-image.jpg',
  });
}

export default function PlannerPage() {
  const faqs = [
    {
      question: 'Is this planner using official formulas?',
      answer:
        'No. It uses the costs and income numbers you enter, so it stays useful even while exact hidden formulas or balance values are changing.',
    },
    {
      question: 'What decision does the planner compare?',
      answer:
        'It compares whether your next useful move is a roll batch, a key unit upgrade, a zone purchase, or waiting for offline income.',
    },
    {
      question: 'When should I ignore the planner?',
      answer:
        'Ignore it when an update changes the game UI or when a verified in-game mechanic gives you a better immediate answer.',
    },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Roll to Defend Roll Session Planner',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    url: `${officialGameFacts.domain}/planner`,
  };

  return (
    <div className="bg-[#10140F] py-12 text-[#F9FFF1]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#B7F44A] text-[#10140F]">Tool</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Roll to Defend Planner
          </h1>
          <p className="text-[#DCE9D2] text-lg leading-8">
            A lightweight decision tool for comparing rolls, upgrades, zone
            buys, and offline income without pretending the site knows every
            hidden balance value.
          </p>
        </header>

        <RollPlanner />

        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
