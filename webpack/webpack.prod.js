const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig, {
  mode: 'production', // 会将process.env.NODE_ENV设置为production并启用一些插件
  plugins: [
    new CleanWebpackPlugin(),
  ]
})