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
  reasons,
}: RentVsBuySectionProps) => {
  return (
    <section className="bg-brand-gray py-20">
      <div className="container mx-auto px-8">
        {/* Heading with brand-blue highlight bar */}
        <div className="mb-6 text-center">
          <Heading as="h2" className="inline tracking-tight text-brand-charcoal">
            <span className="relative inline-block px-3">
              <span className="relative z-10">{heading}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-[30%] bottom-0 bg-brand-blue/20"
              />
            </span>
          </Heading>
        </div>

        {/* Short description */}
        <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-brand-charcoal/70 md:text-lg">
          {description}
        </p>

        {/* 3 reasons grid with vertical dividers */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 divide-y divide-brand-charcoal/15 justify-items-center md:grid-cols-3 md:divide-x md:divide-y-0">
            {reasons.map((reason) => (
              <div
                className="flex flex-col items-center px-10 py-12 text-center md:py-8"
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
