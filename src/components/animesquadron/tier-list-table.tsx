import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { unitTierRankings } from '@/data/animesquadron/tier-list';
import type { UnitTierRank } from '@/data/animesquadron/types';
import { ConfidenceBadge } from './status-badge';

const tierOrder: UnitTierRank[] = ['S', 'A', 'B', 'Utility', 'Watch'];

const tierMeta: Record<
  UnitTierRank,
  { label: string; badge: string; heading: string; intro: string }
> = {
  S: {
    label: 'S Tier',
    badge: 'border-[#37D6D0] bg-[#092B2B] text-[#A9FFFA]',
    heading: 'S Tier units',
    intro:
      'Current UPD 0.5 top-unit signals from cross-checked competitor tier lists and route guides.',
  },
  A: {
    label: 'A Tier',
    badge: 'border-[#7BD66F] bg-[#112A12] text-[#C9FFC6]',
    heading: 'A Tier units',
    intro:
      'High-value units that can be excellent when the role matches your account or mode.',
  },
  B: {
    label: 'B Tier',
    badge: 'border-[#F3B23A] bg-[#38220D] text-[#FBD77B]',
    heading: 'B Tier units',
    intro:
      'Useful progression or filler units, but not the first place for rare rerolls.',
  },
  Utility: {
    label: 'Utility',
    badge: 'border-[#A97922] bg-[#38220D] text-[#FBD77B]',
    heading: 'Utility units',
    intro:
      'Units ranked by economy, support, or tempo value rather than raw damage.',
  },
  Watch: {
    label: 'Watch',
    badge: 'border-[#3A2A24] bg-[#201611] text-[#D5C6B7]',
    heading: 'Watchlist units',
    intro:
      'Names worth tracking, but not stable enough for a strong investment call.',
  },
};

const defaultLabels = {
  tableIntro:
    'UPD 0.5 ranking by unit name, cross-checked against current guide-site tier lists and route data.',
  unit: 'Unit',
  bestFor: 'Best for',
  decision: 'Ranking notes',
  confidence: 'Confidence',
  aliases: 'Aliases',
  investWhen: 'Invest when',
  caution: 'Caution',
  roleFit: 'Role',
};

export function TierListTable({
  labels = {},
}: {
  labels?: Partial<typeof defaultLabels>;
}) {
  const tableLabels = { ...defaultLabels, ...labels };

  return (
    <div className="space-y-5">
      {tierOrder.map((tier) => {
        const entries = unitTierRankings.filter((entry) => entry.tier === tier);
        const meta = tierMeta[tier];

        if (entries.length === 0) {
          return null;
        }

        return (
          <section
            key={tier}
            className="overflow-hidden rounded-lg border border-[#3A2A24] bg-[#130D0B]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-[#3A2A24] border-b p-5">
              <div>
                <Badge variant="outline" className={meta.badge}>
                  {meta.label}
                </Badge>
                <h2 className="mt-3 font-display text-2xl font-bold text-[#FFF5EA]">
                  {meta.heading}
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-[#D5C6B7]">
                {meta.intro} {tableLabels.tableIntro}
              </p>
            </div>

            <Table>
              <TableHeader className="bg-[#090706]">
                <TableRow className="border-[#3A2A24]">
                  <TableHead className="min-w-[190px] px-5 text-[#37D6D0]">
                    {tableLabels.unit}
                  </TableHead>
                  <TableHead className="min-w-[240px] px-5 text-[#37D6D0]">
                    {tableLabels.bestFor}
                  </TableHead>
                  <TableHead className="min-w-[430px] px-5 text-[#37D6D0]">
                    {tableLabels.decision}
                  </TableHead>
                  <TableHead className="min-w-[170px] px-5 text-[#37D6D0]">
                    {tableLabels.confidence}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow
                    key={entry.slug}
                    className="border-[#3A2A24] hover:bg-[#1D1511]"
                  >
                    <TableCell className="px-5 text-[#FFF5EA]">
                      <div className="font-display text-lg font-bold">
                        {entry.name}
                      </div>
                      <p className="mt-2 text-xs uppercase tracking-wide text-[#F3B23A]">
                        {tableLabels.aliases}: {entry.aliases.join(', ')}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {entry.roleFit.map((role) => (
                          <Badge
                            key={role}
                            variant="outline"
                            className="border-[#574033] text-[#FFF5EA]"
                          >
                            {tableLabels.roleFit}: {role}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="px-5 text-[#D5C6B7]">
                      <div className="flex flex-wrap gap-2">
                        {entry.bestFor.map((item) => (
                          <Badge
                            key={item}
                            variant="outline"
                            className="border-[#574033] text-[#FFF5EA]"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-normal px-5 leading-6 text-[#D5C6B7]">
                      <p>{entry.reason}</p>
                      <p className="mt-3 text-xs leading-6 text-[#F3B23A]">
                        <strong>{tableLabels.investWhen}:</strong>{' '}
                        {entry.investWhen}
                      </p>
                      <p className="mt-2 text-xs leading-6 text-[#F3B23A]">
                        <strong>{tableLabels.caution}:</strong> {entry.caution}
                      </p>
                    </TableCell>
                    <TableCell className="px-5">
                      <div className="space-y-3">
                        <ConfidenceBadge confidence={entry.sourceConfidence} />
                        <Badge
                          variant="outline"
                          className="border-[#574033] text-[#D5C6B7]"
                        >
                          {entry.sourceLabels.length} sources
                        </Badge>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </section>
        );
      })}
    </div>
  );
}
