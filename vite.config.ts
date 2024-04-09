import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
  ],
  base: './',
  build: {
    // Настройки сборки
    target: 'modules', // Цель сборки - модули JavaScript
    outDir: 'dist', // Папка для собранных файлов
    assetsDir: '', // Папка для статических ресурсов (например, изображения)
    sourcemap: true, // Генерировать sourcemaps для отладки
    minify: 'terser', // Минимизация кода с помощью Terser
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
