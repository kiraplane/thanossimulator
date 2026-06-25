import { CHECKED_AT, officialGameFacts } from './sources';
import type { GameCode } from './types';

export const activeCodes: GameCode[] = [
  {
    code: 'ALLIE',
    reward: 'Reported 3 free packs',
    status: 'active',
    firstSeen: '2026-06-25',
    lastChecked: CHECKED_AT,
    sourceLabel: 'Alliestrasza Chrono CCG intro video snippet',
    confidence: 'medium',
    notes:
      'Creator code surfaced in current YouTube search results and matches the official beta note that creators are distributing free-goodie codes. Not game-tested by this site.',
  },
  {
    code: 'BETALAUNCH',
    reward: 'Reported beta launch packs and draft reward',
    status: 'active',
    firstSeen: '2026-06-23',
    lastChecked: CHECKED_AT,
    sourceLabel: 'r/ChronoCCG community listing',
    confidence: 'medium',
    notes:
      'The official subreddit page exposes this beta launch code in the current search result. Reward wording is source-checked, not game-tested.',
  },
];

export const watchCodes: GameCode[] = [
  {
    code: 'creator stream drops',
    reward: 'Free goodies during beta creator streams',
    status: 'watch',
    firstSeen: '2026-06-23',
    lastChecked: CHECKED_AT,
    sourceLabel: 'Patch 0.6.11 official news',
    confidence: 'high',
    notes:
      'The official beta patch says content creators are giving out codes. Names can rotate by stream, so only source-checked public codes are listed above.',
  },
];

export const expiredCodes: GameCode[] = [];

export const codeCheckSummary = {
  checkedAt: CHECKED_AT,
  status:
    'Source-checked beta codes are listed, but they were not game-tested. Try them before spending money or buying packs.',
  sourcesChecked: [
    {
      label: 'Official beta patch',
      url: 'https://playchrono.com/news/welcome-to-beta',
    },
    {
      label: 'Official Discord link',
      url: officialGameFacts.discordUrl,
    },
    {
      label: 'r/ChronoCCG',
      url: officialGameFacts.redditUrl,
    },
    {
      label: 'YouTube creator results',
      url: 'https://www.youtube.com/results?search_query=Chrono+CCG+codes',
    },
  ],
};
