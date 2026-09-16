"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  fadeIn,
  fadeScale,
  fadeUp,
  fadeUpSoft,
  reducedFade,
  slideInLeft,
  slideInRight,
} from "@/components/motion/variants";

type RevealVariant =
  | "fadeUp"
  | "fadeUpSoft"
  | "fadeIn"
  | "fadeScale"
  | "slideLeft"
  | "slideRight";

const map = {
  fadeUp,
  fadeUpSoft,
  fadeIn,
  fadeScale,
  slideLeft: slideInLeft,
  slideRight: slideInRight,
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
  variant = "fadeUpSoft",
  delay = 0,
  once = true,
  amount = 0.18,
}: RevealProps) {
  const reduce = useReducedMotion();
  const variants = reduce ? reducedFade : map[variant];

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      transition={
        reduce
          ? { duration: 0.01 }
          : delay
            ? { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }
            : undefined
      }
    >
      {children}
    </motion.div>
  );
}
