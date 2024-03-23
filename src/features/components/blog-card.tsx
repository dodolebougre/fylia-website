import { Typography } from "@/src/components/ui/typography";
import { calculateReadingTime } from "@/src/lib/posts/calculate-reading-time";
import { Img } from "@react-email/components";
import Link from "next/link";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import type { Post } from "../../lib/posts/blogs-config";

type BlogCardProps = {
  post: Post;
};

export const BlogCard = (props: BlogCardProps) => {
  return (
    <Link href={`/blogs/${props.post.slug}`}>
      <Card
        variant={"default"}
        className="transition-all shadow-none hover:shadow-xl min-h-[470px]"
      >
        <CardHeader className="h-fit">
          <AspectRatio
            ratio={16 / 9}
            className="overflow-hidden border shadow-md"
          >
            <Img
              src={props.post.attributes.coverUrl}
              alt={props.post.attributes.title}
              className="size-full object-cover"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="space-y-2">
          <CardTitle>{props.post.attributes.title}</CardTitle>
          <CardDescription>
            {props.post.attributes.description}
          </CardDescription>{" "}
        </CardContent>
        <CardFooter className="flex flex-col gap-2 items-center justify-center">
          {" "}
          <Typography variant={"small"} className="text-[#003dda] font-medium ">
            {calculateReadingTime(props.post.content)} min ⏱️
          </Typography>
          <Typography variant={"small"}>
            {props.post.attributes.date}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};
