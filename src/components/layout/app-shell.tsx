"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Brain,
  FlaskConical,
  LayoutDashboard,
  Menu,
  Route,
  Settings,
  X,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useProfileStore } from "@/stores/profile-store";
import { Badge } from "@/components/ui/badge";

const iconMap = {
  LayoutDashboard,
  BookOpen,
  Brain,
  FlaskConical,
  Route,
  Settings,
};

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "LayoutDashboard" as const },
  { href: "/learn", label: "Learn", icon: "BookOpen" as const },
  { href: "/quiz", label: "Quiz", icon: "Brain" as const },
  { href: "/interactives", label: "Labs", icon: "FlaskConical" as const },
  { href: "/pathway", label: "Pathway", icon: "Route" as const },
  { href: "/settings", label: "Settings", icon: "Settings" as const },
];

export function AppShell({
  children,
  profileName,
  profileAvatar,
  level,
  streak,
}: {
  children: React.ReactNode;
  profileName?: string;
  profileAvatar?: string;
  level?: number;
  streak?: number;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setActiveProfile } = useProfileStore();

  const isProfilesPage = pathname === "/profiles";

  if (isProfilesPage) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <button
              className="rounded-lg p-2 hover:bg-slate-800 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Link href="/dashboard" className="flex items-center gap-2">
              <span className="text-2xl">🧪</span>
              <div>
                <p className="text-sm font-bold leading-none">Weird Science</p>
                <p className="text-[10px] text-indigo-300">Pathway to Surgery</p>
              </div>
            </Link>
          </div>

          {profileName && (
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 sm:flex">
                <Badge variant="outline">Lv {level ?? 1}</Badge>
                <Badge variant="warning">🔥 {streak ?? 0}</Badge>
              </div>
              <button
                onClick={() => setActiveProfile(null)}
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm hover:bg-slate-800"
              >
                <span className="text-lg">{profileAvatar ?? "🧬"}</span>
                <span className="hidden sm:inline">{profileName}</span>
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-30 w-64 transform border-r border-slate-800 bg-slate-950 p-4 pt-20 transition-transform lg:static lg:translate-x-0 lg:border-0 lg:bg-transparent lg:p-0 lg:pt-0",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = iconMap[item.icon];
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    active
                      ? "bg-indigo-600/20 text-indigo-200 ring-1 ring-indigo-500/40"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  )}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        {mobileOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/50 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        <main className="min-w-0 flex-1 pb-24 lg:pb-6">{children}</main>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-lg justify-around px-2 py-2">
          {navItems.slice(0, 5).map((item) => {
            const Icon = iconMap[item.icon];
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 rounded-lg px-3 py-1.5 text-[10px]",
                  active ? "text-indigo-400" : "text-slate-500"
                )}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
