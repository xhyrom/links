import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
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
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: false,
    }),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
        },
      ],
      sitemap: true,
    }),
    icon(),
  ],
});
