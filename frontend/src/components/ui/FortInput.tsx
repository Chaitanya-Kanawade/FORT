import type { InputHTMLAttributes } from "react";

interface FortInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function FortInput({
  label,
  className = "",
  ...props
}: FortInputProps) {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-sm text-zinc-300 font-medium">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          w-full
          rounded-xl
          border
          border-zinc-700
          bg-zinc-900/70
          px-4
          py-3
          text-white
          placeholder:text-zinc-500
          outline-none
          transition-all
          duration-300
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-500/30
          ${className}
        `}
      />
    </div>
  );
}