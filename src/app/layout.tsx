import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "@fontsource-variable/plus-jakarta-sans/wght.css";
import "@fontsource-variable/syne/wght.css";
import "@fontsource-variable/geist-mono/wght.css";
import "@fontsource/nanum-myeongjo/latin-400.css";
import "@fontsource/nanum-myeongjo/latin-700.css";
import "@fontsource/nanum-myeongjo/latin-800.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Agentic Commerce Platform`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "Geck",
    "Agentic Commerce",
    "AI visibility",
    "AI agents",
    "AEO",
    "SEO",
    "brand citations",
  ],
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Agentic Commerce Platform`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    creator: SITE.twitter,
    title: `${SITE.name} — Agentic Commerce Platform`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={SITE.language} className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-surface font-sans">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-electric focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="main-content" className="flex flex-1 flex-col">
          {children}
        </div>
        <SiteFooter />
        <noscript>
          <div
            style={{
              padding: "1rem",
              textAlign: "center",
              background: "#FFFFFF",
              color: "#0E1A16",
            }}
          >
            Geck works without JavaScript. Explore agentic commerce at{" "}
            {SITE.url}.
          </div>
        </noscript>
      </body>
    </html>
  );
}
