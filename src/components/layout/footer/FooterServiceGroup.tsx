import Link from "next/link";

import {
  type NavLink,
  type ServiceNavGroup,
  type ServiceSubGroup,
} from "@/content/navigation";
import { cn, toHeadingCaps } from "@/lib";

const EMPTY_NAV_LINKS: NavLink[] = [];

const FooterSitemapLinks = ({ links }: { links: NavLink[] }) => (
  <ul className="space-y-1.5 border-l border-white/30 pl-3">
    {links.map((item) => (
      <li key={item.name}>
        <Link
          className="text-xs leading-5 text-white/85 transition-colors hover:text-white hover:underline"
          href={item.href}
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

const FooterServiceSubGroup = ({ group }: { group: ServiceSubGroup }) => (
  <div>
    <span className="mb-2 block text-xs font-semibold tracking-wider text-white/60 uppercase">
      {group.name}
    </span>
    <FooterSitemapLinks links={group.links} />
  </div>
);

export const FooterServiceGroup = ({
  group,
  noWrapTitle = false,
}: {
  group: ServiceNavGroup;
  noWrapTitle?: boolean;
}) => {
  let childLinks = null;
  const flatLinks = group.links ?? EMPTY_NAV_LINKS;

  if (group.groups) {
    childLinks = (
      <div className="grid gap-5 sm:grid-cols-2">
        {group.groups.map((subGroup) => (
          <FooterServiceSubGroup group={subGroup} key={subGroup.name} />
        ))}
      </div>
    );
  } else if (flatLinks.length > 0) {
    childLinks = <FooterSitemapLinks links={flatLinks} />;
  }

  return (
    <div>
      <Link
        className={cn(
          "mb-3 block text-sm font-semibold text-white transition-colors hover:text-white hover:underline",
          noWrapTitle ? "whitespace-nowrap" : "",
        )}
        href={group.href}
      >
        {toHeadingCaps(group.name)}
      </Link>
      {childLinks}
    </div>
  );
};
