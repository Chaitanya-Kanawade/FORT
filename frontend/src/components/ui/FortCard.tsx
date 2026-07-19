import type { ReactNode } from "react";

interface FortCardProps {
  children: ReactNode;
  className?: string;
}

export default function FortCard({
  children,
  className = "",
}: FortCardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/70
        backdrop-blur-xl
        p-6
        shadow-xl
        transition-all
        duration-300
        shadow-2xl
        hover:border-cyan-500/10
        hover:shadow-[0_0_30px_rgba(6,182,212,.18)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}