import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.woff', '**/*.ttf'],
  resolve: {
    alias: {
      '@slick': 'node_modules/slick-carousel/slick/fonts',
    },
  },

    fs: {
      allow: [

        'node_modules/slick-carousel/slick/fonts',
      ],

  },
})
