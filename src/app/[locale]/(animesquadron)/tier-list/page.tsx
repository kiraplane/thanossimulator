import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/animesquadron/faq-section';
import {
  ConfidenceBadge,
  TierBadge,
} from '@/components/animesquadron/status-badge';
import { TierListTable } from '@/components/animesquadron/tier-list-table';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getAnimeSquadronCopy } from '@/data/animesquadron/localized-copy';
import {
  unitNameWatchlist,
  unitTierRankings,
} from '@/data/animesquadron/tier-list';
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
    title: copy.tierList.metadataTitle,
    description: copy.tierList.metadataDescription,
    locale,
    pathname: '/tier-list',
    image: '/animesquadron/og-image.png',
  });
}

export default async function TierListPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getAnimeSquadronCopy(locale);
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: unitTierRankings.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${entry.tier} Tier - ${entry.name}`,
      description: entry.reason,
    })),
  };

  return (
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <JsonLd data={itemList} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#37D6D0] text-[#041414]">
            {copy.tierList.badge}
          </Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            {copy.tierList.h1}
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            {copy.tierList.intro}
          </p>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3A2A24] bg-[#130D0B] py-4"
          label
        />

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">
            {copy.tierList.rankingHeading}
          </h2>
          <div className="mt-4 grid gap-4 text-sm leading-7 text-[#D5C6B7] md:grid-cols-3">
            {copy.tierList.rankingPoints.map((point) => (
              <p key={point.label}>
                <strong className="text-[#FFF5EA]">{point.label}</strong>{' '}
                {point.body}
              </p>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
            >
              <LocaleLink href="/units">{copy.tierList.unitsButton}</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/traits">
                {copy.tierList.traitsButton}
              </LocaleLink>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">
            {copy.tierList.routeHeading}
          </h2>
          <div className="mt-4 grid gap-4 text-sm leading-7 text-[#D5C6B7] md:grid-cols-3">
            {copy.tierList.routePoints.map((point) => (
              <p key={point.label}>
                <strong className="text-[#FFF5EA]">{point.label}</strong>{' '}
                {point.body}
              </p>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <LocaleLink href="/guides/best-units-tier-list">
                {copy.tierList.bestUnitsButton}
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/secret-units-guide">
                {copy.tierList.secretUnitsButton}
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/codes">{copy.tierList.codesButton}</LocaleLink>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-[#F3B23A] text-[#090706]">UPD 0.5</Badge>
            <Badge variant="outline" className="border-[#574033] text-white">
              Data refreshed June 22, 2026
            </Badge>
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold">
            UPD 0.5 Meta Notes
          </h2>
          <div className="mt-4 grid gap-4 text-sm leading-7 text-[#D5C6B7] md:grid-cols-3">
            <p>
              <strong className="text-[#FFF5EA]">Berserker:</strong> New 0.5 DPS
              signal. Test as a carry or boss-damage project before moving rare
              rerolls.
            </p>
            <p>
              <strong className="text-[#FFF5EA]">Falcon:</strong> Utility and
              farm signal. It is strongest when Yen, support, or tempo changes a
              real run.
            </p>
            <p>
              <strong className="text-[#FFF5EA]">Gogeta/Gometa:</strong> Still a
              premium carry route, but the evolution and material cost make it a
              long project.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <LocaleLink href="/guides/update-0-5-tier-list">
                Read 0.5 guide
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/falcon-guide">Falcon guide</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/how-to-get-gogeta-gometa">
                Gogeta route
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/berserker-guide">
                Berserker guide
              </LocaleLink>
            </Button>
          </div>
        </section>

        <TierListTable labels={copy.tierList.tierLabels} />

        <section className="space-y-4">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-display text-3xl font-bold">
              {copy.tierList.unitWatchHeading}
            </h2>
            <p className="text-sm leading-7 text-[#D5C6B7]">
              {copy.tierList.unitWatchIntro}
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {unitNameWatchlist.map((entry) => (
              <article
                key={entry.slug}
                className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <TierBadge tier={entry.priority} />
                  <ConfidenceBadge confidence={entry.sourceConfidence} />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-[#FFF5EA]">
                  {entry.name}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-wide text-[#F3B23A]">
                  {copy.tierList.aliasesLabel}: {entry.aliases.join(', ')}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.roleFit.map((role) => (
                    <Badge
                      key={role}
                      variant="outline"
                      className="border-[#574033] text-[#FFF5EA]"
                    >
                      {copy.tierList.roleFitLabel}: {role}
                    </Badge>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-[#D5C6B7]">
                  <strong className="text-[#FFF5EA]">
                    {copy.tierList.consensusLabel}:
                  </strong>{' '}
                  {entry.consensus}. {entry.decision}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
                  {entry.evidence}
                </p>
                <p className="mt-4 text-xs leading-6 text-[#9F8C7B]">
                  {copy.tierList.sourceLabel}: {entry.sourceLabels.join(', ')}
                </p>
              </article>
            ))}
          </div>
        </section>

        <AdsterraAdFrame slot="banner-300x250" label />

        <FaqSection items={copy.tierList.faqs} />
      </Container>
    </div>
  );
}
