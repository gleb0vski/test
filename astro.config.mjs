import { sanityIntegration } from '@sanity/astro';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    site: 'https://test-gleb.github.io',

    integrations: [
        sanityIntegration({
            projectId: '5lzavdfu',
            dataset: 'production',
            apiVersion: "2024-03-11",
            useCdn: false
        }),
    ],
   

});
