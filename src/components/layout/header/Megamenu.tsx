import Link from "next/link";
import { memo } from "react";

import { type NavLink, type ServiceNavGroup, serviceNavigationGroups } from "@/content/navigation";
import { cn, toHeadingCaps } from "@/lib";

export const Megamenu = ({ lightText, onClose }: { lightText?: boolean; onClose: () => void }) => (
  <div className="flex justify-between gap-4 xl:gap-8">
    <div className="min-w-0">
      <MegamenuServiceGroup
        className="pt-3 pb-1 xl:pt-5 xl:pb-2"
        group={serviceNavigationGroups[0]}
        lightText={lightText}
        onClose={onClose}
      />
      <MegamenuServiceGroup
        className="pt-1 pb-3 xl:pt-2 xl:pb-5"
        group={serviceNavigationGroups[5]}
        lightText={lightText}
        onClose={onClose}
      />
    </div>
    <div className="min-w-0">
      <MegamenuServiceGroup
        group={serviceNavigationGroups[1]}
        lightText={lightText}
        onClose={onClose}
      />
    </div>
    <div className="min-w-0">
      <MegamenuServiceGroup
        group={serviceNavigationGroups[2]}
        lightText={lightText}
        onClose={onClose}
      />
    </div>
    <div className="min-w-0">
      <MegamenuServiceGroup
        className="pt-3 pb-1 xl:pt-5 xl:pb-2"
        group={serviceNavigationGroups[3]}
        lightText={lightText}
        onClose={onClose}
      />
      <MegamenuServiceGroup
        className="py-1 xl:py-2"
        group={serviceNavigationGroups[4]}
        lightText={lightText}
        onClose={onClose}
      />
      <MegamenuServiceGroup
        className="pt-1 pb-3 xl:pt-2 xl:pb-5"
        group={serviceNavigationGroups[6]}
        lightText={lightText}
        onClose={onClose}
      />
    </div>
  </div>
);

const MegamenuSubLink = ({
  lightText,
  onClose,
  sub,
}: {
  lightText?: boolean;
  onClose: () => void;
  sub: NavLink;
}) => {
  return (
    <Link
      className={cn(
        "block min-w-0 text-xs leading-snug font-semibold break-words transition-colors",
        lightText ? "text-white hover:text-white/80" : "text-gray-500 hover:text-gray-900"
      )}
      href={sub.href}
      onClick={onClose}
    >
      {sub.name}
    </Link>
  );
};

const MegamenuServiceGroup = memo(
  ({
    className,
    group,
    lightText,
    noWrapTitle = false,
    onClose,
  }: {
    className?: string;
    group: ServiceNavGroup;
    lightText?: boolean;
    noWrapTitle?: boolean;
    onClose: () => void;
  }) => {
    const flatLinks = group.links ?? [];
    const subGroups = group.groups ?? [];

    return (
      <div className={cn("min-w-0 px-3 xl:px-5", className || "py-3 xl:py-5")}>
        <Link
          className={cn(
            "mb-4 block text-sm font-black break-words transition-colors hover:text-brand-blue",
            lightText ? "text-white" : "text-brand-charcoal",
            noWrapTitle && "whitespace-nowrap"
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
                <p
                  className={cn(
                    "mb-4 text-xs font-bold tracking-wide uppercase",
                    lightText ? "text-white/40" : "text-gray-400"
                  )}
                >
                  {sg.name}
                </p>
                <div className="space-y-3">
                  {sg.links.map((sub) => (
                    <MegamenuSubLink
                      key={sub.name}
                      lightText={lightText}
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
                <MegamenuSubLink key={sub.name} lightText={lightText} onClose={onClose} sub={sub} />
              ))}
            </div>
          )
        )}
      </div>
    );
  }
);
MegamenuServiceGroup.displayName = "MegamenuServiceGroup";
