'use client';

import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  cardSyndicateOrder,
  chronoCardStats,
  chronoCards,
} from '@/data/chronoccg/cards';
import type { ChronoCard } from '@/data/chronoccg/types';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, Search, ShieldAlert } from 'lucide-react';
import { useMemo, useState } from 'react';

type ToolId = 'deck-checker' | 'card-finder' | 'curve-analyzer';

const toolTabs: Array<{ id: ToolId; label: string; summary: string }> = [
  {
    id: 'deck-checker',
    label: 'Deck Checker',
    summary: 'Check Diver syndicates, 40-card main deck count, and copies.',
  },
  {
    id: 'card-finder',
    label: 'Card Finder',
    summary: 'Search the wiki card database by name, syndicate, and type.',
  },
  {
    id: 'curve-analyzer',
    label: 'Curve Analyzer',
    summary: 'Read cost curve, Agent/Action balance, and reserve pressure.',
  },
];

const deckEligibleCards = chronoCards.filter(
  (card) =>
    card.sourcePosition === 'primary' &&
    !card.isImmortalized &&
    card.cardType !== 'Token'
);

const sampleDeck = `3 Burrowing Beetles
3 Egg Tender
2 Ant Queen
2 Yewie
3 Sunshock
2 Tidal Wave`;

const cardTypes = [...new Set(chronoCards.map((card) => card.cardType))].sort();

const cardLookup = new Map(
  chronoCards.map((card) => [normalizeCardName(card.name), card])
);

function normalizeCardName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function parseDeckLine(line: string) {
  const trimmed = line.trim();

  if (!trimmed) {
    return null;
  }

  const trailingCount = trimmed.match(/^(.+?)\s+x(\d+)$/i);

  if (trailingCount) {
    return {
      count: Number(trailingCount[2]),
      name: trailingCount[1].trim(),
      raw: trimmed,
    };
  }

  const leadingCount = trimmed.match(/^(\d+)x?\s+(.+)$/i);

  if (leadingCount) {
    return {
      count: Number(leadingCount[1]),
      name: leadingCount[2].trim(),
      raw: trimmed,
    };
  }

  return {
    count: 1,
    name: trimmed,
    raw: trimmed,
  };
}

function findCard(name: string) {
  const normalizedName = normalizeCardName(name);
  return (
    cardLookup.get(normalizedName) ??
    chronoCards.find((card) =>
      normalizeCardName(card.name).includes(normalizedName)
    )
  );
}

function SmallCardResult({ card }: { card: ChronoCard }) {
  return (
    <LocaleLink
      href={`/cards/${card.slug}`}
      className="group flex min-w-0 gap-3 rounded-lg border border-[#3B3128] bg-[#0A0D10] p-3 transition hover:border-[#63E6DD]"
    >
      <img
        src={card.imageUrl}
        alt={`${card.name} card`}
        loading="lazy"
        className="h-20 w-14 shrink-0 rounded border border-[#3B3128] object-cover object-top"
      />
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-semibold text-[#FFF5E1] text-sm group-hover:text-[#63E6DD]">
            {card.name}
          </p>
          <span className="rounded-full bg-[#14100D] px-2 py-0.5 text-[#D9A84E] text-[11px]">
            {card.powerCost}
          </span>
        </div>
        <p className="mt-1 text-[#D9A84E] text-xs">
          {card.syndicate} · {card.cardType}
        </p>
        <p className="mt-1 line-clamp-2 text-[#D8CDBA] text-xs leading-5">
          {card.effectPreview}
        </p>
      </div>
    </LocaleLink>
  );
}

export function ChronoCcgToolsPage({
  initialTool = 'deck-checker',
}: {
  initialTool?: ToolId;
}) {
  const [activeTool, setActiveTool] = useState<ToolId>(initialTool);
  const [query, setQuery] = useState('');
  const [selectedSyndicate, setSelectedSyndicate] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [diverOne, setDiverOne] =
    useState<(typeof cardSyndicateOrder)[number]>('Lifeblood');
  const [diverTwo, setDiverTwo] =
    useState<(typeof cardSyndicateOrder)[number]>('Sungrace');
  const [deckText, setDeckText] = useState(sampleDeck);

  const filteredCards = useMemo(() => {
    const normalizedQuery = normalizeCardName(query);

    return chronoCards
      .filter((card) =>
        normalizedQuery
          ? normalizeCardName(`${card.name} ${card.effectPreview}`).includes(
              normalizedQuery
            )
          : true
      )
      .filter((card) =>
        selectedSyndicate === 'All'
          ? true
          : card.syndicate === selectedSyndicate
      )
      .filter((card) =>
        selectedType === 'All' ? true : card.cardType === selectedType
      )
      .slice(0, 36);
  }, [query, selectedSyndicate, selectedType]);

  const deckAnalysis = useMemo(() => {
    const allowedSyndicates = new Set<string>([diverOne, diverTwo]);
    const lines = deckText
      .split('\n')
      .map(parseDeckLine)
      .filter((line): line is NonNullable<ReturnType<typeof parseDeckLine>> =>
        Boolean(line)
      );

    const entries = lines.map((line) => {
      const card = findCard(line.name);
      const isDeckEligible = Boolean(
        card &&
          deckEligibleCards.some(
            (eligibleCard) => eligibleCard.slug === card.slug
          )
      );

      return {
        ...line,
        card,
        isKnown: Boolean(card),
        isDeckEligible,
        isAllowedSyndicate: card
          ? allowedSyndicates.has(card.syndicate)
          : false,
      };
    });

    const totalCopies = entries.reduce((sum, entry) => sum + entry.count, 0);
    const duplicateIssues = entries.filter((entry) => entry.count > 3);
    const unknownIssues = entries.filter((entry) => !entry.isKnown);
    const ineligibleIssues = entries.filter(
      (entry) => entry.card && !entry.isDeckEligible
    );
    const syndicateIssues = entries.filter(
      (entry) => entry.card && entry.isDeckEligible && !entry.isAllowedSyndicate
    );
    const knownDeckCards = entries.filter(
      (entry) => entry.card && entry.isDeckEligible
    );
    const actionCopies = knownDeckCards
      .filter((entry) => entry.card?.cardType.includes('Action'))
      .reduce((sum, entry) => sum + entry.count, 0);
    const agentCopies = knownDeckCards
      .filter((entry) => entry.card?.cardType === 'Agent')
      .reduce((sum, entry) => sum + entry.count, 0);
    const curve = Array.from({ length: 8 }, (_, cost) => ({
      cost,
      count: knownDeckCards
        .filter((entry) => {
          if (!entry.card) {
            return false;
          }

          return cost === 7
            ? entry.card.powerCost >= 7
            : entry.card.powerCost === cost;
        })
        .reduce((sum, entry) => sum + entry.count, 0),
    }));
    const weightedCost = knownDeckCards.reduce(
      (sum, entry) => sum + (entry.card?.powerCost ?? 0) * entry.count,
      0
    );
    const averageCost =
      knownDeckCards.length > 0
        ? weightedCost /
          knownDeckCards.reduce((sum, entry) => sum + entry.count, 0)
        : 0;
    const issues = [
      totalCopies === 40
        ? null
        : `Main deck has ${totalCopies} cards. Chrono decks need 40 main-deck cards plus 2 Divers.`,
      duplicateIssues.length > 0
        ? `${duplicateIssues.length} entry has more than 3 copies.`
        : null,
      unknownIssues.length > 0
        ? `${unknownIssues.length} entry could not be matched to the card database.`
        : null,
      ineligibleIssues.length > 0
        ? `${ineligibleIssues.length} entry is a token or Immortalized face, not a normal main-deck card.`
        : null,
      syndicateIssues.length > 0
        ? `${syndicateIssues.length} entry is outside your Diver syndicates.`
        : null,
    ].filter((issue): issue is string => Boolean(issue));

    return {
      entries,
      totalCopies,
      actionCopies,
      agentCopies,
      curve,
      averageCost,
      issues,
      allowedSyndicates: [...allowedSyndicates],
    };
  }, [deckText, diverOne, diverTwo]);

  const maxCurveCount = Math.max(
    ...deckAnalysis.curve.map((item) => item.count),
    1
  );

  return (
    <div className="bg-[#0A0D10] py-12 text-[#FFF5E1]">
      <Container className="space-y-8 px-4">
        <header className="max-w-4xl space-y-4">
          <Badge className="bg-[#63E6DD] text-[#051316]">Tools</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Chrono CCG Tools
          </h1>
          <p className="text-[#D8CDBA] text-lg leading-8">
            Use the wiki card snapshot and official rules structure to search
            cards, check Diver syndicate access, count main-deck cards, catch
            copy-limit issues, and read your energy curve.
          </p>
        </header>

        <section className="grid gap-3 md:grid-cols-3">
          {toolTabs.map((tool) => (
            <button
              key={tool.id}
              type="button"
              onClick={() => setActiveTool(tool.id)}
              className={cn(
                'rounded-lg border p-4 text-left transition',
                activeTool === tool.id
                  ? 'border-[#63E6DD] bg-[#123436]/70'
                  : 'border-[#3B3128] bg-[#14100D] hover:border-[#D9A84E]'
              )}
            >
              <p className="font-display text-xl font-bold">{tool.label}</p>
              <p className="mt-2 text-[#D8CDBA] text-sm leading-6">
                {tool.summary}
              </p>
            </button>
          ))}
        </section>

        {activeTool === 'card-finder' ? (
          <section
            id="card-finder"
            className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-[#63E6DD] text-xs uppercase tracking-[0.18em]">
                  Card finder
                </p>
                <h2 className="mt-1 font-display text-3xl font-black">
                  Search {chronoCardStats.uniqueCardFaceCount} card faces
                </h2>
              </div>
              <Search className="size-6 text-[#D9A84E]" />
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-[minmax(0,1fr)_180px_180px]">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search name or effect text"
                className="rounded-md border border-[#3B3128] bg-[#0A0D10] px-3 py-2 text-[#FFF5E1] outline-none focus:border-[#63E6DD]"
              />
              <select
                value={selectedSyndicate}
                onChange={(event) => setSelectedSyndicate(event.target.value)}
                className="rounded-md border border-[#3B3128] bg-[#0A0D10] px-3 py-2 text-[#FFF5E1] outline-none focus:border-[#63E6DD]"
              >
                <option>All</option>
                {cardSyndicateOrder.map((syndicate) => (
                  <option key={syndicate}>{syndicate}</option>
                ))}
              </select>
              <select
                value={selectedType}
                onChange={(event) => setSelectedType(event.target.value)}
                className="rounded-md border border-[#3B3128] bg-[#0A0D10] px-3 py-2 text-[#FFF5E1] outline-none focus:border-[#63E6DD]"
              >
                <option>All</option>
                {cardTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredCards.map((card) => (
                <SmallCardResult key={card.slug} card={card} />
              ))}
            </div>
          </section>
        ) : null}

        {activeTool === 'deck-checker' || activeTool === 'curve-analyzer' ? (
          <section
            id={activeTool}
            className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
          >
            <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5">
              <p className="font-semibold text-[#63E6DD] text-xs uppercase tracking-[0.18em]">
                Deck input
              </p>
              <h2 className="mt-1 font-display text-3xl font-black">
                Diver access and 40-card check
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="grid gap-2 text-[#D8CDBA] text-sm">
                  Diver one syndicate
                  <select
                    value={diverOne}
                    onChange={(event) =>
                      setDiverOne(event.target.value as typeof diverOne)
                    }
                    className="rounded-md border border-[#3B3128] bg-[#0A0D10] px-3 py-2 text-[#FFF5E1] outline-none focus:border-[#63E6DD]"
                  >
                    {cardSyndicateOrder.map((syndicate) => (
                      <option key={syndicate}>{syndicate}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-[#D8CDBA] text-sm">
                  Diver two syndicate
                  <select
                    value={diverTwo}
                    onChange={(event) =>
                      setDiverTwo(event.target.value as typeof diverTwo)
                    }
                    className="rounded-md border border-[#3B3128] bg-[#0A0D10] px-3 py-2 text-[#FFF5E1] outline-none focus:border-[#63E6DD]"
                  >
                    {cardSyndicateOrder.map((syndicate) => (
                      <option key={syndicate}>{syndicate}</option>
                    ))}
                  </select>
                </label>
              </div>
              <textarea
                value={deckText}
                onChange={(event) => setDeckText(event.target.value)}
                spellCheck={false}
                className="mt-4 min-h-72 w-full rounded-md border border-[#3B3128] bg-[#0A0D10] p-3 font-mono text-[#FFF5E1] text-sm leading-6 outline-none focus:border-[#63E6DD]"
              />
              <p className="mt-3 text-[#D8CDBA] text-xs leading-5">
                Format: one card per line, such as 3 Burrowing Beetles or
                Burrowing Beetles x3.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[#63E6DD] text-xs uppercase tracking-[0.18em]">
                      Result
                    </p>
                    <h2 className="mt-1 font-display text-3xl font-black">
                      {deckAnalysis.issues.length === 0
                        ? 'Looks legal at a glance'
                        : `${deckAnalysis.issues.length} issue${deckAnalysis.issues.length > 1 ? 's' : ''} found`}
                    </h2>
                  </div>
                  {deckAnalysis.issues.length === 0 ? (
                    <CheckCircle2 className="size-8 text-[#63E6DD]" />
                  ) : (
                    <ShieldAlert className="size-8 text-[#D9A84E]" />
                  )}
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-md border border-[#3B3128] bg-[#0A0D10] p-3">
                    <p className="text-[#D8CDBA] text-xs">Main deck</p>
                    <p className="mt-1 font-display text-2xl font-bold">
                      {deckAnalysis.totalCopies}/40
                    </p>
                  </div>
                  <div className="rounded-md border border-[#3B3128] bg-[#0A0D10] p-3">
                    <p className="text-[#D8CDBA] text-xs">Agents</p>
                    <p className="mt-1 font-display text-2xl font-bold">
                      {deckAnalysis.agentCopies}
                    </p>
                  </div>
                  <div className="rounded-md border border-[#3B3128] bg-[#0A0D10] p-3">
                    <p className="text-[#D8CDBA] text-xs">Actions</p>
                    <p className="mt-1 font-display text-2xl font-bold">
                      {deckAnalysis.actionCopies}
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  {deckAnalysis.issues.length > 0 ? (
                    deckAnalysis.issues.map((issue) => (
                      <p
                        key={issue}
                        className="rounded-md border border-[#3B3128] bg-[#0A0D10] px-3 py-2 text-[#D8CDBA] text-sm"
                      >
                        {issue}
                      </p>
                    ))
                  ) : (
                    <p className="rounded-md border border-[#3B3128] bg-[#0A0D10] px-3 py-2 text-[#D8CDBA] text-sm">
                      Allowed syndicates:{' '}
                      {deckAnalysis.allowedSyndicates.join(' / ')}. This is a
                      structural check, not a power ranking.
                    </p>
                  )}
                </div>
              </div>

              <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5">
                <p className="font-semibold text-[#D9A84E] text-xs uppercase tracking-[0.18em]">
                  Energy curve
                </p>
                <p className="mt-1 text-[#D8CDBA] text-sm">
                  Average known card cost: {deckAnalysis.averageCost.toFixed(2)}
                </p>
                <div className="mt-5 grid grid-cols-8 gap-2">
                  {deckAnalysis.curve.map((bucket) => (
                    <div
                      key={bucket.cost}
                      className="flex min-h-32 flex-col justify-end gap-2"
                    >
                      <div
                        className="rounded-t bg-[#63E6DD]"
                        style={{
                          height: `${Math.max(8, (bucket.count / maxCurveCount) * 96)}px`,
                        }}
                      />
                      <div className="text-center text-[#D8CDBA] text-xs">
                        <div>{bucket.cost === 7 ? '7+' : bucket.cost}</div>
                        <div className="text-[#FFF5E1]">{bucket.count}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5">
                <p className="font-semibold text-[#63E6DD] text-xs uppercase tracking-[0.18em]">
                  Matched cards
                </p>
                <div className="mt-4 max-h-80 space-y-2 overflow-y-auto pr-1">
                  {deckAnalysis.entries.map((entry) => (
                    <div
                      key={`${entry.raw}-${entry.count}`}
                      className="flex items-center justify-between gap-3 rounded-md border border-[#3B3128] bg-[#0A0D10] px-3 py-2 text-sm"
                    >
                      <span className="min-w-0 break-words text-[#D8CDBA]">
                        {entry.count}x {entry.card?.name ?? entry.name}
                      </span>
                      {entry.card ? (
                        <LocaleLink
                          href={`/cards/${entry.card.slug}`}
                          className="shrink-0 text-[#63E6DD] hover:text-[#F7E7C9]"
                        >
                          Open
                        </LocaleLink>
                      ) : (
                        <span className="shrink-0 text-[#D9A84E]">Unknown</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[#D9A84E] text-xs uppercase tracking-[0.18em]">
                Next step
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold">
                Cards explain pieces; Decks explain plans
              </h2>
            </div>
            <Button asChild variant="outline">
              <LocaleLink href="/decks">
                Open Decks
                <ArrowRight className="size-4" />
              </LocaleLink>
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
