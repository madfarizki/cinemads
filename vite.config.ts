import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import * as url from "url";

const dirName = url.fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/components": path.resolve(dirName, "src/components/"),
    },
  },
  server: {
    port: 3000,
  },
});
