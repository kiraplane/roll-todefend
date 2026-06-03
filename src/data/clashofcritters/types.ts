export type SourceType =
  | 'official'
  | 'wiki_gg'
  | 'fandom'
  | 'guide_site'
  | 'community'
  | 'tested'
  | 'unknown';

export type Confidence = 'high' | 'medium' | 'low' | 'needs_verification';

export interface DataSource {
  type: SourceType;
  label: string;
  url?: string;
  checkedAt: string;
  confidence: Confidence;
  note?: string;
}

export interface LocalAsset {
  id: string;
  kind: 'critter' | 'skill' | 'stat' | 'food' | 'element' | 'map' | 'other';
  localPath: string;
  originalFileName: string;
  originalUrl: string;
  sourcePage: string;
  sourceType: SourceType;
  downloadedAt: string;
  width?: number;
  height?: number;
  mime?: string;
}

export interface GameCode {
  code: string;
  reward: string;
  status: 'working' | 'expired' | 'unknown';
  firstSeen?: string;
  lastChecked: string;
  sources: DataSource[];
  notes?: string;
}

export interface CritterSkill {
  name: string;
  description: string;
  type?: string;
  icon?: string;
}

export interface Critter {
  id: string;
  slug: string;
  name: string;
  rarity: string;
  element: string;
  role:
    | 'DPS'
    | 'Tank'
    | 'Guardian'
    | 'Healer'
    | 'Specialist'
    | 'Support'
    | 'Control'
    | 'Utility';
  tier: 'S' | 'A' | 'B' | 'C' | 'Unranked';
  image?: string;
  elementIcon?: string;
  summary: string;
  stats: {
    attack: string;
    hp: string;
    defense: string;
  };
  skills: CritterSkill[];
  foods: string[];
  evolution: {
    stages: string[];
    trial?: string;
    unlock?: string;
  };
  howToGet?: string;
  strengths: string[];
  weaknesses: string[];
  bestPartners: string[];
  sources: DataSource[];
  lastChecked: string;
  confidence: Confidence;
}

export interface TierEntry {
  critterSlug: string;
  tier: 'S' | 'A' | 'B' | 'C';
  mode: 'overall' | 'early' | 'stage_push' | 'boss' | 'f2p';
  reason: string;
  confidence: Confidence;
  sources: DataSource[];
}

export interface TeamBuild {
  id: string;
  name: string;
  purpose: string;
  core: string[];
  substitutes: string[];
  notes: string;
  confidence: Confidence;
}

export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  coverImageUrl: string;
  video?: {
    id: string;
    title: string;
    channel: string;
    url?: string;
  };
  updatedAt: string;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  body: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
}
