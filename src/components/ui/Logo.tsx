"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className = "", iconOnly = false }: LogoProps) {
  const [clicks, setClicks] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const newCount = clicks + 1;
    setClicks(newCount);

    if (newCount >= 5) {
      setClicks(0);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      router.push("/hq");
      return;
    }

    // On the first click, navigate home immediately so it functions as a normal logo link
    if (newCount === 1) {
      router.push("/");
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setClicks(0);
    }, 2000); // 2-second window to tap 5 times
  };

  return (
    <div 
      className={`flex items-center gap-3 select-none cursor-pointer ${className}`}
      onClick={handleLogoClick}
    >
      
      {/* Scalable SVG Icon */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-auto h-full drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="forbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />  {/* Soft Cyan */}
            <stop offset="100%" stopColor="#2563eb" /> {/* Electric Blue */}
          </linearGradient>
        </defs>

        {/* Top Wing */}
        <polygon 
          points="20,10 95,10 75,35 0,35" 
          fill="url(#forbGrad)" 
        />
        
        {/* Bottom Wing / Stem */}
        <polygon 
          points="28,45 85,45 65,70 38,70 20,95 0,95" 
          fill="url(#forbGrad)" 
        />
      </svg>

      {/* Brand Typography */}
      {!iconOnly && (
        <span className="flex items-center text-xl md:text-2xl uppercase tracking-[0.15em] font-black text-foreground">
          FORB<span className="font-light text-muted-foreground ml-1">TECH</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary ml-2 animate-pulse drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
        </span>
      )}
      
    </div>
  );
}
