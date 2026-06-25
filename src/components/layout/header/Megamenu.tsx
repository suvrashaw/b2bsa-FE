import Link from "next/link";
import { memo } from "react";

import { type NavLink, type ServiceNavGroup } from "@/content/navigation";
import { cn, toHeadingCaps } from "@/lib";

const MegamenuSubLink = ({
  onClose,
  sub,
}: {
  onClose: () => void;
  sub: NavLink;
}) => {
  return (
    <Link
      className="block min-w-0 text-xs leading-snug font-semibold break-words text-gray-500 transition-colors hover:text-gray-900"
      href={sub.href}
      onClick={onClose}
    >
      {sub.name}
    </Link>
  );
};

export const MegamenuServiceGroup = memo(
  ({
    className,
    group,
    noWrapTitle = false,
    onClose,
  }: {
    className?: string;
    group: ServiceNavGroup;
    noWrapTitle?: boolean;
    onClose: () => void;
  }) => {
    const flatLinks = group.links ?? [];
    const subGroups = group.groups ?? [];

    return (
      <div className={cn("min-w-0 px-3 xl:px-5", className || "py-3 xl:py-5")}>
        <Link
          className={cn(
            "mb-4 block text-sm font-black break-words text-brand-charcoal transition-colors hover:text-brand-blue",
            noWrapTitle && "whitespace-nowrap",
          )}
          href={group.href}
          onClick={onClose}
        >
          {toHeadingCaps(group.name)}
        </Link>
        {subGroups.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4">
            {subGroups.map((sg) => (
              <div key={sg.name}>
                <p className="mb-4 text-xs font-bold tracking-wide text-gray-400 uppercase">
                  {sg.name}
                </p>
                <div className="space-y-3">
                  {sg.links.map((sub) => (
                    <MegamenuSubLink
                      key={sub.name}
                      onClose={onClose}
                      sub={sub}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          flatLinks.length > 0 && (
            <div className="space-y-3">
              {flatLinks.map((sub) => (
                <MegamenuSubLink key={sub.name} onClose={onClose} sub={sub} />
              ))}
            </div>
          )
        )}
      </div>
    );
  },
);
MegamenuServiceGroup.displayName = "MegamenuServiceGroup";
