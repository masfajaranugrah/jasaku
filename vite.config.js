import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    devSourcemap: false,
  },
  server: {
    host: '192.168.1.22', // or '0.0.0.0' to allow connections from any host
    port: 5173, // or your preferred port
  },
});
