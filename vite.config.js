import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
// import eslintPlugin from 'vite-plugin-eslint' //导入包

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
        vue(),
        // 增加下面的配置项,这样在运行时就能检查eslint规范
        // eslintPlugin({
        //   include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
        // })
  ],
  server: {
    port: 2408,
    proxy: {
        '/use': {
          target: 'http://localhost:9002',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/use/, ''),
        },
    }
  },
  css: {
    preprocessorOptions: {
      // 全局样式引入
      scss: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
