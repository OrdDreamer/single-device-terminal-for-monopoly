import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/single-device-terminal-for-monopoly/',
  plugins: [react()],
})
