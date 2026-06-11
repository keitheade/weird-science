"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export function Celebration({
  show,
  message,
  onDone,
}: {
  show: boolean;
  message: string;
  onDone?: () => void;
}) {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => onDone?.(), 3000);
    return () => clearTimeout(timer);
  }, [show, onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: 3, duration: 0.5 }}
            className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-center shadow-2xl"
          >
            <p className="text-6xl">🎉</p>
            <p className="mt-4 text-2xl font-black text-white">{message}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function playSuccessSound() {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(523, ctx.currentTime);
    osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
    osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.4);
  } catch {
    // Audio not available
  }
}
