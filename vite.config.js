import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Work around Vite 8 + package exports resolution issue for this package.
      "@splinetool/react-spline": fileURLToPath(
        new URL("./node_modules/@splinetool/react-spline/dist/react-spline.js", import.meta.url)
      ),
    },
  },
});
