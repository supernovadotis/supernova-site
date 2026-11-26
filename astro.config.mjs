import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://supernova.is',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // The "Thank you" page lives at /thankful/. The product copy links to /thanks/,
  // so keep that route alive as a redirect rather than a 404.
  redirects: {
    '/thanks': '/thankful/',
  },
});
