# Scaffold the Astro project

Type: task
Status: resolved
Blocked by:

## Question

Stand up a minimal, buildable Astro project as the foundation for everything
else.

- Initialize Astro with TypeScript.
- Establish the base folder structure (pages, layouts, components, content,
  public/assets).
- Configure `astro.config` with `site` and `base` appropriate for GitHub Pages
  (final `site` value depends on the username from ticket 02; use a placeholder
  and note where it plugs in).
- Confirm `npm run build` produces static output.
## Answer

Astro 7 + TypeScript strict, minimal template, scaffolded at repo root.

Folder layout:
- `src/pages/` — Astro pages
- `src/layouts/` — shared layout components
- `src/components/` — UI components
- `src/content/series/` — content collection for series/renders (ticket 05)
- `src/styles/` — global CSS
- `public/images/` — static render assets

`astro.config.mjs` configured for static GitHub Pages output. `site` is set to `https://YOUR_USERNAME.github.io` — replace with real username once ticket 02 is resolved. `output: 'static'` is explicit.

`npm run build` → clean static output in `dist/`, 1 page, 267ms. Node ≥22.12 required (use `nvm use 22`).

First commit: `a58bd09`.
