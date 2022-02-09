module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'off',
    'default-case': 'warn',
    eqeqeq: ['error', 'always'],
    'guard-for-in': 'warn',
    'no-caller': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-self-compare': 'error',
    'no-useless-call': 'error',
    'max-len': ['error', { code: 220, ignoreComments: true }],
    'no-var': 'warn',
    // "no-unused-vars": ["error", { "vars": "local" }],
  },
};
