import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Sitio de usuario (https://efrxngg.github.io/) o dominio propio: la base es '/'.
  // Si fuera un repo de proyecto (https://efrxngg.github.io/<REPO>/) seria '/<REPO>/'.
  base: '/',
})
