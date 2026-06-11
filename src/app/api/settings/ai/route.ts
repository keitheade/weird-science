import { NextRequest, NextResponse } from "next/server";
import { getAISettings } from "@/lib/ai";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const settings = await getAISettings();
  return NextResponse.json({
    enabled: settings.enabled,
    provider: settings.provider,
    baseUrl: settings.baseUrl,
    model: settings.model,
    hasApiKey: !!settings.apiKey,
  });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const data: Record<string, unknown> = {};
  if (body.enabled !== undefined) data.enabled = body.enabled;
  if (body.provider) data.provider = body.provider;
  if (body.baseUrl) data.baseUrl = body.baseUrl;
  if (body.model) data.model = body.model;
  if (body.apiKey !== undefined) data.apiKey = body.apiKey || null;

  const settings = await prisma.aISettings.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      enabled: body.enabled ?? false,
      provider: body.provider ?? "gemini",
      baseUrl:
        body.baseUrl ??
        "https://generativelanguage.googleapis.com/v1beta/openai/",
      model: body.model ?? "gemini-2.0-flash",
      apiKey: body.apiKey || null,
    },
    update: data,
  });

  return NextResponse.json({
    enabled: settings.enabled,
    provider: settings.provider,
    baseUrl: settings.baseUrl,
    model: settings.model,
    hasApiKey: !!settings.apiKey,
  });
}
