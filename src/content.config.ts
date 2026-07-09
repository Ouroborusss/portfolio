import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const TAG = z.enum(['Landscapes', 'Abstract', 'Stills']);

/**
 * A single render within a series.
 *
 * `src`     — path relative to src/assets/renders/<series>/ (used via import.meta.glob
 *             in page components so Sharp can process it into optimised grid thumbnails)
 * `fullSrc` — absolute URL path to the pre-exported 1600px WebP in public/renders/full/
 *             served verbatim as the lightbox full-res source
 */
const renderSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
  fullSrc: z.string(),
});

const seriesCollection = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/series',
  }),
  schema: z.object({
    title: z.string(),
    tag: TAG,
    /** Lower numbers appear first on the home grid */
    order: z.number().int().positive(),
    description: z.string().optional(),
    /**
     * Path relative to src/assets/renders/<series>/ for the cover image.
     * Resolved via import.meta.glob in pages — allows Sharp optimisation.
     */
    cover: z.string(),
    coverAlt: z.string(),
    renders: z.array(renderSchema),
  }),
});

export const collections = {
  series: seriesCollection,
};

export type Tag = z.infer<typeof TAG>;
export type Render = z.infer<typeof renderSchema>;
