import type { ReactNode } from "react";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/layout/PageShell";
import { PageRail } from "@/components/layout/PageRail";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { HomeHero } from "@/components/home/HomeHero";
import { MotionLink } from "@/components/motion/MotionLink";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { HoverCard } from "@/components/version/HoverCard";
import { ProductsCarousel } from "@/components/version/ProductsCarousel";
import {
  SectionOrbits,
} from "@/components/version/VersionArt";
import { VERSION_HOME as C } from "@/lib/version-home";

function SectionHeading({
  id,
  children,
  className = "",
  tone = "light",
}: {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <h2
      id={id}
      className={`text-[1.35rem] font-medium leading-snug tracking-tight sm:text-[clamp(1.65rem,4vw,3rem)] sm:leading-[1.15] ${
        tone === "dark" ? "text-white" : "text-[#535353]"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

function ModeGlyph({ kind }: { kind: "use" | "do" | "build" }) {
  if (kind === "use") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="5" width="22" height="16" rx="3" stroke="#344FFE" strokeWidth="1.5" />
        <path d="M8 21.5h12" stroke="#344FFE" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="13" r="2.5" fill="#FE7743" />
      </svg>
    );
  }
  if (kind === "do") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="3" stroke="#344FFE" strokeWidth="1.5" />
        <circle cx="18" cy="10" r="3" stroke="#344FFE" strokeWidth="1.5" />
        <path
          d="M5 21c1.2-3 3.4-4.5 5-4.5s3.8 1.5 5 4.5"
          stroke="#344FFE"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M13 21c1.2-3 3.4-4.5 5-4.5s3.8 1.5 5 4.5"
          stroke="#344FFE"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="4" y="4" width="9" height="9" rx="2" fill="#344FFE" />
      <rect x="15" y="4" width="9" height="9" rx="2" stroke="#344FFE" strokeWidth="1.5" />
      <rect x="4" y="15" width="9" height="9" rx="2" stroke="#344FFE" strokeWidth="1.5" />
      <rect x="15" y="15" width="9" height="9" rx="2" fill="#FE7743" />
    </svg>
  );
}

/**
 * Current homepage body — scroll fades, transform hovers, product art.
 * Mounted at `/`; classic layout lives at `/v1`.
 */
export function VersionHome() {
  const modeGlyph = ["use", "do", "build"] as const;

  return (
    <main
      className="min-w-0 overflow-x-hidden bg-surface text-ink"
      data-testid="version-home"
    >
      {/* Hero — shared HomeHero composition */}
      <HomeHero />

      {/* Three ways to engage */}
      <section
        id="engage"
        className="relative overflow-hidden border-y border-[#EDEDED] bg-surface"
        aria-labelledby="engage-heading"
      >
        <SectionOrbits />
        <PageRail className="relative z-10 py-16 sm:py-20 lg:py-24">
          <Reveal variant="fadeUpSoft" className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Engage</SectionEyebrow>
            <SectionHeading id="engage-heading" className="mt-5">
              One operating model.{" "}
              <span className="font-semibold text-electric">
                Three ways to plug in.
              </span>
            </SectionHeading>
          </Reveal>

          <Stagger
            className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-3 sm:gap-6 lg:gap-8"
            slow={false}
          >
            {C.engage.modes.map((mode, index) => (
                <StaggerItem key={mode.id} as="li" className="list-none">
                  <HoverCard className="h-full">
                    <article className="group flex h-full flex-col rounded-[20px] border border-[#D1D1D1] bg-surface p-6 shadow-[0_10px_0_0_transparent] transition-[border-color,background-color,box-shadow] duration-[var(--ease)] hover:border-electric hover:bg-[rgba(0,111,253,0.04)] hover:shadow-[0_10px_0_0_rgba(0,0,0,0.08)] sm:p-7 lg:p-8">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex size-12 items-center justify-center rounded-[14px] border border-[#E3E3E3] bg-white transition-transform duration-[var(--ease)] group-hover:scale-105">
                          <ModeGlyph kind={modeGlyph[index]} />
                        </div>
                        <span className="font-mono text-xs font-medium tracking-tight text-[#B7B7B7]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-5 text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[#B7B7B7]">
                        {mode.subtitle}
                      </p>
                      <h3 className="mt-2 font-serif text-[1.35rem] font-extrabold leading-snug tracking-tight text-electric sm:text-[1.65rem]">
                        {mode.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm font-medium leading-relaxed tracking-tight text-[#8A8A8A] sm:text-[0.9375rem]">
                        {mode.lead ? (
                          <>
                            <span className="text-[#535353]">{mode.lead}</span>{" "}
                            {mode.body}
                          </>
                        ) : (
                          mode.body
                        )}
                      </p>
                      <div className="mt-8">
                        <MotionLink
                          href={mode.cta.href}
                          variant="secondary"
                          className="inline-flex h-11 items-center justify-center rounded-full border border-[#A7A7A7] bg-surface px-6 text-sm font-medium tracking-tight text-[#535353] transition-[background-color,border-color,color] duration-[var(--ease)] group-hover:border-electric group-hover:bg-electric group-hover:text-white sm:h-12"
                        >
                          {mode.cta.label}
                        </MotionLink>
                      </div>
                    </article>
                  </HoverCard>
                </StaggerItem>
              ))}
          </Stagger>
        </PageRail>
      </section>

      {/* Solutions by outcome */}
      <section
        id="solutions"
        className="relative overflow-hidden bg-surface"
        aria-labelledby="solutions-heading"
      >
        <PageRail className="relative z-10 py-16 sm:py-20 lg:py-24">
          <Reveal variant="fadeUpSoft" className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Solutions</SectionEyebrow>
            <SectionHeading id="solutions-heading" className="mt-5">
              What problem are we{" "}
              <span className="font-semibold text-electric">solving next?</span>
            </SectionHeading>
          </Reveal>

          <Stagger
            className="mx-auto mt-12 flex max-w-4xl flex-col gap-4 sm:mt-16 sm:gap-5"
            slow={false}
          >
            {C.solutions.items.map((item, index) => (
              <StaggerItem key={item.id} as="li" className="list-none">
                <HoverCard>
                  <article className="group flex items-start gap-5 rounded-[20px] border border-[#E8E8E8] bg-white px-5 py-7 shadow-[0_8px_0_0_transparent] transition-[border-color,background-color,box-shadow] duration-[var(--ease)] hover:border-electric hover:bg-[rgba(0,111,253,0.03)] hover:shadow-[0_8px_0_0_rgba(0,0,0,0.06)] sm:gap-10 sm:px-7 sm:py-9 md:gap-14">
                    <p
                      className="shrink-0 font-serif text-[clamp(2.75rem,7vw,4.75rem)] font-extrabold leading-none tracking-[-0.04em] text-electric tabular-nums"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div className="min-w-0 flex-1 pt-1 sm:pt-2">
                      <h3 className="font-serif text-[1.35rem] font-extrabold tracking-tight text-[#535353] transition-colors duration-[var(--ease)] group-hover:text-electric sm:text-[1.85rem]">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed tracking-tight text-[#8A8A8A] sm:mt-3 sm:text-base">
                        {item.body}
                      </p>
                    </div>
                  </article>
                </HoverCard>
              </StaggerItem>
            ))}
          </Stagger>
        </PageRail>
      </section>

      {/* Products */}
      <section
        id="products"
        className="relative overflow-x-clip border-y border-[#EDEDED] bg-[#FAFAFA]"
        aria-labelledby="products-heading"
      >
        <SectionOrbits />
        <PageRail className="relative z-10 py-16 sm:py-20 lg:py-24">
          <Reveal variant="fadeUpSoft" className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>{C.products.eyebrow}</SectionEyebrow>
            <SectionHeading id="products-heading" className="mt-5">
              Software built from{" "}
              <span className="font-semibold text-electric">
                real world execution.
              </span>
            </SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed tracking-tight text-[#B7B7B7] sm:text-base md:text-lg">
              {C.products.support}
            </p>
          </Reveal>

          <ProductsCarousel />
        </PageRail>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#1A1A1E] text-white"
        aria-labelledby="services-heading"
      >
        <PageRail className="relative z-10 py-16 sm:py-20 lg:py-24">
          <Reveal variant="fadeUpSoft" className="mx-auto max-w-3xl text-center">
            <SectionEyebrow tone="dark">Services</SectionEyebrow>
            <SectionHeading id="services-heading" tone="dark" className="mt-5">
              Strategy that{" "}
              <span className="font-semibold text-electric">actually ships.</span>
            </SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed tracking-tight text-[#B7B7B7] sm:text-base md:text-lg">
              {C.services.support}
            </p>
          </Reveal>

          <Stagger
            className="mx-auto mt-12 grid max-w-5xl gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5"
            slow={false}
          >
            {C.services.items.map((item, index) => (
              <StaggerItem key={item.title} as="li" className="list-none">
                <HoverCard className="h-full">
                  <article className="group h-full rounded-[20px] border border-white/10 bg-white/[0.03] p-6 transition-[border-color,background-color] duration-[var(--ease)] hover:border-electric/50 hover:bg-white/[0.06] sm:p-7">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-medium tracking-tight text-electric">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-white/10 transition-colors duration-[var(--ease)] group-hover:bg-electric/30" aria-hidden />
                    </div>
                    <h3 className="mt-4 text-base font-semibold tracking-tight text-white sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed tracking-tight text-[#A4A4A4]">
                      {item.body}
                    </p>
                  </article>
                </HoverCard>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal variant="fadeUpSoft" delay={0.12} className="mt-12 flex justify-center">
            <PrimaryButton href={C.services.cta.href}>
              {C.services.cta.label}
            </PrimaryButton>
          </Reveal>
        </PageRail>
      </section>

      {/* The Geck Loop */}
      <section
        id="loop"
        className="relative overflow-hidden border-y border-[#EDEDED] bg-surface"
        aria-labelledby="loop-heading"
      >
        <SectionOrbits />
        <PageRail className="relative z-10 py-16 sm:py-20 lg:py-24">
          <Reveal variant="fadeUpSoft" className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>How we work</SectionEyebrow>
            <SectionHeading
              id="loop-heading"
              className="mt-5 flex flex-col items-center gap-1 sm:gap-1.5"
            >
              <span>Built to Adapt:</span>
              <span className="font-semibold text-electric">
                The 5D Framework
              </span>
            </SectionHeading>
          </Reveal>

          <div className="relative mt-12 sm:mt-16">
            <div
              aria-hidden
              className="pointer-events-none absolute left-[10%] right-[10%] top-5 hidden h-px bg-[#E3E3E3] sm:block lg:top-6"
            />
            <Stagger className="grid gap-8 sm:grid-cols-5 sm:gap-4 lg:gap-6" slow={false}>
              {C.loop.steps.map((step, index) => (
                <StaggerItem key={step.title} as="li" className="relative z-10 list-none text-center">
                  <HoverCard>
                    <div className="rounded-[16px] bg-surface px-1 py-2">
                      <div className="relative z-10 mx-auto flex size-10 items-center justify-center rounded-full border border-[#D1D1D1] bg-white font-mono text-xs font-medium text-electric shadow-[0_4px_0_0_rgba(0,0,0,0.06)] transition-[border-color,box-shadow] duration-[var(--ease)] sm:size-12 sm:text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-4 text-base font-semibold tracking-tight text-[#535353] sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed tracking-tight text-[#8A8A8A]">
                        {step.body}
                      </p>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </PageRail>
      </section>

      {/* Closing CTA */}
      <section
        id="talk"
        className="relative overflow-x-clip bg-surface"
        aria-labelledby="closing-heading"
      >
        <PageRail className="relative z-10 py-20 pb-24 sm:py-24 sm:pb-28 lg:py-28 lg:pb-32">
          <Reveal variant="fadeScale">
            <HoverCard featured>
              <div className="group relative mx-auto max-w-4xl overflow-hidden rounded-[24px] border border-[#D1D1D1] bg-white px-6 py-14 text-center shadow-none transition-[border-color,box-shadow] duration-[var(--ease)] hover:border-electric hover:shadow-[0_14px_0_0_rgba(0,0,0,0.07)] sm:px-12 sm:py-16 lg:rounded-[28px] lg:py-20">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-16 -top-16 size-56 rounded-full border border-[#ECECEC] bg-white shadow-[0_10px_0_0_rgba(175,175,175,0.08)]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full border border-[#ECECEC] bg-white shadow-[0_10px_0_0_rgba(175,175,175,0.08)]"
                />
                <div className="relative z-10">
                  <h2
                    id="closing-heading"
                    className="font-serif text-[1.75rem] font-extrabold leading-tight tracking-tight text-electric sm:text-[clamp(2.25rem,4.5vw,3.25rem)]"
                  >
                    {C.closing.headline}
                  </h2>
                  <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed tracking-tight text-[#8A8A8A] sm:mt-6 sm:text-lg">
                    {C.closing.body}
                  </p>
                  <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:mt-11">
                    <PrimaryButton href={C.closing.primaryCta.href}>
                      {C.closing.primaryCta.label}
                    </PrimaryButton>
                    <SecondaryButton href={C.closing.secondaryCta.href}>
                      {C.closing.secondaryCta.label}
                    </SecondaryButton>
                  </div>
                </div>
              </div>
            </HoverCard>
          </Reveal>
        </PageRail>
      </section>
    </main>
  );
}
