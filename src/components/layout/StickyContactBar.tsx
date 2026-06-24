"use client";

import { Mail } from "lucide-react";
import { useCallback, useState } from "react";

import { ContactModal } from "@/components/ui/ContactModal";
import { cn } from "@/lib";

// Replace placeholders with real contact details before going live
const WHATSAPP_HREF = "https://wa.me/PLACEHOLDER";
const MAIL_HREF = "mailto:info@b2bsalesarrow.com";
const TEAMS_HREF = "#";

const WhatsAppIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const TeamsIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.95 4H14.05A1.05 1.05 0 0013 5.05v4.9c0 .58.47 1.05 1.05 1.05h5.9c.58 0 1.05-.47 1.05-1.05V5.05C21 4.47 20.53 4 19.95 4z" />
    <circle cx="17" cy="13.5" r="2" />
    <path d="M9.5 11a4 4 0 100-8 4 4 0 000 8zm-6.5 3.5A1.5 1.5 0 014.5 13H15a1.5 1.5 0 011.5 1.5v1.25A5.75 5.75 0 0110.75 21.5H8.25A5.75 5.75 0 012.5 15.75V14.5z" />
  </svg>
);

const MailIcon = () => <Mail className="h-5 w-5" />;

const SOCIAL_LINKS = [
  {
    bg: "bg-[#25D366]",
    external: true,
    href: WHATSAPP_HREF,
    Icon: WhatsAppIcon,
    label: "WhatsApp",
  },
  {
    bg: "bg-brand-blue",
    external: false,
    href: MAIL_HREF,
    Icon: MailIcon,
    label: "Email",
  },
  {
    bg: "bg-[#5059C9]",
    external: true,
    href: TEAMS_HREF,
    Icon: TeamsIcon,
    label: "Teams",
  },
];

export const StickyContactBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      {/* Desktop: right-edge social icon strip */}
      <div className="fixed top-1/2 right-0 z-[60] hidden -translate-y-1/2 flex-col gap-1.5 md:flex">
        {SOCIAL_LINKS.map(({ bg, external, href, Icon, label }) => (
          <a
            aria-label={label}
            className={cn(
              "group relative flex h-12 w-12 items-center justify-center text-white shadow-md",
              "rounded-l-xl transition-all duration-200 hover:-translate-x-1 hover:shadow-xl",
              bg
            )}
            href={href}
            key={label}
            rel={external ? "noopener noreferrer" : undefined}
            target={external ? "_blank" : undefined}
          >
            <Icon />
            <span className="pointer-events-none absolute right-full mr-2 rounded-md bg-gray-900/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile: Get a Quote FAB */}
      <button
        aria-label="Get a Quote"
        className="btn-schedule schedule-shake fixed right-4 bottom-6 z-[60] rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-xl md:hidden"
        onClick={openModal}
        type="button"
      >
        Get a Quote
      </button>

      <ContactModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
};
