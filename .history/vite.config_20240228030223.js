import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from '@vitejs/plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  // base: './'
  resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  }
})
