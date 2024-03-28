"use client";
import { Button } from "@/src/components/ui/button";
import { Typography } from "@/src/components/ui/typography";
import Link from "next/link";

import Typewriter from "typewriter-effect";

interface HeroPageProps {
  backgroundImageHref: string;
  titreHero: string;
  sousTitreHero: string;
  buttonHero: string;
  hrefButtonHero: string;
  typeWriter1: string;
  typeWriter2: string;
  typeWriter3: string;
}

export const Hero = ({
  backgroundImageHref,
  titreHero,
  sousTitreHero,
  buttonHero,
  hrefButtonHero,
  typeWriter1,
  typeWriter2,
  typeWriter3,
}: HeroPageProps) => {
  return (
    <div
      className="bg-fixed bg-center bg-cover object-cover mb-10 border-b shadow-md"
      style={{
        backgroundImage: `url("${backgroundImageHref}")`,
      }}
    >
      <div className="flex flex-col items-center justify-center bg-black/20 text-center pt-20 pb-20 backdrop-blur-sm  text-white mt-20 w-screen">
        {" "}
        <Typography
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
          className="p-5"
          variant="lead"
        >
          {titreHero} <br />
          <Typewriter
            options={{
              strings: [typeWriter1, typeWriter2, typeWriter3],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </Typography>
        <Typography className="px-20" variant="lead2">
          {sousTitreHero}
        </Typography>
        <Link href={hrefButtonHero}>
          <Button className="m-5 p-5" variant={"fyliaButtonWhite"}>
            {buttonHero}
          </Button>
        </Link>
      </div>
    </div>
  );
};
