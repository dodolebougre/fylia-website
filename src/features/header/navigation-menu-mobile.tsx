/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/src/components/ui/button";
import { ListItemMobile } from "@/src/components/ui/list-item-navigation-mobile";
import { SheetClose } from "@/src/components/ui/sheet";
import { Typography } from "@/src/components/ui/typography";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { PiHeartThin, PiPaintBrushThin, PiWallThin } from "react-icons/pi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { AlertCalendlyPage } from "../components/calendly";

export function NavigationMenuMobile() {
  return (
    <div>
      <Link href="/artistes" className="flex flex-col items-start p-3">
        <SheetClose>
          <Typography
            variant={"p"}
            className="cursor-pointer
            hover:underline transition-transform duration-300 font-light"
          >
            Artistes
          </Typography>
        </SheetClose>
      </Link>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            className="font-light text-md flex justify-normal p-3 gap-1 border-t
          "
          >
            Services
          </AccordionTrigger>
          <AccordionContent className="p-0 m-0">
            <SheetClose className="text-start">
              <NavigationMenu className="border-b border-t">
                {" "}
                <ListItemMobile
                  href="/peinture"
                  title="Peinture sur mesure"
                  icon={<PiPaintBrushThin />}
                >
                  Aux valeurs de vos salariés
                </ListItemMobile>
              </NavigationMenu>
            </SheetClose>
          </AccordionContent>
          <AccordionContent className="p-0 m-0">
            <SheetClose className="text-start">
              <NavigationMenu className="border-b mt-0 pt-0">
                <ListItemMobile
                  href="/fresque"
                  title="Fresque sur mesure"
                  icon={<PiWallThin />}
                >
                  A l'image de votre entreprise
                </ListItemMobile>
              </NavigationMenu>
            </SheetClose>
          </AccordionContent>
          <AccordionContent className="p-0 m-0">
            <SheetClose className="text-start">
              <NavigationMenu className="p-0 m-0">
                {" "}
                <ListItemMobile
                  href="/team-building"
                  title="Team Building en entreprise"
                  icon={<PiHeartThin />}
                >
                  Pour une activité exceptionelle
                </ListItemMobile>
              </NavigationMenu>
            </SheetClose>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            className="font-light text-md flex justify-normal p-3 gap-1 
          "
          >
            Ressources
          </AccordionTrigger>
          <AccordionContent className="p-0 m-0">
            <SheetClose className="text-start">
              <NavigationMenu className="border-b border-t">
                {" "}
                <ListItemMobile
                  href="/blogs"
                  title="Les blogs fylia"
                  icon={<PiPaintBrushThin />}
                  className="text-start "
                >
                  Plein de sujets passionnants
                </ListItemMobile>
              </NavigationMenu>
            </SheetClose>
          </AccordionContent>
          <AccordionContent className="p-0 m-0">
            <SheetClose className="text-start">
              <NavigationMenu className="mt-0 pt-0">
                <ListItemMobile
                  href="/histoire"
                  title="Qui sommes nous ?"
                  icon={<PiWallThin />}
                >
                  Découvrez notre équipe 😊
                </ListItemMobile>
              </NavigationMenu>
            </SheetClose>
          </AccordionContent>
          <AccordionContent className="p-0 m-0"></AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex items-center justify-center m-4">
        <AlertCalendlyPage>
          <Button variant={"fyliaButtonBlue"} size={"default"}>
            Contactez-nous !
          </Button>
        </AlertCalendlyPage>
      </div>
    </div>
  );
}
