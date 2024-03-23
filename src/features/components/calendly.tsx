"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/src/components/ui/alert-dialog";
import { InlineWidget } from "react-calendly";

interface AlertCalendlyPageProps {
  children: React.ReactNode;
}

export const AlertCalendlyPage = ({ children }: AlertCalendlyPageProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>{" "}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Vous pouvez aussi nous appeler au 0628979548, un membre de la team
            prendra en main votre projet.
          </AlertDialogTitle>{" "}
        </AlertDialogHeader>
        <InlineWidget url="https://calendly.com/luc-malfatti/30min?back=1&month=2024-01" />

        <AlertDialogCancel>Fermer</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};
