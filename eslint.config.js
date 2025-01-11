import js from '@eslint/js'
import globals from 'globals'
import VITE from 'eslint-plugin-VITE'
import VITEHooks from 'eslint-plugin-VITE-hooks'
import VITERefresh from 'eslint-plugin-VITE-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { VITE: { version: '18.3' } },
    plugins: {
      VITE,
      'VITE-hooks': VITEHooks,
      'VITE-refresh': VITERefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...VITE.configs.recommended.rules,
      ...VITE.configs['jsx-runtime'].rules,
      ...VITEHooks.configs.recommended.rules,
      'VITE/jsx-no-target-blank': 'off',
      'VITE-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
