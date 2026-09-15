# geck-website

Public marketing site for **Geck** — Next.js App Router, Tailwind CSS v4, SEO + AEO foundations, and an agent ADLC rule set.

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production URL: set `NEXT_PUBLIC_SITE_URL` (no trailing slash) before build/deploy.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4 (tokens in `src/app/globals.css`)
- Design system: `DESIGN.md`

## SEO / AEO built-ins

| Artifact | Path |
|----------|------|
| Metadata helpers | `src/lib/seo.ts` |
| Site + indexable routes | `src/lib/site.ts` |
| `sitemap.xml` | `src/app/sitemap.ts` |
| `robots.txt` | `src/app/robots.ts` |
| `llms.txt` | `public/llms.txt` |
| JSON-LD | `src/components/seo/JsonLd.tsx` |
| OG image | `src/app/opengraph-image.tsx` |

Routes: `/`, `/about`, `/faq`, `/contact`, `/privacy`.

## Agent ADLC

Agents follow **Align → Design → Implement → Verify → Document**.

- Manual: `AGENTS.md`
- Rules: `.cursor/rules/` (`adlc`, `design-system`, `seo-aeo`, `nextjs`)

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
