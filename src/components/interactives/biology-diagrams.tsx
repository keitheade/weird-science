"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { shuffle } from "@/lib/utils";

// Coordinates are percentages of the cell image, calibrated to
// public/images/animal-cell.png.
const CELL_LABELS = [
  { id: "membrane", name: "Cell membrane", x: 50, y: 14, fact: "the outer barrier that controls what enters and leaves the cell." },
  { id: "nucleus", name: "Nucleus", x: 43, y: 39, fact: "the control centre that contains the cell's DNA." },
  { id: "nucleolus", name: "Nucleolus", x: 50, y: 43, fact: "the dense region inside the nucleus where ribosomes are made." },
  { id: "mitochondria", name: "Mitochondria", x: 62, y: 20, fact: "the powerhouse of the cell — it produces ATP energy." },
  { id: "endoplasmic-reticulum", name: "Endoplasmic reticulum", x: 38, y: 58, fact: "a folded network that transports and processes proteins and lipids." },
  { id: "golgi", name: "Golgi apparatus", x: 57, y: 69, fact: "packages and ships proteins, like the cell's post office." },
  { id: "ribosome", name: "Ribosome", x: 27, y: 35, fact: "tiny structures that build proteins from amino acids." },
  { id: "centriole", name: "Centriole", x: 27, y: 46, fact: "helps organise the spindle fibres during cell division." },
  { id: "vesicle", name: "Vesicle", x: 43, y: 74, fact: "a small sac that stores and transports materials within the cell." },
];

// Coordinates are percentages of the heart image, calibrated to
// public/images/heart-anatomy.png (anterior cutaway view).
const HEART_LABELS = [
  { id: "aorta", name: "Aorta", x: 48, y: 16, fact: "the body's largest artery, carrying oxygenated blood from the left ventricle." },
  { id: "superior-vena-cava", name: "Superior vena cava", x: 34, y: 23, fact: "returns deoxygenated blood from the upper body to the right atrium." },
  { id: "pulmonary-artery", name: "Pulmonary artery", x: 62, y: 27, fact: "carries deoxygenated blood from the right ventricle to the lungs." },
  { id: "right-atrium", name: "Right atrium", x: 36, y: 42, fact: "receives deoxygenated blood returning from the body." },
  { id: "left-atrium", name: "Left atrium", x: 62, y: 41, fact: "receives oxygenated blood returning from the lungs." },
  { id: "right-ventricle", name: "Right ventricle", x: 42, y: 66, fact: "pumps deoxygenated blood to the lungs." },
  { id: "left-ventricle", name: "Left ventricle", x: 61, y: 64, fact: "the thickest chamber — pumps oxygenated blood to the whole body." },
  { id: "septum", name: "Septum", x: 51, y: 66, fact: "the muscular wall separating the left and right sides of the heart." },
];

function CellDiagram() {
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  // Randomise the order structures are asked for so it can't be rote-learned.
  const [order, setOrder] = useState(() => shuffle(CELL_LABELS));
  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState("");
  const target = order[step];

  const checkLabel = (label: typeof CELL_LABELS[0]) => {
    if (label.id === target.id) {
      setFeedback(`✅ Correct! The ${target.name} — ${target.fact}`);
      setScore((s) => s + 1);
      if (step + 1 >= order.length) {
        setOrder(shuffle(CELL_LABELS));
        setStep(0);
      } else {
        setStep((s) => s + 1);
      }
    } else {
      setFeedback(`❌ That's the ${label.name}. Try again!`);
    }
    setSelected(label.id);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-indigo-300">
        Tap to label: <strong className="text-white">{target.name}</strong>
      </p>
      <div className="relative mx-auto aspect-[3/2] w-full max-w-xl overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/animal-cell.png"
          alt="Labelled diagram of an animal cell and its organelles"
          className="absolute inset-0 h-full w-full object-contain"
          draggable={false}
        />
        {CELL_LABELS.map((l) => {
          const isSelected = selected === l.id;
          return (
            <button
              key={l.id}
              onClick={() => checkLabel(l)}
              style={{ left: `${l.x}%`, top: `${l.y}%` }}
              className={`absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all hover:scale-110 sm:h-9 sm:w-9 ${
                isSelected
                  ? "border-white bg-white/25"
                  : "border-white/50 bg-white/5 hover:border-white hover:bg-white/15"
              }`}
              aria-label={`Label ${l.name}`}
              title="Tap to label"
            >
              <span className="block h-full w-full rounded-full" />
            </button>
          );
        })}
      </div>
      {feedback && (
        <motion.div
          key={feedback}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-[3rem] rounded-xl border border-slate-700 bg-slate-900/90 p-3 text-sm text-slate-200"
        >
          {feedback}
        </motion.div>
      )}
      <Badge variant="success">
        Score: {score}/{CELL_LABELS.length}
      </Badge>
      <p className="text-xs text-slate-500">
        Tap the marker over each organelle to label it.
      </p>
    </div>
  );
}

function HeartDiagram() {
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  // Randomise the order structures are asked for so it can't be rote-learned.
  const [order, setOrder] = useState(() => shuffle(HEART_LABELS));
  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState("");
  const target = order[step];

  const checkLabel = (label: typeof HEART_LABELS[0]) => {
    if (label.id === target.id) {
      setFeedback(`✅ Correct! The ${target.name} — ${target.fact}`);
      setScore((s) => s + 1);
      if (step + 1 >= order.length) {
        setOrder(shuffle(HEART_LABELS));
        setStep(0);
      } else {
        setStep((s) => s + 1);
      }
    } else {
      setFeedback(`❌ That's the ${label.name}. Try again!`);
    }
    setSelected(label.id);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-rose-300">
        🫀 Tap to label: <strong className="text-white">{target.name}</strong>
      </p>
      <div className="relative mx-auto aspect-[3/2] w-full max-w-xl overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/heart-anatomy.png"
          alt="Anatomical diagram of the human heart, anterior view"
          className="absolute inset-0 h-full w-full object-contain"
          draggable={false}
        />
        {HEART_LABELS.map((l) => {
          const isSelected = selected === l.id;
          return (
            <button
              key={l.id}
              onClick={() => checkLabel(l)}
              style={{ left: `${l.x}%`, top: `${l.y}%` }}
              className={`absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all hover:scale-110 sm:h-10 sm:w-10 ${
                isSelected
                  ? "border-white bg-white/25"
                  : "border-white/50 bg-white/5 hover:border-white hover:bg-white/15"
              }`}
              aria-label={`Label ${l.name}`}
              title="Tap to label"
            >
              <span className="block h-full w-full rounded-full" />
            </button>
          );
        })}
      </div>
      {feedback && (
        <motion.div
          key={feedback}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-[3rem] rounded-xl border border-slate-700 bg-slate-900/90 p-3 text-sm text-slate-200"
        >
          {feedback}
        </motion.div>
      )}
      <Badge variant="success">
        Score: {score}/{HEART_LABELS.length}
      </Badge>
      <p className="text-xs text-slate-500">
        Anterior view. Note: the heart&apos;s left side appears on your right.
        Tap the marker over each structure. Cardiac surgeons master every
        chamber and vessel.
      </p>
    </div>
  );
}

const ORGAN_LABELS = [
  { id: "brain", name: "Brain", color: "#f0abfc", fact: "the control centre of the nervous system — surgeons operate here in neurosurgery." },
  { id: "lungs", name: "Lungs", color: "#fda4af", fact: "where oxygen enters the blood and carbon dioxide is removed." },
  { id: "heart", name: "Heart", color: "#e11d48", fact: "pumps blood around the body — the focus of cardiac surgery." },
  { id: "liver", name: "Liver", color: "#92400e", fact: "filters toxins, makes bile, and processes nutrients and drugs." },
  { id: "stomach", name: "Stomach", color: "#fb923c", fact: "uses acid and enzymes to begin digesting food." },
  { id: "kidneys", name: "Kidneys", color: "#7c3aed", fact: "filter blood to make urine and balance body fluids." },
  { id: "small-intestine", name: "Small intestine", color: "#fbbf24", fact: "where most nutrients are absorbed into the blood." },
  { id: "large-intestine", name: "Large intestine", color: "#34d399", fact: "absorbs water and forms waste — site of appendix and colon surgery." },
  { id: "bladder", name: "Bladder", color: "#fde047", fact: "stores urine until it is passed from the body." },
];

function OrganSystemsDiagram() {
  const [score, setScore] = useState(0);
  const [order, setOrder] = useState(() => shuffle(ORGAN_LABELS));
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");
  const target = order[step];

  const checkLabel = (id: string) => {
    const label = ORGAN_LABELS.find((o) => o.id === id)!;
    if (id === target.id) {
      setFeedback(`✅ Correct! The ${target.name} — ${target.fact}`);
      setScore((s) => s + 1);
      if (step + 1 >= order.length) {
        setOrder(shuffle(ORGAN_LABELS));
        setStep(0);
      } else {
        setStep((s) => s + 1);
      }
    } else {
      setFeedback(`❌ That's the ${label.name}. Try again!`);
    }
    setSelected(id);
  };

  const fill = (id: string) => ORGAN_LABELS.find((o) => o.id === id)?.color ?? "#64748b";
  const stroke = (id: string) => (selected === id ? "#ffffff" : "rgba(255,255,255,0.3)");
  const sw = (id: string) => (selected === id ? 2.5 : 0.8);

  return (
    <div className="space-y-4">
      <p className="text-sm text-emerald-300">
        Tap to label: <strong className="text-white">{target.name}</strong>
      </p>
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-2">
        <svg viewBox="0 0 200 360" className="h-auto w-full">
          {/* Body outline */}
          <g fill="#1e293b" stroke="#334155" strokeWidth={1.5}>
            <circle cx={100} cy={32} r={22} />
            <rect x={92} y={50} width={16} height={14} />
            <path d="M58 70 Q100 56 142 70 L138 208 Q100 224 62 208 Z" />
            <path d="M62 204 L138 204 L132 256 Q100 270 68 256 Z" />
            <rect x={72} y={256} width={24} height={92} rx={10} />
            <rect x={104} y={256} width={24} height={92} rx={10} />
            <path d="M60 74 L38 150 L46 153 L66 92 Z" />
            <path d="M140 74 L162 150 L154 153 L134 92 Z" />
          </g>

          {/* Organs (clickable). Note: anatomical left appears on the right. */}
          {/* Brain */}
          <ellipse cx={100} cy={30} rx={16} ry={13} fill={fill("brain")} stroke={stroke("brain")} strokeWidth={sw("brain")} cursor="pointer" onClick={() => checkLabel("brain")} />

          {/* Lungs */}
          <g cursor="pointer" onClick={() => checkLabel("lungs")}>
            <ellipse cx={80} cy={118} rx={15} ry={28} fill={fill("lungs")} stroke={stroke("lungs")} strokeWidth={sw("lungs")} />
            <ellipse cx={122} cy={118} rx={15} ry={28} fill={fill("lungs")} stroke={stroke("lungs")} strokeWidth={sw("lungs")} />
          </g>

          {/* Heart */}
          <path d="M101 116 Q92 106 86 116 Q82 124 101 138 Q120 124 116 116 Q110 106 101 116 Z" fill={fill("heart")} stroke={stroke("heart")} strokeWidth={sw("heart")} cursor="pointer" onClick={() => checkLabel("heart")} />

          {/* Liver */}
          <path d="M64 150 Q100 144 116 158 Q98 172 66 168 Z" fill={fill("liver")} stroke={stroke("liver")} strokeWidth={sw("liver")} cursor="pointer" onClick={() => checkLabel("liver")} />

          {/* Stomach */}
          <path d="M120 148 Q136 150 130 166 Q121 174 113 166 Q110 156 120 148 Z" fill={fill("stomach")} stroke={stroke("stomach")} strokeWidth={sw("stomach")} cursor="pointer" onClick={() => checkLabel("stomach")} />

          {/* Kidneys */}
          <g cursor="pointer" onClick={() => checkLabel("kidneys")}>
            <path d="M74 182 Q66 188 70 198 Q78 200 78 190 Q78 184 74 182 Z" fill={fill("kidneys")} stroke={stroke("kidneys")} strokeWidth={sw("kidneys")} />
            <path d="M126 182 Q134 188 130 198 Q122 200 122 190 Q122 184 126 182 Z" fill={fill("kidneys")} stroke={stroke("kidneys")} strokeWidth={sw("kidneys")} />
          </g>

          {/* Large intestine (frame around small intestine) */}
          <g cursor="pointer" onClick={() => checkLabel("large-intestine")}>
            <rect x={70} y={200} width={10} height={48} rx={4} fill={fill("large-intestine")} stroke={stroke("large-intestine")} strokeWidth={sw("large-intestine")} />
            <rect x={70} y={200} width={60} height={10} rx={4} fill={fill("large-intestine")} stroke={stroke("large-intestine")} strokeWidth={sw("large-intestine")} />
            <rect x={120} y={200} width={10} height={48} rx={4} fill={fill("large-intestine")} stroke={stroke("large-intestine")} strokeWidth={sw("large-intestine")} />
          </g>

          {/* Small intestine */}
          <ellipse cx={100} cy={226} rx={17} ry={17} fill={fill("small-intestine")} stroke={stroke("small-intestine")} strokeWidth={sw("small-intestine")} cursor="pointer" onClick={() => checkLabel("small-intestine")} />

          {/* Bladder */}
          <ellipse cx={100} cy={256} rx={10} ry={9} fill={fill("bladder")} stroke={stroke("bladder")} strokeWidth={sw("bladder")} cursor="pointer" onClick={() => checkLabel("bladder")} />
        </svg>
      </div>
      {feedback && (
        <motion.div
          key={feedback}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-[3rem] rounded-xl border border-slate-700 bg-slate-900/90 p-3 text-sm text-slate-200"
        >
          {feedback}
        </motion.div>
      )}
      <Badge variant="success">
        Score: {score}/{ORGAN_LABELS.length}
      </Badge>
      <p className="text-xs text-slate-500">
        Front view — the body&apos;s left side appears on your right. Tap each
        organ. Surgeons memorise the position of every organ for safe operating.
      </p>
    </div>
  );
}

const DIAGRAMS = {
  cell: { title: "Animal Cell", component: CellDiagram },
  heart: { title: "Human Heart", component: HeartDiagram },
  organs: { title: "Organ Systems", component: OrganSystemsDiagram },
};

export function BiologyDiagrams() {
  const searchParams = useSearchParams();
  const initial = (searchParams.get("sim") as keyof typeof DIAGRAMS) || "cell";
  const [active, setActive] = useState<keyof typeof DIAGRAMS>(
    DIAGRAMS[initial] ? initial : "cell"
  );
  const Diagram = DIAGRAMS[active].component;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Biology Labs</h1>
        <p className="text-slate-400">Interactive anatomy & cell biology</p>
      </div>

      <div className="flex gap-2">
        {(Object.keys(DIAGRAMS) as (keyof typeof DIAGRAMS)[]).map((key) => (
          <Button
            key={key}
            size="sm"
            variant={active === key ? "default" : "outline"}
            onClick={() => setActive(key)}
          >
            {DIAGRAMS[key].title}
          </Button>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{DIAGRAMS[active].title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Diagram />
        </CardContent>
      </Card>
    </div>
  );
}
