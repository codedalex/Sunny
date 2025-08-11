import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    ui: 'src/ui/index.ts',
    types: 'src/types/index.ts',
    utils: 'src/utils/index.ts',
    hooks: 'src/hooks/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
});
