const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.config.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, '../dist'),
    port: 9999,
    devMiddleware: {
      index: true,
      writeToDisk: true
    },
    client: {
      logging: 'error'
    }
  }
})
