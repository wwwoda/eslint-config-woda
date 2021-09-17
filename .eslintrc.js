// Copyright (c) 2020 David Mondok <david@woda.at>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Use this configuration for standard TypeScript Projects.

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  // root: true,
  extends: ['airbnb'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    // ecmaVersion: 2019,
    // ecmaFeatures: {
    //   jsx: true,
    // },
    // sourceType: 'module',
  },
  plugins: ['react-hooks'],
  rules: {
    'import/prefer-default-export': 'off',
  },
};
