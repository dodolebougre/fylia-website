import { ArtisteSchema } from "@/schema";
import fm from "front-matter";
import fs from "fs/promises";
import path from "path";
import { z } from "zod";
import type { PageParams } from "../../types/next";

const postsDirectory = path.join(process.cwd(), "content/posts-artiste");

type PostAttributes = z.infer<typeof ArtisteSchema>;

export type Post = {
  slug: string;
  attributes: PostAttributes;
  content: string;
};

export const getPosts = async (tags?: string[]) => {
  const fileNames = await fs.readdir(postsDirectory);
  const posts: Post[] = [];
  for await (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = await fs.readFile(fullPath, "utf8");

    const matter = fm(fileContents);

    const result = ArtisteSchema.safeParse(matter.attributes);

    if (!result.success) {
      continue;
    }

    if (
      process.env.VERCEL_ENV === "production" &&
      result.data.status === "draft"
    ) {
      continue;
    }

    if (tags) {
      if (
        !result.data.tags ||
        !result.data.tags.some((tag) => tags.includes(tag))
      ) {
        continue;
      }
    }

    posts.push({
      slug: fileName.replace(".mdx", ""),
      content: matter.body,
      attributes: {
        ...result.data,
      },
    });
  }

  return posts;
};

export const getPostsTags = async () => {
  const posts = await getPosts();
  const tags = new Set<string>();
  for (const post of posts) {
    if (!post.attributes.tags) {
      continue;
    }
    for (const tag of post.attributes.tags) {
      tags.add(tag);
    }
  }
  return Array.from(tags);
};

export type PostParams = PageParams<{ slug: string }>;

export const getCurrentPost = async (slug: string) => {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug);
};
