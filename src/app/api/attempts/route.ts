import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  XP_PER_CORRECT,
  XP_PER_STREAK_BONUS,
  computeStreak,
  levelFromXp,
} from "@/lib/gamification";
import { calculateMasteryScore } from "@/lib/mastery";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { profileId, questionId, correct, response, responseTimeMs } = body;

  if (!profileId || !questionId || correct === undefined) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const [profile, question] = await Promise.all([
    prisma.profile.findUnique({ where: { id: profileId } }),
    prisma.question.findUnique({
      where: { id: questionId },
      include: { topic: true },
    }),
  ]);

  if (!profile || !question) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const now = new Date();
  const newStreak = computeStreak(
    profile.lastActiveDate,
    profile.streakCount,
    now
  );
  const streakBonus =
    correct && newStreak > profile.streakCount ? XP_PER_STREAK_BONUS : 0;
  const xpGained = correct ? XP_PER_CORRECT + streakBonus : 0;
  const newXp = profile.xp + xpGained;

  const existingMastery = await prisma.skillMastery.findUnique({
    where: {
      profileId_topicId: { profileId, topicId: question.topicId },
    },
  });

  const attempts = (existingMastery?.attempts ?? 0) + 1;
  const correctCount = (existingMastery?.correct ?? 0) + (correct ? 1 : 0);
  const masteryScore = calculateMasteryScore(correctCount, attempts);

  await prisma.$transaction([
    prisma.attempt.create({
      data: {
        profileId,
        questionId,
        correct,
        response: response ? JSON.stringify(response) : null,
        responseTimeMs,
      },
    }),
    prisma.skillMastery.upsert({
      where: {
        profileId_topicId: { profileId, topicId: question.topicId },
      },
      create: {
        profileId,
        topicId: question.topicId,
        attempts: 1,
        correct: correct ? 1 : 0,
        masteryScore,
      },
      update: {
        attempts,
        correct: correctCount,
        masteryScore,
      },
    }),
    prisma.profile.update({
      where: { id: profileId },
      data: {
        xp: newXp,
        level: levelFromXp(newXp),
        streakCount: newStreak,
        lastActiveDate: now,
      },
    }),
  ]);

  // Check badge awards
  const badgesEarned: string[] = [];
  if (correct) {
    const totalCorrect = await prisma.attempt.count({
      where: { profileId, correct: true },
    });
    const badgeChecks = [
      { slug: "first-blood", condition: totalCorrect >= 1 },
      { slug: "steady-scalpel", condition: totalCorrect >= 25 },
      { slug: "periodic-pro", condition: totalCorrect >= 50 },
      { slug: "streak-surgeon", condition: newStreak >= 7 },
    ];
    for (const check of badgeChecks) {
      if (check.condition) {
        const badge = await prisma.badge.findUnique({
          where: { slug: check.slug },
        });
        if (badge) {
          const has = await prisma.profileBadge.findUnique({
            where: {
              profileId_badgeId: { profileId, badgeId: badge.id },
            },
          });
          if (!has) {
            await prisma.profileBadge.create({
              data: { profileId, badgeId: badge.id },
            });
            badgesEarned.push(badge.name);
          }
        }
      }
    }
  }

  return NextResponse.json({
    xpGained,
    newXp,
    level: levelFromXp(newXp),
    streak: newStreak,
    masteryScore,
    badgesEarned,
    explanation: question.explanation,
  });
}
