

        import vue from '@vitejs/plugin-vue'

const commonConfig = {
  plugins: [
    vue(),

  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
}

export default ({ command }) => {
  if (command === 'serve') {
    return {
      ...commonConfig,
      server: {
        host: '0.0.0.0',
        port: 3082,
        https: false,
      }
    }
  } else if (command === 'build') {
    return {
      ...commonConfig,
      server: {
        host: '0.0.0.0',
        port: 5000,
        https: true,
        hmr: { host: '"https://feeder.com.br', port: 443 },
      },
      build: {
        target: 'esnext',
        chunkSizeWarningLimit: 2000,
      },
    }
  } else if (command === 'testbuild') {
    return {
      ...commonConfig,
      server: {
        host: '0.0.0.0',
        port: 5000,
        https: true,
        hmr: { host: 'https://feeder.alvitre.com.br', port: 443 },
      },
      build: {
        target: 'esnext',
        chunkSizeWarningLimit: 2000,
      },
    }
  }
}
