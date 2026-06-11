"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useProfileStore } from "@/stores/profile-store";

interface PathwayStep {
  id: string;
  title: string;
  yearBand: string;
  subject: string;
  color: string;
  mastery: number;
  topicId: string;
  subjectSlug: string;
  topicSlug: string;
}

const SURGEON_MILESTONES = [
  { level: 1, title: "Curious Student", desc: "Start your science journey" },
  { level: 5, title: "Lab Apprentice", desc: "Complete 5 levels of study" },
  { level: 10, title: "Pre-Med Scholar", desc: "Strong foundation across subjects" },
  { level: 20, title: "VCE Ready", desc: "Mastery across VCE units" },
  { level: 35, title: "Med School Hopeful", desc: "On track for medicine prerequisites" },
  { level: 50, title: "Future Surgeon", desc: "Elite mastery — surgery awaits" },
];

export default function PathwayPage() {
  const { activeProfileId } = useProfileStore();
  const [steps, setSteps] = useState<PathwayStep[]>([]);
  const [profile, setProfile] = useState<{ level: number; xp: number } | null>(null);

  useEffect(() => {
    if (!activeProfileId) return;

    Promise.all([
      fetch(`/api/dashboard/${activeProfileId}`).then((r) => r.json()),
      fetch("/api/subjects").then((r) => r.json()),
    ]).then(([dash, subjects]) => {
      setProfile(dash.profile);

      const masteryByTopic = new Map<string, number>();
      for (const imp of dash.improvements) {
        masteryByTopic.set(imp.topicId, imp.score);
      }
      for (const str of dash.strengths) {
        const match = subjects
          .flatMap((s: { topics: { id: string; title: string }[] }) => s.topics)
          .find((t: { title: string }) => t.title === str.topic);
        if (match) masteryByTopic.set(match.id, str.score);
      }

      const allSteps: PathwayStep[] = [];
      for (const subj of subjects) {
        for (const t of subj.topics) {
          allSteps.push({
            id: t.id,
            title: t.title,
            yearBand: t.yearBand,
            subject: subj.name,
            color: subj.color,
            mastery: masteryByTopic.get(t.id) ?? 0,
            topicId: t.id,
            subjectSlug: subj.slug,
            topicSlug: t.slug,
          });
        }
      }
      setSteps(allSteps);
    });
  }, [activeProfileId]);

  const currentMilestone = [...SURGEON_MILESTONES]
    .reverse()
    .find((m) => (profile?.level ?? 1) >= m.level);
  const nextMilestone = SURGEON_MILESTONES.find(
    (m) => (profile?.level ?? 1) < m.level
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Pathway to Surgery</h1>
        <p className="text-slate-400">
          Your journey from Year 9 science to medical school prerequisites
        </p>
      </div>

      <Card className="border-rose-500/30 bg-gradient-to-r from-rose-950/40 to-slate-900/80">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <span className="text-5xl">🩺</span>
            <div>
              <p className="text-sm text-rose-300">Current milestone</p>
              <p className="text-2xl font-black text-white">
                {currentMilestone?.title ?? "Curious Student"}
              </p>
              <p className="text-sm text-slate-400">
                {currentMilestone?.desc}
              </p>
            </div>
          </div>
          {nextMilestone && (
            <div className="mt-4">
              <div className="mb-1 flex justify-between text-xs text-slate-400">
                <span>Next: {nextMilestone.title} (Lv {nextMilestone.level})</span>
                <span>Lv {profile?.level ?? 1}</span>
              </div>
              <Progress
                value={Math.min(
                  100,
                  ((profile?.level ?? 1) / nextMilestone.level) * 100
                )}
                color="bg-rose-500"
              />
            </div>
          )}
        </CardContent>
      </Card>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-800" />
        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="relative pl-14"
            >
              <div
                className="absolute left-4 top-4 h-5 w-5 rounded-full border-2 border-slate-700 bg-slate-900"
                style={{
                  borderColor: step.mastery > 0 ? step.color : undefined,
                  backgroundColor:
                    step.mastery >= 75 ? step.color : undefined,
                }}
              />
              <Link href={`/learn/${step.subjectSlug}/${step.topicSlug}`}>
                <Card className="transition-all hover:ring-1 hover:ring-indigo-500/30">
                  <CardContent className="flex flex-wrap items-center justify-between gap-3 p-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-white">{step.title}</p>
                        <Badge variant="outline">{step.yearBand}</Badge>
                      </div>
                      <p className="text-xs" style={{ color: step.color }}>
                        {step.subject}
                      </p>
                    </div>
                    <div className="w-24">
                      <Progress value={step.mastery} color="bg-indigo-500" />
                      <p className="mt-1 text-center text-xs text-slate-500">
                        {step.mastery}%
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
