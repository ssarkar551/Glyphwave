import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
    entry: 'src/index.js',
      name: 'EmojiIconLib',
      fileName: (format) => format === 'cjs' ? 'emoji-icon-lib.cjs' : 'emoji-icon-lib.es.js',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
