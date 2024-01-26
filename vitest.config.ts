// eslint-disable-next-line node/no-unpublished-import
import {defineConfig} from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    include: ['src/**/*.test.ts'],
    globals: true,
  },
});
