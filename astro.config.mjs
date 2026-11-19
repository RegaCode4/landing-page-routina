import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://routina.web.id",
  output: "static",
  redirects: { "/": "/en/" },
});
