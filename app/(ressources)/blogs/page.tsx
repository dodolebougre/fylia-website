import Link from "next/link";
import { buttonVariants } from "../../../src/components/ui/button";
import { Typography } from "../../../src/components/ui/typography";

import { Badge } from "@/src/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { BlogCard } from "@/src/features/components/blog-card";
import { LayoutPage } from "@/src/features/layout/layout-page";
import { getPosts, getPostsTags } from "@/src/lib/posts/blogs-config";
import { PageParams } from "@/src/types/next";

const getTags = (
  params: string | string[] | undefined
): string[] | undefined => {
  if (Array.isArray(params)) {
    return params;
  }
  if (typeof params === "string") {
    return [params];
  }
  return undefined;
};

export default async function RoutePage(props: PageParams<{}>) {
  const activeTags = getTags(props.searchParams.tag);
  const tags = await getPostsTags();
  const posts = await getPosts(activeTags);

  return (
    <LayoutPage title={"Les blogs de Fylia"}>
      <Card>
        <CardHeader className="border pb-0 m-6 mb-0 ">
          <CardContent>
            {tags.map((tag) => (
              <Link
                className="p-1"
                key={tag}
                href={{
                  pathname: "/blogs",
                  query: {
                    tag: tag,
                  },
                }}
              >
                <Badge
                  variant={
                    activeTags && activeTags.includes(tag)
                      ? "default"
                      : "outline"
                  }
                >
                  {tag}
                </Badge>
              </Link>
            ))}
          </CardContent>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2"></CardContent>
        {posts.length === 0 ? (
          <CardContent className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center rounded-lg border-2 border-dashed p-4 lg:gap-6 lg:p-8">
              <Typography variant="h2">
                Les blogs ne sont plus disponibles
              </Typography>
              <Link
                className={buttonVariants({ variant: "link" })}
                href="/blogs"
              >
                Voir tout les posts
              </Link>
            </div>
          </CardContent>
        ) : (
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </CardContent>
        )}{" "}
      </Card>
    </LayoutPage>
  );
}
