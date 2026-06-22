export type SourceType =
  | 'official'
  | 'store'
  | 'api'
  | 'guide_site'
  | 'community'
  | 'manual_review';

export type Confidence = 'high' | 'medium' | 'low' | 'pending';

export interface DataSource {
  type: SourceType;
  label: string;
  url: string;
  checkedAt: string;
  confidence: Confidence;
  note?: string;
}

export interface GameCode {
  code: string;
  reward: string;
  status: 'active' | 'expired' | 'watch';
  firstSeen: string;
  lastChecked: string;
  sourceLabel: string;
  notes: string;
}

export type UnitRole =
  | 'Main Carry'
  | 'Boss Damage'
  | 'Control'
  | 'Economy'
  | 'Support'
  | 'Starter Filler';

export type PriorityTier = 'Recommended' | 'Situational' | 'Data Pending';
export type UnitTierRank = 'S' | 'A' | 'B' | 'Utility' | 'Watch';

export interface UnitRoleRanking {
  slug: string;
  role: UnitRole;
  tier: PriorityTier;
  earlyValue: 'High' | 'Medium' | 'Low' | 'Pending';
  longTermValue: 'High' | 'Medium' | 'Low' | 'Pending';
  rerollCost: 'High' | 'Medium' | 'Low' | 'Pending';
  bestFor: string[];
  decision: string;
  buildNotes: string[];
  avoid: string;
  sourceConfidence: Confidence;
}

export interface UnitNameWatch {
  slug: string;
  name: string;
  aliases: string[];
  consensus: string;
  roleFit: UnitRole[];
  priority: PriorityTier;
  decision: string;
  evidence: string;
  sourceLabels: string[];
  sourceConfidence: Confidence;
}

export interface UnitTierRanking {
  slug: string;
  name: string;
  aliases: string[];
  tier: UnitTierRank;
  roleFit: UnitRole[];
  bestFor: string[];
  reason: string;
  investWhen: string;
  caution: string;
  sourceLabels: string[];
  sourceConfidence: Confidence;
}

export interface TraitPlan {
  slug: string;
  title: string;
  priority: PriorityTier;
  bestTarget: string;
  useWhen: string;
  avoid: string;
  sourceConfidence: Confidence;
}

export interface GameMode {
  slug: string;
  name: string;
  priority: PriorityTier;
  bestFor: string[];
  firstGoal: string;
  notes: string[];
  sourceConfidence: Confidence;
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideVideo {
  id: string;
  title: string;
  channel: string;
  url: string;
  thumbnailUrl?: string;
  publishedAt?: string;
  viewCountLabel?: string;
  checkedAt: string;
}

export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  category:
    | 'Beginner'
    | 'Codes'
    | 'Tier List'
    | 'Units'
    | 'Traits'
    | 'Reroll'
    | 'Rewards'
    | 'Game Modes'
    | 'Community'
    | 'Download';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  coverImageUrl: string;
  publishedAt: string;
  updatedAt: string;
  sourceStrategy:
    | 'official'
    | 'manual_data'
    | 'guide_site_crosscheck'
    | 'user_intent_youtube'
    | 'youtube_explainer';
  videoSearchQueries?: string[];
  sourceNotes?: string;
  video?: GuideVideo;
  tags: string[];
  relatedRoutes: string[];
  body: GuideSection[];
  faq: GuideFaq[];
}

export interface GameUpdate {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  source: DataSource;
}
