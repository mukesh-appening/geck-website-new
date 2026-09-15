import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

const TITLE = "Privacy Policy";
const DESCRIPTION =
  "How Geck collects, uses, and protects personal information on geck.ai.";
const DATE_MODIFIED = "2026-09-15";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/privacy",
  modifiedTime: DATE_MODIFIED,
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/privacy",
            name: TITLE,
            description: DESCRIPTION,
            dateModified: DATE_MODIFIED,
            datePublished: DATE_MODIFIED,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Privacy", path: "/privacy" },
          ]),
        ]}
      />
      <PageShell
        eyebrow="Legal"
        title="Privacy"
        titleAccent="Policy"
        description={DESCRIPTION}
      >
        <article className="prose-geck mx-auto max-w-3xl rounded-[16px] border border-[#D1D1D1] bg-surface p-6 sm:rounded-[20px] sm:p-10">
          <p className="!text-[#B7B7B7]">
            <strong className="font-medium text-[#535353]">Last updated:</strong>{" "}
            <time dateTime={DATE_MODIFIED}>{DATE_MODIFIED}</time>
          </p>
          <h2 id="overview">Overview</h2>
          <p>
            {SITE.name} (“we”, “us”) respects your privacy. This policy explains
            what information we collect on {SITE.url}, how we use it, and the
            choices available to you.
          </p>
          <h2 id="information-we-collect">Information we collect</h2>
          <ul>
            <li>Contact details you submit (name, email, message content).</li>
            <li>Basic technical logs needed to operate and secure the site.</li>
            <li>
              Optional analytics signals if enabled in a given environment.
            </li>
          </ul>
          <h2 id="how-we-use-information">How we use information</h2>
          <ul>
            <li>Respond to demos, support, and partnership requests.</li>
            <li>Operate, maintain, and improve the marketing site.</li>
            <li>Comply with legal obligations where applicable.</li>
          </ul>
          <h2 id="contact">Contact</h2>
          <p>
            Privacy questions:{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </article>
      </PageShell>
    </>
  );
}
