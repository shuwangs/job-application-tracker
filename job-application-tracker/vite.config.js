import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import csp from 'vite-plugin-csp-guard';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    csp({
      // The options for dev mode are nested under a 'dev' key
      dev: {
        run: true, // Set to true to run in development mode (optional)
      },
      policy: {
        'default-src': ["'self'"], // Allow content from the same origin
        'script-src': ["'self'", 'https://cdn.example.com'], // Allow scripts from your CDN
        'style-src': ["'self'", "'unsafe-inline'"], // Might need 'unsafe-inline' for some dynamic styles
        // Note: 'unsafe-inline' is generally discouraged due to security risks
        'connect-src': ["'self'", 'ws://localhost:*'] // Essential for Vite HMR in dev
      },
      // Other build options for CSP might be needed here depending on your setup
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // or whatever port your express server runs on
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    // Disabling asset inlining can help with stricter CSP rules
    assetsInlineLimit: 0
  }
});