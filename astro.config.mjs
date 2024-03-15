import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify/functions';


import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  // adapter: vercel(),
  adapter: netlify({
    edgeMiddleware: true
  }),
  server: (command) => ({ port: command === 'dev' ? 4231 : 4000, host: true })
});