"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

import { ContactForm } from "@/components/forms/ContactForm";

const MODAL_FORM = {
  companyLabel: "Company Name",
  companyPlaceholder: "Your Company",
  consentLabel: "I agree to receive communications from B2B Sales Arrow regarding their services.",
  ctaLabel: "Send Your Enquiry",
  emailLabel: "Work Email",
  emailPlaceholder: "john@company.com",
  firstNameLabel: "First Name",
  firstNamePlaceholder: "John",
  lastNameLabel: "Last Name",
  lastNamePlaceholder: "Doe",
  messageLabel: "Tell us about your requirements:",
  messagePlaceholder: "Enter your requirements here...",
  phoneLabel: "Phone Number",
  phonePlaceholder: "+1 (000) 000-0000",
  serviceLabel: "Select the service you need",
  serviceOptions: [
    { label: "Global Event Solutions", value: "global-event" },
    { label: "Trade Show Booth Design & Build", value: "booth-design" },
    { label: "Event Hostess & Staffing", value: "hostess" },
    { label: "Event Logistics", value: "logistics" },
    { label: "Event Branding", value: "branding" },
    { label: "Media & Video Production", value: "media" },
    { label: "Other", value: "other" },
  ],
  servicePlaceholder: "Select a service...",
};

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="font-heading text-2xl font-black text-brand-charcoal">
              Get in Touch
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Our team will respond within 24 hours.
            </p>
          </div>
          <button
            aria-label="Close"
            className="ml-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-brand-charcoal"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ContactForm form={MODAL_FORM} />
      </div>
    </div>
  );
};
