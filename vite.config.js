import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        consumo: resolve(__dirname, 'cal_consumo_electrico.html'),
        ohm: resolve(__dirname, 'calculadora_ohm.html'),
      },
    },
  },
});
