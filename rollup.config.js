import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'node_modules/state-machine-cat/src/index.js',
  plugins: [
    json(),
    commonjs(),
    nodePolyfills(),
    nodeResolve(),
  ],
  output: {
    file: 'dist/smcat.js',
    format: 'umd',
    name: 'smcat',
  }
};
