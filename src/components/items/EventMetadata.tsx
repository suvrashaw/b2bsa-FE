import { Eyebrow } from "@/components/ui/Eyebrow";

interface EventMetadataProps {
  metadata: { label: string; value: null | string | undefined }[];
}

export const EventMetadata = ({ metadata }: EventMetadataProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {metadata.map(
        ({ label, value }) =>
          value && (
            <Eyebrow
              className="m-0 !mb-0 border-white/30 bg-white/10 text-white/90"
              key={label}
              variant="blue"
            >
              <span className="font-bold">{label}:</span> {value}
            </Eyebrow>
          ),
      )}
    </div>
  );
};
