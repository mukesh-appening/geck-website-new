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
  { href: "/#solutions", label: "Platform" },
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
      className="sticky top-0 z-40"
      data-testid="site-header"
      data-frosted={frosted ? "true" : "false"}
    >
      {/* Full-bleed glass layer — high white opacity so dark sections don't muddy it */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 transition-[opacity,background-color,backdrop-filter,-webkit-backdrop-filter,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          frosted
            ? "border-b border-[#E5E5E5] bg-white/92 opacity-100 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] backdrop-blur-2xl"
            : "border-b border-transparent bg-transparent opacity-100"
        }`}
      />

      <div
        className={`${pageRailClassName} relative flex h-14 items-center justify-between gap-4 sm:h-16`}
      >
        <motion.div
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
          className="hidden items-center md:flex"
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
            <motion.li variants={menuItem} className="relative z-10 ml-2 lg:ml-3">
              <MotionLink
                href="/contact"
                variant="pill"
                className="inline-flex h-10 items-center rounded-full bg-electric px-5 text-sm font-medium tracking-tight text-white transition-colors duration-[var(--ease)] hover:bg-electric-hover lg:h-11"
                data-testid="header-cta"
              >
                Request Access
              </MotionLink>
            </motion.li>
          </motion.ul>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
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
