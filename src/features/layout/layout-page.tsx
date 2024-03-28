import { Typography } from "@/src/components/ui/typography";
import { cn } from "@/src/lib/utils";
import { ComponentProps, ElementType, PropsWithoutRef } from "react";

interface LayoutPageProps {
  children?: React.ReactNode;
  className?: PropsWithoutRef<ComponentProps<ElementType>>[string];
  title: string;
}
export const LayoutPage = ({ children, className, title }: LayoutPageProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center mt-[120px] ",
        className
      )}
    >
      <Typography variant={"h1"}>{title}</Typography>
      <div className="xl:w-[1000px] md:w-[600px] w-[360px] flex flex-col items-center justify-center  m-10 shadow-lg border">
        {children}
      </div>
    </div>
  );
};
