// Copyright (c) 2022 David Mondok <david@woda.at>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Use this configuration for standard TypeScript Projects.

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    babelOptions: {
      presets: [
        '@babel/preset-react',
      ],
    },
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-newline-destructuring',
    'unused-imports',
  ],
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-use-before-define': ['error', { functions: false }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',

    // Rules for plugin eslint-plugin-newline-destructuring
    indent: 'off',
    'newline-destructuring/newline': [
      'error',
      {
        items: 1,
      },
    ],
    'no-multi-spaces': 'error',
    'operator-linebreak': [
      'error',
      'before',
      { overrides: { '=': 'none' } },
    ],

    // Rules for plugin eslint-plugin-unused-imports
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
