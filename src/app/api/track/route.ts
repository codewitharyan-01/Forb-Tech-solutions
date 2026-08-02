import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    // Determine client IP
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    // Call free IP lookup (ip-api)
    let org = "Unknown Organization";
    let location = "Unknown Location";
    
    if (ip !== "127.0.0.1" && ip !== "::1") {
      const ipRes = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,city,org,query`);
      if (ipRes.ok) {
        const data = await ipRes.json();
        if (data.status === "success") {
          org = data.org || "Unknown ISP/Org";
          location = `${data.city}, ${data.country}`;
        }
      }
    } else {
      org = "Localhost Development";
      location = "Local Environment";
    }

    // Read current traffic.json
    const filePath = path.join(process.cwd(), "src/data/traffic.json");
    let traffic = [];
    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      traffic = JSON.parse(fileData);
    } catch (e) {
      // File doesn't exist or is empty
    }

    // Add new visit
    const newVisit = {
      id: `visit-${Date.now()}`,
      ip: ip,
      org: org,
      location: location,
      timestamp: new Date().toLocaleString(),
    };

    // Keep only last 50 visits to prevent bloating
    traffic.unshift(newVisit);
    if (traffic.length > 50) traffic.pop();

    await fs.writeFile(filePath, JSON.stringify(traffic, null, 2));

    return NextResponse.json({ success: true, visit: newVisit });
  } catch (error) {
    console.error("Tracker Error:", error);
    return NextResponse.json({ error: "Failed to track" }, { status: 500 });
  }
}
