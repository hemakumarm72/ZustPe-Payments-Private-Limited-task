module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base'],

  parserOptions: {
    ecmaVersion: 2018,
  },

  rules: {
    'linebreak-style': 0,
    'comma-dangle': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
  },
};
