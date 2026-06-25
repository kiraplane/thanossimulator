import { Badge } from '@/components/ui/badge';
import type {
  Confidence,
  PriorityTier,
  UnitTierRank,
} from '@/data/animesquadron/types';

const confidenceClassName: Record<Confidence, string> = {
  high: 'border-[#2F7A4B] bg-[#102A1B] text-[#B8F8CC]',
  medium: 'border-[#A97922] bg-[#38220D] text-[#FBD77B]',
  low: 'border-[#8F3A35] bg-[#351412] text-[#FFBCB3]',
  pending: 'border-[#3A2A24] bg-[#201611] text-[#D5C6B7]',
};

const tierClassName: Record<PriorityTier, string> = {
  Recommended: 'border-[#37D6D0] bg-[#092B2B] text-[#A9FFFA]',
  Situational: 'border-[#F3B23A] bg-[#38220D] text-[#FBD77B]',
  'Data Pending': 'border-[#3A2A24] bg-[#201611] text-[#D5C6B7]',
};

const unitTierClassName: Record<UnitTierRank, string> = {
  S: 'border-[#37D6D0] bg-[#092B2B] text-[#A9FFFA]',
  A: 'border-[#F3B23A] bg-[#38220D] text-[#FBD77B]',
  B: 'border-[#574033] bg-[#201611] text-[#FFF5EA]',
  Utility: 'border-[#2F7A4B] bg-[#102A1B] text-[#B8F8CC]',
  Watch: 'border-[#8F3A35] bg-[#351412] text-[#FFBCB3]',
};

export function ConfidenceBadge({ confidence }: { confidence: Confidence }) {
  return (
    <Badge variant="outline" className={confidenceClassName[confidence]}>
      {confidence === 'pending' ? 'Data pending' : `${confidence} confidence`}
    </Badge>
  );
}

export function TierBadge({ tier }: { tier: PriorityTier }) {
  return (
    <Badge variant="outline" className={tierClassName[tier]}>
      {tier}
    </Badge>
  );
}

export function UnitTierBadge({ tier }: { tier: UnitTierRank }) {
  return (
    <Badge variant="outline" className={unitTierClassName[tier]}>
      {tier}
    </Badge>
  );
}
