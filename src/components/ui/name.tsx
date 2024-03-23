import { SiteConfig } from "@/src/site-config";

export const FyliaName = () => {
  return (
    <h1 className="text-center text-4xl cursor-pointer pb-1 font-athena ">
      {SiteConfig.title}
    </h1>
  );
};
