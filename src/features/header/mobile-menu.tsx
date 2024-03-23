/* eslint-disable react/no-unescaped-entities */

import { FyliaName } from "@/src/components/ui/name";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "../../components/ui/button";

import { NavigationMenuMobile } from "./navigation-menu-mobile";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="fyliaButtonBlue">
          <AiOutlineMenu></AiOutlineMenu>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Link className="text-center" href={"/"}>
            <SheetClose>
              <FyliaName />{" "}
            </SheetClose>
          </Link>
        </SheetHeader>

        <div className="mx-auto w-full max-w-sm">
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2 flex-col"></div>
          </div>
          <NavigationMenuMobile />
          <SheetFooter>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
