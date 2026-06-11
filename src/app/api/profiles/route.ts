import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { levelFromXp } from "@/lib/gamification";

export async function GET() {
  const profiles = await prisma.profile.findMany({
    orderBy: { createdAt: "asc" },
    select: {
      id: true,
      name: true,
      avatar: true,
      xp: true,
      level: true,
      streakCount: true,
      pin: true,
    },
  });
  return NextResponse.json(
    profiles.map((p) => ({ ...p, hasPin: !!p.pin, pin: undefined }))
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, avatar, pin } = body;
  if (!name?.trim()) {
    return NextResponse.json({ error: "Name required" }, { status: 400 });
  }
  const hashedPin = pin ? await bcrypt.hash(String(pin), 10) : null;
  const profile = await prisma.profile.create({
    data: {
      name: name.trim(),
      avatar: avatar || "🧬",
      pin: hashedPin,
      level: 1,
    },
  });
  return NextResponse.json({
    id: profile.id,
    name: profile.name,
    avatar: profile.avatar,
    xp: profile.xp,
    level: profile.level,
    streakCount: profile.streakCount,
    hasPin: !!profile.pin,
  });
}
