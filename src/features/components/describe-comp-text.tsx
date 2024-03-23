import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Typography } from "@/src/components/ui/typography";
import { cn } from "@/src/lib/utils";
import Link from "next/link";

interface DescribeCompTextProps {
  className?: string;
  title: string;
  title2: string;
  list1: string;
  list2: string;
  list3: string;
  buttonText: string;
  buttonHref: string;
}

export const DescribeCompText = ({
  title,
  title2,
  list1,
  list2,
  list3,
  buttonText,
  buttonHref,
  className,
}: DescribeCompTextProps) => {
  return (
    <Card className={cn("flex flex-col text-center  ", className)}>
      <CardHeader>
        <Typography variant={"h1"}>{title}</Typography>
        <CardTitle>{title2}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="text-1xl xl:text-lg mt-3 font-light">
          <Typography variant="p">{list1}</Typography>
          <Typography variant="p">{list2}</Typography>
          <Typography variant="p">{list3}</Typography>
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={buttonHref}>
          <Button variant={"fyliaButtonBlue"}>{buttonText}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
