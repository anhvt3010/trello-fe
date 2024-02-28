import react from '@vitejs/plugin-react';
import svgr from '@vitejs/plugin-svgr';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  // base: './',
  resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  }
});
