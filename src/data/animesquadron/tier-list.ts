import { sources } from './sources';
import type { UnitNameWatch, UnitRoleRanking, UnitTierRanking } from './types';

export const unitRoleRankings: UnitRoleRanking[] = [
  {
    slug: 'main-carry',
    role: 'Main Carry',
    tier: 'Recommended',
    earlyValue: 'High',
    longTermValue: 'High',
    rerollCost: 'High',
    bestFor: ['Story waves', 'Boss pressure', 'First serious traits'],
    decision:
      'Build one main carry before spreading trait shards and stat rerolls across the whole squad.',
    buildNotes: [
      'Prioritize the unit that clears waves without needing constant replacement.',
      'Give the carry your first serious trait or stat reroll attempt.',
      'Stop upgrading filler once the carry can push the next reward breakpoint.',
    ],
    avoid:
      'Do not spend Perfect Cubes on a unit just because it is your first pull.',
    sourceConfidence: 'medium',
  },
  {
    slug: 'boss-damage',
    role: 'Boss Damage',
    tier: 'Recommended',
    earlyValue: 'Medium',
    longTermValue: 'High',
    rerollCost: 'Medium',
    bestFor: ['Boss waves', 'Madora checks', 'Late wave cleanup'],
    decision:
      'Keep a boss-focused damage slot ready once normal waves stop being the only problem; Madora/Madara-style burn or burst units are the current watch target.',
    buildNotes: [
      'Look for strong single-target output or burst windows.',
      'Pair boss damage with control so it has time to work.',
      'Upgrade after your main carry is stable.',
    ],
    avoid:
      'Do not make boss damage your first investment if basic wave clears still fail.',
    sourceConfidence: 'medium',
  },
  {
    slug: 'control',
    role: 'Control',
    tier: 'Situational',
    earlyValue: 'Medium',
    longTermValue: 'High',
    rerollCost: 'Low',
    bestFor: ['Wave stalls', 'Crowded lanes', 'Co-op support'],
    decision:
      'Use control when enemies reach the end before your damage units can finish the lane.',
    buildNotes: [
      'Control is strongest when it protects a carry, not when it replaces one.',
      'Avoid over-upgrading control before damage is solved.',
      'Check whether the mode rewards faster clears or safer clears.',
    ],
    avoid:
      'Do not chase perfect control traits on a unit that only appears in easy stages.',
    sourceConfidence: 'medium',
  },
  {
    slug: 'economy',
    role: 'Economy',
    tier: 'Situational',
    earlyValue: 'Medium',
    longTermValue: 'Medium',
    rerollCost: 'Low',
    bestFor: ['Gold flow', 'Upgrade tempo', 'Long wave modes'],
    decision:
      'Economy units matter when they convert into earlier upgrades, but they are not a substitute for damage.',
    buildNotes: [
      'Use economy units like Fastwagon only if they help you place or upgrade the carry sooner.',
      'Cut economy investment when a boss or leak becomes the real wall.',
      'Treat economy traits as account-stage tools.',
    ],
    avoid:
      'Do not keep an economy unit on the field if the lane is already leaking.',
    sourceConfidence: 'medium',
  },
  {
    slug: 'support',
    role: 'Support',
    tier: 'Situational',
    earlyValue: 'Low',
    longTermValue: 'High',
    rerollCost: 'Medium',
    bestFor: ['Carry buffs', 'Team scaling', 'Co-op clears'],
    decision:
      'Support gets better after you know which carry, mode, or lane setup it is improving; Shinks-style buffs should not replace your first carry.',
    buildNotes: [
      'Build support around a proven carry.',
      'Prefer repeatable buffs over flashy effects you cannot trigger reliably.',
      'Save premium rerolls until support value is visible in harder stages.',
    ],
    avoid:
      'Do not upgrade support first if it only improves weak starter damage.',
    sourceConfidence: 'medium',
  },
  {
    slug: 'starter-filler',
    role: 'Starter Filler',
    tier: 'Data Pending',
    earlyValue: 'Low',
    longTermValue: 'Low',
    rerollCost: 'Low',
    bestFor: ['Opening waves', 'Temporary slots', 'Learning placement'],
    decision:
      'Use filler to start playing, then replace it as soon as your codes and summons produce a better role.',
    buildNotes: [
      'Keep upgrades minimal unless the unit unlocks a real stage breakpoint.',
      'Use filler to test maps and lane pressure.',
      'Retire it before spending scarce rerolls.',
    ],
    avoid: 'Do not confuse early availability with long-term priority.',
    sourceConfidence: 'medium',
  },
];

export const recommendedRoles = unitRoleRankings.filter(
  (entry) => entry.tier === 'Recommended'
);

const topTierSources = [
  sources.beebomTierList.label,
  sources.pocketTacticsTierList.label,
  sources.proGameGuidesTierList.label,
  sources.destructoidTierList.label,
  sources.sportskeedaTierList.label,
  sources.chainplayTierList.label,
  sources.gamesGgTierList.label,
];

export const unitTierRankings: UnitTierRanking[] = [
  {
    slug: 'gometa-ssj4',
    name: 'Gometa (SSJ4)',
    aliases: ['Gogeta', 'Gometa', 'SSJ4 Gogeta'],
    tier: 'S',
    roleFit: ['Main Carry', 'Boss Damage'],
    bestFor: ['Premium carry', 'Boss pressure', 'Late route project'],
    reason:
      'Current 0.5 tier-list checks keep Gometa/Gogeta in the top damage group, and route guides frame it as a serious long-form evolution target.',
    investWhen:
      'Invest when the evolution route is realistic and the unit will become your main carry or boss-damage anchor.',
    caution:
      'Do not drain rare materials into the route if your account still lacks a stable farming carry.',
    sourceLabels: [...topTierSources, sources.gamezeboGogetaGuide.label],
    sourceConfidence: 'medium',
  },
  {
    slug: 'berserker-enraged',
    name: 'Berserker (Enraged)',
    aliases: ['Berserker', 'Berserk', 'Berserker Enraged'],
    tier: 'S',
    roleFit: ['Main Carry', 'Boss Damage'],
    bestFor: ['UPD 0.5 DPS', 'Boss damage', 'Late-wave pressure'],
    reason:
      'The newest 0.5 competitor updates place Berserker/Enraged in the top DPS conversation alongside the established premium carries.',
    investWhen:
      'Invest when Berserker is available to your account and test runs show it beats your current carry or boss-damage slot.',
    caution:
      'Verify banner access and live upgrade cost before moving Perfect Cubes, rare traits, or expensive gear.',
    sourceLabels: [
      sources.proGameGuidesTierList.label,
      sources.destructoidTierList.label,
      sources.sportskeedaTierList.label,
    ],
    sourceConfidence: 'medium',
  },
  {
    slug: 'madora-gunbai',
    name: 'Madora (Gunbai)',
    aliases: ['Madara', 'Madora', 'Madara Gunbai'],
    tier: 'S',
    roleFit: ['Boss Damage', 'Main Carry'],
    bestFor: ['Boss burn', 'Burst pressure', 'Ninja-style progression'],
    reason:
      'Multiple current tier lists continue to treat Madora/Gunbai as a top named damage signal, especially where boss or burn value matters.',
    investWhen:
      'Invest when your run is blocked by boss health or late-wave enemies rather than basic early wave clear.',
    caution:
      'Do not make it your first major spend if ordinary waves still leak before boss damage matters.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'woo-shadow',
    name: 'Woo (Shadow)',
    aliases: ['Woo', 'Sung Jin-Woo', 'Shadow'],
    tier: 'S',
    roleFit: ['Main Carry', 'Boss Damage'],
    bestFor: ['High-end carry', 'Scaling damage', 'Late investment'],
    reason:
      'Woo/Shadow remains a repeated top-group unit across current competitor tier lists, but value depends on access and investment.',
    investWhen:
      'Invest after confirming the unit can be fielded, upgraded, and supported in your target mode.',
    caution:
      'Do not judge Woo from maxed showcase output if your account cannot reproduce the setup.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'puppeteer-transcendent',
    name: 'Puppeteer (Transcendent)',
    aliases: ['Puppeteer', 'Puppeteer Transcendent'],
    tier: 'S',
    roleFit: ['Main Carry', 'Control'],
    bestFor: ['Durable damage', 'Control value', 'Hard-stage utility'],
    reason:
      'Current sources consistently keep Puppeteer variants in the high-value group, usually around durable damage, control, or aggro-style utility.',
    investWhen:
      'Invest when you need a premium unit that does more than raw damage and can hold value in harder stages.',
    caution:
      'Do not treat it as pure farm support; build it around the actual role it fills in your squad.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'falcon-dark',
    name: 'Falcon (Dark)',
    aliases: ['Falcon', 'Falcon Dark', 'Dark Falcon'],
    tier: 'A',
    roleFit: ['Support', 'Economy', 'Boss Damage'],
    bestFor: ['Farm tempo', 'Support value', 'Hybrid DPS'],
    reason:
      '0.5 sources disagree between very high and high placement, but they consistently describe Falcon as useful because farm/support utility can change real runs.',
    investWhen:
      'Invest when Yen, support, execute-style value, or debuff resistance improves the same stage you are testing.',
    caution:
      'If you still lack a real carry, Falcon should not receive your first rare reroll batch.',
    sourceLabels: [
      sources.proGameGuidesTierList.label,
      sources.destructoidTierList.label,
    ],
    sourceConfidence: 'medium',
  },
  {
    slug: 'skeleton-knight-resonance',
    name: 'Skeleton Knight (Resonance)',
    aliases: ['Skeleton Knight', 'Resonance'],
    tier: 'A',
    roleFit: ['Support', 'Control'],
    bestFor: ['Tank value', 'Lane stability', 'Hard-stage support'],
    reason:
      'Current 0.5 checks describe Skeleton Knight/Resonance as tank, support, or hybrid value rather than a universal first carry.',
    investWhen:
      'Invest when your squad already has damage and needs stability, control, or survivability in harder content.',
    caution:
      'Avoid ranking it above damage carries when your actual wall is still DPS.',
    sourceLabels: [
      sources.proGameGuidesTierList.label,
      sources.destructoidTierList.label,
    ],
    sourceConfidence: 'medium',
  },
  {
    slug: 'shanron-omega',
    name: 'Shanron (Omega)',
    aliases: ['Shanron', 'Shenron', 'Omega'],
    tier: 'A',
    roleFit: ['Boss Damage', 'Support', 'Control'],
    bestFor: ['Late utility', 'Boss support', 'Control overlap'],
    reason:
      'Sources agree Shanron/Omega is valuable, but its exact priority depends on whether the account needs late utility or simpler carry power first.',
    investWhen:
      'Invest after your account can support its cost and the unit improves a real late-game or boss plan.',
    caution:
      'Do not let it delay a simpler carry if your current wall is early wave clear.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'shinks-emperor',
    name: 'Shinks (Emperor)',
    aliases: ['Shinks', 'Shanks', 'Emperor'],
    tier: 'A',
    roleFit: ['Support', 'Control'],
    bestFor: ['Carry support', 'Team scaling', 'Control utility'],
    reason:
      'Competitors split on raw damage ranking, but Shinks keeps support value when paired with a carry worth buffing.',
    investWhen:
      'Invest when your damage unit is already strong and the team needs support or control to push harder modes.',
    caution: 'Do not build Shinks as if it replaces your first carry.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'caska-resilience',
    name: 'Caska (Resilience)',
    aliases: ['Caska', 'Casca', 'Resilience'],
    tier: 'B',
    roleFit: ['Main Carry', 'Control'],
    bestFor: ['Early progress', 'Midgame filler', 'Lane testing'],
    reason:
      '0.5 sources mention Caska in lower-to-mid contexts, which makes it worth covering but not a confirmed premium target.',
    investWhen:
      'Invest lightly when Caska helps early or mid progression and you have not yet found a stronger carry.',
    caution:
      'Do not spend rare rerolls unless more stable data proves long-term value.',
    sourceLabels: [
      sources.proGameGuidesTierList.label,
      sources.destructoidTierList.label,
    ],
    sourceConfidence: 'medium',
  },
  {
    slug: 'fastwagon',
    name: 'Fastwagon',
    aliases: ['Speedwagon', 'Fastwagon'],
    tier: 'Utility',
    roleFit: ['Economy'],
    bestFor: ['Money acceleration', 'Upgrade tempo', 'Long-wave economy'],
    reason:
      'Fastwagon is not a DPS tier pick. It ranks as utility because money acceleration can change placement and upgrade timing, especially with economy gear plans.',
    investWhen:
      'Invest when extra economy gets your carry or support online earlier in the modes you farm most.',
    caution:
      'Cut back if enemies leak or bosses survive because damage, not economy, is the real wall.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
];

export const unitNameWatchlist: UnitNameWatch[] = [
  {
    slug: 'gometa-ssj4',
    name: 'Gometa (SSJ4)',
    aliases: ['Gogeta', 'Gometa', 'Gometa SSJ4'],
    consensus: 'UPD 0.5 top carry signal',
    roleFit: ['Main Carry', 'Boss Damage'],
    priority: 'Recommended',
    decision:
      'Treat Gometa/Gogeta as a keeper-carry candidate only when you can support the evolution path, Raid/Infinite prerequisites, and trait cost.',
    evidence:
      'Current UPD 0.5 competitor lists keep Gometa/Gogeta variants in the highest damage group, while a separate route guide frames the unit as an expensive evolution target rather than a cheap starter answer.',
    sourceLabels: [...topTierSources, sources.gamezeboGogetaGuide.label],
    sourceConfidence: 'medium',
  },
  {
    slug: 'berserker-enraged',
    name: 'Berserker (Enraged)',
    aliases: ['Berserker', 'Berserk', 'Berserker Enraged'],
    consensus: 'UPD 0.5 top DPS signal',
    roleFit: ['Main Carry', 'Boss Damage'],
    priority: 'Recommended',
    decision:
      'Use Berserker as a serious 0.5 DPS target when you need late-wave or boss pressure, but verify banner access and investment cost before moving rare rerolls.',
    evidence:
      'The newest tier-list checks moved Berserker/Enraged into the top damage conversation alongside Gometa, Puppeteer, Woo, and other premium units after the Berserk update.',
    sourceLabels: [
      sources.proGameGuidesTierList.label,
      sources.destructoidTierList.label,
      sources.sportskeedaTierList.label,
    ],
    sourceConfidence: 'medium',
  },
  {
    slug: 'falcon-dark',
    name: 'Falcon (Dark)',
    aliases: ['Falcon', 'Falcon Dark', 'Dark Falcon'],
    consensus: 'Farm support and DPS signal',
    roleFit: ['Support', 'Economy', 'Boss Damage'],
    priority: 'Recommended',
    decision:
      'Watch Falcon as a hybrid support-farm unit: valuable when extra Yen, execute-style value, or debuff resistance changes your upgrade tempo.',
    evidence:
      'UPD 0.5 competitor checks disagree on exact tier placement, but they consistently describe Falcon as more than filler because its farm/support utility can matter in real clears.',
    sourceLabels: [
      sources.proGameGuidesTierList.label,
      sources.destructoidTierList.label,
    ],
    sourceConfidence: 'medium',
  },
  {
    slug: 'madora-gunbai',
    name: 'Madora (Gunbai)',
    aliases: ['Madara', 'Madora', 'Madara Gunbai'],
    consensus: 'Top boss and burn signal',
    roleFit: ['Boss Damage', 'Main Carry'],
    priority: 'Recommended',
    decision:
      'Use Madora/Madara as the main named-unit answer for players asking about boss damage, burn, meteors, or Ninja Village progression.',
    evidence:
      'Competitor pages repeatedly rank Madora/Gunbai near the top and describe it around strong damage, burn or boss utility, so it is strong enough to watch before spending premium rerolls elsewhere.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'woo-shadow',
    name: 'Woo (Shadow)',
    aliases: ['Woo', 'Sung Jin-Woo', 'Shadow'],
    consensus: 'Top carry signal',
    roleFit: ['Main Carry', 'Boss Damage'],
    priority: 'Recommended',
    decision:
      'Build Woo as a late-scaling carry candidate only after checking whether your account can actually field and upgrade the unit.',
    evidence:
      'Several current lists keep Woo/Shadow in the top group, but the value depends on access and investment rather than early availability.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'puppeteer-transcendent',
    name: 'Puppeteer (Transcendent)',
    aliases: ['Puppeteer', 'Puppeteer Transcendent'],
    consensus: 'High-end damage and control signal',
    roleFit: ['Main Carry', 'Control'],
    priority: 'Recommended',
    decision:
      'Keep Puppeteer on the premium-target list, especially when you need durable damage or control rather than a pure farming unit.',
    evidence:
      'Competitors consistently treat Puppeteer variants as a high-value unit, with role descriptions leaning toward tanky damage, aggro, or hard-stage utility.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'skeleton-knight-resonance',
    name: 'Skeleton Knight (Resonance)',
    aliases: ['Skeleton Knight', 'Resonance'],
    consensus: 'Tank and support signal',
    roleFit: ['Support', 'Control'],
    priority: 'Situational',
    decision:
      'Use Skeleton Knight as a hard-stage stability pick when your squad needs tank/control value more than another raw DPS slot.',
    evidence:
      '0.5 tier-list sources describe Skeleton Knight/Resonance around tank, support, or hybrid value, which makes it useful to track but not automatically first-carry priority.',
    sourceLabels: [
      sources.proGameGuidesTierList.label,
      sources.destructoidTierList.label,
    ],
    sourceConfidence: 'medium',
  },
  {
    slug: 'shanron-omega',
    name: 'Shanron (Omega)',
    aliases: ['Shanron', 'Shenron', 'Omega'],
    consensus: 'Late utility signal',
    roleFit: ['Boss Damage', 'Support', 'Control'],
    priority: 'Situational',
    decision:
      'Keep Shanron as a strong late-game target, but do not let it delay a simpler carry if your current wall is early wave clear.',
    evidence:
      'The main agreement is that Shanron/Omega is valuable; the practical disagreement is whether it should be chased before cheaper carry or boss-damage upgrades.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'shinks-emperor',
    name: 'Shinks (Emperor)',
    aliases: ['Shinks', 'Shanks', 'Emperor'],
    consensus: 'Support value with ranking disagreement',
    roleFit: ['Support', 'Control'],
    priority: 'Situational',
    decision:
      'Use Shinks when your squad already has damage worth buffing; avoid treating support value as a replacement for a carry.',
    evidence:
      'Some competitors value Shinks highly for support, while others rank it lower when judging raw damage, so the safe interpretation is support-first rather than universal top carry.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'fastwagon',
    name: 'Fastwagon',
    aliases: ['Speedwagon', 'Fastwagon'],
    consensus: 'Economy role, not DPS',
    roleFit: ['Economy'],
    priority: 'Situational',
    decision:
      'Use Fastwagon when money acceleration changes placement or upgrade timing, especially if a Money Maker style gear plan makes farming tempo matter.',
    evidence:
      'Competitor rankings split because some judge Fastwagon as economy value and others judge combat output. Current 0.5 notes make the safe read economy-first, not universal carry.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'caska-resilience',
    name: 'Caska (Resilience)',
    aliases: ['Caska', 'Casca', 'Resilience'],
    consensus: 'Early to mid lane signal',
    roleFit: ['Main Carry', 'Control'],
    priority: 'Data Pending',
    decision:
      'Treat Caska as a watch unit for early or mid progression, not a confirmed premium reroll target until more 0.5 data settles.',
    evidence:
      'The 0.5 source checks mention Caska in lower-to-mid ranking contexts, so the page should cover the search term while warning against overinvesting rare rerolls.',
    sourceLabels: [
      sources.proGameGuidesTierList.label,
      sources.destructoidTierList.label,
    ],
    sourceConfidence: 'medium',
  },
];
