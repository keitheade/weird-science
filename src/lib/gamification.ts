export const XP_PER_CORRECT = 15;
export const XP_PER_LESSON = 25;
export const XP_PER_STREAK_BONUS = 5;

export function xpForLevel(level: number): number {
  return Math.floor(100 * Math.pow(level, 1.5));
}

export function levelFromXp(xp: number): number {
  let level = 1;
  let remaining = xp;
  while (remaining >= xpForLevel(level)) {
    remaining -= xpForLevel(level);
    level += 1;
  }
  return level;
}

export function xpProgressInLevel(xp: number): {
  level: number;
  current: number;
  needed: number;
  percent: number;
} {
  const level = levelFromXp(xp);
  let spent = 0;
  for (let l = 1; l < level; l++) spent += xpForLevel(l);
  const current = xp - spent;
  const needed = xpForLevel(level);
  return {
    level,
    current,
    needed,
    percent: Math.min(100, Math.round((current / needed) * 100)),
  };
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isYesterday(a: Date, b: Date): boolean {
  const yesterday = new Date(b);
  yesterday.setDate(yesterday.getDate() - 1);
  return isSameDay(a, yesterday);
}

export function computeStreak(
  lastActive: Date | null,
  currentStreak: number,
  now = new Date()
): number {
  if (!lastActive) return 1;
  if (isSameDay(lastActive, now)) return currentStreak;
  if (isYesterday(lastActive, now)) return currentStreak + 1;
  return 1;
}
