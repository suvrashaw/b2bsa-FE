"use client";

import { useCallback, useState } from "react";

import { Button } from "@/components/ui/Button";
import { ContactModal } from "@/components/ui/ContactModal";

interface SectionContactCtaProps {
  label?: string;
}

export const SectionContactCta = ({ label = "Contact Our Team" }: SectionContactCtaProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <div className="flex justify-center py-10">
        <Button onClick={open} variant="primary">
          {label}
        </Button>
      </div>
      <ContactModal isOpen={isOpen} onClose={close} />
    </>
  );
};
