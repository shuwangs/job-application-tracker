import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import csp from 'vite-plugin-csp-guard';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], 
  csp({
    policy: {
      'default-src': ["'self'"],
      'script-src': ["'self'", 'https://trusted-scripts.com'],
      'style-src': ["'self'", "'unsafe-inline'"] // Often needed for dynamic CSS libraries
    }
  })
],
build: {
  assetsInlineLimit: 0 // Optional: Disabling inlining can help with stricter CSP
}
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // or whatever port your express server runs on
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
