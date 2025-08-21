import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      include: /\.(js|jsx|ts|tsx)$/
    })
  ],
  base: process.env.BASE_PATH || '/',
  server: {
    port: 3000,
    open: false
  },
  build: {
    outDir: 'dist'
  }
});