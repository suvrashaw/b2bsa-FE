import type { SelectHTMLAttributes } from "react";

import { cn } from "@/lib";

export interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  id: string;
  label: string;
  options: SelectOption[];
  placeholder?: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

export const FormSelect = ({
  className,
  error,
  id,
  label,
  options,
  placeholder,
  ...props
}: FormSelectProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-gray-600" htmlFor={id}>
        {label}
      </label>
      <select
        className={cn(
          "w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-600 transition-colors focus:border-brand-blue focus:outline-none",
          error && "border-red-400 focus:border-red-500",
          className
        )}
        id={id}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
