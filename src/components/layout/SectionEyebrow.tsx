import type { ReactNode } from "react";

type SectionEyebrowProps = {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Section eyebrow chip — spark lead + electric wash, shared across marketing pages.
 */
export function SectionEyebrow({
  children,
  tone = "light",
  className = "",
}: SectionEyebrowProps) {
  const isDark = tone === "dark";

  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.6875rem] font-semibold tracking-[0.06em] uppercase sm:gap-2.5 sm:px-4 sm:py-2 sm:text-[0.75rem] ${
        isDark
          ? "border border-white/15 bg-white/[0.06] text-[#D0D0D0] shadow-[0_4px_0_0_rgba(255,255,255,0.04)]"
          : "border border-electric/20 bg-[rgba(0,111,253,0.05)] text-electric shadow-[0_4px_0_0_rgba(52,79,254,0.08)]"
      } ${className}`}
    >
      <span
        className={`size-1.5 shrink-0 rounded-full sm:size-1.5 ${
          isDark ? "bg-spark" : "bg-spark"
        }`}
        aria-hidden
      />
      <span className="leading-none">{children}</span>
    </p>
  );
}
