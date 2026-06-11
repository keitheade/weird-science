import { NextRequest, NextResponse } from "next/server";
import { chatWithTutor } from "@/lib/ai";

export async function POST(req: NextRequest) {
  const { messages, context } = await req.json();
  if (!messages?.length) {
    return NextResponse.json({ error: "Messages required" }, { status: 400 });
  }
  const result = await chatWithTutor(messages, context);
  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 503 });
  }
  return NextResponse.json({ content: result.content });
}
