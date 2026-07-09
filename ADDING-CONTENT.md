# Adding a new series or render

## Folder layout

```
src/
  assets/renders/<series-slug>/
    cover.png          ← cover image (≥3200px long edge, PNG, sRGB)
    render-01.png      ← individual renders, same spec
    render-02.png
    …
  content/series/
    <series-slug>.md   ← series metadata + render list

public/renders/full/<series-slug>/
    render-01.webp     ← pre-exported 1600px WebP (lightbox source)
    render-02.webp
    …
```

## Step-by-step

### 1. Export your renders from Blender

- Format: PNG, colour space: **sRGB**
- Resolution: ~3200px on the long edge (2× the 1600px display target)
- Save to `src/assets/renders/<your-series-slug>/`
- Also export a **cover image** for the series home grid

### 2. Create 1600px lightbox WebPs

Convert each master PNG to a 1600px-wide WebP for the lightbox slot.
Using [Squoosh CLI](https://github.com/GoogleChromeLabs/squoosh/tree/dev/cli)
or any image tool:

```bash
# example with ffmpeg
ffmpeg -i render-01.png -vf scale=1600:-1 -quality 82 render-01.webp
```

Save them to `public/renders/full/<your-series-slug>/`.

### 3. Create the series markdown file

Copy `src/content/series/example-series.md` to
`src/content/series/<your-series-slug>.md` and fill in:

```yaml
---
title: "Your Series Title"
tag: "Landscapes"          # one of: Landscapes | Abstract | Stills
order: 2                   # controls home grid sort; lower = first
description: "Optional one-liner shown on the series page."
cover: "cover.png"
coverAlt: "Describe the cover for screen readers"
renders:
  - src: "render-01.png"
    alt: "Describe this render"
    caption: "Optional lightbox caption."
    fullSrc: "/portfolio/renders/full/<slug>/render-01.webp"
  - src: "render-02.png"
    alt: "Describe this render"
    fullSrc: "/portfolio/renders/full/<slug>/render-02.webp"
---
```

### 4. Build and preview locally

```bash
nvm use 22
npm run dev
```

Open `http://localhost:4321/portfolio` to check the series appears and images load.

### 5. Publish

```bash
git add .
git commit -m "add series: Your Series Title"
git push
```

GitHub Actions will build and deploy automatically.

---

## Notes

- `order` controls the sort on the home grid. Re-number to reorder.
- `caption` is optional — omit the line to show no caption in the lightbox.
- `description` is optional — omit the line to show no description on the series page.
- Image files in `src/assets/` are processed by Sharp at build time (compressed,
  responsive `srcset` generated). Files in `public/` are copied verbatim.
- Keep master PNGs in `src/assets/` — they will not be served directly. Only the
  Sharp-optimised variants end up in `dist/`.
