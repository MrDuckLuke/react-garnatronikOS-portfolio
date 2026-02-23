import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5174'
      },
      '/images': {
        target: 'http://localhost:5174'
      }
    },
    host: true
  },
  base: process.env.VITE_BASE_PATH || "/react-garnatronikOS-portfolio"
})
