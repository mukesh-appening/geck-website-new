"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerFast, wordVariants } from "@/components/motion/variants";

type FadeWordsProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  id?: string;
};

export function FadeWords({
  text,
  className,
  as = "span",
  delay = 0,
  id,
}: FadeWordsProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const Tag = motion[as];

  if (reduce) {
    const StaticTag = as;
    return (
      <StaticTag id={id} className={className}>
        {text}
      </StaticTag>
    );
  }

  return (
    <Tag
      id={id}
      className={className}
      variants={staggerFast}
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: delay, staggerChildren: 0.045 }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block whitespace-pre"
          variants={wordVariants}
          aria-hidden="true"
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
