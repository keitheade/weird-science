import { PrismaClient } from "@prisma/client";
import { subjects } from "./seed-data";

const prisma = new PrismaClient();

async function main() {
  await prisma.attempt.deleteMany();
  await prisma.skillMastery.deleteMany();
  await prisma.lessonProgress.deleteMany();
  await prisma.profileBadge.deleteMany();
  await prisma.question.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.topic.deleteMany();
  await prisma.subject.deleteMany();
  await prisma.badge.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.aISettings.deleteMany();

  const badges = await Promise.all([
    prisma.badge.create({ data: { slug: "first-blood", name: "First Cut", description: "Answer your first question correctly", icon: "🩹", xpRequired: 0 } }),
    prisma.badge.create({ data: { slug: "steady-scalpel", name: "Steady Scalpel", description: "25 correct answers", icon: "🔪", xpRequired: 0 } }),
    prisma.badge.create({ data: { slug: "periodic-pro", name: "Periodic Pro", description: "50 correct answers", icon: "⚗️", xpRequired: 0 } }),
    prisma.badge.create({ data: { slug: "streak-surgeon", name: "Streak Surgeon", description: "7-day study streak", icon: "🔥", xpRequired: 0 } }),
    prisma.badge.create({ data: { slug: "atom-architect", name: "Atom Architect", description: "Complete the atom builder challenge", icon: "⚛️", xpRequired: 0 } }),
    prisma.badge.create({ data: { slug: "heart-master", name: "Heart Master", description: "Label all heart structures", icon: "🫀", xpRequired: 0 } }),
  ]);

  let lessonCount = 0;
  let questionCount = 0;
  let topicCount = 0;

  for (const subjectData of subjects) {
    const subject = await prisma.subject.create({
      data: {
        slug: subjectData.slug,
        name: subjectData.name,
        description: subjectData.description,
        icon: subjectData.icon,
        color: subjectData.color,
        order: subjectData.order,
      },
    });

    for (const topicData of subjectData.topics) {
      topicCount++;
      const topic = await prisma.topic.create({
        data: {
          subjectId: subject.id,
          slug: topicData.slug,
          yearBand: topicData.yearBand,
          title: topicData.title,
          description: topicData.description,
          surgeonRelevance: topicData.surgeonRelevance,
          order: topicData.order,
        },
      });

      for (const lesson of topicData.lessons) {
        lessonCount++;
        await prisma.lesson.create({
          data: {
            topicId: topic.id,
            slug: lesson.slug,
            title: lesson.title,
            content: lesson.content,
            medicalCallout: lesson.medicalCallout ?? null,
            interactiveRef: lesson.interactiveRef ?? null,
            order: lesson.order,
            xpReward: 25,
          },
        });
      }

      for (const question of topicData.questions) {
        questionCount++;
        await prisma.question.create({
          data: {
            topicId: topic.id,
            type: question.type,
            prompt: question.prompt,
            options: question.options,
            answer: question.answer,
            explanation: question.explanation,
            difficulty: question.difficulty,
            interactiveConfig: question.interactiveConfig ?? null,
          },
        });
      }
    }
  }

  await prisma.aISettings.create({
    data: {
      id: 1,
      enabled: false,
      provider: "gemini",
      baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai/",
      model: "gemini-2.0-flash",
    },
  });

  console.log(
    `Seeded: ${subjects.length} subjects, ${topicCount} topics, ${lessonCount} lessons, ${questionCount} questions, ${badges.length} badges`
  );
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
