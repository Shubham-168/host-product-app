import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "hostApp",
      remotes: {
        remoteApp: "https://remote-product-app.vercel.app/assets/remoteEntry.js"
      },
      shared: ["react", "react-dom", "react-redux", "@reduxjs/toolkit"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
