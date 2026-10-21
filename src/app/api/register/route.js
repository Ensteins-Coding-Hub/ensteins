import { NextResponse } from "next/server";
import { sendRegistrationEmail } from "@/lib/mail";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body?.name || !body?.email) {
      return NextResponse.json(
        { error: "Name and email are required for registration email." },
        { status: 400 }
      );
    }

    await sendRegistrationEmail(body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration email API error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send registration email." },
      { status: 500 }
    );
  }
}
