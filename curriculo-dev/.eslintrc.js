module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },

  extends: ['airbnb', 'prettier', 'plugin:prettier/recommended'], // Adicionei 'plugin:prettier/recommended'

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },

  parser: '@babel/eslint-parser', // Corrigido: parser agora é uma string

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false, // Adicionado aqui
  },

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
