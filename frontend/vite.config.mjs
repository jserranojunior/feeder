import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite'

import path from 'path';
import { fileURLToPath } from 'url';
import daisyui from 'daisyui';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ command }) => {
  // Configurações comuns a todos os ambientes
  const commonConfig = {
    plugins: [
      vue(),
       tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  
  };

  if (command === 'serve') {
    return {
      ...commonConfig,
      server: {
        host: '0.0.0.0',
        port: 3082,
        https: false,
      },
    };
  }

  if (command === 'build') {
    return {
      ...commonConfig,
      server: {
        host: '0.0.0.0',
        port: 5000,
        https: true,
        hmr: { 
          host: 'feeder.com.br', 
          port: 443,
          protocol: 'wss' 
        },
      },
      build: {
        target: 'esnext',
        chunkSizeWarningLimit: 2000,
      },
    };
  }

  if (command === 'testbuild') {
    return {
      ...commonConfig,
      server: {
        host: '0.0.0.0',
        port: 5000,
        https: true,
        hmr: { 
          host: 'feeder.alvitre.com.br', 
          port: 443,
          protocol: 'wss'
        },
      },
      build: {
        target: 'esnext',
        chunkSizeWarningLimit: 2000,
      },
    };
  }

  return commonConfig;
});