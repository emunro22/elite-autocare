import { NextRequest, NextResponse } from "next/server";
import { getResendClient, assertSent, BUSINESS_EMAIL, FROM_EMAIL } from "@/lib/resend";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 1 &&
    typeof b.email === "string" &&
    /\S+@\S+\.\S+/.test(b.email) &&
    typeof b.message === "string" &&
    b.message.trim().length > 4
  );
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Please fill in your name, email and a message." },
      { status: 400 }
    );
  }

  const { name, email, message } = body;

  try {
    const resend = getResendClient();
    assertSent(
      await resend.emails.send({
        from: FROM_EMAIL,
        to: BUSINESS_EMAIL,
        reply_to: email,
        subject: `New enquiry from ${name}`,
        html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
      })
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please call us on 07946 089 183." },
      { status: 500 }
    );
  }
}
