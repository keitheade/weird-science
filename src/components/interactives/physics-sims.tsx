"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ProjectileSim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [velocity, setVelocity] = useState(20);
  const [angle, setAngle] = useState(45);
  const [playing, setPlaying] = useState(false);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const g = 9.8;
    const rad = (angle * Math.PI) / 180;
    const vx = velocity * Math.cos(rad);
    const vy = velocity * Math.sin(rad);
    const totalTime = (2 * vy) / g;
    const maxRange = vx * totalTime;

    const w = canvas.width;
    const h = canvas.height;
    const scaleX = (w - 60) / Math.max(maxRange, 1);
    const scaleY = (h - 40) / Math.max((vy * vy) / (2 * g), 1);

    let t = 0;
    const draw = () => {
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, w, h);

      // Ground
      ctx.strokeStyle = "#334155";
      ctx.beginPath();
      ctx.moveTo(30, h - 20);
      ctx.lineTo(w - 10, h - 20);
      ctx.stroke();

      // Trajectory preview
      ctx.strokeStyle = "#6366f133";
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      for (let ti = 0; ti <= totalTime; ti += 0.05) {
        const x = 30 + vx * ti * scaleX;
        const y = h - 20 - (vy * ti - 0.5 * g * ti * ti) * scaleY;
        ti === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      if (playing && t <= totalTime) {
        const x = 30 + vx * t * scaleX;
        const y = h - 20 - (vy * t - 0.5 * g * t * t) * scaleY;

        ctx.fillStyle = "#818cf8";
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Velocity vector
        ctx.strokeStyle = "#22d3ee";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + vx * 0.5, y - (vy - g * t) * 0.5);
        ctx.stroke();

        t += 0.03;
        animRef.current = requestAnimationFrame(draw);
      } else if (t > totalTime) {
        setPlaying(false);
      }

      // Info
      ctx.fillStyle = "#94a3b8";
      ctx.font = "11px sans-serif";
      ctx.fillText(`Range: ${maxRange.toFixed(1)} m`, 10, 15);
      ctx.fillText(`Max height: ${((vy * vy) / (2 * g)).toFixed(1)} m`, 10, 30);
      ctx.fillText(`Flight time: ${totalTime.toFixed(2)} s`, 10, 45);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [velocity, angle, playing]);

  return (
    <div className="space-y-4">
      <canvas
        ref={canvasRef}
        width={600}
        height={300}
        className="w-full rounded-xl border border-slate-700 bg-slate-950"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm text-slate-400">
            Velocity: {velocity} m/s
          </label>
          <input
            type="range"
            min={5}
            max={50}
            value={velocity}
            onChange={(e) => setVelocity(+e.target.value)}
            className="w-full accent-indigo-500"
          />
        </div>
        <div>
          <label className="text-sm text-slate-400">Angle: {angle}°</label>
          <input
            type="range"
            min={0}
            max={90}
            value={angle}
            onChange={(e) => setAngle(+e.target.value)}
            className="w-full accent-indigo-500"
          />
        </div>
      </div>
      <Button onClick={() => setPlaying(true)} disabled={playing}>
        {playing ? "Flying..." : "Launch!"}
      </Button>
    </div>
  );
}

function ForcesSim() {
  const [mass, setMass] = useState(10);
  const [appliedForce, setAppliedForce] = useState(30);
  const [friction, setFriction] = useState(10);
  const netForce = appliedForce - friction;
  const acceleration = netForce / mass;

  return (
    <div className="space-y-4">
      <div className="relative h-32 overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
        <div
          className="absolute bottom-4 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white transition-transform duration-1000"
          style={{
            left: `${Math.min(80, Math.max(5, 5 + acceleration * 3))}%`,
          }}
        >
          {mass}kg
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-slate-700" />
        <div className="absolute left-1/4 top-4 text-cyan-400 text-sm">
          → {appliedForce}N
        </div>
        <div className="absolute right-1/4 top-4 text-rose-400 text-sm">
          ← {friction}N
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="text-sm text-slate-400">Mass: {mass} kg</label>
          <input type="range" min={1} max={50} value={mass} onChange={(e) => setMass(+e.target.value)} className="w-full accent-indigo-500" />
        </div>
        <div>
          <label className="text-sm text-slate-400">Applied force: {appliedForce} N</label>
          <input type="range" min={0} max={100} value={appliedForce} onChange={(e) => setAppliedForce(+e.target.value)} className="w-full accent-indigo-500" />
        </div>
        <div>
          <label className="text-sm text-slate-400">Friction: {friction} N</label>
          <input type="range" min={0} max={50} value={friction} onChange={(e) => setFriction(+e.target.value)} className="w-full accent-indigo-500" />
        </div>
      </div>
      <div className="rounded-xl bg-slate-800 p-4 font-mono text-sm">
        <p className="text-white">F_net = {appliedForce} − {friction} = <strong className="text-indigo-300">{netForce} N</strong></p>
        <p className="text-white">a = F/m = {netForce}/{mass} = <strong className="text-emerald-300">{acceleration.toFixed(2)} m/s²</strong></p>
      </div>
    </div>
  );
}

function CircuitSim() {
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(6);
  const current = voltage / resistance;
  const power = voltage * current;

  return (
    <div className="space-y-4">
      <div className="flex h-40 items-center justify-center rounded-xl border border-slate-700 bg-slate-950">
        <svg viewBox="0 0 300 120" className="w-full max-w-md">
          <rect x="20" y="20" width="260" height="80" fill="none" stroke="#475569" strokeWidth="2" rx="4" />
          <text x="40" y="55" fill="#fbbf24" fontSize="14">🔋 {voltage}V</text>
          <rect x="180" y="40" width="60" height="20" fill="#6366f1" rx="2" />
          <text x="190" y="55" fill="white" fontSize="10">{resistance}Ω</text>
          <text x="120" y="100" fill="#22d3ee" fontSize="12" textAnchor="middle">
            I = {current.toFixed(2)} A
          </text>
        </svg>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm text-slate-400">Voltage: {voltage} V</label>
          <input type="range" min={1} max={24} value={voltage} onChange={(e) => setVoltage(+e.target.value)} className="w-full accent-indigo-500" />
        </div>
        <div>
          <label className="text-sm text-slate-400">Resistance: {resistance} Ω</label>
          <input type="range" min={1} max={20} value={resistance} onChange={(e) => setResistance(+e.target.value)} className="w-full accent-indigo-500" />
        </div>
      </div>
      <div className="rounded-xl bg-slate-800 p-4 font-mono text-sm text-white">
        V = IR → I = {voltage}/{resistance} = <strong className="text-cyan-300">{current.toFixed(2)} A</strong>
        <br />
        P = VI = <strong className="text-amber-300">{power.toFixed(1)} W</strong>
      </div>
    </div>
  );
}

function WaveSim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [amplitude, setAmplitude] = useState(50);
  const [frequency, setFrequency] = useState(2);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let frame = 0;
    let animId: number;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "#6366f1";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const y =
          h / 2 +
          amplitude *
            Math.sin((2 * Math.PI * frequency * x) / w + phase + frame * 0.05);
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.fillStyle = "#94a3b8";
      ctx.font = "11px sans-serif";
      ctx.fillText(`λ ≈ ${(w / frequency).toFixed(0)} px`, 10, 15);
      ctx.fillText(`f = ${frequency} Hz`, 10, 30);

      frame++;
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, [amplitude, frequency, phase]);

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} width={600} height={200} className="w-full rounded-xl border border-slate-700" />
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="text-sm text-slate-400">Amplitude: {amplitude}</label>
          <input type="range" min={10} max={80} value={amplitude} onChange={(e) => setAmplitude(+e.target.value)} className="w-full accent-indigo-500" />
        </div>
        <div>
          <label className="text-sm text-slate-400">Frequency: {frequency} Hz</label>
          <input type="range" min={1} max={5} value={frequency} onChange={(e) => setFrequency(+e.target.value)} className="w-full accent-indigo-500" />
        </div>
        <div>
          <label className="text-sm text-slate-400">Phase shift</label>
          <input type="range" min={0} max={6.28} step={0.1} value={phase} onChange={(e) => setPhase(+e.target.value)} className="w-full accent-indigo-500" />
        </div>
      </div>
    </div>
  );
}

const SIMS = {
  projectile: { title: "Projectile Motion", component: ProjectileSim },
  forces: { title: "Forces & Newton's Laws", component: ForcesSim },
  circuit: { title: "Electric Circuits", component: CircuitSim },
  waves: { title: "Waves", component: WaveSim },
};

export function PhysicsSims() {
  const searchParams = useSearchParams();
  const initial = (searchParams.get("sim") as keyof typeof SIMS) || "projectile";
  const [active, setActive] = useState<keyof typeof SIMS>(
    SIMS[initial] ? initial : "projectile"
  );
  const Sim = SIMS[active].component;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Physics Labs</h1>
        <p className="text-slate-400">Adjust parameters and watch physics in action</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {(Object.keys(SIMS) as (keyof typeof SIMS)[]).map((key) => (
          <Button
            key={key}
            size="sm"
            variant={active === key ? "default" : "outline"}
            onClick={() => setActive(key)}
          >
            {SIMS[key].title}
          </Button>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{SIMS[active].title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Sim />
        </CardContent>
      </Card>
    </div>
  );
}
