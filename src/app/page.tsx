import type { Metadata } from "next";
import { VersionHome } from "@/components/version/VersionHome";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

const INDEX_TITLE = "Geck: Turn AI to Systems & Measurable Growth";
const DESCRIPTION = SITE.description;

export const metadata: Metadata = buildMetadata({
  title: INDEX_TITLE,
  description: DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/",
            name: INDEX_TITLE,
            description: DESCRIPTION,
          }),
        ]}
      />
      <VersionHome />
    </>
  );
}
