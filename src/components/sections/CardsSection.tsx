import { type BasicCardItem, BasicCards } from "@/components/items/BasicCards";
import { Heading } from "@/components/ui/Heading";

export interface CardsSectionProps {
  heading: string;
  items: BasicCardItem[];
}

export const CardsSection = ({ heading, items }: CardsSectionProps) => {
  return (
    <section className="bg-brand-gray py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
        <div className="mb-14 text-center">
          <Heading as="h2" className="text-center">
            {heading}
          </Heading>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <BasicCards item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
