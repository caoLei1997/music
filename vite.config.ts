import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import autoprefixer from 'autoprefixer';
// https://vitejs.dev/config/
export default defineConfig({
  //插件
  plugins: [
    // react渲染插件
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
  ],
  // css
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['ie >= 8', '> 1%'],
        }),
      ],
    },
  },
  // 别名
  resolve: {
    alias: {
      '@/assets': path.join(__dirname, 'src/assets'),
      '@/components': path.join(__dirname, 'src/components'),
      '@/hooks': path.join(__dirname, 'src/hooks'),
      '@/utils': path.join(__dirname, 'src/utils'),
      '@/pages': path.join(__dirname, 'src/pages'),
      '@/api': path.join(__dirname, 'src/api'),
    },
  },
});
