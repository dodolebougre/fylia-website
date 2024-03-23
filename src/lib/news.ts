import { Resend } from "resend";

export const getEmailFromContactForm = async (email: string) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.contacts.create({
    email,
    unsubscribed: false,
    audienceId: process.env.RESEND_AUDIENCE as string,
  });
};
