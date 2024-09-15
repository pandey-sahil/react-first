import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from outside the container
    port: process.env.PORT || 3000, // Uses Render's PORT or defaults to 3000 for local dev
  },
})
