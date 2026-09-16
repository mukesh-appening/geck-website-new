"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/layout/PageShell";
import { HoverCard } from "@/components/version/HoverCard";
import { ProductArt } from "@/components/version/VersionArt";
import { springSnappy } from "@/components/motion/variants";
import { VERSION_HOME } from "@/lib/version-home";

const products = VERSION_HOME.products.items;

function Caret({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d={direction === "left" ? "M11 4 6 9l5 5" : "M7 4l5 5-5 5"}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Products slider — 3 cards visible on desktop, finite scroll (no infinite loop).
 */
export function ProductsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);

    const nodes = Array.from(
      el.querySelectorAll<HTMLElement>("[data-product-slide]"),
    );
    if (!nodes.length) return;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    nodes.forEach((node, index) => {
      const dist = Math.abs(node.offsetLeft - el.scrollLeft);
      if (dist < bestDist) {
        bestDist = dist;
        best = index;
      }
    });
    setActiveIndex(best);
  }, []);

  const scrollByCard = useCallback(
    (dir: -1 | 1) => {
      const el = scrollerRef.current;
      if (!el) return;
      const slide = el.querySelector<HTMLElement>("[data-product-slide]");
      if (!slide) return;
      const track = slide.parentElement;
      const styles = window.getComputedStyle(track ?? el);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "24") || 24;
      const step = slide.getBoundingClientRect().width + gap;
      el.scrollBy({ left: dir * step, behavior: "smooth" });
      window.setTimeout(updateEdges, 360);
    },
    [updateEdges],
  );

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  return (
    <div className="mt-12 sm:mt-16">
      <div className="mb-6 flex justify-end gap-3 sm:mb-8 sm:gap-4">
        <motion.button
          type="button"
          aria-label="Previous product"
          disabled={!canPrev}
          onClick={() => scrollByCard(-1)}
          className="flex size-11 items-center justify-center rounded-full border border-[#A7A7A7] bg-surface text-[#A7A7A7] transition-opacity disabled:cursor-not-allowed disabled:opacity-35 sm:size-12"
          whileHover={
            reduce || !canPrev
              ? undefined
              : {
                  scale: 1.05,
                  borderColor: "#0E1A16",
                  color: "#0E1A16",
                  boxShadow: "0 5px 0 0 rgba(14,26,22,0.1)",
                }
          }
          whileTap={reduce || !canPrev ? undefined : { scale: 0.94 }}
          transition={springSnappy}
        >
          <Caret direction="left" />
        </motion.button>
        <motion.button
          type="button"
          aria-label="Next product"
          disabled={!canNext}
          onClick={() => scrollByCard(1)}
          className="flex size-11 items-center justify-center rounded-full border border-[#A7A7A7] bg-surface text-spark transition-opacity disabled:cursor-not-allowed disabled:opacity-35 sm:size-12"
          whileHover={
            reduce || !canNext
              ? undefined
              : {
                  scale: 1.05,
                  borderColor: "#344FFE",
                  color: "#344FFE",
                  boxShadow: "0 5px 0 0 rgba(52,79,254,0.22)",
                }
          }
          whileTap={reduce || !canNext ? undefined : { scale: 0.94 }}
          transition={springSnappy}
        >
          <Caret direction="right" />
        </motion.button>
      </div>

      {/* Extra inset so hover lift + hard shadow are not clipped by the scrollport. */}
      <div
        ref={scrollerRef}
        className="-mx-1 overflow-x-auto px-1 pb-5 pt-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:pb-6 sm:pt-4"
        data-testid="products-carousel"
        aria-roledescription="carousel"
        aria-label="Products"
      >
        <div className="flex snap-x snap-mandatory gap-4 sm:gap-6">
          {products.map((item, index) => {
            const active = index === activeIndex;
            return (
              <div
                key={item.id}
                data-product-slide
                className="w-[min(88vw,22rem)] shrink-0 snap-start sm:w-[min(48vw,24rem)] lg:w-[calc((100%-3rem)/3)]"
                aria-current={active ? "true" : undefined}
              >
                <HoverCard className="h-full">
                  <article className="group flex h-full flex-col rounded-[20px] border border-[#D1D1D1] bg-surface p-5 shadow-none transition-[border-color,box-shadow] duration-[var(--ease)] hover:border-electric hover:shadow-[0_12px_0_0_rgba(0,0,0,0.08)] sm:p-6 lg:p-7">
                    <ProductArt kind={item.art} />
                    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[#B7B7B7]">
                      {item.note}
                    </p>
                    <h3 className="mt-2 font-serif text-[1.35rem] font-extrabold tracking-tight text-electric sm:text-[1.65rem]">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm font-semibold tracking-tight text-[#535353]">
                      {item.tagline}
                    </p>
                    <p className="mt-3 flex-1 text-sm font-medium leading-relaxed tracking-tight text-[#8A8A8A]">
                      {item.overview}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <PrimaryButton href={item.primary.href}>
                        {item.primary.label}
                      </PrimaryButton>
                      <SecondaryButton href={item.secondary.href}>
                        {item.secondary.label}
                      </SecondaryButton>
                    </div>
                  </article>
                </HoverCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
