import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Use '/' for root or adjust accordingly

  build: {
    outDir: 'dist',  // Ensure the build output directory is set to 'dist'
  }
})

