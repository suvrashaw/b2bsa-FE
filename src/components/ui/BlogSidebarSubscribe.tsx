"use client";

import type { FormEvent } from "react";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { GLOBAL_INDUSTRY_SERVICES } from "@/content/shared";

export const BlogSidebarSubscribe = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 600));
      setLoading(false);
      router.push("/thank-you");
    },
    [router]
  );

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="bg-gradient-to-r from-brand-blue to-brand-cyan px-4 py-4">
        <p className="text-sm font-bold tracking-widest text-white uppercase">
          Stay Ahead of the Market
        </p>
      </div>
      <form className="space-y-4 rounded-b-2xl bg-white p-6" onSubmit={handleSubmit}>
        <div>
          <h2 className="font-heading text-2xl leading-tight font-bold text-brand-charcoal">
            Don&apos;t Just Scroll!
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            <span className="font-bold text-brand-blue">Subscribe Now</span> to Stay in the Loop!
          </p>
        </div>

        <div className="space-y-3">
          <label className="sr-only" htmlFor="blog-subscribe-email">
            Work Email
          </label>
          <input
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:border-brand-blue focus:outline-none"
            id="blog-subscribe-email"
            placeholder="Work email"
            required
            type="email"
          />

          <label className="sr-only" htmlFor="blog-subscribe-industry">
            Industry
          </label>
          <select
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 transition-colors focus:border-brand-blue focus:outline-none"
            id="blog-subscribe-industry"
            required
          >
            <option value="">Select industry</option>
            {GLOBAL_INDUSTRY_SERVICES.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <button
          className="w-full rounded-[4px] bg-gradient-to-r from-brand-blue to-brand-cyan py-3 font-bold text-white shadow-sm transition-opacity hover:opacity-95 disabled:pointer-events-none disabled:opacity-60"
          disabled={loading}
          type="submit"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </section>
  );
};
