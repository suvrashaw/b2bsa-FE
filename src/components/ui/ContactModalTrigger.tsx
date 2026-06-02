"use client";

import { useCallback, useState } from "react";

import { Button } from "@/components/ui/Button";
import { ContactModal } from "@/components/ui/ContactModal";

export interface ContactModalTriggerProps {
  label?: string;
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
      <ContactModal isOpen={isOpen} onClose={close} />
    </>
  );
};
