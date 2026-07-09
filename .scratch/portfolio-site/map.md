# Portfolio Site Map

Label: wayfinder:map

## Destination

A live, deployed personal portfolio at `username.github.io` showcasing Blender
renders, built with Astro. Series-based organization (each series has its own
page, tagged Landscapes/Abstract), a gallery grid + full-screen lightbox with
minimal captions, a bold/artistic look with motion, plus About and
contact/social pages. New work is added by dropping images in a folder and
editing markdown frontmatter (Astro content collections, no CMS).

## Notes

- **Execution override**: This map carries the build to a deployed site, not
  just decisions. Tickets may *do* as well as *decide*.
- **Fixed constraints** (settled while charting): Astro; static output; GitHub
  Pages at `username.github.io`; series-based organization; gallery + lightbox;
  minimal captions (title + optional short caption); bold/artistic aesthetic
  with motion; About + contact/social pages; content-collection workflow
  (folder of images + markdown frontmatter, no CMS).
- **Domain model**: A Series has many Renders. A Tag is one of Landscapes /
  Abstract / Stills, applied at the Series level.
- **Skills**: use `/prototype` for the visual direction; `/grilling` +
  `/domain-modeling` as the default for decision tickets.

## Decisions so far

<!-- one line per closed ticket: gist of the answer, then the link -->

- [Prototype the bold/artistic visual direction](issues/03-prototype-visual-direction.md) — Earthen direction: brutalist uppercase type, near-black warm ground, muted moss-green accent, clean aligned grid, translucent frosted nav/chips/captions, square filter chips, three render categories (Landscapes / Abstract / Stills).
- [Scaffold the Astro project](issues/01-scaffold-astro-project.md) — Astro 7 + TS strict at repo root; `src/{pages,layouts,components,content/series,styles}`, `public/images`; static output; GitHub Pages `site` config with USERNAME placeholder; `npm run build` confirmed clean; first commit `a58bd09`.
- [Create the GitHub Pages repo and provide username](issues/02-github-pages-repo.md) — username: Ouroborusss; project site at https://Ouroborusss.github.io/portfolio; `site`+`base` finalized in astro.config.mjs; Pages source: GitHub Actions; remote `origin` wired.
- [Research image handling for large Blender renders](issues/04-research-image-handling.md) — two-layer approach: master PNGs in `src/assets/` (Sharp → thumbnails) + pre-exported 1600px WebPs in `public/renders/full/` (verbatim → lightbox); `<Picture formats={['avif','webp']} layout="constrained">`; global Sharp codec config; EXR → PNG → WebP pipeline; repo size watch at scale.
- [Define the content model and collections schema](issues/05-content-model-schema.md) — `src/content.config.ts` with Astro 7 glob loader; Series schema: title, tag (Landscapes|Abstract|Stills), order, description?, cover (path string), coverAlt, renders[]; images resolved via import.meta.glob in pages; example entry + ADDING-CONTENT.md guide; build confirmed clean `51eb862`.

## Not yet specified

<!-- in-scope fog; graduates into tickets as the frontier advances -->

- Polish pass: favicon, meta/OpenGraph share images, 404 page.
- Motion/interaction details of the gallery (depends on the visual-direction
  prototype outcome).
- Optional analytics.

## Out of scope

<!-- ruled beyond the destination; closed, never graduates -->

- Custom domain / DNS (starting on `github.io`; can be added later as a fresh
  effort).
- Any CMS, backend, or server-side feature (static only).
- Contact form requiring a backend (contact = social/email links).
- Blog.
