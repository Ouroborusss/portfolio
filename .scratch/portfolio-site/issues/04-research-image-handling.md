# Research image handling for large Blender renders

Type: research
Status: resolved
Blocked by:

## Question

Determine the best approach for serving large Blender exports on a static Astro
site without wrecking load times.

- Astro `<Image>` / `astro:assets`: formats, responsive `srcset`, thumbnails vs
  full-res, lazy loading.
- Handling big PNG (and EXR-origin) exports: recommended max dimensions,
  compression, when to pre-process vs let Astro optimize at build.
- Lightbox implications: serving a high-res version on open while keeping grid
  thumbnails light.
- GitHub Pages size/perf considerations.

AFK: produce a markdown summary as a linked asset with a concrete
recommendation.

## Answer

Two-layer approach: master PNGs in `src/assets/renders/<series>/` (Sharp-processed
at build → grid thumbnails); pre-exported 1600px WebPs in `public/renders/full/`
(served verbatim → lightbox). Use `<Picture formats={['avif','webp']} layout="constrained">` for grid.
Global Sharp codec config in `astro.config.mjs` (webp effort 6, avif effort 4).
Export Blender renders as PNG, sRGB, ~3200px long edge as master; convert to 1600px WebP for lightbox slot.
Keep an eye on repo size if collection grows — master PNGs are 5–15 MB each.

Asset: `.scratch/portfolio-site/image-handling-research.md`
