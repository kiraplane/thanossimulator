import { officialGameFacts } from './sources';
import type { GameCode } from './types';

export const CODE_CHECKED_AT = '2026-07-02';

export const activeCodes: GameCode[] = [
  {
    code: 'BRUTALCOMEBACK!',
    reward: '100 Trait Gems and five Luck II Potions',
    status: 'active',
    firstSeen: '2026-07-02',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Pocket Tactics, Roblox Den, GameRant, Deltia',
    confidence: 'medium',
    notes:
      'Newest July source-checked code. Copy the exclamation mark; reward wording should follow the in-game popup if code trackers disagree.',
  },
  {
    code: 'POTIONS',
    reward: '1 Cash Potion, 1 Luck Potion, and 1 Mutation Potion',
    status: 'active',
    firstSeen: '2026-06-23',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Beebom, Roblox Den, RoCodes, GameRant, Deltia',
    confidence: 'high',
    notes:
      'Multiple current code sources agree on this code and reward category. Redeem before a pack-opening or upgrade session so the boosts are not wasted.',
  },
  {
    code: 'TRAITS!',
    reward: '1 Time II Potion and 100 Trait Gems',
    status: 'active',
    firstSeen: '2026-06-23',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Roblox Den, GameRant, Deltia, Reddit, MrGuider',
    confidence: 'medium',
    notes:
      'Most current sources list TRAITS! with the S and exclamation mark. Some sources show TRAIT!, so copy carefully and check the official Discord if the code fails.',
  },
];

export const watchCodes: GameCode[] = [
  {
    code: 'TRAIT!',
    reward: 'Reported Time II Potion and Trait Gems variant',
    status: 'watch',
    firstSeen: '2026-06-23',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Beebom, RoCodes, Dexerto',
    confidence: 'watch',
    notes:
      'Several sources omit the S. Because current sources conflict, this site keeps the variant in watch status instead of presenting both spellings as equally verified.',
  },
];

export const expiredCodes: GameCode[] = [];

export const codeCheckSummary = {
  checkedAt: CODE_CHECKED_AT,
  status:
    'Codes are source-checked from current code pages and search results, but this site has not game-tested them inside Roblox.',
  sourcesChecked: [
    {
      label: 'Roblox game page',
      url: officialGameFacts.officialRobloxUrl,
    },
    {
      label: 'Roblox group',
      url: officialGameFacts.officialGroupUrl,
    },
    {
      label: 'Beebom',
      url: 'https://beebom.com/anime-card-farm-codes/',
    },
    {
      label: 'Roblox Den',
      url: 'https://robloxden.com/game-codes/anime-card-farm',
    },
    {
      label: 'RoCodes',
      url: 'https://rocodes.gg/codes/anime-card-farm',
    },
    {
      label: 'Pocket Tactics',
      url: 'https://www.pockettactics.com/anime-card-farm-codes',
    },
  ],
};
