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
