import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/car-rent1/",
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
    },
  },
});
