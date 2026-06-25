export type SourceType =
  | 'official'
  | 'store'
  | 'deck_site'
  | 'community'
  | 'youtube'
  | 'serper'
  | 'manual_review';

export type Confidence = 'high' | 'medium' | 'low' | 'watch';

export interface DataSource {
  type: SourceType;
  label: string;
  url: string;
  checkedAt: string;
  confidence: Confidence;
  note?: string;
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideVideo {
  id: string;
  title: string;
  channel: string;
  url: string;
  thumbnailUrl: string;
  publishedAt?: string;
  viewCountLabel?: string;
  checkedAt: string;
}

export type GuideCategory =
  | 'Beginner'
  | 'Rules'
  | 'Decks'
  | 'Syndicates'
  | 'Codes'
  | 'Meta'
  | 'Download'
  | 'Updates';

export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  category: GuideCategory;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  coverImageUrl: string;
  publishedAt: string;
  updatedAt: string;
  sourceStrategy:
    | 'official'
    | 'manual_data'
    | 'user_intent_youtube'
    | 'youtube_explainer'
    | 'community_crosscheck';
  videoSearchQueries?: string[];
  sourceNotes?: string;
  video?: GuideVideo;
  tags: string[];
  relatedRoutes: string[];
  body: GuideSection[];
  faq: GuideFaq[];
}

export interface GameCode {
  code: string;
  reward: string;
  status: 'active' | 'watch' | 'expired';
  firstSeen: string;
  lastChecked: string;
  sourceLabel: string;
  confidence: Confidence;
  notes: string;
}

export interface Syndicate {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  gamePlan: string;
  goodFor: string[];
  caution: string;
  relatedRoutes: string[];
}

export interface DeckArchetype {
  slug: string;
  name: string;
  syndicates: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  plan: string;
  whyItMatters: string;
  watchFor: string;
  sourceConfidence: Confidence;
  relatedRoutes: string[];
}

export interface MetaSignal {
  label: string;
  status: 'direct' | 'watch' | 'needs_confirm';
  summary: string;
  route: string;
}

export interface GameUpdate {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  source: DataSource;
}

export interface ChronoCard {
  id: number;
  cardId: number;
  name: string;
  slug: string;
  url: string;
  imageUrl: string;
  cardType: string;
  syndicate: string;
  rarity: string;
  setName: string;
  setCode: string;
  powerCost: number;
  strength: number;
  durability: number;
  isImmortalized: boolean;
  effectPreview: string;
  pairSlug: string | null;
  sourcePosition: 'primary' | 'counterpart';
}

export interface ChronoCardSnapshot {
  checkedAt: string;
  sourceUrl: string;
  officialTopLevelCount: number;
  uniqueCardFaceCount: number;
  cards: ChronoCard[];
}
