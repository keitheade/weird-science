export type QuestionType =
  | "mcq"
  | "numeric"
  | "multi-select"
  | "drag-label"
  | "equation-balance"
  | "interactive-task";

export interface ProfileSummary {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  level: number;
  streakCount: number;
}

export interface SubjectWithTopics {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  topics: {
    id: string;
    slug: string;
    yearBand: string;
    title: string;
    description: string;
    surgeonRelevance: string;
    _count?: { lessons: number; questions: number };
  }[];
}

export interface DashboardStats {
  profile: ProfileSummary;
  xpProgress: { level: number; current: number; needed: number; percent: number };
  subjectMastery: { subject: string; score: number; color: string }[];
  strengths: { topic: string; subject: string; score: number }[];
  improvements: { topic: string; subject: string; score: number; topicId: string }[];
  recentBadges: { name: string; icon: string; earnedAt: string }[];
  totalAttempts: number;
  accuracy: number;
}

export interface AIProviderPreset {
  id: string;
  name: string;
  baseUrl: string;
  model: string;
  keyHint: string;
}
