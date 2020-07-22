const webpack = require("webpack");

module.exports = {
  // 解决打包后出现"Failed to load resource: net::ERR_FILE_NOT_FOUND"的错误
  publicPath: './',

  configureWebpack: {
    resolve: {
      alias: {  // 路径别名配置
        // @:'src' 已被内部自动配置
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },

  productionSourceMap: false
}