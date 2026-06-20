import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib";

const headingVariants = cva("", {
  variants: {
    level: {
      h1: "type-h1 text-[var(--heading-h1)]",
      h2: "type-h2 text-[var(--heading-h2)]",
      h3: "type-h3 text-[var(--heading-h3)]",
      h4: "text-[10px] font-bold tracking-wider text-[var(--heading-h4)] uppercase md:text-xs",
    },
  },
});

export interface SectionHeaderProps
  extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4";
  description?: string;
  descriptionSize?: "body-l" | "body-m";
  heading?: ReactNode;
  headingAction?: ReactNode;
  headingAlign?: "center" | "left";
  preserveClassName?: boolean;
}

type BlockProps = {
  className?: string;
  description?: string;
  descriptionSize: "body-l" | "body-m";
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
  descriptionSize,
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
            "-mt-6 mb-12 max-w-2xl text-brand-charcoal/70",
            descriptionSize === "body-l" ? "type-body-l" : "type-body-m",
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
  descriptionSize = "body-m",
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
        descriptionSize={descriptionSize}
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
