"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useProfileStore } from "@/stores/profile-store";
import { TutorChat } from "@/components/ai/tutor-chat";

interface LessonData {
  id: string;
  title: string;
  content: string;
  medicalCallout: string | null;
  interactiveRef: string | null;
  topic: {
    title: string;
    subject: { slug: string; name: string };
    slug: string;
  };
}

const interactiveLinks: Record<string, string> = {
  "atom-builder": "/interactives/atom-builder",
  "molecule-builder": "/interactives/molecule-builder",
  "periodic-table": "/interactives/periodic-table",
  projectile: "/interactives/physics?sim=projectile",
  forces: "/interactives/physics?sim=forces",
  circuit: "/interactives/physics?sim=circuit",
  waves: "/interactives/physics?sim=waves",
  "cell-diagram": "/interactives/biology?sim=cell",
  "heart-diagram": "/interactives/biology?sim=heart",
  "organ-systems": "/interactives/biology?sim=organs",
  "function-grapher": "/interactives/grapher",
};

export default function LessonPage() {
  const params = useParams();
  const { activeProfileId } = useProfileStore();
  const [lesson, setLesson] = useState<LessonData | null>(null);
  const [completed, setCompleted] = useState(false);
  const [xpGained, setXpGained] = useState(0);

  useEffect(() => {
    fetch("/api/subjects")
      .then((r) => r.json())
      .then((subjects) => {
        const subject = subjects.find(
          (s: { slug: string }) => s.slug === params.subject
        );
        const topic = subject?.topics.find(
          (t: { slug: string }) => t.slug === params.topic
        );
        if (topic) {
          fetch(`/api/topics/${topic.id}`)
            .then((r) => r.json())
            .then((data) => {
              const l = data.lessons.find(
                (ls: { slug: string }) => ls.slug === params.lesson
              );
              if (l) {
                fetch(`/api/lessons/${l.id}`)
                  .then((r) => r.json())
                  .then(setLesson);
              }
            });
        }
      });
  }, [params.subject, params.topic, params.lesson]);

  const markComplete = async () => {
    if (!lesson || !activeProfileId) return;
    const res = await fetch(`/api/lessons/${lesson.id}/complete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileId: activeProfileId }),
    });
    const data = await res.json();
    if (!data.alreadyCompleted) {
      setXpGained(data.xpGained);
    }
    setCompleted(true);
  };

  if (!lesson) {
    return <div className="animate-pulse h-64 rounded-2xl bg-slate-800" />;
  }

  return (
    <div className="space-y-6">
      <div>
        <Link
          href={`/learn/${params.subject}/${params.topic}`}
          className="text-sm text-indigo-400 hover:underline"
        >
          ← Back to {lesson.topic.title}
        </Link>
        <h1 className="mt-2 text-3xl font-black text-white">{lesson.title}</h1>
      </div>

      <Card>
        <CardContent className="prose-science p-6">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {lesson.content}
          </ReactMarkdown>
        </CardContent>
      </Card>

      {lesson.medicalCallout && (
        <Card className="border-emerald-500/30 bg-emerald-950/20">
          <CardContent className="p-5">
            <p className="text-sm font-semibold text-emerald-300">
              🩺 Medical Application
            </p>
            <p className="mt-1 text-sm text-slate-300">
              {lesson.medicalCallout}
            </p>
          </CardContent>
        </Card>
      )}

      {lesson.interactiveRef && interactiveLinks[lesson.interactiveRef] && (
        <Link href={interactiveLinks[lesson.interactiveRef]}>
          <Card className="cursor-pointer transition-all hover:ring-2 hover:ring-emerald-500/40">
            <CardContent className="flex items-center gap-4 p-5">
              <span className="text-3xl">🔬</span>
              <div>
                <p className="font-bold text-white">Open Interactive Lab</p>
                <p className="text-sm text-slate-400">
                  Hands-on simulation for this lesson
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      )}

      <TutorChat
        context={`Lesson: ${lesson.title}\nSubject: ${lesson.topic.subject.name}\nTopic: ${lesson.topic.title}\n\n${lesson.content}`}
      />

      <div className="flex flex-wrap items-center gap-4">
        {!completed ? (
          <Button onClick={markComplete} size="lg">
            <CheckCircle size={18} /> Mark Lesson Complete
          </Button>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-2 rounded-xl bg-emerald-500/20 px-4 py-3 text-emerald-300"
          >
            <CheckCircle size={20} />
            Lesson complete! {xpGained > 0 && `+${xpGained} XP`}
          </motion.div>
        )}
      </div>
    </div>
  );
}
