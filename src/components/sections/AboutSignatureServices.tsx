import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Heading } from "@/components/ui/Heading";

export interface AboutSignatureServiceItem {
  href: string;
  id: string;
  image: string;
  title: string;
}

export interface AboutSignatureServicesData {
  heading: string;
  services: AboutSignatureServiceItem[];
}

export const AboutSignatureServices = ({ data }: { data: AboutSignatureServicesData }) => {
  return (
    <section className="bg-brand-gray py-20" id="signature-services">
      <div className="container mx-auto px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Heading as="h2">{data.heading}</Heading>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {data.services.map((service) => (
            <Link
              className="group relative min-h-72 overflow-hidden rounded-lg bg-brand-charcoal"
              href={service.href}
              key={service.id}
            >
              <Image
                alt={service.title}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 20vw"
                src={service.image}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/5" />
              <div className="absolute right-5 bottom-5 left-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-blue transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-xl leading-tight font-bold text-white">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
