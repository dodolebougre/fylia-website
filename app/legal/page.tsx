import Link from "next/link";
import { Badge } from "@/src/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { LegalCard } from "@/src/features/components/legal-card";
import { LayoutPage } from "@/src/features/layout/layout-page";
import { getPosts, getPostsTags } from "@/src/lib/posts-legal/legal-config";

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

export default async function LegalsPage(props: PageParams<{}>) {
  const activeTags = getTags(props.searchParams.tag);
  const tags = await getPostsTags();
  const posts = await getPosts(activeTags);

  return (
    <LayoutPage title={"Informations légales"}>
      <Card>
        <CardHeader className="border pb-0 m-6 mb-0 ">
          <CardContent>
            {tags.map((tag) => (
              <Link
                className="p-1"
                key={tag}
                href={{
                  pathname: "/legal",
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

        <CardContent className="">
          {posts.map((post) => (
            <LegalCard key={post.slug} post={post} />
          ))}
        </CardContent>
      </Card>
    </LayoutPage>
  );
}
