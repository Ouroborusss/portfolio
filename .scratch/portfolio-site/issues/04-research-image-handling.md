# Research image handling for large Blender renders

Type: research
Status: open
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
