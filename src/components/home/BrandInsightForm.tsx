"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { MotionButton } from "@/components/motion/MotionLink";
import { springSoft } from "@/components/motion/variants";

export function BrandInsightForm() {
  const router = useRouter();
  const [brand, setBrand] = useState("");
  const [focused, setFocused] = useState(false);
  const reduce = useReducedMotion();

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
          placeholder="Enter your Brand. Get instant insights"
          className={`h-14 w-full rounded-full border bg-surface pl-5 pr-[4.25rem] text-sm font-medium tracking-tight text-[#535353] outline-none transition-[border-color,box-shadow] duration-[var(--ease)] placeholder:text-[#535353] sm:h-16 sm:pl-7 sm:pr-20 sm:text-base md:h-[4.5rem] md:pl-8 md:pr-24 md:text-lg ${
            focused
              ? "border-electric shadow-[0px_6px_0px_0px_rgba(52,79,254,0.18)]"
              : "border-[#C8C8C8] shadow-[0px_4px_0px_0px_rgba(0,0,0,0.08)]"
          }`}
        />
        {/* Position wrapper keeps centering; MotionButton only scales (no y). */}
        <div className="absolute right-1 top-1/2 z-10 -translate-y-1/2 sm:right-1.5">
          <MotionButton
            type="submit"
            variant="icon"
            aria-label="Request insights"
            className="flex size-12 items-center justify-center rounded-full bg-electric text-white transition-colors duration-[var(--ease)] hover:bg-electric-hover sm:size-14 md:size-[4.25rem]"
          >
            <span
              className="block h-2 w-6 rounded-full bg-white sm:h-2.5 sm:w-8 md:h-3 md:w-10"
              aria-hidden
            />
          </MotionButton>
        </div>
      </motion.div>
    </form>
  );
}
