// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      customCss: ['./src/styles/global.css'],
      title: 'Bolls.Tech',
      logo: {
        src: "/public/logo.png",
      },
      social: [
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://bolls.tech/discord',
        },
      ],
      sidebar: [
          {
              label: 'Guides',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: 'Example Guide', slug: 'guides/example' },
              ],
          },
          {
              label: 'Reference',
              autogenerate: { directory: 'reference' },
          },
          {
            label: 'Testes',
            autogenerate: { directory: 'teste' },
          }
      ],
      }), mdx(), markdoc()],

  vite: {
    plugins: [tailwindcss()],
  },
});