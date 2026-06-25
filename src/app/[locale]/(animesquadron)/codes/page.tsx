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
  watchCodes,
} from '@/data/animesquadron/codes';
import { getAnimeSquadronCopy } from '@/data/animesquadron/localized-copy';
import { officialGameFacts } from '@/data/animesquadron/sources';
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
  const copy = getAnimeSquadronCopy(locale);
  return constructMetadata({
    title: copy.codes.metadataTitle,
    description: copy.codes.metadataDescription,
    locale,
    pathname: '/codes',
    image: '/animesquadron/og-image.png',
  });
}

export default async function CodesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getAnimeSquadronCopy(locale);
  const faqs = copy.codes.faqs;
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
          <Badge className="bg-[#37D6D0] text-[#041414]">
            {copy.codes.badge}
          </Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            {copy.codes.h1}
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            {copy.codes.intro(codeCheckSummary.checkedAt)}
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
            {copy.codes.summaryStatus(activeCodes.length)}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#D5C6B7]">
            {copy.codes.statusBody}
          </p>
          <div className="mt-5 rounded-lg border border-[#3A2A24] bg-[#090706] p-4">
            <h3 className="font-display text-lg font-bold">
              {copy.codes.checklistHeading}
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-[#D5C6B7]">
              {copy.codes.reviewNotes.map((note) => (
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
                {copy.codes.openRoblox}
              </a>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/codes-redeem-guide">
                {copy.codes.redeemGuide}
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/tier-list">
                {copy.codes.tierListButton}
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/reroll">{copy.codes.rerollButton}</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/resource-calculator">
                Resource calculator
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/traits">{copy.codes.traitsButton}</LocaleLink>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] shadow-sm">
          <div className="border-[#3A2A24] border-b p-5">
            <h2 className="font-display text-2xl font-bold">
              {copy.codes.activeHeading(activeCodes.length)}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1040px] text-left text-sm">
              <thead className="bg-[#090706] text-[#37D6D0]">
                <tr>
                  <th className="px-5 py-3">{copy.codes.table.code}</th>
                  <th className="px-5 py-3">{copy.codes.table.reward}</th>
                  <th className="px-5 py-3">{copy.codes.table.lastChecked}</th>
                  <th className="px-5 py-3">{copy.codes.table.notes}</th>
                  <th className="px-5 py-3">{copy.codes.table.action}</th>
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
                    <td className="px-5 py-4 text-[#D5C6B7]">{item.notes}</td>
                    <td className="px-5 py-4">
                      <CodeCopyButton
                        code={item.code}
                        labels={{
                          copy: copy.codes.copy,
                          copied: copy.codes.copied,
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">
            {copy.codes.expiredHeading}
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
            {expiredCodes.length === 0
              ? copy.codes.expiredNone
              : copy.codes.expiredCount(expiredCodes.length)}
          </p>
          {expiredCodes.length > 0 && (
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[920px] text-left text-sm">
                <thead className="bg-[#090706] text-[#37D6D0]">
                  <tr>
                    <th className="px-5 py-3">{copy.codes.table.code}</th>
                    <th className="px-5 py-3">{copy.codes.table.reward}</th>
                    <th className="px-5 py-3">
                      {copy.codes.table.lastChecked}
                    </th>
                    <th className="px-5 py-3">{copy.codes.table.notes}</th>
                  </tr>
                </thead>
                <tbody>
                  {expiredCodes.map((item) => (
                    <tr key={item.code} className="border-[#3A2A24] border-t">
                      <td className="px-5 py-4 font-mono font-bold">
                        {item.code}
                      </td>
                      <td className="px-5 py-4 text-[#D5C6B7]">
                        {item.reward}
                      </td>
                      <td className="px-5 py-4 text-[#D5C6B7]">
                        {item.lastChecked}
                      </td>
                      <td className="px-5 py-4 text-[#D5C6B7]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {watchCodes.length > 0 && (
          <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
            <p className="font-display text-2xl font-bold">
              {copy.codes.watchHeading}
            </p>
            <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
              {copy.codes.watchIntro}
            </p>
          </section>
        )}

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <p className="font-display text-2xl font-bold">
            {copy.codes.sourcesHeading}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#D5C6B7]">
            {copy.codes.sourcesIntro}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {codeCheckSummary.sourcesChecked.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-[#574033] bg-[#090706] px-3 py-2 text-sm font-medium text-[#D5C6B7] transition hover:border-[#37D6D0] hover:text-[#37D6D0]"
              >
                {source.label}
              </a>
            ))}
          </div>
        </section>
        <AdsterraAdFrame slot="banner-300x250" label />

        <FaqSection title={copy.codes.faqTitle} items={faqs} />
      </Container>
    </div>
  );
}
