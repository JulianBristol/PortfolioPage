const platform = process.platform === 'win32' ? 'windows' : 'unix';

module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    amd: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': 'off',
    'brace-style': 'off',
    'generator-star-spacing': 0,
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-exports': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': ['error', `${platform}`],
    'max-len': [
      2,
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
      },
    ],
    quotes: [2, 'single'],
    'no-prototype-builtins': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-undef': 'off',
    'object-curly-newline': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
