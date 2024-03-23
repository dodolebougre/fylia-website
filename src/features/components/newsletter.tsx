import { newsSchema } from "@/schema";
import { Button } from "@/src/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { Typography } from "@/src/components/ui/typography";
import { getEmail } from "@/src/server/get-email";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { z } from "zod";

export const Newsletter = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof newsSchema>>({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof newsSchema>) => {
    setError(error);
    setSuccess(success);
    getEmail(values).then((data) => {
      if (data?.error) {
        console.log(data.error);
        toast.error("L'email n'a pas été envoyé !");
        form.reset();
        setError(data.error);
      }
      if (data?.success) {
        console.log(data.success);
        toast.success("Vous êtes inscrit a la newsletter de fylia 🥳");
        form.reset();
        setSuccess(data.success);
      }
    });
  };

  return (
    <div className="flex flex-col xl:justify-normal xl:items-start items-center justify-center mb-4">
      <Form {...form}>
        <Typography variant="h2" className="mb-2">
          Newsletter
        </Typography>
        <form className="flex" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="m-0">
                <FormControl>
                  <Input placeholder="pablo.picasso@fylia.fr" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Toaster />
          <Button className="m-0" type="submit" variant={"fyliaButtonBlue"}>
            Envoyer
          </Button>
        </form>
      </Form>
    </div>
  );
};
