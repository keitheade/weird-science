"use client";

import { Suspense } from "react";
import { PhysicsSims } from "@/components/interactives/physics-sims";

export default function PhysicsPage() {
  return (
    <Suspense fallback={<div className="animate-pulse h-64 rounded-2xl bg-slate-800" />}>
      <PhysicsSims />
    </Suspense>
  );
}
