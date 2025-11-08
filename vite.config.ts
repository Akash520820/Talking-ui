import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Talking-ui/',  // MUST match your GitHub repository name exactly (with capital T)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})