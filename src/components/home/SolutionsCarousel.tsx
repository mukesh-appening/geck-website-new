"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { pageRailClassName } from "@/components/layout/PageRail";
import { SectionEyebrow } from "@/components/layout/SectionEyebrow";
import { HoverLift } from "@/components/motion/HoverLift";
import { springSnappy, staggerFast, staggerItem } from "@/components/motion/variants";
import { HOME } from "@/lib/home";

const AUTO_MS = 4200;
const LOOP_COPIES = 3;

type Solution = (typeof HOME.solutions)[number];

type LoopSlide = Solution & {
  key: string;
  sourceIndex: number;
  copy: number;
};

/**
 * Infinite solutions carousel — triple-cloned track with silent re-center
 * so autoplay and arrows never jump back to the start.
 */
export function SolutionsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const userPausedUntil = useRef(0);
  const jumping = useRef(false);
  const physicalIndex = useRef<number>(HOME.solutions.length);

  const items = HOME.solutions;
  const count = items.length as number;

  const slides: LoopSlide[] = useMemo(
    () =>
      Array.from({ length: LOOP_COPIES }, (_, copy) =>
        items.map((item, sourceIndex) => ({
          ...item,
          key: `${copy}-${item.title}`,
          sourceIndex,
          copy,
        })),
      ).flat(),
    [items],
  );

  const getSlideNodes = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return [] as HTMLElement[];
    return Array.from(el.querySelectorAll<HTMLElement>("[data-solution-slide]"));
  }, []);

  const scrollToPhysical = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const el = scrollerRef.current;
      const nodes = getSlideNodes();
      const slide = nodes[index];
      if (!el || !slide) return;
      physicalIndex.current = index;
      setActiveIndex(index % count);
      el.scrollTo({ left: slide.offsetLeft, behavior });
    },
    [count, getSlideNodes],
  );

  /** Keep the viewport in the middle copy so looping never hits an edge. */
  const recenterIfNeeded = useCallback(() => {
    const el = scrollerRef.current;
    if (!el || jumping.current || count === 0) return;
    const nodes = getSlideNodes();
    if (nodes.length < count * 2) return;

    const left = el.scrollLeft;
    let best = physicalIndex.current;
    let bestDist = Number.POSITIVE_INFINITY;
    nodes.forEach((node, index) => {
      const dist = Math.abs(node.offsetLeft - left);
      if (dist < bestDist) {
        bestDist = dist;
        best = index;
      }
    });

    physicalIndex.current = best;
    setActiveIndex(best % count);

    const copy = Math.floor(best / count);
    if (copy === 1) return;

    const middle = best % count + count;
    const target = nodes[middle];
    if (!target) return;
    jumping.current = true;
    physicalIndex.current = middle;
    el.scrollTo({ left: target.offsetLeft, behavior: "auto" });
    requestAnimationFrame(() => {
      jumping.current = false;
    });
  }, [count, getSlideNodes]);

  const measureActive = useCallback(() => {
    if (jumping.current) return;
    const el = scrollerRef.current;
    if (!el) return;
    const nodes = getSlideNodes();
    if (!nodes.length) return;
    const left = el.scrollLeft;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    nodes.forEach((node, index) => {
      const dist = Math.abs(node.offsetLeft - left);
      if (dist < bestDist) {
        bestDist = dist;
        best = index;
      }
    });
    physicalIndex.current = best;
    setActiveIndex(best % count);
  }, [count, getSlideNodes]);

  const scrollByCard = useCallback(
    (direction: -1 | 1) => {
      userPausedUntil.current = Date.now() + AUTO_MS * 1.5;
      scrollToPhysical(physicalIndex.current + direction);
      window.setTimeout(() => recenterIfNeeded(), 520);
    },
    [recenterIfNeeded, scrollToPhysical],
  );

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    // Land in the middle copy before paint settles.
    scrollToPhysical(count, "auto");
    const onScroll = () => measureActive();
    const onScrollEnd = () => recenterIfNeeded();
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("scrollend", onScrollEnd);
    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("scrollend", onScrollEnd);
    };
  }, [count, measureActive, recenterIfNeeded, scrollToPhysical]);

  useEffect(() => {
    if (reduce || paused) return;

    const id = window.setInterval(() => {
      if (document.hidden) return;
      if (Date.now() < userPausedUntil.current) return;
      scrollToPhysical(physicalIndex.current + 1);
      window.setTimeout(() => recenterIfNeeded(), 520);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [paused, recenterIfNeeded, reduce, scrollToPhysical]);

  return (
    <div
      className="min-w-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        className={`${pageRailClassName} flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6`}
      >
        <div className="min-w-0 flex-1">
          <SectionEyebrow>Solutions</SectionEyebrow>
          <h2
            id="solutions-heading"
            className="mt-3 text-[1.35rem] font-medium leading-snug tracking-tight text-[#535353] sm:mt-3 sm:text-[clamp(1.5rem,4vw,2.75rem)] sm:leading-tight"
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
          aria-roledescription="carousel"
          aria-label="Solutions"
          variants={reduce ? undefined : staggerFast}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 10% 0px" }}
        >
          {slides.map((item, index) => {
            const active = item.sourceIndex === activeIndex;
            const isLead = item.sourceIndex === 0;
            return (
              <motion.div
                key={item.key}
                data-solution-slide
                data-source-index={item.sourceIndex}
                variants={reduce || item.copy !== 1 ? undefined : staggerItem}
                className="shrink-0 snap-start"
                aria-hidden={item.copy !== 1 ? true : undefined}
                aria-current={item.copy === 1 && active ? "true" : undefined}
              >
                <HoverLift
                  className={`h-full ${
                    isLead
                      ? "w-[min(85vw,22rem)] sm:w-[min(70vw,36rem)]"
                      : "w-[min(75vw,18rem)] sm:w-[min(55vw,24rem)]"
                  }`}
                >
                  <article
                    className={`flex h-full flex-col justify-end gap-4 rounded-[16px] border border-[#D1D1D1] bg-surface p-4 transition-[box-shadow] duration-[var(--ease)] sm:gap-6 sm:rounded-[20px] sm:p-6 ${
                      active
                        ? "shadow-[0px_8px_0px_0px_rgba(0,0,0,0.08)]"
                        : "shadow-none"
                    }`}
                  >
                    <div className="relative aspect-[21/10] w-full overflow-hidden rounded-2xl bg-[#F1F1F1]">
                      <Image
                        src={item.image}
                        alt={item.copy === 1 ? item.imageAlt : ""}
                        fill
                        priority={item.copy === 1 && index < count + 2}
                        className="object-contain object-center p-1 sm:p-1.5"
                        sizes={
                          isLead
                            ? "(max-width: 640px) 85vw, 36rem"
                            : "(max-width: 640px) 75vw, 24rem"
                        }
                      />
                    </div>
                    <div className="flex items-end gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-[1.2rem] font-extrabold tracking-tight text-electric sm:text-[clamp(1.35rem,3vw,2rem)]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs font-medium leading-relaxed tracking-tight text-[#535353] sm:mt-2 sm:text-base sm:leading-normal md:text-lg">
                          {item.body}
                        </p>
                      </div>
                      {active ? (
                        <span
                          className="mb-1 size-2 shrink-0 rounded-full bg-spark"
                          aria-hidden
                        />
                      ) : null}
                    </div>
                  </article>
                </HoverLift>
              </motion.div>
            );
          })}
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
