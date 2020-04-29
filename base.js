// Copyright (c) 2020 David Mondok <david@woda.at>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Use this configuration for standard TypeScript Projects.

const env = require('./config/env');
const rules = require('./config/rules');

module.exports = {
  env,
  root: true,
  extends: [
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react-hooks',
  ],
  rules: {
    ...rules,
  },
};
