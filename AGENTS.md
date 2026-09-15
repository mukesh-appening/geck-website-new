<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Geck Website — Agent Operating Manual

This repo is the public **geck-website** marketing surface. Agents must follow **ADLC** (Agent Development Lifecycle) below, plus rules in `.cursor/rules/`.

## Source-of-truth docs

| Doc | Purpose |
|-----|---------|
| `DESIGN.md` | Visual system, tokens, layout/content patterns |
| `src/app/globals.css` | CSS tokens mirroring DESIGN.md |
| `src/lib/site.ts` | Site URL, copy, indexable routes |
| `src/lib/seo.ts` | Metadata + JSON-LD helpers |
| `public/llms.txt` | Machine-readable site summary for answer engines |
| `.cursor/rules/*.mdc` | Enforceable agent rules |

## ADLC (required workflow)

Every non-trivial task must pass these stages. Skip only for pure typos.

### 1. Align
- Restate the user goal in one sentence.
- Read `DESIGN.md` before UI work; read `src/lib/site.ts` + SEO helpers before page/route work.
- Identify page type: HOME / ABOUT / FAQ / CONTACT / POLICY / OTHER.

### 2. Design
- Propose structure: routes, H1, sections, schemas, CTAs.
- No new hex/fonts outside DESIGN.md — extend DESIGN.md first if needed.
- First viewport: brand + one headline + one support line + CTA group + atmosphere (no dashboard clutter).

### 3. Implement
- Prefer App Router server components; keep critical copy in SSR HTML.
- Use `buildMetadata()` + `JsonLd` for every indexable page.
- Real `<Link href>` / `<a href>` for navigation (AXO-friendly).
- Stable `data-testid` on key landmarks; heading `id`s for deep links.
- Mirror any new indexable path in `INDEXABLE_PAGES`, sitemap (auto), and `public/llms.txt`.

### 4. Verify
- `npm run lint` and `npm run build` when changes affect routes/config.
- SEO/AEO checklist (minimum):
  - [ ] Single H1
  - [ ] Title + description + canonical
  - [ ] JSON-LD valid for page type
  - [ ] Facts/lists extractable without JS
  - [ ] Images have meaningful alt (or empty alt if decorative)
  - [ ] No accidental `noindex` on public pages
- Design checklist: tokens only, no cream+terracotta default kit, no purple glow kit.

### 5. Document
- Update DESIGN.md when visuals change.
- Update `llms.txt` when product positioning or indexable URLs change.
- Summarize what shipped and any follow-ups.

## Hard constraints

- Do not invent product claims absent from site copy / `llms.txt`.
- Do not block AI crawlers in `robots.ts` unless explicitly requested.
- Do not replace the Next.js agent rules block above.
