import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Evergreen-Quote-Capstone-Phase1/",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
