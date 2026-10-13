"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className = "", iconOnly = false }: LogoProps) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const hasTriggeredHQ = useRef(false);

  const handleStart = () => {
    hasTriggeredHQ.current = false;
    timeoutRef.current = setTimeout(() => {
      hasTriggeredHQ.current = true;
      router.push("/hq");
    }, 3000); // 3 seconds hold
  };

  const handleEnd = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    if (hasTriggeredHQ.current) {
      hasTriggeredHQ.current = false;
      return;
    }
    
    router.push("/");
  };

  return (
    <div 
      className={`flex items-center gap-3 select-none cursor-pointer ${className}`}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      onTouchCancel={handleEnd}
      onContextMenu={(e) => e.preventDefault()}
      onClick={handleClick}
      style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }}
    >
      
      {/* Minimalist Apple-style Monogram / Mark */}
      <div className="w-7 h-7 rounded-lg bg-[var(--foreground)] flex items-center justify-center text-[var(--background)] font-semibold text-xs tracking-tight shadow-xs transition-transform active:scale-95">
        F
      </div>

      {/* Brand Typography */}
      {!iconOnly && (
        <span className="flex items-center text-base sm:text-lg font-semibold tracking-tight text-[var(--foreground)]">
          ForbTech
        </span>
      )}
    </div>
  );
}
