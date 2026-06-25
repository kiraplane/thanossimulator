import type { Syndicate } from './types';

export const syndicates: Syndicate[] = [
  {
    slug: 'lifeblood',
    name: 'Lifeblood',
    icon: '/chronoccg/icons/lifeblood.png',
    tagline: 'Growth, board presence, and nature-driven pressure.',
    gamePlan:
      'Lifeblood wants the board to become harder to answer over time. Sprouts, healing, scaling stats, and durable agents make it a natural first stop for players who like building a position before converting that board into core damage.',
    goodFor: [
      'Beginner-friendly boards',
      'Token pressure',
      'Longer value games',
    ],
    caution:
      'Wide boards still need clean attack timing. Do not fill every slot if the next agent or timeline would create a stronger turn.',
    relatedRoutes: ['/guides/starter-decks-guide', '/guides/syndicates-guide'],
  },
  {
    slug: 'sungrace',
    name: 'Sungrace',
    icon: '/chronoccg/icons/sungrace.png',
    tagline: 'Energy, burn, and pressure from the power of collapsing suns.',
    gamePlan:
      'Sungrace leans into direct pressure, resource bursts, and damage windows. It is attractive for players who want games to end before the opponent assembles a slow timeline plan.',
    goodFor: [
      'Burn pressure',
      'Aggressive ladder starts',
      'Punishing slow hands',
    ],
    caution:
      'Fast pressure can run out of cards or board texture. Track the enemy core, but also track whether you can beat their first stabilizing turn.',
    relatedRoutes: ['/tier-list', '/guides/starter-decks-guide'],
  },
  {
    slug: 'silence',
    name: 'Silence',
    icon: '/chronoccg/icons/silence.png',
    tagline: 'Telepathy, disruption, mute effects, and quiet control.',
    gamePlan:
      'Silence is the control-minded syndicate. It wants to deny text, remove threats, and make the opponent play a less explosive version of their deck.',
    goodFor: ['Reactive play', 'Disruption', 'Answer-heavy decks'],
    caution:
      'Control only works when your answers line up with the threat. New players should learn priority and chain timing before making Silence their main ladder plan.',
    relatedRoutes: ['/rules', '/guides/timeline-priority-guide'],
  },
  {
    slug: 'singularity',
    name: 'Singularity',
    icon: '/chronoccg/icons/singularity.png',
    tagline: 'AI order, invention, tempo tools, and system-level setups.',
    gamePlan:
      'Singularity supports decks that care about sequencing and board engineering. It often rewards players who can plan two turns ahead instead of spending every resource immediately.',
    goodFor: ['Tempo puzzles', 'Engine decks', 'Precise sequencing'],
    caution:
      'Engine pieces are only good when they still affect the match. Build around a real win condition, not just neat interactions.',
    relatedRoutes: ['/decks', '/guides/diver-deckbuilding-guide'],
  },
  {
    slug: 'splintergleam',
    name: 'Splintergleam',
    icon: '/chronoccg/icons/splintergleam.png',
    tagline: 'Combat, bleed, sacrifice, and growth through destruction.',
    gamePlan:
      'Splintergleam rewards players who are comfortable trading durability and board pieces for pressure. Bleed and sacrifice lines can make an opponent stabilizing at low core durability feel unsafe.',
    goodFor: ['Combat pressure', 'Bleed decks', 'Players who like risk'],
    caution:
      'A sacrifice is only good when the payoff matters. Count your core durability before paying life for tempo.',
    relatedRoutes: ['/tier-list', '/guides/starter-decks-guide'],
  },
  {
    slug: 'phasetide',
    name: 'Phasetide',
    icon: '/chronoccg/icons/phasetide.png',
    tagline: 'Rewind, healing, phase effects, and timeline order.',
    gamePlan:
      'Phasetide bends board states by rewinding, healing, and phasing agents out of normal combat. It can protect key units while forcing the opponent to retake the same ground.',
    goodFor: ['Defensive tempo', 'Phasing tricks', 'Longer timeline games'],
    caution:
      'Phasing and rewinding are timing-sensitive. Use the rules guide before assuming a protected unit is safe from every chain.',
    relatedRoutes: ['/guides/timeline-priority-guide', '/rules'],
  },
];

export function getSyndicate(slug: string) {
  return syndicates.find((syndicate) => syndicate.slug === slug);
}
