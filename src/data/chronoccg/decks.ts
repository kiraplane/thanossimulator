import type { DeckArchetype, MetaSignal } from './types';

export const deckArchetypes: DeckArchetype[] = [
  {
    slug: 'sprouts-beginner',
    name: 'Sprouts Beginner',
    syndicates: ['Lifeblood'],
    difficulty: 'Beginner',
    plan: 'Build a stable board, multiply small units into real pressure, and learn when to trade wide boards for core damage.',
    whyItMatters:
      'Current creator coverage repeatedly frames Sprouts as one of the cleanest first ladder decks because it teaches board space, combat, and scaling without asking for perfect chain timing.',
    watchFor:
      'Do not overfill the six-agent board. Leave space for the agent or effect that actually improves the turn.',
    sourceConfidence: 'medium',
    relatedRoutes: ['/guides/starter-decks-guide', '/syndicates'],
  },
  {
    slug: 'lifeblood-bleed',
    name: 'Lifeblood Bleed',
    syndicates: ['Lifeblood', 'Splintergleam'],
    difficulty: 'Intermediate',
    plan: 'Pair sticky boards with damage-over-time pressure so the opponent cannot simply heal or block their way out.',
    whyItMatters:
      'Very recent creator results call out Bleed as an early beta ladder threat, but the meta is still young enough to treat it as a watchlist deck rather than a solved best deck.',
    watchFor:
      'Bleed pressure needs follow-up. If the deck cannot close after creating chip damage, it becomes a slower board deck with extra steps.',
    sourceConfidence: 'medium',
    relatedRoutes: ['/tier-list', '/guides/starter-decks-guide'],
  },
  {
    slug: 'sungrace-burn',
    name: 'Sungrace Burn',
    syndicates: ['Sungrace'],
    difficulty: 'Beginner',
    plan: 'Apply fast core pressure, use energy windows efficiently, and punish opponents who spend too long setting up.',
    whyItMatters:
      'Sungrace is one of the clearest syndicate identities from official copy: damage and stellar pressure. That makes it a natural route for players coming from aggro card games.',
    watchFor:
      'Burn decks can lose to one missed sequencing window. Save enough interaction for the turn the opponent tries to stabilize.',
    sourceConfidence: 'medium',
    relatedRoutes: ['/syndicates', '/guides/syndicates-guide'],
  },
  {
    slug: 'silence-control',
    name: 'Silence Control',
    syndicates: ['Silence'],
    difficulty: 'Advanced',
    plan: 'Use mute, removal, and chain timing to make the opposing deck play under its normal ceiling.',
    whyItMatters:
      'Silence has a strong control identity, but new players need priority and chain practice before it becomes reliable.',
    watchFor:
      'Answers that arrive one priority window late can be worse than proactive cards. Study the chain before crafting toward full control.',
    sourceConfidence: 'medium',
    relatedRoutes: ['/rules', '/guides/timeline-priority-guide'],
  },
  {
    slug: 'phasetide-value',
    name: 'Phasetide Value',
    syndicates: ['Phasetide'],
    difficulty: 'Intermediate',
    plan: 'Use rewind, healing, and phase effects to keep high-value agents alive while forcing inefficient enemy attacks.',
    whyItMatters:
      'Official descriptions position Phasetide as the timeline-order and flow-control syndicate, which fits slower players who enjoy defensive tempo.',
    watchFor:
      'A protected agent still needs a plan. Rewinding without advancing your board can give the opponent time to reload.',
    sourceConfidence: 'medium',
    relatedRoutes: ['/guides/timeline-priority-guide', '/syndicates'],
  },
];

export const metaSignals: MetaSignal[] = [
  {
    label: 'Chrono CCG tier list',
    status: 'watch',
    summary:
      'Search demand exists, but beta card balance is moving quickly. A public meta watch page is safer than a fake final card tier list.',
    route: '/tier-list',
  },
  {
    label: 'Chrono CCG decks',
    status: 'direct',
    summary:
      'Runeterra.AR is linked from the official Chrono navigation and exposes decks plus builder intent, so a deck hub is a launch priority.',
    route: '/decks',
  },
  {
    label: 'Chrono CCG card list',
    status: 'direct',
    summary:
      'The wiki now carries an official card snapshot, while every row still links back to the official card page for live beta wording.',
    route: '/cards',
  },
  {
    label: 'Chrono CCG mobile',
    status: 'watch',
    summary:
      'Autocomplete shows mobile demand, but official store pages currently focus on Steam and Epic. Cover it safely in the download page without promising mobile support.',
    route: '/download',
  },
];
