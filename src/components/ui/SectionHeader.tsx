import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subhead?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subhead,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClasses =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col mb-12 md:mb-16 max-w-3xl ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff] mb-3 select-none">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[var(--foreground)] leading-[1.1]">
        {title}
      </h2>
      {subhead && (
        <p className="mt-4 text-base sm:text-lg text-[var(--muted-text)] leading-relaxed prose-readable font-normal">
          {subhead}
        </p>
      )}
    </div>
  );
}
