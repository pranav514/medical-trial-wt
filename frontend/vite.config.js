import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    proxy:{
      "/api/": "https://medical-trial-wt.onrender.com/",
      "/uploads/": "https://medical-trial-wt.onrender.com/",
      
    }
  }
})
