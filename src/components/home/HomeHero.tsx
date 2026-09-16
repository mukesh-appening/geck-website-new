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

/**
 * Desktop: sticky header + hero = one viewport (`h-dvh`).
 * Mobile: content-sized height, smaller type, extra vertical rhythm.
 */
export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative -mt-14 flex flex-col overflow-hidden bg-surface pt-14 sm:-mt-16 sm:h-dvh sm:max-h-dvh sm:pt-16"
      aria-labelledby="hero-heading"
      data-testid="home-hero"
    >
      <HeroRings />

      <PageRail className="relative z-10 flex flex-col items-center gap-8 py-14 sm:min-h-0 sm:flex-1 sm:justify-center sm:gap-8 sm:py-6 md:gap-10">
        <p className="sr-only">Geck</p>
        <motion.div
          className="flex w-full flex-col items-center gap-1 px-1 text-center sm:gap-0 sm:px-0"
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? false : "hidden"}
          animate="visible"
        >
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-3 sm:gap-x-3 sm:gap-y-3"
            variants={reduce ? undefined : staggerItem}
          >
            <span className="text-[1.125rem] font-semibold capitalize leading-[1.2] tracking-tight text-[#535353] sm:text-[clamp(1.5rem,4.5vw,3.5rem)] sm:leading-[1.1]">
              {HOME.headlineLead}
            </span>
            <motion.span
              className="inline-flex origin-center -rotate-[3deg] items-center gap-1.5 rounded-full border border-[#ACACAC] bg-surface px-2.5 py-1 shadow-[-2px_4px_0px_0px_rgba(0,0,0,0.08)] sm:gap-3 sm:px-4 sm:py-2.5 md:px-5 md:py-3"
              initial={reduce ? false : { opacity: 0, scale: 0.86, rotate: -8 }}
              animate={
                reduce
                  ? { opacity: 1, scale: 1, rotate: -3 }
                  : {
                      opacity: 1,
                      scale: 1,
                      y: [0, -4, 0],
                      rotate: [-3, -1.2, -3],
                    }
              }
              transition={
                reduce
                  ? { duration: 0.01 }
                  : {
                      opacity: { ...springSoft, delay: 0.18 },
                      scale: { ...springSoft, delay: 0.18 },
                      y: {
                        duration: 3.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.7,
                      },
                      rotate: {
                        duration: 3.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.7,
                      },
                    }
              }
              whileHover={
                reduce
                  ? undefined
                  : { scale: 1.06, rotate: 0, y: -2, transition: springSoft }
              }
            >
              <motion.span
                className="size-1.5 rounded-full bg-spark sm:size-2"
                aria-hidden
                animate={
                  reduce
                    ? undefined
                    : { scale: [1, 1.4, 1], opacity: [1, 0.55, 1] }
                }
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-[0.75rem] font-semibold tracking-tight text-[#535353] sm:text-[clamp(0.95rem,2.8vw,1.875rem)]">
                {HOME.headlinePill}
              </span>
              <motion.span
                className="size-1.5 rounded-full bg-spark sm:size-2"
                aria-hidden
                animate={
                  reduce
                    ? undefined
                    : { scale: [1, 1.4, 1], opacity: [1, 0.55, 1] }
                }
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.1,
                }}
              />
            </motion.span>
            <span className="text-[1.125rem] font-semibold capitalize leading-[1.2] tracking-tight text-[#535353] sm:text-[clamp(1.5rem,4.5vw,3.5rem)] sm:leading-[1.1]">
              {HOME.headlineMid}
            </span>
          </motion.div>

          <FadeWords
            as="h1"
            id="hero-heading"
            text={HOME.headlineAccent}
            delay={0.12}
            className="mt-4 max-w-full font-serif text-[1.5rem] font-extrabold capitalize leading-[1.15] tracking-tight text-electric sm:mt-2 sm:text-[clamp(2rem,7vw,4.75rem)] sm:leading-[1.05]"
          />

          <motion.p
            className="mt-4 max-w-sm px-2 text-[0.75rem] font-medium leading-relaxed tracking-tight text-[#B7B7B7] sm:mt-4 sm:max-w-xl sm:px-0 sm:text-base sm:leading-snug md:text-lg"
            variants={reduce ? undefined : fadeUp}
          >
            {HOME.support}
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full pt-2 sm:pt-0"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <BrandInsightForm />
        </motion.div>

        <motion.div
          className="flex w-full flex-col items-center pt-2 sm:pt-0"
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? false : "hidden"}
          animate="visible"
        >
          <motion.p
            className="text-[0.6875rem] font-medium tracking-tight text-[#B7B7B7] sm:text-sm"
            variants={reduce ? undefined : staggerItem}
          >
            Works with
          </motion.p>
          <ul className="mt-4 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-3.5 sm:mt-3 sm:gap-x-8 sm:gap-y-4">
            {partners.map((partner) => (
              <motion.li
                key={partner.name}
                className="flex items-center gap-1.5 sm:gap-2"
                variants={reduce ? undefined : staggerItem}
                whileHover={reduce ? undefined : { y: -2, scale: 1.04 }}
                transition={springSoft}
              >
                <Image
                  src={partner.mark}
                  alt=""
                  width={partner.markW}
                  height={partner.markH}
                  className="h-4 w-auto object-contain sm:h-6"
                />
                <span className="text-[0.6875rem] font-semibold tracking-tight text-[#1A1A1A] sm:text-base">
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
