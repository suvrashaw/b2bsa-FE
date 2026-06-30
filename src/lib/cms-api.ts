type ApiResponse<T> = {
  data?: T;
  error?: string;
  errors?: unknown;
  message?: string;
  success?: boolean;
};

type StructuredPageResponse<TContent> = {
  content: TContent;
  slug: string;
  templateType: string;
};

export interface ContactSubmissionPayload {
  company?: string;
  email: string;
  message: string;
  name: string;
  phone?: string;
  sourcePage?: string;
  tracking?: Record<string, unknown>;
}

export interface NewsletterSubscriptionPayload {
  email: string;
  name?: string;
  sourcePage?: string;
}

const backendBaseUrl = (
  process.env.NEXT_PUBLIC_BACKEND_API_URL ||
  process.env.BACKEND_API_URL ||
  "http://localhost:4000"
).replace(/\/$/, "");

const apiUrl = (path: string) => `${backendBaseUrl}/api/v1${path}`;

const encodeSlugPath = (slug: string) => {
  const normalized = slug === "/" ? "" : slug.replace(/^\/+/, "").replace(/\/+$/, "");
  return normalized
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === "object" && !Array.isArray(value);

export const mergeCmsContent = <TContent extends Record<string, unknown>>(
  fallback: TContent,
  override: unknown
): TContent => {
  if (!isRecord(override)) {
    return fallback;
  }

  const merged: Record<string, unknown> = { ...fallback };

  for (const [key, value] of Object.entries(override)) {
    const current = merged[key];
    if (isRecord(current) && isRecord(value)) {
      merged[key] = mergeCmsContent(current, value);
    } else if (value !== undefined && value !== null) {
      merged[key] = value;
    }
  }

  return merged as TContent;
};

async function parseResponse<T>(response: Response): Promise<T> {
  const payload = (await response.json()) as ApiResponse<T>;

  if (!response.ok || payload.error) {
    throw new Error(payload.error || payload.message || `Request failed with ${response.status}`);
  }

  return (payload.data ?? payload) as T;
}

export async function getStructuredPageContent<TContent extends Record<string, unknown>>(
  slug: string,
  fallback: TContent
): Promise<TContent> {
  try {
    const encodedSlug = encodeSlugPath(slug);
    const path = encodedSlug ? `/structured-pages/published/${encodedSlug}` : "/structured-pages/published/";
    const response = await fetch(apiUrl(path), {
      cache: "no-store",
    });

    if (!response.ok) {
      return fallback;
    }

    const payload = (await response.json()) as StructuredPageResponse<unknown>;
    return mergeCmsContent(fallback, payload.content);
  } catch {
    return fallback;
  }
}

export async function submitContactForm(payload: ContactSubmissionPayload) {
  const response = await fetch(apiUrl("/contact-submissions"), {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return parseResponse(response);
}

export async function subscribeNewsletter(payload: NewsletterSubscriptionPayload) {
  const response = await fetch(apiUrl("/newsletter-subscribers"), {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return parseResponse(response);
}
