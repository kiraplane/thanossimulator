import cardSnapshotJson from './cards.json';
import type { ChronoCard, ChronoCardSnapshot } from './types';

export const cardSnapshot = cardSnapshotJson as ChronoCardSnapshot;

export const chronoCards = cardSnapshot.cards;

const countBy = (cards: ChronoCard[], key: keyof ChronoCard) =>
  cards
    .reduce<Map<string, number>>((counts, card) => {
      const value = String(card[key] || 'Unlisted');
      counts.set(value, (counts.get(value) ?? 0) + 1);
      return counts;
    }, new Map())
    .entries();

const toSortedRecord = (entries: IterableIterator<[string, number]>) =>
  Object.fromEntries([...entries].sort(([a], [b]) => a.localeCompare(b)));

export const cardTypeCounts = toSortedRecord(countBy(chronoCards, 'cardType'));
export const cardSyndicateCounts = toSortedRecord(
  countBy(chronoCards, 'syndicate')
);
export const cardRarityCounts = toSortedRecord(countBy(chronoCards, 'rarity'));

export const cardSyndicateOrder = [
  'Lifeblood',
  'Sungrace',
  'Silence',
  'Singularity',
  'Splintergleam',
  'Phasetide',
] as const;

export const cardsBySyndicate = cardSyndicateOrder.map((syndicate) => ({
  syndicate,
  cards: chronoCards.filter((card) => card.syndicate === syndicate),
}));

export const chronoCardRoutes = chronoCards.map(
  (card) => `/cards/${card.slug}`
);

export function getChronoCard(slug: string) {
  return chronoCards.find((card) => card.slug === slug);
}

export function getPairedChronoCard(card: ChronoCard) {
  if (!card.pairSlug) {
    return undefined;
  }

  return getChronoCard(card.pairSlug);
}

export function getRelatedChronoCards(card: ChronoCard, limit = 6) {
  return chronoCards
    .filter(
      (candidate) =>
        candidate.slug !== card.slug &&
        candidate.slug !== card.pairSlug &&
        (candidate.syndicate === card.syndicate ||
          candidate.powerCost === card.powerCost ||
          candidate.cardType === card.cardType)
    )
    .slice(0, limit);
}

const featuredNames = [
  'Burrowing Beetles',
  'The Cycle Embodied',
  'Glasswinged Monarch',
  'Omeganeura',
  'Death Jockey',
  'Daville, the Star Song',
  'Timewarped Discombobulator',
  'Tidal Wave',
];

export const featuredChronoCards = featuredNames
  .map((name) => chronoCards.find((card) => card.name === name))
  .filter((card): card is ChronoCard => Boolean(card));

export const chronoCardStats = {
  checkedAt: cardSnapshot.checkedAt,
  sourceUrl: cardSnapshot.sourceUrl,
  officialTopLevelCount: cardSnapshot.officialTopLevelCount,
  uniqueCardFaceCount: cardSnapshot.uniqueCardFaceCount,
  types: cardTypeCounts,
  syndicates: cardSyndicateCounts,
  rarities: cardRarityCounts,
};
