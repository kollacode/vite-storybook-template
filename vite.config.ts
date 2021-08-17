import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
const global_plugins = require('./plugins.js').default;

export default defineConfig({
  plugins: [
    vue(),
    ...global_plugins
  ]
})