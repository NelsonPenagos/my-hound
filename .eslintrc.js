module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'],
  rules: {
    'vue/no-unused-vars': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}