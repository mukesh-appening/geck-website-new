"use client";

/**
 * Concentric atmosphere rings — matched to https://dev.geck.ai/ login
 * (exactly two: `.ring-outer` / `.ring-middle`).
 */
export function HeroRings() {
  return (
    <div
      className="hero-rings pointer-events-none absolute inset-x-0 -top-14 bottom-0 z-[1] hidden items-center justify-center md:flex sm:-top-16"
      aria-hidden
      data-testid="hero-rings"
    >
      <div className="hero-ring hero-ring-outer" />
      <div className="hero-ring hero-ring-middle" />
    </div>
  );
}
