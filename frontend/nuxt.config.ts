// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/main.css"],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxtjs/sanity",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxt/scripts",
  ],
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    apiVersion: process.env.NUXT_SANITY_API_VERSION || "2025-04-01",
    token: process.env.NUXT_SANITY_API_READ_TOKEN, // Only required when using a private dataset
    visualEditing: {
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL,
      zIndex: 51,
    },
  },
  runtimeConfig: {
    public: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["shallowequal", "lodash/startCase.js"],
    },
  },
  image: {
    format: ["webp"],
  },
  fonts: {
    defaults: {
      weights: [300, 500, 800],
      styles: ["normal"],
    },
    families: [
      { name: "Gravitica Mono", provider: "local" },
      { name: "Helvetica", provider: "local" },
    ],
    experimental: {
      processCSSVariables: true,
    },
  },

  site: {
    name: "Back to Badlands tour",
    description: "Back to Badlands tour",
    url: process.env.URL || "http://localhost:3000",
    indexable: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          href: "/icon.svg",
          type: "image/svg+xml",
          sizes: "any",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "any",
          href: "/icon-light.png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "any",
          href: "/icon-dark.png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          rel: "apple-touch-icon",
          sizes: "any",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        { name: "theme-color", content: "#efe3c7" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        { charset: "UTF-8" },
        { name: "apple-mobile-web-app-title", content: "Badlands Tour" },
        { name: "application-name", content: "Badlands Tour" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
      ],
    },

    scripts: {
      registry: {
        metaPixel: {
          id: ["336617377178130", "386920928936604"],
        },
      },
    },
  },
});
