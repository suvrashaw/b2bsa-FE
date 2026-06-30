"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import type { ContactContent } from "@/content/home/content";

import { FormInput } from "@/components/forms/FormInput";
import { FormSelect } from "@/components/forms/FormSelect";
import { FormTextarea } from "@/components/forms/FormTextarea";
import { Button } from "@/components/ui/Button";
import { submitContactForm } from "@/lib/cms-api";

export interface ContactFormProps {
  className?: string;
  form: ContactContent["form"];
}

const buildSchema = (isConsentRequired: boolean) =>
  z.object({
    company: z.string().optional(),
    consent: isConsentRequired
      ? z.boolean().refine((v) => v === true, { message: "You must agree to continue" })
      : z.boolean().optional(),
    country: z.string().optional(),
    email: z.string().min(1, "Email is required").email("Please enter a valid email"),
    event: z.string().optional(),
    firstName: z.string().min(1, "First name is required"),
    jobTitle: z.string().optional(),
    lastName: z.string().optional(),
    message: z.string().optional(),
    phone: z.string().optional(),
    service: z.string().optional(),
    timeline: z.string().optional(),
  });

type ContactFormValues = z.infer<ReturnType<typeof buildSchema>>;

const getSourcePage = () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  return window.location.pathname;
};

const buildSubmissionMessage = (values: ContactFormValues) => {
  const message = values.message?.trim();
  if (message) {
    return message;
  }

  const details = [
    values.service && `Service: ${values.service}`,
    values.event && `Event: ${values.event}`,
    values.country && `Country: ${values.country}`,
    values.timeline && `Timeline: ${values.timeline}`,
    values.jobTitle && `Job title: ${values.jobTitle}`,
  ].filter(Boolean);

  return details.length > 0
    ? details.join("\n")
    : "Contact request submitted from the website.";
};

export const ContactForm = ({ className, form }: ContactFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const schema = useMemo(() => buildSchema(!!form.consentLabel), [form.consentLabel]);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ContactFormValues>({ resolver: zodResolver(schema) });

  if (submitted) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-4 py-16 text-center ${className}`}
      >
        <div className="flex size-16 items-center justify-center rounded-full bg-brand-blue/10">
          <ArrowRight className="size-8 rotate-[-45deg] text-brand-blue" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-brand-charcoal">Message received!</h3>
        <p className="max-w-sm text-gray-500">
          Thank you for reaching out. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  const onSubmit = async (values: ContactFormValues) => {
    setLoading(true);
    setError(null);

    try {
      await submitContactForm({
        company: values.company,
        email: values.email,
        message: buildSubmissionMessage(values),
        name: [values.firstName, values.lastName].filter(Boolean).join(" "),
        phone: values.phone,
        sourcePage: getSourcePage(),
        tracking: {
          country: values.country,
          event: values.event,
          jobTitle: values.jobTitle,
          service: values.service,
          timeline: values.timeline,
        },
      });
      setSubmitted(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not send your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6">
        <div
          className={`grid gap-6 ${form.lastNameLabel ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}
        >
          <FormInput
            autoComplete="given-name"
            error={errors.firstName?.message as string | undefined}
            id="contact-first-name"
            label={form.firstNameLabel}
            placeholder={form.firstNamePlaceholder}
            type="text"
            {...register("firstName")}
          />
          {form.lastNameLabel && (
            <FormInput
              autoComplete="family-name"
              error={errors.lastName?.message as string | undefined}
              id="contact-last-name"
              label={form.lastNameLabel}
              placeholder={form.lastNamePlaceholder}
              type="text"
              {...register("lastName")}
            />
          )}
        </div>

        {form.companyLabel && (
          <FormInput
            autoComplete="organization"
            error={errors.company?.message as string | undefined}
            id="contact-company"
            label={form.companyLabel}
            placeholder={form.companyPlaceholder}
            type="text"
            {...register("company")}
          />
        )}

        {form.jobTitleLabel && (
          <FormInput
            autoComplete="organization-title"
            error={errors.jobTitle?.message as string | undefined}
            id="contact-job-title"
            label={form.jobTitleLabel}
            placeholder={form.jobTitlePlaceholder}
            type="text"
            {...register("jobTitle")}
          />
        )}

        <div
          className={`grid gap-6 ${form.phoneLabel ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}
        >
          <FormInput
            autoComplete="email"
            error={errors.email?.message as string | undefined}
            id="contact-email"
            label={form.emailLabel}
            placeholder={form.emailPlaceholder}
            type="email"
            {...register("email")}
          />
          {form.phoneLabel && (
            <FormInput
              autoComplete="tel"
              error={errors.phone?.message as string | undefined}
              id="contact-phone"
              label={form.phoneLabel}
              placeholder={form.phonePlaceholder}
              type="tel"
              {...register("phone")}
            />
          )}
        </div>

        {(form.countryLabel || form.timelineLabel) && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {form.countryLabel && (
              <FormInput
                autoComplete="country-name"
                error={errors.country?.message as string | undefined}
                id="contact-country"
                label={form.countryLabel}
                placeholder={form.countryPlaceholder}
                type="text"
                {...register("country")}
              />
            )}
            {form.timelineLabel && (
              <FormInput
                autoComplete="off"
                error={errors.timeline?.message as string | undefined}
                id="contact-timeline"
                label={form.timelineLabel}
                placeholder={form.timelinePlaceholder}
                type="text"
                {...register("timeline")}
              />
            )}
          </div>
        )}

        {form.serviceLabel && form.serviceOptions && (
          <FormSelect
            error={errors.service?.message as string | undefined}
            id="contact-service"
            label={form.serviceLabel}
            options={form.serviceOptions}
            placeholder={form.servicePlaceholder}
            {...register("service")}
          />
        )}

        {form.eventLabel && (
          <FormInput
            error={errors.event?.message as string | undefined}
            id="contact-event"
            label={form.eventLabel}
            placeholder={form.eventPlaceholder}
            type="text"
            {...register("event")}
          />
        )}

        {form.messageLabel && (
          <FormTextarea
            error={errors.message?.message as string | undefined}
            id="contact-message"
            label={form.messageLabel}
            placeholder={form.messagePlaceholder}
            rows={4}
            {...register("message")}
          />
        )}

        {form.consentLabel && (
          <div className="flex items-start gap-3">
            <input
              className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-brand-blue"
              id="contact-consent"
              type="checkbox"
              {...register("consent")}
            />
            <div>
              <label className="text-sm leading-snug text-gray-500" htmlFor="contact-consent">
                {form.consentLabel}
              </label>
              {errors.consent && (
                <p className="mt-1 text-xs text-red-500">{errors.consent.message as string}</p>
              )}
            </div>
          </div>
        )}

        {form.trustNote && <p className="text-sm leading-snug text-gray-500">{form.trustNote}</p>}

        {error && <p className="text-sm leading-snug text-red-600">{error}</p>}

        <Button
          className="flex w-full items-center justify-center py-4 text-lg"
          disabled={loading}
          type="submit"
          variant="primary"
        >
          {loading ? "Sending…" : form.ctaLabel}
        </Button>
      </div>
    </form>
  );
};
