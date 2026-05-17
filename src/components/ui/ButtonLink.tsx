import type { ReactNode } from "react";

import Link from "next/link";

import { Button, type ButtonProps } from "@/components/ui/Button";

type ButtonLinkProps = {
  children: ReactNode;
  external?: boolean;
  href: string;
} & Omit<ButtonProps, "onClick" | "type">;

export const ButtonLink = ({ children, external, href, ...props }: ButtonLinkProps) => {
  if (external) {
    return (
      <Button asChild {...props}>
        <a href={href} rel="noopener noreferrer" target="_blank">
          {children}
        </a>
      </Button>
    );
  }

  return (
    <Button asChild {...props}>
      <Link href={href}>{children}</Link>
    </Button>
  );
};
