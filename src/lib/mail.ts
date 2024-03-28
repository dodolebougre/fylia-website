import DevisForm from "@/emails/devis-form";
import { Resend } from "resend";
import ContactForm from "../../emails/contact-form";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailFromContactForm = async (
  email: string,
  name: string,
  message: string,
  tel: string,
  location: string
) => {
  await resend.emails.send({
    from: "Fylia <moncontact@fylia.fr>",
    to: ["dorian.boatti@fylia.fr"],
    subject: "Formulaire de contact d'artiste",
    react: ContactForm({ email, name, tel, message, location }),
  });
};

export const sendEmailFromDevisForm = async (
  email: string,
  name: string,
  message: string | undefined,
  tel: string,
  company: string,
  firstname: string,
  location: string,
  title: string | undefined
) => {
  await resend.emails.send({
    from: "Fylia <moncontact@fylia.fr>",
    to: ["dorian.boatti@fylia.fr"],
    subject: "Devis sur mesure en 1 min",
    react: DevisForm({
      email,
      name,
      tel,
      message,
      company,
      firstname,
      location,
      title,
    }),
  });
};
