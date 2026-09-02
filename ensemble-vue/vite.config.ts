import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// During local EUI development, resolve the Vue framework wrapper directly to
// the artifact that `npm run build:vue` just produced. This intentionally
// bypasses any stale `file:` package snapshot npm/Vite may still have cached.
const localEuiVueEntry = fileURLToPath(
  new URL('../ensemble-ui/dist-vue/components.js', import.meta.url),
)
const localEuiComponents = fileURLToPath(
  new URL('../ensemble-ui/dist/components/', import.meta.url),
)

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: [
      {
        find: /^ensemble-ui\/vue$/,
        replacement: localEuiVueEntry,
      },
      {
        find: /^ensemble-ui\/components\/(.*)$/,
        replacement: `${localEuiComponents}$1`,
      },
    ],
    // The linked EUI build and the Vue demo must share one Vue runtime.
    dedupe: ['vue', 'vue-router'],
  },
})
