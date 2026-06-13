"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { memo, useCallback } from "react";

import {
  type NavLink,
  type ServiceNavGroup,
  serviceNavigationGroups,
  type topNavigation,
} from "@/content/navigation";
import { cn } from "@/lib";

const MOBILE_SUBMENU_ANIMATE = { height: "auto", opacity: 1 };
const MOBILE_SUBMENU_COLLAPSED = { height: 0, opacity: 0 };
const MOBILE_NAV_TRANSITION = { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const };
const MOBILE_GROUP_TRANSITION = { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const };

type ServiceNavSubGroup = NonNullable<ServiceNavGroup["groups"]>[number];

const MobileSubGroupLinks = ({ links, onClose }: { links: NavLink[]; onClose: () => void }) => (
  <>
    {links.map((sub) => (
      <Link
        className="block pl-8 text-base font-medium text-gray-500 transition-colors hover:text-brand-blue"
        href={sub.href}
        key={sub.name}
        onClick={onClose}
      >
        {sub.name}
      </Link>
    ))}
  </>
);

const MobileNestedServiceGroup = ({
  onClose,
  subGroup,
}: {
  onClose: () => void;
  subGroup: ServiceNavSubGroup;
}) => (
  <div>
    <p className="px-4 pt-2 pb-1 text-xs font-semibold tracking-wide text-gray-400 uppercase">
      {subGroup.name}
    </p>
    <MobileSubGroupLinks links={subGroup.links} onClose={onClose} />
  </div>
);

const MobileServiceGroup = ({
  group,
  isOpen,
  onClose,
  onToggle,
}: {
  group: ServiceNavGroup;
  isOpen: boolean;
  onClose: () => void;
  onToggle: (name: string) => void;
}) => {
  const hasSubContent = (group.groups?.length ?? 0) > 0 || (group.links?.length ?? 0) > 0;
  const handleToggle = useCallback(() => onToggle(group.name), [group.name, onToggle]);

  if (!hasSubContent) {
    return (
      <Link
        className="flex w-full items-center px-6 py-3 text-left text-base font-bold text-brand-charcoal transition-colors hover:text-brand-blue"
        href={group.href}
        onClick={onClose}
      >
        {group.name}
      </Link>
    );
  }

  return (
    <div>
      <button
        className="flex w-full items-center justify-between px-6 py-3 text-left text-base font-bold text-brand-charcoal transition-colors hover:text-brand-blue"
        onClick={handleToggle}
        type="button"
      >
        <span>{group.name}</span>
        {hasSubContent && (
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-gray-400 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={MOBILE_SUBMENU_ANIMATE}
            className="overflow-hidden"
            exit={MOBILE_SUBMENU_COLLAPSED}
            initial={MOBILE_SUBMENU_COLLAPSED}
            transition={MOBILE_GROUP_TRANSITION}
          >
            <div className="pb-3 pl-4">
              {group.groups?.map((subGroup) => (
                <MobileNestedServiceGroup
                  key={subGroup.name}
                  onClose={onClose}
                  subGroup={subGroup}
                />
              ))}
              {group.links && <MobileSubGroupLinks links={group.links} onClose={onClose} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MobileNavItem = memo(
  ({
    isOpen,
    link,
    onClose,
    onServiceGroupToggle,
    onToggle,
    openServiceGroup,
  }: {
    isOpen: boolean;
    link: (typeof topNavigation)[number];
    onClose: () => void;
    onServiceGroupToggle: (name: string) => void;
    onToggle: (name: string) => void;
    openServiceGroup: null | string;
  }) => {
    const hasChildren = link.name === "Services";
    const handleToggle = useCallback(() => onToggle(link.name), [link.name, onToggle]);

    return (
      <div className="border-b border-gray-50 last:border-0">
        {hasChildren ? (
          <button
            className="flex w-full items-center justify-between px-6 py-4 font-heading text-xl font-bold transition-colors hover:text-brand-blue"
            onClick={handleToggle}
            type="button"
          >
            <span>{link.name}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-gray-400 transition-transform duration-300",
                isOpen && "rotate-180"
              )}
            />
          </button>
        ) : (
          <Link
            className="flex w-full items-center px-6 py-4 font-heading text-xl font-bold transition-colors hover:text-brand-blue"
            href={link.href}
            onClick={onClose}
          >
            {link.name}
          </Link>
        )}

        <AnimatePresence>
          {hasChildren && isOpen && (
            <motion.div
              animate={MOBILE_SUBMENU_ANIMATE}
              className="overflow-hidden"
              exit={MOBILE_SUBMENU_COLLAPSED}
              initial={MOBILE_SUBMENU_COLLAPSED}
              transition={MOBILE_NAV_TRANSITION}
            >
              <div className="pb-4">
                {serviceNavigationGroups.map((group) => (
                  <MobileServiceGroup
                    group={group}
                    isOpen={openServiceGroup === group.name}
                    key={group.name}
                    onClose={onClose}
                    onToggle={onServiceGroupToggle}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);
