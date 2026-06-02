"use client";

import { useCallback, useState } from "react";

import { Button } from "@/components/ui/Button";
import { ContactModal } from "@/components/ui/ContactModal";

export const ContactModalTrigger = ({ label = "Get in Touch" }: { label?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <div className="flex justify-center py-10">
        <Button onClick={open} size="lg" variant="primary">
          {label}
        </Button>
      </div>
      <ContactModal isOpen={isOpen} onClose={close} />
    </>
  );
};
