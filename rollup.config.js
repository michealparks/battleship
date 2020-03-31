import multi from '@rollup/plugin-multi-entry'
import serve from 'rollup-plugin-serve'
import adom from './plugins/rollup-plugin-adom'
import svelteHTML from './plugins/svelte-html'
import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const { DEV, PROD } = process.env

export default [{
  input: 'adom/App.adom',
  output: {
    file: 'dist/adom.js',
    format: 'esm'
  },
  plugins: [
    adom({
      root: 'adom',
      cache: DEV
    })
  ]
}, {
  input: 'svelte/App.svelte',
  output: {
    file: 'dist/svelte.js',
    format: 'esm'
  },
  plugins: [
    resolve(),
    svelte({
      css (css) {
        css.write('dist/main.css')
      }
    }),
    svelteHTML(),
    DEV && serve({
      contentBase: 'dist',
      port: 42069
    }),
    PROD && terser()
  ]
}, {
  input: [
    'node_modules/@material/mwc-icon/mwc-icon.js',
    'node_modules/@material/mwc-button/mwc-button.js',
    'node_modules/@material/mwc-fab/mwc-fab.js'
  ],
  output: {
    file: 'dist/mwc.js',
    format: 'esm'
  },
  plugins: [
    multi(),
    resolve(),
    PROD && terser()
  ]
}]
