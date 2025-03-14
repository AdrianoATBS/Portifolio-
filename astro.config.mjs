import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeAccessibleEmojis],
  },
  site: 'https://astro-portfolio-template.pages.dev',
  integrations: [tailwind(), react(), robotsTxt(), sitemap()],
  devToolbar: {
    enabled: false  // Desativa a barra de ferramentas do Astro
  }
});