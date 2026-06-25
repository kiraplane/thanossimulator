'use client';

import { Badge } from '@/components/ui/badge';
import {
  bannerDefaults,
  bannerTargetDefaults,
} from '@/data/animesquadron/calculators';
import { Gauge, Gem, ShieldCheck, Target } from 'lucide-react';
import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(Math.max(0, value));
}

function formatPercent(value: number) {
  return `${new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 3,
  }).format(value)}%`;
}

function hitChance(ratePercent: number, pulls: number) {
  const rate = Math.max(0, ratePercent) / 100;

  if (rate <= 0 || pulls <= 0) {
    return 0;
  }

  return (1 - (1 - rate) ** pulls) * 100;
}

export function WooPityCalculatorTool() {
  const [targetId, setTargetId] = useState<'woo' | 'mythic'>('woo');
  const [ratePercent, setRatePercent] = useState(0.005);
  const [gems, setGems] = useState(2500);
  const [plannedPulls, setPlannedPulls] = useState(50);
  const [currentPity, setCurrentPity] = useState(0);
  const [gemCost, setGemCost] = useState(bannerDefaults.gemCostPerPull);
  const [pityTarget, setPityTarget] = useState(bannerDefaults.mythicPity);

  const selectedTarget =
    bannerTargetDefaults.find((target) => target.id === targetId) ??
    bannerTargetDefaults[0];

  const result = useMemo(() => {
    const affordablePulls = gemCost > 0 ? Math.floor(gems / gemCost) : 0;
    const usablePulls = Math.max(0, Math.min(plannedPulls, affordablePulls));
    const chance = hitChance(ratePercent, usablePulls);
    const pityRemaining = Math.max(0, pityTarget - currentPity);
    const gemsForPity = Math.max(0, pityRemaining * gemCost - gems);

    return {
      affordablePulls,
      usablePulls,
      chance,
      pityRemaining,
      gemsForPity,
      cost: plannedPulls * gemCost,
      expectedPulls: ratePercent > 0 ? 100 / ratePercent : 0,
    };
  }, [currentPity, gemCost, gems, pityTarget, plannedPulls, ratePercent]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5 md:p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-md border border-[#574033] bg-[#090706] p-2 text-[#37D6D0]">
            <Target className="size-5" />
          </div>
          <div>
            <p className="font-semibold text-[#37D6D0] text-xs uppercase tracking-[0.18em]">
              Banner planning
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold">
              Estimate Gem pulls and pity pressure
            </h2>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="font-bold text-sm text-[#FFF5EA]">Target</span>
            <select
              value={targetId}
              onChange={(event) => {
                const nextTarget =
                  bannerTargetDefaults.find(
                    (target) => target.id === event.target.value
                  ) ?? bannerTargetDefaults[0];
                setTargetId(nextTarget.id);
                setRatePercent(nextTarget.ratePercent);
              }}
              className="min-h-11 rounded-md border border-[#574033] bg-[#090706] px-3 py-2 text-[#FFF5EA] text-sm outline-none transition focus:border-[#37D6D0] focus:ring-2 focus:ring-[#37D6D0]/25"
            >
              {bannerTargetDefaults.map((target) => (
                <option key={target.id} value={target.id}>
                  {target.label} - {target.ratePercent}%
                </option>
              ))}
            </select>
          </label>

          <NumberField
            label="Custom rate %"
            value={ratePercent}
            min={0}
            step={0.001}
            onChange={setRatePercent}
          />
          <NumberField
            label="Gems available"
            value={gems}
            min={0}
            step={50}
            onChange={setGems}
          />
          <NumberField
            label="Planned pulls"
            value={plannedPulls}
            min={1}
            step={1}
            onChange={setPlannedPulls}
          />
          <NumberField
            label="Current Mythic pity"
            value={currentPity}
            min={0}
            step={1}
            onChange={setCurrentPity}
          />
          <NumberField
            label="Gems per pull"
            value={gemCost}
            min={1}
            step={1}
            onChange={setGemCost}
          />
          <NumberField
            label="Mythic pity target"
            value={pityTarget}
            min={1}
            step={1}
            onChange={setPityTarget}
          />
        </div>
      </section>

      <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5 md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-semibold text-[#37D6D0] text-xs uppercase tracking-[0.18em]">
              Output
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold">
              {selectedTarget.label} estimate
            </h2>
          </div>
          <Badge className="bg-[#F3B23A] text-[#090706]">
            Reported defaults
          </Badge>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Metric
            icon={<Gem className="size-5" />}
            label="Affordable pulls"
            value={formatNumber(result.affordablePulls)}
            helper={`${formatNumber(gems)} Gems at ${formatNumber(gemCost)} each`}
          />
          <Metric
            icon={<Target className="size-5" />}
            label={`Chance in ${formatNumber(result.usablePulls)} pulls`}
            value={formatPercent(result.chance)}
            helper="Uses affordable pulls, not wishful pulls."
          />
          <Metric
            icon={<ShieldCheck className="size-5" />}
            label="Mythic pity in"
            value={`${formatNumber(result.pityRemaining)} pulls`}
            helper={
              result.gemsForPity > 0
                ? `${formatNumber(result.gemsForPity)} more Gems to reach pity`
                : 'Current Gems can cover reported pity.'
            }
          />
          <Metric
            icon={<Gauge className="size-5" />}
            label="Average pulls"
            value={formatNumber(result.expectedPulls)}
            helper="Probability average, not a promise."
          />
        </div>

        <div className="mt-6 rounded-lg border border-[#3A2A24] bg-[#090706] p-5">
          <h3 className="font-display text-xl font-bold">Planning note</h3>
          <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
            {selectedTarget.helper}
          </p>
          <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
            Reported model: {bannerDefaults.gemCostPerPull} Gems per pull,{' '}
            {bannerDefaults.mythicPity} Mythic pity. Adjust every field if the
            live banner UI shows different values.
          </p>
          <p className="mt-3 text-[#9F8C7B] text-xs leading-5">
            {bannerDefaults.note}
          </p>
        </div>
      </section>
    </div>
  );
}

function NumberField({
  label,
  value,
  min,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="font-bold text-sm text-[#FFF5EA]">{label}</span>
      <input
        type="number"
        min={min}
        step={step}
        value={value}
        onChange={(event) =>
          onChange(Math.max(min, Number(event.target.value) || min))
        }
        className="min-h-11 rounded-md border border-[#574033] bg-[#090706] px-3 py-2 text-[#FFF5EA] text-sm outline-none transition focus:border-[#37D6D0] focus:ring-2 focus:ring-[#37D6D0]/25"
      />
    </label>
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
