import Container from '@/components/layout/container';
import { ThanosLocalizedCorePage } from '@/components/thanos/localized-core-page';
import { getThanosLocalizedCoreCopy } from '@/data/thanos/localized-core';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import {
  databaseHubCards,
  databaseSourceNote,
  databaseUpdatedAt,
} from '@/data/thanos/database';
import { officialGameFacts } from '@/data/thanos/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const localized = getThanosLocalizedCoreCopy(locale, 'database');
  return constructMetadata({
    title:
      localized?.title ??
      'Thanos Simulator Database - Stones, Weapons, Bosses and Map',
    description:
      localized?.description ??
      'Browse structured Thanos Simulator data for Infinity Stones, weapons, bosses, zones, prerequisites, and route hints.',
    locale,
    pathname: '/database',
    image: '/thanos/og-image.png',
  });
}

export default async function DatabasePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (locale === 'ru') return <ThanosLocalizedCorePage locale={locale} pageKey="database" />;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Thanos Simulator Database',
    itemListElement: databaseHubCards.map((card, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: card.title,
      url: `${officialGameFacts.domain}${card.href}`,
    })),
  };

  return (
    <div className="bg-[#080611] py-12 text-[#F8F1FF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#F6C453] text-[#120C05]">Wiki Database</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Thanos Simulator Database
          </h1>
          <p className="text-[#C6BCD8] text-lg leading-8">
            Structured, filterable data pages for the Fandom-derived entity
            breadth that powers the tools: stones, weapons, bosses, and zones.
          </p>
          <p className="text-[#81768F] text-sm">
            Checked {databaseUpdatedAt}. {databaseSourceNote}
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {databaseHubCards.map((card) => (
            <LocaleLink
              key={card.href}
              href={card.href}
              className="group rounded-lg border border-[#3A2D4E] bg-[#151024] p-6 transition hover:border-[#F6C453]"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-[#FFE7A8] text-2xl font-bold">
                  {card.title}
                </h2>
                <Badge
                  variant="outline"
                  className="border-[#3A2D4E] text-[#C6BCD8]"
                >
                  {card.count} entries
                </Badge>
              </div>
              <p className="mt-3 text-[#C6BCD8] leading-7">{card.body}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-[#57D68D] text-sm">
                Browse table
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </span>
            </LocaleLink>
          ))}
        </section>
      </Container>
    </div>
  );
}
