import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      
    }
  },
  plugins: [
    react()
  ],
  server: {
    port: 7777,
    strictPort: true
  }
})
