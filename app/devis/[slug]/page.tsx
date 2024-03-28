import { DevisFormArtist } from "@/src/features/components/devis-form-artiste";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { logger } from "../../../src/lib/logger";
import type { PostParams } from "../../../src/lib/posts-artiste/artiste-config";
import {
  getCurrentPost,
  getPosts,
} from "../../../src/lib/posts-artiste/artiste-config";

export async function generateMetadata({
  params,
}: PostParams): Promise<Metadata> {
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
    <div className="pb-10">
      <DevisFormArtist key={post.slug} post={post}></DevisFormArtist>
    </div>
  );
}
