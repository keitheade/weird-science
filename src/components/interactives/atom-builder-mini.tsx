"use client";

import { motion } from "framer-motion";
import {
  getElementByProtons,
  getElectronShells,
  getIonCharge,
} from "@/lib/periodic-table";
import { Button } from "@/components/ui/button";

export function AtomBuilderMini({
  protons,
  neutrons,
  electrons,
  onChange,
}: {
  protons: number;
  neutrons: number;
  electrons: number;
  onChange: (state: { protons: number; neutrons: number; electrons: number }) => void;
}) {
  const element = getElementByProtons(protons);
  const shells = getElectronShells(electrons);
  const ion = getIonCharge(protons, electrons);
  const mass = protons + neutrons;

  const adjust = (key: "protons" | "neutrons" | "electrons", delta: number) => {
    const next = { protons, neutrons, electrons };
    next[key] = Math.max(key === "protons" ? 1 : 0, next[key] + delta);
    if (key === "protons" && next.protons > 54) next.protons = 54;
    if (next.neutrons > 100) next.neutrons = 100;
    if (next.electrons > 54) next.electrons = 54;
    onChange(next);
  };

  // Shell radii must sit clearly outside the nucleus disc, or the inner ring is hidden.
  const nucleusRadius = 14;
  const shellBase = 38;
  const shellStep = 34;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-56 w-56">
        {shells.map((count, i) => {
          const radius = shellBase + i * shellStep;
          return (
            <motion.div
              key={i}
              className={`absolute rounded-full border-2 ${
                i === 0
                  ? "border-indigo-400/70"
                  : "border-indigo-500/40"
              }`}
              style={{
                width: radius * 2,
                height: radius * 2,
                left: "50%",
                top: "50%",
                marginLeft: -radius,
                marginTop: -radius,
                zIndex: i + 1,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 10 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {Array.from({ length: count }).map((_, j) => {
                const angle = (j / count) * 2 * Math.PI - Math.PI / 2;
                const orbit = radius * 0.92;
                const x = radius + orbit * Math.cos(angle) - 4;
                const y = radius + orbit * Math.sin(angle) - 4;
                return (
                  <div
                    key={j}
                    className="absolute h-2.5 w-2.5 rounded-full bg-cyan-400 shadow shadow-cyan-400/60"
                    style={{ left: x, top: y }}
                  />
                );
              })}
            </motion.div>
          );
        })}
        <div
          className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-orange-500 shadow-lg shadow-rose-500/40"
          style={{ width: nucleusRadius * 2, height: nucleusRadius * 2 }}
        >
          <span className="text-[9px] font-bold leading-none text-white">
            +{protons}
          </span>
        </div>
      </div>

      <div className="grid w-full grid-cols-3 gap-2 text-center text-sm">
        <div className="rounded-xl bg-slate-800 p-2">
          <p className="text-xs text-slate-400">Protons</p>
          <div className="mt-1 flex items-center justify-center gap-1">
            <Button size="sm" variant="ghost" onClick={() => adjust("protons", -1)}>−</Button>
            <span className="font-bold text-rose-300">{protons}</span>
            <Button size="sm" variant="ghost" onClick={() => adjust("protons", 1)}>+</Button>
          </div>
        </div>
        <div className="rounded-xl bg-slate-800 p-2">
          <p className="text-xs text-slate-400">Neutrons</p>
          <div className="mt-1 flex items-center justify-center gap-1">
            <Button size="sm" variant="ghost" onClick={() => adjust("neutrons", -1)}>−</Button>
            <span className="font-bold text-slate-300">{neutrons}</span>
            <Button size="sm" variant="ghost" onClick={() => adjust("neutrons", 1)}>+</Button>
          </div>
        </div>
        <div className="rounded-xl bg-slate-800 p-2">
          <p className="text-xs text-slate-400">Electrons</p>
          <div className="mt-1 flex items-center justify-center gap-1">
            <Button size="sm" variant="ghost" onClick={() => adjust("electrons", -1)}>−</Button>
            <span className="font-bold text-cyan-300">{electrons}</span>
            <Button size="sm" variant="ghost" onClick={() => adjust("electrons", 1)}>+</Button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-2xl font-black text-white">
          {element?.name ?? "Unknown"} ({element?.symbol ?? "?"})
        </p>
        <p className="text-sm text-slate-400">
          Mass: {mass} · Ion: {ion}
        </p>
      </div>
    </div>
  );
}
