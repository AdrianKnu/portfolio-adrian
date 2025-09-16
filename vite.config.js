import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-adrian/', // 👈 nombre de tu repo
  plugins: [react()],
});
