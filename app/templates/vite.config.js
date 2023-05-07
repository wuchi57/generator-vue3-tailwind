import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      dts: resolve(__dirname, 'src/auto-imports.d.ts'),
    }),
    Components({
      dts: resolve(__dirname, 'src/components.d.ts'),
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'components': resolve(__dirname, 'src/components'),
      'api': resolve(__dirname, 'src/api'),
      'assets': resolve(__dirname, 'src/assets'),
      'router': resolve(__dirname, 'src/store'),
      'store': resolve(__dirname, 'src/store'),
      'styles': resolve(__dirname, 'src/styles'),
      'hooks': resolve(__dirname, 'src/hooks'),
      'views': resolve(__dirname, 'src/views'),
      'layout': resolve(__dirname, 'src/layout'),
      'utils': resolve(__dirname, 'src/utils'),
      'plugins': resolve(__dirname, 'src/plugins'),
      'dirs': resolve(__dirname, 'src/directives'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    hmr: true,
    https: false,
    port: 3000,
    host: '0.0.0.0',
    open: true,
    cors: true,
    proxy: {}
  },
})
