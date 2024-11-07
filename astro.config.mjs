import { sanityIntegration } from '@sanity/astro';
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://gleb0vski.github.io/test/',
  integrations: [sanityIntegration({
    projectId: '5lzavdfu',
    dataset: 'production',
    apiVersion: "2024-03-11",
    useCdn: false
  }), tailwind()]
});
