import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages project site: https://wedbata.github.io/mcg-live/
  base: '/mcg-live/',
  plugins: [react()],
})
