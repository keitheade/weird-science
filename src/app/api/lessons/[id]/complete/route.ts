import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  XP_PER_LESSON,
  XP_PER_STREAK_BONUS,
  computeStreak,
  levelFromXp,
} from "@/lib/gamification";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: lessonId } = await params;
  const { profileId } = await req.json();
  if (!profileId) {
    return NextResponse.json({ error: "profileId required" }, { status: 400 });
  }

  const lesson = await prisma.lesson.findUnique({ where: { id: lessonId } });
  if (!lesson) {
    return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
  }

  const profile = await prisma.profile.findUnique({ where: { id: profileId } });
  if (!profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  const existing = await prisma.lessonProgress.findUnique({
    where: { profileId_lessonId: { profileId, lessonId } },
  });

  if (existing?.completed) {
    return NextResponse.json({ alreadyCompleted: true, xpGained: 0 });
  }

  const now = new Date();
  const newStreak = computeStreak(
    profile.lastActiveDate,
    profile.streakCount,
    now
  );
  const streakBonus =
    newStreak > profile.streakCount ? XP_PER_STREAK_BONUS : 0;
  const xpGained = lesson.xpReward + streakBonus;
  const newXp = profile.xp + xpGained;

  await prisma.$transaction([
    prisma.lessonProgress.upsert({
      where: { profileId_lessonId: { profileId, lessonId } },
      create: { profileId, lessonId, completed: true, completedAt: now },
      update: { completed: true, completedAt: now },
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

  return NextResponse.json({
    xpGained,
    streakBonus,
    newXp,
    level: levelFromXp(newXp),
    streak: newStreak,
  });
}
