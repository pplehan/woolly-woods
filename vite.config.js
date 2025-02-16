import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/woolly-woods/",
  resolve: {
    alias: { // 2. 新增別名
    "@": path.resolve(__dirname, "./src"),
  },
},
})
