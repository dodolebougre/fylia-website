/* eslint-disable react/no-unescaped-entities */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { z } from "zod";

import { formSchema } from "@/schema";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Textarea } from "@/src/components/ui/textarea";
import { sendEmail } from "@/src/server/send-email";

import { Typography } from "@/src/components/ui/typography";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";

export const ContactForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      tel: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setError(error);
    setSuccess(success);
    sendEmail(values).then((data) => {
      if (data?.error) {
        console.log(data.error);
        toast.error("L'email n'a pas été envoyé !");
        form.reset();
        setError(data.error);
      }
      if (data?.success) {
        console.log(data.success);
        toast.success("L'email a bien été envoyé 😊");
        form.reset();
        setSuccess(data.success);
      }
    });
  };

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardHeader>
            <Typography variant="h1">
              Vous êtes un artiste peintre, un designer ou un graphiste ?
            </Typography>
            <CardTitle>Vous voulez faire part à l'aventure ?</CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name={"name"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-roboto text-sm font-light xl:text-md">
                    Votre nom d'artiste
                    <strong className="text-red-500">*</strong>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Lucie" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="py-5">
                  <FormLabel className="font-roboto text-sm font-light xl:text-md">
                    Votre email<strong className="text-red-500">*</strong>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="moncontact@fylia.fr" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tel"
              render={({ field }) => (
                <FormItem className="pb-5">
                  <FormLabel className="font-roboto text-sm font-light xl:text-md">
                    Votre numéro de téléphone
                    <strong className="text-red-500">*</strong>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="0628545875" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"location"}
              render={({ field }) => (
                <FormItem className="pb-5">
                  <FormLabel className="font-roboto text-sm font-light xl:text-md">
                    Votre localisation{" "}
                    <strong className="text-red-500">*</strong>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Marseille" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-roboto text-sm font-light xl:text-md">
                    Message<strong className="text-red-500">*</strong>{" "}
                    (profession et motivation)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Laissez nous un petit message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            {" "}
            <Toaster />
            <Button variant={"fyliaButtonWhite"} type="submit">
              Envoyer le formulaire ☞
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
