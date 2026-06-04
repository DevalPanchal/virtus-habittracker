import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  // Project site is served from https://<user>.github.io/virtus-habittracker/
  base: '/virtus-habittracker/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
