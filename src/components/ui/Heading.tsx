import type { HTMLAttributes } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib";

const headingVariants = cva("", {
  variants: {
    level: {
      h1: "font-heading text-4xl leading-[1.02] font-black text-[var(--heading-h1)] md:text-5xl lg:text-6xl xl:text-7xl",
      h2: "font-heading text-3xl leading-tight font-bold text-[var(--heading-h2)] md:text-4xl lg:text-5xl",
      h3: "font-heading text-2xl leading-tight font-bold text-[var(--heading-h3)] md:text-3xl",
      h4: "text-xs font-bold tracking-wider text-[var(--heading-h4)] uppercase md:text-sm",
    },
  },
});

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  as: "h1" | "h2" | "h3" | "h4";
  preserveClassName?: boolean;
}

export const Heading = ({
  as: Tag,
  children,
  className,
  level,
  preserveClassName,
  style,
  ...rest
}: HeadingProps) => {
  const resolvedLevel = level ?? Tag;
  const classes = preserveClassName
    ? className
    : cn(headingVariants({ level: resolvedLevel }), className);

  return (
    <Tag {...rest} className={classes} style={style}>
      {children}
    </Tag>
  );
};
