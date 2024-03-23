import { Markdown } from "@react-email/components";
import { Card, CardContent } from "../../components/ui/card";

import type { Post } from "../../lib/posts-legal/legal-config";
type LegalCardProps = {
  post: Post;
};

export const LegalCard = (props: LegalCardProps) => {
  return (
    <Card
      variant={"default"}
      className="transition-all shadow-none min-h-[450px]"
    >
      <CardContent className="space-y-2">
        <Markdown>{props.post.content}</Markdown>
      </CardContent>
    </Card>
  );
};
