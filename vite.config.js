import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
<<<<<<< HEAD
  base: "/woolly-woods/",
=======
  base: '/woolly-woods/',
>>>>>>> 22b0264 (Fix resource paths for GitHub Pages)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
