import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  sourcemap: true,
  clean: true,
  minify: false,
  bundle: true,
  treeshake: true,
  platform: 'node',
  external: [
    /^node:/,
    'stream',
  ],
})
