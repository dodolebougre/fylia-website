import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";
import React, { ComponentProps, ElementType, PropsWithoutRef } from "react";

interface ValuePropCompTextProps {
  icon: React.ReactNode;
  className?: PropsWithoutRef<ComponentProps<ElementType>>[string];
  title: string;
  text: React.ReactNode;
}

export const ValuePropCompText = ({
  title,
  text,
  className,
  icon,
}: ValuePropCompTextProps) => {
  return (
    <Card id="forces" className={cn("flex flex-col items-center", className)}>
      <CardHeader className="text-center flex items-center ">
        {icon}
        <CardTitle className="pt-2 ">{title}</CardTitle>
      </CardHeader>
      <CardContent className="">{text}</CardContent>
    </Card>
  );
};
