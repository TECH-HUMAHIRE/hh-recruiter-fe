import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), '');
    return {
        // vite config
        plugins: [
            react(),
            VitePWA(),
            ViteEjsPlugin({
                VITE_GTM_KEY: env.VITE_GTM_KEY,
                VITE_BASE_URL_API: env.VITE_BASE_URL_API,
                VITE_REDIRECT_URL: env.VITE_REDIRECT_URL,
                VITE_FIREBASE_API_KEY: env.VITE_FIREBASE_API_KEY,
                VITE_FIREBASE_AUTH_DOMAIN: env.VITE_FIREBASE_AUTH_DOMAIN,
                VITE_FIREBASE_DATABASE_URL: env.VITE_FIREBASE_DATABASE_URL,
                VITE_FIREBASE_PROJECT_ID: env.VITE_FIREBASE_PROJECT_ID,
                VITE_FIREBASE_STORAGE_BUCKET: env.VITE_FIREBASE_STORAGE_BUCKET,
                VITE_FIREBASE_MESSAGING_SENDER_ID:
                    env.VITE_FIREBASE_MESSAGING_SENDER_ID,
                VITE_FIREBASE_APP_ID: env.VITE_FIREBASE_APP_ID,
                VITE_FIREBASE_MEASUREMENT_ID: env.VITE_FIREBASE_MEASUREMENT_ID,
                VITE_GTM_KEY: env.VITE_GTM_KEY,
                VITE_MIDTRANS_CLIENT_KEY: env.VITE_MIDTRANS_CLIENT_KEY,
                VITE_FIREBASE_VAPID_KEY: env.VITE_FIREBASE_VAPID_KEY
            })
        ],
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true
                }
            }
        },
        optimizeDeps: {
            esbuildOptions: {
                plugins: [esbuildCommonjs(['midtrans-client'])]
            }
        }
    };
});
