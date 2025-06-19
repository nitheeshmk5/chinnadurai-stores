import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    allowedHosts: [
      "35c2-2406-7400-ff03-d06a-9cfa-c2f1-708b-2779.ngrok-free.app", // your ngrok domain
    ],
    host: true, // allow external access (0.0.0.0)
    port: 5173, // optional: your dev server port
  },
});
