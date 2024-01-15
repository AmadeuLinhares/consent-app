/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/dist/config'
import viteConfig from './vite.config'
export default defineConfig({
      test: {
      exclude: ['packages/template/*'],
      globals: true,
      environment: 'jsdom',
      watch: false,
      setupFiles: ['./setupTests.ts'],
    },
})