import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import * as path from 'path'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, `./src/pages`),
      '@components': path.resolve(__dirname, `./src/components`),
      '@router': path.resolve(__dirname, `./src/router`),
      '@api': path.resolve(__dirname, `./src/api`),
      '@storage': path.resolve(__dirname, `./src/storage`),
      '@layouts': path.resolve(__dirname, `./src/layouts`),
      '@theme': path.resolve(__dirname, `./src/theme`),
      '@configs': path.resolve(__dirname, `./src/configs`),
      '@axios': path.resolve(__dirname, `./src/axios`),
    },
  },
})
