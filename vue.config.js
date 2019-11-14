const path = require('path')

module.exports = {
  publicPath: '/dev/pages/', // 编译输出路径变为相对路径
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src') // 别名设置
      }
    }
  },
  devServer: {
    port: 8888,
    proxy: {
      '^/prefix_need_to_proxy': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end()
  }
}
