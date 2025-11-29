import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // 构建输出目录
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
  },
});