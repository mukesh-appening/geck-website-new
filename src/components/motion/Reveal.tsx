"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  fadeIn,
  fadeScale,
  fadeUp,
  reducedFade,
  slideInLeft,
} from "@/components/motion/variants";

type RevealVariant = "fadeUp" | "fadeIn" | "fadeScale" | "slideLeft";

const map = {
  fadeUp,
  fadeIn,
  fadeScale,
  slideLeft: slideInLeft,
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  once?: boolean;
  amount?: number | "some" | "all";
};

export function Reveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  once = true,
  amount = 0.22,
}: RevealProps) {
  const reduce = useReducedMotion();
  const variants = reduce ? reducedFade : map[variant];

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -6% 0px" }}
      transition={
        reduce
          ? { duration: 0.01 }
          : delay
            ? { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
            : undefined
      }
    >
      {children}
    </motion.div>
  );
}
