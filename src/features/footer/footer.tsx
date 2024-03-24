"use client";
import { FyliaName } from "@/src/components/ui/name";
import { Typography } from "@/src/components/ui/typography";
import Link from "next/link";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { PiTiktokLogo } from "react-icons/pi";
import { SiLinkedin } from "react-icons/si";
import { Newsletter } from "../components/newsletter";

const Footer = () => {
  return (
    <footer className="p-10 mt-10 flex flex-col shadow-[35px_35px_35px_35px_rgba(0,0,0,0.3)]">
      <section className="flex xl:flex-row flex-col lg:justify-between">
        <div className="flex flex-col items-center m-3 ">
          <FyliaName />
          <div className="mt-6 mb-6 flex ml-4">
            <a href="https://www.linkedin.com/company/fylia/">
              <SiLinkedin className="mr-3 text-2xl " />
            </a>
            <a href="https://www.instagram.com/fylia.art/">
              <BsInstagram className="mr-3 text-2xl " />
            </a>
            <a href="https://www.tiktok.com/@fylia.art">
              <PiTiktokLogo className="mr-3 text-2xl " />
            </a>
          </div>
        </div>

        <div className="xl:flex xl:text-start text-center gap-20 justify-center">
          <Newsletter></Newsletter>
          <div className="mb-5 xl:w-[170px] flex flex-col items-center xl:items-start">
            <Typography variant={"h2"}>Sommaire</Typography>
            <Link href="/">
              <Typography
                variant={"small"}
                className="hover:underline  transition duration-700 ease-in-out"
              >
                Acceuil
              </Typography>
            </Link>
            <Link href="/peinture">
              <Typography
                variant={"small"}
                className="hover:underline  transition duration-700 ease-in-out"
              >
                Peinture sur mesure
              </Typography>
            </Link>
            <Link href="/fresque">
              <Typography
                variant={"small"}
                className="hover:underline  transition duration-700 ease-in-out"
              >
                Fresque sur mesure
              </Typography>
            </Link>
            <Link href="/team-building">
              <Typography
                variant={"small"}
                className="hover:underline  transition duration-700 ease-in-out"
              >
                Team building
              </Typography>
            </Link>
            <Link href="/blogs">
              <Typography
                variant={"small"}
                className="hover:underline  transition duration-700 ease-in-out"
              >
                Les blogs de fylia
              </Typography>
            </Link>
            <Link href="/histoire">
              <Typography
                variant={"small"}
                className="hover:underline transition duration-700 ease-in-out"
              >
                Qui sommes nous ?
              </Typography>
            </Link>
          </div>
          <div className="mb-5">
            <Typography variant={"h2"}>Contact</Typography>
            <div className="flex items-center justify-center xl:justify-start">
              <CiMail />
              <Typography variant={"small"} className="ml-2">
                {" "}
                moncontact@fylia.fr
              </Typography>
            </div>
            <div className="flex items-center justify-center xl:justify-start">
              <BsTelephone />
              <Typography variant={"small"} className="ml-2">
                0628979548
              </Typography>
            </div>
          </div>
          <div className="mb-5 ">
            <Typography variant={"h2"}>Légal </Typography>

            <Link href="/legal?tag=CGV">
              <Typography
                variant={"small"}
                className="hover:underline  transition duration-700 ease-in-out"
              >
                CGV
              </Typography>
            </Link>
            <Link href="/legal?tag=Mentions+l%C3%A9gales">
              <Typography
                variant={"small"}
                className="hover:underline  transition duration-700 ease-in-out"
              >
                Mentions légales
              </Typography>
            </Link>
            <Link href="/legal?tag=Politiques+de+confidentialit%C3%A9s">
              <Typography
                variant={"small"}
                className="hover:underline  transition duration-700 ease-in-out"
              >
                Politiques de confidentialités
              </Typography>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <hr className="my-5 border-t  w-full" />
        <div className="text-center">
          <Typography variant={"small"}>
            © All right reserved by Fylia
          </Typography>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
