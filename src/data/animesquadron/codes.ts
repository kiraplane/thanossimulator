import { sources } from './sources';
import type { GameCode } from './types';

export const CODE_CHECKED_AT = '2026-06-23';

const coreSourceLabel = `${sources.beebomCodes.label}, ${sources.destructoidCodes.label}, ${sources.proGameGuidesCodes.label}, ${sources.radioTimesCodes.label}`;
const inactiveConflictLabel = `${sources.beebomCodes.label}, ${sources.destructoidCodes.label}, ${sources.proGameGuidesCodes.label}; older trackers may still show stale entries`;
const newestSourceLabel = `${sources.beebomCodes.label}, ${sources.destructoidCodes.label}, ${sources.proGameGuidesCodes.label}, ${sources.pcgamesnCodes.label}, ${sources.pocketTacticsCodes.label}, ${sources.radioTimesCodes.label}`;
const june22SourceLabel = `${sources.beebomCodes.label}, ${sources.destructoidCodes.label}, ${sources.proGameGuidesCodes.label}`;

export const codes: GameCode[] = [
  {
    code: 'Tysm80kCCU!',
    reward:
      '75 Trait Shards, 50 Reroll Cubes, 5,000 Gold, and reported bonus Gems',
    status: 'active',
    firstSeen: '2026-06-22',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: june22SourceLabel,
    notes:
      'Newest UPD 0.5 source-checked CCU code. Sources agree it is active, but the exact Gem reward text differs, so the in-game popup is final.',
  },
  {
    code: 'Tysm60kCCU!',
    reward: 'Free reroll, cube, Gold, Gem, and ticket rewards',
    status: 'active',
    firstSeen: '2026-06-22',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: june22SourceLabel,
    notes:
      'Newest UPD 0.5 source-checked CCU code. Reward wording differs by tracker, so copy the code first and trust the in-game reward popup.',
  },
  {
    code: 'LongMaintenance!',
    reward: '100 Rerolls, 20 Stat Cubes, 5 Perfect Cubes, and 5 Bounty Tickets',
    status: 'active',
    firstSeen: '2026-06-22',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: june22SourceLabel,
    notes:
      'UPD 0.5 maintenance compensation code listed by current June 22 code trackers.',
  },
  {
    code: 'Eclipse!',
    reward: '50 Rerolls, 30 Stat Cubes, and 3 Perfect Cubes',
    status: 'active',
    firstSeen: '2026-06-22',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: june22SourceLabel,
    notes: 'UPD 0.5 code cross-checked across current June 22 code trackers.',
  },
  {
    code: 'UPD0.5!',
    reward: '25 Rerolls',
    status: 'active',
    firstSeen: '2026-06-22',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: june22SourceLabel,
    notes:
      'Update 0.5 code; keep the zero, dot, and exclamation mark when copying.',
  },
  {
    code: '50kCCU!',
    reward:
      '100 Trait Shards, 1,000 Gold, 2,000 Gems, 25 Stat Cubes, and 2 Perfect Cubes',
    status: 'watch',
    firstSeen: '2026-06-19',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: newestSourceLabel,
    notes:
      'June 23 source conflict: Beebom and Pro Game Guides still list it active, while Radio Times moved it to expired. Try it after the newest UPD 0.5 codes and mark it inactive if the game rejects it.',
  },
  {
    code: '10MilVisits!',
    reward: '50 Trait Shards and 2,000 Gold',
    status: 'watch',
    firstSeen: '2026-06-19',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: newestSourceLabel,
    notes:
      'June 23 source conflict: Beebom keeps it in the working set, while Radio Times lists it expired. Treat it as a try-last code until an in-game check confirms the result.',
  },
  {
    code: '40kCCU!',
    reward: '40 Trait Rerolls, 3,500 Gems, 30 Stat Cubes, and 20 Zeni',
    status: 'expired',
    firstSeen: '2026-06-15',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: newestSourceLabel,
    notes:
      'Moved to expired after the June 22 check because multiple current trackers list it inactive.',
  },
  {
    code: '5kInterested!',
    reward: '2,000 Gems, 2,000 Gold, and 20 Trait Rerolls',
    status: 'expired',
    firstSeen: '2026-06-15',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: newestSourceLabel,
    notes:
      'Moved to expired after the June 22 check because multiple current trackers list it inactive.',
  },
  {
    code: 'Tysm30KCCU!',
    reward: '2,000 Gems, 5,000 Gold, 50 Trait Shards, and 30 Reroll Cubes',
    status: 'expired',
    firstSeen: '2026-06-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: coreSourceLabel,
    notes:
      'Moved to expired after the June 22 check because multiple current trackers list it inactive.',
  },
  {
    code: 'Release!',
    reward: '1,000 Gems, 5,000 Gold, 100 Trait Shards, and 30 Reroll Cubes',
    status: 'expired',
    firstSeen: '2026-06-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved to expired after the June 22 check because current trackers no longer keep it in the active group.',
  },
  {
    code: 'CRAZYSUPPORT!',
    reward: '2,000 Gems, 25 Trait Shards, and 8,000 Gold',
    status: 'expired',
    firstSeen: '2026-06-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: coreSourceLabel,
    notes:
      'Moved to expired after the June 22 check because current trackers no longer keep it in the active group.',
  },
  {
    code: 'EverythingIsPartOfMyPlan!',
    reward: '25 Trait Shards',
    status: 'active',
    firstSeen: '2026-06-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: coreSourceLabel,
    notes:
      'Still listed active across current June 22 code trackers, though some sources describe the reward as rerolls rather than Trait Shards.',
  },
  {
    code: 'Yokoso!',
    reward: '3 Perfect Cubes',
    status: 'active',
    firstSeen: '2026-06-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: coreSourceLabel,
    notes:
      'Perfect Cube code still listed as active across current June 22 code trackers.',
  },
  {
    code: 'SorryForLongMaintenance!',
    reward: '1,000 Gems, 50 Trait Shards, and 2,000 Gold',
    status: 'expired',
    firstSeen: '2026-06-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: coreSourceLabel,
    notes:
      'Moved to expired after the June 22 check because the newer LongMaintenance code replaced it in current lists.',
  },
  {
    code: 'Tysm10kCCU!',
    reward: '3,500 Gems, 50 Trait Shards, and 3 Perfect Cubes',
    status: 'expired',
    firstSeen: '2026-06-11',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved from watch to expired because current June 22 sources now agree it is no longer active.',
  },
  {
    code: 'SorryForChanges!',
    reward: '20 Trait Shards and 10 Reroll Cubes',
    status: 'expired',
    firstSeen: '2026-06-11',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: '1kLikes!',
    reward: '2,000 Gems, 20 Trait Shards, and 30 Stat Rerolls',
    status: 'expired',
    firstSeen: '2026-06-09',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: 'SorryForBugs!',
    reward: '1,000 Gems, 2,000 Gold, 20 Trait Shards, and Reroll Cubes',
    status: 'expired',
    firstSeen: '2026-06-09',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive. Reward quantity differs by tracker, so in-game text would be final.',
  },
  {
    code: '500Interested!',
    reward: '3,000 Gold, 500 Gems, and 15 Trait Shards',
    status: 'expired',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: 'Tysm5kCCU!',
    reward: '2,500 Gems, 5,000 Gold, 50 Trait Shards, and 2 Perfect Cubes',
    status: 'expired',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: 'SorryForDelay!',
    reward: '20 Trait Shards, 10 Reroll Cubes, and 1,000 Gold',
    status: 'expired',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: 'EarlyAccess!',
    reward: '100 Trait Shards, 300 Gems, 30 Reroll Cubes, and 5,000 Gold',
    status: 'expired',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: 'ThankYouEA!',
    reward: '200 Gold and 2,000 Gems',
    status: 'expired',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: '10KMembers!',
    reward: '25 Trait Shards and 1 Perfect Cube',
    status: 'expired',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: 'ThanksForSupport!',
    reward: 'Trait Shards and 25 Reroll Cubes',
    status: 'expired',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
];

export const activeCodes = codes.filter((code) => code.status === 'active');
export const expiredCodes = codes.filter((code) => code.status === 'expired');
export const watchCodes = codes.filter((code) => code.status === 'watch');

export const codeCheckSummary = {
  checkedAt: CODE_CHECKED_AT,
  status: `${activeCodes.length} active codes and ${watchCodes.length} watchlist codes tracked`,
  sourcesChecked: [
    sources.robloxGame,
    sources.beebomCodes,
    sources.destructoidCodes,
    sources.proGameGuidesCodes,
    sources.pcgamesnCodes,
    sources.pocketTacticsCodes,
    sources.radioTimesCodes,
  ],
  reviewNotes: [
    'Anime Squadron codes are case-sensitive; copy them exactly, including punctuation.',
    'Redeem the UPD 0.5 batch first: Tysm80kCCU!, Tysm60kCCU!, LongMaintenance!, Eclipse!, and UPD0.5!.',
    '50kCCU and 10MilVisits moved to watch after the June 23 source check found active/expired disagreement.',
    'Tysm10kCCU moved from watch to expired after the June 22 source check.',
    'Older launch codes stay out of the active table unless at least two current sources agree they still work.',
    'Use codes before rerolling traits or stats so the free shards, cubes, gems, and gold shape your first real spend.',
    'If a code fails, rejoin a fresh server and retry before assuming it is expired.',
  ],
};
