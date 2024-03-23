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

import { Typography } from "@/src/components/ui/typography";
import type { Post } from "../../lib/posts-artiste/artiste-config";
type ArtisteCardProps = {
  post: Post;
};

export const ArtisteCard = (props: ArtisteCardProps) => {
  return (
    <Link href={`/artistes/${props.post.slug}`}>
      <Card
        variant={"default"}
        className="transition-all shadow-none hover:shadow-xl  min-h-[450px]"
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
          <Typography className="font-medium text-blue-700" variant={"small"}>
            {" "}
            {props.post.attributes.location}
          </Typography>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 items-center justify-center">
          <Typography className=" italic" variant={"p"}>
            {" "}
            {props.post.attributes.price}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};
