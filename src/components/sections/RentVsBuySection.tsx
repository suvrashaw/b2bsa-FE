import { Clock, Coins, DollarSign, MapPin, Maximize2, Move, Truck } from "lucide-react";

import { Heading } from "@/components/ui/Heading";

const ICON_MAP: Record<string, React.ReactNode> = {
  Clock: <Clock className="h-20 w-20" strokeWidth={1.5} />,
  Coins: <Coins className="h-20 w-20" strokeWidth={1.5} />,
  DollarSign: <DollarSign className="h-20 w-20" strokeWidth={1.5} />,
  MapPin: <MapPin className="h-20 w-20" strokeWidth={1.5} />,
  Maximize2: <Maximize2 className="h-20 w-20" strokeWidth={1.5} />,
  Move: <Move className="h-20 w-20" strokeWidth={1.5} />,
  Truck: <Truck className="h-20 w-20" strokeWidth={1.5} />,
};

export interface RentVsBuySectionProps {
  description: string;
  heading: string;
  headingHighlight?: string;
  reasons: readonly RentVsBuyReason[];
}

interface RentVsBuyReason {
  description: string;
  icon: string;
  title: string;
}

export const RentVsBuySection = ({
  description,
  heading,
  headingHighlight,
  reasons,
}: RentVsBuySectionProps) => {
  return (
    <section className="bg-brand-gray py-20">
      <div className="container mx-auto px-8">
        {/* Heading with brand-blue highlight bar */}
        <div className="mb-6 text-center">
          <Heading as="h2" highlight={headingHighlight}>
            {heading}
          </Heading>
        </div>

        {/* Short description */}
        <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-brand-charcoal/70 md:text-lg">
          {description}
        </p>

        {/* 3 reasons grid with vertical dividers */}
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap justify-center">
            {reasons.map((reason) => (
              <div
                className="flex w-full flex-col items-center border-b border-brand-charcoal/15 px-10 py-12 text-center last:border-b-0 md:w-1/3 md:border-r md:border-b-0 md:py-8 md:last:border-r-0 md:[&:nth-child(3n)]:border-r-0"
                key={reason.title}
              >
                {/* Icon container */}
                <div className="mb-6 flex items-center justify-center text-brand-blue">
                  {ICON_MAP[reason.icon] ?? <DollarSign className="h-20 w-20" strokeWidth={1.5} />}
                </div>

                {/* Title */}
                <h3 className="mb-4 font-heading text-xl font-bold text-brand-charcoal">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed text-brand-charcoal/65">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
