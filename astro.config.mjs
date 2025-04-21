import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://anishmariathasan.github.io', // your user‑page URL
  base: '/',                                   // root repo for user‑page—no repo name prefix
  integrations: [
    tailwind(),
  ],
});
