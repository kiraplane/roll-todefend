import Container from '@/components/layout/container';
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
    title: 'Terms of Service | Duck Survival Wiki',
    description:
      'Terms for using the independent Duck Survival Wiki and guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#FFF7E8] py-12 text-[#2A2118]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#5A4631]">
          This site provides independent Duck Survival guides, data notes, and
          strategy content. It is not affiliated with, endorsed by, or operated
          by the game publisher or developer.
        </p>
        <p className="leading-8 text-[#5A4631]">
          Game data can change quickly. Codes, rankings, team builds, and stage
          advice should be treated as guidance, not official instructions.
        </p>
        <p className="leading-8 text-[#5A4631]">
          Do not use this site to distribute cheats, automation scripts,
          modified clients, or other content that violates game terms.
        </p>
        <p className="leading-8 text-[#5A4631]">
          Questions about these terms can be sent to hello@ducksurvival.wiki.
        </p>
      </Container>
    </div>
  );
}
