import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { CodeCopyButton } from '@/components/animesquadron/code-copy-button';
import { FaqSection } from '@/components/animesquadron/faq-section';
import { LastUpdated } from '@/components/animesquadron/last-updated';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  activeCodes,
  codeCheckSummary,
  expiredCodes,
} from '@/data/animesquadron/codes';
import { officialGameFacts } from '@/data/animesquadron/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const faqs = [
  {
    question: 'What are the active Anime Squadron codes?',
    answer:
      'This page tracks active codes including 1kLikes!, SorryForBugs!, 500Interested!, Tysm5kCCU!, SorryForDelay!, EarlyAccess!, ThankYouEA!, 10KMembers!, and ThanksForSupport! as checked on June 9, 2026.',
  },
  {
    question: 'Why is my Anime Squadron code not working?',
    answer:
      'Codes are case-sensitive and server updates can lag. Copy the code exactly, keep punctuation, rejoin a fresh server, and try the newest codes first.',
  },
  {
    question: 'What should I spend code rewards on?',
    answer:
      'Use rewards to find and build one main carry first. Save Perfect Cubes and large reroll batches for keeper units.',
  },
  {
    question: 'Are there expired Anime Squadron codes?',
    answer:
      'No expired codes were confirmed during the June 9, 2026 source check.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Squadron Codes - Active Rewards and Redeem Guide',
    description:
      'Copy active Anime Squadron codes for Gems, Gold, Trait Shards, Stat Rerolls, Reroll Cubes, and Perfect Cubes, with redeem fixes and spending advice.',
    locale,
    pathname: '/codes',
    image: '/animesquadron/og-image.png',
  });
}

export default function CodesPage() {
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
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#37D6D0] text-[#041414]">Codes</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron Codes
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            Copy active Anime Squadron codes and spend the rewards with a plan.
            Current source check: {codeCheckSummary.checkedAt}.
          </p>
          <LastUpdated date={codeCheckSummary.checkedAt} />
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3A2A24] bg-[#130D0B] py-4"
          label
        />

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">
            {codeCheckSummary.status}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#D5C6B7]">
            Rewards currently include Gems, Gold, Trait Shards, Stat Rerolls,
            Reroll Cubes, and Perfect Cubes. Redeem first, then decide which
            unit deserves your first real upgrade and reroll investment.
          </p>
          <div className="mt-5 rounded-lg border border-[#3A2A24] bg-[#090706] p-4">
            <h3 className="font-display text-lg font-bold">Redeem checklist</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-[#D5C6B7]">
              {codeCheckSummary.reviewNotes.map((note) => (
                <li key={note}>- {note}</li>
              ))}
            </ul>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
            >
              <a
                href={officialGameFacts.officialRobloxUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Roblox game
              </a>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/codes-redeem-guide">
                Redeem guide
              </LocaleLink>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] shadow-sm">
          <div className="border-[#3A2A24] border-b p-5">
            <h2 className="font-display text-2xl font-bold">
              Active codes ({activeCodes.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="bg-[#090706] text-[#37D6D0]">
                <tr>
                  <th className="px-5 py-3">Code</th>
                  <th className="px-5 py-3">Reward</th>
                  <th className="px-5 py-3">Last checked</th>
                  <th className="px-5 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {activeCodes.map((item) => (
                  <tr key={item.code} className="border-[#3A2A24] border-t">
                    <td className="px-5 py-4 font-mono font-bold">
                      {item.code}
                    </td>
                    <td className="px-5 py-4 text-[#D5C6B7]">{item.reward}</td>
                    <td className="px-5 py-4 text-[#D5C6B7]">
                      {item.lastChecked}
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

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">Expired codes</h2>
          <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
            {expiredCodes.length === 0
              ? 'No expired Anime Squadron codes are tracked yet.'
              : `${expiredCodes.length} expired codes are tracked.`}
          </p>
        </section>
        <AdsterraAdFrame slot="banner-300x250" label />

        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
