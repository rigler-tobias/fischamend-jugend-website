// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const LOW_PRIORITY_PATHS = ['/impressum', '/datenschutz', '/404'];

// https://astro.build/config
export default defineConfig({
  site: 'https://fischamender-jugend.at',
  base: '/',
  integrations: [
    sitemap({
      serialize(item) {
        const url = new URL(item.url);
        const isHome = url.pathname === '/';
        const isLowPriority = LOW_PRIORITY_PATHS.some((p) => url.pathname.startsWith(p));
        return {
          ...item,
          lastmod: new Date().toISOString(),
          priority: isHome ? 1.0 : isLowPriority ? 0.3 : 0.7,
          changefreq: isHome ? 'weekly' : 'monthly',
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
