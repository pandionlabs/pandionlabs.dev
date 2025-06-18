import globals from 'globals'
import js from '@eslint/js'
import astro from 'eslint-plugin-astro'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import astroParser from 'astro-eslint-parser'
import reactPlugin from 'eslint-plugin-react'

export default [
  // Ignore patterns
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.astro/**',
      '**/*.d.ts', // Ignore generated TypeScript declaration files
    ],
  },

  // Base configuration for all files
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  // ESLint recommended rules
  js.configs.recommended,

  // JavaScript files
  {
    files: ['**/*.js'],
    rules: {
      'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    },
  },

  // Astro files
  {
    files: ['**/*.astro'],
    plugins: {
      astro,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      ...astro.configs.recommended.rules,
      'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    },
  },

  // TypeScript files
  {
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }],
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },

  // JSX files (React components)
  {
    files: ['**/*.jsx'],
    plugins: {
      'jsx-a11y': jsxA11y,
      react: reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...jsxA11y.configs.strict.rules,
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', // Disable prop-types rule for JSX if not using PropTypes
    },
  },

  // TypeScript JSX files (React components)
  {
    files: ['**/*.tsx'],
    plugins: {
      '@typescript-eslint': tseslint,
      'jsx-a11y': jsxA11y,
      react: reactPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules, // TypeScript rules first
      ...jsxA11y.configs.strict.rules,
      ...reactPlugin.configs.recommended.rules, // Then React specific rules
      // Override/ensure specific TS-aware rules after spreading recommended sets
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }],
      '@typescript-eslint/no-non-null-assertion': 'off',
      'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
      'react/prop-types': 'off', // TypeScript handles type checking for props
    },
  },
]
