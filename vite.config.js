import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
import sass from '@vitejs/plugin-sass';

export default defineConfig({
  plugins: [
    sass(),
    react(),
  ],
});

