"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { pageRailClassName } from "@/components/layout/PageRail";
import { HoverLift } from "@/components/motion/HoverLift";
import { springSnappy, staggerFast, staggerItem } from "@/components/motion/variants";
import { HOME } from "@/lib/home";

export function SolutionsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  function scrollByCard(direction: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-solution-card]");
    const amount = (card?.offsetWidth ?? 280) + 16;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <div className="min-w-0">
      <div
        className={`${pageRailClassName} flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6`}
      >
        <div className="min-w-0 flex-1">
          <p className="inline-flex rounded-full border border-[#E3E3E3] px-4 py-2 text-xs font-medium tracking-tight text-[#B7B7B7] sm:px-5 sm:py-3 sm:text-sm">
            Solutions
          </p>
          <h2
            id="solutions-heading"
            className="mt-3 text-[clamp(1.5rem,4vw,2.75rem)] font-medium leading-tight tracking-tight text-[#535353]"
          >
            Your Whole workflow,{" "}
            <span className="font-semibold text-electric">Now Optimized</span>
          </h2>
        </div>
        <div className="flex shrink-0 gap-3 sm:gap-4">
          <motion.button
            type="button"
            aria-label="Previous solution"
            onClick={() => scrollByCard(-1)}
            className="flex size-11 items-center justify-center rounded-full border border-[#A7A7A7] bg-surface text-[#A7A7A7] sm:size-14"
            whileHover={
              reduce
                ? undefined
                : {
                    scale: 1.05,
                    borderColor: "#0E1A16",
                    color: "#0E1A16",
                    boxShadow: "0 5px 0 0 rgba(14,26,22,0.1)",
                  }
            }
            whileTap={
              reduce
                ? undefined
                : { scale: 0.94, boxShadow: "0 1px 0 0 rgba(14,26,22,0.08)" }
            }
            transition={springSnappy}
          >
            <Caret direction="left" />
          </motion.button>
          <motion.button
            type="button"
            aria-label="Next solution"
            onClick={() => scrollByCard(1)}
            className="flex size-11 items-center justify-center rounded-full border border-[#A7A7A7] bg-surface text-spark sm:size-14"
            whileHover={
              reduce
                ? undefined
                : {
                    scale: 1.05,
                    borderColor: "#344FFE",
                    color: "#344FFE",
                    boxShadow: "0 5px 0 0 rgba(52,79,254,0.22)",
                  }
            }
            whileTap={
              reduce
                ? undefined
                : { scale: 0.94, boxShadow: "0 1px 0 0 rgba(52,79,254,0.18)" }
            }
            transition={springSnappy}
          >
            <Caret direction="right" />
          </motion.button>
        </div>
      </div>

      <div className={`${pageRailClassName} mt-8 pr-0 sm:mt-10`}>
        <motion.div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pr-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 sm:pr-6 lg:pr-12 xl:pr-[6.5rem] [&::-webkit-scrollbar]:hidden"
          data-testid="solutions-carousel"
          variants={reduce ? undefined : staggerFast}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 10% 0px" }}
        >
          {HOME.solutions.map((item, index) => (
            <motion.div
              key={item.title}
              variants={reduce ? undefined : staggerItem}
              className="shrink-0 snap-start"
            >
              <HoverLift
                className={`h-full ${
                  index === 0
                    ? "w-[min(85vw,22rem)] sm:w-[min(70vw,36rem)]"
                    : "w-[min(75vw,18rem)] sm:w-[min(55vw,24rem)]"
                }`}
              >
                <article
                  data-solution-card
                  className={`flex h-full flex-col justify-end gap-4 rounded-[16px] border border-[#D1D1D1] bg-surface p-4 sm:gap-6 sm:rounded-[20px] sm:p-6 ${
                    index === 0
                      ? "shadow-[0px_8px_0px_0px_rgba(0,0,0,0.08)]"
                      : ""
                  }`}
                >
                  <div className="relative aspect-[21/10] w-full overflow-hidden rounded-2xl bg-[#F1F1F1]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      priority={index < 2}
                      className="object-contain object-center p-1 sm:p-1.5"
                      sizes={
                        index === 0
                          ? "(max-width: 640px) 85vw, 36rem"
                          : "(max-width: 640px) 75vw, 24rem"
                      }
                    />
                  </div>
                  <div className="flex items-end gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-[clamp(1.35rem,3vw,2rem)] font-extrabold tracking-tight text-electric">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm font-medium tracking-tight text-[#535353] sm:mt-2 sm:text-base md:text-lg">
                        {item.body}
                      </p>
                    </div>
                    {index === 0 ? (
                      <span
                        className="mb-1 size-2 shrink-0 rounded-full bg-spark"
                        aria-hidden
                      />
                    ) : null}
                  </div>
                </article>
              </HoverLift>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function Caret({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={direction === "left" ? "rotate-180" : undefined}
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
