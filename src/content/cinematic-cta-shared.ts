/**
 * Shared assets for ContactCinematicCTA used across all service pages.
 * Centralised here to avoid duplication and make brand updates easy.
 */
export const CINEMATIC_CTA_SHARED = {
  backgroundImage: {
    alt: "Enterprise trade show event backdrop",
    src: "/images/home/hero/home_hero_bg.avif",
  },
  proofLabel: "Trusted by 500+ companies",
  proofLogos: [
    { alt: "Airtel", src: "/images/client-logos/circle-airtel.svg" },
    { alt: "SingleStore", src: "/images/client-logos/circle-singlestore.svg" },
    { alt: "CSC", src: "/images/client-logos/circle-csc.svg" },
    { alt: "United Payments", src: "/images/client-logos/circle-united-payments.svg" },
  ],
  secondaryCta: {
    href: "mailto:info@b2bsalesarrow.com",
    label: "Contact Us",
  },
} as const;
