import { Typography } from "@/src/components/ui/typography";
import { cn } from "@/src/lib/utils";
import { HTMLAttributes } from "react";
interface LayoutModuleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const LayoutModule = ({
  children,
  className,
  title,
  ...props
}: LayoutModuleProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center xl:flex-row text-center",
        className
      )}
      {...props}
    >
      <Typography variant={"h1"} className=" xl:rotate-[-90deg] xl:w-[150px]">
        {title}
      </Typography>
      <div
        className={cn(
          "xl:w-[1200px] md:w-[600px] w-[360px] flex flex-col items-center justify-center  m-10 shadow-lg",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutModule;
