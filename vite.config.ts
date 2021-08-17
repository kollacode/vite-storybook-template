import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
const {plugins, alias} = require('./vite.config.shared');

export default defineConfig({
  plugins: [
    vue(),
    ...plugins
  ],
  resolve: {
    alias
  }
})