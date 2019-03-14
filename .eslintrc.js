module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': [
      'error', {
        'components': ['label'],
        'required': {
          'every': ['id']
        }
      }
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        'moduleDirectory': ['node_modules', 'src/']
      }
    }
  },
  env: {
    jest: true
  }
};
