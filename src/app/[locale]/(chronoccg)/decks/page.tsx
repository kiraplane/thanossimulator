import { FaqSection } from '@/components/chronoccg/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { deckArchetypes } from '@/data/chronoccg/decks';
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
    title: 'Chrono CCG Decks - Starter Decks, Deck Builder and Meta Lists',
    description:
      'Find Chrono CCG deck guidance for starter decks, Sprouts, burn, bleed, control, Diver deckbuilding, card access, and curve checks.',
    locale,
    pathname: '/decks',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function DecksPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Chrono CCG Decks',
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
          <Badge className="bg-[#63E6DD] text-[#051316]">Decks</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Chrono CCG Decks
          </h1>
          <p className="text-[#D8CDBA] text-lg leading-8">
            Chrono CCG deck searches split into two jobs: learn a starter plan
            and check whether your cards fit the two-Diver rule. Use these
            archetypes as entry routes, then open the wiki card database and
            deck checker before crafting.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#B8442A] text-[#FFF5E1] hover:bg-[#D85C39]"
            >
              <LocaleLink href="/tools/deck-checker">Deck Checker</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/cards">Card Database</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/diver-deckbuilding-guide">
                Deckbuilding Guide
              </LocaleLink>
            </Button>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2">
          {deckArchetypes.map((deck) => (
            <article
              key={deck.slug}
              className="rounded-lg border border-[#3B3128] bg-[#14100D] p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-2xl font-bold">{deck.name}</h2>
                <Badge
                  variant="outline"
                  className="border-[#3B3128] text-[#D8CDBA]"
                >
                  {deck.difficulty}
                </Badge>
              </div>
              <p className="mt-2 text-[#D9A84E] text-sm">
                {deck.syndicates.join(' / ')}
              </p>
              <p className="mt-4 text-[#D8CDBA] text-sm leading-7">
                {deck.plan}
              </p>
              <div className="mt-4 rounded-md border border-[#3B3128] bg-[#0A0D10] p-4">
                <p className="font-semibold text-[#F7E7C9]">Why it matters</p>
                <p className="mt-2 text-[#D8CDBA] text-sm leading-6">
                  {deck.whyItMatters}
                </p>
              </div>
            </article>
          ))}
        </section>

        <FaqSection
          items={[
            {
              question: 'Where can I find Chrono CCG deck lists?',
              answer:
                'Start with this Decks hub for archetype direction, then use the wiki Deck Checker to test Diver access, card count, copy limits, and curve shape.',
            },
            {
              question: 'What is the best first deck?',
              answer:
                'Sprouts-style Lifeblood decks are the safest first route because they teach board space, growth, and combat.',
            },
            {
              question: 'Should I import a deck before reading rules?',
              answer:
                'No. Learn Core, Divers, priority, chain, shifting, and immortalization before copying lists.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
