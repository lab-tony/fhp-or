import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        project: 'projekt.html',
        impressum: 'impressum.html',
      },
    },
  },
});
