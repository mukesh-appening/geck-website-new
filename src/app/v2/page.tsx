import type { Metadata } from "next";
import { VersionHome } from "@/components/version/VersionHome";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import { VERSION_HOME } from "@/lib/version-home";

const TITLE = "Geck — AI Transform & Growth Partner";
const DESCRIPTION = VERSION_HOME.body;

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/v2",
});

export default function VersionHomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/v2",
            name: TITLE,
            description: DESCRIPTION,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Version 2", path: "/v2" },
          ]),
        ]}
      />
      <VersionHome />
    </>
  );
}
