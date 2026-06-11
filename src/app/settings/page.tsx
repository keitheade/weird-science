"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AI_PRESETS } from "@/lib/constants";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    enabled: false,
    provider: "gemini",
    baseUrl: "",
    model: "",
    hasApiKey: false,
  });
  const [apiKey, setApiKey] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/settings/ai")
      .then((r) => r.json())
      .then(setSettings);
  }, []);

  const applyPreset = (presetId: string) => {
    const preset = AI_PRESETS.find((p) => p.id === presetId);
    if (preset) {
      setSettings((s) => ({
        ...s,
        provider: preset.id,
        baseUrl: preset.baseUrl,
        model: preset.model,
      }));
    }
  };

  const save = async () => {
    await fetch("/api/settings/ai", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        enabled: settings.enabled,
        provider: settings.provider,
        baseUrl: settings.baseUrl,
        model: settings.model,
        apiKey: apiKey || undefined,
      }),
    });
    setSaved(true);
    setApiKey("");
    setTimeout(() => setSaved(false), 2000);
    const res = await fetch("/api/settings/ai");
    setSettings(await res.json());
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Settings</h1>
        <p className="text-slate-400">Configure AI tutor and app preferences</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI Tutor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-300">Enable AI Tutor</span>
            <button
              onClick={() =>
                setSettings((s) => ({ ...s, enabled: !s.enabled }))
              }
              className={`relative h-7 w-12 rounded-full transition-colors ${
                settings.enabled ? "bg-indigo-600" : "bg-slate-700"
              }`}
            >
              <div
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white transition-transform ${
                  settings.enabled ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          <div>
            <p className="mb-2 text-sm text-slate-400">Provider preset</p>
            <div className="flex flex-wrap gap-2">
              {AI_PRESETS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => applyPreset(p.id)}
                  className={`rounded-xl border px-4 py-2 text-sm ${
                    settings.provider === p.id
                      ? "border-indigo-500 bg-indigo-500/20 text-white"
                      : "border-slate-700 text-slate-400"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm text-slate-400">Base URL</label>
            <Input
              value={settings.baseUrl}
              onChange={(e) =>
                setSettings((s) => ({ ...s, baseUrl: e.target.value }))
              }
              placeholder="https://generativelanguage.googleapis.com/v1beta/openai/"
            />
          </div>

          <div>
            <label className="text-sm text-slate-400">Model</label>
            <Input
              value={settings.model}
              onChange={(e) =>
                setSettings((s) => ({ ...s, model: e.target.value }))
              }
              placeholder="gemini-2.0-flash"
            />
          </div>

          <div>
            <label className="text-sm text-slate-400">
              API Key {settings.hasApiKey && "(saved — leave blank to keep)"}
            </label>
            <Input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter API key"
            />
            <p className="mt-1 text-xs text-slate-500">
              {AI_PRESETS.find((p) => p.id === settings.provider)?.keyHint}
            </p>
          </div>

          <Button onClick={save} className="w-full">
            {saved ? "✓ Saved!" : "Save Settings"}
          </Button>

          {settings.enabled && settings.hasApiKey && (
            <Badge variant="success">AI Tutor ready</Badge>
          )}
          {settings.enabled && !settings.hasApiKey && (
            <Badge variant="warning">API key required</Badge>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-400 space-y-2">
          <p>
            <strong className="text-white">Weird Science</strong> — VCE tutor for
            Chemistry, Physics, Biology & Mathematical Methods.
          </p>
          <p>Aligned to Victorian Curriculum (Year 9/10 → VCE Units 1–4).</p>
          <p>Self-hosted on your Synology NAS. Data stays on your network.</p>
        </CardContent>
      </Card>
    </div>
  );
}
