import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import * as dotenv from 'dotenv';

dotenv.config(); // Carica le variabili d'ambiente dal file .env

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Aggiorna automaticamente il Service Worker
      manifest: {
        name: "Infirmière",
        short_name: "Infirmière",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          { src: "icons/icon-48x48.png", sizes: "48x48", type: "image/png" },
          { src: "icons/icon-72x72.png", sizes: "72x72", type: "image/png" },
          { src: "icons/icon-96x96.png", sizes: "96x96", type: "image/png" },
          { src: "icons/icon-128x128.png", sizes: "128x128", type: "image/png" },
          { src: "icons/icon-144x144.png", sizes: "144x144", type: "image/png" },
          { src: "icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
          { src: "icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "icons/icon-256x256.png", sizes: "256x256", type: "image/png" },
          { src: "icons/icon-384x384.png", sizes: "384x384", type: "image/png" },
          { src: "icons/icon-512x512.png", sizes: "512x512", type: "image/png" }
        ],
        version: process.env.VITE_APP_VERSION || "1.0.0", // Usa import.meta.env per leggere la versione
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true, // Forza il nuovo Service Worker ad attivarsi immediatamente
      },
      devOptions: {
        enabled: true, // Abilita il PWA durante lo sviluppo
      },
    }),
  ],
});