"use client";
import { Button } from "@/src/components/ui/button";
import { Typography } from "@/src/components/ui/typography";

import { Card } from "@/src/components/ui/card";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Swap from "../../components/ui/swap";

interface HeroPageProps {
  titreHero: string;
  sousTitreHero: string;
  buttonHero: string;
  buttonHero2: string;
  hrefButtonHero: string;
  hrefSwapLink: string;
}

export const Home = ({
  titreHero,
  sousTitreHero,
  buttonHero,
  buttonHero2,
  hrefButtonHero,

  hrefSwapLink,
}: HeroPageProps) => {
  return (
    <div
      className="xl:bg-fixed bg-center bg-cover object-cover mb-10 border-b shadow-md h-screen flex justify-center items-center flex-col"
      style={{
        backgroundImage: `url("/image/home2.png")`,
      }}
    >
      <Card
        variant={"default"}
        className="flex flex-col items-center justify-center bg-black/20 text-center xl:w-[1350px] md:w-[600px] w-[360px] p-5 backdrop-blur border-none text-white mt-20 pb-10"
      >
        {" "}
        <Typography
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
          className="p-5"
          variant="lead"
        >
          {titreHero} <br />
        </Typography>
        <Typography className="p-2" variant="lead2">
          {sousTitreHero}
        </Typography>
        <div>
          <Link href={"/artistes"}>
            <Button className="m-5 p-5" variant={"fyliaButtonBlue"}>
              {buttonHero}
            </Button>
          </Link>
          <ScrollLink
            to={hrefButtonHero}
            smooth={true}
            duration={1000}
            offset={-95}
          >
            <Button className=" p-5" variant={"fyliaButtonWhite"}>
              {buttonHero2}
            </Button>
          </ScrollLink>
        </div>
      </Card>{" "}
      <Swap hrefLink={hrefSwapLink} />
    </div>
  );
};
