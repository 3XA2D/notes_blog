import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://3xa2d.github.io',
  base: '/notes-blog',
  markdown: {
        remarkPlugins: [
            'remark-math',
        ],
        rehypePlugins: [
            ['rehype-katex', {
            // Katex plugin options
            }]
        ]
    },
});
