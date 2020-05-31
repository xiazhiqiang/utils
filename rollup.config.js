/**
 *
@rollup/plugin-node-resolve  ---帮助 Rollup 查找外部模块，然后导入
@rollup/plugin-commonjs   ---将CommonJS模块转换为 ES2015 供 Rollup 处理
@rollup/plugin-babel   --- 让我们可以使用es6新特性来编写代码
rollup-plugin-terser  --- 压缩js代码，包括es6代码压缩
rollup-plugin-eslint  --- js代码检测
@rollup/plugin-json  --- json文件作为es6模块
*/

import json from '@rollup/plugin-json'; // js文件可以读取json数据
import commonjs from '@rollup/plugin-commonjs'; // 兼容commonjs模块
import resolve from '@rollup/plugin-node-resolve'; // 与commonjs搭配使用，解析依赖模块路径
import babel from '@rollup/plugin-babel'; // babel解析
import { terser } from 'rollup-plugin-terser';

const plugins = [
  json(),
  commonjs(),
  resolve({
    jsnext: true,
    main: true,
    browser: true,
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  process.env.NODE_ENV === 'production' ? terser() : '',
];

export default [
  {
    // 浏览器
    input: 'src/browser.js',
    output: [
      {
        file: 'build/index.esm.js',
        format: 'es',
      },
    ],
    plugins: plugins,
  },
  {
    // node
    input: 'src/node.js',
    output: [
      {
        file: 'build/index.cjs.js',
        format: 'cjs',
      },
    ],
    plugins: plugins,
  },
];
