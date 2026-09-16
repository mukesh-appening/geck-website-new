"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { TypeReveal } from "@/components/motion/TypeReveal";
import { springSoft } from "@/components/motion/variants";
import { PageRail } from "@/components/layout/PageRail";
import { HOME } from "@/lib/home";

/** Emphasized / hover surface — hard offset moves with the card (same transform). */
const cardActive =
  "border-electric bg-[rgba(0,111,253,0.04)] shadow-[0_8px_0_0_rgba(0,0,0,0.08)]";
const cardIdle = "border-[#A7A7A7] bg-surface shadow-[0_8px_0_0_transparent]";

/**
 * Definition + stats — matched to Figma node 2802:4723 (Frame 821).
 * Cards ~372px, gap 48px, row ~1213px; type from Figma text styles.
 * Stats show immediately (not gated on typing).
 * Hover: muted cards match emphasized look + spring lift (shadow travels with card).
 */
export function DefinitionSection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative z-10 isolate border-y border-[#EDEDED] bg-surface"
      aria-labelledby="definition-heading"
      data-testid="home-definition"
    >
      <PageRail className="py-14 sm:py-16 lg:py-20">
        <h2 id="definition-heading" className="sr-only">
          What is agentic commerce
        </h2>
        <TypeReveal
          lead={HOME.definitionLead}
          rest={HOME.definitionRest}
          className="w-full max-w-[95.3125rem] text-left font-sans text-[1.125rem] font-medium leading-[1.35] tracking-[-0.02em] sm:text-[clamp(1.25rem,4.2vw,4rem)] sm:text-justify sm:leading-none"
          charMs={36}
          startDelayMs={280}
          holdAfterMs={280}
        />

        <Stagger
          className="mx-auto mt-12 flex w-full max-w-[75.8125rem] flex-wrap items-stretch justify-center gap-8 sm:mt-14 sm:gap-10 lg:mt-16 lg:gap-12"
          slow={false}
        >
          {HOME.stats.map((stat) => (
            <StaggerItem
              key={stat.value}
              className="group flex w-full max-w-[23.25rem] flex-col gap-3 sm:w-[min(100%,23.25rem)] sm:flex-1 sm:gap-4"
            >
              <motion.div
                className={`flex h-full min-h-[11.5rem] flex-col items-center justify-center overflow-hidden rounded-[20px] border px-5 py-7 text-center transition-[border-color,background-color,box-shadow,color] duration-[var(--ease)] will-change-transform sm:min-h-[14.75rem] sm:px-6 sm:py-8 ${
                  stat.emphasized
                    ? cardActive
                    : `${cardIdle} group-hover:border-electric group-hover:bg-[rgba(0,111,253,0.04)] group-hover:shadow-[0_8px_0_0_rgba(0,0,0,0.08)]`
                }`}
                whileHover={reduce ? undefined : { y: -6, scale: 1.015 }}
                transition={springSoft}
              >
                <p
                  className={`text-center font-serif text-[2.75rem] font-extrabold leading-none tracking-[-0.02em] transition-colors duration-[var(--ease)] sm:text-[clamp(3.5rem,8vw,6rem)] ${
                    stat.emphasized
                      ? "text-electric"
                      : "text-[#B7B7B7] group-hover:text-electric"
                  }`}
                >
                  {stat.value}
                </p>
                <p
                  className={`mt-3 w-full text-center font-sans text-[0.9375rem] font-medium leading-snug tracking-[-0.02em] transition-colors duration-[var(--ease)] sm:mt-4 sm:text-[clamp(1rem,2vw,1.5rem)] sm:leading-none ${
                    stat.emphasized
                      ? "text-[#535353]"
                      : "text-[#A4A4A4] group-hover:text-[#535353]"
                  }`}
                >
                  {stat.label}
                </p>
              </motion.div>
              <div className="flex items-center justify-center px-4 py-3">
                <Image
                  src={stat.sourceLogo}
                  alt={stat.source}
                  width={stat.source === "McKinsey & Company" ? 210 : 101}
                  height={23}
                  className="h-[22px] w-auto opacity-90"
                />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </PageRail>
    </section>
  );
}
