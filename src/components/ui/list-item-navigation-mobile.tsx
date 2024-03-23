import { cn } from "@/src/lib/utils";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import * as React from "react";

import { SheetClose } from "./sheet";
import { Typography } from "./typography";

interface ListItemProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
  children?: React.ReactNode;
  href: string;
}

const ListItemMobile = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, icon, children, ...props }, ref) => {
    return (
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-[360px]",
            className
          )}
          {...props}
        >
          <SheetClose>
            <div className="flex">
              <div className="text-2xl p-2 mr-3 flex text-black text-center font-bold tracking-normal">
                {icon}
              </div>
              <div>
                <Typography className="font-normal text-start" variant="small">
                  {title}
                </Typography>
                <Typography variant={"small"}>{children}</Typography>
              </div>
            </div>
          </SheetClose>
        </Link>
      </NavigationMenuLink>
    );
  }
);

ListItemMobile.displayName = "ListItemMobile";

export { ListItemMobile, NavigationMenuLink };
