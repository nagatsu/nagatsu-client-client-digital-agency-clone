import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        // CSP対応: evalを完全に無効化
        generatedCode: {
          preset: 'es2015'
        },
        // Railway環境での安定性向上
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
  // Railway環境での設定
  base: './',
  define: {
    // 本番環境でのVue.js devtools無効化
    __VUE_PROD_DEVTOOLS__: false,
    // HMR無効化（本番環境）
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  }
})