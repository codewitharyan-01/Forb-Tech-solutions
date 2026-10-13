"use client";

import React, { useState } from "react";
import { Star, Phone, Navigation, Globe, Search, CheckCircle2 } from "lucide-react";

interface GoogleMockItem {
  id: string;
  searchQuery: string;
  name: string;
  category: string;
  rating: string;
  reviewCount: string;
  location: string;
  status: string;
  highlightText: string;
}

const mockOptions: GoogleMockItem[] = [
  {
    id: "dental",
    searchQuery: "dentist near me ahmedabad",
    name: "Anaya Dental Care",
    category: "Dental Clinic",
    rating: "4.9",
    reviewCount: "148",
    location: "Nikol, Ahmedabad",
    status: "Open Now",
    highlightText: "Ranked #1 on Google Maps in 14 days",
  },
  {
    id: "gym",
    searchQuery: "gym with trainer near me",
    name: "Life Fitness Nikol",
    category: "Gym & Fitness Club",
    rating: "5.0",
    reviewCount: "210",
    location: "Nikol, Ahmedabad",
    status: "Open Now",
    highlightText: "1-Tap trial pass inquiries via WhatsApp",
  },
  {
    id: "food",
    searchQuery: "best bateta bhungla gujarat",
    name: "Bhavnagari Bateta Bhungla",
    category: "Food Delivery & Street Food",
    rating: "4.8",
    reviewCount: "320",
    location: "Gujarat",
    status: "Open Now",
    highlightText: "Direct orders without 30% aggregator fees",
  },
];

export function GoogleResultMock() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = mockOptions[selectedIdx];

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-[#161617] rounded-3xl border border-black/[0.08] dark:border-white/[0.1] shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden text-left transition-all">
      {/* Top Safari-style Address Bar */}
      <div className="px-5 pt-4 pb-3 border-b border-black/[0.04] dark:border-white/[0.06] bg-[#f5f5f7]/60 dark:bg-[#1c1c1e]/60">
        <div className="flex items-center gap-2 bg-white dark:bg-[#2c2c2e] border border-black/[0.06] dark:border-white/[0.08] rounded-full px-3.5 py-1.5 text-xs shadow-2xs">
          <Search className="w-3.5 h-3.5 text-[#86868b]" />
          <span className="text-[#1d1d1f] dark:text-white font-normal truncate">
            {active.searchQuery}
          </span>
        </div>
      </div>

      {/* Main Listing View */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-[#1d1d1f] dark:text-white">
                #1 Result
              </span>
              <span className="text-xs text-[#34c759] font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Verified
              </span>
            </div>
            <h3 className="text-xl font-semibold text-[#1d1d1f] dark:text-white tracking-tight mt-1.5">
              {active.name}
            </h3>
            <p className="text-xs text-[#86868b] mt-0.5 font-normal">
              {active.category} &bull; {active.location}
            </p>
          </div>
        </div>

        {/* Rating Row */}
        <div className="flex items-center gap-2 mt-3 text-xs">
          <span className="font-semibold text-[#1d1d1f] dark:text-white">{active.rating}</span>
          <div className="flex items-center text-[#ff9500]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-[#86868b]">({active.reviewCount} reviews)</span>
          <span className="text-[#86868b]">&bull;</span>
          <span className="text-[#34c759] font-medium">{active.status}</span>
        </div>

        {/* Action Buttons: Clean Apple Pills */}
        <div className="grid grid-cols-3 gap-2 mt-6 pt-5 border-t border-black/[0.06] dark:border-white/[0.08]">
          <div className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-[#f5f5f7] dark:bg-[#242426] text-[#1d1d1f] dark:text-white text-xs font-medium">
            <Phone className="w-4 h-4 mb-1 text-[#0071e3]" />
            <span>Call</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-[#f5f5f7] dark:bg-[#242426] text-[#1d1d1f] dark:text-white text-xs font-medium">
            <Navigation className="w-4 h-4 mb-1 text-[#0071e3]" />
            <span>Directions</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-[#0071e3] text-white text-xs font-medium shadow-xs">
            <Globe className="w-4 h-4 mb-1" />
            <span>Website</span>
          </div>
        </div>

        {/* Outcome Callout */}
        <div className="mt-5 p-3 rounded-xl bg-[#f5f5f7] dark:bg-[#1f1f21] border border-black/[0.04] dark:border-white/[0.06] text-xs flex items-center justify-between">
          <span className="text-[#1d1d1f] dark:text-white font-medium">
            {active.highlightText}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[#86868b] font-medium ml-2 shrink-0">
            Outcome
          </span>
        </div>
      </div>

      {/* Switcher below */}
      <div className="px-6 py-3 bg-[#f5f5f7]/70 dark:bg-[#1a1a1c]/70 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#86868b]">
        <span>Tap to preview:</span>
        <div className="flex items-center gap-1.5">
          {mockOptions.map((opt, i) => (
            <button
              key={opt.id}
              onClick={() => setSelectedIdx(i)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                selectedIdx === i
                  ? "bg-[#1d1d1f] text-white dark:bg-white dark:text-black shadow-2xs"
                  : "bg-transparent text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white"
              }`}
            >
              {opt.id === "dental" ? "Dental" : opt.id === "gym" ? "Gym" : "Street Food"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
