import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import SemiPlugin from './script/semi-plugin';
import sass from 'sass';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    https: !!process.env.HTTPS,
    open: true
  },
  define: {
    __DEV__: true,
    __VERSION__: JSON.stringify(require('../../../package.json').version)
  },
  buildOptions: {
    scss: {
      implementation: sass
    }
  },
  plugins: [
    react(),
    svgr(),
    SemiPlugin({
      theme: '@semi-bot/semi-theme-ttpd-internal'
    })
  ]
});
