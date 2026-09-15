"use client";

import Image from "next/image";
import { HoverLift } from "@/components/motion/HoverLift";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { TypeReveal } from "@/components/motion/TypeReveal";
import { PageRail } from "@/components/layout/PageRail";
import { HOME } from "@/lib/home";

/**
 * Definition + stats — matched to Figma node 2802:4723 (Frame 821).
 * Cards ~372px, gap 48px, row ~1213px; type from Figma text styles.
 * Stats show immediately (not gated on typing).
 */
export function DefinitionSection() {
  return (
    <section
      className="relative z-10 isolate border-y border-[#EDEDED] bg-surface"
      aria-labelledby="definition-heading"
      data-testid="home-definition"
    >
      <PageRail className="py-12 sm:py-16 lg:py-20">
        <h2 id="definition-heading" className="sr-only">
          What is agentic commerce
        </h2>
        <TypeReveal
          lead={HOME.definitionLead}
          rest={HOME.definitionRest}
          className="w-full max-w-[95.3125rem] text-justify font-sans text-[clamp(1.75rem,4.2vw,4rem)] font-medium leading-none tracking-[-0.02em]"
          charMs={36}
          startDelayMs={280}
          holdAfterMs={280}
        />

        <Stagger
          className="mx-auto mt-10 flex w-full max-w-[75.8125rem] flex-wrap items-stretch justify-center gap-6 sm:mt-14 sm:gap-10 lg:mt-16 lg:gap-12"
          slow={false}
        >
          {HOME.stats.map((stat) => (
            <StaggerItem
              key={stat.value}
              className="flex w-full max-w-[23.25rem] flex-col gap-4 sm:w-[min(100%,23.25rem)] sm:flex-1"
            >
              <HoverLift className="h-full rounded-[20px]">
                <div
                  className={`flex h-full min-h-[14.75rem] flex-col items-center justify-center overflow-hidden rounded-[20px] px-6 py-8 text-center ${
                    stat.emphasized
                      ? "border border-electric bg-[rgba(0,111,253,0.04)] shadow-[0px_10px_0px_0px_rgba(0,0,0,0.1)]"
                      : "border border-[#A7A7A7] bg-surface p-6"
                  }`}
                >
                  <p
                    className={`-mb-2 text-center font-serif text-[clamp(3.5rem,8vw,6rem)] font-extrabold leading-none tracking-[-0.02em] ${
                      stat.emphasized ? "text-electric" : "text-[#B7B7B7]"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p
                    className={`w-full text-center font-sans text-[clamp(1rem,2vw,1.5rem)] font-medium leading-none tracking-[-0.02em] ${
                      stat.emphasized ? "text-[#535353]" : "text-[#A4A4A4]"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              </HoverLift>
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
