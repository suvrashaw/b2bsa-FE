import Image from "next/image";

const IMAGES = [
  "/media/services/media-production/corporate-video-production/deliverables-1.avif",
  "/media/services/media-production/corporate-video-production/deliverables-2.avif",
  "/media/services/media-production/corporate-video-production/deliverables-3.avif",
  "/media/services/media-production/corporate-video-production/why-choose-us-1.avif",
  "/media/services/media-production/corporate-video-production/why-choose-us-2.avif",
];

export const CorporateVideoImageStrip = () => {
  return (
    <div className="flex h-[216px] w-full overflow-hidden">
      {IMAGES.map((src, idx) => (
        <div
          key={idx}
          className={`relative h-full flex-1 w-full ${
            idx >= 2 ? "hidden lg:block" : "block"
          }`}
        >
          <Image
            src={src}
            alt="Corporate video production behind the scenes"
            fill
            className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
            sizes="(max-width: 1024px) 50vw, 20vw"
          />
        </div>
      ))}
    </div>
  );
};
