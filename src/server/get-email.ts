"use server";

import { newsSchema } from "@/schema";
import * as z from "zod";
import { getEmailFromContactForm } from "../lib/news";

export const getEmail = async (values: z.infer<typeof newsSchema>) => {
  const validatedFields = newsSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Une erreur est survenue" };
  }
  console.log();

  if (validatedFields.success) {
    const { email } = validatedFields.data;
    try {
      await getEmailFromContactForm(email);
      return { success: "Email bien envoyé !" };
    } catch (error) {
      return { error: "Une erreur est survenue lors de l'envoi de l'email." };
    }
  }
};
