/* eslint-disable react/no-unescaped-entities */
"use client";
import { Typography } from "@/src/components/ui/typography";
import { InlineWidget } from "react-calendly";

const RendezVousPage = () => {
  return (
    <div className="m-20 flex flex-col">
      <Typography variant={"h2"} className="text-center mt-20 mb-5">
        {" "}
        Vous pouvez aussi nous appeler au 0628979548, un membre de l'équipe
        prendra en main votre projet.
      </Typography>
      <InlineWidget url="https://calendly.com/luc-malfatti/30min?back=1&month=2024-01" />
    </div>
  );
};

export default RendezVousPage;
