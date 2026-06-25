"use client";

import { X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { ContactContent } from "@/content/home/content";

import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";

const BASE_MODAL_FORM = {
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
};

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceField?: ContactModalServiceField;
}

export interface ContactModalServiceField {
  label?: string;
  options: NonNullable<ContactContent["form"]["serviceOptions"]>;
  placeholder?: string;
}

export const ContactModal = ({ isOpen, onClose, serviceField }: ContactModalProps) => {
  const form = useMemo(
    () => ({
      ...BASE_MODAL_FORM,
      ...(serviceField
        ? {
            serviceLabel: serviceField.label ?? "Select the service you need",
            serviceOptions: serviceField.options,
            servicePlaceholder: serviceField.placeholder ?? "Select a service...",
          }
        : {}),
    }),
    [serviceField]
  );

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
      <div className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="font-heading text-2xl font-black text-brand-charcoal">Get in Touch</h2>
            <p className="mt-1 text-sm text-gray-500">Our team will respond within 24 hours.</p>
          </div>
          <button
            aria-label="Close"
            className="ml-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-brand-charcoal"
            onClick={onClose}
            type="button"
          >
            <X className="size-5" />
          </button>
        </div>
        <ContactForm form={form} />
      </div>
    </div>
  );
};

// ─── ContactModalTrigger ─────────────────────────────────────────────────────

export interface ContactModalTriggerProps {
  label?: string;
  serviceField?: ContactModalServiceField;
  size?: "default" | "icon" | "lg" | "sm";
  variant?:
    | "default"
    | "ghost"
    | "link"
    | "outline"
    | "primary"
    | "secondary"
    | "tertiary"
    | "white-outline"
    | "white";
}

export const ContactModalTrigger = ({
  label = "Get in Touch",
  serviceField,
  size = "lg",
  variant = "primary",
}: ContactModalTriggerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <div className="flex justify-center py-10">
        <Button onClick={open} size={size} variant={variant}>
          {label}
        </Button>
      </div>
      <ContactModal isOpen={isOpen} onClose={close} serviceField={serviceField} />
    </>
  );
};
