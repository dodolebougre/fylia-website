"use client";

import { Button } from "@/src/components/ui/button";
import { FyliaName } from "@/src/components/ui/name";
import { Typography } from "@/src/components/ui/typography";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { MobileMenu } from "./mobile-menu";
import { NavigationMenuHeader } from "./navigation-menu";

export const Header = () => {
  return (
    <nav className="fixed left-0 top-0 w-screen z-20 text-lg first-letter border-b border-solid transition duration-500 ease-in-out bg-white/90 backdrop-blur shadow-xl">
      <div className=" flex items-center justify-between p-3 mt-2">
        <div className="flex ml-4 justify-center">
          <a href="https://www.linkedin.com/company/fylia/">
            <SiLinkedin className="mr-3 text-1xl lg:text-2xl" />
          </a>
          <a href="https://www.instagram.com/fylia.art/">
            <BsInstagram className="mr-3 text-1xl lg:text-2xl" />
          </a>
        </div>{" "}
        <Link href="/">
          <div className="text-center lg:ml-[305px] sm:ml-[-25px] ml-[-15px] ">
            <FyliaName />
            <Typography variant="small" className="text-sm font-light">
              Feel good by art
            </Typography>
          </div>
        </Link>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        <div className="hidden lg:block ">
          <div className="flex flex-row">
            <NavigationMenuHeader />
            <Link href={"/rendez-vous"}>
              <Button variant={"fyliaButtonBlue"} size={"default"}>
                Contactez-nous !
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
