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
    title: 'Terms of Service | Roll to Defend Wiki',
    description:
      'Terms for using the independent Roll to Defend Wiki and Roblox guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#10140F] py-12 text-[#F9FFF1]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#DCE9D2]">
          This site provides independent Roll to Defend guides, data notes, and
          strategy content. It is not affiliated with, endorsed by, sponsored
          by, or operated by Roblox, D:/Drive, or the official Roll to Defend
          team.
        </p>
        <p className="leading-8 text-[#DCE9D2]">
          Game data can change quickly. Codes, unit rankings, zone timing, luck
          notes, rewards, update markers, and strategy advice should be treated
          as guidance, not official instructions.
        </p>
        <p className="leading-8 text-[#DCE9D2]">
          Do not use this site to distribute cheats, automation scripts, copied
          clients, account services, or other content that violates game or
          platform terms.
        </p>
        <p className="leading-8 text-[#DCE9D2]">
          Questions about these terms can be sent to hello@roll-todefend.wiki.
        </p>
      </Container>
    </div>
  );
}
