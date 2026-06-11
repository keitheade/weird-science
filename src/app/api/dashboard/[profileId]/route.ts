import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { xpProgressInLevel, levelFromXp } from "@/lib/gamification";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ profileId: string }> }
) {
  const { profileId } = await params;
  const profile = await prisma.profile.findUnique({
    where: { id: profileId },
    include: {
      profileBadges: {
        include: { badge: true },
        orderBy: { earnedAt: "desc" },
        take: 5,
      },
      skillMasteries: {
        include: {
          topic: { include: { subject: true } },
        },
      },
      attempts: true,
    },
  });

  if (!profile) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const subjects = await prisma.subject.findMany({ orderBy: { order: "asc" } });
  const subjectMastery = subjects.map((subject) => {
    const topicMasteries = profile.skillMasteries.filter(
      (m) => m.topic.subjectId === subject.id
    );
    const score =
      topicMasteries.length > 0
        ? Math.round(
            topicMasteries.reduce((s, m) => s + m.masteryScore, 0) /
              topicMasteries.length
          )
        : 0;
    return { subject: subject.name, score, color: subject.color };
  });

  const sorted = [...profile.skillMasteries].sort(
    (a, b) => b.masteryScore - a.masteryScore
  );

  const strengths = sorted
    .filter((m) => m.masteryScore >= 50 && m.attempts >= 3)
    .slice(0, 5)
    .map((m) => ({
      topic: m.topic.title,
      subject: m.topic.subject.name,
      score: Math.round(m.masteryScore),
    }));

  const improvements = sorted
    .filter((m) => m.attempts > 0)
    .reverse()
    .slice(0, 5)
    .map((m) => ({
      topic: m.topic.title,
      subject: m.topic.subject.name,
      score: Math.round(m.masteryScore),
      topicId: m.topicId,
    }));

  const totalAttempts = profile.attempts.length;
  const correctAttempts = profile.attempts.filter((a) => a.correct).length;
  const accuracy =
    totalAttempts > 0
      ? Math.round((correctAttempts / totalAttempts) * 100)
      : 0;

  return NextResponse.json({
    profile: {
      id: profile.id,
      name: profile.name,
      avatar: profile.avatar,
      xp: profile.xp,
      level: levelFromXp(profile.xp),
      streakCount: profile.streakCount,
    },
    xpProgress: xpProgressInLevel(profile.xp),
    subjectMastery,
    strengths,
    improvements,
    recentBadges: profile.profileBadges.map((pb) => ({
      name: pb.badge.name,
      icon: pb.badge.icon,
      earnedAt: pb.earnedAt.toISOString(),
    })),
    totalAttempts,
    accuracy,
  });
}
