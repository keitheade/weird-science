import OpenAI from "openai";
import { prisma } from "./prisma";

export async function getAIClient() {
  const settings = await prisma.aISettings.findFirst({ where: { id: 1 } });
  if (!settings?.enabled || !settings.apiKey) {
    return null;
  }

  return new OpenAI({
    apiKey: settings.apiKey,
    baseURL: settings.baseUrl,
  });
}

export async function getAISettings() {
  let settings = await prisma.aISettings.findFirst({ where: { id: 1 } });
  if (!settings) {
    settings = await prisma.aISettings.create({
      data: { id: 1 },
    });
  }
  return settings;
}

export async function chatWithTutor(
  messages: { role: "user" | "assistant" | "system"; content: string }[],
  context?: string
) {
  const client = await getAIClient();
  if (!client) {
    return {
      error: "AI tutor is not configured. Enable it in Settings.",
      content: null,
    };
  }

  const settings = await getAISettings();
  const systemPrompt = `You are an expert Victorian (Australia) VCE science and maths tutor helping a Year 9-12 student who aspires to become a surgeon. 
Be encouraging, precise, and connect concepts to medicine/surgery when relevant.
Use Australian English and reference VCAA/Victorian curriculum where helpful.
${context ? `\nCurrent topic context:\n${context}` : ""}`;

  try {
    const response = await client.chat.completions.create({
      model: settings.model,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      temperature: 0.7,
      max_tokens: 1024,
    });

    return {
      error: null,
      content: response.choices[0]?.message?.content ?? "No response generated.",
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : "AI request failed";
    return { error: message, content: null };
  }
}

export async function generateAdaptiveQuiz(
  topicTitle: string,
  subjectName: string,
  difficulty: number,
  count = 3
) {
  const client = await getAIClient();
  if (!client) {
    return { error: "AI tutor is not configured.", questions: [] };
  }

  const settings = await getAISettings();
  const prompt = `Generate ${count} quiz questions for Victorian VCE ${subjectName} on the topic "${topicTitle}" at difficulty ${difficulty}/5.
Return ONLY valid JSON array with objects: { "type": "mcq"|"numeric", "prompt": string, "options": string[]|null, "answer": string, "explanation": string }.
For numeric answers include tolerance in answer as "value|tolerance|unit" e.g. "9.8|0.1|m/s^2".`;

  try {
    const response = await client.chat.completions.create({
      model: settings.model,
      messages: [
        {
          role: "system",
          content:
            "You are a VCE exam question writer. Output only valid JSON arrays, no markdown.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.5,
      max_tokens: 2048,
    });

    const text = response.choices[0]?.message?.content ?? "[]";
    const cleaned = text.replace(/```json\n?|\n?```/g, "").trim();
    const questions = JSON.parse(cleaned);
    return { error: null, questions };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Quiz generation failed";
    return { error: message, questions: [] };
  }
}
