const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleWare = require('webpack-dev-middleware')
const config = require('./webpack.config.js')

const app = express()
// webpack有回调函数，会输出到output文件夹中，没有回调函数，编译的文件会返回
// webpack(config, function() {})
const compiler = webpack(config)

app.use(webpackDevMiddleWare(compiler, {
    publicPath: config.output.publicPath
  }))

app.listen(3000, function() {
  console.log('listen on 3000')
})

