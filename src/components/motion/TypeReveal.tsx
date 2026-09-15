"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type TypeRevealProps = {
  lead: string;
  rest: string;
  className?: string;
  /** Base ms per character (body). Lower = faster. */
  charMs?: number;
  startDelayMs?: number;
  /** Pause after the last character before onComplete (lets the caret settle). */
  holdAfterMs?: number;
  onComplete?: () => void;
};

function pauseForChar(char: string, charMs: number, atLeadEnd: boolean) {
  if (atLeadEnd) return Math.round(charMs * 5.5);
  if (char === ".") return Math.round(charMs * 6.5);
  if (char === ",") return Math.round(charMs * 4.2);
  if (char === " ") return Math.round(charMs * 1.85);
  // Tiny deterministic variance so it feels human, not metronomic.
  return charMs + (char.charCodeAt(0) % 5) * 3;
}

/**
 * Figma typing reveal:
 * Ghost full text underneath + progressive color paint on top
 * so wrapping stays identical to a normal paragraph.
 */
export function TypeReveal({
  lead,
  rest,
  className,
  charMs = 46,
  startDelayMs = 420,
  holdAfterMs = 520,
  onComplete,
}: TypeRevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.4,
    margin: "0px 0px -10% 0px",
  });
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const full = useMemo(() => `${lead} ${rest}`, [lead, rest]);
  const leadEnd = lead.length;
  const total = full.length;
  const chars = useMemo(() => Array.from(full), [full]);

  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const completedRef = useRef(false);

  const visibleCount = reduce ? total : count;
  const isDone = Boolean(reduce) || done;

  useEffect(() => {
    if (reduce) {
      onCompleteRef.current?.();
      return;
    }
    if (!inView) return;
    if (completedRef.current) return;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let i = 0;
    setCount(0);
    setDone(false);

    const finish = () => {
      if (cancelled) return;
      setDone(true);
      completedRef.current = true;
      timer = setTimeout(() => {
        if (!cancelled) onCompleteRef.current?.();
      }, holdAfterMs);
    };

    const tick = () => {
      if (cancelled) return;
      i += 1;
      setCount(i);
      if (i >= total) {
        finish();
        return;
      }
      const prev = full[i - 1];
      const atLeadEnd = i === leadEnd;
      // Lead types slightly snappier so the brand lands; body is the reading pace.
      const base = i <= leadEnd ? Math.round(charMs * 0.82) : charMs;
      const pause = pauseForChar(prev, base, atLeadEnd);
      timer = setTimeout(tick, pause);
    };

    timer = setTimeout(tick, startDelayMs);

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [inView, reduce, total, charMs, startDelayMs, holdAfterMs, full, leadEnd]);

  return (
    <div
      ref={ref}
      className={`relative ${className ?? ""}`}
      data-testid="definition-type-reveal"
    >
      <p className="sr-only">
        {lead} {rest}
      </p>

      <p
        aria-hidden
        className="m-0 font-medium leading-[inherit] tracking-[inherit] text-[#D0D0D0]"
      >
        <span className="font-bold">{lead}</span>
        {` ${rest}`}
      </p>

      <p
        aria-hidden
        className="pointer-events-none absolute inset-0 m-0 font-medium leading-[inherit] tracking-[inherit]"
      >
        {chars.map((char, i) => {
          const isLead = i < leadEnd;
          const typed = i < visibleCount;
          const active = !isDone && i === visibleCount - 1 && visibleCount > 0;

          if (!typed) {
            return (
              <span
                key={i}
                className={`text-transparent ${isLead ? "font-bold" : "font-medium"}`}
              >
                {char}
              </span>
            );
          }

          if (active) {
            return (
              <span
                key={i}
                className={`relative text-spark ${isLead ? "font-bold" : "font-medium"}`}
              >
                {char}
                <motion.span
                  className="absolute -right-[2px] top-[0.12em] bottom-[0.08em] w-[2.5px] rounded-full bg-spark"
                  animate={{ opacity: [1, 0.18, 1] }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
            );
          }

          return (
            <span
              key={i}
              className={
                isLead
                  ? "font-bold text-electric"
                  : "font-medium text-[#535353]"
              }
            >
              {char}
            </span>
          );
        })}
        {isDone && !reduce ? (
          <motion.span
            className="ml-0.5 inline-block h-[0.85em] w-[2.5px] translate-y-[0.08em] rounded-full bg-spark align-middle"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 0.45, duration: 0.4 }}
          />
        ) : null}
      </p>
    </div>
  );
}
