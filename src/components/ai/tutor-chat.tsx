"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const quickPrompts = [
  "Explain this simpler",
  "Give me a worked example",
  "How does this relate to surgery?",
  "Quiz me on this topic",
];

export function TutorChat({ context }: { context?: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          context,
        }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setMessages([
          ...newMessages,
          { role: "assistant", content: data.content },
        ]);
      }
    } catch {
      setError("Failed to reach AI tutor.");
    }
    setLoading(false);
  };

  return (
    <Card className="border-indigo-500/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Bot size={18} className="text-indigo-400" />
          AI Tutor
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {messages.length === 0 && (
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((p) => (
              <button
                key={p}
                onClick={() => send(p)}
                className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400 hover:border-indigo-500 hover:text-indigo-300"
              >
                {p}
              </button>
            ))}
          </div>
        )}

        <div className="max-h-64 space-y-3 overflow-y-auto">
          <AnimatePresence>
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-2 ${m.role === "user" ? "justify-end" : ""}`}
              >
                {m.role === "assistant" && (
                  <Bot size={16} className="mt-1 shrink-0 text-indigo-400" />
                )}
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                    m.role === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-800 text-slate-200"
                  }`}
                >
                  {m.content}
                </div>
                {m.role === "user" && (
                  <User size={16} className="mt-1 shrink-0 text-slate-400" />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          {loading && (
            <p className="text-sm text-slate-500 animate-pulse">Thinking...</p>
          )}
          {error && (
            <p className="text-sm text-amber-400">
              {error}
              <span className="block text-xs text-slate-500 mt-1">
                Configure AI in Settings to enable the tutor.
              </span>
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <Input
            placeholder="Ask the tutor..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            disabled={loading}
          />
          <Button onClick={() => send(input)} disabled={loading} size="icon">
            <Send size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
