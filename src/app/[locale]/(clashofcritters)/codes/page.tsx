import { CodeCopyButton } from '@/components/clashofcritters/code-copy-button';
import { FaqSection } from '@/components/clashofcritters/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { activeCodes, codes, expiredCodes } from '@/data/clashofcritters/codes';
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
    title: 'Duck Survival Gift Codes - Working Codes and Rewards',
    description:
      'Working Duck Survival gift codes with rewards, redemption steps, active code notes, expired code tracking, and help for codes that do not work.',
    locale,
    pathname: '/codes',
  });
}

export default function CodesPage() {
  return (
    <div className="bg-[#FFF4DC] py-12 text-[#1F241D]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#F2A93B] text-[#1F241D]">Gift codes</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Duck Survival Gift Codes
          </h1>
          <p className="text-lg leading-8 text-[#4E4A38]">
            Copy working Duck Survival gift codes, redeem them after the
            tutorial, and use the notes below if a code fails because of case,
            rollout timing, account progress, or an expired campaign.
          </p>
        </header>

        <section className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold">
            How to redeem Duck Survival gift codes
          </h2>
          <ol className="mt-4 grid gap-3 text-sm leading-6 text-[#4E4A38] md:grid-cols-3">
            <li>1. Open Duck Survival and finish the early tutorial.</li>
            <li>2. Tap the duck avatar or profile area in the top-left.</li>
            <li>3. Open Gift Code, paste the code exactly, then redeem.</li>
          </ol>
        </section>

        <section className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] shadow-sm">
          <div className="border-[#E7C980] border-b p-5">
            <h2 className="font-display text-2xl font-bold">
              Active Duck Survival gift codes ({activeCodes.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-[#FFF4DC] text-[#7B643A]">
                <tr>
                  <th className="px-5 py-3">Code</th>
                  <th className="px-5 py-3">Reward</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {activeCodes.map((item) => (
                  <tr key={item.code} className="border-[#E7C980] border-t">
                    <td className="px-5 py-4 font-mono font-bold text-[#1F241D]">
                      {item.code}
                    </td>
                    <td className="px-5 py-4 text-[#4E4A38]">{item.reward}</td>
                    <td className="px-5 py-4">
                      <Badge className="bg-[#6FC24A] text-[#1F241D]">
                        Working
                      </Badge>
                    </td>
                    <td className="px-5 py-4">
                      <CodeCopyButton code={item.code} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-5">
            <h2 className="font-display text-2xl font-bold">
              Duck Survival gift code notes
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#4E4A38]">
              {codes.map((item) => (
                <li key={item.code}>
                  <strong className="text-[#1F241D]">{item.code}:</strong>{' '}
                  {item.notes}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-5">
            <h2 className="font-display text-2xl font-bold">
              Expired Duck Survival gift codes
            </h2>
            {expiredCodes.length === 0 ? (
              <p className="mt-4 text-sm leading-6 text-[#4E4A38]">
                No expired codes are tracked yet. Once a code stops working it
                will move here so the active list stays clean.
              </p>
            ) : null}
          </div>
        </section>

        <section className="rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold">
            After redeeming Duck Survival gift codes
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4E4A38]">
            Gift code rewards are easiest to waste when you spend them
            immediately. Check the Duck Survival tier list first, then compare
            skill and team guides before committing rare upgrade materials.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild className="bg-[#F2A93B] text-[#1F241D]">
              <LocaleLink href="/tier-list">Duck Survival tier list</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/best-skills">Best skills</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/beginner-guide">
                Beginner guide
              </LocaleLink>
            </Button>
          </div>
        </section>

        <FaqSection
          items={[
            {
              question: 'Why does a Duck Survival gift code fail?',
              answer:
                'Most failures come from typos, case sensitivity, region rollout timing, expired campaigns, or not finishing the tutorial yet.',
            },
            {
              question: 'Are Duck Survival gift code rewards always the same?',
              answer:
                'Usually yes, but mobile games can adjust campaigns. If the reward differs, trust the in-game mailbox.',
            },
            {
              question:
                'Should beginners redeem Duck Survival gift codes first?',
              answer:
                'Yes. Free Duck Survival rewards are most valuable before you commit upgrades to a full hero, tower, or skill path.',
            },
            {
              question: 'Where can I find Duck Survival gift codes on Reddit?',
              answer:
                'Reddit code posts are useful leads, but this page keeps the list cleaner by cross-checking community reports with current code pages.',
            },
            {
              question: 'Where should I go after redeeming codes?',
              answer:
                'Open the beginner guide, Duck Survival tier list, or Best Skills page before spending diamonds, keys, blueprints, or banknotes.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
