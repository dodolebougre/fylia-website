import { Card } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

interface CarouselCardProps {
  children?: React.ReactNode;
}

export function CarouselCard({ children }: CarouselCardProps) {
  return (
    <Card className="flex items-center justify-center">
      <Carousel className="xl:w-[890px] md:w-[490px] w-[250px] max-w-5xl">
        <CarouselContent>{children}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Card>
  );
}
