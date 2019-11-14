module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    // 'generator-star-spacing': 'off',
    // // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 打包生产环境禁止用console
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    //禁止使用alert confirm prompt
    'no-alert': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 函数名与其后面的括号之间可以无空格
    'space-before-function-paren': ['error', 'never']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
