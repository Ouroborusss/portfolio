# Image Handling for Large Blender Renders

_Research summary for ticket 04. Asset of `.scratch/portfolio-site/issues/04-research-image-handling.md`._

---

## Recommendation (short form)

Store master PNGs in `src/assets/renders/` so Astro's Sharp can process them.
Use `<Picture formats={['avif','webp']}>` with `layout="constrained"` for grid
thumbnails. For lightbox full-res, serve a pre-exported WebP (max 1600px long
edge) from `public/renders/full/` — bypassing Sharp so the lightbox gets the
cleanest version without a double-encode.

---

## 1. Astro image pipeline (Astro 7 / Sharp)

Astro's built-in image service uses Sharp at build time. The stable `layout` prop
(since Astro 5.10, no flag needed) auto-generates `srcset` and `sizes`.

```astro
---
import { Picture } from 'astro:assets';
import cover from '../../assets/renders/alpine-dawn/cover.png';
---

<!-- Grid thumbnail — lazy loaded, constrained to container -->
<Picture
  src={cover}
  formats={['avif', 'webp']}
  layout="constrained"
  alt="Alpine Dawn"
/>

<!-- Hero / above-fold — eager + high priority -->
<Picture
  src={cover}
  formats={['avif', 'webp']}
  layout="full-width"
  loading="eager"
  fetchpriority="high"
  alt="Alpine Dawn"
/>
```

`<Picture>` emits a `<picture>` element with `<source>` tags for AVIF and WebP
and a PNG fallback — every browser gets the smallest format it supports.

**Key rules:**
- Images in `src/` → Sharp processes them. Images in `public/` → copied verbatim.
- `layout="constrained"` = scales down to fit container, never upscales. Correct for grid tiles.
- `layout="full-width"` = fills viewport width. Use for lightbox open state if the
  lightbox renders an `<Image>` directly. Alternatively, link `href` to the pre-exported
  WebP in `public/` (see §4).

---

## 2. Global Sharp codec config (Astro 6.1+, included in Astro 7)

Add to `astro.config.mjs` once — applies to every image at build:

```js
image: {
  service: {
    config: {
      jpeg: { mozjpeg: true },           // 5–10% smaller JPEGs, negligible build cost
      webp: { effort: 6, alphaQuality: 80 },  // slightly smaller WebP, tolerable build time
      avif: { effort: 4, chromaSubsampling: '4:2:0' },  // balanced AVIF
      png:  { compressionLevel: 9 },
    },
  },
},
```

AVIF is 20–30% smaller than WebP at equivalent quality. Per-image `quality` prop
still overrides global defaults.

---

## 3. Blender render workflow

### Output format

Blender exports: use **PNG (lossless, sRGB colour profile)**. Never commit EXR to
the repo — EXR files are huge and Sharp cannot read them directly.

### Colour space

Always tick **sRGB** in Blender's colour management before exporting. Linear/raw
colour looks washed-out in browsers.

### Resolution

| Use | Export dimensions |
|---|---|
| Master (stored in `src/`) | 2× display width → ~3200px long edge for a 1600px display target |
| Pre-exported lightbox WebP (in `public/`) | 1600px long edge |
| Grid thumbnail | Let Astro generate at build from the master |

Do not upscale. If a render is 1200px wide, let Astro serve it at 1200px — never
artificially inflate.

---

## 4. Two-layer approach for grid vs lightbox

The design has a **grid thumbnail** (fast, light) and a **lightbox full-res** (crisp
when opened). These have competing requirements, so serve them from different sources:

```
src/assets/renders/<series>/<slug>.png   ← master PNG, Sharp-processed → grid thumbnail
public/renders/full/<series>/<slug>.webp ← pre-exported WebP 1600px, served verbatim → lightbox src
```

The lightbox `<img>` or `<a href>` points to `/portfolio/renders/full/<series>/<slug>.webp`.
No double-encode, no build-time resize overhead for the full version.

**Why not put full-res in `src/` too?** Astro would re-encode it, which adds build time
and introduces a second lossy pass. For a render portfolio where quality matters, one
lossless-to-lossy conversion (at export time in Blender/Squoosh) is enough.

---

## 5. File budget and GitHub Pages limits

| GitHub Pages limit | Value |
|---|---|
| Published site size | 1 GB hard |
| Repo size | 1 GB recommended |
| Bandwidth | 100 GB/month soft |
| Deploy artifact | 1 GB recommended, 10 GB absolute |

**Practical budget for this portfolio:**

- Grid thumbnails (AVIF at build): ~15–30 KB each
- Lightbox WebP (1600px, pre-exported): ~150–250 KB each

With 100 renders: ~25 MB thumbnails + ~20 MB full-res WebPs ≈ **~45 MB total** in
`dist/`. Well inside the 1 GB limit.

**Watch the repo size**, not just `dist/`. Master PNGs at 3200px are ~5–15 MB each. With
100 renders that is 500 MB–1.5 GB in `src/`. If the collection grows large, consider
keeping master PNGs out of git history (Git LFS or a separate `renders-source` repo)
and only committing the pre-exported 1600px WebPs to `public/`.

---

## 6. Concrete checklist for ticket 05 / 06

When the content schema and gallery are built, follow these decisions:

1. Image field in Series frontmatter → `cover: { src: string, alt: string }` referencing
   a file in `src/assets/renders/<series>/`.
2. Renders within a series → folder of PNGs in `src/assets/renders/<series>/` +
   an optional caption in the frontmatter list.
3. Lightbox `href` → `/portfolio/renders/full/<series>/<slug>.webp` (in `public/`).
4. Grid `<Picture>` → `layout="constrained"` with `formats={['avif','webp']}`, lazy load.
5. Series cover on home → `layout="constrained"` with `loading="eager"` on first visible
   cover, `loading="lazy"` on the rest.
6. Global Sharp config → add to `astro.config.mjs` in ticket 06 build.
