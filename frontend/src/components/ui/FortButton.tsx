import type { ButtonHTMLAttributes, ReactNode } from "react";

interface FortButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  fullWidth?: boolean;
  loading?: boolean;
}

export default function FortButton({
  children,
  variant = "primary",
  fullWidth = false,
  loading = false,
  className = "",
  disabled,
  ...props
}: FortButtonProps) {
  const base =
    "rounded-[14px] px-5 py-3 font-semibold transition-all duration-300 border flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-cyan-500 text-white border-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,.45)]",

    secondary:
      "bg-zinc-900 text-white border-zinc-700 hover:bg-zinc-800",

    danger:
      "bg-red-600 text-white border-red-600 hover:bg-red-500",
  };

  return (
    <button
      className={`
        ${base}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${loading ? "opacity-80 cursor-wait" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
        shadow-[0_0_30px_rgba(6,182,212,0.35)]
        hover:shadow-[0_0_45px_rgba(6,182,212,0.55)]
        transition-all
        duration-300
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      )}

      {children}
    </button>
  );
}