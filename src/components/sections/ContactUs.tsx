"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { ContactForm } from "@/components/forms/ContactForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { type ContactContent, HOME_CONTACT_CONTENT } from "@/content/home";

export interface ContactUsProps {
  content?: ContactContent;
  description?: ContactContent["description"];
  eyebrow?: ContactContent["eyebrow"];
  form?: ContactContent["form"];
  heading?: ContactContent["heading"];
  illustration?: ContactContent["illustration"] | null;
}

const CONTACTUS_ANIMATE = { y: [0, -15, 0] };
const CONTACTUS_TRANSITION = { duration: 4, ease: "easeInOut", repeat: Infinity } as const;

export const ContactUs = ({
  content = HOME_CONTACT_CONTENT,
  description = content.description,
  eyebrow = content.eyebrow,
  form = content.form,
  heading = content.heading,
  illustration = content.illustration,
}: ContactUsProps = {}) => {
  return (
    <section className="relative overflow-hidden bg-white py-24" id="contact">
      {/* Decorative background flare */}
      <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-brand-cyan/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[800px] w-[800px] rounded-full bg-brand-blue/5 blur-[120px]" />

      <div className="relative z-20 container mx-auto px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Side: Contact Info & Image */}
          <div className="flex flex-col items-start text-left">
            {eyebrow && <Eyebrow variant="blue">{eyebrow}</Eyebrow>}
            <div className="w-full text-left">
              <Heading as="h2" className="mb-8">
                {heading}
              </Heading>
            </div>
            <p className="mb-12 max-w-md text-left text-lg text-gray-600">{description}</p>

            {illustration && (
              <motion.div
                animate={CONTACTUS_ANIMATE}
                className="mt-4 w-full max-w-md"
                transition={CONTACTUS_TRANSITION}
              >
                <Image
                  alt={illustration.alt}
                  className="h-auto w-full drop-shadow-xl"
                  height={360}
                  src={illustration.src}
                  width={480}
                />
              </motion.div>
            )}
          </div>

          {/* Right Side: Contact Form */}
          <div className="relative z-10 rounded-[2.5rem] border border-gray-200 bg-brand-gray/50 p-8 shadow-2xl backdrop-blur-xl lg:p-12">
            <ContactForm form={form} />
          </div>
        </div>
      </div>
    </section>
  );
};
