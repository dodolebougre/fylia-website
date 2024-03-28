import { cn } from "@/src/lib/utils";
import { ComponentProps, ElementType, PropsWithoutRef } from "react";

interface LayoutDescribeProps {
  children?: React.ReactNode;
  className?: PropsWithoutRef<ComponentProps<ElementType>>[string];
}
export const LayoutCardItem = ({
  children,
  className,
}: LayoutDescribeProps) => {
  return (
    <section
      className={cn(
        "xl:flex-row border justify-center items-center flex flex-col xl:w-[1000px] md:w-[600px] w-[360px] bg-white ",
        className
      )}
    >
      {children}
    </section>
  );
};
