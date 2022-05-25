// Copyright (c) 2022 David Mondok <david@woda.at>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Use this configuration for standard TypeScript Projects.

const base = require('./base');

module.exports = {
  env: base.env,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    ...base.plugins,
    '@typescript-eslint',
  ],
  rules: {
    ...base.rules,
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],

    // Rules for plugin eslint-plugin-newline-destructuring
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unused-expressions': 'off',

    // Rules for plugin eslint-plugin-unused-imports
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
