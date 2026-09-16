/**
 * Canonical site configuration — source of truth for SEO, AEO, and schema.
 * Update SITE_URL via NEXT_PUBLIC_SITE_URL in production.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://geck.ai";

export const SITE = {
  name: "Geck",
  legalName: "Geck",
  tagline: "Turn AI into working systems and measurable growth",
  description:
    "From strategy and engineering to proprietary products, we help you automate work, build native experiences, and scale faster.",
  url: SITE_URL,
  locale: "en_US",
  language: "en",
  twitter: "@geck",
  email: "hello@geck.ai",
  sameAs: [
    "https://twitter.com/geck",
    "https://www.linkedin.com/company/geck",
  ],
} as const;

export type SitePage = {
  path: string;
  title: string;
  description: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

/** Indexable marketing routes — keep sitemap, llms.txt, and nav in sync. */
export const INDEXABLE_PAGES: SitePage[] = [
  {
    path: "/",
    title: "Geck: Turn AI into working systems and measurable growth",
    description: SITE.description,
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/v1",
    title: "Geck: Classic Home (Agentic Commerce)",
    description: SITE.description,
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    path: "/products",
    title: "Geck Products",
    description:
      "Software built from real world execution: Geck Growth, Voice, Vision, DROSS, and Geck Test.",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/about",
    title: "About Geck",
    description:
      "Learn how Geck helps brands become the answer AI systems and search engines recommend.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/faq",
    title: "FAQ: Geck AEO & SEO",
    description:
      "Answers to common questions about Answer Engine Optimization, Geck features, and how AI citations work.",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/contact",
    title: "Contact Geck",
    description: "Get in touch with the Geck team for demos, support, or partnership inquiries.",
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    description: "How Geck collects, uses, and protects personal information.",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/typography",
    title: "Typography & Brand Kit: Geck",
    description:
      "Geck marketing brand kit: typefaces, type scale, colors, buttons, inputs, and surface patterns.",
    changeFrequency: "monthly",
    priority: 0.4,
  },
];

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
