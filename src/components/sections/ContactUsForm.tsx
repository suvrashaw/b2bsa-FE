"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  type ContactContent,
  HOME_CONTACT_CONTENT,
} from "@/content/home/content";

interface ContactUsFormProps {
  content?: ContactContent;
  description?: ContactContent["description"];
  eyebrow?: ContactContent["eyebrow"];
  form?: ContactContent["form"];
  heading?: ContactContent["heading"];
  illustration?: ContactContent["illustration"] | null;
}

const CONTACTUS_ANIMATE = { y: [0, -15, 0] };
const CONTACTUS_TRANSITION = {
  duration: 4,
  ease: "easeInOut",
  repeat: Infinity,
} as const;

export const ContactUsForm = ({
  content = HOME_CONTACT_CONTENT,
  description = content.description,
  form = content.form,
  heading = content.heading,
  illustration = content.illustration,
}: ContactUsFormProps = {}) => {
  return (
    <section
      className="relative overflow-hidden bg-brand-gray py-14 md:py-20 lg:py-24"
      id="contact"
    >
      {/* Decorative background flare */}
      <div className="pointer-events-none absolute top-0 right-0 size-[800px] rounded-full bg-brand-cyan/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 size-[800px] rounded-full bg-brand-blue/5 blur-[120px]" />

      <div className="relative z-20 container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Side: Contact Info & Image */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="w-full text-center md:text-left">
              <SectionHeader as="h2" className="mb-8">
                {heading}
              </SectionHeader>
            </div>
            <p className="type-body-l mb-12 max-w-md text-center leading-relaxed text-gray-600 md:text-left">
              {description}
            </p>

            {illustration && (
              <motion.div
                animate={CONTACTUS_ANIMATE}
                className="mt-4 w-full max-w-md"
                transition={CONTACTUS_TRANSITION}
              >
                <Image
                  alt={illustration.alt}
                  className="mx-auto h-auto w-full drop-shadow-xl md:mx-0"
                  height={360}
                  src={illustration.src}
                  width={480}
                />
              </motion.div>
            )}
          </div>

          {/* Right Side: Contact Form */}
          <div className="relative z-10 rounded-2xl border border-gray-200 bg-brand-gray/50 p-8 shadow-2xl backdrop-blur-xl md:rounded-[2.5rem] lg:p-12">
            <ContactForm form={form} />
          </div>
        </div>
      </div>
    </section>
  );
};
