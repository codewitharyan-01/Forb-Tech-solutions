import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "turmeric" | "indigo" | "success" | "neutral" | "outline" | "blue";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "neutral",
  size = "md",
  className = "",
  icon,
}: BadgeProps) {
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs",
  }[size];

  const variantClasses = {
    neutral: "bg-[var(--surface-sunken)] text-[var(--muted-text)] border border-[var(--line)]",
    indigo: "bg-[var(--surface-sunken)] text-[var(--foreground)] border border-[var(--line)]",
    turmeric: "bg-[var(--surface-sunken)] text-[var(--foreground)] border border-[var(--line)]",
    blue: "bg-[#0071e3]/10 text-[#0071e3] dark:text-[#2997ff] border border-[#0071e3]/20",
    success: "bg-[#34c759]/10 text-[#34c759] border border-[#34c759]/20",
    outline: "bg-transparent text-[var(--muted-text)] border border-[var(--line)]",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium tracking-tight select-none ${sizeClasses} ${variantClasses} ${className}`}
    >
      {icon}
      <span>{children}</span>
    </span>
  );
}
