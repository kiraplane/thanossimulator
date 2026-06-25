'use client';

import { Badge } from '@/components/ui/badge';
import {
  calculatorSourceNotes,
  traitRateDefaults,
} from '@/data/animesquadron/calculators';
import { Dice5, Gauge, RotateCcw, ShieldAlert } from 'lucide-react';
import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';

function formatPercent(value: number) {
  return `${new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
  }).format(value)}%`;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(Math.max(0, value));
}

function hitChance(ratePercent: number, rolls: number) {
  const rate = Math.max(0, ratePercent) / 100;

  if (rate <= 0 || rolls <= 0) {
    return 0;
  }

  return (1 - (1 - rate) ** rolls) * 100;
}

export function TraitRerollCalculatorTool() {
  const [targetSlug, setTargetSlug] = useState('superior');
  const [ratePercent, setRatePercent] = useState(0.1);
  const [rolls, setRolls] = useState(50);

  const selectedTrait =
    traitRateDefaults.find((trait) => trait.slug === targetSlug) ??
    traitRateDefaults[0];

  const result = useMemo(() => {
    const chance = hitChance(ratePercent, rolls);
    const expectedRolls = ratePercent > 0 ? 100 / ratePercent : 0;
    const missChance = Math.max(0, 100 - chance);

    return { chance, expectedRolls, missChance };
  }, [ratePercent, rolls]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5 md:p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-md border border-[#574033] bg-[#090706] p-2 text-[#37D6D0]">
            <Dice5 className="size-5" />
          </div>
          <div>
            <p className="font-semibold text-[#37D6D0] text-xs uppercase tracking-[0.18em]">
              Trait probability
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold">
              Estimate reroll odds
            </h2>
          </div>
        </div>

        <label className="mt-6 grid gap-2">
          <span className="font-bold text-sm text-[#FFF5EA]">Target trait</span>
          <select
            value={targetSlug}
            onChange={(event) => {
              const nextTrait =
                traitRateDefaults.find(
                  (trait) => trait.slug === event.target.value
                ) ?? traitRateDefaults[0];
              setTargetSlug(nextTrait.slug);
              setRatePercent(nextTrait.ratePercent);
            }}
            className="min-h-11 rounded-md border border-[#574033] bg-[#090706] px-3 py-2 text-[#FFF5EA] text-sm outline-none transition focus:border-[#37D6D0] focus:ring-2 focus:ring-[#37D6D0]/25"
          >
            {traitRateDefaults.map((trait) => (
              <option key={trait.slug} value={trait.slug}>
                {trait.name} - {trait.ratePercent}%
              </option>
            ))}
          </select>
        </label>

        <label className="mt-5 grid gap-2">
          <span className="font-bold text-sm text-[#FFF5EA]">
            Reported or custom rate %
          </span>
          <input
            type="number"
            min="0"
            max="100"
            step="0.001"
            value={ratePercent}
            onChange={(event) =>
              setRatePercent(Math.max(0, Number(event.target.value) || 0))
            }
            className="min-h-11 rounded-md border border-[#574033] bg-[#090706] px-3 py-2 text-[#FFF5EA] text-sm outline-none transition focus:border-[#37D6D0] focus:ring-2 focus:ring-[#37D6D0]/25"
          />
          <span className="text-[#9F8C7B] text-xs leading-5">
            Keep this editable because the default rate is reported by guide
            sites, not confirmed as official UI data.
          </span>
        </label>

        <label className="mt-5 grid gap-2">
          <span className="flex items-center justify-between gap-3">
            <span className="font-bold text-sm text-[#FFF5EA]">
              Rolls to plan
            </span>
            <span className="text-[#F3B23A] text-sm">{rolls}</span>
          </span>
          <input
            type="range"
            min="1"
            max="500"
            value={rolls}
            onChange={(event) => setRolls(Number(event.target.value))}
            className="accent-[#37D6D0]"
          />
          <input
            type="number"
            min="1"
            max="5000"
            step="1"
            value={rolls}
            onChange={(event) =>
              setRolls(Math.max(1, Number(event.target.value) || 1))
            }
            className="min-h-11 rounded-md border border-[#574033] bg-[#090706] px-3 py-2 text-[#FFF5EA] text-sm outline-none transition focus:border-[#37D6D0] focus:ring-2 focus:ring-[#37D6D0]/25"
          />
        </label>
      </section>

      <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5 md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-semibold text-[#37D6D0] text-xs uppercase tracking-[0.18em]">
              Output
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold">
              {selectedTrait.name} reroll estimate
            </h2>
          </div>
          <Badge className="bg-[#F3B23A] text-[#090706]">
            {selectedTrait.tier} Tier
          </Badge>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Metric
            icon={<Gauge className="size-5" />}
            label={`Chance in ${formatNumber(rolls)} rolls`}
            value={formatPercent(result.chance)}
            helper="Probability of at least one hit."
          />
          <Metric
            icon={<RotateCcw className="size-5" />}
            label="Average rolls"
            value={formatNumber(result.expectedRolls)}
            helper="Expected value, not a guarantee."
          />
          <Metric
            icon={<ShieldAlert className="size-5" />}
            label="Miss chance"
            value={formatPercent(result.missChance)}
            helper="The unlucky outcome remains possible."
          />
        </div>

        <div className="mt-6 rounded-lg border border-[#3A2A24] bg-[#090706] p-5">
          <h3 className="font-display text-xl font-bold">Keep rule</h3>
          <p className="mt-3 text-[#D5C6B7] text-sm leading-7">
            {selectedTrait.keepRule}
          </p>
          <p className="mt-3 text-[#9F8C7B] text-xs leading-5">
            Reported-rate sources checked{' '}
            {calculatorSourceNotes.reportedRateSources
              .map((source) => source.checkedAt)
              .at(-1)}
            . Treat outputs as planning math until the live game UI confirms
            rates.
          </p>
        </div>

        <div className="mt-6 overflow-x-auto rounded-lg border border-[#3A2A24]">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-[#090706] text-[#37D6D0]">
              <tr>
                <th className="px-4 py-3">Trait</th>
                <th className="px-4 py-3">Tier</th>
                <th className="px-4 py-3">Reported rate</th>
                <th className="px-4 py-3">Use carefully when</th>
              </tr>
            </thead>
            <tbody>
              {traitRateDefaults.map((trait) => (
                <tr key={trait.slug} className="border-[#3A2A24] border-t">
                  <td className="px-4 py-3 font-bold">{trait.name}</td>
                  <td className="px-4 py-3 text-[#D5C6B7]">{trait.tier}</td>
                  <td className="px-4 py-3 font-mono text-[#F3B23A]">
                    {trait.ratePercent}%
                  </td>
                  <td className="px-4 py-3 text-[#D5C6B7]">{trait.keepRule}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
