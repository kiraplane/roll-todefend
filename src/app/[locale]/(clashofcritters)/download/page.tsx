import { FaqSection } from '@/components/clashofcritters/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { AlertTriangle, Download, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const googlePlayUrl =
  'https://play.google.com/store/apps/details?id=com.mrtgd2us.google&hl=en_US';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Duck Survival Download and Mod APK Safety',
    description:
      'Find the official Duck Survival download link and learn why modified APK files can put your account, device, and progress at risk.',
    locale,
    pathname: '/download',
  });
}

export default function DownloadPage() {
  return (
    <div className="bg-[#FFF4DC] py-12 text-[#1F241D]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D64232] text-white">Download safety</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Duck Survival Download and Mod APK Safety
          </h1>
          <p className="text-lg leading-8 text-[#4E4A38]">
            Duck Survival mod APK searches are common, but this fan wiki does
            not provide modified APK files. Use the official listing whenever
            possible and use codes or guide choices to progress safely.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-[1fr_0.9fr]">
          <div className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-6 shadow-sm">
            <ShieldCheck className="mb-4 size-9 text-[#6FC24A]" />
            <h2 className="font-display text-2xl font-bold">
              Official Duck Survival download
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#4E4A38]">
              The official Android listing is on Google Play under the app id
              `com.mrtgd2us.google`. Install from the official store when you
              can, because it gives you the cleanest update path and avoids
              risky modified packages.
            </p>
            <Button asChild className="mt-5 bg-[#F2A93B] text-[#1F241D]">
              <a href={googlePlayUrl} target="_blank" rel="noreferrer">
                <Download className="size-4" />
                Open Google Play
              </a>
            </Button>
          </div>

          <div className="rounded-lg border border-[#D64232]/30 bg-[#FFF0E7] p-6 shadow-sm">
            <AlertTriangle className="mb-4 size-9 text-[#D64232]" />
            <h2 className="font-display text-2xl font-bold">
              Why mod APKs are risky
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#4E4A38]">
              <li>- Modified packages can include malware or adware.</li>
              <li>- Unofficial builds can break after game updates.</li>
              <li>
                - Account progress, purchases, and login data may be unsafe.
              </li>
              <li>- Cheats or unlimited-resource claims can lead to bans.</li>
            </ul>
          </div>
        </section>

        <section className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold">
            Safer ways to progress
          </h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-[#4E4A38] md:grid-cols-3">
            <p>1. Redeem active Duck Survival codes before grinding.</p>
            <p>
              2. Focus upgrades on one carry, one defense fix, and one control
              tool.
            </p>
            <p>
              3. Use guides for heroes, skills, towers, teams, and boss
              attempts.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <LocaleLink href="/codes">Check codes</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/beginner-guide">
                Beginner guide
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/best-skills">Best skills</LocaleLink>
            </Button>
          </div>
        </section>

        <FaqSection
          items={[
            {
              question: 'Is Duck Survival mod APK safe?',
              answer:
                'No modified APK can be treated as fully safe. It may contain malware, break after updates, or put your account and purchases at risk.',
            },
            {
              question: 'Does this site provide Duck Survival mod APK files?',
              answer:
                'No. This site only provides official download guidance, codes, and strategy guides.',
            },
            {
              question: 'Can I get unlimited diamonds safely?',
              answer:
                'Unlimited-diamond claims are usually tied to modified apps or scams. Use active codes and focused upgrade choices instead.',
            },
            {
              question: 'Where is the official Duck Survival download?',
              answer:
                'Use the Google Play listing for app id com.mrtgd2us.google when it is available in your region.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
