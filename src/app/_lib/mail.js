import { Resend } from "resend";

export async function sendMail(message, subject, to) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "The Oak African Store  <onboarding@resend.dev>",
    tags: [
      {
        name: "Oak African Store",
        value: "Oak African Store",
      },
    ],
    to,
    subject,
    text: message,
    html: message,
  });
}