import type { Metadata } from "next";
import {
  PageShell,
  PrimaryButton,
  SecondaryButton,
} from "@/components/layout/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const TITLE = "About Geck";
const DESCRIPTION =
  "Geck is the fullstack platform for agentic commerce—helping AI agents find, recommend, and transact with your brand.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/about",
});

const beliefs = [
  {
    title: "Discoverable by agents",
    body: "Brands win when AI systems can find, trust, and recommend them—not only when pages rank.",
  },
  {
    title: "Citation-ready facts",
    body: "Answer engines reward clear entities, extractable facts, and structured signals.",
  },
  {
    title: "Action over dashboards",
    body: "Teams need plans they can ship—content, schema, and technical improvements—not only charts.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/about",
            name: TITLE,
            description: DESCRIPTION,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <PageShell
        eyebrow="Company"
        title="Built for"
        titleAccent="Agentic Commerce"
        description={DESCRIPTION}
        actions={
          <>
            <PrimaryButton href="/contact">Request Access</PrimaryButton>
            <SecondaryButton href="/faq">Read the FAQ</SecondaryButton>
          </>
        }
      >
        <div className="mx-auto max-w-4xl">
          <section aria-labelledby="mission" className="text-center">
            <h2
              id="mission"
              className="text-[clamp(1.35rem,3vw,2rem)] font-medium tracking-tight text-[#535353]"
            >
              Mission
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed tracking-tight text-[#535353] sm:text-base md:text-lg">
              Geck exists so brands can be accurately represented when people ask
              AI systems for recommendations. We connect classic SEO foundations
              with agent-ready visibility—so discovery is measurable and
              improvable.
            </p>
          </section>

          <section
            aria-labelledby="what-we-believe"
            className="mt-14 sm:mt-16"
          >
            <h2
              id="what-we-believe"
              className="text-center text-[clamp(1.35rem,3vw,2rem)] font-medium tracking-tight text-[#535353]"
            >
              What we{" "}
              <span className="font-semibold text-electric">believe</span>
            </h2>
            <ul className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-3 sm:gap-6">
              {beliefs.map((item) => (
                <li
                  key={item.title}
                  className="rounded-[16px] border border-[#D1D1D1] bg-surface p-5 text-center sm:rounded-[20px] sm:p-6"
                >
                  <h3 className="font-serif text-xl font-extrabold tracking-tight text-electric sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed tracking-tight text-[#535353] sm:text-base">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="who-we-serve"
            className="mt-14 text-center sm:mt-16"
          >
            <h2
              id="who-we-serve"
              className="text-[clamp(1.35rem,3vw,2rem)] font-medium tracking-tight text-[#535353]"
            >
              Who we serve
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed tracking-tight text-[#535353] sm:text-base md:text-lg">
              Marketing leaders, growth teams, and brand operators who need AI
              visibility they can defend to stakeholders—across ChatGPT, Gemini,
              and agentic commerce workflows.
            </p>
          </section>
        </div>
      </PageShell>
    </>
  );
}
