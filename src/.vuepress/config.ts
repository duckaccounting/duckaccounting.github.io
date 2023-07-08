import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Duck Accounting",
      description: "Duck Accounting - accounting made easy",
    },
    "/de/": {
          lang: "de-DE",
          title: "Duck Accounting",
          description: "Duck Accounting - Buchhaltung einfach gemacht",
        },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
