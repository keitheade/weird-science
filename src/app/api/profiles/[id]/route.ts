import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { levelFromXp } from "@/lib/gamification";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const profile = await prisma.profile.findUnique({ where: { id } });
  if (!profile) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({
    id: profile.id,
    name: profile.name,
    avatar: profile.avatar,
    xp: profile.xp,
    level: levelFromXp(profile.xp),
    streakCount: profile.streakCount,
    hasPin: !!profile.pin,
  });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();
  const data: Record<string, unknown> = {};
  if (body.name) data.name = body.name.trim();
  if (body.avatar) data.avatar = body.avatar;
  if (body.pin !== undefined) {
    data.pin = body.pin ? await bcrypt.hash(String(body.pin), 10) : null;
  }
  const profile = await prisma.profile.update({ where: { id }, data });
  return NextResponse.json({
    id: profile.id,
    name: profile.name,
    avatar: profile.avatar,
    xp: profile.xp,
    level: levelFromXp(profile.xp),
    streakCount: profile.streakCount,
  });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.profile.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
