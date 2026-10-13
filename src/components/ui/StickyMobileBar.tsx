"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";

export function StickyMobileBar() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappPrefill
  )}`;

  return (
    <aside
      aria-label="Quick contact mobile bar"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden backdrop-blur-xl bg-[var(--background)]/90 border-t border-[var(--line)] p-3 shadow-lg pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-sm mx-auto">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[var(--surface-sunken)] text-[var(--foreground)] font-medium text-xs select-none active:scale-[0.98] transition-transform min-h-[42px] border border-[var(--line)]"
        >
          <Phone className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff] shrink-0" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] font-medium text-xs select-none active:scale-[0.98] transition-transform min-h-[42px] shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
