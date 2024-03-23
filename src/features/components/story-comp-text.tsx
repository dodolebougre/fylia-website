import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Typography } from "@/src/components/ui/typography";
import { cn } from "@/src/lib/utils";

interface StoryCompTextProps {
  className?: string;
  title: string;
  title2: string;
  paragraphe: string;
}

export const StoryCompText = ({
  title,
  title2,
  paragraphe,
  className,
}: StoryCompTextProps) => {
  return (
    <Card className={cn("flex flex-col text-center  ", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <Typography variant={"small"} className="text-[#003dda] font-medium">
          {title2}
        </Typography>
      </CardHeader>
      <CardContent>
        <Typography variant="p">{paragraphe}</Typography>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
