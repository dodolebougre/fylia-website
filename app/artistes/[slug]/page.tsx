import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Badge } from "@/src/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { Typography } from "@/src/components/ui/typography";
import { LayoutPage } from "@/src/features/layout/layout-page";
import { Markdown } from "@react-email/components";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, buttonVariants } from "../../../src/components/ui/button";
import { logger } from "../../../src/lib/logger";
import type { PostParams } from "../../../src/lib/posts-artiste/artiste-config";
import {
  getCurrentPost,
  getPosts,
} from "../../../src/lib/posts-artiste/artiste-config";

export async function ArtistPage({ params }: PostParams): Promise<Metadata> {
  const post = await getCurrentPost(params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.attributes.title,
    description: post.attributes.description,
    authors: {
      name: "Fylia",
      url: "https://fylia.fr",
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function RoutePage(props: PostParams) {
  const post = await getCurrentPost(props.params.slug);

  if (!post) {
    notFound();
  }

  if (
    post.attributes.status === "draft" &&
    process.env.VERCEL_ENV === "production"
  ) {
    logger.warn(`Post "${post.attributes.title}" is a draft`);
    notFound();
  }

  return (
    <LayoutPage title={""}>
      <Link className={buttonVariants({ variant: "link" })} href="/artistes">
        <ArrowLeft size={16} /> Back
      </Link>
      <Card>
        <CardHeader className="flex w-full flex-col gap-2 bg-blue-700 p-10 text-white backdrop-blur">
          {post.attributes.status === "draft" ? (
            <Badge className="w-fit" variant="secondary">
              Brouillon
            </Badge>
          ) : null}
          <div className="flex items-center justify-center flex-col">
            <CardTitle className="drop-shadow-sm">
              {post.attributes.title}
            </CardTitle>

            <Avatar className="border">
              {" "}
              <AvatarImage src={post.attributes.coverUrl} alt="Valentin" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </CardHeader>

        <CardContent className="flex xl:flex-row flex-col justify-center items-center">
          <Carousel className=" w-[250px] m-10 ">
            <CarouselContent>
              <CarouselItem className="flex items-center justify-center ">
                <Card
                  style={{
                    backgroundImage: `url(${post.attributes.photo1})`,
                    // center the image
                    backgroundPosition: "center",
                    // set the image to cover all the space
                    backgroundSize: "cover",
                  }}
                  className="h-[250px] w-[250px]"
                  variant={"default"}
                ></Card>
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center ">
                <Card
                  style={{
                    backgroundImage: `url(${post.attributes.photo2})`,
                    // center the image
                    backgroundPosition: "center",
                    // set the image to cover all the space
                    backgroundSize: "cover",
                  }}
                  className="h-[250px] w-[250px]"
                  variant={"default"}
                ></Card>
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center ">
                <Card
                  style={{
                    backgroundImage: `url(${post.attributes.photo3})`,
                    // center the image
                    backgroundPosition: "center",
                    // set the image to cover all the space
                    backgroundSize: "cover",
                  }}
                  className="h-[250px] w-[250px]"
                  variant={"default"}
                ></Card>
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center ">
                <Card
                  style={{
                    backgroundImage: `url(${post.attributes.photo4})`,
                    // center the image
                    backgroundPosition: "center",
                    // set the image to cover all the space
                    backgroundSize: "cover",
                  }}
                  className="h-[250px] w-[250px]"
                  variant={"default"}
                ></Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="p-6 m-6 border min-h-[250px]">
            <Typography variant={"h1"} className="pb-10">
              {" "}
              Notre artiste {post.attributes.title} se confie 💙
            </Typography>
            <Markdown>{post.content}</Markdown>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button variant={"fyliaButtonBlack"}>Devis gratuit rapide ☞</Button>
        </CardFooter>
      </Card>
    </LayoutPage>
  );
}
