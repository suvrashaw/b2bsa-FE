export interface CultureReason {
  description: string;
  id: string;
  title: string;
}

interface CultureReasonCardProps {
  reason: CultureReason;
}

export const CultureReasonCard = ({ reason }: CultureReasonCardProps) => {
  return (
    <div className="border-l border-brand-blue/30 pl-5">
      <h3 className="mb-3 font-heading text-xl font-bold text-brand-charcoal">{reason.title}</h3>
      <p className="text-sm leading-relaxed text-brand-charcoal/70 md:text-base">
        {reason.description}
      </p>
    </div>
  );
};
