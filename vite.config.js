import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/dev-gupta/', // change this to your repo name
  build: {
    outDir: 'docs',
  },
});
