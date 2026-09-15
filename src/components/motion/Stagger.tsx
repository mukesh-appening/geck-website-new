"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  reducedFade,
  staggerContainer,
  staggerFast,
  staggerItem,
  staggerSlow,
} from "@/components/motion/variants";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  fast?: boolean;
  slow?: boolean;
  once?: boolean;
  amount?: number;
  /** When set, animate on this flag instead of whileInView (e.g. after typing). */
  ready?: boolean;
  "data-testid"?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

export function Stagger({
  children,
  className,
  fast = false,
  slow = false,
  once = true,
  amount = 0.15,
  ready,
  ...rest
}: StaggerProps) {
  const reduce = useReducedMotion();
  const variants = reduce
    ? reducedFade
    : slow
      ? staggerSlow
      : fast
        ? staggerFast
        : staggerContainer;

  if (ready !== undefined) {
    return (
      <motion.div
        className={className}
        variants={variants}
        initial="hidden"
        animate={ready ? "visible" : "hidden"}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -6% 0px" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
};

export function StaggerItem({
  children,
  className,
  as = "div",
}: StaggerItemProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      variants={reduce ? reducedFade : staggerItem}
    >
      {children}
    </Comp>
  );
}
