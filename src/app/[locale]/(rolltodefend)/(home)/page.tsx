import { RollToDefendHomePage } from '@/components/rolltodefend/home-page';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Roll to Defend Wiki - Codes, Units, Zones and Roblox Guide',
    description:
      'Roll to Defend Wiki covers Roblox codes, units, zombie waves, zones, luck boosts, offline income, Discord links, and safe official access.',
    locale,
    pathname: '',
    image: '/rolltodefend/og-image.jpg',
  });
}

export default function HomePage() {
  return <RollToDefendHomePage />;
}
