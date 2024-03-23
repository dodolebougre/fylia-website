import { Card } from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";
import { ComponentProps, ElementType, PropsWithoutRef } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

interface CompareSliderProps {
  altImage1: string;
  srciImage1: string;
  altImage2: string;
  srciImage2: string;
  className?: PropsWithoutRef<ComponentProps<ElementType>>[string];
}
export const CompareSlider = ({
  altImage1,
  altImage2,
  srciImage1,
  srciImage2,
  className,
}: CompareSliderProps) => {
  return (
    <Card>
      <ReactCompareSlider
        className={cn(" shadow-md border", className)}
        boundsPadding={0}
        itemOne={<ReactCompareSliderImage alt={altImage1} src={srciImage1} />}
        itemTwo={<ReactCompareSliderImage alt={altImage2} src={srciImage2} />}
        keyboardIncrement="5%"
        position={50}
      />
    </Card>
  );
};
