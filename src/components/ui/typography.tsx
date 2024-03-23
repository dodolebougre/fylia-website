import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";
import { cn } from "../../lib/utils";

type PolymorphicAsProp<E extends ElementType> = {
  as?:
    | E
    | React.ComponentType<Omit<ComponentPropsWithoutRef<E>, "as">>
    | React.FunctionComponent<Omit<ComponentPropsWithoutRef<E>, "as">>;
};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  Omit<ComponentPropsWithoutRef<E>, "as"> & PolymorphicAsProp<E>
>;

const typographyVariants = cva("", {
  variants: {
    variant: {
      lead: "scroll-m-20 font-caption text-4xl tracking-tight md:text-6xl xl:text-7xl  drop-shadow font-athena  drop-shadow-2xl",
      lead2:
        "scroll-m-20 text-3xl font-light tracking-tight transition-colors first:mt-0  text-lg md:text-xl xl:text-2xl font-philosopher",
      h1: "scroll-m-20 font-athena xl:text-3xl text-2xl",
      h2: "xl:text-2xl text-xl font-philosopher font-light",
      h3: "",
      p: "font-roboto text-md font-light xl:text-lg",
      base: "",
      quote: "citation",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",

      large: "text-lg font-semibold",
      small: "font-roboto text-sm font-light xl:text-md",
      muted: "text-sm text-muted-foreground",
      link: "font-medium text-primary hover:underline",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});
type TypographyCvaProps = VariantProps<typeof typographyVariants>;

const defaultElement = "p";

const defaultElementMapping: Record<
  NonNullable<TypographyCvaProps["variant"]>,
  ElementType
> = {
  lead: "h1",
  h1: "h1",
  lead2: "h2",
  h2: "h2",
  h3: "h3",
  p: "p",
  quote: "blockquote" as "p",
  code: "code",

  large: "p",
  small: "p",
  muted: "p",
  link: "a",
  base: "p",
} as const;

export function Typography<E extends ElementType = typeof defaultElement>({
  as,
  children,
  className,
  variant,
  ...restProps
}: PolymorphicProps<E> & TypographyCvaProps) {
  const Component: ElementType = as ?? defaultElementMapping[variant ?? "base"];

  return (
    <Component
      {...(restProps as ComponentPropsWithoutRef<E>)}
      className={cn(typographyVariants({ variant }), className)}
    >
      {children}
    </Component>
  );
}
