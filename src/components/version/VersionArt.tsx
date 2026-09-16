"use client";

import { motion, useReducedMotion } from "framer-motion";

type ArtProps = {
  className?: string;
};

/** Soft floating rings for section atmosphere — decorative only. */
export function SectionOrbits({ className = "" }: ArtProps) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <motion.div
        className="absolute -left-28 top-10 size-64 rounded-full border border-[#ECECEC] bg-white/40 sm:-left-36 sm:size-80"
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-48 bottom-[-15%] size-72 rounded-full border border-[#ECECEC] bg-white/50 sm:-right-64 sm:size-96"
        animate={reduce ? undefined : { y: [0, 10, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

type ProductArtKind = "growth" | "dross" | "voice" | "vision" | "test";

/** Animated product well art — unique silhouette per product family. */
export function ProductArt({
  kind,
  className = "",
}: {
  kind: ProductArtKind;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const accent = kind === "growth" || kind === "voice";

  return (
    <div
      className={`relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-[14px] transition-transform duration-[var(--ease)] group-hover:scale-[1.02] sm:mb-8 sm:rounded-[16px] ${
        accent
          ? "bg-[rgba(0,111,253,0.06)] ring-1 ring-electric/25"
          : "bg-[#F5F5F5] ring-1 ring-[#E8E8E8]"
      } ${className}`}
      aria-hidden
    >
      {kind === "growth" ? (
        <GrowthScene reduce={!!reduce} />
      ) : kind === "dross" ? (
        <DrossScene reduce={!!reduce} />
      ) : (
        <SimpleProductScene kind={kind} reduce={!!reduce} />
      )}
    </div>
  );
}

function GrowthScene({ reduce }: { reduce: boolean }) {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(52,79,254,0.1)_0%,transparent_48%,rgba(254,119,67,0.07)_100%)]" />
      <svg viewBox="0 0 480 270" className="absolute inset-0 h-full w-full" fill="none">
        {/* Soft field grid */}
        <path
          d="M40 54h400M40 108h400M40 162h400M40 216h400M96 30v210M192 30v210M288 30v210M384 30v210"
          stroke="#D8D8D8"
          strokeWidth="1"
          opacity="0.55"
        />

        {/* Radar rings */}
        <circle cx="168" cy="138" r="78" stroke="#344FFE" strokeWidth="1.25" opacity="0.22" />
        <circle cx="168" cy="138" r="52" stroke="#344FFE" strokeWidth="1.25" opacity="0.35" />
        <circle cx="168" cy="138" r="28" stroke="#344FFE" strokeWidth="1.5" opacity="0.5" />
        <circle cx="168" cy="138" r="7" fill="#344FFE" />

        {!reduce && (
          <motion.g
            style={{ transformOrigin: "168px 138px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
          >
            <path
              d="M168 138 L168 60 A78 78 0 0 1 240 168 Z"
              fill="url(#growthSweep)"
              opacity="0.55"
            />
          </motion.g>
        )}

        {/* Answer-engine nodes */}
        {[
          { x: 118, y: 88, delay: 0 },
          { x: 214, y: 96, delay: 0.4 },
          { x: 128, y: 188, delay: 0.8 },
          { x: 222, y: 176, delay: 1.2 },
        ].map((n) => (
          <motion.circle
            key={`${n.x}-${n.y}`}
            cx={n.x}
            cy={n.y}
            r="5"
            fill="#FE7743"
            animate={
              reduce
                ? undefined
                : { scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }
            }
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: n.delay,
            }}
          />
        ))}

        {/* Right: live signal bars */}
        <rect x="292" y="56" width="148" height="158" rx="14" fill="#FFFFFF" stroke="#E3E3E3" />
        <text x="312" y="82" fill="#B7B7B7" fontSize="11" fontFamily="system-ui">
          AI visibility
        </text>
        {[
          { x: 318, h: 72, delay: 0 },
          { x: 348, h: 98, delay: 0.2 },
          { x: 378, h: 56, delay: 0.4 },
          { x: 408, h: 84, delay: 0.6 },
        ].map((bar) => (
          <motion.rect
            key={bar.x}
            x={bar.x}
            width="18"
            rx="5"
            fill={bar.x === 348 ? "#FE7743" : "#344FFE"}
            initial={false}
            animate={
              reduce
                ? { y: 190 - bar.h, height: bar.h, opacity: 0.85 }
                : {
                    y: [190 - bar.h * 0.55, 190 - bar.h, 190 - bar.h * 0.7],
                    height: [bar.h * 0.55, bar.h, bar.h * 0.7],
                    opacity: [0.55, 0.95, 0.7],
                  }
            }
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bar.delay,
            }}
          />
        ))}

        <defs>
          <linearGradient id="growthSweep" x1="168" y1="60" x2="240" y2="168">
            <stop stopColor="#344FFE" stopOpacity="0.35" />
            <stop offset="1" stopColor="#344FFE" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

function DrossScene({ reduce }: { reduce: boolean }) {
  const nodes = [
    { x: 240, y: 48, r: 10, fill: "#344FFE" },
    { x: 140, y: 118, r: 8, fill: "#FFFFFF", stroke: "#344FFE" },
    { x: 240, y: 118, r: 8, fill: "#FFFFFF", stroke: "#344FFE" },
    { x: 340, y: 118, r: 8, fill: "#FE7743" },
    { x: 100, y: 198, r: 7, fill: "#FFFFFF", stroke: "#D1D1D1" },
    { x: 180, y: 198, r: 7, fill: "#FFFFFF", stroke: "#D1D1D1" },
    { x: 240, y: 198, r: 7, fill: "#FFFFFF", stroke: "#344FFE" },
    { x: 300, y: 198, r: 7, fill: "#FFFFFF", stroke: "#D1D1D1" },
    { x: 380, y: 198, r: 7, fill: "#FFFFFF", stroke: "#FE7743" },
  ];

  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(254,119,67,0.07)_0%,transparent_42%,rgba(52,79,254,0.08)_100%)]" />
      <svg viewBox="0 0 480 270" className="absolute inset-0 h-full w-full" fill="none">
        {/* Strategy board frame */}
        <rect x="36" y="28" width="408" height="214" rx="16" fill="#FFFFFF" stroke="#E3E3E3" />
        <text x="56" y="54" fill="#B7B7B7" fontSize="11" fontFamily="system-ui">
          GTM map
        </text>

        {/* Hierarchy links */}
        <path
          d="M240 58v50M140 118V58h200v60M140 126v64M240 126v64M340 126v64M100 198h80M180 198h60M240 198h60M300 198h80"
          stroke="#D8D8D8"
          strokeWidth="1.5"
        />

        {/* Flow pulse along primary path */}
        {!reduce && (
          <motion.circle
            r="4.5"
            fill="#344FFE"
            initial={{ cx: 240, cy: 48, opacity: 0 }}
            animate={{
              cx: [240, 240, 340, 380],
              cy: [48, 118, 118, 198],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {nodes.map((n, i) => (
          <motion.circle
            key={`${n.x}-${n.y}`}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.fill}
            stroke={n.stroke}
            strokeWidth={n.stroke ? 1.5 : 0}
            animate={
              reduce
                ? undefined
                : { scale: [1, 1.12, 1], y: [0, i % 2 === 0 ? -2 : 2, 0] }
            }
            transition={{
              duration: 2.6 + (i % 3) * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          />
        ))}

        {/* Playbook chips */}
        {[
          { x: 56, y: 228, w: 70, label: "Position" },
          { x: 138, y: 228, w: 78, label: "Message" },
          { x: 228, y: 228, w: 70, label: "Loops" },
        ].map((chip, i) => (
          <motion.g
            key={chip.label}
            animate={reduce ? undefined : { opacity: [0.45, 1, 0.45] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.45,
            }}
          >
            <rect
              x={chip.x}
              y={chip.y}
              width={chip.w}
              height="18"
              rx="9"
              fill={i === 1 ? "rgba(52,79,254,0.1)" : "#F5F5F5"}
              stroke={i === 1 ? "#344FFE" : "#E3E3E3"}
            />
          </motion.g>
        ))}
      </svg>
    </>
  );
}

function SimpleProductScene({
  kind,
  reduce,
}: {
  kind: "voice" | "vision" | "test";
  reduce: boolean;
}) {
  const label =
    kind === "voice" ? "Voice" : kind === "vision" ? "Vision" : "Test";

  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(52,79,254,0.08)_0%,transparent_50%,rgba(254,119,67,0.06)_100%)]" />
      <svg viewBox="0 0 480 270" className="absolute inset-0 h-full w-full" fill="none">
        <rect x="40" y="36" width="400" height="198" rx="16" fill="#FFFFFF" stroke="#E3E3E3" />
        <text x="60" y="68" fill="#B7B7B7" fontSize="11" fontFamily="system-ui">
          {label}
        </text>
        {kind === "voice" && (
          <>
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <motion.rect
                key={i}
                x={90 + i * 42}
                width="18"
                rx="9"
                fill={i === 3 ? "#FE7743" : "#344FFE"}
                animate={
                  reduce
                    ? { y: 170, height: 40 + (i % 3) * 16 }
                    : {
                        y: [190 - (36 + i * 8), 190 - (70 + (i % 4) * 14), 190 - (44 + i * 6)],
                        height: [36 + i * 8, 70 + (i % 4) * 14, 44 + i * 6],
                      }
                }
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.12,
                }}
              />
            ))}
          </>
        )}
        {kind === "vision" && (
          <>
            <rect x="70" y="90" width="160" height="110" rx="12" fill="#F5F7FF" stroke="#D8D8D8" />
            <rect x="250" y="90" width="160" height="50" rx="12" fill="#FFF6F2" stroke="#D8D8D8" />
            <rect x="250" y="150" width="160" height="50" rx="12" fill="#F5F5F5" stroke="#D8D8D8" />
            <motion.circle
              cx="150"
              cy="145"
              r="18"
              fill="#344FFE"
              animate={reduce ? undefined : { scale: [1, 1.12, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle cx="330" cy="115" r="8" fill="#FE7743" />
          </>
        )}
        {kind === "test" && (
          <>
            {[0, 1, 2, 3].map((i) => (
              <motion.g
                key={i}
                animate={reduce ? undefined : { opacity: [0.45, 1, 0.45] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.35,
                }}
              >
                <rect
                  x="70"
                  y={88 + i * 36}
                  width="340"
                  height="26"
                  rx="8"
                  fill="#FAFAFA"
                  stroke="#E3E3E3"
                />
                <circle cx="92" cy={101 + i * 36} r="6" fill={i % 2 === 0 ? "#344FFE" : "#FE7743"} />
              </motion.g>
            ))}
          </>
        )}
      </svg>
    </>
  );
}

/** Minimal solution mark — unique per index. */
export function SolutionMark({ index }: { index: number }) {
  const marks = [
    <svg key="a" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="6" y="6" width="28" height="28" rx="8" stroke="#344FFE" strokeWidth="1.5" />
      <path d="M14 26V14l12 12V14" stroke="#344FFE" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="b" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="20" cy="20" r="13" stroke="#344FFE" strokeWidth="1.5" />
      <path d="M13 22c2 3 5 5 7 5s5-2 7-5" stroke="#FE7743" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="20" cy="16" r="3" fill="#344FFE" />
    </svg>,
    <svg key="c" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path d="M10 28V12h8a6 6 0 010 12h-4" stroke="#344FFE" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="28" cy="14" r="3" fill="#FE7743" />
    </svg>,
    <svg key="d" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="8" y="10" width="24" height="20" rx="4" stroke="#344FFE" strokeWidth="1.5" />
      <path d="M14 20h12M14 25h8" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="26" cy="15" r="2" fill="#FE7743" />
    </svg>,
    <svg key="e" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="14" cy="20" r="5" stroke="#344FFE" strokeWidth="1.5" />
      <rect x="22" y="12" width="10" height="16" rx="2" stroke="#344FFE" strokeWidth="1.5" />
      <circle cx="27" cy="16" r="1.5" fill="#FE7743" />
    </svg>,
  ];
  return (
    <div className="flex size-12 items-center justify-center rounded-[14px] border border-[#E8E8E8] bg-[#FAFAFA] transition-colors duration-[var(--ease)] group-hover:border-electric/30 group-hover:bg-[rgba(0,111,253,0.04)]">
      {marks[index % marks.length]}
    </div>
  );
}
