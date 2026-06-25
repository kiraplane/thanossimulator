import { FaqSection } from '@/components/chronoccg/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  cardsBySyndicate,
  chronoCardStats,
  featuredChronoCards,
} from '@/data/chronoccg/cards';
import type { ChronoCard } from '@/data/chronoccg/types';
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
    title: 'Chrono CCG Card List - Official Card Database Snapshot',
    description:
      'Browse the Chrono CCG Wiki card list with internal card pages, costs, types, syndicates, rarities, stats, and effects.',
    locale,
    pathname: '/cards',
    image: '/chronoccg/og-image.jpg',
  });
}

function StatTile({
  label,
  value,
  note,
}: {
  label: string;
  value: string | number;
  note: string;
}) {
  return (
    <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5">
      <p className="font-semibold text-[#63E6DD] text-xs uppercase tracking-[0.18em]">
        {label}
      </p>
      <p className="mt-2 font-display text-3xl font-black text-[#FFF5E1]">
        {value}
      </p>
      <p className="mt-2 text-[#D8CDBA] text-sm leading-6">{note}</p>
    </div>
  );
}

function CompactCountList({
  title,
  counts,
}: {
  title: string;
  counts: Record<string, number>;
}) {
  return (
    <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5">
      <h2 className="font-display text-2xl font-bold text-[#FFF5E1]">
        {title}
      </h2>
      <div className="mt-4 grid gap-2">
        {Object.entries(counts).map(([label, count]) => (
          <div
            key={label}
            className="flex items-center justify-between gap-3 rounded-md border border-[#3B3128] bg-[#0A0D10] px-3 py-2 text-sm"
          >
            <span className="min-w-0 break-words text-[#D8CDBA]">{label}</span>
            <span className="rounded-full bg-[#63E6DD] px-2 py-0.5 font-semibold text-[#051316] text-xs">
              {count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturedCard({ card }: { card: ChronoCard }) {
  return (
    <LocaleLink
      href={`/cards/${card.slug}`}
      className="group overflow-hidden rounded-lg border border-[#3B3128] bg-[#14100D] transition hover:border-[#63E6DD]"
    >
      <div className="relative aspect-[3/4] bg-black">
        <img
          src={card.imageUrl}
          alt={`${card.name} official Chrono CCG card`}
          loading="lazy"
          className="h-full w-full object-contain transition group-hover:scale-[1.02]"
        />
      </div>
      <div className="border-[#3B3128] border-t p-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="border-[#3B3128] text-[#D8CDBA]">
            {card.syndicate}
          </Badge>
          <Badge className="bg-[#D9A84E] text-[#151006]">
            {card.powerCost} cost
          </Badge>
        </div>
        <h3 className="mt-3 font-display text-[#FFF5E1] text-xl font-bold">
          {card.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-[#D8CDBA] text-sm leading-6">
          {card.effectPreview}
        </p>
      </div>
    </LocaleLink>
  );
}

function CardTable({ cards }: { cards: ChronoCard[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[#3B3128]">
      <table className="w-full min-w-[980px] border-collapse bg-[#0A0D10] text-left text-sm">
        <thead className="bg-[#14100D] text-[#F7E7C9]">
          <tr>
            <th className="px-3 py-3 font-semibold">ID</th>
            <th className="px-3 py-3 font-semibold">Card</th>
            <th className="px-3 py-3 font-semibold">Type</th>
            <th className="px-3 py-3 font-semibold">Rarity</th>
            <th className="px-3 py-3 font-semibold">Cost</th>
            <th className="px-3 py-3 font-semibold">Stats</th>
            <th className="px-3 py-3 font-semibold">Effect</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr
              key={card.slug}
              className="border-[#3B3128] border-t align-top text-[#D8CDBA]"
            >
              <td className="whitespace-nowrap px-3 py-3 text-[#D9A84E]">
                {card.cardId}
              </td>
              <td className="px-3 py-3">
                <LocaleLink
                  href={`/cards/${card.slug}`}
                  className="font-semibold text-[#FFF5E1] hover:text-[#63E6DD]"
                >
                  {card.name}
                </LocaleLink>
                {card.isImmortalized ? (
                  <div className="mt-1 text-[#63E6DD] text-xs">
                    Immortalized face
                  </div>
                ) : null}
              </td>
              <td className="px-3 py-3">{card.cardType}</td>
              <td className="px-3 py-3">{card.rarity}</td>
              <td className="px-3 py-3">{card.powerCost}</td>
              <td className="whitespace-nowrap px-3 py-3">
                {card.cardType.includes('Action')
                  ? '-'
                  : `${card.strength}/${card.durability}`}
              </td>
              <td className="max-w-xl px-3 py-3 leading-6">
                {card.effectPreview}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CardsPage() {
  return (
    <div className="bg-[#0A0D10] py-12 text-[#FFF5E1]">
      <Container className="space-y-10 px-4">
        <header className="max-w-4xl space-y-4">
          <Badge className="bg-[#D9A84E] text-[#151006]">
            Official card snapshot
          </Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Chrono CCG Card List
          </h1>
          <p className="text-[#D8CDBA] text-lg leading-8">
            This is the Chrono CCG Wiki card database: names, types, syndicates,
            rarities, costs, stats, effects, and internal detail pages for every
            card face in the current snapshot.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#B8442A] text-[#FFF5E1] hover:bg-[#D85C39]"
            >
              <LocaleLink href="/tools">Open Tools</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/card-list-and-deck-builder-guide">
                Card Guide
              </LocaleLink>
            </Button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <StatTile
            label="Official entries"
            value={chronoCardStats.officialTopLevelCount}
            note="Top-level records from the source snapshot."
          />
          <StatTile
            label="Card faces"
            value={chronoCardStats.uniqueCardFaceCount}
            note="Unique card faces after expanding Immortalized counterparts."
          />
          <StatTile
            label="Checked"
            value={chronoCardStats.checkedAt}
            note="Static snapshot date for this wiki database."
          />
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          <CompactCountList title="By type" counts={chronoCardStats.types} />
          <CompactCountList
            title="By syndicate"
            counts={chronoCardStats.syndicates}
          />
          <CompactCountList
            title="By rarity"
            counts={chronoCardStats.rarities}
          />
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5">
            <h2 className="font-display text-2xl font-bold">
              Cards explain pieces
            </h2>
            <p className="mt-3 text-[#D8CDBA] text-sm leading-7">
              Use Cards when you need names, costs, stats, types, syndicates,
              rarity, text, and paired Immortalized faces. This is the database
              layer.
            </p>
          </div>
          <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5">
            <h2 className="font-display text-2xl font-bold">
              Decks explain plans
            </h2>
            <p className="mt-3 text-[#D8CDBA] text-sm leading-7">
              Use Decks when you want to turn cards into a 42-card list with two
              Divers, legal syndicate access, curve shape, and a win condition.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button asChild variant="outline">
                <LocaleLink href="/decks">Open Decks</LocaleLink>
              </Button>
              <Button asChild variant="outline">
                <LocaleLink href="/tools/deck-checker">Deck Checker</LocaleLink>
              </Button>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Badge className="bg-[#63E6DD] text-[#051316]">
                Featured cards
              </Badge>
              <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">
                Sample official card faces
              </h2>
            </div>
            <Button asChild variant="outline">
              <LocaleLink href="/tools/card-finder">Card Finder</LocaleLink>
            </Button>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredChronoCards.map((card) => (
              <FeaturedCard key={card.slug} card={card} />
            ))}
          </div>
        </section>

        <section className="space-y-7">
          <div>
            <Badge className="bg-[#B8442A] text-[#FFF5E1]">
              Full card index
            </Badge>
            <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">
              All cards by syndicate
            </h2>
            <p className="mt-3 max-w-3xl text-[#D8CDBA] text-sm leading-7">
              Agents and Immortalized Agents are listed as separate card faces
              because players search for both names. Every row opens an internal
              Chrono CCG Wiki card page.
            </p>
          </div>

          {cardsBySyndicate.map((group) => (
            <section
              key={group.syndicate}
              id={group.syndicate.toLowerCase()}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-[#FFF5E1] text-2xl font-bold">
                  {group.syndicate}
                </h3>
                <Badge
                  variant="outline"
                  className="border-[#3B3128] text-[#D8CDBA]"
                >
                  {group.cards.length} card faces
                </Badge>
              </div>
              <CardTable cards={group.cards} />
            </section>
          ))}
        </section>

        <FaqSection
          items={[
            {
              question: 'Why are there more card faces than official entries?',
              answer:
                'The official card collection stores many Agents with an embedded Immortalized counterpart. The wiki expands those counterparts so both names and effects are searchable.',
            },
            {
              question: 'Is this a live card database?',
              answer:
                'No. It is a static wiki snapshot extracted on the checked date and rendered as internal Chrono CCG Wiki card pages.',
            },
            {
              question: 'Where can I build decks?',
              answer:
                'Start with the Decks page for archetypes and use the Tools page to check Diver access and curve shape with this wiki card database.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
