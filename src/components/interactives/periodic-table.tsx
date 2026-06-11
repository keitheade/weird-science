"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ELEMENTS,
  CATEGORY_COLORS,
  CATEGORY_LABELS,
  getGridPosition,
  type Element,
  type ElementCategory,
} from "@/lib/periodic-table";

type FilterType =
  | "all"
  | "metals"
  | "nonmetals"
  | "metalloids"
  | "noble"
  | "halogen"
  | "reactive"
  | "synthetic";

const FILTERS: { id: FilterType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "metals", label: "Metals" },
  { id: "nonmetals", label: "Non-metals" },
  { id: "metalloids", label: "Metalloids" },
  { id: "noble", label: "Noble (inert) gases" },
  { id: "halogen", label: "Halogens" },
  { id: "reactive", label: "Highly reactive" },
  { id: "synthetic", label: "Man-made (synthetic)" },
];

function matchesFilter(el: Element, filter: FilterType): boolean {
  if (filter === "all") return true;
  if (filter === "metals")
    return [
      "alkali",
      "alkaline",
      "transition",
      "post-transition",
      "lanthanide",
      "actinide",
    ].includes(el.category);
  if (filter === "nonmetals") return el.category === "nonmetal";
  if (filter === "metalloids") return el.category === "metalloid";
  if (filter === "noble") return el.category === "noble";
  if (filter === "halogen") return el.category === "halogen";
  if (filter === "reactive") return ["alkali", "halogen"].includes(el.category);
  if (filter === "synthetic") return !!el.synthetic;
  return true;
}

const GROUP_LABELS = Array.from({ length: 18 }, (_, i) => i + 1);

export function PeriodicTable() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [selected, setSelected] = useState<Element | null>(null);

  const isDimmed = (el: Element) => filter !== "all" && !matchesFilter(el, filter);

  const lanthActive =
    filter === "all" ||
    ELEMENTS.some((e) => e.category === "lanthanide" && matchesFilter(e, filter));
  const actActive =
    filter === "all" ||
    ELEMENTS.some((e) => e.category === "actinide" && matchesFilter(e, filter));

  const renderCell = (el: Element) => {
    const { row, col } = getGridPosition(el);
    const dimmed = isDimmed(el);
    return (
      <motion.button
        key={el.atomicNumber}
        onClick={() => setSelected(el)}
        style={{
          gridColumn: col,
          gridRow: row,
          backgroundColor: dimmed
            ? "rgba(30,41,59,0.4)"
            : `${CATEGORY_COLORS[el.category]}22`,
          borderColor: dimmed
            ? "rgba(51,65,85,0.5)"
            : `${CATEGORY_COLORS[el.category]}66`,
        }}
        className="group relative flex aspect-square min-w-0 flex-col items-center justify-center rounded-[3px] border p-0.5 transition-all hover:z-10 hover:scale-[1.18] hover:shadow-lg"
        whileTap={{ scale: 0.95 }}
        title={el.name}
      >
        <span
          className={`text-[6px] leading-none sm:text-[8px] ${
            dimmed ? "text-slate-600" : "text-slate-400"
          }`}
        >
          {el.atomicNumber}
        </span>
        <span
          className="text-[8px] font-black leading-tight sm:text-sm"
          style={{
            color: dimmed ? "#475569" : CATEGORY_COLORS[el.category],
          }}
        >
          {el.symbol}
        </span>
        <span
          className={`hidden truncate text-[5px] leading-none lg:block ${
            dimmed ? "text-slate-700" : "text-slate-500"
          }`}
        >
          {el.name}
        </span>
        {el.synthetic && !dimmed && (
          <span className="absolute right-0.5 top-0.5 text-[5px] text-amber-400 sm:text-[7px]">
            *
          </span>
        )}
      </motion.button>
    );
  };

  const mainElements = ELEMENTS.filter(
    (e) => e.category !== "lanthanide" && e.category !== "actinide"
  );
  const lanthanides = ELEMENTS.filter((e) => e.category === "lanthanide");
  const actinides = ELEMENTS.filter((e) => e.category === "actinide");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Periodic Table</h1>
        <p className="text-slate-400">
          All 118 elements · Correct group &amp; period layout · Tap to explore
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
              filter === f.id
                ? "border-indigo-500 bg-indigo-500/20 text-indigo-200"
                : "border-slate-700 text-slate-400 hover:border-slate-600"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="min-w-[640px] space-y-1">
          {/* Group number header */}
          <div
            className="grid gap-0.5"
            style={{
              gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
            }}
          >
            {GROUP_LABELS.map((g) => (
              <div
                key={g}
                className="text-center text-[7px] text-slate-500 sm:text-[9px]"
              >
                {g}
              </div>
            ))}
          </div>

          {/* Main table grid */}
          <div
            className="grid gap-0.5"
            style={{
              gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
              gridTemplateRows: "repeat(7, auto)",
            }}
          >
            {mainElements.map(renderCell)}

            {/* Placeholder markers in group 3 for the f-block */}
            <div
              style={{ gridColumn: 3, gridRow: 6 }}
              className={`flex aspect-square items-center justify-center rounded-[3px] border text-[6px] font-bold sm:text-[8px] ${
                lanthActive
                  ? "border-pink-500/40 bg-pink-500/10 text-pink-300"
                  : "border-slate-700/50 bg-slate-800/40 text-slate-600"
              }`}
            >
              57-71
            </div>
            <div
              style={{ gridColumn: 3, gridRow: 7 }}
              className={`flex aspect-square items-center justify-center rounded-[3px] border text-[6px] font-bold sm:text-[8px] ${
                actActive
                  ? "border-rose-500/40 bg-rose-500/10 text-rose-300"
                  : "border-slate-700/50 bg-slate-800/40 text-slate-600"
              }`}
            >
              89-103
            </div>
          </div>

          {/* f-block strip */}
          <div
            className="mt-2 grid gap-0.5"
            style={{
              gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
              gridTemplateRows: "repeat(2, auto)",
            }}
          >
            {[...lanthanides, ...actinides].map((el) => {
              const isLanth = el.category === "lanthanide";
              const col = isLanth
                ? 3 + (el.atomicNumber - 57)
                : 3 + (el.atomicNumber - 89);
              const dimmed = isDimmed(el);
              return (
                <motion.button
                  key={el.atomicNumber}
                  onClick={() => setSelected(el)}
                  style={{
                    gridColumn: col,
                    gridRow: isLanth ? 1 : 2,
                    backgroundColor: dimmed
                      ? "rgba(30,41,59,0.4)"
                      : `${CATEGORY_COLORS[el.category]}22`,
                    borderColor: dimmed
                      ? "rgba(51,65,85,0.5)"
                      : `${CATEGORY_COLORS[el.category]}66`,
                  }}
                  className="relative flex aspect-square min-w-0 flex-col items-center justify-center rounded-[3px] border p-0.5 transition-all hover:z-10 hover:scale-[1.18] hover:shadow-lg"
                  whileTap={{ scale: 0.95 }}
                  title={el.name}
                >
                  <span
                    className={`text-[6px] leading-none sm:text-[8px] ${
                      dimmed ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    {el.atomicNumber}
                  </span>
                  <span
                    className="text-[8px] font-black leading-tight sm:text-sm"
                    style={{
                      color: dimmed ? "#475569" : CATEGORY_COLORS[el.category],
                    }}
                  >
                    {el.symbol}
                  </span>
                  {el.synthetic && !dimmed && (
                    <span className="absolute right-0.5 top-0.5 text-[5px] text-amber-400 sm:text-[7px]">
                      *
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-500">
        <span className="text-amber-400">*</span> = man-made (synthetic) element,
        not found naturally on Earth.
      </p>

      <div className="flex flex-wrap gap-3">
        {(Object.keys(CATEGORY_LABELS) as ElementCategory[])
          .filter((c) => c !== "unknown")
          .map((cat) => (
            <div
              key={cat}
              className="flex items-center gap-1.5 text-xs text-slate-400"
            >
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: CATEGORY_COLORS[cat] }}
              />
              {CATEGORY_LABELS[cat]}
            </div>
          ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Card
              style={{
                borderColor: `${CATEGORY_COLORS[selected.category]}60`,
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-4xl font-black text-white">
                      {selected.name}
                    </p>
                    <p
                      className="text-2xl font-bold"
                      style={{ color: CATEGORY_COLORS[selected.category] }}
                    >
                      {selected.symbol}
                    </p>
                    {selected.synthetic && (
                      <Badge variant="warning" className="mt-2">
                        Man-made (synthetic)
                      </Badge>
                    )}
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-slate-500 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                  <div>
                    <p className="text-slate-500">Atomic number</p>
                    <p className="font-bold text-white">
                      {selected.atomicNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Atomic mass</p>
                    <p className="font-bold text-white">{selected.mass}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Group</p>
                    <p className="font-bold text-white">
                      {selected.category === "lanthanide" ||
                      selected.category === "actinide"
                        ? "f-block"
                        : selected.group}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Period</p>
                    <p className="font-bold text-white">{selected.period}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Category</p>
                    <p className="font-bold text-white">
                      {CATEGORY_LABELS[selected.category]}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">State (STP)</p>
                    <p className="font-bold capitalize text-white">
                      {selected.state}
                    </p>
                  </div>
                  {selected.electronegativity && (
                    <div>
                      <p className="text-slate-500">Electronegativity</p>
                      <p className="font-bold text-white">
                        {selected.electronegativity}
                      </p>
                    </div>
                  )}
                </div>
                <Link
                  href="/interactives/atom-builder"
                  className="mt-4 inline-block"
                >
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-slate-800"
                  >
                    Build this atom in Atom Builder →
                  </Badge>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
