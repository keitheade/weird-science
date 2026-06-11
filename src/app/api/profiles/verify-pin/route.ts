import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { profileId, pin } = await req.json();
  const profile = await prisma.profile.findUnique({ where: { id: profileId } });
  if (!profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }
  if (!profile.pin) {
    return NextResponse.json({ valid: true });
  }
  const valid = await bcrypt.compare(String(pin), profile.pin);
  return NextResponse.json({ valid });
}
