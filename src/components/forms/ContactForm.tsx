"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import type { ContactContent } from "@/content/home";

import { FormInput } from "@/components/forms/FormInput";
import { FormSelect } from "@/components/forms/FormSelect";
import { FormTextarea } from "@/components/forms/FormTextarea";
import { Button } from "@/components/ui/Button";

export interface ContactFormProps {
  className?: string;
  form: ContactContent["form"];
}

export const ContactForm = ({ className, form }: ContactFormProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 600));
      setLoading(false);
      router.push("/thank-you");
    },
    [router]
  );

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className={`grid gap-6 ${form.lastNameLabel ? "grid-cols-2" : "grid-cols-1"}`}>
          <FormInput
            id="contact-first-name"
            label={form.firstNameLabel}
            placeholder={form.firstNamePlaceholder}
            required
            type="text"
          />
          {form.lastNameLabel && (
            <FormInput
              id="contact-last-name"
              label={form.lastNameLabel}
              placeholder={form.lastNamePlaceholder}
              type="text"
            />
          )}
        </div>

        {(form.companyLabel || form.jobTitleLabel) && (
          <div className="grid grid-cols-2 gap-6">
            {form.companyLabel && (
              <FormInput
                id="contact-company"
                label={form.companyLabel}
                placeholder={form.companyPlaceholder}
                type="text"
              />
            )}
            {form.jobTitleLabel && (
              <FormInput
                id="contact-job-title"
                label={form.jobTitleLabel}
                placeholder={form.jobTitlePlaceholder}
                type="text"
              />
            )}
          </div>
        )}

        <div className={`grid gap-6 ${form.phoneLabel ? "grid-cols-2" : "grid-cols-1"}`}>
          <FormInput
            id="contact-email"
            label={form.emailLabel}
            placeholder={form.emailPlaceholder}
            required
            type="email"
          />

          {form.phoneLabel && (
            <FormInput
              id="contact-phone"
              label={form.phoneLabel}
              placeholder={form.phonePlaceholder}
              type="tel"
            />
          )}
        </div>

        {(form.countryLabel || form.timelineLabel) && (
          <div className="grid grid-cols-2 gap-6">
            {form.countryLabel && (
              <FormInput
                id="contact-country"
                label={form.countryLabel}
                placeholder={form.countryPlaceholder}
                type="text"
              />
            )}
            {form.timelineLabel && (
              <FormInput
                id="contact-timeline"
                label={form.timelineLabel}
                placeholder={form.timelinePlaceholder}
                type="text"
              />
            )}
          </div>
        )}

        {form.serviceLabel && form.serviceOptions && (
          <FormSelect
            id="contact-service"
            label={form.serviceLabel}
            options={form.serviceOptions}
            placeholder={form.servicePlaceholder}
          />
        )}

        {form.eventLabel && (
          <FormInput
            id="contact-event"
            label={form.eventLabel}
            placeholder={form.eventPlaceholder}
            type="text"
          />
        )}

        {form.messageLabel && (
          <FormTextarea
            id="contact-message"
            label={form.messageLabel}
            placeholder={form.messagePlaceholder}
            rows={4}
          />
        )}

        {form.consentLabel && (
          <div className="flex items-start gap-3">
            <input
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-brand-blue"
              id="contact-consent"
              required
              type="checkbox"
            />
            <label className="text-sm leading-snug text-gray-500" htmlFor="contact-consent">
              {form.consentLabel}
            </label>
          </div>
        )}

        {form.trustNote && <p className="text-sm leading-snug text-gray-500">{form.trustNote}</p>}

        <Button
          className="flex w-full items-center justify-center py-4 text-lg"
          disabled={loading}
          type="submit"
          variant="primary"
        >
          {loading ? "Sending…" : form.ctaLabel}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </form>
  );
};
