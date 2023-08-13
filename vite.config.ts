import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  envDir: './env',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/mixin.scss";',
      },
    },
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  plugins: [react(), eslint()],
});
