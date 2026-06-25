import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { CodeCopyButton } from '@/components/chronoccg/code-copy-button';
import { FaqSection } from '@/components/chronoccg/faq-section';
import { LastUpdated } from '@/components/chronoccg/last-updated';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  activeCodes,
  codeCheckSummary,
  expiredCodes,
  watchCodes,
} from '@/data/chronoccg/codes';
import { officialGameFacts } from '@/data/chronoccg/sources';
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
    title: 'Chrono CCG Codes - Redeem Beta Codes and Free Packs',
    description:
      'Source-checked Chrono CCG codes for open beta, creator-code context, safe redemption notes, and what to do when a code fails.',
    locale,
    pathname: '/codes',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function CodesPage() {
  const faqs = [
    {
      question: 'Are Chrono CCG codes game-tested?',
      answer:
        'No. The current codes are source-checked from official, creator, and community signals, but this site did not redeem them in-game.',
    },
    {
      question: 'Where should I redeem Chrono CCG codes?',
      answer:
        'Redeem codes inside the official Chrono CCG client. Avoid third-party tools that ask for account credentials.',
    },
    {
      question: 'Why can creator codes fail?',
      answer:
        'Creator codes can rotate, expire, hit claim limits, or depend on stream timing. Check official Discord and creator channels when a code fails.',
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
    <div className="bg-[#0A0D10] py-12 text-[#FFF5E1]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#63E6DD] text-[#051316]">Beta Codes</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Chrono CCG Codes
          </h1>
          <p className="text-[#D8CDBA] text-lg leading-8">
            {codeCheckSummary.status} The official beta patch confirms creator
            code drops, so this page tracks source-checked public codes without
            pretending every stream code is permanent.
          </p>
          <LastUpdated date={codeCheckSummary.checkedAt} />
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3B3128] bg-[#14100D] py-4"
          label
        />

        <section className="rounded-lg border border-[#3B3128] bg-[#14100D] p-6">
          <h2 className="font-display text-2xl font-bold">
            Try these source-checked beta codes first
          </h2>
          <p className="mt-3 max-w-3xl text-[#D8CDBA] text-sm leading-7">
            Codes should be redeemed in the official game client after
            installing from Steam or Epic. If a code fails, check spelling,
            server state, creator announcements, and expiry before trusting a
            random repost.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#B8442A] text-[#FFF5E1] hover:bg-[#D85C39]"
            >
              <a
                href={officialGameFacts.steamUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Steam
              </a>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/codes-redeem-guide">
                Redeem Guide
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/download">Download</LocaleLink>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-[#3B3128] bg-[#14100D] shadow-sm">
          <div className="border-[#3B3128] border-b p-5">
            <h2 className="font-display text-2xl font-bold">
              Active / reported active codes ({activeCodes.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left text-sm">
              <thead className="bg-[#0A0D10] text-[#63E6DD]">
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
                  <tr key={item.code} className="border-[#3B3128] border-t">
                    <td className="px-5 py-4 font-mono font-bold">
                      {item.code}
                    </td>
                    <td className="px-5 py-4 text-[#D8CDBA]">{item.reward}</td>
                    <td className="px-5 py-4 text-[#D8CDBA]">
                      {item.confidence}
                    </td>
                    <td className="px-5 py-4 text-[#D8CDBA]">{item.notes}</td>
                    <td className="px-5 py-4">
                      <CodeCopyButton code={item.code} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-6">
            <h2 className="font-display text-2xl font-bold">Watchlist</h2>
            <div className="mt-4 space-y-3">
              {watchCodes.map((item) => (
                <div
                  key={item.code}
                  className="rounded-md border border-[#3B3128] bg-[#0A0D10] p-4"
                >
                  <p className="font-semibold text-[#F7E7C9]">{item.code}</p>
                  <p className="mt-2 text-[#D8CDBA] text-sm leading-6">
                    {item.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-6">
            <h2 className="font-display text-2xl font-bold">Expired codes</h2>
            <p className="mt-3 text-[#D8CDBA] text-sm leading-7">
              {expiredCodes.length === 0
                ? 'No expired Chrono CCG codes are listed yet.'
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
                  className="rounded-md border border-[#3B3128] bg-[#0A0D10] px-3 py-2 font-medium text-[#D8CDBA] text-sm transition hover:border-[#63E6DD] hover:text-[#63E6DD]"
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
