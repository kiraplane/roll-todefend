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
    title: 'Privacy Policy | Roll to Defend Wiki',
    description:
      'Privacy policy for the independent Roll to Defend Wiki and Roblox guide site.',
    locale,
    pathname: '/privacy',
  });
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#10140F] py-12 text-[#F9FFF1]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
        <p className="leading-8 text-[#DCE9D2]">
          Roll to Defend Wiki is an independent Roblox guide site. We do not
          require accounts for browsing codes, unit notes, zone guides, luck
          pages, community links, planner tools, or safety pages.
        </p>
        <p className="leading-8 text-[#DCE9D2]">
          Standard analytics or hosting logs may record aggregate traffic data
          such as page views, referrers, device type, and approximate region. We
          use this to improve guides and fix broken pages.
        </p>
        <p className="leading-8 text-[#DCE9D2]">
          Local image assets are used for faster page loading. We do not sell
          asset files or provide downloads as standalone game packages.
        </p>
        <p className="leading-8 text-[#DCE9D2]">
          Privacy questions can be sent to hello@roll-todefend.wiki.
        </p>
      </Container>
    </div>
  );
}
