"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useProfileStore } from "@/stores/profile-store";
import { AppShell } from "./app-shell";

export function ProfileGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { activeProfileId } = useProfileStore();
  const [profile, setProfile] = useState<{
    name: string;
    avatar: string;
    level: number;
    streakCount: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pathname === "/profiles") {
      setLoading(false);
      return;
    }
    if (!activeProfileId) {
      router.replace("/profiles");
      return;
    }
    fetch(`/api/profiles/${activeProfileId}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!data) {
          router.replace("/profiles");
        } else {
          setProfile(data);
        }
        setLoading(false);
      })
      .catch(() => {
        router.replace("/profiles");
        setLoading(false);
      });
  }, [activeProfileId, pathname, router]);

  if (pathname === "/profiles") return <>{children}</>;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="animate-pulse text-center">
          <p className="text-4xl">🧪</p>
          <p className="mt-2 text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <AppShell
      profileName={profile?.name}
      profileAvatar={profile?.avatar}
      level={profile?.level}
      streak={profile?.streakCount}
    >
      {children}
    </AppShell>
  );
}
