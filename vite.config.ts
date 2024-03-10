import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    environment: 'happy-dom'
  },
  server: {
    proxy: {
      '/steam':{
        target: "http://localhost:3001",
        changeOrigin: false,
        // rewrite: (path) => path.replace(/^\/api/,'')
      }
    }
  }
})
