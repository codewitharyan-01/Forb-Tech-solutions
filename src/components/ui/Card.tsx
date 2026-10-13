import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "subtle" | "highlight";
  hoverEffect?: boolean;
}

export function Card({
  children,
  variant = "default",
  hoverEffect = true,
  className = "",
  ...props
}: CardProps) {
  const variantClasses = {
    default: "bg-white dark:bg-[#161617] border border-black/[0.06] dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)]",
    subtle: "bg-[#f5f5f7] dark:bg-[#1c1c1e] border border-black/[0.04] dark:border-white/[0.06]",
    highlight: "bg-white dark:bg-[#161617] border border-[#0071e3]/40 shadow-[0_4px_20px_rgba(0,113,227,0.08)]",
  }[variant];

  const hoverClasses = hoverEffect
    ? "transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
    : "";

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 text-[var(--foreground)] ${variantClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
