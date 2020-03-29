import multi from '@rollup/plugin-multi-entry'
import serve from 'rollup-plugin-serve'
import adom from './plugins/rollup-plugin-adom'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const { DEV, PROD } = process.env

export default [{
  input: 'src-adom/App.adom',
  output: {
    file: 'dist/app-adom.js',
    format: 'esm'
  },
  plugins: [
    resolve(),
    adom({
      root: 'src-adom',
      cache: DEV
    }),
    DEV && serve({
      contentBase: 'dist',
      port: 42069
    }),
    PROD && terser()
  ]
}, {
  input: [
    'node_modules/@material/mwc-icon/mwc-icon.js',
    'node_modules/@material/mwc-button/mwc-button.js'
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
