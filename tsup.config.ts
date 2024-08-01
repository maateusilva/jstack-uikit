import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    'tailwind.config.ts',
    'src/styles/index.css'
  ],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  minify: true,
  sourcemap: false,
  clean: true,
  tsconfig: 'tsconfig.build.json',
});
