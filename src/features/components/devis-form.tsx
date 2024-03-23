/* eslint-disable react/no-unescaped-entities */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { z } from "zod";

import { devisSchema } from "@/schema";
import { Card, CardContent, CardFooter } from "@/src/components/ui/card";
import { Textarea } from "@/src/components/ui/textarea";
import { sendDevis } from "@/src/server/send-email";

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
import { LayoutPage } from "../layout/layout-page";

export const DevisForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof devisSchema>>({
    resolver: zodResolver(devisSchema),
    defaultValues: {
      email: "",
      name: "",
      firstname: "",
      tel: "",
      message: "",
      company: "",
      location: "",
    },
  });

  const onSubmit = (values: z.infer<typeof devisSchema>) => {
    setError(error);
    setSuccess(success);
    sendDevis(values).then((data) => {
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
    <LayoutPage title={"Devis sur mesure en 1 min"}>
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CardContent>
              <FormField
                control={form.control}
                name={"name"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-roboto text-sm font-light xl:text-md">
                      Votre nom <strong className="text-red-500">*</strong>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Picasso" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"firstname"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-roboto text-sm font-light xl:text-md">
                      Votre prénom <strong className="text-red-500">*</strong>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Pablo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel className="font-roboto text-sm font-light xl:text-md">
                      Votre email <strong className="text-red-500">*</strong>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="picasso.pablo@fylia.fr" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tel"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel className="font-roboto text-sm font-light xl:text-md">
                      Votre numéro de téléphone{" "}
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
                name={"company"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-roboto text-sm font-light xl:text-md">
                      Le nom de votre société{" "}
                      <strong className="text-red-500">*</strong>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Corp" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"location"}
                render={({ field }) => (
                  <FormItem>
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
                  <FormItem className="mt-4">
                    <FormLabel className="font-roboto text-sm font-light xl:text-md">
                      Message (activité souhaité, date, nombre de participant,
                      budget)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Si vous le souhaitez, veuillez indiquer l'activité que vous souhaitez faire, la date de l'evenement, le nombre de participant ainsi que le budget alloué ..."
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
              <Button variant={"fyliaButtonBlue"} type="submit">
                Envoyer le formulaire ☞
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </LayoutPage>
  );
};
