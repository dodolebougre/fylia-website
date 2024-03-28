import { cn } from "@/src/lib/utils";
import { ComponentProps, ElementType, PropsWithoutRef } from "react";
interface SimpleImageProps {
  image: string;
  alt: string;
  className?: PropsWithoutRef<ComponentProps<ElementType>>[string];
  size: string;
}
export const SimpleImage = ({
  image,
  alt,
  className,
  size,
}: SimpleImageProps) => {
  return (
    <div
      className={cn(
        "inline-block overflow-hidden bg-card text-card-foreground w-[350px] md:w-[590px] xl:w-[1190px] m-1 border shadow-md",
        className
      )}
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          // set the image to cover all the space
          backgroundSize: "cover",
        }}
        className={cn(
          "transition-transform duration-700 hover:scale-110 ease-in-out ",
          size
        )}
      />
    </div>
  );
};
