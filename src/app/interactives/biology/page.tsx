"use client";

import { Suspense } from "react";
import { BiologyDiagrams } from "@/components/interactives/biology-diagrams";

export default function BiologyPage() {
  return (
    <Suspense fallback={<div className="animate-pulse h-64 rounded-2xl bg-slate-800" />}>
      <BiologyDiagrams />
    </Suspense>
  );
}
