import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  purpose?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { name, email, message, purpose } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim() || !purpose?.trim()) {
      return NextResponse.json(
        { status: 400, error: "Name, email, purpose, and message are required." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { status: 400, error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toInbox = process.env.CONTACT_INBOX || "admin@marrianfoundation.org";
    const fromAddress =
      process.env.RESEND_FROM || "Marrian Foundation <onboarding@resend.dev>";

    if (!apiKey) {
      console.info("[contact]", { name, email, purpose, message });
      return NextResponse.json({
        status: 200,
        message: "Message accepted (RESEND_API_KEY not configured; logged server-side).",
      });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [toInbox],
      replyTo: email,
      subject: `[Marrian Foundation] ${purpose} — ${name}`,
      html: `
        <h2>New contact message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Purpose:</strong> ${escapeHtml(purpose)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { status: 500, error: error.message || "Failed to send email." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      status: 200,
      message: "Message sent successfully.",
    });
  } catch {
    return NextResponse.json(
      { status: 500, error: "Unexpected server error." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
