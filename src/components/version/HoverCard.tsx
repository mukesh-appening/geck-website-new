"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { springSoft } from "@/components/motion/variants";

type HoverCardProps = {
  children: ReactNode;
  className?: string;
  /** Stronger lift for featured surfaces */
  featured?: boolean;
};

/**
 * Premium card hover — transform + hard offset shadow (no soft glow).
 */
export function HoverCard({
  children,
  className = "",
  featured = false,
}: HoverCardProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`will-change-transform ${className}`}
      whileHover={{
        y: featured ? -8 : -6,
        scale: featured ? 1.02 : 1.015,
      }}
      transition={springSoft}
    >
      {children}
    </motion.div>
  );
}
