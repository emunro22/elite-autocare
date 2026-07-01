import { NextRequest, NextResponse } from "next/server";
import { getResendClient, BUSINESS_EMAIL, FROM_EMAIL } from "@/lib/resend";

export type BookingPayload = {
  name: string;
  email: string;
  phone: string;
  address: string;
  vehicle: string;
  package: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
};

function isValidPayload(body: unknown): body is BookingPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 1 &&
    typeof b.email === "string" &&
    /\S+@\S+\.\S+/.test(b.email) &&
    typeof b.phone === "string" &&
    b.phone.trim().length > 4 &&
    typeof b.address === "string" &&
    b.address.trim().length > 3 &&
    typeof b.vehicle === "string" &&
    typeof b.package === "string" &&
    typeof b.preferredDate === "string" &&
    typeof b.preferredTime === "string"
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
      { error: "Please fill in all required fields with valid details." },
      { status: 400 }
    );
  }

  const { name, email, phone, address, vehicle, package: pkg, preferredDate, preferredTime, notes } = body;

  try {
    const resend = getResendClient();

    // Notify the business
    await resend.emails.send({
      from: FROM_EMAIL,
      to: BUSINESS_EMAIL,
      reply_to: email,
      subject: `New booking request: ${pkg} — ${name}`,
      html: `
        <h2>New booking request</h2>
        <p><strong>Package:</strong> ${pkg}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address / postcode:</strong> ${address}</p>
        <p><strong>Vehicle:</strong> ${vehicle}</p>
        <p><strong>Preferred date:</strong> ${preferredDate}</p>
        <p><strong>Preferred time:</strong> ${preferredTime}</p>
        <p><strong>Notes:</strong> ${notes || "—"}</p>
      `,
    });

    // Confirmation to the customer
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "We've received your Elite Autocare booking request",
      html: `
        <h2>Thanks, ${name}!</h2>
        <p>We've received your booking request for the <strong>${pkg}</strong> package on <strong>${preferredDate}</strong> at <strong>${preferredTime}</strong>.</p>
        <p>We'll be in touch shortly at ${phone} or by email to confirm your slot.</p>
        <p>&mdash; Elite Autocare</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Booking email failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your booking. Please call us on 07946 089 183." },
      { status: 500 }
    );
  }
}
