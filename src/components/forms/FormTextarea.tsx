import { forwardRef, type TextareaHTMLAttributes } from "react";

import { cn } from "@/lib";

export interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  id: string;
  label: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, error, id, label, rows = 4, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-600" htmlFor={id}>
          {label}
        </label>
        <textarea
          className={cn(
            "w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-brand-blue focus:outline-none",
            error && "border-red-400 focus:border-red-500",
            className
          )}
          id={id}
          ref={ref}
          rows={rows}
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);
FormTextarea.displayName = "FormTextarea";
