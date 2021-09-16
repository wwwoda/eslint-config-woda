// Copyright (c) 2020 David Mondok <david@woda.at>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Use this configuration for standard TypeScript Projects.

module.exports = {
  globals: {
    React: true,
    JSX: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript',
    './.eslintrc.js',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // ecmaVersion: 2019,
    // sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  // settings: {
  //   'import/parsers': {
  //     '@typescript-eslint/parser': ['.ts', '.tsx'],
  //   },
  //   'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  // },
  rules: {},
};
