import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";

const leadSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number is invalid"),
  businessType: z.string().min(1, "Business type is required"),
  service: z.string().min(1, "Service is required"),
  budget: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected"),
});

// Simple in-memory rate limiter: max 5 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown-ip";
    const now = Date.now();
    const rateData = rateLimitMap.get(ip);

    if (rateData) {
      if (now < rateData.resetAt) {
        if (rateData.count >= 5) {
          return NextResponse.json(
            { error: "Too many requests. Please chat with Aryan directly on WhatsApp." },
            { status: 429 }
          );
        }
        rateData.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    }

    const body = await req.json();
    const validation = leadSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid form submission", details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const lead = {
      ...validation.data,
      ip,
      submittedAt: new Date().toISOString(),
    };

    // Safely append to src/data/leads.json
    try {
      const leadsFilePath = path.join(process.cwd(), "src", "data", "leads.json");
      let leads = [];
      if (fs.existsSync(leadsFilePath)) {
        const fileContent = fs.readFileSync(leadsFilePath, "utf8");
        leads = fileContent ? JSON.parse(fileContent) : [];
      }
      leads.push(lead);
      fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), "utf8");
    } catch (fsErr) {
      console.warn("Could not write lead to local json:", fsErr);
    }

    return NextResponse.json({ success: true, message: "Quote request received" });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
