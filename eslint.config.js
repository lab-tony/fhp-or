import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['build/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
];
