"use client";

import { ArrowRight } from "lucide-react";
import { useCallback, useState } from "react";

import type { ContactContent } from "@/content/home/content";

import { FormInput } from "@/components/forms/FormInput";
import { FormSelect } from "@/components/forms/FormSelect";
import { FormTextarea } from "@/components/forms/FormTextarea";
import { Button } from "@/components/ui/Button";

export interface ContactFormProps {
  className?: string;
  form: ContactContent["form"];
}

export const ContactForm = ({ className, form }: ContactFormProps) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setLoading(false);
    setSubmitted(true);
  }, []);

  if (submitted) {
    return (
      <div className={`flex flex-col items-center justify-center gap-4 py-16 text-center ${className}`}>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10">
          <ArrowRight className="h-8 w-8 rotate-[-45deg] text-brand-blue" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-brand-charcoal">Message received!</h3>
        <p className="max-w-sm text-gray-500">
          Thank you for reaching out. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className={`grid gap-6 ${form.lastNameLabel ? "grid-cols-2" : "grid-cols-1"}`}>
          <FormInput
            autoComplete="given-name"
            id="contact-first-name"
            label={form.firstNameLabel}
            placeholder={form.firstNamePlaceholder}
            required
            type="text"
          />
          {form.lastNameLabel && (
            <FormInput
              autoComplete="family-name"
              id="contact-last-name"
              label={form.lastNameLabel}
              placeholder={form.lastNamePlaceholder}
              type="text"
            />
          )}
        </div>

        {form.companyLabel && (
          <FormInput
            autoComplete="organization"
            id="contact-company"
            label={form.companyLabel}
            placeholder={form.companyPlaceholder}
            type="text"
          />
        )}
        {form.jobTitleLabel && (
          <FormInput
            autoComplete="organization-title"
            id="contact-job-title"
            label={form.jobTitleLabel}
            placeholder={form.jobTitlePlaceholder}
            type="text"
          />
        )}

        <div className={`grid gap-6 ${form.phoneLabel ? "grid-cols-2" : "grid-cols-1"}`}>
          <FormInput
            autoComplete="email"
            id="contact-email"
            label={form.emailLabel}
            placeholder={form.emailPlaceholder}
            required
            type="email"
          />

          {form.phoneLabel && (
            <FormInput
              autoComplete="tel"
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
                autoComplete="country-name"
                id="contact-country"
                label={form.countryLabel}
                placeholder={form.countryPlaceholder}
                type="text"
              />
            )}
            {form.timelineLabel && (
              <FormInput
                autoComplete="off"
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
