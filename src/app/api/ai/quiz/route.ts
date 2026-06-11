import { NextRequest, NextResponse } from "next/server";
import { generateAdaptiveQuiz } from "@/lib/ai";

export async function POST(req: NextRequest) {
  const { topicTitle, subjectName, difficulty, count } = await req.json();
  if (!topicTitle || !subjectName) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const result = await generateAdaptiveQuiz(
    topicTitle,
    subjectName,
    difficulty ?? 2,
    count ?? 3
  );
  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 503 });
  }
  return NextResponse.json({ questions: result.questions });
}
