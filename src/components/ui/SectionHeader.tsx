import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib";

const headingVariants = cva("", {
  variants: {
    level: {
      h1: "font-heading [font-size:clamp(24px,6vw,32px)] leading-[1.02] font-black text-[var(--heading-h1)] md:text-4xl lg:text-5xl xl:text-6xl",
      h2: "font-heading [font-size:clamp(20px,5vw,26px)] leading-tight font-bold text-[var(--heading-h2)] md:text-3xl lg:text-4xl",
      h3: "font-heading [font-size:clamp(16px,4vw,20px)] leading-tight font-bold text-[var(--heading-h3)] md:text-2xl",
      h4: "text-[10px] font-bold tracking-wider text-[var(--heading-h4)] uppercase md:text-xs",
    },
  },
});

export interface SectionHeaderProps
  extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4";
  description?: string;
  heading?: ReactNode;
  headingAction?: ReactNode;
  headingAlign?: "center" | "left";
  preserveClassName?: boolean;
}

type BlockProps = {
  className?: string;
  description?: string;
  heading: ReactNode;
  headingAction?: ReactNode;
  headingAlign: "center" | "left";
  resolvedLevel: "h1" | "h2" | "h3" | "h4";
  rest: HTMLAttributes<HTMLHeadingElement>;
  style?: CSSProperties;
  Tag: "h1" | "h2" | "h3" | "h4";
};

const BlockLayout = ({
  className,
  description,
  heading,
  headingAction,
  headingAlign,
  resolvedLevel,
  rest,
  style,
  Tag,
}: BlockProps) => {
  const isCenter = headingAlign === "center";

  const headingEl =
    typeof heading === "string" ? (
      <Tag
        className={cn(
          headingVariants({ level: resolvedLevel }),
          isCenter ? "text-center" : "",
          className
        )}
        style={style}
        {...rest}
      >
        {heading}
      </Tag>
    ) : (
      heading
    );

  return (
    <>
      {heading && (
        <div
          className={cn(
            "mb-12 md:mb-14",
            isCenter
              ? "text-center"
              : "flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          )}
        >
          {headingEl}
          {headingAction && <div className={isCenter ? "mt-6" : ""}>{headingAction}</div>}
        </div>
      )}
      {description && (
        <p
          className={cn(
            "-mt-6 mb-12 max-w-2xl text-sm text-brand-charcoal/70 md:text-base",
            isCenter ? "mx-auto text-center" : ""
          )}
        >
          {description}
        </p>
      )}
    </>
  );
};

export const SectionHeader = ({
  as: Tag = "h2",
  children,
  className,
  description,
  heading,
  headingAction,
  headingAlign = "center",
  level,
  preserveClassName,
  style,
  ...rest
}: SectionHeaderProps) => {
  const resolvedLevel = level ?? Tag;

  if (heading !== undefined) {
    if (!heading && !description) return null;
    return (
      <BlockLayout
        className={className}
        description={description}
        heading={heading}
        headingAction={headingAction}
        headingAlign={headingAlign}
        resolvedLevel={resolvedLevel}
        rest={rest}
        style={style}
        Tag={Tag}
      />
    );
  }

  const classes = preserveClassName
    ? className
    : cn(headingVariants({ level: resolvedLevel }), className);

  return (
    <Tag {...rest} className={classes} style={style}>
      {children}
    </Tag>
  );
};
