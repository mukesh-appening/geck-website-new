"use client";

import type { ReactNode } from "react";
import { HeroRings } from "@/components/home/HeroRings";
import { PageRail } from "@/components/layout/PageRail";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { FadeWords } from "@/components/motion/FadeWords";
import { MotionLink } from "@/components/motion/MotionLink";
import { Reveal } from "@/components/motion/Reveal";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  titleId?: string;
  /** Optional electric-accented phrase after the title (home-style). */
  titleAccent?: string;
  description: string;
  children: ReactNode;
  actions?: ReactNode;
};

/**
 * Interior marketing pages — matched to home: PageRail, chip eyebrow,
 * soft rings under transparent header, electric accents, generous rhythm.
 */
export function PageShell({
  eyebrow,
  title,
  titleId = "page-title",
  titleAccent,
  description,
  children,
  actions,
}: PageShellProps) {
  return (
    <main
      className="relative -mt-14 min-w-0 flex-1 overflow-x-hidden bg-surface pt-14 sm:-mt-16 sm:pt-16"
      data-testid="page-shell"
    >
      <HeroRings />

      <PageRail className="relative z-10 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
        <Reveal>
          <header className="mx-auto max-w-3xl text-center sm:max-w-4xl">
            {eyebrow ? <SectionEyebrow>{eyebrow}</SectionEyebrow> : null}
            <div className={eyebrow ? "mt-4 sm:mt-5" : undefined}>
              {titleAccent ? (
                <h1
                  id={titleId}
                  className="text-[clamp(1.75rem,5vw,3rem)] font-medium leading-tight tracking-tight text-[#535353]"
                >
                  {title}{" "}
                  <span className="font-semibold text-electric">{titleAccent}</span>
                </h1>
              ) : (
                <FadeWords
                  as="h1"
                  id={titleId}
                  text={title}
                  className="font-serif text-[clamp(2rem,5.5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-electric"
                />
              )}
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-snug tracking-tight text-[#B7B7B7] sm:mt-5 sm:text-base md:text-lg">
              {description}
            </p>
            {actions ? (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
                {actions}
              </div>
            ) : null}
          </header>
        </Reveal>

        <Reveal delay={0.08} className="relative z-10 mt-12 sm:mt-16">
          {children}
        </Reveal>
      </PageRail>
    </main>
  );
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <MotionLink
      href={href}
      variant="pill"
      className="inline-flex h-11 items-center justify-center rounded-full bg-electric px-6 text-sm font-medium tracking-tight text-white transition-colors duration-[var(--ease)] hover:bg-electric-hover sm:h-12"
    >
      {children}
    </MotionLink>
  );
}

export function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <MotionLink
      href={href}
      variant="secondary"
      className="inline-flex h-11 items-center justify-center rounded-full border border-[#A7A7A7] bg-surface px-6 text-sm font-medium tracking-tight text-[#535353] transition-colors duration-[var(--ease)] hover:border-electric hover:text-electric sm:h-12"
    >
      {children}
    </MotionLink>
  );
}
