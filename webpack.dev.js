const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');
const path = require('path')

var devConfig = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist')
  }
}

module.exports = merge(baseConfig, devConfig)