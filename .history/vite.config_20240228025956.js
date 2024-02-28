import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { SvgIcon } from '@mui/material'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    SvgIcon()
  ],
  // base: './'
  resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  }
})
