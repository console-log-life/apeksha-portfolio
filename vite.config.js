import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("@react-three") || id.includes("three")) {
            return "three-stack";
          }

          if (id.includes("framer-motion") || id.includes("gsap")) {
            return "motion-stack";
          }

          if (id.includes("react-icons")) {
            return "icon-stack";
          }

          if (id.includes("react-router") || id.includes("react-dom") || id.includes("react/")) {
            return "react-stack";
          }

          return undefined;
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
