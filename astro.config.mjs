// @ts-check
import { defineConfig } from 'astro/config';

// Static single-page site. Tailwind 3 runs through PostCSS (postcss.config.js),
// which Astro's Vite pipeline picks up automatically.
// https://astro.build/config
export default defineConfig({
  // The old separate pages now live as sections on the home page.
  redirects: {
    '/clinic': '/#about',
    '/doctors': '/#doctors',
    '/treatments': '/#treatments',
    '/contact': '/#contact',
    '/achievements': '/',
  },
});
