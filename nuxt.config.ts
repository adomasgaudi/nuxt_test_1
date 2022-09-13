import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  tailwindcss: {
    configPath: './tailwind.config.js',
    cssPath: './assets/css/tailwind.css',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
});
