import { FaqSection } from '@/components/chronoccg/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { deckArchetypes, metaSignals } from '@/data/chronoccg/decks';
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
    title: 'Chrono CCG Tier List and Meta Watch - Open Beta Deck Signals',
    description:
      'Track Chrono CCG tier list demand safely with open beta meta signals, starter deck picks, Sprouts, bleed, burn, control, and deck browser checks.',
    locale,
    pathname: '/tier-list',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function TierListPage() {
  const faqs = [
    {
      question: 'Is there a final Chrono CCG tier list?',
      answer:
        'Not yet. Open beta is new, patch notes are active, and deck data is still moving. Treat rankings as weekly signals.',
    },
    {
      question: 'What should beginners play first?',
      answer:
        'Sprouts-style Lifeblood decks are the cleanest first recommendation because they teach board growth and combat clearly.',
    },
    {
      question: 'Where should I verify meta decks?',
      answer:
        'Check the Runeterra.AR Chrono deck browser linked from the official Chrono navigation, then compare lists and patch dates.',
    },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Chrono CCG Meta Watch',
    itemListElement: deckArchetypes.map((deck, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: deck.name,
    })),
  };

  return (
    <div className="bg-[#0A0D10] py-12 text-[#FFF5E1]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D9A84E] text-[#151006]">Meta Watch</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Chrono CCG Tier List and Meta Watch
          </h1>
          <p className="text-[#D8CDBA] text-lg leading-8">
            Search demand for Chrono CCG tier lists is real, but the open beta
            is too young for fake final rankings. Use this page as a watchlist
            for deck archetypes, not a permanent card ranking.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#63E6DD] text-[#051316] hover:bg-[#92FFF5]"
            >
              <LocaleLink href="/decks">Open Decks</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/starter-decks-guide">
                Starter Deck Guide
              </LocaleLink>
            </Button>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {deckArchetypes.map((deck) => (
            <article
              key={deck.slug}
              className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-2xl font-bold">{deck.name}</h2>
                <Badge
                  variant="outline"
                  className="border-[#3B3128] text-[#D8CDBA]"
                >
                  {deck.difficulty}
                </Badge>
              </div>
              <p className="mt-3 text-[#D9A84E] text-sm">
                {deck.syndicates.join(' / ')}
              </p>
              <p className="mt-4 text-[#D8CDBA] text-sm leading-7">
                {deck.whyItMatters}
              </p>
              <div className="mt-4 rounded-md border border-[#3B3128] bg-[#0A0D10] p-4">
                <p className="font-semibold text-[#F7E7C9]">Watch for</p>
                <p className="mt-2 text-[#D8CDBA] text-sm leading-6">
                  {deck.watchFor}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-lg border border-[#3B3128] bg-[#14100D] p-6">
          <h2 className="font-display text-2xl font-bold">
            Why this is a watch page
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {metaSignals.map((signal) => (
              <div
                key={signal.label}
                className="rounded-md border border-[#3B3128] bg-[#0A0D10] p-4"
              >
                <Badge
                  variant="outline"
                  className="border-[#3B3128] text-[#D8CDBA]"
                >
                  {signal.status}
                </Badge>
                <h3 className="mt-3 font-semibold text-[#F7E7C9]">
                  {signal.label}
                </h3>
                <p className="mt-2 text-[#D8CDBA] text-sm leading-6">
                  {signal.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
