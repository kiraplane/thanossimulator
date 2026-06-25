import type { DataSource } from './types';

export const CHECKED_AT = '2026-06-25';

export const officialGameFacts = {
  name: 'Chrono CCG',
  siteName: 'Chrono CCG Wiki',
  domain: 'https://www.chronoccg.wiki',
  canonicalHost: 'www.chronoccg.wiki',
  publisher: 'Infinite or Bust Games Inc.',
  developer: 'Infinite or Bust Games Inc.',
  genre: 'Digital collectible card game',
  releaseDate: '2026-06-23',
  status: 'Free-to-play open beta / Early Access',
  officialWebsite: 'https://playchrono.com/',
  officialRules: 'https://playchrono.com/rules',
  officialCards: 'https://playchrono.com/collections/cards',
  officialNews: 'https://playchrono.com/news',
  steamUrl: 'https://store.steampowered.com/app/4221310/Chrono_CCG/',
  epicUrl: 'https://store.epicgames.com/en-US/p/chrono-ccg-3d6383',
  officialDecks: 'https://runeterra.ar/chrono/decks',
  discordUrl: 'https://discord.gg/chronoccg',
  redditUrl: 'https://www.reddit.com/r/ChronoCCG/',
  youtubeUrl: 'https://www.youtube.com/@ChronoCCG',
};

export const siteDescription =
  'Chrono CCG Wiki helps new open beta players learn rules, Divers, Timelines, syndicates, deck building, codes, card lists, and safe Steam or Epic access.';

export const officialSources: DataSource[] = [
  {
    type: 'official',
    label: 'Official Chrono CCG website',
    url: officialGameFacts.officialWebsite,
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Official homepage for open beta, syndicates, rules, news, Steam, Epic, Discord, and social links.',
  },
  {
    type: 'official',
    label: 'Official Chrono CCG rules',
    url: officialGameFacts.officialRules,
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Primary source for core rules, chain, shifting, immortalization, and keyword definitions.',
  },
  {
    type: 'official',
    label: 'Official Chrono CCG cards',
    url: officialGameFacts.officialCards,
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Official card collection page. The wiki card snapshot is extracted from its embedded catalog payload.',
  },
  {
    type: 'store',
    label: 'Chrono CCG on Steam',
    url: officialGameFacts.steamUrl,
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Steam page confirms release date, free-to-play status, open beta state, platforms, and official description.',
  },
  {
    type: 'store',
    label: 'Chrono CCG on Epic Games Store',
    url: officialGameFacts.epicUrl,
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Epic page confirms free Early Access access and the two Diver / two syndicate / forty card deck framing.',
  },
  {
    type: 'deck_site',
    label: 'Runeterra.AR Chrono decks',
    url: officialGameFacts.officialDecks,
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Linked from the official Chrono navigation as the deck browser and builder surface.',
  },
  {
    type: 'serper',
    label: 'Serper long-tail discovery',
    url: 'https://google.serper.dev/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Balanced autocomplete plus related/PAA pass for Chrono CCG, wiki, decks, syndicates, codes, and tier list seeds.',
  },
];

export const officialQuickLinks = [
  {
    label: 'Steam',
    href: officialGameFacts.steamUrl,
  },
  {
    label: 'Epic Games',
    href: officialGameFacts.epicUrl,
  },
  {
    label: 'Official Rules',
    href: officialGameFacts.officialRules,
  },
  {
    label: 'Official Cards',
    href: officialGameFacts.officialCards,
  },
  {
    label: 'Deck Builder',
    href: officialGameFacts.officialDecks,
  },
  {
    label: 'Reddit',
    href: officialGameFacts.redditUrl,
  },
];
