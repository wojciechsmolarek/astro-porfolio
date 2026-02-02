// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://wojciechsmolarek.pl',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // We'll use our own global.css
    })
  ],
  output: 'static',
  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: true,
    },
  },
});