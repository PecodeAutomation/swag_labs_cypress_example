import js from '@eslint/js';
import globals from 'globals';
import cypress from 'eslint-plugin-cypress';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        cy: 'readonly',
        Cypress: 'readonly',
        expect: 'readonly',
        assert: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      cypress,
    },
    rules: {
      // Base rules
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-unused-vars': 'off',
      
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { 
          'argsIgnorePattern': '^_',
          'varsIgnorePattern': '^_',
          'caughtErrorsIgnorePattern': '^_'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // Cypress rules
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/no-assigning-return-values': 'error',
    },
  },
];