import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      
    }
  },
  plugins: [
    react()
  ],
  build: {
    outDir: "dist",
    minify: "terser",
    assetsDir: "assets",
  },
  server: {
    port: 7777,
    strictPort: true
  }
})
