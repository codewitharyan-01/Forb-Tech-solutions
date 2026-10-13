"use client";

import React, { useState } from "react";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { Check } from "lucide-react";

export function CostEstimator() {
  const [businessType, setBusinessType] = useState("Clinic / Healthcare");
  const [scope, setScope] = useState("starter");
  const [needGbp, setNeedGbp] = useState(true);
  const [needEmail, setNeedEmail] = useState(false);

  let minPrice = 7999;
  let maxPrice = 12000;
  let recommendedTier = "Starter Shopfront";

  if (scope === "growth") {
    minPrice = 17999;
    maxPrice = 24000;
    recommendedTier = "Growth Business Website";
  } else if (scope === "custom") {
    minPrice = 34999;
    maxPrice = 55000;
    recommendedTier = "Custom Web Application";
  }

  if (needGbp && scope === "starter") {
    minPrice += 3000;
    maxPrice += 4999;
  }
  if (needEmail) {
    minPrice += 2000;
    maxPrice += 2499;
  }

  const prefilledText = `Hi Aryan, I used the ForbTech price estimator for my ${businessType}. Looking for a ${recommendedTier} with ${needGbp ? "Google Maps setup" : "no extra Maps"} and ${needEmail ? "business email" : "no email"}. Estimated range was ₹${minPrice.toLocaleString("en-IN")} - ₹${maxPrice.toLocaleString("en-IN")}. Can we discuss a fixed quote?`;

  return (
    <div className="w-full max-w-3xl mx-auto rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-8 sm:p-10 shadow-lg text-left">
      <div className="mb-8">
        <span className="text-xs font-semibold tracking-wider text-[#0071e3] dark:text-[#2997ff] uppercase block mb-1">
          Interactive Calculator
        </span>
        <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] tracking-[-0.02em]">
          Scope &amp; Investment Estimator
        </h3>
        <p className="text-sm text-[var(--muted-text)] mt-1 font-normal">
          Select your requirements to see an immediate transparent price range.
        </p>
      </div>

      <div className="space-y-8">
        {/* Step 1 */}
        <div>
          <span className="text-xs font-semibold text-[var(--foreground)] uppercase tracking-wider block mb-3">
            1. Select your business type
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              "Clinic / Doctor",
              "Restaurant / Cafe",
              "Gym / Fitness",
              "Retail Shop",
              "Manufacturer / B2B",
              "Other Service",
            ].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setBusinessType(type)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  businessType === type
                    ? "bg-[var(--foreground)] text-[var(--background)] shadow-sm"
                    : "bg-[var(--surface-sunken)] border border-[var(--line)] text-[var(--muted-text)] hover:text-[var(--foreground)]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 */}
        <div>
          <span className="text-xs font-semibold text-[var(--foreground)] uppercase tracking-wider block mb-3">
            2. Primary digital scope
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setScope("starter")}
              className={`p-5 text-left rounded-2xl border transition-all duration-200 cursor-pointer ${
                scope === "starter"
                  ? "bg-[var(--surface)] border-[#0071e3] ring-1 ring-[#0071e3]/40 shadow-sm"
                  : "bg-[var(--surface-sunken)] border-[var(--line)] text-[var(--muted-text)]"
              }`}
            >
              <span className="font-semibold text-sm text-[var(--foreground)] block">Starter Shopfront</span>
              <span className="text-xs text-[var(--muted-text)] mt-1.5 block font-normal leading-relaxed">
                1-Page fast site for Google search discovery &amp; phone calls.
              </span>
            </button>

            <button
              type="button"
              onClick={() => setScope("growth")}
              className={`p-5 text-left rounded-2xl border transition-all duration-200 cursor-pointer ${
                scope === "growth"
                  ? "bg-[var(--surface)] border-[#0071e3] ring-1 ring-[#0071e3]/40 shadow-sm"
                  : "bg-[var(--surface-sunken)] border-[var(--line)] text-[var(--muted-text)]"
              }`}
            >
              <span className="font-semibold text-sm text-[var(--foreground)] block">Growth Multi-Page</span>
              <span className="text-xs text-[var(--muted-text)] mt-1.5 block font-normal leading-relaxed">
                Dedicated service funnels, gallery, and Maps SEO ranking.
              </span>
            </button>

            <button
              type="button"
              onClick={() => setScope("custom")}
              className={`p-5 text-left rounded-2xl border transition-all duration-200 cursor-pointer ${
                scope === "custom"
                  ? "bg-[var(--surface)] border-[#0071e3] ring-1 ring-[#0071e3]/40 shadow-sm"
                  : "bg-[var(--surface-sunken)] border-[var(--line)] text-[var(--muted-text)]"
              }`}
            >
              <span className="font-semibold text-sm text-[var(--foreground)] block">Custom App / Portal</span>
              <span className="text-xs text-[var(--muted-text)] mt-1.5 block font-normal leading-relaxed">
                WhatsApp catalog store, portal, or bespoke web application.
              </span>
            </button>
          </div>
        </div>

        {/* Step 3 */}
        <div>
          <span className="text-xs font-semibold text-[var(--foreground)] uppercase tracking-wider block mb-3">
            3. Optional addons
          </span>
          <div className="flex flex-col sm:flex-row gap-3">
            <label className="flex items-center gap-3 p-3.5 rounded-2xl border border-[var(--line)] bg-[var(--surface-sunken)] cursor-pointer text-xs select-none">
              <input
                type="checkbox"
                checked={needGbp}
                onChange={(e) => setNeedGbp(e.target.checked)}
                className="w-4 h-4 rounded accent-[#0071e3]"
              />
              <span className="text-[var(--foreground)] font-medium">
                Google Business Profile / Maps Ranking Setup (+₹3,000)
              </span>
            </label>

            <label className="flex items-center gap-3 p-3.5 rounded-2xl border border-[var(--line)] bg-[var(--surface-sunken)] cursor-pointer text-xs select-none">
              <input
                type="checkbox"
                checked={needEmail}
                onChange={(e) => setNeedEmail(e.target.checked)}
                className="w-4 h-4 rounded accent-[#0071e3]"
              />
              <span className="text-[var(--foreground)] font-medium">
                Professional Domain Email (@yourbrand.com) (+₹2,000)
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Result Section */}
      <div className="mt-10 pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <span className="text-xs text-[var(--muted-text)] uppercase tracking-wider block font-semibold">
            Estimated Ballpark Range
          </span>
          <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)] mt-1">
            ₹{minPrice.toLocaleString("en-IN")} &ndash; ₹{maxPrice.toLocaleString("en-IN")}
          </div>
          <p className="text-xs text-[var(--muted-text)] mt-1.5 font-normal">
            Package: <span className="text-[var(--foreground)] font-semibold">{recommendedTier}</span> &bull; 7-day turnaround
          </p>
        </div>

        <WhatsAppCTA
          message={prefilledText}
          label="Lock in This Estimate on WhatsApp"
          size="lg"
          className="shrink-0"
        />
      </div>
    </div>
  );
}
