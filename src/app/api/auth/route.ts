import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const adminPass = process.env.ADMIN_PASSWORD;

    if (!adminPass) {
      return NextResponse.json({ error: "ADMIN_PASSWORD not set on server." }, { status: 500 });
    }

    if (password === adminPass) {
      return NextResponse.json({ success: true, token: "authorized" });
    }

    return NextResponse.json({ error: "Invalid password." }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
