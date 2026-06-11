export function calculateMasteryScore(correct: number, attempts: number): number {
  if (attempts === 0) return 0;
  const accuracy = correct / attempts;
  const confidence = Math.min(1, attempts / 10);
  return Math.round(accuracy * confidence * 100);
}

export function masteryLabel(score: number): string {
  if (score >= 90) return "Expert";
  if (score >= 75) return "Proficient";
  if (score >= 50) return "Developing";
  if (score >= 25) return "Emerging";
  return "Needs practice";
}

export function masteryColor(score: number): string {
  if (score >= 90) return "#22c55e";
  if (score >= 75) return "#84cc16";
  if (score >= 50) return "#eab308";
  if (score >= 25) return "#f97316";
  return "#ef4444";
}
