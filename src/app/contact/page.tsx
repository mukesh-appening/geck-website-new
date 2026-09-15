import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

const TITLE = "Contact Geck";
const DESCRIPTION =
  "Get in touch with the Geck team for demos, support, or partnership inquiries around agentic commerce.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/contact",
            name: TITLE,
            description: DESCRIPTION,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: TITLE,
            url: `${SITE.url}/contact`,
            mainEntity: {
              "@type": "Organization",
              name: SITE.name,
              email: SITE.email,
              url: SITE.url,
            },
          },
        ]}
      />
      <ContactContent description={DESCRIPTION} />
    </>
  );
}
