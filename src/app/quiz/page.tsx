"use client";

import { Suspense, useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Timer, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { QuestionRenderer, type Question } from "@/components/quiz/question-renderer";
import { Celebration, playSuccessSound } from "@/components/gamification/celebration";
import { useProfileStore } from "@/stores/profile-store";
import { shuffle } from "@/lib/utils";

interface TopicOption {
  id: string;
  title: string;
  subjectName: string;
  subjectColor: string;
  questionCount: number;
}

function QuizContent() {
  const searchParams = useSearchParams();
  const topicParam = searchParams.get("topic");
  const { activeProfileId } = useProfileStore();

  const [topics, setTopics] = useState<TopicOption[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(topicParam);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState<"select" | "practice" | "timed" | "adaptive" | "done">("select");
  const [showResult, setShowResult] = useState(false);
  const [lastResult, setLastResult] = useState<{
    correct: boolean;
    explanation: string;
    xpGained: number;
    badgesEarned: string[];
  } | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [timeLeft, setTimeLeft] = useState(60);
  const [aiLoading, setAiLoading] = useState(false);
  const [celebration, setCelebration] = useState<string | null>(null);
  const [quizLength, setQuizLength] = useState(10);

  const LENGTH_OPTIONS = [5, 10, 15, 20, 50];

  useEffect(() => {
    if (topicParam) {
      setSelectedTopic(topicParam);
      setMode("select");
    }
  }, [topicParam]);

  useEffect(() => {
    fetch("/api/subjects")
      .then((r) => r.json())
      .then((subjects) => {
        const all: TopicOption[] = [];
        for (const s of subjects) {
          for (const t of s.topics) {
            all.push({
              id: t.id,
              title: t.title,
              subjectName: s.name,
              subjectColor: s.color,
              questionCount: t._count?.questions ?? 0,
            });
          }
        }
        setTopics(all);
      });
  }, []);

  const visibleTopics = useMemo(() => {
    const withQuestions = topics.filter((t) => t.questionCount > 0);
    if (!topicParam) return withQuestions;
    const filtered = withQuestions.filter((t) => t.id === topicParam);
    return filtered.length > 0 ? filtered : withQuestions;
  }, [topics, topicParam]);

  const filteredTopic = topicParam
    ? topics.find((t) => t.id === topicParam)
    : null;

  const loadQuestions = useCallback(
    async (topicId: string) => {
      const res = await fetch(`/api/topics/${topicId}`);
      const data = (await res.json()) as { questions: Question[] };
      // Shuffle, then trim to the chosen quiz length (e.g. 5 for a refresher,
      // 50 for a full exam). If a topic has fewer questions than requested,
      // slice simply returns all of them.
      setQuestions(shuffle(data.questions ?? []).slice(0, quizLength));
      setCurrentIndex(0);
      setScore({ correct: 0, total: 0 });
      setShowResult(false);
      setLastResult(null);
    },
    [quizLength]
  );

  // Only load questions when starting a quiz — not when finishing (mode "done"),
  // otherwise loadQuestions resets score to 0/0 on the results screen.
  useEffect(() => {
    if (selectedTopic && (mode === "practice" || mode === "timed")) {
      loadQuestions(selectedTopic);
    }
  }, [selectedTopic, mode, loadQuestions]);

  useEffect(() => {
    if (mode !== "timed" || showResult || !questions.length) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setMode("done");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [mode, showResult, questions.length, currentIndex]);

  const startAdaptive = async (topicId: string) => {
    setAiLoading(true);
    const topic = topics.find((t) => t.id === topicId);
    if (!topic) return;
    const res = await fetch("/api/ai/quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        topicTitle: topic.title,
        subjectName: topic.subjectName,
        difficulty: 2,
        // Cap AI-generated quizzes at 20 to keep generation fast/affordable.
        count: Math.min(quizLength, 20),
      }),
    });
    const data = await res.json();
    if (data.questions?.length) {
      const aiQuestions: Question[] = data.questions.map(
        (q: { type: string; prompt: string; options: string[] | null; answer: string; explanation: string }, i: number) => ({
          id: `ai-${i}`,
          type: q.type,
          prompt: q.prompt,
          options: q.options ? JSON.stringify(q.options) : null,
          answer: q.answer,
          explanation: q.explanation,
          interactiveConfig: null,
        })
      );
      setQuestions(aiQuestions);
      setSelectedTopic(topicId);
      setMode("adaptive");
      setCurrentIndex(0);
      setScore({ correct: 0, total: 0 });
    }
    setAiLoading(false);
  };

  const handleAnswer = async (correct: boolean, response: unknown) => {
    const q = questions[currentIndex];
    setShowResult(true);

    if (correct) playSuccessSound();

    if (q.id.startsWith("ai-")) {
      setLastResult({
        correct,
        explanation: q.explanation,
        xpGained: correct ? 15 : 0,
        badgesEarned: [],
      });
      setScore((s) => ({
        correct: s.correct + (correct ? 1 : 0),
        total: s.total + 1,
      }));
      return;
    }

    const start = Date.now();
    const res = await fetch("/api/attempts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        profileId: activeProfileId,
        questionId: q.id,
        correct,
        response,
        responseTimeMs: Date.now() - start,
      }),
    });
    const data = await res.json();
    setLastResult({
      correct,
      explanation: data.explanation || q.explanation,
      xpGained: data.xpGained || 0,
      badgesEarned: data.badgesEarned || [],
    });
    if (data.badgesEarned?.length) {
      setCelebration(`Badge earned: ${data.badgesEarned[0]}!`);
    }
    setScore((s) => ({
      correct: s.correct + (correct ? 1 : 0),
      total: s.total + 1,
    }));
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setShowResult(false);
      setLastResult(null);
    } else {
      setMode("done");
    }
  };

  if (mode === "select") {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-black text-white">Quiz</h1>
          {filteredTopic ? (
            <div className="mt-2 space-y-2">
              <p className="text-slate-400">
                Quizzing:{" "}
                <span className="font-semibold text-white">
                  {filteredTopic.title}
                </span>
                <span
                  className="ml-2 text-xs"
                  style={{ color: filteredTopic.subjectColor }}
                >
                  {filteredTopic.subjectName}
                </span>
              </p>
              <Link
                href="/quiz"
                className="text-sm text-indigo-400 hover:underline"
              >
                ← Browse all topics
              </Link>
            </div>
          ) : (
            <p className="text-slate-400">Test your knowledge interactively</p>
          )}
        </div>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm font-semibold text-white">Quiz length</p>
            <p className="mb-3 text-xs text-slate-500">
              Pick a quick refresher or a full exam. Questions are randomised
              each time.
            </p>
            <div className="flex flex-wrap gap-2">
              {LENGTH_OPTIONS.map((n) => (
                <button
                  key={n}
                  onClick={() => setQuizLength(n)}
                  className={`rounded-xl border px-4 py-2 text-sm font-semibold transition-all ${
                    quizLength === n
                      ? "border-indigo-500 bg-indigo-500/20 text-white"
                      : "border-slate-700 text-slate-400 hover:border-slate-600"
                  }`}
                >
                  {n}
                  {n === 5 && " · refresh"}
                  {n === 50 && " · full"}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          {visibleTopics.map((topic) => (
              <Card key={topic.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-white">{topic.title}</p>
                      <p className="text-xs" style={{ color: topic.subjectColor }}>
                        {topic.subjectName}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {topic.questionCount} available · {" "}
                        {Math.min(quizLength, topic.questionCount)} this quiz
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      onClick={() => {
                        setSelectedTopic(topic.id);
                        setMode("practice");
                      }}
                    >
                      Practice
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => {
                        setSelectedTopic(topic.id);
                        setMode("timed");
                        setTimeLeft(60);
                      }}
                    >
                      <Timer size={14} /> Timed
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => startAdaptive(topic.id)}
                      disabled={aiLoading}
                    >
                      <Sparkles size={14} /> AI Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    );
  }

  if (mode === "done") {
    const pct =
      score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto max-w-md text-center"
      >
        <Card>
          <CardContent className="space-y-4 p-8">
            <p className="text-5xl">{pct >= 70 ? "🎉" : "💪"}</p>
            <h2 className="text-2xl font-black text-white">Quiz Complete!</h2>
            <p className="text-4xl font-black text-indigo-400">{pct}%</p>
            <p className="text-slate-400">
              {score.correct}/{score.total} correct
            </p>
            <Button
              onClick={() => {
                setMode("select");
                setShowResult(false);
                setLastResult(null);
              }}
              className="w-full"
            >
              {topicParam ? "Back to Quiz Options" : "Back to Topics"}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  const current = questions[currentIndex];
  if (!current) {
    return <div className="animate-pulse h-64 rounded-2xl bg-slate-800" />;
  }

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <Celebration
        show={!!celebration}
        message={celebration ?? ""}
        onDone={() => setCelebration(null)}
      />
      <div className="flex items-center justify-between">
        <Badge variant="outline">
          {currentIndex + 1}/{questions.length}
        </Badge>
        {mode === "timed" && (
          <Badge variant={timeLeft < 15 ? "danger" : "warning"}>
            <Timer size={12} /> {timeLeft}s
          </Badge>
        )}
        {mode === "adaptive" && (
          <Badge variant="default">
            <Sparkles size={12} /> AI Generated
          </Badge>
        )}
      </div>
      <Progress value={((currentIndex + 1) / questions.length) * 100} />

      <QuestionRenderer
        key={current.id}
        question={current}
        onAnswer={handleAnswer}
        showResult={showResult}
        lastResult={lastResult ?? undefined}
      />

      {showResult && (
        <Button onClick={nextQuestion} className="w-full" size="lg">
          {currentIndex < questions.length - 1 ? "Next Question" : "See Results"}
        </Button>
      )}
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="animate-pulse h-64 rounded-2xl bg-slate-800" />}>
      <QuizContent />
    </Suspense>
  );
}
