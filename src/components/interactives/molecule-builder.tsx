"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ATOMS,
  ATOM_COLORS,
  MOLECULES,
  MOLECULE_CHALLENGES,
  toHillFormula,
  toSubscript,
} from "@/lib/molecules";

function AtomBall({
  symbol,
  size = 44,
}: {
  symbol: string;
  size?: number;
}) {
  const info = ATOM_COLORS[symbol];
  return (
    <span
      className="inline-flex items-center justify-center rounded-full font-bold shadow-md"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, #ffffff55, ${info?.color ?? "#64748b"})`,
        color: info?.textDark ? "#0f172a" : "#ffffff",
        fontSize: size * 0.38,
      }}
    >
      {symbol}
    </span>
  );
}

export function MoleculeBuilder() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [challengeIndex, setChallengeIndex] = useState<number | null>(null);
  const [challengeResult, setChallengeResult] = useState<string | null>(null);

  const formulaKey = useMemo(() => toHillFormula(counts), [counts]);
  const identified = formulaKey ? MOLECULES[formulaKey] : undefined;
  const totalAtoms = Object.values(counts).reduce((a, b) => a + b, 0);

  const add = (symbol: string) =>
    setCounts((c) => ({ ...c, [symbol]: (c[symbol] ?? 0) + 1 }));
  const remove = (symbol: string) =>
    setCounts((c) => {
      const next = { ...c };
      if (next[symbol]) next[symbol] -= 1;
      if (next[symbol] <= 0) delete next[symbol];
      return next;
    });
  const clear = () => {
    setCounts({});
    setChallengeResult(null);
  };

  const checkChallenge = () => {
    if (challengeIndex === null) return;
    const c = MOLECULE_CHALLENGES[challengeIndex];
    if (formulaKey === c.formula) {
      setChallengeResult(`✅ Perfect! You built ${c.name} (${MOLECULES[c.formula]?.formula ?? c.formula}).`);
    } else if (!formulaKey) {
      setChallengeResult("❌ Add some atoms first!");
    } else {
      setChallengeResult(`❌ Not yet — you built ${toSubscript(formulaKey)}. ${c.hint}.`);
    }
  };

  // Build a flat list of atom balls to display in the workspace.
  const atomList: string[] = [];
  for (const [sym, n] of Object.entries(counts)) {
    for (let i = 0; i < n; i++) atomList.push(sym);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Molecule Builder</h1>
        <p className="text-slate-400">
          Combine atoms to create real molecules — like H₂O, CO₂ and glucose
        </p>
      </div>

      {/* Atom palette */}
      <Card>
        <CardHeader>
          <CardTitle>Atom palette</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {ATOMS.map((atom) => (
              <div
                key={atom.symbol}
                className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900/60 p-2"
              >
                <div className="flex items-center gap-2">
                  <AtomBall symbol={atom.symbol} size={36} />
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-white">{atom.symbol}</p>
                    <p className="text-[10px] text-slate-500">{atom.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => remove(atom.symbol)}
                    className="h-7 w-7 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800"
                    aria-label={`Remove ${atom.name}`}
                  >
                    −
                  </button>
                  <span className="w-5 text-center text-sm font-bold text-white">
                    {counts[atom.symbol] ?? 0}
                  </span>
                  <button
                    onClick={() => add(atom.symbol)}
                    className="h-7 w-7 rounded-lg border border-indigo-500 bg-indigo-500/20 text-white hover:bg-indigo-500/40"
                    aria-label={`Add ${atom.name}`}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Workspace */}
      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>Your molecule</CardTitle>
          {totalAtoms > 0 && (
            <Button size="sm" variant="outline" onClick={clear}>
              Clear
            </Button>
          )}
        </CardHeader>
        <CardContent>
          <div className="flex min-h-[120px] flex-wrap items-center justify-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
            <AnimatePresence mode="popLayout">
              {atomList.length === 0 ? (
                <p className="text-sm text-slate-600">
                  Add atoms from the palette above to build a molecule.
                </p>
              ) : (
                atomList.map((sym, i) => (
                  <motion.div
                    key={`${sym}-${i}`}
                    layout
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <AtomBall symbol={sym} />
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          {formulaKey && (
            <div className="mt-4 text-center">
              <p className="text-3xl font-black text-white">
                {toSubscript(formulaKey)}
              </p>
              {identified ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 space-y-1"
                >
                  <Badge variant="success">{identified.name}</Badge>
                  <p className="mx-auto max-w-md text-sm text-slate-400">
                    {identified.description}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-slate-600">
                    {identified.kind} · {totalAtoms} atoms
                  </p>
                </motion.div>
              ) : (
                <p className="mt-2 text-sm text-slate-500">
                  Not a common molecule — try a known combination, or check the
                  challenges below.
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Surgeon's note */}
      <Card className="border-indigo-500/30 bg-indigo-950/20">
        <CardHeader>
          <CardTitle>🩺 Surgeon&apos;s Note</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-300">
            Anaesthesia is molecular chemistry in action. CO₂ levels are
            monitored breath-by-breath during surgery, oxygen (O₂) is delivered
            continuously, and saline (NaCl in water) keeps patients hydrated.
            Knowing how atoms combine is the first step to understanding
            pharmacology.
          </p>
        </CardContent>
      </Card>

      {/* Challenges */}
      <Card>
        <CardHeader>
          <CardTitle>Challenges</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {MOLECULE_CHALLENGES.map((c, i) => (
              <button
                key={c.formula}
                onClick={() => {
                  setChallengeIndex(i);
                  setChallengeResult(null);
                }}
                className={`rounded-xl border px-3 py-2 text-sm ${
                  challengeIndex === i
                    ? "border-indigo-500 bg-indigo-500/20 text-white"
                    : "border-slate-700 text-slate-400 hover:border-slate-600"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
          {challengeIndex !== null && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="text-sm text-slate-400">
                Build:{" "}
                <strong className="text-white">
                  {MOLECULE_CHALLENGES[challengeIndex].name}
                </strong>{" "}
                <span className="text-slate-500">
                  ({MOLECULE_CHALLENGES[challengeIndex].hint})
                </span>
              </p>
              <button
                onClick={checkChallenge}
                className="mt-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Check Challenge
              </button>
              {challengeResult && (
                <p className="mt-2 text-sm font-medium text-slate-200">
                  {challengeResult}
                </p>
              )}
            </motion.div>
          )}
        </CardContent>
      </Card>

      <Link href="/interactives/atom-builder">
        <Badge variant="outline" className="cursor-pointer hover:bg-slate-800">
          → Open Atom Builder
        </Badge>
      </Link>
    </div>
  );
}
