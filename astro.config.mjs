import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  plugins: ['prettier-plugin-astro'],
  overrides: [{
    files: '*.astro',
    options: {
      parser: 'astro'
    }
  }]
});
