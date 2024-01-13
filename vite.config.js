import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Define your manual chunks here if needed
        },
      },
    },
    chunkSizeWarningLimit: 5000, // Adjusted chunk size warning limit to 2000 kBs
  },
});
