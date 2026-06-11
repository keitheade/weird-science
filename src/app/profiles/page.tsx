"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AVATARS } from "@/lib/constants";
import { useProfileStore } from "@/stores/profile-store";

interface Profile {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  level: number;
  streakCount: number;
  hasPin?: boolean;
}

export default function ProfilesPage() {
  const router = useRouter();
  const { setActiveProfile } = useProfileStore();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("🧬");
  const [pin, setPin] = useState("");
  const [pinPrompt, setPinPrompt] = useState<Profile | null>(null);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");

  useEffect(() => {
    fetch("/api/profiles")
      .then((r) => r.json())
      .then(setProfiles);
  }, []);

  const selectProfile = async (profile: Profile) => {
    if (profile.hasPin) {
      setPinPrompt(profile);
      return;
    }
    setActiveProfile(profile.id);
    router.push("/dashboard");
  };

  const verifyPin = async () => {
    if (!pinPrompt) return;
    const res = await fetch("/api/profiles/verify-pin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileId: pinPrompt.id, pin: pinInput }),
    });
    const data = await res.json();
    if (data.valid) {
      setActiveProfile(pinPrompt.id);
      router.push("/dashboard");
    } else {
      setPinError("Incorrect PIN");
    }
  };

  const createProfile = async () => {
    if (!name.trim()) return;
    const res = await fetch("/api/profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, avatar, pin: pin || null }),
    });
    const profile = await res.json();
    setProfiles((p) => [...p, profile]);
    setShowCreate(false);
    setName("");
    setPin("");
  };

  const deleteProfile = async (id: string) => {
    if (!confirm("Delete this profile and all progress?")) return;
    await fetch(`/api/profiles/${id}`, { method: "DELETE" });
    setProfiles((p) => p.filter((x) => x.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950/50 to-slate-950 px-4 py-12">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <p className="text-6xl animate-float">🧪</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white">
            Weird Science
          </h1>
          <p className="mt-2 text-indigo-300">Pathway to Surgery</p>
          <p className="mt-1 text-sm text-slate-500">
            VCE Chemistry · Physics · Biology · Methods
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {profiles.map((profile, i) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group relative cursor-pointer transition-all hover:ring-2 hover:ring-indigo-500/50 animate-pulse-glow">
                <button
                  onClick={() => selectProfile(profile)}
                  className="w-full p-6 text-left"
                >
                  <span className="text-5xl">{profile.avatar}</span>
                  <p className="mt-3 text-lg font-bold text-white">
                    {profile.name}
                  </p>
                  <p className="text-sm text-slate-400">
                    Level {profile.level} · {profile.xp} XP · 🔥{" "}
                    {profile.streakCount}
                  </p>
                  {profile.hasPin && (
                    <p className="mt-1 text-xs text-indigo-400">🔒 PIN protected</p>
                  )}
                </button>
                <button
                  onClick={() => deleteProfile(profile.id)}
                  className="absolute right-3 top-3 rounded-lg p-1.5 text-slate-600 opacity-0 transition-opacity hover:bg-rose-500/20 hover:text-rose-400 group-hover:opacity-100"
                >
                  <Trash2 size={14} />
                </button>
              </Card>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: profiles.length * 0.1 }}
          >
            <button
              onClick={() => setShowCreate(true)}
              className="flex h-full min-h-[140px] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-700 text-slate-500 transition-colors hover:border-indigo-500 hover:text-indigo-400"
            >
              <Plus size={32} />
              <span className="mt-2 text-sm font-medium">Add Profile</span>
            </button>
          </motion.div>
        </div>

        {showCreate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          >
            <Card className="w-full max-w-md">
              <CardContent className="space-y-4 pt-6">
                <h2 className="text-xl font-bold text-white">New Profile</h2>
                <Input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div>
                  <p className="mb-2 text-sm text-slate-400">Choose avatar</p>
                  <div className="flex flex-wrap gap-2">
                    {AVATARS.map((a) => (
                      <button
                        key={a}
                        onClick={() => setAvatar(a)}
                        className={`rounded-xl p-2 text-2xl transition-all ${
                          avatar === a
                            ? "bg-indigo-600 ring-2 ring-indigo-400"
                            : "bg-slate-800 hover:bg-slate-700"
                        }`}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
                <Input
                  placeholder="PIN (optional, 4 digits)"
                  type="password"
                  maxLength={4}
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                />
                <div className="flex gap-2">
                  <Button onClick={createProfile} className="flex-1">
                    Create
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowCreate(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {pinPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          >
            <Card className="w-full max-w-sm">
              <CardContent className="space-y-4 pt-6 text-center">
                <span className="text-4xl">{pinPrompt.avatar}</span>
                <p className="text-white">Enter PIN for {pinPrompt.name}</p>
                <Input
                  type="password"
                  maxLength={4}
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value.replace(/\D/g, ""));
                    setPinError("");
                  }}
                  className="text-center text-2xl tracking-widest"
                  autoFocus
                />
                {pinError && (
                  <p className="text-sm text-rose-400">{pinError}</p>
                )}
                <div className="flex gap-2">
                  <Button onClick={verifyPin} className="flex-1">
                    Enter
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setPinPrompt(null);
                      setPinInput("");
                      setPinError("");
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
