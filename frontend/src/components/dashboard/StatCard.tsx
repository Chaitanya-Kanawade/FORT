import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatCardProps) {
  return (
    <div
      className="
      rounded-2xl
      border border-cyan-500/20
      bg-zinc-900/60
      backdrop-blur-xl
      p-6
      hover:border-cyan-400
      transition-all
      duration-300
      hover:shadow-[0_0_30px_rgba(34,211,238,.15)]
    "
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-zinc-400 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            {value}
          </h2>

          <p className="text-cyan-400 text-sm mt-2">
            {subtitle}
          </p>
        </div>

        <div
          className="
          p-3
          rounded-xl
          bg-cyan-500/10
        "
        >
          <Icon
            className="text-cyan-400"
            size={28}
          />
        </div>
      </div>
    </div>
  );
}