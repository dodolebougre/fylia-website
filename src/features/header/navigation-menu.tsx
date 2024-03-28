/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import {
  PiFlashlightThin,
  PiHeartThin,
  PiPaintBrushThin,
  PiQuestionThin,
  PiWallThin,
} from "react-icons/pi";
import { ListItem } from "../../components/ui/list-item-navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";

export function NavigationMenuHeader() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/artistes" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({ variant: "fyliaNav" })}
            >
              Artistes
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={navigationMenuTriggerStyle({ variant: "fyliaNav" })}
          >
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 ">
              <ListItem
                href="/peinture"
                title="Peinture sur mesure"
                icon={<PiPaintBrushThin />}
              >
                Aux couleurs de votre entreprise
              </ListItem>
              <ListItem
                href="/fresque"
                title="Fresque sur mesure"
                icon={<PiWallThin />}
              >
                A l'image de votre entreprise
              </ListItem>
              <ListItem
                href="/team-building"
                title="Team Building en entreprise"
                icon={<PiHeartThin />}
              >
                Pour féderer vos collaborateurs
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={navigationMenuTriggerStyle({ variant: "fyliaNav" })}
          >
            Ressources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 ">
              <ListItem
                href="/blogs"
                title="Les blogs fylia"
                icon={<PiFlashlightThin />}
              >
                Plein de sujet passionnant autour de l'art, du bien être et de
                l'aspect financier
              </ListItem>
              <ListItem
                href="/equipe"
                title="Qui sommes nous ?"
                icon={<PiQuestionThin />}
              >
                Découvrez notre équipe, et n'hesitez pas à nous contacter 😊
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
