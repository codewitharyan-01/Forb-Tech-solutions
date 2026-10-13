import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";

interface WhatsAppCTAProps {
  message?: string;
  label?: string;
  variant?: "primary" | "pill" | "banner";
  size?: "sm" | "md" | "lg";
  className?: string;
  source?: string;
}

export function WhatsAppCTA({
  message,
  label = "Chat on WhatsApp",
  variant = "primary",
  size = "md",
  className = "",
  source,
}: WhatsAppCTAProps) {
  const text = message || siteConfig.whatsappPrefill;
  const encodedText = encodeURIComponent(source ? `${text} (Ref: ${source})` : text);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodedText}`;

  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs gap-1.5 min-h-[34px]",
    md: "px-5 py-2.5 text-sm gap-2 min-h-[42px]",
    lg: "px-7 py-3 text-base gap-2.5 min-h-[48px]",
  }[size];

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp chat with Aryan"
      className={`inline-flex items-center justify-center rounded-full bg-[#1d1d1f] text-white hover:bg-[#333336] dark:bg-white dark:text-black dark:hover:bg-[#e5e5e7] font-medium shadow-xs transition-all duration-200 active:scale-[0.98] ${sizeClasses} ${className}`}
    >
      <MessageCircle className="w-4 h-4 shrink-0 fill-current opacity-90" />
      <span>{label}</span>
    </a>
  );
}
