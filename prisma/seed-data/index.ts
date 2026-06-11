import { chemistry } from "./chemistry";
import { physics } from "./physics";
import { biology } from "./biology";
import { methods } from "./methods";
import type { SubjectSeed } from "./types";

export const subjects: SubjectSeed[] = [chemistry, physics, biology, methods];

export type { SubjectSeed, TopicSeed, LessonSeed, QuestionSeed } from "./types";
