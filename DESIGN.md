# Design System: Geck Website
**Project:** geck-website  
**Scope:** Public marketing site (SEO + AEO)  
**Token source:** `src/app/globals.css` (`:root` + `@theme`) — keep this file and CSS in sync.  
**Primary reference:** Figma `geck - Project 42` frame `2721:1462`.

## 1. Visual Theme & Atmosphere

Geck’s marketing surface is **crisp, white, and agent-commerce forward**. The mood is **clean product clarity**: pure white canvases, soft concentric ring atmosphere in the hero, Electric Signal blue for brand emphasis, and Spark orange as a rare accent. Density is **medium** — generous whitespace with citation-ready facts.

Atmosphere keywords: *precise, agentic, high-contrast, citation-ready, calm energy*.

Avoid: purple-indigo gradient kits, warm parchment + terracotta serif broadsheets, heavy glow stacks, dashboard chrome in the first viewport.

## 2. Color Palette & Roles

| Descriptive name | Hex | Role |
|------------------|-----|------|
| Deep Forest Ink | `#0E1A16` | Primary text, high-emphasis UI |
| Soft Canopy | `#24332C` | Secondary headlines |
| Pure Panel | `#FFFFFF` | Page background + content surfaces |
| White | `#FFFFFF` | On-primary CTA label (`text-white`) |
| Electric Signal | `#344FFE` | Brand, CTAs, accent headlines, focus rings |
| Electric Deep | `#2A3FD6` | Primary CTA hover |
| Spark Orange | `#FE7743` | Rare accent dots, caret emphasis, micro highlights |
| Forest Accent | `#1A6B4A` | Secondary actions, success |
| Forest Hover | `#14553A` | Secondary hover |
| Lime Pulse | `#81BF5A` | Legacy highlight token |
| Slate Ridge | `#47617B` | Tertiary labels |
| Gold Spark | `#EAE23E` | Rare emphasis only (never body text) |
| Border Moss | `#D9DFD8` | Hairline borders |
| Muted Fern | `#5C6B63` | Body secondary copy |
| Dim Leaf | `#8A968F` | Captions, meta |
| Neutral Mid | `#535353` | Marketing body / headline grey |
| Neutral Soft | `#B7B7B7` | Labels, muted marketing copy |

### Semantic
| Name | Hex | Role |
|------|-----|------|
| Danger Clay | `#C44040` | Errors |
| Warn Amber | `#B86E12` | Warnings |

## 3. Typography Rules

| Role | Family | Notes |
|------|--------|-------|
| Display / brand lockups | **Syne** | Wordmarks and editorial section titles where needed |
| Body / UI | **Plus Jakarta Sans** | Nav, body, forms, marketing support copy |
| Accent display | **Nanum Myeongjo** | Hero “Measurable Growth”, solution titles, large stats |
| Mono / facts | **Geist Mono** | Atomic facts, schema previews, codes |

Fonts are **self-hosted** via `@fontsource*` packages (not `next/font/google`) so Turbopack/dev does not depend on fonts.gstatic.com.

### Scale
| Level | Size / weight | Usage |
|-------|---------------|-------|
| Brand lockup | logo SVG (~36px tall) | Header |
| H1 accent | clamp 3–8rem, Nanum ExtraBold | Hero product phrase |
| H2 | 2–3rem, Jakarta Medium/SemiBold | Section titles |
| H3 | 1.75–3rem, Nanum ExtraBold | Solution cards |
| Body | 1–1.25rem, weight 500 | Extractable prose |
| Meta | 0.875–1rem, weight 500 | Labels, section chips |

Letter-spacing: slightly tight on display (`-0.02em`); normal on body. Never skip heading levels.

## 4. Component Stylings

### Eyebrows / section chips
`SectionEyebrow`: pill with spark lead dot, electric wash (`rgba(0,111,253,0.05)`), electric hairline border, hard offset `0 4px`, uppercase tracking. Dark tone uses white/6 wash + spark. Shared via `src/components/layout/SectionEyebrow.tsx`.

### Buttons
- **Primary (marketing):** Electric Signal fill, white label, **pill** (`rounded-full`) per Figma landing. Hover → Electric Deep.
- **Secondary / utility:** gently rounded (`10px`) for interior pages and forms.
- **Ghost:** Transparent, ink text, underline on hover for inline editorial links.

### Cards / containers
Default: **no cards in the hero**. Cards are allowed for interactive or carousel units (stats, solutions, testimonials): Pure Panel, light grey borders (`#D1D1D1` / `#A7A7A7`), radius `20px`, optional hard shadow `0 10px 0 rgba(0,0,0,0.08)`.

### Inputs
Interior forms: `10px` radius, light border, Electric focus. (Hero no longer uses a brand insight field.)

### Navigation
Sticky bar with macOS-style glass on scroll: transparent at page top (hero rings show through), then clean `bg-white/92` + `backdrop-blur-2xl` + hairline `#E5E5E5` border. Desktop layout: **logo left**, **nav links centered**, **Request Access** pill CTA right (`grid` 1fr / auto / 1fr). Nav uses pill hover chips and darker `#5C5C5C` text when frosted for contrast on dark sections. Real `<a href>` links. Mobile keeps CTA + menu toggle on the right.

## 5. Layout Principles

- **One composition** in the first viewport: GECK brand (logo), package eyebrow (`AI TRANSFORM & GROWTH PARTNER`), package headline as a three-line lockup — soft Jakarta lead `Turn AI into`, then equal Nanum electric display lines `working systems` / `and measurable growth.`, one support sentence, CTA pair, spark microcopy, atmosphere rings. No brand input or partner strip. From `sm` up, sticky header + hero lock to one viewport (`h-dvh` / `max-h-dvh`, overflow clipped). On mobile, hero is content-height with smaller type and looser rhythm.
- **One job per section:** one H2, one short support line, then content.
- Max content width ~72rem for prose blocks; solutions carousel may bleed wider.
- Vertical rhythm: section padding `4–6rem`.
- **Definition copy:** Figma `2802:4723` — justified Plus Jakarta up to `64px`, `leading-none`, `tracking-[-0.02em]`; lead **Bold 700** Electric, body **Medium 500** `#535353`. Locked to **4 lines** via hard breaks matching Figma wrap. Stats row max `1213px`, cards ~`372px` with `48px` gaps; values Nanum Myeongjo ExtraBold `96px` centered; labels Plus Jakarta Medium `24px` centered (`tracking-[-0.02em]`). Emphasized card: electric border + `rgba(0,111,253,0.04)` wash + `0 8px` hard shadow. Muted cards match on hover; all cards spring-lift (`y: -6`, slight scale) so border + shadow transform together.
- **Solution / spotlight media:** Full app screenshots (`public/media/*-full.jpg`) in a fixed `aspect-[21/10]` well with `object-contain` (never `object-cover`) so the UI is not cropped.
- **Shared page rail:** all marketing sections (header, hero, definition, solutions, impact, spotlight, footer) use the same horizontal container — `max-w-[95.3125rem]` (~1525px per Figma) with matching side padding (`PageRail` / `pageRailClassName`).
- Mobile: stack CTAs; preserve single H1; keep fact lists scannable.
- Motion: carousel scroll (solutions infinite loop via triple-cloned track + silent re-center; auto-advance ~4.2s; pauses on hover/focus / reduced-motion), CTA hover, form submit — ~180ms ease `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Hero rings:** exactly **two** discs (outer/middle) — larger radii (`~1580` / `~1280`) so arcs clear package headline copy; transparent fill + `#ECECEC` border so lines continue through the sticky header at page top; hard bottom shadow; `ringOuterMove` / `ringMiddleMove`. Bleed under sticky header (`-top` into header band); frost glass only after scroll. Disabled under `prefers-reduced-motion`.
- **Hero headline:** Three-line lockup — soft lead `Turn AI into`, then matching Nanum ExtraBold electric lines for `working systems` and `and measurable growth.`; word-fade on the final line; respects `prefers-reduced-motion`.
- **Interior pages:** Share `PageShell` with home — `PageRail`, chip eyebrow, soft hero rings under sticky header, centered H1 with electric accent, pill CTAs, `#D1D1D1` rounded content panels.
- **Motion system:** Framer Motion via `src/components/motion/*`. Prefer transform/opacity; respect `prefers-reduced-motion`.
- **Smooth scroll:** Lenis inertia scrolling site-wide (`SmoothScroll`) + Framer `Reveal` (`fadeUpSoft` blur/slide) on section enter; thin electric `ScrollProgress` bar. Disabled under reduced motion.

## 6. SEO / AEO Content Patterns

Every indexable page must:
1. Expose **one H1** and logical H2/H3 hierarchy with stable `id`s for deep links.
2. Put **atomic facts** in the hero or immediately below (lists preferred).
3. Ship **JSON-LD** matching page type (`Organization`/`WebSite` on home, `FAQPage` on FAQ, `WebPage` elsewhere).
4. Include **title + meta description + canonical + OG/Twitter**.
5. Keep critical copy in **SSR HTML** (no client-only important text).
6. Provide **descriptive alt text** for meaningful images; decorative images `alt=""`.
7. Prefer citation-ready sentences: short, attributable, non-hype.

## 7. Brand Kit page

Public live reference: `/typography` (`src/app/typography/page.tsx`). Shows typefaces, type scale, color swatches, buttons, inputs, chips, and surface patterns. Keep that page in sync when tokens or component recipes change.

## 8. Homepage & classic route

- **Home (`/`):** `VersionHome` — package hero via `HomeHero` (eyebrow + redesigned headline + CTA pair); below-the-fold IA from Website Copy Package (engage, 5 solutions including Voice & Video Agents, products slider with **3 cards visible** by default, finite scroll only — no infinite loop, services, loop, closing CTA). Engage cards use blue active border/CTA on hover only.
- **Products (`/products`):** Expanded lineup (Growth, Voice, Vision, DROSS, Test).
- **Classic (`/v1`):** Previous homepage (definition, solutions carousel, impact, spotlight).
- **`/v2`:** Permanent redirect to `/`.

Premium craft notes: engage cards activate blue border + primary CTA on hover; first product with electric border / hard offset; soft `#FAFAFA` products band; dark services band (`#1A1A1E`); numbered loop discs on a hairline rail; closing CTA stage with ring atmosphere and hard shadow. Product wells use animated geometric art (decorative, not product claims).

## 9. Agent Sync Rule

When changing visual decisions:
1. Update **this DESIGN.md** first (or in the same PR).
2. Mirror tokens in `src/app/globals.css`.
3. Update `/typography` when recipes change.
4. Do not invent one-off hex values in components.
