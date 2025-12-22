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
      // i18n (UI do Starlight) — define o idioma do site como pt-BR.
      // Como é um site monolíngue, usamos `root` para manter as URLs sem prefixo (/...
      // ao invés de /pt-br/...).
      locales: {
        root: {
          label: 'Português (Brasil)',
          lang: 'pt-BR',
        },
      },
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
              label: '🚧 EM BREVE',
              autogenerate: { directory: 'embreve' },
          },
      ],
      }), mdx(), markdoc()],

  vite: {
    plugins: [tailwindcss()],
  },
});