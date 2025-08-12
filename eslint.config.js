// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react-native': require('eslint-plugin-react-native'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      // Prettier integration
      'prettier/prettier': 'error',

      // React Native specific rules
      'react-native/no-unused-styles': 'error',
      'react-native/split-platform-components': 'error',
      'react-native/no-inline-styles': 'warn',
      'react-native/no-color-literals': 'warn',

      // Additional React rules
      'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/state-in-constructor': 'off',
      'react/static-property-placement': 'off',

      // Import rules
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',

      // TypeScript rules
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
  {
    ignores: ['dist/*', 'node_modules/*'],
  },
]);
