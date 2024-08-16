import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://newmanls.github.io',
    //base: '/blog-seguridad-informatica', // habilitar para github pages
    integrations: [mdx(), sitemap()],
});
