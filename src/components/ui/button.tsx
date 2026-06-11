import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 focus-visible:ring-indigo-500",
        secondary:
          "bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700 focus-visible:ring-slate-500",
        outline:
          "border border-slate-600 bg-transparent text-slate-100 hover:bg-slate-800 focus-visible:ring-slate-500",
        ghost: "text-slate-200 hover:bg-slate-800 focus-visible:ring-slate-500",
        success:
          "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-500",
        danger: "bg-rose-600 text-white hover:bg-rose-500",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";
