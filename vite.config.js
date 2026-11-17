import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// SINGLE=1 npm run build  ->  un único index.html con todo inline (útil para previsualizar).
const single = process.env.SINGLE === "1";

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), ...(single ? [viteSingleFile()] : [])],
});
