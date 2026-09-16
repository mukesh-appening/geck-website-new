import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  PageShell,
  PrimaryButton,
  SecondaryButton,
} from "@/components/layout/PageShell";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const TITLE = "Typography & Brand Kit";
const DESCRIPTION =
  "Geck marketing brand kit—typefaces, type scale, colors, buttons, inputs, and surface patterns used across the site.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/typography",
});

const fonts = [
  {
    name: "Syne",
    role: "Display / brand lockups",
    sample: "GECK Agentic",
    className: "font-display text-4xl font-semibold tracking-tight sm:text-5xl",
    css: "var(--font-display)",
  },
  {
    name: "Plus Jakarta Sans",
    role: "Body / UI",
    sample: "Help AI agents find and recommend your brand",
    className: "font-sans text-2xl font-medium tracking-tight sm:text-3xl",
    css: "var(--font-sans)",
  },
  {
    name: "Nanum Myeongjo",
    role: "Accent display",
    sample: "Measurable Growth",
    className: "font-serif text-4xl font-extrabold tracking-tight text-electric sm:text-5xl",
    css: "var(--font-serif)",
  },
  {
    name: "Geist Mono",
    role: "Mono / facts",
    sample: "25% · $1T · AEO",
    className: "font-mono text-xl font-medium tracking-tight sm:text-2xl",
    css: "var(--font-mono)",
  },
] as const;

const typeScale = [
  {
    label: "H1 accent",
    detail: "clamp 3–8rem · Nanum ExtraBold",
    className:
      "font-serif text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-electric",
    sample: "Measurable Growth",
  },
  {
    label: "H2",
    detail: "2–3rem · Jakarta Medium",
    className:
      "text-[clamp(1.5rem,4vw,2.75rem)] font-medium tracking-tight text-[#535353]",
    sample: "Section title",
  },
  {
    label: "H3",
    detail: "1.75–3rem · Nanum ExtraBold",
    className:
      "font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-tight text-electric",
    sample: "Solution card title",
  },
  {
    label: "Body",
    detail: "1–1.25rem · weight 500",
    className: "text-base font-medium tracking-tight text-[#535353] sm:text-lg",
    sample:
      "Help AI agents find, recommend, and transact with your brand across ChatGPT, Gemini, and AI search.",
  },
  {
    label: "Meta",
    detail: "0.875–1rem · weight 500",
    className: "text-sm font-medium tracking-tight text-[#B7B7B7]",
    sample: "Work with · Last updated · Section chip",
  },
] as const;

const colors = [
  { name: "Deep Forest Ink", hex: "#0E1A16", token: "--ink", swatch: "bg-ink" },
  { name: "Soft Canopy", hex: "#24332C", token: "--ink-soft", swatch: "bg-ink-soft" },
  { name: "Pure Panel", hex: "#FFFFFF", token: "--surface", swatch: "bg-surface border border-[#D1D1D1]" },
  { name: "Electric Signal", hex: "#344FFE", token: "--electric", swatch: "bg-electric" },
  { name: "Electric Deep", hex: "#2A3FD6", token: "--electric-hover", swatch: "bg-electric-hover" },
  { name: "Spark Orange", hex: "#FE7743", token: "--spark", swatch: "bg-spark" },
  { name: "Forest Accent", hex: "#1A6B4A", token: "--forest", swatch: "bg-forest" },
  { name: "Neutral Mid", hex: "#535353", token: "marketing grey", swatch: "bg-[#535353]" },
  { name: "Neutral Soft", hex: "#B7B7B7", token: "muted labels", swatch: "bg-[#B7B7B7]" },
  { name: "Muted Fern", hex: "#5C6B63", token: "--muted", swatch: "bg-muted" },
  { name: "Dim Leaf", hex: "#8A968F", token: "--dim", swatch: "bg-dim" },
  { name: "Border Moss", hex: "#D9DFD8", token: "--border", swatch: "bg-border" },
  { name: "Danger Clay", hex: "#C44040", token: "--danger", swatch: "bg-danger" },
  { name: "Warn Amber", hex: "#B86E12", token: "--warn", swatch: "bg-warn" },
] as const;

function KitPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[16px] border border-[#D1D1D1] bg-surface p-5 sm:rounded-[20px] sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="text-[clamp(1.35rem,3vw,2rem)] font-medium tracking-tight text-[#535353]"
    >
      {children}
    </h2>
  );
}

export default function TypographyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/typography",
            name: TITLE,
            description: DESCRIPTION,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Typography", path: "/typography" },
          ]),
        ]}
      />
      <PageShell
        eyebrow="Design system"
        title="Typography &"
        titleAccent="Brand Kit"
        description={DESCRIPTION}
        actions={
          <>
            <PrimaryButton href="/contact">Request Access</PrimaryButton>
            <SecondaryButton href="/">Back home</SecondaryButton>
          </>
        }
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-14 sm:gap-16">
          <section aria-labelledby="typefaces">
            <SectionTitle id="typefaces">
              Typefaces
            </SectionTitle>
            <p className="mt-3 max-w-2xl text-sm font-medium tracking-tight text-[#B7B7B7] sm:text-base">
              Self-hosted via Fontsource. Four roles cover lockups, UI, accent
              display, and mono facts.
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {fonts.map((font) => (
                <li key={font.name}>
                  <KitPanel>
                    <p className="text-xs font-medium uppercase tracking-wide text-[#B7B7B7]">
                      {font.role}
                    </p>
                    <p className="mt-1 text-sm font-medium tracking-tight text-[#535353]">
                      {font.name}{" "}
                      <span className="font-mono text-xs text-[#A7A7A7]">
                        {font.css}
                      </span>
                    </p>
                    <p className={`mt-5 ${font.className}`}>{font.sample}</p>
                  </KitPanel>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="type-scale">
            <SectionTitle id="type-scale">
              Type <span className="font-semibold text-electric">scale</span>
            </SectionTitle>
            <p className="mt-3 max-w-2xl text-sm font-medium tracking-tight text-[#B7B7B7] sm:text-base">
              Display tracking is slightly tight (−0.02em). Never skip heading
              levels.
            </p>
            <ul className="mt-8 space-y-4">
              {typeScale.map((item) => (
                <li key={item.label}>
                  <KitPanel>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold tracking-tight text-[#535353]">
                        {item.label}
                      </p>
                      <p className="font-mono text-xs text-[#A7A7A7]">
                        {item.detail}
                      </p>
                    </div>
                    <p className={`mt-4 ${item.className}`}>{item.sample}</p>
                  </KitPanel>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="colors">
            <SectionTitle id="colors">Colors</SectionTitle>
            <p className="mt-3 max-w-2xl text-sm font-medium tracking-tight text-[#B7B7B7] sm:text-base">
              Tokens live in <span className="font-mono text-[#535353]">globals.css</span>{" "}
              and mirror <span className="font-mono text-[#535353]">DESIGN.md</span>.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
              {colors.map((color) => (
                <li
                  key={color.hex + color.name}
                  className="overflow-hidden rounded-[16px] border border-[#D1D1D1] sm:rounded-[20px]"
                >
                  <div className={`h-16 sm:h-20 ${color.swatch}`} />
                  <div className="bg-surface p-3 sm:p-4">
                    <p className="text-sm font-medium tracking-tight text-[#535353]">
                      {color.name}
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-[#A7A7A7]">
                      {color.hex}
                    </p>
                    <p className="mt-1 font-mono text-[0.65rem] text-[#B7B7B7]">
                      {color.token}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="buttons">
            <SectionTitle id="buttons">
              Buttons &amp;{" "}
              <span className="font-semibold text-electric">actions</span>
            </SectionTitle>
            <p className="mt-3 max-w-2xl text-sm font-medium tracking-tight text-[#B7B7B7] sm:text-base">
              Marketing CTAs are pills. Utility controls on interior forms use
              10px radius. Ghost links stay editorial.
            </p>
            <KitPanel className="mt-8">
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryButton href="/contact">Primary pill</PrimaryButton>
                <SecondaryButton href="/about">Secondary pill</SecondaryButton>
                <a
                  href="#buttons"
                  className="text-sm font-medium tracking-tight text-[#535353] underline decoration-transparent underline-offset-4 transition-colors duration-[var(--ease)] hover:text-electric hover:decoration-electric"
                >
                  Ghost link
                </a>
                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-[10px] bg-electric px-5 text-sm font-medium tracking-tight text-white transition-colors duration-[var(--ease)] hover:bg-electric-hover sm:h-12"
                >
                  Utility 10px
                </button>
                <button
                  type="button"
                  aria-label="Icon submit demo"
                  className="flex size-12 items-center justify-center rounded-full bg-electric text-white transition-colors duration-[var(--ease)] hover:bg-electric-hover sm:size-14"
                >
                  <span className="block h-2 w-6 rounded-full bg-white" aria-hidden />
                </button>
              </div>
              <dl className="mt-8 grid gap-3 border-t border-[#E8E8E8] pt-6 text-sm font-medium tracking-tight text-[#535353] sm:grid-cols-2">
                <div>
                  <dt className="text-[#B7B7B7]">Primary</dt>
                  <dd className="mt-1 font-mono text-xs text-[#535353]">
                    bg-electric · text-white · rounded-full · hover electric-deep
                  </dd>
                </div>
                <div>
                  <dt className="text-[#B7B7B7]">Secondary</dt>
                  <dd className="mt-1 font-mono text-xs text-[#535353]">
                    border #A7A7A7 · text #535353 · hover electric border
                  </dd>
                </div>
                <div>
                  <dt className="text-[#B7B7B7]">Icon submit</dt>
                  <dd className="mt-1 font-mono text-xs text-[#535353]">
                    circular electric · white bar glyph
                  </dd>
                </div>
                <div>
                  <dt className="text-[#B7B7B7]">Ease</dt>
                  <dd className="mt-1 font-mono text-xs text-[#535353]">
                    180ms cubic-bezier(0.22, 1, 0.36, 1)
                  </dd>
                </div>
              </dl>
            </KitPanel>
          </section>

          <section aria-labelledby="inputs">
            <SectionTitle id="inputs">Inputs</SectionTitle>
            <p className="mt-3 max-w-2xl text-sm font-medium tracking-tight text-[#B7B7B7] sm:text-base">
              Hero field is a full pill with hard shadow. Interior forms keep
              the 10px radius.
            </p>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <KitPanel>
                <p className="text-xs font-medium uppercase tracking-wide text-[#B7B7B7]">
                  Hero brand field
                </p>
                <div className="relative mt-4">
                  <input
                    readOnly
                    aria-label="Hero input demo"
                    placeholder="Enter your Brand. Get instant insights"
                    className="h-14 w-full rounded-full border border-[#C8C8C8] bg-surface pl-5 pr-16 text-sm font-medium tracking-tight text-[#535353] shadow-[0px_4px_0px_0px_rgba(0,0,0,0.08)] outline-none placeholder:text-[#A7A7A7] sm:h-16 sm:pl-7 sm:pr-20 sm:text-base"
                  />
                  <span
                    aria-hidden
                    className="absolute right-1.5 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-electric sm:size-12"
                  >
                    <span className="block h-1.5 w-5 rounded-full bg-white" />
                  </span>
                </div>
              </KitPanel>
              <KitPanel>
                <p className="text-xs font-medium uppercase tracking-wide text-[#B7B7B7]">
                  Interior form field
                </p>
                <label className="mt-4 grid gap-2 text-sm font-medium tracking-tight text-[#535353]">
                  Email
                  <input
                    readOnly
                    aria-label="Interior input demo"
                    placeholder="you@brand.com"
                    className="h-12 rounded-[10px] border border-[#C8C8C8] bg-surface px-5 text-sm font-medium tracking-tight text-[#535353] outline-none placeholder:text-[#A7A7A7] focus:border-electric focus:shadow-[0_0_0_3px_rgba(52,79,254,0.12)] sm:text-base"
                  />
                </label>
              </KitPanel>
            </div>
          </section>

          <section aria-labelledby="surfaces">
            <SectionTitle id="surfaces">
              Surfaces &amp;{" "}
              <span className="font-semibold text-electric">chips</span>
            </SectionTitle>
            <p className="mt-3 max-w-2xl text-sm font-medium tracking-tight text-[#B7B7B7] sm:text-base">
              No cards in the hero. Interactive or carousel units may use Pure
              Panel panels with light borders and optional hard shadows.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <KitPanel className="text-center shadow-[0px_8px_0px_0px_rgba(0,0,0,0.08)]">
                <p className="font-serif text-4xl font-extrabold tracking-tight text-electric">
                  25%
                </p>
                <p className="mt-2 text-sm font-medium tracking-tight text-[#535353]">
                  Stat card · hard shadow
                </p>
              </KitPanel>
              <KitPanel className="border-electric bg-[rgba(0,111,253,0.04)] text-center shadow-[0px_10px_0px_0px_rgba(0,0,0,0.08)]">
                <p className="font-serif text-4xl font-extrabold tracking-tight text-electric">
                  $1T
                </p>
                <p className="mt-2 text-sm font-medium tracking-tight text-[#535353]">
                  Emphasized · electric wash
                </p>
              </KitPanel>
              <div className="flex flex-col items-center justify-center gap-4 rounded-[16px] border border-dashed border-[#D1D1D1] p-5 sm:rounded-[20px] sm:p-8">
                <SectionEyebrow>Section chip</SectionEyebrow>
                <span className="relative -top-1 inline-flex -rotate-[3deg] items-center gap-2 rounded-full border border-[#ACACAC] bg-surface px-4 py-2 text-sm font-semibold tracking-tight text-[#535353] shadow-[-2px_4px_0px_0px_rgba(0,0,0,0.08)]">
                  <span className="size-1.5 rounded-full bg-spark" aria-hidden />
                  AI
                  <svg
                    viewBox="0 0 28 12"
                    className="h-2.5 w-5 text-spark"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M1 6h22M17 1.5 25.5 6 17 10.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Systems
                </span>
              </div>
            </div>
          </section>

          <section aria-labelledby="rules">
            <SectionTitle id="rules">Design rules</SectionTitle>
            <KitPanel className="mt-8">
              <ul className="space-y-3 text-sm font-medium leading-relaxed tracking-tight text-[#535353] sm:text-base">
                <li>
                  One composition in the first viewport: brand, headline,
                  support line, CTA, atmosphere.
                </li>
                <li>
                  One job per section — one H2, one short support line, then
                  content.
                </li>
                <li>
                  Prefer citation-ready facts in SSR HTML; keep critical copy
                  extractable without JavaScript.
                </li>
                <li>
                  Change visuals in <span className="font-mono text-xs">DESIGN.md</span>{" "}
                  and mirror tokens in{" "}
                  <span className="font-mono text-xs">globals.css</span> together.
                </li>
              </ul>
            </KitPanel>
          </section>
        </div>
      </PageShell>
    </>
  );
}
