"use client";

/**
 * Concentric atmosphere rings — matched to https://dev.geck.ai/ login
 * (exactly two: `.ring-outer` / `.ring-middle`).
 */
export function HeroRings() {
  return (
    <div
      className="hero-rings pointer-events-none absolute inset-0 z-0 hidden items-center justify-center overflow-hidden md:flex"
      aria-hidden
      data-testid="hero-rings"
    >
      <div className="hero-ring hero-ring-outer" />
      <div className="hero-ring hero-ring-middle" />
    </div>
  );
}
