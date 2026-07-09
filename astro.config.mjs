// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages — project site at https://Ouroborusss.github.io/portfolio
export default defineConfig({
  site: 'https://Ouroborusss.github.io',
  base: '/portfolio',
  output: 'static',
  image: {
    service: {
      config: {
        jpeg: { mozjpeg: true },
        webp: { effort: 6, alphaQuality: 80 },
        avif: { effort: 4, chromaSubsampling: '4:2:0' },
        png:  { compressionLevel: 9 },
      },
    },
  },
});
