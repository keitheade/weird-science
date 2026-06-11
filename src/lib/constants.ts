export const AVATARS = ["🧬", "🔬", "⚗️", "🧠", "💉", "🩺", "🦴", "🫀", "🧪", "📐"];

export const YEAR_BANDS = [
  "Year 9/10",
  "VCE Unit 1",
  "VCE Unit 2",
  "VCE Unit 3",
  "VCE Unit 4",
];

export const AI_PRESETS = [
  {
    id: "gemini",
    name: "Google Gemini",
    baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai/",
    model: "gemini-2.0-flash",
    keyHint: "Get a key from Google AI Studio",
  },
  {
    id: "lmstudio",
    name: "LM Studio (Local)",
    baseUrl: "http://localhost:1234/v1/",
    model: "local-model",
    keyHint: "Start LM Studio server; API key can be any value",
  },
];

export const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: "LayoutDashboard" },
  { href: "/learn", label: "Learn", icon: "BookOpen" },
  { href: "/quiz", label: "Quiz", icon: "Brain" },
  { href: "/interactives", label: "Labs", icon: "FlaskConical" },
  { href: "/pathway", label: "Pathway", icon: "Route" },
  { href: "/settings", label: "Settings", icon: "Settings" },
];
