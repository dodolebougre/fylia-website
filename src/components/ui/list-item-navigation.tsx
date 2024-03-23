import { cn } from "@/src/lib/utils";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import * as React from "react";
import { Typography } from "./typography";

interface ListItemProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
  children?: React.ReactNode;
  href: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
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
          <div className="flex">
            <div className="text-2xl p-2 mr-3 flex text-black text-center tracking-normal font-bold font-roboto">
              {icon}
            </div>
            <div>
              <Typography className="font-normal text-start" variant="small">
                {title}
              </Typography>
              <Typography variant={"small"}>{children}</Typography>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    );
  }
);

ListItem.displayName = "ListItem";

export { ListItem, NavigationMenuLink };
