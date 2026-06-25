interface CultureReason {
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
      <h3 className="type-h3 mb-3 text-brand-charcoal">{reason.title}</h3>
      <p className="type-body-m leading-relaxed text-brand-charcoal/70">{reason.description}</p>
    </div>
  );
};
