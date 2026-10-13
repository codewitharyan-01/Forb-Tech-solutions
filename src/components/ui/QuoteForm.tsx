"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FormField } from "./FormField";
import { Button } from "./Button";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { z } from "zod";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Please enter your name (at least 2 characters)"),
  phone: z
    .string()
    .min(10, "Please enter a valid 10-digit Indian phone / WhatsApp number")
    .regex(/^[0-9+ -]{10,14}$/, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select or type your business type"),
  service: z.string().min(1, "Please select the service you need"),
  budget: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected"),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;

interface QuoteFormProps {
  initialService?: string;
  initialPackage?: string;
  className?: string;
}

export function QuoteForm({ initialService = "", initialPackage = "", className = "" }: QuoteFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    phone: "",
    businessType: "",
    service: initialService || initialPackage || "website-development",
    budget: "₹10,000 - ₹25,000",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    const result = quoteSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Unable to submit form. Please chat directly on WhatsApp.");
      }

      setIsSuccess(true);
      router.push(`/thank-you?name=${encodeURIComponent(formData.fullName)}`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Submission failed";
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-10 rounded-3xl bg-[var(--surface)] border border-[var(--line)] text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
        <div className="w-12 h-12 rounded-full bg-[#34c759]/10 text-[#34c759] flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-2 tracking-tight">
          Request Received
        </h3>
        <p className="text-sm text-[var(--muted-text)] mb-6 font-normal">
          Aryan will review your requirements and reply with a fixed quote within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] ${className}`}
    >
      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] tracking-tight">
          Request a Quote
        </h3>
        <p className="text-xs sm:text-sm text-[var(--muted-text)] mt-1 font-normal">
          Tell us about your project. You will receive an honest scope breakdown within 24 hours.
        </p>
      </div>

      {serverError && (
        <div className="p-3.5 mb-6 rounded-2xl bg-[#ff3b30]/10 border border-[#ff3b30]/20 text-[#ff3b30] text-xs font-medium flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp-field">Leave this field blank</label>
        <input
          id="hp-field"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-4">
        <FormField
          label="Your Name"
          name="fullName"
          placeholder="Dr. Rajesh Patel"
          required
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />

        <FormField
          label="WhatsApp / Phone Number"
          name="phone"
          type="tel"
          placeholder="98765 43210"
          required
          helperText="Used strictly to deliver your quote breakdown via WhatsApp or phone."
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            label="Business Type"
            name="businessType"
            placeholder="Dental Clinic, Cafe, Gym"
            required
            value={formData.businessType}
            onChange={handleChange}
            error={errors.businessType}
          />

          <FormField
            label="Service"
            name="service"
            type="select"
            required
            value={formData.service}
            onChange={handleChange}
            error={errors.service}
            options={[
              { value: "website-development", label: "Business Website" },
              { value: "google-business-profile", label: "Google Maps & SEO" },
              { value: "ecommerce", label: "WhatsApp Store / Catalog" },
              { value: "app-development", label: "Custom App / Portal" },
              { value: "it-support", label: "Business Email & IT Support" },
              { value: "ui-ux-design", label: "UI / UX Design" },
            ]}
          />
        </div>

        <FormField
          label="Budget Expectation"
          name="budget"
          type="select"
          value={formData.budget}
          onChange={handleChange}
          options={[
            { value: "Under ₹10,000", label: "Starter (Under ₹10,000)" },
            { value: "₹10,000 - ₹25,000", label: "Growth (₹10,000 - ₹25,000)" },
            { value: "₹25,000 - ₹50,000", label: "Advanced (₹25,000 - ₹50,000)" },
            { value: "Above ₹50,000", label: "Custom Application (₹50,000+)" },
          ]}
        />

        <FormField
          label="Notes (Optional)"
          name="message"
          type="textarea"
          rows={3}
          placeholder="Current website (if any), your city, or specific requirements..."
          value={formData.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 py-3 px-6 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-sm transition-all duration-200 disabled:opacity-50 active:scale-[0.98] shadow-xs cursor-pointer"
        >
          {isSubmitting ? "Submitting..." : "Send Free Quote Request"}
        </button>

        <p className="text-center text-[11px] text-[#86868b] mt-3 font-normal">
          100% confidential. No spam. Fixed price scope within 24 hours.
        </p>
      </div>
    </form>
  );
}
