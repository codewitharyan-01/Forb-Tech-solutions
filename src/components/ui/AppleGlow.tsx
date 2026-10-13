"use client";

import React from "react";

export function AppleGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      {/* Top Ambient Flare */}
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] h-[450px] md:h-[600px] opacity-35 dark:opacity-20 blur-[130px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 113, 227, 0.45) 0%, rgba(94, 92, 230, 0.25) 45%, transparent 70%)"
        }}
      />
      {/* Subtle Warm Secondary Flare */}
      <div 
        className="absolute top-[20%] left-[10%] w-[500px] h-[400px] opacity-25 dark:opacity-10 blur-[120px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(41, 151, 255, 0.3) 0%, transparent 70%)"
        }}
      />
      {/* Micro-grid overlay with soft mask */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at 50% 20%, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 20%, black 40%, transparent 80%)"
        }}
      />
    </div>
  );
}
