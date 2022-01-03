import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import banner from 'rollup-plugin-banner2';
import pkg from './package.json';

const MODULE_NAME = 'MMM-ViewNotifications';

const BANNER_TEXT = [
  '/*',
  ` * MagicMirror² Module: ${MODULE_NAME}`,
  ` * Version: ${pkg.version}`,
  ' * ',
  ` * ${pkg.description}`,
  ' * ',
  ` * Copyright © ${pkg.author ? pkg.author : pkg.contributors}`,
  ` * License: ${pkg.license}`,
  ' * ',
  ' * This file is auto-generated. Do not edit.',
  ' */\n\n',
].join('\n');

export default [
  {
    input: `./src/${MODULE_NAME}.tsx`,
    plugins: [typescript({ module: 'ESNext' }), resolve(), commonjs(), banner(() => BANNER_TEXT)],
    output: {
      file: `./${MODULE_NAME}.js`,
      format: 'iife',
      globals: {
        logger: 'Log',
        moment: 'moment',
      },
    },
    external: ['logger', 'moment'],
  },
];
