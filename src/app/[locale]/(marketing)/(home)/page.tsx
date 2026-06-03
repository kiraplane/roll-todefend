import { ClashHomePage } from '@/components/clashofcritters/clash-home-page';
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
    title: 'Duck Survival Wiki - Gift Codes, Tier List and Guides',
    description:
      'Duck Survival Wiki for gift codes, tier list roles, beginner guide, best skills, best team, tower defense tips, download help, and mod APK safety.',
    locale,
    pathname: '',
  });
}

export default function HomePage() {
  return <ClashHomePage />;
}
