import { type BasicCardItem, BasicCards } from "@/components/items/BasicCards";
import { Heading } from "@/components/ui/Heading";

export interface CardsSectionProps {
  heading: string;
  headingHighlight?: string;
  items: BasicCardItem[];
}

export const CardsSection = ({ heading, headingHighlight, items }: CardsSectionProps) => {
  return (
    <section className="bg-brand-gray py-20">
      <div className="container mx-auto px-8">
        <div className="mb-14 text-center">
          <Heading as="h2" className="text-center" highlight={headingHighlight}>
            {heading}
          </Heading>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {items.map((item) => (
            <BasicCards item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
