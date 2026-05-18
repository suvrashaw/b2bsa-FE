import type { HTMLAttributes, ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { PointerHighlight } from "@/components/ui/PointerHighlight";
import { cn } from "@/lib";

const headingVariants = cva("", {
  variants: {
    level: {
      h1: "font-heading text-3xl leading-[1.02] font-black text-[var(--heading-h1)] lg:text-6xl xl:text-7xl",
      h2: "font-heading text-3xl leading-tight font-bold text-[var(--heading-h2)] lg:text-4xl",
      h3: "font-heading text-2xl leading-tight font-bold text-[var(--heading-h3)] lg:text-3xl",
      h4: "text-xs font-bold tracking-wider text-[var(--heading-h4)] uppercase",
    },
  },
});

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  as: "h1" | "h2" | "h3" | "h4";
  highlight?: string;
  highlightVariant?: "blue" | "cyan";
  preserveClassName?: boolean;
}

const renderHighlightedText = (
  children: ReactNode,
  highlight?: string,
  highlightVariant: "blue" | "cyan" = "blue"
) => {
  if (typeof children !== "string" || !highlight?.trim()) return children;

  const target = highlight.trim();
  const startIndex = children.toLowerCase().indexOf(target.toLowerCase());

  if (startIndex === -1) return children;

  const endIndex = startIndex + target.length;

  return (
    <>
      {children.slice(0, startIndex)}
      <PointerHighlight color={highlightVariant}>
        {children.slice(startIndex, endIndex)}
      </PointerHighlight>
      {children.slice(endIndex)}
    </>
  );
};

export const Heading = ({
  as: Tag,
  children,
  className,
  highlight,
  highlightVariant = "blue",
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
      {renderHighlightedText(children, highlight, highlightVariant)}
    </Tag>
  );
};
