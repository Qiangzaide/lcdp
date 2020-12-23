import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
// import tslint from 'rollup-plugin-tslint';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: {
    file: pkg.main,
    format: 'es',
  },
  plugins: [
    babel(),
    postcss({
      extract: true,
      sourceMap: true,
      extensions: ['.less', '.css'],
    }),
    commonjs(),
 
    typescript(),
    // tslint(),
    nodeResolve(),
  ],

  external: ['react','antd'],
};
