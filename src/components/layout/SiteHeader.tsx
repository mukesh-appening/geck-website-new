"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { pageRailClassName } from "@/components/layout/PageRail";
import { MotionLink } from "@/components/motion/MotionLink";
import {
  menuItem,
  menuPanel,
  springSnappy,
  staggerFast,
} from "@/components/motion/variants";

const nav = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Platform" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const frosted = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-40 ${frosted ? "" : "bg-transparent"}`}
      data-testid="site-header"
      data-frosted={frosted ? "true" : "false"}
    >
      {/* Glass only when scrolled/open — at top, rings must show through */}
      {frosted ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 border-b border-[#E5E5E5] bg-white/92 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] backdrop-blur-2xl transition-[opacity,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        />
      ) : null}

      <div
        className={`${pageRailClassName} relative z-10 grid h-14 grid-cols-[1fr_auto] items-center gap-3 sm:h-16 md:grid-cols-[1fr_auto_1fr] md:gap-4`}
      >
        <motion.div
          className="justify-self-start"
          whileHover={reduce ? undefined : { scale: 1.02 }}
          transition={springSnappy}
        >
          <Link
            href="/"
            className="relative block h-7 w-28 shrink-0 sm:h-8 sm:w-36"
            data-testid="brand-link"
            aria-label="Geck home"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/brand/geck-logo.svg"
              alt="GECK"
              fill
              priority
              className="object-contain object-left"
              sizes="144px"
            />
          </Link>
        </motion.div>

        <nav
          aria-label="Primary"
          data-testid="primary-nav"
          className="hidden justify-self-center md:block"
        >
          <motion.ul
            className="flex items-center gap-1 lg:gap-1.5"
            variants={reduce ? undefined : staggerFast}
            initial={reduce ? false : "hidden"}
            animate="visible"
          >
            {nav.map((item) => (
              <motion.li key={`${item.href}-${item.label}`} variants={menuItem}>
                <Link
                  href={item.href}
                  className={`group relative rounded-full px-3.5 py-2 text-sm font-medium tracking-tight transition-colors duration-300 lg:px-4 lg:text-[0.9375rem] ${
                    frosted
                      ? "text-[#5C5C5C] hover:bg-black/[0.04] hover:text-ink"
                      : "text-[#8E8E8E] hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <div className="hidden justify-self-end md:block">
          <MotionLink
            href="/contact"
            variant="pill"
            className="inline-flex h-10 items-center rounded-full bg-electric px-5 text-sm font-medium tracking-tight text-white transition-colors duration-[var(--ease)] hover:bg-electric-hover lg:h-11"
            data-testid="header-cta"
          >
            Request Access
          </MotionLink>
        </div>

        <div className="flex items-center justify-self-end gap-2 md:hidden">
          <MotionLink
            href="/contact"
            variant="pill"
            className="inline-flex h-9 items-center rounded-full bg-electric px-3.5 text-xs font-medium tracking-tight text-white transition-colors duration-[var(--ease)] hover:bg-electric-hover"
          >
            Request Access
          </MotionLink>
          <motion.button
            type="button"
            className={`inline-flex size-10 items-center justify-center rounded-full transition-colors ${
              frosted ? "text-ink hover:bg-black/[0.04]" : "text-ink"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            whileTap={reduce ? undefined : { scale: 0.92 }}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="relative overflow-hidden border-t border-[#E5E5E5] bg-white/95 backdrop-blur-2xl md:hidden"
            variants={reduce ? undefined : menuPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.ul
              className={`${pageRailClassName} flex flex-col gap-1 py-4`}
              variants={reduce ? undefined : staggerFast}
              initial="hidden"
              animate="visible"
            >
              {nav.map((item) => (
                <motion.li key={`m-${item.href}-${item.label}`} variants={menuItem}>
                  <Link
                    href={item.href}
                    className="block rounded-[10px] px-3 py-3 text-base font-medium text-ink-soft hover:bg-[#F7F7F7] hover:text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
