import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  adapter: vercel({
    analytics: true,
  }),
  integrations: [tailwind()],
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
});
