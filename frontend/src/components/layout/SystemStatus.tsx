import { Shield, Cpu, Database } from "lucide-react";

const items = [
  {
    icon: Shield,
    text: "Security Engine Online",
  },
  {
    icon: Cpu,
    text: "AI Detection Active",
  },
  {
    icon: Database,
    text: "Database Connected",
  },
];

export default function SystemStatus() {
  return (
    <div className="space-y-3 mb-8">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.text}
            className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

            <Icon
              size={18}
              className="text-cyan-400"
            />

            <span className="text-sm text-zinc-300">
              {item.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}