"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { AtomBuilderMini } from "@/components/interactives/atom-builder-mini";
import { shuffle } from "@/lib/utils";

export interface Question {
  id: string;
  type: string;
  prompt: string;
  options: string | null;
  answer: string;
  explanation: string;
  interactiveConfig: string | null;
}

function checkNumeric(answer: string, userValue: string): boolean {
  const parts = answer.split("|");
  const expected = parseFloat(parts[0]);
  const tolerance = parseFloat(parts[1] || "0");
  const val = parseFloat(userValue);
  if (isNaN(val) || isNaN(expected)) return false;
  return Math.abs(val - expected) <= tolerance;
}

function checkEquationBalance(answer: string, userCoeffs: Record<string, number>): boolean {
  try {
    const expected = JSON.parse(answer);
    return Object.entries(expected).every(
      ([k, v]) => userCoeffs[k] === v
    );
  } catch {
    return false;
  }
}

export function QuestionRenderer({
  question,
  onAnswer,
  showResult,
  lastResult,
}: {
  question: Question;
  onAnswer: (correct: boolean, response: unknown) => void;
  showResult: boolean;
  lastResult?: { correct: boolean; explanation: string; xpGained: number; badgesEarned: string[] };
}) {
  const [selected, setSelected] = useState<string | string[]>("");
  const [multiSelected, setMultiSelected] = useState<string[]>([]);
  const [numericValue, setNumericValue] = useState("");
  const [equationCoeffs, setEquationCoeffs] = useState<Record<string, number>>({});
  const [dragAnswer, setDragAnswer] = useState("");
  const [atomState, setAtomState] = useState({ protons: 1, neutrons: 0, electrons: 1 });

  // Reset all answer state when moving to a new question so MCQ/numeric
  // selections don't leak into multi-select (or other types).
  useEffect(() => {
    setSelected("");
    setMultiSelected([]);
    setNumericValue("");
    setEquationCoeffs({});
    setDragAnswer("");
    setAtomState({ protons: 1, neutrons: 0, electrons: 1 });
  }, [question.id]);

  const options = question.options ? JSON.parse(question.options) : null;

  // Shuffle answer options once per question so order can't be rote-learned.
  const displayOptions = useMemo(
    () => (Array.isArray(options) ? shuffle(options) : options),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [question.id]
  );
  const displayLabels = useMemo<string[]>(
    () => (options?.labels ? shuffle(options.labels as string[]) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [question.id]
  );

  let expectedMulti: string[] = [];
  if (question.type === "multi-select") {
    try {
      expectedMulti = JSON.parse(question.answer);
    } catch {
      expectedMulti = [];
    }
  }

  const submit = (correct: boolean, response: unknown) => {
    if (!showResult) onAnswer(correct, response);
  };

  const handleMcq = (choice: string) => {
    setSelected(choice);
    submit(choice === question.answer, choice);
  };

  const handleMultiSelect = () => {
    let expected: string[] = [];
    try {
      expected = JSON.parse(question.answer);
    } catch {
      expected = [];
    }
    const userSorted = [...multiSelected].sort();
    const expectedSorted = [...expected].sort();
    const correct =
      userSorted.length === expectedSorted.length &&
      userSorted.every((v, i) => v === expectedSorted[i]);
    submit(correct, multiSelected);
  };

  const handleNumeric = () => {
    submit(checkNumeric(question.answer, numericValue), numericValue);
  };

  const handleDragLabel = (label: string) => {
    setDragAnswer(label);
    submit(label === question.answer, label);
  };

  const handleEquation = () => {
    submit(checkEquationBalance(question.answer, equationCoeffs), equationCoeffs);
  };

  const handleInteractive = () => {
    try {
      const expected = JSON.parse(question.answer);
      const correct =
        atomState.protons === expected.protons &&
        atomState.electrons === expected.electrons;
      submit(correct, atomState);
    } catch {
      submit(false, atomState);
    }
  };

  const toggleMulti = (opt: string) => {
    setMultiSelected((current) =>
      current.includes(opt)
        ? current.filter((o) => o !== opt)
        : [...current, opt]
    );
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-6">
          <p className="text-lg font-medium text-white">{question.prompt}</p>

          {question.type === "mcq" && Array.isArray(displayOptions) && (
            <div className="mt-4 space-y-2">
              {displayOptions.map((opt: string) => (
                <button
                  key={opt}
                  onClick={() => handleMcq(opt)}
                  disabled={showResult}
                  className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                    showResult && opt === question.answer
                      ? "border-emerald-500 bg-emerald-500/20 text-emerald-200"
                      : showResult && opt === selected
                        ? "border-rose-500 bg-rose-500/20 text-rose-200"
                        : selected === opt
                          ? "border-indigo-500 bg-indigo-500/20 text-white"
                          : "border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-600"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {question.type === "multi-select" && Array.isArray(displayOptions) && (
            <div className="mt-4 space-y-2">
              {displayOptions.map((opt: string) => (
                <button
                  key={opt}
                  onClick={() => toggleMulti(opt)}
                  disabled={showResult}
                  className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                    showResult && expectedMulti.includes(opt)
                      ? "border-emerald-500 bg-emerald-500/20 text-emerald-200"
                      : showResult &&
                          multiSelected.includes(opt) &&
                          !expectedMulti.includes(opt)
                        ? "border-rose-500 bg-rose-500/20 text-rose-200"
                        : multiSelected.includes(opt)
                          ? "border-indigo-500 bg-indigo-500/20 text-white"
                          : "border-slate-700 bg-slate-800/50 text-slate-300"
                  }`}
                >
                  {opt}
                </button>
              ))}
              {!showResult && (
                <Button onClick={handleMultiSelect} className="mt-2">
                  Submit Answer
                </Button>
              )}
            </div>
          )}

          {question.type === "numeric" && (
            <div className="mt-4 flex gap-2">
              <Input
                type="number"
                placeholder="Your answer"
                value={numericValue}
                onChange={(e) => setNumericValue(e.target.value)}
                disabled={showResult}
              />
              {!showResult && (
                <Button onClick={handleNumeric}>Submit</Button>
              )}
            </div>
          )}

          {question.type === "drag-label" && options?.labels && (
            <div className="mt-4">
              <p className="mb-2 text-sm text-slate-400">
                Tap the correct label:
              </p>
              <div className="flex flex-wrap gap-2">
                {displayLabels.map((label: string) => (
                  <button
                    key={label}
                    onClick={() => handleDragLabel(label)}
                    disabled={showResult}
                    className={`rounded-xl border px-4 py-2 text-sm ${
                      dragAnswer === label
                        ? "border-indigo-500 bg-indigo-500/20"
                        : "border-slate-700 bg-slate-800"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {question.type === "equation-balance" && options && (
            <div className="mt-4 space-y-3">
              <p className="font-mono text-white">
                {equationCoeffs.H2 ?? "_"}H₂ + {equationCoeffs.O2 ?? "_"}O₂ →{" "}
                {equationCoeffs.H2O ?? "_"}H₂O
              </p>
              {["H2", "O2", "H2O"].map((key) => (
                <div key={key} className="flex items-center gap-2">
                  <span className="w-8 text-sm text-slate-400">{key}:</span>
                  <Input
                    type="number"
                    min={1}
                    max={10}
                    value={equationCoeffs[key] ?? ""}
                    onChange={(e) =>
                      setEquationCoeffs({
                        ...equationCoeffs,
                        [key]: parseInt(e.target.value) || 0,
                      })
                    }
                    disabled={showResult}
                    className="w-20"
                  />
                </div>
              ))}
              {!showResult && (
                <Button onClick={handleEquation}>Check Balance</Button>
              )}
            </div>
          )}

          {question.type === "interactive-task" && (
            <div className="mt-4">
              <AtomBuilderMini
                protons={atomState.protons}
                neutrons={atomState.neutrons}
                electrons={atomState.electrons}
                onChange={setAtomState}
              />
              {!showResult && (
                <Button onClick={handleInteractive} className="mt-4">
                  Check Atom
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <AnimatePresence>
        {showResult && lastResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <Card
              className={
                lastResult.correct
                  ? "border-emerald-500/40 bg-emerald-950/30"
                  : "border-rose-500/40 bg-rose-950/30"
              }
            >
              <CardContent className="flex items-start gap-3 p-5">
                {lastResult.correct ? (
                  <CheckCircle className="text-emerald-400" />
                ) : (
                  <XCircle className="text-rose-400" />
                )}
                <div>
                  <p
                    className={`font-bold ${
                      lastResult.correct ? "text-emerald-300" : "text-rose-300"
                    }`}
                  >
                    {lastResult.correct
                      ? `Correct! +${lastResult.xpGained} XP`
                      : "Not quite right"}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {lastResult.explanation}
                  </p>
                  {lastResult.badgesEarned.length > 0 && (
                    <p className="mt-2 text-sm text-amber-300">
                      🏆 Badge earned: {lastResult.badgesEarned.join(", ")}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
