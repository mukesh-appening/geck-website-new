"use client";

import Image from "next/image";
import Link from "next/link";
import { pageRailClassName } from "@/components/layout/PageRail";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer
      className="mt-auto border-t border-border-soft bg-surface"
      data-testid="site-footer"
    >
      <Reveal>
        <div
          className={`${pageRailClassName} flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between`}
        >
          <div>
            <Link
              href="/"
              aria-label="Geck home"
              className="relative block h-7 w-28 sm:h-8 sm:w-36"
            >
              <Image
                src="/brand/geck-logo.svg"
                alt="GECK"
                fill
                className="object-contain object-left"
                sizes="144px"
              />
            </Link>
            <p className="mt-3 max-w-sm text-sm font-medium tracking-tight text-[#B7B7B7]">
              {SITE.tagline}
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium tracking-tight text-[#535353]">
              {[
                { href: "/about", label: "About" },
                { href: "/#solutions", label: "Solutions" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy" },
                { href: "/llms.txt", label: "llms.txt" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative transition-colors hover:text-electric after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-electric after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Reveal>
      <div className="border-t border-border-soft">
        <p className={`${pageRailClassName} py-4 text-xs font-medium tracking-tight text-[#B7B7B7]`}>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
