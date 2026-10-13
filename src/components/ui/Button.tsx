import React from "react";
import Link from "next/link";
import { MessageCircle, ChevronRight } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "blue" | "secondary" | "ghost" | "link" | "whatsapp" | "outline" | "turmeric";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  icon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer text-center select-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs gap-1.5 min-h-[34px]",
    md: "px-5 py-2.5 text-sm gap-2 min-h-[42px]",
    lg: "px-7 py-3 text-base gap-2.5 min-h-[48px]",
  }[size];

  const variantClasses = {
    primary:
      "bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 shadow-xs",
    blue:
      "bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-xs",
    turmeric:
      "bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-xs",
    whatsapp:
      "bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-xs",
    secondary:
      "bg-[var(--surface-sunken)] text-[var(--foreground)] hover:bg-[var(--surface-hover)] border border-[var(--line)]",
    ghost:
      "bg-transparent text-[var(--foreground)] hover:bg-[var(--surface-sunken)]",
    outline:
      "bg-transparent text-[var(--foreground)] border border-[var(--line)] hover:bg-[var(--surface-sunken)]",
    link:
      "bg-transparent text-[#0071e3] dark:text-[#2997ff] hover:underline p-0 min-h-0 font-normal inline-flex items-center gap-1",
  }[variant];

  const combinedClasses = `${baseClasses} ${variantClasses === "link" ? "" : sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    if (
      isExternal ||
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      href.startsWith("https://wa.me")
    ) {
      return (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={combinedClasses}
        >
          {icon || (variant === "whatsapp" && <MessageCircle className="w-4 h-4 shrink-0" />)}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {icon}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon || (variant === "whatsapp" && <MessageCircle className="w-4 h-4 shrink-0" />)}
      <span>{children}</span>
    </button>
  );
}
