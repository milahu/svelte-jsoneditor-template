import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { viteOptimizeDeps as svelteJsoneditorOptimizeDeps } from 'svelte-jsoneditor/config'
import json from '@rollup/plugin-json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    viteCommonjs(),
//    json(),
  ],
  optimizeDeps: {
    include: [
//      ...svelteJsoneditorOptimizeDeps,
    ],
  },
})
