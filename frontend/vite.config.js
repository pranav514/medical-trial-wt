import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv"
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server : {
  //   proxy:{
  //     "/api/": process.env.BACKEND_URL,
  //     "/uploads/": process.env.BACKEND_UPLOAD_URL,
      
  //   }
  // }
})
