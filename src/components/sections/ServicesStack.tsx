"use client";

import { useCallback, useMemo, useState } from "react";

import { ServicesCard } from "@/components/items/ServicesCard";
import { Button } from "@/components/ui/Button";
import { ContactModal, type ContactModalServiceField } from "@/components/ui/ContactModal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  HOME_SERVICES_CONTENT,
  type HomeServiceItem,
  type HomeServicesContent,
} from "@/content/home/content";

export interface ServicesStackProps {
  cardCtaMode?: "all" | "linked" | "none";
  commonCtaLabel?: string;
  contactModal?: {
    serviceField?: ContactModalServiceField;
  };
  content?: HomeServicesContent;
  ctaLabel?: HomeServicesContent["ctaLabel"];
  eyebrow?: HomeServicesContent["eyebrow"];
  heading?: HomeServicesContent["heading"];
  serviceLabel?: HomeServicesContent["serviceLabel"];
  services?: HomeServiceItem[];
  showCardCtas?: boolean;
  showCommonCta?: boolean;
}

export const ServicesStack = ({
  cardCtaMode,
  commonCtaLabel,
  contactModal,
  content = HOME_SERVICES_CONTENT,
  ctaLabel = content.ctaLabel,
  heading = content.heading,
  serviceLabel = content.serviceLabel,
  services = content.services,
  showCardCtas = true,
  showCommonCta = false,
}: ServicesStackProps = {}) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const resolvedCardCtaMode = cardCtaMode ?? (showCardCtas ? "all" : "none");
  const stickyStyles = useMemo(
    () => services.map((_, index) => ({ top: `calc(100px + ${index * 20}px)`, zIndex: index })),
    [services]
  );
  const openContactModal = useCallback(() => setIsContactModalOpen(true), []);
  const closeContactModal = useCallback(() => setIsContactModalOpen(false), []);

  return (
    <>
      <section className="bg-brand-gray pt-20 pb-40" id="services">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <div className="mb-16 flex flex-col items-center text-center">
            <SectionHeader as="h2" className="text-center">
              {heading}
            </SectionHeader>
          </div>

          <div className="relative flex flex-col gap-12">
            {services.map((service, index) => (
              <div className="sticky" key={service.id} style={stickyStyles[index]}>
                <ServicesCard
                  ctaLabel={ctaLabel}
                  onCtaClick={contactModal ? openContactModal : undefined}
                  service={service}
                  serviceLabel={serviceLabel}
                  showCta={
                    resolvedCardCtaMode === "all" ||
                    (resolvedCardCtaMode === "linked" && Boolean(service.href))
                  }
                />
              </div>
            ))}
          </div>

          {showCommonCta && (
            <div className="mt-14 flex justify-center">
              <Button
                onClick={contactModal ? openContactModal : undefined}
                type="button"
                variant="primary"
              >
                {commonCtaLabel ?? ctaLabel}
              </Button>
            </div>
          )}
        </div>
      </section>
      {contactModal && (
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={closeContactModal}
          serviceField={contactModal.serviceField}
        />
      )}
    </>
  );
};
