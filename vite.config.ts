import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { saveImagesPlugin } from './vite.saveImages'

export default defineConfig({
  plugins: [react(), saveImagesPlugin()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
})
