import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  id: string;
  label: string;
}

export const FormInput = ({
  className,
  error,
  id,
  label,
  ...props
}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-gray-600" htmlFor={id}>
        {label}
      </label>
      <input
        className={cn(
          "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 transition-colors placeholder:text-gray-400 focus:border-brand-blue focus:outline-none",
          error && "border-red-400 focus:border-red-500",
          className,
        )}
        id={id}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
