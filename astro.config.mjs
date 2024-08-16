import { defineConfig } from 'astro/config';
import { visit } from 'unist-util-visit';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

function addBaseUrlToMarkdownLocalUrls() {
    function visitor(node) {
        if (node.url.startsWith('http') || node.url.startsWith('/images/')) {
            return
        }

        if (node.url.startsWith('/')) {
            node.url = '/blog-seguridad-informatica' + node.url
        }
    }

    function transform(tree) {
        visit(tree, 'image', visitor)
    }

    return transform
}

// https://astro.build/config
export default defineConfig({
    site: 'https://newmanls.github.io',
    base: '/blog-seguridad-informatica',
    integrations: [mdx(), sitemap()],
    markdown: {
        remarkPlugins: [[addBaseUrlToMarkdownLocalUrls, {}]],
    },
});
