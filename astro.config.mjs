import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sanity from "astro-sanity";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), react(), sanity({
    projectId: "seu73xjg",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true
  })],
  adapter: vercel()
});