import { CHECKED_AT } from './sources';
import type { GameUpdate } from './types';

export const updates: GameUpdate[] = [
  {
    slug: 'patch-0-6-11-welcome-to-beta',
    title: 'Patch 0.6.11 - Welcome to Beta',
    publishedAt: '2026-06-23',
    summary:
      'Open beta began with account and collection wipes, UI improvements, no further wipes planned, Nameless Spirit text changes, bug fixes, reward emails, and creator code drops.',
    source: {
      type: 'official',
      label: 'Patch 0.6.11 - Welcome to Beta',
      url: 'https://playchrono.com/news/welcome-to-beta',
      checkedAt: CHECKED_AT,
      confidence: 'high',
    },
  },
  {
    slug: 'steam-release',
    title: 'Steam release and open beta',
    publishedAt: '2026-06-23',
    summary:
      'Steam lists Chrono CCG as free to play and released on June 23, 2026. The Early Access section says players can build decks, queue ladder or direct matches, test against the computer, and play draft mode.',
    source: {
      type: 'store',
      label: 'Chrono CCG on Steam',
      url: 'https://store.steampowered.com/app/4221310/Chrono_CCG/',
      checkedAt: CHECKED_AT,
      confidence: 'high',
    },
  },
  {
    slug: 'official-rules-live',
    title: 'Official rules and tutorial path',
    publishedAt: '2026-06-23',
    summary:
      'The official beta patch tells new players to read the website rules and use tutorial videos because beta does not yet have an in-game tutorial.',
    source: {
      type: 'official',
      label: 'Official Chrono rules',
      url: 'https://playchrono.com/rules',
      checkedAt: CHECKED_AT,
      confidence: 'high',
    },
  },
];
