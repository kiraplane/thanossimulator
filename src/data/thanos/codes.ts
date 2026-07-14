import { officialGameFacts } from './sources';
import type { GameCode } from './types';

export const CODE_CHECKED_AT = '2026-07-14';

export const activeCodes: GameCode[] = [];

export const watchCodes: GameCode[] = [
  {
    code: 'surtur code',
    reward: 'Search/autocomplete watch term, not a verified redeem code',
    status: 'watch',
    firstSeen: '2026-07-07',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Serper autocomplete for "thanos simulator surtur code"',
    confidence: 'watch',
    notes:
      'This appears as a player search phrase, but current official Roblox/Fandom checks did not verify a public redeem code. Treat it as a Surtur/Twilight Sword guide intent unless a real in-game code panel confirms otherwise.',
  },
  {
    code: 'infinity gauntlet simulator codes',
    reward: 'Generic Roblox codes search intent',
    status: 'watch',
    firstSeen: '2026-07-07',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Serper related/autocomplete and low-confidence code pages',
    confidence: 'watch',
    notes:
      'Some third-party pages use codes phrasing next to script and exploit content. This site does not publish copied code lists without game-specific verification.',
  },
];

export const expiredCodes: GameCode[] = [];

export const codeCheckSummary = {
  checkedAt: CODE_CHECKED_AT,
  status:
    'No active Thanos Simulator redeem codes are verified as of this check. Search demand exists, but official Roblox/Fandom checks support guide routes and safety notes more than a live code list.',
  sourcesChecked: [
    {
      label: 'Roblox game page',
      url: officialGameFacts.officialRobloxUrl,
    },
    {
      label: 'Thanos Simulator Official Wiki',
      url: 'https://thanos-simulator-official.fandom.com/wiki/Thanos_Simulator_Official_Wiki',
    },
    {
      label: 'Serper autocomplete and related discovery',
      url: 'https://google.serper.dev/',
    },
    {
      label: 'RobloxDatabase game/code/script surface',
      url: 'https://robloxdatabase.com/games/infinity-gauntlet-thanos-simulator/',
    },
  ],
};
