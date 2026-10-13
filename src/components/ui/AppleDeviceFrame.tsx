"use client";

import React, { useState } from "react";
import { ExternalLink, ShieldCheck, Zap, Star, Phone, MessageSquare, ArrowUpRight } from "lucide-react";

interface ShowcaseProject {
  id: string;
  name: string;
  category: string;
  city: string;
  url: string;
  displayUrl: string;
  headline: string;
  tagline: string;
  rating: string;
  reviews: string;
  speed: string;
  metric: string;
  badge: string;
  ctaText: string;
  accentColor: string;
}

const projects: ShowcaseProject[] = [
  {
    id: "anaya",
    name: "Anaya Dental Care",
    category: "Healthcare & Clinic",
    city: "Nikol, Ahmedabad",
    url: "https://anaya-dental-care.vercel.app/",
    displayUrl: "anayadentalcare.in",
    headline: "Painless Dental Treatments for Families.",
    tagline: "Transparent treatment fees, doctor credentials & instant 1-tap WhatsApp consultation booking.",
    rating: "4.9",
    reviews: "148+ reviews",
    speed: "0.8s on 4G",
    metric: "Sub-1s 4G Speed",
    badge: "Healthcare",
    ctaText: "Book WhatsApp Consultation",
    accentColor: "#0071e3",
  },
  {
    id: "fitness",
    name: "Life Fitness Gym",
    category: "Fitness & Wellness",
    city: "Nikol, Ahmedabad",
    url: "https://hardcore-nikol.vercel.app/",
    displayUrl: "lifefitnessnikol.com",
    headline: "Transform Your Physique. Certified Trainers.",
    tagline: "Live membership pricing calculator, batch timing schedules, and zero-commission trial passes.",
    rating: "4.9",
    reviews: "210+ reviews",
    speed: "0.9s on 4G",
    metric: "+280% Walk-ins",
    badge: "Fitness",
    ctaText: "Claim Free 1-Day Trial",
    accentColor: "#34c759",
  },
  {
    id: "sweets",
    name: "Bhavnagari Sweets",
    category: "Food & Confectionery",
    city: "Vadodara, Gujarat",
    url: "https://forb-tech-solutions.vercel.app/",
    displayUrl: "bhavnagarisweets.com",
    headline: "Pure Ghee Sweets & Farsan Delivered Fresh.",
    tagline: "Bypassed 30% Swiggy/Zomato commissions with a direct WhatsApp instant ordering digital menu.",
    rating: "4.8",
    reviews: "320+ reviews",
    speed: "0.7s on 4G",
    metric: "0% Commission Direct Orders",
    badge: "Direct Commerce",
    ctaText: "Order via WhatsApp Menu",
    accentColor: "#ff9500",
  },
  {
    id: "spice",
    name: "Spice Villa Restaurant",
    category: "Hospitality & Dining",
    city: "Surat, Gujarat",
    url: "https://forb-tech-solutions.vercel.app/",
    displayUrl: "spicevillasurat.in",
    headline: "Authentic Gujarati & North Indian Dining.",
    tagline: "Fast interactive digital menu, table reservations & weekend party hall inquiry funnels.",
    rating: "4.9",
    reviews: "185+ reviews",
    speed: "0.8s on 4G",
    metric: "Rank #1 Google Maps Surat",
    badge: "Dining",
    ctaText: "Reserve Table Online",
    accentColor: "#af52de",
  },
];

export function AppleDeviceFrame() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Interactive Tabs Header */}
      <div className="flex items-center justify-center gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide px-2">
        {projects.map((p) => {
          const isSelected = activeProject.id === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActiveProject(p)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap select-none flex items-center gap-2 ${
                isSelected
                  ? "bg-[var(--foreground)] text-[var(--background)] shadow-md"
                  : "bg-[var(--surface)] text-[var(--muted-text)] hover:text-[var(--foreground)] border border-[var(--line)]"
              }`}
            >
              <span>{p.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isSelected 
                  ? "bg-[var(--background)] text-[var(--foreground)]" 
                  : "bg-[var(--surface-sunken)] text-[var(--muted-text)]"
              }`}>
                {p.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Photorealistic Safari Browser Frame */}
      <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.55)] overflow-hidden transition-all duration-300">
        
        {/* Safari Window Header Bar */}
        <div className="px-4 py-3 bg-[var(--surface-sunken)] border-b border-[var(--line)] flex items-center justify-between gap-4">
          {/* macOS Window Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]/40 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24]/40 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]/40 inline-block" />
          </div>

          {/* Safari Glass Pill Address Bar */}
          <div className="flex-1 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 bg-[var(--surface)] border border-[var(--line)] rounded-xl py-1.5 px-3 text-xs text-[var(--foreground)] shadow-2xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#34c759] shrink-0" />
              <span className="text-[var(--muted-text)]">https://</span>
              <span className="font-medium tracking-tight truncate">{activeProject.displayUrl}</span>
            </div>
          </div>

          {/* Direct Live Preview Link */}
          <a
            href={activeProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1 text-xs font-medium text-[#0071e3] dark:text-[#2997ff] hover:underline"
          >
            <span>Live Site</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Viewport Canvas (The simulated live website) */}
        <div className="p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[var(--surface)] via-[var(--surface)] to-[var(--surface-sunken)] relative">
          
          {/* Top Live Performance Telemetry HUD */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-8 mb-8 border-b border-[var(--line)]">
            <div className="flex items-center gap-2 text-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-[#34c759] animate-pulse" />
              <span className="font-semibold text-[var(--foreground)]">{activeProject.city}</span>
              <span className="text-[var(--muted-text)]">• {activeProject.category}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#34c759]/10 text-[#34c759] text-xs font-semibold">
                <Zap className="w-3.5 h-3.5" />
                <span>{activeProject.speed}</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0071e3]/10 text-[#0071e3] dark:text-[#2997ff] text-xs font-semibold">
                <span>{activeProject.metric}</span>
              </div>
            </div>
          </div>

          {/* Simulated Client Hero Content */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-1 text-[#ff9500] mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current stroke-none" />
              ))}
              <span className="text-xs font-semibold text-[var(--foreground)] ml-1.5">
                {activeProject.rating} ({activeProject.reviews})
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[var(--foreground)] leading-[1.1] mb-4">
              {activeProject.headline}
            </h3>

            <p className="text-base sm:text-lg text-[var(--muted-text)] font-normal leading-relaxed mb-8">
              {activeProject.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
                style={{ backgroundColor: activeProject.accentColor }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>{activeProject.ctaText}</span>
              </a>

              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] hover:bg-[var(--surface-sunken)] transition-colors"
              >
                <span>Inspect Live Domain</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Understated Verification Footer Bar */}
          <div className="mt-12 pt-6 border-t border-[var(--line)] flex flex-wrap items-center justify-between text-xs text-[var(--muted-text)] gap-2">
            <span>Verified 100% Client Code Ownership &bull; Staged on Next.js 16 Edge CDN</span>
            <span className="font-mono text-[11px] text-[var(--foreground)] font-medium">Lighthouse 99/100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
