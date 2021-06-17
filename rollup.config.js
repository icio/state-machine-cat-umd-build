import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'node_modules/state-machine-cat/src/index.js',
  plugins: [
    json(),
    commonjs(),
    nodePolyfills(),
    nodeResolve(),
  ],
  output: {
    file: 'umd/smcat.min.js',
    format: 'umd',
    name: 'smcat',
    plugins: [terser()],
  }
};
