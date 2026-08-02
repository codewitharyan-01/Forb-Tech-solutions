"use client";

import { useEffect, useRef } from "react";

export function Tracker() {
  const tracked = useRef(false);

  useEffect(() => {
    // Only track once per session
    if (tracked.current) return;
    tracked.current = true;

    // Fire and forget
    fetch("/api/track", { method: "POST" }).catch(() => {});
  }, []);

  return null;
}
