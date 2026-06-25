'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  unitRoleRankings,
  unitTierRankings,
} from '@/data/animesquadron/tier-list';
import type {
  Confidence,
  UnitRole,
  UnitTierRank,
} from '@/data/animesquadron/types';
import { cn } from '@/lib/utils';
import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  Gauge,
  Layers3,
  ShieldCheck,
} from 'lucide-react';
import { useMemo, useState } from 'react';

type GoalId = 'beginner' | 'farm' | 'boss' | 'rank' | 'trait';
type SlotId = 'carry' | 'control' | 'boss' | 'support' | 'flex';

interface ComboGoal {
  id: GoalId;
  label: string;
  description: string;
  requiredRoles: UnitRole[];
  requiredTags: string[];
  recommendation: string;
}

interface TeamSlot {
  id: SlotId;
  label: string;
  helper: string;
}

interface ComboCandidate {
  id: string;
  name: string;
  tier: UnitTierRank | 'Role';
  roleLabel: string;
  roles: UnitRole[];
  tags: string[];
  bestFor: GoalId[];
  reason: string;
  caution: string;
  confidence: Confidence;
}

type SelectionState = Record<SlotId, string>;

const goals: ComboGoal[] = [
  {
    id: 'beginner',
    label: 'Beginner clears',
    description:
      'One carry, one stabilizer, and low-risk support for early waves.',
    requiredRoles: ['Main Carry', 'Control', 'Support'],
    requiredTags: ['wave-clear', 'low-risk', 'support'],
    recommendation:
      'Keep the team simple: one upgraded damage unit, one control or support slot, and one flex that helps farming without stealing rare rerolls.',
  },
  {
    id: 'farm',
    label: 'Farm faster',
    description: 'Gold, upgrade tempo, and repeatable clear speed.',
    requiredRoles: ['Main Carry', 'Economy', 'Support'],
    requiredTags: ['farm', 'economy', 'upgrade-tempo'],
    recommendation:
      'Favor repeatable clears and upgrade tempo. Economy is useful only when it gets your real damage online sooner.',
  },
  {
    id: 'boss',
    label: 'Boss pressure',
    description:
      'A carry plus boss damage, control, and enough support to survive.',
    requiredRoles: ['Main Carry', 'Boss Damage', 'Control'],
    requiredTags: ['boss-pressure', 'burst', 'survival'],
    recommendation:
      'Add boss pressure after normal waves are stable. Spend rare rerolls only on units that already change the boss or late-wave result.',
  },
  {
    id: 'rank',
    label: 'Rank push',
    description: 'Balanced role coverage for harder runs and co-op pressure.',
    requiredRoles: ['Main Carry', 'Control', 'Support'],
    requiredTags: ['team-synergy', 'survival', 'late-game'],
    recommendation:
      'Rank push usually fails because one role is missing, not because every slot needs a perfect unit. Fill role gaps before chasing a single headline pull.',
  },
  {
    id: 'trait',
    label: 'Trait investment',
    description:
      'Find the units that justify Trait Shards, cubes, and stat rerolls.',
    requiredRoles: ['Main Carry', 'Boss Damage', 'Support'],
    requiredTags: ['trait-target', 'keeper', 'boss-pressure'],
    recommendation:
      'Trait investment belongs on a unit that appears in your carry or boss plan and keeps value after the current stage wall is solved.',
  },
];

const slots: TeamSlot[] = [
  {
    id: 'carry',
    label: 'Main carry',
    helper: 'Primary damage and first serious upgrade target.',
  },
  {
    id: 'control',
    label: 'Control / stability',
    helper: 'Slows, tanks, or stabilizes crowded lanes.',
  },
  {
    id: 'boss',
    label: 'Boss pressure',
    helper: 'Single-target, burst, burn, or late-wave damage.',
  },
  {
    id: 'support',
    label: 'Support',
    helper: 'Buffs, protection, team value, or co-op utility.',
  },
  {
    id: 'flex',
    label: 'Farm / flex',
    helper: 'Economy, farming tempo, or the slot you swap by mode.',
  },
];

const slotDefaults: SelectionState = {
  carry: 'gometa-ssj4',
  control: 'puppeteer-transcendent',
  boss: 'madora-gunbai',
  support: 'shinks-emperor',
  flex: 'fastwagon',
};

const roleTags: Record<UnitRole, string[]> = {
  'Main Carry': ['carry', 'wave-clear', 'keeper'],
  'Boss Damage': ['boss-pressure', 'burst', 'trait-target'],
  Control: ['control', 'survival', 'team-synergy'],
  Economy: ['economy', 'farm', 'upgrade-tempo'],
  Support: ['support', 'team-synergy', 'survival'],
  'Starter Filler': ['low-risk', 'starter', 'temporary'],
};

const slugTags: Record<string, string[]> = {
  'berserker-enraged': ['eclipse', 'trait-target', 'boss-pressure'],
  'gometa-ssj4': ['raid', 'keeper', 'late-game'],
  'madora-gunbai': ['burn', 'burst', 'boss-pressure'],
  'woo-shadow': ['late-game', 'keeper', 'long-fight'],
  'puppeteer-transcendent': ['survival', 'control', 'late-game'],
  'falcon-dark': ['farm', 'support', 'upgrade-tempo'],
  'skeleton-knight-resonance': ['survival', 'tank', 'team-synergy'],
  'shanron-omega': ['late-game', 'boss-pressure', 'support'],
  'shinks-emperor': ['support', 'team-synergy', 'survival'],
  'caska-resilience': ['low-risk', 'wave-clear', 'support'],
  fastwagon: ['economy', 'farm', 'upgrade-tempo'],
};

const tierBadgeClassName: Record<ComboCandidate['tier'], string> = {
  S: 'border-[#37D6D0] bg-[#092B2B] text-[#A9FFFA]',
  A: 'border-[#7BD66F] bg-[#112A12] text-[#C9FFC6]',
  B: 'border-[#F3B23A] bg-[#38220D] text-[#FBD77B]',
  Utility: 'border-[#A97922] bg-[#38220D] text-[#FBD77B]',
  Watch: 'border-[#3A2A24] bg-[#201611] text-[#D5C6B7]',
  Role: 'border-[#574033] bg-[#1D1511] text-[#D5C6B7]',
};

function unique(values: string[]) {
  return [...new Set(values)];
}

function hasTextMatch(values: string[], terms: string[]) {
  const text = values.join(' ').toLowerCase();
  return terms.some((term) => text.includes(term));
}

function getBestForGoals(entry: {
  tier?: UnitTierRank;
  roles: UnitRole[];
  bestFor: string[];
}) {
  const goals: GoalId[] = [];
  const bestFor = entry.bestFor;

  if (
    entry.roles.includes('Main Carry') ||
    entry.roles.includes('Control') ||
    entry.roles.includes('Starter Filler') ||
    entry.tier === 'B'
  ) {
    goals.push('beginner');
  }

  if (
    entry.roles.includes('Economy') ||
    hasTextMatch(bestFor, ['farm', 'gold', 'tempo', 'upgrade'])
  ) {
    goals.push('farm');
  }

  if (
    entry.roles.includes('Boss Damage') ||
    hasTextMatch(bestFor, ['boss', 'burst', 'pressure'])
  ) {
    goals.push('boss');
  }

  if (
    entry.tier === 'S' ||
    entry.tier === 'A' ||
    entry.roles.includes('Support') ||
    entry.roles.includes('Control')
  ) {
    goals.push('rank');
  }

  if (
    entry.tier === 'S' &&
    (entry.roles.includes('Main Carry') || entry.roles.includes('Boss Damage'))
  ) {
    goals.push('trait');
  }

  return unique(goals) as GoalId[];
}

function buildCandidates(): ComboCandidate[] {
  const namedUnits = unitTierRankings.map((entry) => ({
    id: entry.slug,
    name: entry.name,
    tier: entry.tier,
    roleLabel: entry.roleFit.join(' / '),
    roles: entry.roleFit,
    tags: unique([
      ...entry.roleFit.flatMap((role) => roleTags[role]),
      ...(slugTags[entry.slug] ?? []),
    ]),
    bestFor: getBestForGoals({
      tier: entry.tier,
      roles: entry.roleFit,
      bestFor: entry.bestFor,
    }),
    reason: entry.reason,
    caution: entry.caution,
    confidence: entry.sourceConfidence,
  }));

  const roleFallbacks = unitRoleRankings.map((entry) => ({
    id: `role-${entry.slug}`,
    name: `${entry.role} slot`,
    tier: 'Role' as const,
    roleLabel: entry.role,
    roles: [entry.role],
    tags: unique([...roleTags[entry.role], 'role-guide']),
    bestFor: getBestForGoals({
      roles: [entry.role],
      bestFor: entry.bestFor,
    }),
    reason: entry.decision,
    caution: entry.avoid,
    confidence: entry.sourceConfidence,
  }));

  return [...namedUnits, ...roleFallbacks];
}

const candidates = buildCandidates();

function getScore({
  selected,
  activeGoal,
}: {
  selected: ComboCandidate[];
  activeGoal: ComboGoal;
}) {
  const selectedRoles = unique(selected.flatMap((entry) => entry.roles));
  const selectedTags = unique(selected.flatMap((entry) => entry.tags));
  const matchedRoles = activeGoal.requiredRoles.filter((role) =>
    selectedRoles.includes(role)
  );
  const matchedTags = activeGoal.requiredTags.filter((tag) =>
    selectedTags.includes(tag)
  );
  const goalFits = selected.filter((entry) =>
    entry.bestFor.includes(activeGoal.id)
  ).length;
  const confidencePenalty = selected.filter(
    (entry) => entry.confidence === 'low' || entry.confidence === 'pending'
  ).length;
  const watchPenalty = selected.filter(
    (entry) => entry.tier === 'Watch'
  ).length;
  const duplicatePenalty =
    selected.length - unique(selected.map((entry) => entry.id)).length;

  const score = Math.max(
    12,
    Math.min(
      100,
      18 +
        matchedRoles.length * 12 +
        matchedTags.length * 10 +
        goalFits * 5 -
        confidencePenalty * 4 -
        watchPenalty * 5 -
        duplicatePenalty * 8
    )
  );

  return {
    score,
    selectedRoles,
    selectedTags,
    matchedRoles,
    matchedTags,
    missingRoles: activeGoal.requiredRoles.filter(
      (role) => !selectedRoles.includes(role)
    ),
    missingTags: activeGoal.requiredTags.filter(
      (tag) => !selectedTags.includes(tag)
    ),
    duplicatePenalty,
  };
}

function getScoreTone(score: number) {
  if (score >= 82) {
    return 'border-[#37D6D0] bg-[#092B2B] text-[#A9FFFA]';
  }

  if (score >= 62) {
    return 'border-[#F3B23A] bg-[#38220D] text-[#FBD77B]';
  }

  return 'border-[#8F3A35] bg-[#351412] text-[#FFBCB3]';
}

export function BestTeamComboTool() {
  const [goalId, setGoalId] = useState<GoalId>('beginner');
  const [selection, setSelection] = useState<SelectionState>(slotDefaults);

  const result = useMemo(() => {
    const activeGoal = goals.find((goal) => goal.id === goalId) ?? goals[0];
    const selected = slots
      .map((slot) =>
        candidates.find((entry) => entry.id === selection[slot.id])
      )
      .filter((entry): entry is ComboCandidate => Boolean(entry));
    const score = getScore({ selected, activeGoal });

    return { activeGoal, selected, ...score };
  }, [goalId, selection]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5 md:p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-md border border-[#574033] bg-[#090706] p-2 text-[#37D6D0]">
            <Layers3 className="size-5" />
          </div>
          <div>
            <p className="font-semibold text-[#37D6D0] text-xs uppercase tracking-[0.18em]">
              Team builder
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold">
              Pick a goal and fill five squad jobs
            </h2>
          </div>
        </div>

        <label className="mt-6 grid gap-2">
          <span className="font-bold text-sm text-[#FFF5EA]">Current goal</span>
          <select
            value={goalId}
            onChange={(event) => setGoalId(event.target.value as GoalId)}
            className="min-h-11 rounded-md border border-[#574033] bg-[#090706] px-3 py-2 text-[#FFF5EA] text-sm outline-none transition focus:border-[#37D6D0] focus:ring-2 focus:ring-[#37D6D0]/25"
          >
            {goals.map((goal) => (
              <option key={goal.id} value={goal.id}>
                {goal.label}
              </option>
            ))}
          </select>
          <span className="text-[#D5C6B7] text-xs leading-5">
            {result.activeGoal.description}
          </span>
        </label>

        <div className="mt-6 grid gap-4">
          {slots.map((slot) => (
            <label key={slot.id} className="grid gap-2">
              <span className="flex flex-wrap items-end justify-between gap-2">
                <span className="font-bold text-sm text-[#FFF5EA]">
                  {slot.label}
                </span>
                <span className="text-[#9F8C7B] text-xs">{slot.helper}</span>
              </span>
              <select
                value={selection[slot.id]}
                onChange={(event) =>
                  setSelection((current) => ({
                    ...current,
                    [slot.id]: event.target.value,
                  }))
                }
                className="min-h-11 rounded-md border border-[#574033] bg-[#090706] px-3 py-2 text-[#FFF5EA] text-sm outline-none transition focus:border-[#37D6D0] focus:ring-2 focus:ring-[#37D6D0]/25"
              >
                {candidates.map((entry) => (
                  <option key={entry.id} value={entry.id}>
                    {entry.name} - {entry.roleLabel}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5 md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-semibold text-[#37D6D0] text-xs uppercase tracking-[0.18em]">
              Output
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold">
              Synergy score
            </h2>
          </div>
          <div
            className={cn(
              'flex size-24 items-center justify-center rounded-lg border text-3xl font-black',
              getScoreTone(result.score)
            )}
          >
            {result.score}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="border-[#3A2A24] border-l pl-4">
            <ShieldCheck className="size-5 text-[#37D6D0]" />
            <p className="mt-3 font-bold text-sm">Role coverage</p>
            <p className="mt-1 text-[#D5C6B7] text-sm leading-6">
              {result.matchedRoles.length} /{' '}
              {result.activeGoal.requiredRoles.length} key roles
            </p>
          </div>
          <div className="border-[#3A2A24] border-l pl-4">
            <Gauge className="size-5 text-[#37D6D0]" />
            <p className="mt-3 font-bold text-sm">Matched tags</p>
            <p className="mt-1 text-[#D5C6B7] text-sm leading-6">
              {result.matchedTags.length > 0
                ? result.matchedTags.join(', ')
                : 'Needs stronger fit'}
            </p>
          </div>
          <div className="border-[#3A2A24] border-l pl-4">
            <BarChart3 className="size-5 text-[#37D6D0]" />
            <p className="mt-3 font-bold text-sm">Goal</p>
            <p className="mt-1 text-[#D5C6B7] text-sm leading-6">
              {result.activeGoal.label}
            </p>
          </div>
        </div>

        <p className="mt-6 text-[#FFF5EA] text-xl leading-8">
          {result.activeGoal.recommendation}
        </p>

        {result.missingRoles.length > 0 || result.missingTags.length > 0 ? (
          <div className="mt-5 rounded-lg border border-[#A97922] bg-[#38220D]/70 p-4">
            <div className="flex gap-3">
              <AlertTriangle className="mt-0.5 size-5 flex-none text-[#FBD77B]" />
              <div className="text-[#FBD77B] text-sm leading-6">
                {result.missingRoles.length > 0 ? (
                  <p>Missing roles: {result.missingRoles.join(', ')}.</p>
                ) : null}
                {result.missingTags.length > 0 ? (
                  <p>Missing tags: {result.missingTags.join(', ')}.</p>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-5 rounded-lg border border-[#2F7A4B] bg-[#102A1B] p-4">
            <div className="flex gap-3">
              <CheckCircle2 className="mt-0.5 size-5 flex-none text-[#B8F8CC]" />
              <p className="text-[#B8F8CC] text-sm leading-6">
                This lineup covers the main roles and tags for the selected
                goal. Test the run before spending scarce cubes or rerolls.
              </p>
            </div>
          </div>
        )}

        {result.duplicatePenalty > 0 ? (
          <p className="mt-4 text-[#FFBCB3] text-sm leading-6">
            A duplicate pick lowers the score. Use the same unit only when you
            can actually field duplicate copies in your current mode.
          </p>
        ) : null}
      </section>

      <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5 md:col-span-2 md:p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-semibold text-[#37D6D0] text-xs uppercase tracking-[0.18em]">
              Selected lineup
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold">
              Why these slots matter
            </h2>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => setSelection(slotDefaults)}
          >
            Reset picks
          </Button>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-5">
          {slots.map((slot, index) => {
            const entry = result.selected[index];

            if (!entry) {
              return null;
            }

            return (
              <article
                key={slot.id}
                className="rounded-lg border border-[#3A2A24] bg-[#090706] p-4"
              >
                <p className="text-[#9F8C7B] text-xs uppercase tracking-wide">
                  {slot.label}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className={tierBadgeClassName[entry.tier]}
                  >
                    {entry.tier === 'Role'
                      ? 'Role guide'
                      : `${entry.tier} Tier`}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[#574033] text-[#D5C6B7]"
                  >
                    {entry.confidence}
                  </Badge>
                </div>
                <h3 className="mt-4 font-display font-bold text-lg">
                  {entry.name}
                </h3>
                <p className="mt-2 text-[#F3B23A] text-xs">{entry.roleLabel}</p>
                <p className="mt-3 text-[#D5C6B7] text-sm leading-6">
                  {entry.reason}
                </p>
                <p className="mt-3 text-[#9F8C7B] text-xs leading-5">
                  Caution: {entry.caution}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
