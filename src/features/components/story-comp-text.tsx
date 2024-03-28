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
  icon: React.ReactNode;
}

export const StoryCompText = ({
  title,
  title2,
  paragraphe,
  className,
  icon,
}: StoryCompTextProps) => {
  return (
    <Card className={cn("flex flex-col text-center  ", className)}>
      <CardHeader className="flex flex-col items-center xl:items-stretch ">
        {icon}
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
