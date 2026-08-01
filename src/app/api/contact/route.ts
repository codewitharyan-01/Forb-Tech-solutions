import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // You need to get a free Access Key from https://web3forms.com/ 
    // for your email: aryan04102001@gmail.com
    const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_KEY_HERE";

    if (WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_KEY_HERE") {
      // If no key is set yet, we just log it successfully so the UI works
      console.log("Mock Email Sent to aryan04102001@gmail.com:", body);
      return NextResponse.json({ success: true, message: "Mock email sent" });
    }

    // Send the email via Web3Forms
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "New Lead from ForbTech Website!",
        from_name: "ForbTech Bot",
        message: `You have a new lead from the 12-second popup!\n\nEmail: ${body.email}`,
      }),
    });

    const data = await res.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
