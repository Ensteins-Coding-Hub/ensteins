import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    await sendContactEmail({ name, email, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email message." },
      { status: 500 }
    );
  }
}
