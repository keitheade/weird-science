"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProfileStore } from "@/stores/profile-store";
import type { DashboardStats } from "@/types";

export default function DashboardPage() {
  const { activeProfileId } = useProfileStore();
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    if (!activeProfileId) return;
    fetch(`/api/dashboard/${activeProfileId}`)
      .then((r) => r.json())
      .then(setStats);
  }, [activeProfileId]);

  if (!stats) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-32 rounded-2xl bg-slate-800" />
        <div className="h-64 rounded-2xl bg-slate-800" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="overflow-hidden border-indigo-500/30 bg-gradient-to-r from-indigo-950/80 to-slate-900/80">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-5xl">{stats.profile.avatar}</span>
                <div>
                  <h1 className="text-2xl font-black text-white">
                    Welcome back, {stats.profile.name}!
                  </h1>
                  <p className="text-slate-400">
                    Level {stats.profile.level} · {stats.profile.xp} XP
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Badge variant="warning" className="text-base px-3 py-1">
                  🔥 {stats.profile.streakCount} day streak
                </Badge>
                <Badge variant="default" className="text-base px-3 py-1">
                  {stats.accuracy}% accuracy
                </Badge>
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-1 flex justify-between text-xs text-slate-400">
                <span>Level {stats.xpProgress.level}</span>
                <span>
                  {stats.xpProgress.current}/{stats.xpProgress.needed} XP
                </span>
              </div>
              <Progress value={stats.xpProgress.percent} />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Subject Mastery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={stats.subjectMastery}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: "#94a3b8", fontSize: 11 }} />
                  <Radar
                    dataKey="score"
                    stroke="#818cf8"
                    fill="#6366f1"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {stats.subjectMastery.map((s) => (
                <div key={s.subject} className="flex items-center gap-2 text-sm">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: s.color }}
                  />
                  <span className="text-slate-300">{s.subject}</span>
                  <span className="ml-auto font-bold text-white">{s.score}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>💪 Strengths</CardTitle>
            </CardHeader>
            <CardContent>
              {stats.strengths.length === 0 ? (
                <p className="text-sm text-slate-500">
                  Complete quizzes to discover your strengths!
                </p>
              ) : (
                <ul className="space-y-2">
                  {stats.strengths.map((s) => (
                    <li
                      key={s.topic}
                      className="flex items-center justify-between rounded-lg bg-emerald-500/10 px-3 py-2"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">{s.topic}</p>
                        <p className="text-xs text-slate-400">{s.subject}</p>
                      </div>
                      <Badge variant="success">{s.score}%</Badge>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎯 Areas to Improve</CardTitle>
            </CardHeader>
            <CardContent>
              {stats.improvements.length === 0 ? (
                <p className="text-sm text-slate-500">
                  Start learning to see recommendations!
                </p>
              ) : (
                <ul className="space-y-2">
                  {stats.improvements.map((s) => (
                    <li
                      key={s.topicId}
                      className="flex items-center justify-between rounded-lg bg-rose-500/10 px-3 py-2"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">{s.topic}</p>
                        <p className="text-xs text-slate-400">{s.subject}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="danger">{s.score}%</Badge>
                        <Link href={`/quiz?topic=${s.topicId}`}>
                          <Button size="sm" variant="outline">
                            Practice
                          </Button>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {stats.recentBadges.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>🏆 Recent Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {stats.recentBadges.map((b) => (
                <div
                  key={b.name}
                  className="flex items-center gap-2 rounded-xl bg-amber-500/10 px-4 py-2 ring-1 ring-amber-500/30"
                >
                  <span className="text-2xl">{b.icon}</span>
                  <span className="text-sm font-medium text-amber-200">
                    {b.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 sm:grid-cols-3">
        <Link href="/learn">
          <Card className="cursor-pointer transition-all hover:ring-2 hover:ring-indigo-500/50">
            <CardContent className="p-5 text-center">
              <p className="text-3xl">📚</p>
              <p className="mt-2 font-bold text-white">Learn</p>
              <p className="text-xs text-slate-400">Browse lessons</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/quiz">
          <Card className="cursor-pointer transition-all hover:ring-2 hover:ring-indigo-500/50">
            <CardContent className="p-5 text-center">
              <p className="text-3xl">🧠</p>
              <p className="mt-2 font-bold text-white">Quiz</p>
              <p className="text-xs text-slate-400">Test your knowledge</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/interactives">
          <Card className="cursor-pointer transition-all hover:ring-2 hover:ring-indigo-500/50">
            <CardContent className="p-5 text-center">
              <p className="text-3xl">🔬</p>
              <p className="mt-2 font-bold text-white">Labs</p>
              <p className="text-xs text-slate-400">Interactive sims</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
