import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  variant = "default",
  style,
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "outline";
  style?: React.CSSProperties;
}) {
  const variants = {
    default: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    success: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    warning: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    danger: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    outline: "bg-transparent text-slate-300 border-slate-600",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      style={style}
    >
      {children}
    </span>
  );
}
