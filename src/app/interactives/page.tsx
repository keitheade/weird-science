import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const labs = [
  { href: "/interactives/atom-builder", icon: "⚛️", title: "Atom Builder", desc: "Build atoms & see Bohr models update live", subject: "Chemistry" },
  { href: "/interactives/molecule-builder", icon: "🧫", title: "Molecule Builder", desc: "Combine atoms to make H₂O, CO₂, glucose & more", subject: "Chemistry" },
  { href: "/interactives/periodic-table", icon: "🧪", title: "Periodic Table", desc: "Filter metals, noble gases & more", subject: "Chemistry" },
  { href: "/interactives/physics", icon: "⚡", title: "Physics Sims", desc: "Projectile, forces, circuits & waves", subject: "Physics" },
  { href: "/interactives/biology", icon: "🫀", title: "Biology Diagrams", desc: "Label cells, heart & body organs", subject: "Biology" },
  { href: "/interactives/biology?sim=organs", icon: "🧍", title: "Human Anatomy", desc: "Locate organs in the human body", subject: "Biology" },
  { href: "/interactives/grapher", icon: "📐", title: "Function Grapher", desc: "Sliders for linear, quadratic & trig", subject: "Methods" },
];

export default function InteractivesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Interactive Labs</h1>
        <p className="text-slate-400">
          Hands-on simulations — modify parameters and see science in action
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {labs.map((lab) => (
          <Link key={lab.href} href={lab.href}>
            <Card className="h-full transition-all hover:ring-2 hover:ring-indigo-500/40">
              <CardContent className="flex items-start gap-4 p-5">
                <span className="text-4xl">{lab.icon}</span>
                <div>
                  <p className="font-bold text-white">{lab.title}</p>
                  <p className="text-xs text-indigo-400">{lab.subject}</p>
                  <p className="mt-1 text-sm text-slate-400">{lab.desc}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
