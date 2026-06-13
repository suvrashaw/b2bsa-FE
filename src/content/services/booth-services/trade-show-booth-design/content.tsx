import { GLOBAL_CASE_STUDIES } from "@/content/shared";
import PAGE_DATA from "./page.json";
import DATA from "./data.json";

export const BOOTH_DESIGN_HERO = {
  description:
    "We design custom trade show booths that buyers stop at deliberately, because the space, the story, and the sales system inside it were built together from day one.",
  title: (
    <>
      <strong className="font-bold">Trade Show Booth Design</strong> That Converts Foot Traffic Into
      Pipeline
    </>
  ),
};

export { GLOBAL_PROOF_STATS as BOOTH_DESIGN_PROOF_BAR } from "../../shared";

export const BOOTH_DESIGN_SHOWCASE_ITEMS = DATA.designShowcaseItems;

export const BOOTH_DESIGN_SPOTLIGHT = DATA.designSpotlight;

export const BOOTH_DESIGN_DELIVERABLES = DATA.designDeliverables;

export const BOOTH_DESIGN_PROCESS = DATA.designProcess;

export const BOOTH_DESIGN_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_DESIGN_FAQ = {
  faqs: [
    {
      answer:
        "Design fees typically range from $3,000 for a compact 10x10 to $60,000+ for large custom or double-deck structures. See our pricing guide table above for reference ranges. Contact us for a project-specific estimate based on your booth size, event, and brief.",
      id: "cost",
      question: "How much does custom trade show booth design cost?",
    },
    {
      answer: (
        <>
          A <strong className="font-bold">custom trade show booth</strong> is designed and built
          specifically for your brand. A <strong className="font-bold">modular booth</strong> uses a
          reusable system with updated graphics between events, faster and more cost-efficient for
          multi-event programs. We design and build both.
        </>
      ),
      id: "modular-vs-custom",
      question: "What is the difference between modular and custom booth design?",
    },
    {
      answer:
        "From brief to approved 3D renders: 3–5 weeks. Fabrication lead time varies by complexity. For major international events, engage us 14–20 weeks before the show.",
      id: "timeline",
      question: "How long does the design process take?",
    },
    {
      answer:
        "Yes. We extend your brand system, typefaces, colour palette, photography style, into a physical exhibition environment without losing consistency.",
      id: "brand-guidelines",
      question: "Can you work with our existing brand guidelines?",
    },
    {
      answer:
        "Yes. Reuse planning is built into the design from the start. Many clients run the same booth system for 3–5 years with graphic updates, reducing cost per event by 30–50%.",
      id: "reuse",
      question: "Can the booth be reused at multiple events?",
    },
    {
      answer:
        "Yes, full design-to-build service or design-only with production-ready files for your fabrication partner. You choose the scope.",
      id: "fabrication",
      question: "Do you handle fabrication and build as well?",
    },
    {
      answer: (
        <>
          GITEX, CES, MWC, AWS re:Invent, Dreamforce, Web Summit, ADIPEC, Money20/20, Hannover
          Messe, and major regional <strong className="font-bold">industry trade shows</strong>{" "}
          across all sectors and markets.
        </>
      ),
      id: "events",
      question: "What events do you design booths for?",
    },
  ],
  heading: "Trade Show Booth Design FAQs",
};

export const BOOTH_DESIGN_PAGE = PAGE_DATA;

export const BOOTH_DESIGN_RELATED_SERVICES = DATA.designRelatedServices;

export const BOOTH_DESIGN_WHY_CHOOSE_US = DATA.designWhyChooseUs;

export const BOOTH_DESIGN_BLOGS_SECTION = DATA.designBlogsSection;

export const BOOTH_DESIGN_CONTACT_CTA = {
    ...DATA.designContactCta,
    headingLines: ["Every Square Foot", "Should Earn Its Place"] as [string, string]
};
