import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.mjs",
  },
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
  },
});
