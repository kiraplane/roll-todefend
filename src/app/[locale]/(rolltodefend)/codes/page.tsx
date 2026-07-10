import Container from '@/components/layout/container';
import { CodeCopyButton } from '@/components/rolltodefend/code-copy-button';
import { FaqSection } from '@/components/rolltodefend/faq-section';
import { LastUpdated } from '@/components/rolltodefend/last-updated';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  activeCodes,
  codeCheckSummary,
  expiredCodes,
  watchCodes,
} from '@/data/rolltodefend/codes';
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
    title: 'Roll to Defend Codes - Current Roblox Code Status',
    description:
      'Check the current Roll to Defend codes status, verified working code policy, source checks, safe redeem advice, and fake code warning signs.',
    locale,
    pathname: '/codes',
    image: '/rolltodefend/og-image.jpg',
  });
}

export default function CodesPage() {
  const faqs = [
    {
      question: 'Are there working Roll to Defend codes right now?',
      answer:
        'No verified working public codes are confirmed by this site as of July 10, 2026. ROLL is on the watchlist because current code trackers disagree about whether it works.',
    },
    {
      question: 'Where would real Roll to Defend codes appear?',
      answer:
        'The safest places are the official Roblox game page, the D:/Drive group, an official Discord linked by the creator, or a visible in-game code panel.',
    },
    {
      question: 'Why keep a codes page if no codes are verified?',
      answer:
        'Players search for codes heavily. A transparent status page is safer than letting fake lists, copied rewards, and script pages answer the query.',
    },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-[#10140F] py-12 text-[#F9FFF1]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#B7F44A] text-[#10140F]">Roblox Codes</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Roll to Defend Codes
          </h1>
          <p className="text-[#DCE9D2] text-lg leading-8">
            {codeCheckSummary.status} This page tracks the official game page,
            creator group, current search results, and community signals before
            listing any reward as active.
          </p>
          <LastUpdated date={codeCheckSummary.checkedAt} />
        </header>

        <section className="rounded-lg border border-[#3A4F2D] bg-[#182215] p-6">
          <h2 className="font-display text-2xl font-bold">
            Current status: code watch
          </h2>
          <p className="mt-3 max-w-3xl text-[#DCE9D2] text-sm leading-7">
            Roll to Defend can add codes later, especially after updates,
            milestones, or official community announcements. Until a code is
            verified for place ID {officialGameFacts.robloxPlaceId}, this wiki
            will keep the active table empty instead of importing unverified
            rewards from other Roblox defense games.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#B7F44A] text-[#10140F] hover:bg-[#D7FF78]"
            >
              <a
                href={officialGameFacts.officialRobloxUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Roblox
              </a>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/codes-status-guide">
                Codes Guide
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/fake-scripts-warning">
                Script Warning
              </LocaleLink>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-[#3A4F2D] bg-[#182215] shadow-sm">
          <div className="border-[#3A4F2D] border-b p-5">
            <h2 className="font-display text-2xl font-bold">
              Verified active codes ({activeCodes.length})
            </h2>
          </div>
          {activeCodes.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[920px] text-left text-sm">
                <thead className="bg-[#10140F] text-[#B7F44A]">
                  <tr>
                    <th className="px-5 py-3">Code</th>
                    <th className="px-5 py-3">Reward</th>
                    <th className="px-5 py-3">Confidence</th>
                    <th className="px-5 py-3">Notes</th>
                    <th className="px-5 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {activeCodes.map((item) => (
                    <tr key={item.code} className="border-[#3A4F2D] border-t">
                      <td className="px-5 py-4 font-mono font-bold">
                        {item.code}
                      </td>
                      <td className="px-5 py-4 text-[#DCE9D2]">
                        {item.reward}
                      </td>
                      <td className="px-5 py-4 text-[#DCE9D2]">
                        {item.confidence}
                      </td>
                      <td className="px-5 py-4 text-[#DCE9D2]">{item.notes}</td>
                      <td className="px-5 py-4">
                        <CodeCopyButton code={item.code} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
          <div className="p-6 text-[#DCE9D2] text-sm leading-7">
              No verified working public codes are listed yet. ROLL is tracked
              below as a source-conflict candidate, but it is not promoted to
              active until another current source or official channel confirms
              it. Check the sources below before trusting any reposted code
              table.
            </div>
          )}
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-[#3A4F2D] bg-[#182215] p-6">
            <h2 className="font-display text-2xl font-bold">Watchlist</h2>
            {watchCodes.length > 0 ? (
              <div className="mt-4 space-y-3">
                {watchCodes.map((item) => (
                  <div
                    key={item.code}
                    className="rounded-md border border-[#3A4F2D] bg-[#10140F] p-4"
                  >
                    <p className="font-semibold text-[#FFF2C5]">{item.code}</p>
                    <p className="mt-1 text-[#B7F44A] text-sm">
                      Reported reward: {item.reward}
                    </p>
                    <p className="mt-2 text-[#DCE9D2] text-sm leading-6">
                      {item.notes}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-[#DCE9D2] text-sm leading-7">
                No candidate codes are strong enough for the watchlist yet.
              </p>
            )}
          </div>
          <div className="rounded-lg border border-[#3A4F2D] bg-[#182215] p-6">
            <h2 className="font-display text-2xl font-bold">Expired codes</h2>
            <p className="mt-3 text-[#DCE9D2] text-sm leading-7">
              {expiredCodes.length === 0
                ? 'No expired Roll to Defend codes are listed yet.'
                : `${expiredCodes.length} expired codes are tracked.`}
            </p>
            <h3 className="mt-6 font-display text-lg font-bold">
              Sources checked
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {codeCheckSummary.sourcesChecked.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-[#3A4F2D] bg-[#10140F] px-3 py-2 font-medium text-[#DCE9D2] text-sm transition hover:border-[#B7F44A] hover:text-[#B7F44A]"
                >
                  {source.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
