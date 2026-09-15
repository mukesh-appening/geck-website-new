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
| Accent display | **Nanum Myeongjo** | Hero “Agentic Commerce”, solution titles, large stats |
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
| Meta | 0.875–1rem, weight 500 | Labels (“Works with”, section chips) |

Letter-spacing: slightly tight on display (`-0.02em`); normal on body. Never skip heading levels.

## 4. Component Stylings

### Buttons
- **Primary (marketing):** Electric Signal fill, white label, **pill** (`rounded-full`) per Figma landing. Hover → Electric Deep.
- **Secondary / utility:** gently rounded (`10px`) for interior pages and forms.
- **Ghost:** Transparent, ink text, underline on hover for inline editorial links.

### Cards / containers
Default: **no cards in the hero**. Cards are allowed for interactive or carousel units (stats, solutions, testimonials): Pure Panel, light grey borders (`#D1D1D1` / `#A7A7A7`), radius `20px`, optional hard shadow `0 10px 0 rgba(0,0,0,0.08)`.

### Inputs
Hero brand field: full pill, light border `#C8C8C8`, hard shadow `0 6px 0 rgba(0,0,0,0.08)`, circular Electric submit. Interior forms keep `10px` radius.

### Navigation
Sticky bar with macOS-style glass on scroll: transparent at page top (hero rings show through), then clean `bg-white/92` + `backdrop-blur-2xl` + hairline `#E5E5E5` border. Nav uses pill hover chips and darker `#5C5C5C` text when frosted for contrast on dark sections. Logo left, links + pill CTA right. Real `<a href>` links.

## 5. Layout Principles

- **One composition** in the first viewport: GECK brand (logo), one headline composition, one supporting sentence, one CTA (brand insight field), atmosphere rings, partner strip.
- **One job per section:** one H2, one short support line, then content.
- Max content width ~72rem for prose blocks; solutions carousel may bleed wider.
- Vertical rhythm: section padding `4–6rem`.
- **Definition copy:** Figma `2802:4723` — justified Plus Jakarta up to `64px`, `leading-none`, `tracking-[-0.02em]`; lead **Bold 700** Electric, body **Medium 500** `#535353`. Stats row max `1213px`, cards ~`372px` with `48px` gaps; values Nanum Myeongjo ExtraBold `96px` centered; labels Plus Jakarta Medium `24px` centered (`tracking-[-0.02em]`). Emphasized card: electric border + `rgba(0,111,253,0.04)` wash + `0 10px` hard shadow.
- **Solution / spotlight media:** Full app screenshots (`public/media/*-full.jpg`) in a fixed `aspect-[21/10]` well with `object-contain` (never `object-cover`) so the UI is not cropped.
- **Shared page rail:** all marketing sections (header, hero, definition, solutions, impact, spotlight, footer) use the same horizontal container — `max-w-[95.3125rem]` (~1525px per Figma) with matching side padding (`PageRail` / `pageRailClassName`).
- Mobile: stack CTAs; preserve single H1; keep fact lists scannable.
- Motion: carousel scroll, CTA hover, form submit — ~180ms ease `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Hero rings:** exactly **two** discs (outer/middle), matched to [dev.geck.ai](https://dev.geck.ai/) login — white fill, `#ECECEC` border, hard bottom shadow, `ringOuterMove` / `ringMiddleMove`. Bleed under sticky header; clipped before the next section. Disabled under `prefers-reduced-motion`.
- **Interior pages:** Share `PageShell` with home — `PageRail`, chip eyebrow, soft hero rings under sticky header, centered H1 with electric accent, pill CTAs, `#D1D1D1` rounded content panels.
- **Motion system:** Framer Motion via `src/components/motion/*`. Prefer transform/opacity; respect `prefers-reduced-motion`.

## 6. SEO / AEO Content Patterns

Every indexable page must:
1. Expose **one H1** and logical H2/H3 hierarchy with stable `id`s for deep links.
2. Put **atomic facts** in the hero or immediately below (lists preferred).
3. Ship **JSON-LD** matching page type (`Organization`/`WebSite` on home, `FAQPage` on FAQ, `WebPage` elsewhere).
4. Include **title + meta description + canonical + OG/Twitter**.
5. Keep critical copy in **SSR HTML** (no client-only important text).
6. Provide **descriptive alt text** for meaningful images; decorative images `alt=""`.
7. Prefer citation-ready sentences: short, attributable, non-hype.

## 7. Agent Sync Rule

When changing visual decisions:
1. Update **this DESIGN.md** first (or in the same PR).
2. Mirror tokens in `src/app/globals.css`.
3. Do not invent one-off hex values in components.
