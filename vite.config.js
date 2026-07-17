import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Đường dẫn tương đối: chạy được trên GitHub Pages với bất kỳ tên repo nào
  base: './',
})
