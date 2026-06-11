export interface LessonSeed {
  slug: string;
  title: string;
  content: string;
  medicalCallout?: string;
  interactiveRef?: string;
  order: number;
}

export interface QuestionSeed {
  type: string;
  prompt: string;
  options: string | null;
  answer: string;
  explanation: string;
  difficulty: number;
  interactiveConfig?: string;
}

export interface TopicSeed {
  slug: string;
  yearBand: string;
  title: string;
  description: string;
  surgeonRelevance: string;
  order: number;
  lessons: LessonSeed[];
  questions: QuestionSeed[];
}

export interface SubjectSeed {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  topics: TopicSeed[];
}
