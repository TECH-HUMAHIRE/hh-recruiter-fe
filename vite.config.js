import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), '');
    return {
        // vite config
        plugins: [
            react(),
            ViteEjsPlugin({
                VITE_GTM_KEY: env.VITE_GTM_KEY,
                VITE_BASE_URL_API: env.VITE_BASE_URL_API,
                VITE_REDIRECT_URL: env.VITE_REDIRECT_URL
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
