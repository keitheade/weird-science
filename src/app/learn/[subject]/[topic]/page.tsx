"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BookOpen, Brain, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TutorChat } from "@/components/ai/tutor-chat";

interface TopicData {
  id: string;
  title: string;
  description: string;
  yearBand: string;
  surgeonRelevance: string;
  subject: { name: string; slug: string; color: string };
  lessons: { id: string; slug: string; title: string; interactiveRef: string | null }[];
  questions: { id: string }[];
}

export default function TopicPage() {
  const params = useParams();
  const [topic, setTopic] = useState<TopicData | null>(null);
  const [showTutor, setShowTutor] = useState(false);

  useEffect(() => {
    fetch("/api/subjects")
      .then((r) => r.json())
      .then((subjects) => {
        const subject = subjects.find(
          (s: { slug: string }) => s.slug === params.subject
        );
        const t = subject?.topics.find(
          (tp: { slug: string }) => tp.slug === params.topic
        );
        if (t) {
          fetch(`/api/topics/${t.id}`)
            .then((r) => r.json())
            .then(setTopic);
        }
      });
  }, [params.subject, params.topic]);

  if (!topic) {
    return <div className="animate-pulse h-64 rounded-2xl bg-slate-800" />;
  }

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/learn"
          className="text-sm text-indigo-400 hover:underline"
        >
          ← Back to subjects
        </Link>
        <h1 className="mt-2 text-3xl font-black text-white">{topic.title}</h1>
        <div className="mt-2 flex flex-wrap gap-2">
          <Badge variant="outline">{topic.yearBand}</Badge>
          <Badge style={{ backgroundColor: `${topic.subject.color}20`, color: topic.subject.color }}>
            {topic.subject.name}
          </Badge>
        </div>
        <p className="mt-3 text-slate-400">{topic.description}</p>
      </div>

      <Card className="border-indigo-500/30 bg-indigo-950/30">
        <CardContent className="p-5">
          <p className="text-sm font-semibold text-indigo-300">
            🩺 Why a surgeon needs this
          </p>
          <p className="mt-1 text-sm text-slate-300">{topic.surgeonRelevance}</p>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-3">
        <Link href={`/quiz?topic=${topic.id}`}>
          <Button>
            <Brain size={16} /> Start Quiz ({topic.questions.length})
          </Button>
        </Link>
        <Button variant="secondary" onClick={() => setShowTutor(!showTutor)}>
          <MessageCircle size={16} /> AI Tutor
        </Button>
      </div>

      {showTutor && (
        <TutorChat
          context={`Subject: ${topic.subject.name}\nTopic: ${topic.title}\n${topic.description}\nSurgeon relevance: ${topic.surgeonRelevance}`}
        />
      )}

      <div>
        <h2 className="mb-3 text-xl font-bold text-white">Lessons</h2>
        <div className="space-y-3">
          {topic.lessons.map((lesson, i) => (
            <Link
              key={lesson.id}
              href={`/learn/${params.subject}/${params.topic}/${lesson.slug}`}
            >
              <Card className="transition-all hover:ring-1 hover:ring-indigo-500/40">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-300">
                    <BookOpen size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">
                      {i + 1}. {lesson.title}
                    </p>
                    {lesson.interactiveRef && (
                      <p className="text-xs text-emerald-400">
                        🔬 Includes interactive lab
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
