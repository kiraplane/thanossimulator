'use client';

import { Badge } from '@/components/ui/badge';
import {
  type ResourceGoalId,
  type ResourceId,
  type ResourceStageId,
  resourceCalculatorDefaults,
  resourceGoalPlans,
  resourceStagePlans,
  resourceTotals,
  unknownRewardNotes,
} from '@/data/animesquadron/calculators';
import { activeCodes } from '@/data/animesquadron/codes';
import { Calculator, Gem, ShieldCheck, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';

const initialExtras: Record<ResourceId, number> = {
  gems: 0,
  gold: 0,
  traitShards: 0,
  rerollCubes: 0,
  rerolls: 0,
  statCubes: 0,
  perfectCubes: 0,
  bountyTickets: 0,
};

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(Math.max(0, Math.floor(value)));
}

function getResource(id: ResourceId) {
  return (
    resourceTotals.find((resource) => resource.id === id)?.knownAmount ?? 0
  );
}

export function ResourceCalculatorTool() {
  const [extras, setExtras] =
    useState<Record<ResourceId, number>>(initialExtras);
  const [stage, setStage] = useState<ResourceStageId>('story');
  const [goal, setGoal] = useState<ResourceGoalId>('summon');
  const [savePerfectCubes, setSavePerfectCubes] = useState(true);

  const totals = useMemo(() => {
    const values = { ...initialExtras };

    resourceTotals.forEach((resource) => {
      values[resource.id] = resource.knownAmount + extras[resource.id];
    });

    return values;
  }, [extras]);

  const estimatedSummons = Math.floor(
    totals.gems / resourceCalculatorDefaults.gemCostPerPull
  );
  const rerollPool =
    totals.traitShards + totals.rerollCubes + totals.rerolls + totals.statCubes;
  const safeRerollBudget = savePerfectCubes
    ? rerollPool
    : rerollPool + totals.perfectCubes;
  const goldCoverage = Math.min(100, Math.round((totals.gold / 6000) * 100));
  const stagePlan = resourceStagePlans[stage];
  const goalPlan = resourceGoalPlans[goal];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5 md:p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-md border border-[#574033] bg-[#090706] p-2 text-[#37D6D0]">
            <Calculator className="size-5" />
          </div>
          <div>
            <p className="font-semibold text-[#37D6D0] text-xs uppercase tracking-[0.18em]">
              Resource inputs
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold">
              Add your current inventory
            </h2>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="font-bold text-sm text-[#FFF5EA]">
              Account stage
            </span>
            <select
              value={stage}
              onChange={(event) =>
                setStage(event.target.value as ResourceStageId)
              }
              className="min-h-11 rounded-md border border-[#574033] bg-[#090706] px-3 py-2 text-[#FFF5EA] text-sm outline-none transition focus:border-[#37D6D0] focus:ring-2 focus:ring-[#37D6D0]/25"
            >
              {Object.entries(resourceStagePlans).map(([id, plan]) => (
                <option key={id} value={id}>
                  {plan.label}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="font-bold text-sm text-[#FFF5EA]">
              Spending goal
            </span>
            <select
              value={goal}
              onChange={(event) =>
                setGoal(event.target.value as ResourceGoalId)
              }
              className="min-h-11 rounded-md border border-[#574033] bg-[#090706] px-3 py-2 text-[#FFF5EA] text-sm outline-none transition focus:border-[#37D6D0] focus:ring-2 focus:ring-[#37D6D0]/25"
            >
              {Object.entries(resourceGoalPlans).map(([id, plan]) => (
                <option key={id} value={id}>
                  {plan.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {resourceTotals.map((resource) => (
            <label key={resource.id} className="grid gap-2">
              <span className="flex flex-wrap items-end justify-between gap-2">
                <span className="font-bold text-sm text-[#FFF5EA]">
                  Extra {resource.label}
                </span>
                <span className="text-[#9F8C7B] text-xs">
                  Codes: {formatNumber(resource.knownAmount)}
                </span>
              </span>
              <input
                type="number"
                min="0"
                step="1"
                value={extras[resource.id]}
                onChange={(event) =>
                  setExtras((current) => ({
                    ...current,
                    [resource.id]: Math.max(0, Number(event.target.value) || 0),
                  }))
                }
                className="min-h-11 rounded-md border border-[#574033] bg-[#090706] px-3 py-2 text-[#FFF5EA] text-sm outline-none transition focus:border-[#37D6D0] focus:ring-2 focus:ring-[#37D6D0]/25"
              />
            </label>
          ))}
        </div>

        <label className="mt-5 flex items-center gap-3 rounded-lg border border-[#3A2A24] bg-[#090706] p-4 text-sm">
          <input
            type="checkbox"
            checked={savePerfectCubes}
            onChange={(event) => setSavePerfectCubes(event.target.checked)}
            className="size-4 accent-[#37D6D0]"
          />
          <span className="text-[#D5C6B7]">
            Keep Perfect Cubes out of the safe reroll budget.
          </span>
        </label>
      </section>

      <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5 md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-semibold text-[#37D6D0] text-xs uppercase tracking-[0.18em]">
              Output
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold">
              Conservative spend plan
            </h2>
          </div>
          <Badge className="bg-[#F3B23A] text-[#090706]">
            Checked {resourceCalculatorDefaults.checkedAt}
          </Badge>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Metric
            icon={<Gem className="size-5" />}
            label="Estimated summons"
            value={formatNumber(estimatedSummons)}
            helper={`${formatNumber(totals.gems)} Gems at ${resourceCalculatorDefaults.gemCostPerPull} Gems each`}
          />
          <Metric
            icon={<ShieldCheck className="size-5" />}
            label="Gold coverage"
            value={`${goldCoverage}%`}
            helper={`${formatNumber(totals.gold)} known Gold plus your inventory`}
          />
          <Metric
            icon={<Sparkles className="size-5" />}
            label="Safe reroll pool"
            value={formatNumber(safeRerollBudget)}
            helper={
              savePerfectCubes
                ? 'Perfect Cubes are protected.'
                : 'Perfect Cubes are included.'
            }
          />
          <Metric
            icon={<Calculator className="size-5" />}
            label="Perfect Cubes"
            value={formatNumber(totals.perfectCubes)}
            helper="Spend only on a keeper unit."
          />
        </div>

        <div className="mt-6 rounded-lg border border-[#3A2A24] bg-[#090706] p-5">
          <h3 className="font-display text-xl font-bold">Recommendation</h3>
          <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
            {stagePlan.recommendation}
          </p>
          <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
            {goalPlan.recommendation}
          </p>
        </div>

        <div className="mt-6 rounded-lg border border-[#3A2A24] bg-[#090706] p-5">
          <h3 className="font-display text-xl font-bold">
            Known active-code base
          </h3>
          <div className="mt-4 grid gap-2 text-sm text-[#D5C6B7] sm:grid-cols-2">
            {resourceTotals.map((resource) => (
              <p key={resource.id}>
                <strong className="text-[#FFF5EA]">{resource.label}:</strong>{' '}
                {formatNumber(getResource(resource.id))}
              </p>
            ))}
          </div>
          <p className="mt-4 text-[#9F8C7B] text-xs leading-5">
            Active code count: {activeCodes.length}. Unknown reward wording is
            excluded from totals until source text agrees.
          </p>
          <ul className="mt-3 space-y-2 text-[#9F8C7B] text-xs leading-5">
            {unknownRewardNotes.map((note) => (
              <li key={note.code}>
                {note.code}: {note.note}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

function Metric({
  icon,
  label,
  value,
  helper,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <div className="rounded-lg border border-[#3A2A24] bg-[#090706] p-4">
      <div className="text-[#37D6D0]">{icon}</div>
      <p className="mt-3 font-bold text-sm text-[#FFF5EA]">{label}</p>
      <p className="mt-1 font-black text-3xl text-[#F3B23A]">{value}</p>
      <p className="mt-2 text-[#9F8C7B] text-xs leading-5">{helper}</p>
    </div>
  );
}
