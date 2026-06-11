"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SubjectWithTopics } from "@/types";

export default function LearnPage() {
  const [subjects, setSubjects] = useState<SubjectWithTopics[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/subjects")
      .then((r) => r.json())
      .then(setSubjects);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Learn</h1>
        <p className="text-slate-400">
          Victorian Curriculum · Year 9/10 through VCE Units 1–4
        </p>
      </div>

      <div className="grid gap-4">
        {subjects.map((subject, i) => (
          <motion.div
            key={subject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card
              className="cursor-pointer transition-all hover:ring-1"
              style={{ borderColor: `${subject.color}40` }}
              onClick={() =>
                setExpanded(expanded === subject.id ? null : subject.id)
              }
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{subject.icon}</span>
                  <div className="flex-1">
                    <CardTitle style={{ color: subject.color }}>
                      {subject.name}
                    </CardTitle>
                    <p className="text-sm text-slate-400">
                      {subject.description}
                    </p>
                  </div>
                  <Badge variant="outline">
                    {subject.topics.length} topics
                  </Badge>
                </div>
              </CardHeader>
              {expanded === subject.id && (
                <CardContent className="space-y-2 border-t border-slate-800 pt-4">
                  {subject.topics.map((topic) => (
                    <Link
                      key={topic.id}
                      href={`/learn/${subject.slug}/${topic.slug}`}
                      className="block rounded-xl bg-slate-800/50 p-4 transition-colors hover:bg-slate-800"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-white">
                            {topic.title}
                          </p>
                          <p className="text-xs text-slate-400">
                            {topic.description}
                          </p>
                        </div>
                        <Badge variant="outline">{topic.yearBand}</Badge>
                      </div>
                      <p className="mt-2 text-xs text-indigo-300">
                        🩺 {topic.surgeonRelevance}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {topic._count?.lessons ?? 0} lessons ·{" "}
                        {topic._count?.questions ?? 0} questions
                      </p>
                    </Link>
                  ))}
                </CardContent>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
