import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  content: [
  "./index.html",        
  "./src/**/*.{vue,js,ts,jsx,tsx}",  
  ],
  base: '/portfolio/safia_lounassi/',
})