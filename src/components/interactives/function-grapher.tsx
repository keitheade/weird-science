"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type FuncType = "linear" | "quadratic" | "cubic" | "sine";

const FUNCTIONS: Record<
  FuncType,
  { label: string; fn: (x: number, a: number, b: number, c: number) => number; formula: (a: number, b: number, c: number) => string }
> = {
  linear: {
    label: "Linear: y = ax + b",
    fn: (x, a, b) => a * x + b,
    formula: (a, b) => `y = ${a}x + ${b}`,
  },
  quadratic: {
    label: "Quadratic: y = ax² + bx + c",
    fn: (x, a, b, c) => a * x * x + b * x + c,
    formula: (a, b, c) => `y = ${a}x² + ${b}x + ${c}`,
  },
  cubic: {
    label: "Cubic: y = ax³",
    fn: (x, a) => a * x * x * x,
    formula: (a) => `y = ${a}x³`,
  },
  sine: {
    label: "Sine: y = a·sin(bx)",
    fn: (x, a, b) => a * Math.sin(b * x),
    formula: (a, b) => `y = ${a}·sin(${b}x)`,
  },
};

export function FunctionGrapher() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [funcType, setFuncType] = useState<FuncType>("quadratic");
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(-4);
  const [showDerivative, setShowDerivative] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const xMin = -5;
    const xMax = 5;
    const yMin = -10;
    const yMax = 10;

    const toX = (x: number) => ((x - xMin) / (xMax - xMin)) * w;
    const toY = (y: number) => h - ((y - yMin) / (yMax - yMin)) * h;

    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, w, h);

    // Grid
    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 1;
    for (let x = xMin; x <= xMax; x++) {
      ctx.beginPath();
      ctx.moveTo(toX(x), 0);
      ctx.lineTo(toX(x), h);
      ctx.stroke();
    }
    for (let y = yMin; y <= yMax; y++) {
      ctx.beginPath();
      ctx.moveTo(0, toY(y));
      ctx.lineTo(w, toY(y));
      ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, toY(0));
    ctx.lineTo(w, toY(0));
    ctx.moveTo(toX(0), 0);
    ctx.lineTo(toX(0), h);
    ctx.stroke();

    const fn = FUNCTIONS[funcType].fn;

    // Function curve
    ctx.strokeStyle = "#818cf8";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let px = 0; px < w; px++) {
      const x = xMin + (px / w) * (xMax - xMin);
      const y = fn(x, a, b, c);
      if (y >= yMin && y <= yMax) {
        px === 0 ? ctx.moveTo(px, toY(y)) : ctx.lineTo(px, toY(y));
      }
    }
    ctx.stroke();

    // Derivative for quadratic
    if (showDerivative && funcType === "quadratic") {
      ctx.strokeStyle = "#22d3ee";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      for (let px = 0; px < w; px++) {
        const x = xMin + (px / w) * (xMax - xMin);
        const y = 2 * a * x + b;
        if (y >= yMin && y <= yMax) {
          px === 0 ? ctx.moveTo(px, toY(y)) : ctx.lineTo(px, toY(y));
        }
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Formula
    ctx.fillStyle = "#e2e8f0";
    ctx.font = "bold 14px sans-serif";
    const formula =
      funcType === "cubic"
        ? FUNCTIONS.cubic.formula(a, b, c)
        : funcType === "sine"
          ? FUNCTIONS.sine.formula(a, b, c)
          : funcType === "linear"
            ? FUNCTIONS.linear.formula(a, b, c)
            : FUNCTIONS.quadratic.formula(a, b, c);
    ctx.fillText(formula, 10, 20);
    if (showDerivative && funcType === "quadratic") {
      ctx.fillStyle = "#22d3ee";
      ctx.fillText(`dy/dx = ${2 * a}x + ${b}`, 10, 38);
    }
  }, [funcType, a, b, c, showDerivative]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Function Grapher</h1>
        <p className="text-slate-400">
          Visualise how changing parameters affects graphs — essential for Methods
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {(Object.keys(FUNCTIONS) as FuncType[]).map((key) => (
          <Button
            key={key}
            size="sm"
            variant={funcType === key ? "default" : "outline"}
            onClick={() => setFuncType(key)}
          >
            {FUNCTIONS[key].label.split(":")[0]}
          </Button>
        ))}
      </div>

      <Card>
        <CardContent className="p-4">
          <canvas
            ref={canvasRef}
            width={600}
            height={400}
            className="w-full rounded-xl border border-slate-700"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Parameters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm text-slate-400">a = {a}</label>
            <input type="range" min={-3} max={3} step={0.1} value={a} onChange={(e) => setA(+e.target.value)} className="w-full accent-indigo-500" />
          </div>
          {funcType !== "cubic" && (
            <div>
              <label className="text-sm text-slate-400">b = {b}</label>
              <input type="range" min={-5} max={5} step={0.1} value={b} onChange={(e) => setB(+e.target.value)} className="w-full accent-indigo-500" />
            </div>
          )}
          {(funcType === "quadratic" || funcType === "linear") && funcType === "quadratic" && (
            <div>
              <label className="text-sm text-slate-400">c = {c}</label>
              <input type="range" min={-10} max={10} step={0.1} value={c} onChange={(e) => setC(+e.target.value)} className="w-full accent-indigo-500" />
            </div>
          )}
          {funcType === "quadratic" && (
            <Button
              size="sm"
              variant={showDerivative ? "default" : "outline"}
              onClick={() => setShowDerivative(!showDerivative)}
            >
              {showDerivative ? "Hide" : "Show"} Derivative (dy/dx)
            </Button>
          )}
        </CardContent>
      </Card>

      <Card className="border-amber-500/30 bg-amber-950/20">
        <CardContent className="p-5">
          <p className="text-sm font-semibold text-amber-300">🩺 Medical Application</p>
          <p className="mt-1 text-sm text-slate-300">
            Drug concentration in blood often follows quadratic or exponential curves.
            Calculus (derivatives) tells surgeons the rate at which anaesthetic
            wears off during long operations.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
