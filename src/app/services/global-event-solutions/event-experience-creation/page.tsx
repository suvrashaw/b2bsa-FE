import type { Metadata } from "next";

import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Capabilities } from "@/components/sections/Capabilities";
import { Carousel } from "@/components/sections/Carousel";
import { Spotlight, type SpotlightProps } from "@/components/sections/Spotlight";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";
import {
  EVENT_EXPERIENCE_CAPABILITIES,
  EVENT_EXPERIENCE_CONTACT_CTA,
  EVENT_EXPERIENCE_DELIVERABLES,
  EVENT_EXPERIENCE_DESIGNED_FOR,
  EVENT_EXPERIENCE_FAQ,
  EVENT_EXPERIENCE_IMAGE_HERO,
  EVENT_EXPERIENCE_INTRO,
  EVENT_EXPERIENCE_PAGE,
  EVENT_EXPERIENCE_WHY_CHOOSE_US,
  EVENT_EXPERIENCE_WHY_MATTERS,
} from "@/content/services/global-event-solutions/event-experience-creation/content";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_EXPERIENCE_PAGE);

const capabilityAssets = [
  { icon: "Target", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Map", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Lightbulb", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Settings2", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Users", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "BarChart2", image: "/media/home/hero/home_hero_bg.avif" },
];

const capabilityFeatures = (
  EVENT_EXPERIENCE_CAPABILITIES.phases as { description?: string; title: string }[]
).map((phase, index) => ({
  description: phase.description,
  icon: capabilityAssets[index]?.icon ?? "Target",
  id: phase.title
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, ""),
  image: capabilityAssets[index]?.image ?? "/media/home/hero/home_hero_bg.avif",
  label: phase.title,
}));

const servicesIncludeFeatures = EVENT_EXPERIENCE_CAPABILITIES.servicesInclude.items.map((item) => ({
  icon: item.icon,
  id: item.id,
  image: item.image,
  label: item.label,
}));

const Page = () => {
  return (
    <ServicePage
      contactUs={EVENT_EXPERIENCE_CONTACT_CTA}
      customSections={
        <>
          <Carousel cols={4} heading={EVENT_EXPERIENCE_WHY_CHOOSE_US.heading} id="why-choose-us" layout="carousel">
            {EVENT_EXPERIENCE_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>
          <Capabilities
            capabilities={servicesIncludeFeatures}
            heading={EVENT_EXPERIENCE_CAPABILITIES.servicesInclude.heading}
            mediaPosition="right"
            showCapabilityDescriptions={false}
          />
        </>
      }
      faq={EVENT_EXPERIENCE_FAQ}
      faqVariant="accordion"
      hero={EVENT_EXPERIENCE_IMAGE_HERO}
      page={EVENT_EXPERIENCE_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <Capabilities
            capabilities={capabilityFeatures}
            description={EVENT_EXPERIENCE_CAPABILITIES.description}
            heading={EVENT_EXPERIENCE_CAPABILITIES.title}
            mediaPosition="left"
          />
          <Spotlight {...(EVENT_EXPERIENCE_DESIGNED_FOR as SpotlightProps)} />
          <StickyScroll
            heading={EVENT_EXPERIENCE_WHY_MATTERS.heading}
            reasons={EVENT_EXPERIENCE_WHY_MATTERS.reasons}
            showCta={false}
          />
        </>
      }
      proofBar={EVENT_EXPERIENCE_INTRO}
      services={EVENT_EXPERIENCE_DELIVERABLES}
      spotlight={EVENT_EXPERIENCE_INTRO}
    />
  );
};

export default Page;
