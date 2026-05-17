"use client";

import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from "framer-motion";
import { Fragment, useCallback, useMemo, useState } from "react";

import { Heading } from "@/components/ui/Heading";
import { type ClientLogoItem, HOME_CLIENT_LOGOS } from "@/content/home";

export interface ClientLogosProps {
  heading?: string;
  logos?: ClientLogoItem[];
  overlap?: boolean;
  speed?: number;
  wheelSpeed?: number;
}

const useLogoMarquee = (speed: number, wheelSpeed: number) => {
  const baseX = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((t, delta) => {
    if (!isHovered) {
      // Move 4% every second
      const moveBy = speed * (delta / 1000);
      baseX.set(baseX.get() - moveBy);
    }
  });

  // Smoothly wrap the percentage between -50% and 0%
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const handleWheel = (e: React.WheelEvent) => {
    // Determine scroll direction/amount
    const scrollAmount = e.deltaX === 0 ? e.deltaY : e.deltaX;
    // Map pixels to a rough percentage for smoothness
    baseX.set(baseX.get() - scrollAmount * wheelSpeed);
  };

  return { handleWheel, setIsHovered, x };
}

const SingleStoreLogo = () => (
  <div className="flex cursor-pointer items-center gap-1.5 transition-all duration-300 hover:scale-125">
    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#8C1AF6]">
      <div className="h-1.5 w-1.5 rounded-full bg-white" />
    </div>
    <span className="font-sans text-xl tracking-tight text-[#1A1A1A]">
      Single<span className="font-bold">Store</span>
    </span>
  </div>
);

const TemenosLogo = () => (
  <span className="cursor-pointer font-sans text-[22px] font-extrabold tracking-tighter text-[#004b87] lowercase transition-all duration-300 hover:scale-125">
    temenos
  </span>
);

const WorldpayLogo = () => (
  <span className="cursor-pointer font-sans text-[22px] font-bold tracking-tight text-[#E31837] lowercase transition-all duration-300 hover:scale-125">
    worldpay
  </span>
);

const SyngeneLogo = () => (
  <span className="cursor-pointer font-serif text-[22px] font-bold tracking-tight text-[#008272] italic transition-all duration-300 hover:scale-125">
    Syngene
  </span>
);

const AirtelLogo = () => (
  <div className="flex cursor-pointer items-center gap-1.5 transition-all duration-300 hover:scale-125">
    <svg className="h-7 w-7 fill-[#ff0000]" viewBox="0 0 24 24">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
        opacity="0.8"
      />
    </svg>
    <span className="font-sans text-[24px] font-bold tracking-tighter text-[#ff0000] lowercase">
      airtel
    </span>
  </div>
);

const InfosysLogo = () => (
  <span className="cursor-pointer font-sans text-[22px] font-light tracking-widest text-[#007CC3] transition-all duration-300 hover:scale-125">
    Infosys
  </span>
);

const StrategyLabel = () => (
  <span className="cursor-pointer font-sans text-[18px] font-bold tracking-wide text-[#1E6091] uppercase transition-all duration-300 hover:scale-125">
    Strategy
  </span>
);

const EventsLabel = () => (
  <span className="cursor-pointer font-sans text-[18px] font-bold tracking-wide text-[#2A9D8F] uppercase transition-all duration-300 hover:scale-125">
    Events
  </span>
);

const MediaLabel = () => (
  <span className="cursor-pointer font-sans text-[18px] font-bold tracking-wide text-[#E63946] uppercase transition-all duration-300 hover:scale-125">
    Media
  </span>
);

const LeadGenLabel = () => (
  <span className="cursor-pointer font-sans text-[18px] font-bold tracking-wide text-[#023E8A] uppercase transition-all duration-300 hover:scale-125">
    Lead Generation
  </span>
);

const SEOLabel = () => (
  <span className="cursor-pointer font-sans text-[18px] font-bold tracking-wide text-[#0077B6] uppercase transition-all duration-300 hover:scale-125">
    SEO
  </span>
);

const ResearchLabel = () => (
  <span className="cursor-pointer font-sans text-[18px] font-bold tracking-wide text-[#457B9D] uppercase transition-all duration-300 hover:scale-125">
    Research
  </span>
);

const DataLabel = () => (
  <span className="cursor-pointer font-sans text-[18px] font-bold tracking-wide text-[#2A9D8F] uppercase transition-all duration-300 hover:scale-125">
    Data
  </span>
);

const EventStrategyLabel = () => (
  <span className="cursor-pointer font-sans text-[18px] font-bold tracking-wide text-[#1E6091] uppercase transition-all duration-300 hover:scale-125">
    Event Strategy
  </span>
);

const BoothDesignLabel = () => (
  <span className="cursor-pointer font-sans text-[18px] font-bold tracking-wide text-[#E63946] uppercase transition-all duration-300 hover:scale-125">
    Booth Design
  </span>
);

const PerformanceMarketingLabel = () => (
  <span className="cursor-pointer font-sans text-[18px] font-bold tracking-wide text-[#023E8A] uppercase transition-all duration-300 hover:scale-125">
    Performance Marketing
  </span>
);

const VideoProductionLabel = () => (
  <span className="cursor-pointer font-sans text-[18px] font-bold tracking-wide text-[#E76F51] uppercase transition-all duration-300 hover:scale-125">
    Video Production
  </span>
);

const MarketResearchLabel = () => (
  <span className="cursor-pointer font-sans text-[18px] font-bold tracking-wide text-[#457B9D] uppercase transition-all duration-300 hover:scale-125">
    Market Research
  </span>
);

const LeadGenerationLabel = () => (
  <span className="cursor-pointer font-sans text-[18px] font-bold tracking-wide text-[#2A9D8F] uppercase transition-all duration-300 hover:scale-125">
    Lead Generation
  </span>
);

const CaseStudiesLabel = () => (
  <span className="cursor-pointer font-sans text-[18px] font-bold tracking-wide text-[#264653] uppercase transition-all duration-300 hover:scale-125">
    Case Studies
  </span>
);

const LOGO_COMPONENTS: Record<string, React.FC> = {
  airtel: AirtelLogo,
  "booth-design": BoothDesignLabel,
  "case-studies": CaseStudiesLabel,
  data: DataLabel,
  "event-strategy": EventStrategyLabel,
  events: EventsLabel,
  infosys: InfosysLogo,
  "lead-gen": LeadGenLabel,
  "lead-generation": LeadGenerationLabel,
  "market-research": MarketResearchLabel,
  media: MediaLabel,
  "performance-marketing": PerformanceMarketingLabel,
  research: ResearchLabel,
  seo: SEOLabel,
  singlestore: SingleStoreLogo,
  strategy: StrategyLabel,
  syngene: SyngeneLogo,
  temenos: TemenosLogo,
  "video-production": VideoProductionLabel,
  worldpay: WorldpayLogo,
};

const LogosRow = ({ logos }: { logos: ClientLogoItem[] }) => (
  <>
    {logos.map((logo) => {
      const LogoComp = LOGO_COMPONENTS[logo.id];
      return (
        <Fragment key={logo.id}>
          {LogoComp ? <LogoComp /> : <span className="font-bold text-gray-400">{logo.id}</span>}
        </Fragment>
      );
    })}
  </>
);

export const ClientLogos = ({
  heading = "Trusted by Leading Brands for Trade Show & Exhibition Solutions",
  logos = HOME_CLIENT_LOGOS,
  overlap = true,
  speed = 4,
  wheelSpeed = 0.05,
}: ClientLogosProps = {}) => {
  const { handleWheel, setIsHovered, x } = useLogoMarquee(speed, wheelSpeed);

  const handleMouseEnter = useCallback(() => setIsHovered(true), [setIsHovered]);
  const handleMouseLeave = useCallback(() => setIsHovered(false), [setIsHovered]);
  const marqueeStyle = useMemo(() => ({ x }), [x]);

  return (
    <div
      className={`pointer-events-none relative z-30 container mx-auto max-w-6xl px-4 md:px-8 ${overlap ? "-mt-16" : "py-12"}`}
    >
      {heading && (
        <Heading
          as="h4"
          className="mb-4 pt-2 text-center text-sm font-semibold tracking-widest text-gray-400 uppercase"
          preserveClassName
        >
          {heading}
        </Heading>
      )}
      <div
        className="shadow-[0_8px_30px_rgb(0,0,0,0.08)](0,0,0,0.5)] pointer-events-auto relative overflow-hidden rounded-xl border border-gray-100 bg-white py-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
      >
        {/* Gradient Masks to make the edges fade smoothly */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

        <motion.div className="flex w-max cursor-grab active:cursor-grabbing" style={marqueeStyle}>
          {/* We render the row twice so it seamlessly loops when it translates -50% */}
          <div className="flex items-center gap-16 px-8 md:gap-24 md:px-12">
            <LogosRow logos={logos} />
          </div>
          <div className="flex items-center gap-16 px-8 md:gap-24 md:px-12">
            <LogosRow logos={logos} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
