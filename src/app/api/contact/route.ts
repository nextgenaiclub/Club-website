import { EmailTemplate } from "@/components/resend/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!); // Add ! if TypeScript complains

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Add email validation (e.g., using a regex or library like validator.js)
    console.log("Sending email via Resend:", { name, email, message }); // For debugging

    const { data, error } = await resend.emails.send({
      from: "Contact Form <noreply@yourdomain.com>", // Replace with VERIFIED domain email
      to: ["your-actual-email@yourdomain.com"], // Replace with YOUR real email (not delivered@resend.dev)
      subject: "New Contact Form Submission",
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    console.log("Email sent successfully:", data); // For debugging
    return Response.json({ success: true, data });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}