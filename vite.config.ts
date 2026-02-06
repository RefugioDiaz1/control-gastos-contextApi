import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
   server: {
    host: '0.0.0.0',   // 👈 permite acceso desde red
    port: 5173,        // opcional (por defecto 5173)
  }
})
