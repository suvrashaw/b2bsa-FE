import { cn } from "@/lib";

export interface StatCardProps {
  bg?: string;
  className?: string;
  label: string;
  value: string;
}

export const StatCard = ({
  bg = "bg-brand-blue/10",
  className,
  label,
  value,
}: StatCardProps) => {
  return (
    <div className={cn("flex flex-col items-start gap-2 rounded-2xl p-6", bg, className)}>
      <span className="font-heading text-5xl font-bold text-white">{value}</span>
      <span className="text-sm font-medium text-white/80">{label}</span>
    </div>
  );
};
