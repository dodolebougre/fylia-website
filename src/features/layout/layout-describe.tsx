import { cn } from "@/src/lib/utils";

interface LayoutDescribeProps {
  children: React.ReactNode;
  border: string;
  color: string;
}
export const LayoutDescribe = ({
  children,
  border,
  color,
}: LayoutDescribeProps) => {
  return (
    <section
      className={cn(
        "xl:flex-row  justify-center items-center flex flex-col border xl:w-[1200px] md:w-[600px] w-[360px]",
        { [border]: border },
        { [color]: color }
      )}
    >
      {children}
    </section>
  );
};
