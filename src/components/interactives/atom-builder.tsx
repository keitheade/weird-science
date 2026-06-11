"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AtomBuilderMini } from "./atom-builder-mini";

const CHALLENGES = [
  { name: "Hydrogen", protons: 1, neutrons: 0, electrons: 1 },
  { name: "Helium", protons: 2, neutrons: 2, electrons: 2 },
  { name: "Carbon-12", protons: 6, neutrons: 6, electrons: 6 },
  { name: "Oxygen", protons: 8, neutrons: 8, electrons: 8 },
  { name: "Sodium ion (Na⁺)", protons: 11, neutrons: 12, electrons: 10 },
  { name: "Chloride ion (Cl⁻)", protons: 17, neutrons: 18, electrons: 18 },
];

export function AtomBuilder() {
  const [state, setState] = useState({ protons: 6, neutrons: 6, electrons: 6 });
  const [challengeIndex, setChallengeIndex] = useState<number | null>(null);
  const [challengeResult, setChallengeResult] = useState<string | null>(null);

  const checkChallenge = () => {
    if (challengeIndex === null) return;
    const c = CHALLENGES[challengeIndex];
    const match =
      state.protons === c.protons &&
      state.neutrons === c.neutrons &&
      state.electrons === c.electrons;
    setChallengeResult(
      match
        ? `✅ Perfect! You built ${c.name} correctly!`
        : `❌ Not quite — keep adjusting protons, neutrons, and electrons.`
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Atom Builder</h1>
        <p className="text-slate-400">
          Add or remove particles and watch the atom update in real time
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <AtomBuilderMini
            protons={state.protons}
            neutrons={state.neutrons}
            electrons={state.electrons}
            onChange={setState}
          />
        </CardContent>
      </Card>

      <Card className="border-indigo-500/30 bg-indigo-950/20">
        <CardHeader>
          <CardTitle>🩺 Surgeon&apos;s Note</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-300">
            Radioactive tracers used in PET scans contain specific isotopes.
            Understanding protons and neutrons helps surgeons interpret nuclear
            medicine imaging.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Challenges</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {CHALLENGES.map((c, i) => (
              <button
                key={c.name}
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
                Build: <strong className="text-white">{CHALLENGES[challengeIndex].name}</strong>
              </p>
              <button
                onClick={checkChallenge}
                className="mt-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Check Challenge
              </button>
              {challengeResult && (
                <p className="mt-2 text-sm font-medium">{challengeResult}</p>
              )}
            </motion.div>
          )}
        </CardContent>
      </Card>

      <Link href="/interactives/periodic-table">
        <Badge variant="outline" className="cursor-pointer hover:bg-slate-800">
          → Open Periodic Table
        </Badge>
      </Link>
    </div>
  );
}
