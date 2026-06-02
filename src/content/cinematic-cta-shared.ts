/**
 * Shared assets for ContactCinematicCTA used across all service pages.
 * Centralised here to avoid duplication and make brand updates easy.
 */
export const CINEMATIC_CTA_SHARED = {
  backgroundImage: {
    alt: "Enterprise trade show event backdrop",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1920",
  },
  proofLabel: "Trusted by 500+ companies",
  proofLogos: [
    { alt: "Airtel", src: "/logos/circle-airtel.svg" },
    { alt: "SingleStore", src: "/logos/circle-singlestore.svg" },
    { alt: "CSC", src: "/logos/circle-csc.svg" },
    { alt: "United Payments", src: "/logos/circle-united-payments.svg" },
  ],
  secondaryCta: {
    href: "mailto:info@b2bsalesarrow.com",
    label: "Contact Us",
  },
} as const;
