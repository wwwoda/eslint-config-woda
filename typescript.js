// Copyright (c) 2020 David Mondok <david@woda.at>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
//
// Use this configuration for standard TypeScript Projects.

const env = require('./config/env');
const rules = require('./config/rules');

module.exports = {
  env,
  root: true,
  extends: [
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react-hooks',
    '@typescript-eslint',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    ...rules,
  },
};
