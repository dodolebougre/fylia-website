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
      <Carousel className="w-full max-w-5xl">
        <CarouselContent>{children}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Card>
  );
}
