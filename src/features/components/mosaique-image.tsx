import { Card } from "@/src/components/ui/card";
import Image from "next/image";
import React from "react";

const Mosaic: React.FC = () => {
  // Tableau de neuf images avec leurs URL respectives
  const images = [
    "https://images.unsplash.com/photo-1708977007207-417006364d4d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100x100",
    "https://images.unsplash.com/photo-1708977007207-417006364d4d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100x100",
    "https://images.unsplash.com/photo-1708977007207-417006364d4d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <Card className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        <Image
          className="border shadow-md"
          src={images[0]}
          alt={`Image 0`}
          width={600}
          height={600}
        />
        <div className="flex flex-col gap-4">
          <Image
            className="border shadow-md"
            src={images[1]}
            alt={`Image 1`}
            width={300}
            height={300}
          />
          <Image
            className="border shadow-md"
            src={images[2]}
            alt={`Image 2`}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {images.slice(3).map((image, index) => (
          <Image
            key={index + 3}
            className="border shadow-md"
            src={image}
            alt={`Image ${index + 3}`}
            width={300}
            height={300}
          />
        ))}
      </div>
    </Card>
  );
};

export default Mosaic;
