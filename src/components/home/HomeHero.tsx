"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BrandInsightForm } from "@/components/home/BrandInsightForm";
import { HeroRings } from "@/components/home/HeroRings";
import { PageRail } from "@/components/layout/PageRail";
import { FadeWords } from "@/components/motion/FadeWords";
import {
  fadeUp,
  springSoft,
  staggerContainer,
  staggerItem,
} from "@/components/motion/variants";
import { HOME } from "@/lib/home";

const partners = [
  {
    name: "OpenAI",
    mark: "/partners/openai-mark.svg",
    label: "OpenAI",
    markW: 28,
    markH: 28,
  },
  {
    name: "Claude",
    mark: "/partners/claude-mark.png",
    label: "Claude",
    markW: 30,
    markH: 29,
  },
  {
    name: "Perplexity",
    mark: "/partners/perplexity-mark.svg",
    label: "perplexity",
    markW: 28,
    markH: 32,
  },
  {
    name: "Gemini",
    mark: "/partners/gemini-mark.png",
    label: "Gemini",
    markW: 36,
    markH: 34,
  },
  {
    name: "Copilot",
    mark: "/partners/copilot-icon.png",
    label: "Copilot",
    markW: 42,
    markH: 38,
  },
] as const;

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative -mt-14 overflow-hidden bg-surface pt-14 sm:-mt-16 sm:pt-16"
      aria-labelledby="hero-heading"
      data-testid="home-hero"
    >
      <HeroRings />

      <PageRail className="relative z-10 flex flex-col items-center pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
        <p className="sr-only">Geck</p>
        <motion.div
          className="flex w-full flex-col items-center text-center"
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? false : "hidden"}
          animate="visible"
        >
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:gap-x-3 sm:gap-y-3"
            variants={reduce ? undefined : staggerItem}
          >
            <span className="text-[clamp(1.75rem,5.5vw,3.75rem)] font-semibold capitalize leading-[1.1] tracking-tight text-[#535353]">
              {HOME.headlineLead}
            </span>
            <motion.span
              className="inline-flex -rotate-[3deg] items-center gap-2 rounded-full border border-[#ACACAC] bg-surface px-3 py-1.5 shadow-[-2px_4px_0px_0px_rgba(0,0,0,0.08)] sm:gap-3 sm:px-4 sm:py-2.5 md:px-5 md:py-3"
              whileHover={reduce ? undefined : { rotate: -1.5, scale: 1.03 }}
              transition={springSoft}
            >
              <span
                className="size-1.5 rounded-full bg-spark sm:size-2"
                aria-hidden
              />
              <span className="text-[clamp(1rem,3.2vw,2rem)] font-semibold tracking-tight text-[#535353]">
                {HOME.headlinePill}
              </span>
              <span
                className="size-1.5 rounded-full bg-spark sm:size-2"
                aria-hidden
              />
            </motion.span>
            <span className="text-[clamp(1.75rem,5.5vw,3.75rem)] font-semibold capitalize leading-[1.1] tracking-tight text-[#535353]">
              {HOME.headlineMid}
            </span>
          </motion.div>

          <FadeWords
            as="h1"
            id="hero-heading"
            text={HOME.headlineAccent}
            delay={0.12}
            className="mt-2 max-w-full font-serif text-[clamp(2.25rem,8vw,5rem)] font-extrabold capitalize leading-[1.05] tracking-tight text-electric sm:mt-3"
          />

          <motion.p
            className="mt-3 max-w-xl text-sm font-medium leading-snug tracking-tight text-[#B7B7B7] sm:mt-5 sm:text-base md:text-lg"
            variants={reduce ? undefined : fadeUp}
          >
            {HOME.support}
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-8 w-full sm:mt-10 md:mt-12"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <BrandInsightForm />
        </motion.div>

        <motion.div
          className="mt-10 flex w-full flex-col items-center sm:mt-12 md:mt-14"
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p
            className="text-xs font-medium tracking-tight text-[#B7B7B7] sm:text-sm"
            variants={reduce ? undefined : staggerItem}
          >
            Works with
          </motion.p>
          <ul className="mt-3 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:mt-4 sm:gap-x-10 sm:gap-y-5">
            {partners.map((partner) => (
              <motion.li
                key={partner.name}
                className="flex items-center gap-2"
                variants={reduce ? undefined : staggerItem}
                whileHover={reduce ? undefined : { y: -2, scale: 1.04 }}
                transition={springSoft}
              >
                <Image
                  src={partner.mark}
                  alt=""
                  width={partner.markW}
                  height={partner.markH}
                  className="h-6 w-auto object-contain sm:h-7"
                />
                <span className="text-sm font-semibold tracking-tight text-[#1A1A1A] sm:text-base">
                  {partner.label}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </PageRail>
    </section>
  );
}
