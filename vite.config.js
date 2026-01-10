import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import {resolve,dirname} from "path"
import { fileURLToPath } from "url"
const root = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "#components": resolve(root, "src/components"),
      "#constants": resolve(root, "src/constants"),
      "#store": resolve(root, "src/store"),
      "#hoc": resolve(root, "src/hoc"),
      "#windows": resolve(root, "src/windows"),
    },
  },
  server: {
    port: 3000, // Change this to any port you want (e.g., 3000, 4000, 5174)
    watch: {
      usePolling: true,
    },
  },
});
