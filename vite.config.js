// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Change this to a single forward slash
  build: {
    outDir: 'docs',
  },
});
