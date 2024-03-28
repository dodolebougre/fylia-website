"use server";

import { devisSchema, formSchema } from "@/schema";
import * as z from "zod";
import { sendEmailFromContactForm, sendEmailFromDevisForm } from "../lib/mail";

export const sendEmail = async (values: z.infer<typeof formSchema>) => {
  const validatedFields = formSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Une erreur est survenue",
    };
  }

  if (validatedFields.success) {
    const { email, name, message, tel, location } = validatedFields.data;
    try {
      await sendEmailFromContactForm(email, name, message, tel, location);
      return { success: "Email bien envoyé !" };
    } catch (error) {
      return { error: "Une erreur est survenue lors de l'envoi de l'email." };
    }
  }
};

export const sendDevis = async (values: z.infer<typeof devisSchema>) => {
  const validatedFields = devisSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Une erreur est survenue",
    };
  }

  if (validatedFields.success) {
    const { email, name, message, tel, company, firstname, location, title } =
      validatedFields.data;
    try {
      await sendEmailFromDevisForm(
        email,
        name,
        message,
        tel,
        company,
        firstname,
        location,
        title
      );
      return { success: "Email bien envoyé !" };
    } catch (error) {
      return { error: "Une erreur est survenue lors de l'envoi de l'email." };
    }
  }
};
