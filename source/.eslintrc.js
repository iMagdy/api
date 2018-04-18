module.exports = {
  root: true,
  plugins: ['unicorn'],
  extends: ['airbnb-base', 'plugin:unicorn/recommended'],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  "parserOptions": {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      globalReturn: true,
      jsx: true
    }
  }
}
