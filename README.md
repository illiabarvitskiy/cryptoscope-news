# CryptoScope News

An English-language cryptocurrency education and editorial website built with React, TypeScript and Vite.

## Local development

Requirements: Node.js 22 or newer and npm.

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Project structure

- `src/main.tsx` — application shell, navigation, article rendering, metadata and page routes.
- `src/additionalArticles.ts` — evergreen explainers added to the editorial library.
- `src/types.ts` — shared article data type.
- `src/style.css` — responsive visual styling.
- `public/robots.txt` — crawler rules and sitemap reference.
- `public/sitemap.xml` — canonical site and article URLs.
- `public/_redirects` — Cloudflare Pages fallback for client-side routes.
- `public/favicon.svg` — site favicon.

## Adding or updating an article

Articles are stored as data objects. Keep each article original, specific and useful. Verify factual claims against primary sources; link to source documents in `sourceNote`. Do not invent breaking news, prices, trading volumes, quotes or company announcements. Use publication dates that reflect when an article was actually published, and update them only when the content has genuinely been reviewed or revised.

The site calculates the displayed reading time from each article's text. Article URLs are generated from titles, so changing a title also changes its URL; update `public/sitemap.xml` whenever the article set or slugs change.

## Cloudflare Pages

Recommended build configuration:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

Commits pushed to `main` should trigger a production deployment if the Cloudflare Pages project is connected to this repository. Verify the deployment result in Cloudflare Pages after significant changes.

## Editorial and advertising readiness

The website includes About, Contact, Privacy Policy, Terms of Use, Editorial Policy and Corrections Policy pages. Review all policies against the actual services used by the site. Before enabling analytics, newsletters or advertising, update the privacy disclosures and add any required consent mechanisms.

The presence of these pages does not guarantee Google AdSense approval. Publish useful original content, check every source link, test all routes and mobile layouts, and follow the current Google Publisher Policies.
