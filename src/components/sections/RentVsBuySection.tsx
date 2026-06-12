import type { ReactNode } from "react";

import { Clock, Coins, DollarSign, MapPin, Maximize2, Move, Truck } from "lucide-react";

import { Heading } from "@/components/ui/Heading";

const ICON_MAP: Record<string, ReactNode> = {
  Clock: <Clock className="h-20 w-20" strokeWidth={1.5} />,
  Coins: <Coins className="h-20 w-20" strokeWidth={1.5} />,
  DollarSign: <DollarSign className="h-20 w-20" strokeWidth={1.5} />,
  MapPin: <MapPin className="h-20 w-20" strokeWidth={1.5} />,
  Maximize2: <Maximize2 className="h-20 w-20" strokeWidth={1.5} />,
  Move: <Move className="h-20 w-20" strokeWidth={1.5} />,
  Truck: <Truck className="h-20 w-20" strokeWidth={1.5} />,
};

export interface RentVsBuySectionProps {
  description?: string;
  heading: string;
  layout?: "icon-grid" | "split" | "value-grid";
  reasons: readonly RentVsBuyReason[];
}

interface RentVsBuyReason {
  bullets?: readonly string[];
  description?: ReactNode;
  icon?: string;
  title: string;
}

export const RentVsBuySection = ({
  description,
  heading,
  layout = "icon-grid",
  reasons,
}: RentVsBuySectionProps) => {
  const isIconGrid = layout === "icon-grid";
  const isSplit = layout === "split";
  const isValueGrid = layout === "value-grid";

  return (
    <section className="bg-brand-gray py-20">
      <div className="container mx-auto px-8">
        {/* Heading with brand-blue highlight bar */}
        <div className="mb-6 text-center">
          <Heading as="h2">{heading}</Heading>
        </div>

        {/* Short description */}
        {description && (
          <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-brand-charcoal/70 md:text-lg">
            {description}
          </p>
        )}

        {isValueGrid && (
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-brand-charcoal/15 bg-brand-charcoal/15 lg:grid-cols-5">
              {reasons.map((reason) => (
                <div
                  className="flex min-h-28 items-center justify-center bg-brand-white p-4 text-center lg:min-h-32 lg:p-5"
                  key={reason.title}
                >
                  <h3 className="text-xs leading-snug font-bold break-words text-brand-charcoal sm:text-sm lg:text-base">
                    {reason.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {isSplit && (
          <div className="mx-auto max-w-5xl">
            <div className="grid overflow-hidden border-y border-brand-charcoal/15 md:grid-cols-2 md:border-y-0">
              {reasons.map((reason) => (
                <div
                  className="border-b border-brand-charcoal/15 px-6 py-10 last:border-b-0 md:border-r md:border-b-0 md:px-12 md:py-12 md:last:border-r-0"
                  key={reason.title}
                >
                  <h3 className="mb-6 font-heading text-2xl font-bold text-brand-charcoal">
                    {reason.title}
                  </h3>
                  {reason.bullets ? (
                    <ul className="space-y-4">
                      {reason.bullets.map((item) => (
                        <li
                          className="flex gap-3 text-base leading-relaxed text-brand-charcoal/70"
                          key={item}
                        >
                          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-brand-cyan" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-base leading-relaxed text-brand-charcoal/70 md:text-lg">
                      {reason.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {isIconGrid && (
          /* 3 reasons grid with vertical dividers */
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap justify-center">
              {reasons.map((reason) => (
                <div
                  className="flex w-full flex-col items-center border-b border-brand-charcoal/15 px-10 py-12 text-center last:border-b-0 md:w-1/3 md:border-r md:border-b-0 md:py-8 md:last:border-r-0 md:[&:nth-child(3n)]:border-r-0"
                  key={reason.title}
                >
                  {/* Icon container */}
                  <div className="mb-6 flex items-center justify-center text-brand-blue">
                    {ICON_MAP[reason.icon ?? "DollarSign"] ?? (
                      <DollarSign className="h-20 w-20" strokeWidth={1.5} />
                    )}
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
        )}
      </div>
    </section>
  );
};
