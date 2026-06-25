import { FaqSection } from '@/components/chronoccg/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  chronoCards,
  getChronoCard,
  getPairedChronoCard,
  getRelatedChronoCards,
} from '@/data/chronoccg/cards';
import type { ChronoCard } from '@/data/chronoccg/types';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { ArrowLeft, ArrowRight, Layers3, Swords } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return chronoCards.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const card = getChronoCard(slug);

  if (!card) {
    return constructMetadata({
      title: 'Chrono CCG Card Not Found',
      description: 'The requested Chrono CCG card could not be found.',
      locale,
      pathname: `/cards/${slug}`,
      image: '/chronoccg/og-image.jpg',
    });
  }

  return constructMetadata({
    title: `${card.name} - Chrono CCG Card`,
    description: `${card.name} is a ${card.rarity} ${card.cardType} card for ${card.syndicate}. Cost ${card.powerCost}; ${card.effectPreview}`,
    locale,
    pathname: `/cards/${card.slug}`,
    image: '/chronoccg/og-image.jpg',
  });
}

function CardStat({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-md border border-[#3B3128] bg-[#0A0D10] px-4 py-3">
      <p className="font-semibold text-[#63E6DD] text-[11px] uppercase tracking-[0.18em]">
        {label}
      </p>
      <p className="mt-1 font-display text-[#FFF5E1] text-xl font-bold">
        {value}
      </p>
    </div>
  );
}

function SmallCardLink({ card }: { card: ChronoCard }) {
  return (
    <LocaleLink
      href={`/cards/${card.slug}`}
      className="group flex min-w-0 gap-3 rounded-lg border border-[#3B3128] bg-[#0A0D10] p-3 transition hover:border-[#63E6DD]"
    >
      <img
        src={card.imageUrl}
        alt={`${card.name} card art`}
        loading="lazy"
        className="h-20 w-14 shrink-0 rounded border border-[#3B3128] object-cover object-top"
      />
      <div className="min-w-0">
        <p className="font-semibold text-[#FFF5E1] text-sm group-hover:text-[#63E6DD]">
          {card.name}
        </p>
        <p className="mt-1 text-[#D9A84E] text-xs">
          {card.syndicate} · {card.powerCost} cost
        </p>
        <p className="mt-1 line-clamp-2 text-[#D8CDBA] text-xs leading-5">
          {card.effectPreview}
        </p>
      </div>
    </LocaleLink>
  );
}

export default async function CardDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const card = getChronoCard(slug);

  if (!card) {
    notFound();
  }

  const pairedCard = getPairedChronoCard(card);
  const relatedCards = getRelatedChronoCards(card);
  const statsLabel = card.cardType.includes('Action')
    ? 'Action card'
    : `${card.strength}/${card.durability}`;

  return (
    <div className="bg-[#0A0D10] py-12 text-[#FFF5E1]">
      <Container className="space-y-10 px-4">
        <LocaleLink
          href="/cards"
          className="inline-flex items-center gap-2 font-semibold text-[#63E6DD] text-sm hover:text-[#F7E7C9]"
        >
          <ArrowLeft className="size-4" />
          Back to card list
        </LocaleLink>

        <section className="grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
          <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-4">
            <div className="overflow-hidden rounded-md bg-black">
              <img
                src={card.imageUrl}
                alt={`${card.name} Chrono CCG card`}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="min-w-0 space-y-6">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#63E6DD] text-[#051316]">
                  {card.syndicate}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#D9A84E] bg-[#14100D] text-[#F7E7C9]"
                >
                  {card.rarity}
                </Badge>
                {card.isImmortalized ? (
                  <Badge className="bg-[#B8442A] text-[#FFF5E1]">
                    Immortalized
                  </Badge>
                ) : null}
              </div>
              <h1 className="mt-4 font-display text-4xl font-black md:text-6xl">
                {card.name}
              </h1>
              <p className="mt-4 max-w-3xl text-[#D8CDBA] text-lg leading-8">
                {card.effectPreview}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <CardStat label="Card type" value={card.cardType} />
              <CardStat label="Cost" value={card.powerCost} />
              <CardStat label="Stats" value={statsLabel} />
              <CardStat label="Set" value={card.setCode} />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5">
                <div className="flex items-center gap-2">
                  <Layers3 className="size-4 text-[#63E6DD]" />
                  <h2 className="font-display text-xl font-bold">
                    How to read it
                  </h2>
                </div>
                <p className="mt-3 text-[#D8CDBA] text-sm leading-7">
                  Use this page to understand the card face itself: type, cost,
                  syndicate, rarity, stats, and rules text. Then move to Decks
                  when you want to know whether the card fits a 42-card list.
                </p>
              </div>

              <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5">
                <div className="flex items-center gap-2">
                  <Swords className="size-4 text-[#D9A84E]" />
                  <h2 className="font-display text-xl font-bold">
                    Deck context
                  </h2>
                </div>
                <p className="mt-3 text-[#D8CDBA] text-sm leading-7">
                  A Chrono deck starts with two Divers, then uses 40 main-deck
                  cards from the selected syndicates. This card is eligible only
                  when your Diver pair gives access to {card.syndicate}.
                </p>
              </div>
            </div>

            {pairedCard ? (
              <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[#63E6DD] text-xs uppercase tracking-[0.18em]">
                      Paired form
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-bold">
                      {pairedCard.name}
                    </h2>
                  </div>
                  <Button asChild variant="outline">
                    <LocaleLink href={`/cards/${pairedCard.slug}`}>
                      Open paired card
                      <ArrowRight className="size-4" />
                    </LocaleLink>
                  </Button>
                </div>
                <p className="mt-3 text-[#D8CDBA] text-sm leading-7">
                  {pairedCard.effectPreview}
                </p>
              </div>
            ) : null}
          </div>
        </section>

        <section>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Badge className="bg-[#D9A84E] text-[#151006]">
                Related cards
              </Badge>
              <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">
                Same rules neighborhood
              </h2>
            </div>
            <Button asChild variant="outline">
              <LocaleLink href="/tools">Use card tools</LocaleLink>
            </Button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedCards.map((relatedCard) => (
              <SmallCardLink key={relatedCard.slug} card={relatedCard} />
            ))}
          </div>
        </section>

        <FaqSection
          items={[
            {
              question: 'Is this card page internal to Chrono CCG Wiki?',
              answer:
                'Yes. Card list rows and related cards now route to internal wiki card pages instead of sending readers to the official site.',
            },
            {
              question: 'What is the difference between Cards and Decks?',
              answer:
                'Cards explains individual card faces. Decks explains how Divers, syndicates, curve, actions, and win plans combine those cards into a playable 42-card list.',
            },
            {
              question: 'Can I use this card in every deck?',
              answer:
                'No. Chrono CCG deckbuilding is constrained by your two Divers and their syndicates, so card eligibility depends on that starting pair.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
