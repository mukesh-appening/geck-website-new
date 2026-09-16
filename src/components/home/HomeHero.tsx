"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroRings } from "@/components/home/HeroRings";
import { PageRail } from "@/components/layout/PageRail";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/layout/PageShell";
import { FadeWords } from "@/components/motion/FadeWords";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
} from "@/components/motion/variants";
import { HOME } from "@/lib/home";

type HomeHeroProps = {
  /** Override heading id when reused (e.g. classic `/v1`). */
  headingId?: string;
  testId?: string;
};

/**
 * Package hero: eyebrow + headline + support + CTA pair.
 * Rings atmosphere; no brand input, microcopy, or partner strip.
 */
export function HomeHero({
  headingId = "hero-heading",
  testId = "home-hero",
}: HomeHeroProps = {}) {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative -mt-14 flex flex-col overflow-x-hidden bg-surface pt-14 sm:-mt-16 sm:h-dvh sm:max-h-dvh sm:pt-16"
      aria-labelledby={headingId}
      data-testid={testId}
    >
      <HeroRings />

      <PageRail className="relative z-10 flex flex-col items-center justify-center gap-8 py-16 sm:min-h-0 sm:flex-1 sm:gap-10 sm:py-8 md:gap-12">
        <p className="sr-only">Geck</p>

        <motion.div
          className="flex w-full flex-col items-center px-1 text-center sm:px-0"
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? false : "hidden"}
          animate="visible"
        >
          <motion.div variants={reduce ? undefined : staggerItem}>
            <SectionEyebrow>{HOME.eyebrow}</SectionEyebrow>
          </motion.div>

          <h1
            id={headingId}
            className="mt-7 flex w-full max-w-5xl flex-col items-center sm:mt-9"
          >
            <motion.span
              className="whitespace-nowrap text-center font-sans text-[clamp(1.35rem,4.2vw,3.25rem)] font-medium capitalize leading-[1.1] tracking-[-0.02em] text-[#535353]"
              variants={reduce ? undefined : staggerItem}
            >
              Turn <span className="normal-case">AI</span> into working systems
            </motion.span>

            <motion.span
              className="mt-2 flex flex-wrap items-baseline justify-center gap-x-[0.35em] whitespace-nowrap font-serif text-[clamp(1.9rem,5.6vw,4rem)] font-extrabold leading-[1.1] tracking-[-0.02em] sm:mt-3"
              variants={reduce ? undefined : staggerItem}
            >
              <span className="text-electric">{HOME.headlineAnd}</span>
              <FadeWords
                as="span"
                text={HOME.headlineGrowth}
                delay={0.16}
                className="text-electric"
              />
            </motion.span>
          </h1>

          <motion.p
            className="mt-6 max-w-xl px-2 text-[0.8125rem] font-medium leading-relaxed tracking-tight text-[#B7B7B7] sm:mt-7 sm:max-w-2xl sm:px-0 sm:text-lg sm:leading-snug md:text-xl"
            variants={reduce ? undefined : fadeUp}
          >
            {HOME.support}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <PrimaryButton href={HOME.primaryCta.href}>
            {HOME.primaryCta.label}
          </PrimaryButton>
          <SecondaryButton href={HOME.secondaryCta.href}>
            {HOME.secondaryCta.label}
          </SecondaryButton>
        </motion.div>
      </PageRail>
    </section>
  );
}
