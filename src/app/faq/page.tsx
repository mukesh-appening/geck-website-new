import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItems } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

const TITLE = "FAQ — Geck AEO & SEO";
const DESCRIPTION =
  "Answers to common questions about agentic commerce, Answer Engine Optimization, and how Geck helps brands get discovered by AI.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/faq",
            name: TITLE,
            description: DESCRIPTION,
          }),
          faqJsonLd(
            faqItems.map((f) => ({ question: f.question, answer: f.answer })),
          ),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <PageShell
        eyebrow="Knowledge base"
        title="Questions,"
        titleAccent="Answered"
        description={DESCRIPTION}
      >
        <Stagger
          className="mx-auto grid max-w-3xl gap-4 sm:gap-5"
          data-testid="faq-list"
          fast
        >
          {faqItems.map((faq, index) => {
            const id = `faq-${index + 1}`;
            return (
              <StaggerItem key={faq.question} as="article">
                <div
                  id={id}
                  className="scroll-mt-28 rounded-[16px] border border-[#D1D1D1] bg-surface p-5 sm:rounded-[20px] sm:p-7"
                >
                  <h2 className="text-base font-semibold tracking-tight text-[#535353] sm:text-lg">
                    {faq.question}
                  </h2>
                  <p className="mt-3 text-sm font-medium leading-relaxed tracking-tight text-[#A4A4A4] sm:text-base">
                    {faq.answer}
                  </p>
                  <p className="mt-4">
                    <a
                      href={`#${id}`}
                      className="text-xs font-medium text-[#B7B7B7] transition-colors hover:text-electric"
                    >
                      #{id}
                    </a>
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </PageShell>
    </>
  );
}
