"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { springSoft } from "@/components/motion/variants";

type HoverLiftProps = {
  children: ReactNode;
  className?: string;
  scale?: number;
  y?: number;
};

export function HoverLift({
  children,
  className,
  scale = 1.015,
  y = -3,
}: HoverLiftProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{
        y,
        scale,
        boxShadow: "0 14px 28px rgba(14,26,22,0.08)",
      }}
      transition={springSoft}
    >
      {children}
    </motion.div>
  );
}
