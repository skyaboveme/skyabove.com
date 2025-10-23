// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://skyabove.com',
  base: '/',
  integrations: [sitemap()],
  build: {
    // Inline small assets for better performance
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      // Optimize CSS
      cssCodeSplit: true,
      // Minify output with esbuild (faster than terser)
      minify: 'esbuild',
      // Target modern browsers for better optimization
      target: 'es2020',
    },
    esbuild: {
      // Drop console logs and debugger in production
      drop: ['console', 'debugger'],
    },
  },
});
