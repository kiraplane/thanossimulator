import type { DataSource } from './types';

export const CHECKED_AT = '2026-07-09';
export const OFFICIAL_CHECKED_AT = '2026-07-09';

export const officialGameFacts = {
  name: '[ Update ] Infinity Gauntlet | Thanos Simulator',
  shortName: 'Infinity Gauntlet | Thanos Simulator',
  commonName: 'Thanos Simulator',
  siteName: 'Thanos Simulator Wiki',
  domain: 'https://www.thanossimulator.wiki',
  canonicalHost: 'www.thanossimulator.wiki',
  robloxPlaceId: '3261957210',
  robloxUniverseId: '1177208440',
  creatorName: 'Blg42598',
  creatorType: 'Roblox User',
  genre: 'Roblox fighting simulator',
  status: 'Live Roblox experience',
  createdAt: '2019-06-05T14:19:14.787Z',
  updatedAt: '2026-07-05T18:04:05.5590047Z',
  maxPlayers: 7,
  activePlayersAtCheck: 1196,
  visitsAtCheck: 75776334,
  favoritesAtCheck: 182260,
  upVotesAtCheck: 88900,
  downVotesAtCheck: 24251,
  officialRobloxUrl:
    'https://www.roblox.com/games/3261957210/Infinity-Gauntlet-Thanos-Simulator',
  officialDescriptionSummary:
    'A Roblox fighting simulator inspired by Marvel where players collect Infinity Stones, unlock gauntlet abilities, defeat bosses, and pursue endgame weapons. The public Roblox page currently lists Update 3.2 with Doom and Mechanical Glove.',
};

export const siteDescription =
  'Thanos Simulator Wiki helps Roblox players find Infinity Stones, learn gauntlet controls, route weapons and bosses, check codes safely, and follow Update 3.2.';

export const officialSources: DataSource[] = [
  {
    type: 'official',
    label: 'Infinity Gauntlet | Thanos Simulator on Roblox',
    url: officialGameFacts.officialRobloxUrl,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Primary source for the current official title, creator, description, update signal, max players, and official play link.',
  },
  {
    type: 'roblox_api',
    label: 'Roblox universe API snapshot',
    url: `https://games.roblox.com/v1/games?universeIds=${officialGameFacts.robloxUniverseId}`,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Confirmed universe ID, creation date, update timestamp, Fighting genre, active players, visits, favorites, max players, and creator.',
  },
  {
    type: 'competitor',
    label: 'Thanos Simulator Official Wiki on Fandom',
    url: 'https://thanos-simulator-official.fandom.com/wiki/Thanos_Simulator_Official_Wiki',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Community wiki with page breadth around Infinity Gauntlet, Infinity Stones, weapons, bosses, map, fragments, cases, and Update 3.2 entities.',
  },
  {
    type: 'community',
    label: 'Fandom all-pages API',
    url: 'https://thanos-simulator-official.fandom.com/api.php?action=query&list=allpages&aplimit=80&format=json',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used to choose safe topic breadth: Stones, Weapons, Bosses, Map, Mechanical Gloves, Surtur, Heart of Ymir, Gungnir, and Casket of Ancient Winters.',
  },
  {
    type: 'serper',
    label: 'Serper balanced long-tail discovery',
    url: 'https://google.serper.dev/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Autocomplete/related discovery only. Candidate demand included wiki, codes, controls, soul stone, Surtur/Twilight Sword, Gungnir, Mechanical Gloves, Discord, scripts, and how to get all stones.',
  },
  {
    type: 'youtube',
    label: 'Thanos Simulator YouTube guide results',
    url: 'https://www.youtube.com/results?search_query=Infinity+Gauntlet+Thanos+Simulator+guide',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used for selected guide references around beginner progression, all stones, Doom/Mechanical Gloves, weapon forging, Heart of Ymir, Surtur, and Stormbreaker.',
  },
  {
    type: 'competitor',
    label: 'RobloxDatabase game page',
    url: 'https://robloxdatabase.com/games/infinity-gauntlet-thanos-simulator/',
    checkedAt: CHECKED_AT,
    confidence: 'low',
    note: 'Useful as search-surface evidence for head term and codes/scripts demand. Unsafe script pages are treated as safety intent, not as source data.',
  },
  {
    type: 'competitor',
    label: 'TierMaker Thanos Simulator weapon templates',
    url: 'https://tiermaker.com/create/thanos-simulator-tier-list-15923526',
    checkedAt: CHECKED_AT,
    confidence: 'watch',
    note: 'Shows small weapon ranking demand, but not enough source confidence for a hard tier list. The launch site uses weapon progression advice instead.',
  },
];

export const officialQuickLinks = [
  {
    label: 'Roblox',
    href: officialGameFacts.officialRobloxUrl,
  },
  {
    label: 'Fandom',
    href: 'https://thanos-simulator-official.fandom.com/wiki/Thanos_Simulator_Official_Wiki',
  },
];
