"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { springSnappy, springSoft } from "@/components/motion/variants";

type MotionVariant = "primary" | "pill" | "icon" | "ghost" | "secondary";

type MotionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: MotionVariant;
  "data-testid"?: string;
};

/** Hover on the control itself so hard shadows follow `rounded-full` (not a rect wrapper). */
const hoverByVariant = {
  primary: {
    y: -2,
    boxShadow: "0 8px 0 0 rgba(42,63,214,0.35)",
  },
  pill: {
    y: -2,
    boxShadow: "0 6px 0 0 rgba(42,63,214,0.32)",
  },
  icon: {
    scale: 1.05,
    boxShadow: "0 6px 0 0 rgba(42,63,214,0.28)",
  },
  secondary: {
    y: -2,
    boxShadow: "0 6px 0 0 rgba(14,26,22,0.12)",
  },
  ghost: {
    opacity: 0.82,
  },
} as const;

const tapByVariant = {
  primary: { y: 1, scale: 0.985, boxShadow: "0 2px 0 0 rgba(42,63,214,0.28)" },
  pill: { y: 1, scale: 0.98, boxShadow: "0 2px 0 0 rgba(42,63,214,0.28)" },
  icon: { scale: 0.94, boxShadow: "0 2px 0 0 rgba(42,63,214,0.22)" },
  secondary: { y: 1, scale: 0.985, boxShadow: "0 2px 0 0 rgba(14,26,22,0.1)" },
  ghost: { scale: 0.99 },
} as const;

const MotionNextLink = motion.create(Link);

export function MotionLink({
  href,
  children,
  className,
  variant = "pill",
  ...rest
}: MotionLinkProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <MotionNextLink
      href={href}
      className={className}
      whileHover={hoverByVariant[variant]}
      whileTap={tapByVariant[variant]}
      transition={variant === "ghost" ? springSoft : springSnappy}
      {...rest}
    >
      {children}
    </MotionNextLink>
  );
}

type MotionButtonProps = {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: MotionVariant;
  "aria-label"?: string;
  onClick?: ComponentPropsWithoutRef<"button">["onClick"];
  disabled?: boolean;
};

export function MotionButton({
  children,
  className,
  type = "button",
  variant = "primary",
  ...rest
}: MotionButtonProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <button type={type} className={className} {...rest}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      type={type}
      className={className}
      whileHover={hoverByVariant[variant]}
      whileTap={tapByVariant[variant]}
      transition={springSnappy}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
