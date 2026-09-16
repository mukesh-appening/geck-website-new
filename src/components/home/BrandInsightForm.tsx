"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { MotionButton } from "@/components/motion/MotionLink";
import { springSoft } from "@/components/motion/variants";
import { HOME } from "@/lib/home";

export function BrandInsightForm() {
  const router = useRouter();
  const [brand, setBrand] = useState("");
  const [focused, setFocused] = useState(false);
  const reduce = useReducedMotion();
  const showHint = brand.length === 0;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = brand.trim();
    const params = new URLSearchParams();
    if (query) params.set("brand", query);
    const suffix = params.toString();
    router.push(suffix ? `/contact?${suffix}` : "/contact");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative mx-auto w-full max-w-xl lg:max-w-2xl"
      data-testid="brand-insight-form"
    >
      <label htmlFor="brand-insight" className="sr-only">
        Enter your brand
      </label>
      <motion.div
        className="relative"
        animate={
          reduce
            ? undefined
            : focused
              ? { y: -1 }
              : { y: 0 }
        }
        transition={springSoft}
      >
        <input
          id="brand-insight"
          name="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-describedby={showHint ? "brand-insight-hint" : undefined}
          className={`h-12 w-full rounded-full border bg-surface pl-4 pr-[3.75rem] text-xs font-medium tracking-tight text-[#535353] outline-none transition-[border-color,box-shadow] duration-[var(--ease)] sm:h-16 sm:pl-7 sm:pr-20 sm:text-base md:h-[4.5rem] md:pl-8 md:pr-24 md:text-lg ${
            focused
              ? "border-electric shadow-[0px_6px_0px_0px_rgba(52,79,254,0.18)]"
              : "border-[#C8C8C8] shadow-[0px_4px_0px_0px_rgba(0,0,0,0.08)]"
          }`}
        />
        {showHint ? (
          <p
            id="brand-insight-hint"
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-xs font-medium tracking-tight sm:pl-7 sm:text-base md:pl-8 md:text-lg"
          >
            <span className="text-[#535353]">{HOME.brandInputPrimary}</span>
            <span className="text-[#A7A7A7]">{HOME.brandInputSecondary}</span>
          </p>
        ) : null}
        {/* Position wrapper keeps centering; MotionButton only scales (no y). */}
        <div className="absolute right-1 top-1/2 z-10 -translate-y-1/2 sm:right-1.5">
          <MotionButton
            type="submit"
            variant="icon"
            aria-label="Request insights"
            className="flex size-10 items-center justify-center rounded-full bg-electric text-white transition-colors duration-[var(--ease)] hover:bg-electric-hover sm:size-14 md:size-[4.25rem]"
          >
            <span
              className="block h-1.5 w-5 rounded-full bg-white sm:h-2.5 sm:w-8 md:h-3 md:w-10"
              aria-hidden
            />
          </MotionButton>
        </div>
      </motion.div>
    </form>
  );
}
