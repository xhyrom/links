import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  output: "static",
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
        },
      ],
      sitemap: true,
    }),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],
});
