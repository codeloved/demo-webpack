const merge = require('webpack-merge')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack')
const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true
  },
  plugins: [
    new ManifestPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.zdy': JSON.stringify('zdy')
    })
  ]
})