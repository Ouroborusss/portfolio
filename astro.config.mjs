// @ts-check
import { defineConfig } from 'astro/config';

// GITHUB PAGES CONFIG
// For a user site (username.github.io): set `site` to your full Pages URL and
// leave `base` as '/'. This is the default — swap in your real username below.
//
// For a project site (username.github.io/repo-name): also set `base` to '/repo-name'.
// See ticket 02 (02-github-pages-repo.md) for the final values.
const GITHUB_USERNAME = 'YOUR_USERNAME'; // ← replace with your GitHub username (ticket 02)

export default defineConfig({
  site: `https://${GITHUB_USERNAME}.github.io`,
  // base: '/',  // keep default for user site; set to '/repo-name' for project site
  output: 'static',
});
