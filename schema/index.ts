import * as z from "zod";

export const formSchema = z.object({
  email: z.string().email({ message: "L'adresse email est invalide" }),
  name: z.string().min(1, { message: "Votre nom est obligatoire" }),
  tel: z.string().min(10, { message: "Le numéro de téléphone est invalide" }),
  location: z
    .string()
    .min(1, { message: "Votre localisation est obligatoire" }),
  message: z
    .string()
    .min(10, { message: "Le message doit comporter aux moins 10 charactères" }),
});

export const devisSchema = z.object({
  email: z.string().email({ message: "L'adresse email est invalide" }),
  name: z.string().min(1, { message: "Votre nom est obligatoire" }),
  firstname: z.string().min(1, { message: "Votre prénom est obligatoire" }),
  tel: z.string().min(10, { message: "Le numéro de téléphone est invalide" }),
  message: z.string().optional(),
  company: z.string().min(1, { message: "Votre société est obligatoire" }),
  location: z
    .string()
    .min(1, { message: "Votre localisation est obligatoire" }),
});

export const newsSchema = z.object({
  email: z.string().email({ message: "L'adresse email est invalide" }),
});

export const BlogsSchema = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.array(z.string()),
  status: z.enum(["draft", "published"]),
  coverUrl: z.string(),
  tags: z.array(z.string()).optional(),
  date: z.string(),
  auteur: z.string().optional(),
  imageAuteur: z.string(),
});

export const ArtisteSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(["draft", "published"]),
  coverUrl: z.string(),
  location: z.string(),
  tags: z.array(z.string()).optional(),
  price: z.string(),
  photo1: z.string().optional(),
  photo2: z.string().optional(),
  photo3: z.string().optional(),
  photo4: z.string().optional(),
  photo5: z.string().optional(),
});

export const LegalSchema = z.object({
  tags: z.array(z.string()).optional(),
});
