/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/src/components/ui/button";
import { Typography } from "@/src/components/ui/typography";
import Link from "next/link";

interface BannerProp {
  source: string;
  text: string;
  textButton: string;
}
export const Banner = ({ source, text, textButton }: BannerProp) => {
  return (
    <div
      className="flex items-center justify-center h-96 xl:bg-fixed bg-parallax bg-cover my-10 flex-col bg-black/10 bg-center"
      style={{ backgroundImage: `url(${source})` }}
    >
      <Typography
        style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
        variant={"lead"}
        className="text-white  text-center max-w-[1350px]"
      >
        {text}
      </Typography>
      <Link href={"/devis"}>
        <Button variant={"fyliaButtonBlue"} className="mt-10">
          {textButton}
        </Button>
      </Link>
    </div>
  );
};
