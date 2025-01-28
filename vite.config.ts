import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'slot-machine-list.html', // Primeiro arquivo
          dest: '' // Copiar para a raiz do dist
        },
        {
          src: 'selected-slot-machine.html', // Segundo arquivo
          dest: '' // Copiar também para a raiz do dist
        },
      ],
    }),
  ],
  build: {
    outDir: 'dist', // Pasta de saída
  },
});
