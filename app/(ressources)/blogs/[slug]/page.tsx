import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { LayoutPage } from "@/src/features/layout/layout-page";
import { Markdown } from "@react-email/components";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "../../../../src/components/ui/badge";
import { buttonVariants } from "../../../../src/components/ui/button";
import { logger } from "../../../../src/lib/logger";
import type { PostParams } from "../../../../src/lib/posts/blogs-config";
import {
  getCurrentPost,
  getPosts,
} from "../../../../src/lib/posts/blogs-config";
import { calculateReadingTime } from "../../../../src/lib/posts/calculate-reading-time";

export async function BlogPage({ params }: PostParams): Promise<Metadata> {
  const post = await getCurrentPost(params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.attributes.title,
    description: post.attributes.description,
    keywords: post.attributes.keywords,
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
      <Link className={buttonVariants({ variant: "link" })} href="/blogs">
        <ArrowLeft size={16} /> Back
      </Link>
      <CardHeader
        style={{
          backgroundImage: `url(${post.attributes.coverUrl})`,
          // center the image
          backgroundPosition: "center",
          // set the image to cover all the space
          backgroundSize: "cover",
        }}
        className="overflow-hidden border shadow-sm w-full p-20"
      >
        <div className="flex w-full flex-col gap-2 bg-black/20 p-10 text-white backdrop-blur">
          {post.attributes.status === "draft" ? (
            <Badge className="w-fit" variant="secondary">
              Brouillon
            </Badge>
          ) : null}
          <CardTitle className="drop-shadow-sm">
            {post.attributes.title}
          </CardTitle>
          <CardDescription className="drop-shadow-sm flex items-center justify-center gap-2">
            Publié par {post.attributes.auteur}
            <Avatar className="border">
              {" "}
              <AvatarImage src={post.attributes.imageAuteur} alt="Valentin" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardDescription>
          <CardDescription className="drop-shadow-sm">
            Temps de lectures {calculateReadingTime(post.content)} minutes ⏱️
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="px-40 text-left">
        <Markdown>{post.content}</Markdown>
      </CardContent>
    </LayoutPage>
  );
}
