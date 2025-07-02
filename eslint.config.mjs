import js from '@eslint/js';
import globals from 'globals';
import cypressPlugin from 'eslint-plugin-cypress';

export default [
  js.configs.recommended,
  {
    plugins: {
      cypress: cypressPlugin,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        cy: 'readonly',
        Cypress: 'readonly',
        expect: 'readonly',
        assert: 'readonly',
      },
      parserOptions: {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
      },
    },
  },

  {
    rules: {
      // General rules
      'linebreak-style': 'off',
      'no-unused-vars': 'warn',
      'no-console': 'warn',

      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'max-len': ['error', { 'code': 200, 'ignoreUrls': true }],
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],

      'space-before-function-paren': ['error', 'never'],
      'arrow-parens': ['error', 'always'],
    },
  },
  {
    files: [
      'cypress/**/*.js',
      '!cypress/config/*.js',
    ],
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      // Cypress-specific rules
      'no-unused-expressions': 'off',
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-force': 'off',
      'cypress/assertion-before-screenshot': 'warn',
    },
  },
];