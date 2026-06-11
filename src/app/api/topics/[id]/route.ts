import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const topic = await prisma.topic.findUnique({
    where: { id },
    include: {
      subject: true,
      lessons: { orderBy: { order: "asc" } },
      questions: { orderBy: { difficulty: "asc" } },
    },
  });
  if (!topic) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(topic);
}
