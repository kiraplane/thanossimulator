import { CODE_CHECKED_AT } from './codes';
import { sources } from './sources';

export type ResourceId =
  | 'gems'
  | 'gold'
  | 'traitShards'
  | 'rerollCubes'
  | 'rerolls'
  | 'statCubes'
  | 'perfectCubes'
  | 'bountyTickets';

export type ResourceStageId = 'fresh' | 'story' | 'raid' | 'endgame';
export type ResourceGoalId = 'summon' | 'upgrade' | 'traits' | 'save';

export interface ResourceTotal {
  id: ResourceId;
  label: string;
  knownAmount: number;
  helper: string;
}

export interface UnknownRewardNote {
  code: string;
  note: string;
}

export interface TraitRateDefault {
  slug: string;
  name: string;
  tier: 'SS' | 'S' | 'A' | 'B' | 'C' | 'D';
  ratePercent: number;
  keepRule: string;
}

export interface BannerTargetDefault {
  id: 'woo' | 'mythic';
  label: string;
  ratePercent: number;
  helper: string;
}

export const featuredUnitPageSlugs = [
  'gometa-ssj4',
  'woo-shadow',
  'madora-gunbai',
  'puppeteer-transcendent',
  'berserker-enraged',
  'fastwagon',
  'falcon-dark',
  'shanron-omega',
] as const;

export const calculatorSourceNotes = {
  checkedAt: CODE_CHECKED_AT,
  resourceSources: [
    sources.beebomCodes,
    sources.destructoidCodes,
    sources.proGameGuidesCodes,
    sources.radioTimesCodes,
    sources.gamesRadarCodes,
    sources.animesquadronOneResourceCalculator,
  ],
  reportedRateSources: [
    sources.avergamesCalculatorHub,
    sources.avergamesTraitRerollCalculator,
    sources.avergamesWooPityCalculator,
    sources.beebomTraitsGuide,
    sources.chainplayTraitsGuide,
  ],
};

export const resourceTotals: ResourceTotal[] = [
  {
    id: 'gems',
    label: 'Gems',
    knownAmount: 1000,
    helper:
      'Known active-code Gems from exact reward text. Reported bonus Gems are excluded.',
  },
  {
    id: 'gold',
    label: 'Gold',
    knownAmount: 6000,
    helper: 'Known active-code Gold from exact reward text.',
  },
  {
    id: 'traitShards',
    label: 'Trait Shards',
    knownAmount: 150,
    helper: 'Known active-code Trait Shards for keeper-unit rerolls.',
  },
  {
    id: 'rerollCubes',
    label: 'Reroll Cubes',
    knownAmount: 50,
    helper: 'Known active-code Reroll Cubes from current source checks.',
  },
  {
    id: 'rerolls',
    label: 'Rerolls',
    knownAmount: 150,
    helper: 'Known active-code reroll items from UPD 0.5 reward wording.',
  },
  {
    id: 'statCubes',
    label: 'Stat Cubes',
    knownAmount: 50,
    helper: 'Known active-code Stat Cubes for keeper-unit stat improvement.',
  },
  {
    id: 'perfectCubes',
    label: 'Perfect Cubes',
    knownAmount: 11,
    helper: 'Known active-code Perfect Cubes. Keep these for a proven unit.',
  },
  {
    id: 'bountyTickets',
    label: 'Bounty Tickets',
    knownAmount: 8,
    helper: 'Known active-code Bounty Tickets from UPD 0.5 rewards.',
  },
];

export const unknownRewardNotes: UnknownRewardNote[] = [
  {
    code: 'Tysm80kCCU!',
    note: 'Sources agree on Trait Shards, Reroll Cubes, and Gold, but differ on the exact bonus Gems.',
  },
  {
    code: 'Tysm60kCCU!',
    note: 'Sources describe free reroll, cube, Gold, Gem, and ticket rewards without stable exact quantities.',
  },
];

export const resourceStagePlans: Record<
  ResourceStageId,
  { label: string; recommendation: string }
> = {
  fresh: {
    label: 'Fresh account',
    recommendation:
      'Redeem active codes first, summon until you find one real carry candidate, then stop spreading upgrades across filler units.',
  },
  story: {
    label: 'Story push',
    recommendation:
      'Spend Gold on one main carry and use the team combo planner to patch the first missing role before rerolling traits.',
  },
  raid: {
    label: 'Raid prep',
    recommendation:
      'Hold Perfect Cubes until a carry or boss-damage unit clearly improves raid or late-wave results.',
  },
  endgame: {
    label: 'Endgame chase',
    recommendation:
      'Plan around keeper units, reported pity, and trait value. Do not drain rare rerolls on a unit that may leave the squad.',
  },
};

export const resourceGoalPlans: Record<
  ResourceGoalId,
  { label: string; recommendation: string }
> = {
  summon: {
    label: 'Summon for carry',
    recommendation:
      'Use Gems to create unit options first, then stop once the squad has a carry that changes clears.',
  },
  upgrade: {
    label: 'Upgrade current team',
    recommendation:
      'Gold should improve the unit that is already solving waves or bosses, not every slot equally.',
  },
  traits: {
    label: 'Plan trait rerolls',
    recommendation:
      'Trait Shards, Reroll Cubes, Stat Cubes, and Perfect Cubes belong on keeper units only.',
  },
  save: {
    label: 'Save for update',
    recommendation:
      'Saving is correct when the current team already clears the next reward wall or the next banner is close.',
  },
};

export const resourceCalculatorDefaults = {
  gemCostPerPull: 50,
  checkedAt: CODE_CHECKED_AT,
};

export const traitRateDefaults: TraitRateDefault[] = [
  {
    slug: 'superior',
    name: 'Superior',
    tier: 'SS',
    ratePercent: 0.1,
    keepRule: 'Premium carry or boss-damage unit only.',
  },
  {
    slug: 'cloner',
    name: 'Cloner',
    tier: 'SS',
    ratePercent: 0.2,
    keepRule: 'Copy-value unit or a unit that keeps value across modes.',
  },
  {
    slug: 'entrepreneur',
    name: 'Entrepreneur',
    tier: 'S',
    ratePercent: 0.3,
    keepRule: 'Economy or farm plan where income changes the run.',
  },
  {
    slug: 'rebirth',
    name: 'Rebirth',
    tier: 'S',
    ratePercent: 0.4,
    keepRule: 'Survival plan for a unit that already has a real job.',
  },
  {
    slug: 'lethal',
    name: 'Lethal',
    tier: 'A',
    ratePercent: 1.25,
    keepRule: 'Damage unit when the roll helps a current stage wall.',
  },
  {
    slug: 'sniper',
    name: 'Sniper',
    tier: 'A',
    ratePercent: 1.25,
    keepRule: 'Range-sensitive carry or boss plan.',
  },
  {
    slug: 'wealthy',
    name: 'Wealthy',
    tier: 'A',
    ratePercent: 1.25,
    keepRule: 'Economy plan when upgrade timing is the bottleneck.',
  },
  {
    slug: 'juggernaut',
    name: 'Juggernaut',
    tier: 'B',
    ratePercent: 1.25,
    keepRule: 'Durability role when survival is the real problem.',
  },
  {
    slug: 'knight',
    name: 'Knight',
    tier: 'B',
    ratePercent: 11.33,
    keepRule: 'Temporary keep unless it supports a clear.',
  },
  {
    slug: 'ranger',
    name: 'Ranger',
    tier: 'C',
    ratePercent: 11.33,
    keepRule: 'Temporary keep for range value.',
  },
  {
    slug: 'powerful',
    name: 'Powerful',
    tier: 'C',
    ratePercent: 20,
    keepRule: 'Useful early, but not worth premium protection.',
  },
  {
    slug: 'tank',
    name: 'Tank',
    tier: 'D',
    ratePercent: 11.33,
    keepRule: 'Keep only when the unit needs durability.',
  },
  {
    slug: 'sight',
    name: 'Sight',
    tier: 'D',
    ratePercent: 20,
    keepRule: 'Low-priority utility roll.',
  },
  {
    slug: 'endure',
    name: 'Endure',
    tier: 'D',
    ratePercent: 20,
    keepRule: 'Low-priority survival roll.',
  },
];

export const bannerDefaults = {
  gemCostPerPull: 50,
  mythicPity: 250,
  checkedAt: '2026-06-25',
  sourceLabel: sources.avergamesWooPityCalculator.label,
  note: 'Reported planning defaults from competitor coverage. Keep values editable until the live banner UI is verified.',
};

export const bannerTargetDefaults: BannerTargetDefault[] = [
  {
    id: 'woo',
    label: 'Woo specifically',
    ratePercent: 0.005,
    helper:
      'Reported Woo base rate. Use as an estimate, not an official guarantee.',
  },
  {
    id: 'mythic',
    label: 'Any Mythic',
    ratePercent: 0.5,
    helper:
      'Reported broad Mythic rate for planning pity pressure and Gem budget.',
  },
];
