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
    // 跨域代理
    proxy: {
      '^/prefix_need_to_proxy': {
        target: '<url>',
        ws: true,
        changeOrigin: true,// 允许跨域
        pathRewrite: {
          '^/api': '' // 当遇到/api接口，‘/api’代替target里面的地址
        }
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
