import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { officialGameFacts } from '@/data/rolltodefend/sources';
import { LocaleLink } from '@/i18n/navigation';
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
    title: 'Roll to Defend Wiki Disclaimer',
    description:
      'Roll to Defend Wiki disclaimer covering independent guide status, Roblox source handling, codes, units, zones, luck, and script safety.',
    locale,
    pathname: '/disclaimer',
    image: '/rolltodefend/og-image.jpg',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#10140F] py-12 text-[#F9FFF1]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#B7F44A] text-[#10140F]">Disclaimer</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Roll to Defend Wiki Disclaimer
          </h1>
          <p className="text-[#DCE9D2] text-lg leading-8">
            Roll to Defend Wiki is an independent guide site for Roblox players.
            It is not created, endorsed, or operated by Roblox, the group{' '}
            {officialGameFacts.creatorName}, or the Roll to Defend developer
            team.
          </p>
        </header>

        <section className="rounded-lg border border-[#3A4F2D] bg-[#182215] p-6 text-[#DCE9D2] leading-8">
          <h2 className="font-display text-2xl font-bold text-[#F9FFF1]">
            Source handling
          </h2>
          <p className="mt-3">
            Official facts come from the Roblox game page and Roblox API
            snapshots. Codes, mutation advice, and progression routes are
            cross-checked from current public sources when available, but the
            site does not claim every code or mechanic has been game-tested.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold text-[#F9FFF1]">
            Codes and game changes
          </h2>
          <p className="mt-3">
            Roll to Defend can change without notice. Codes can expire, rewards
            can change, and Roblox UI labels can move after updates. Use the
            official Roblox experience and official community links when
            checking time-sensitive rewards.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold text-[#F9FFF1]">
            Safety boundary
          </h2>
          <p className="mt-3">
            This site does not provide scripts, exploits, modified clients, APK
            mirrors, private-server instructions, or account-risk shortcuts. It
            also avoids copying other Roblox defense-game facts into Roll to
            Defend pages unless sources clearly match this exact game and place
            ID.
          </p>
        </section>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#B7F44A] text-[#10140F] hover:bg-[#D7FF78]"
          >
            <LocaleLink href="/guides/beginner-guide">Start Guide</LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/download">Official Links</LocaleLink>
          </Button>
        </div>
      </Container>
    </div>
  );
}
