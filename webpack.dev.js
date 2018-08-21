const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

var devConfig = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
    open: true
  },
  plugins: [
  	new webpack.NamedModulesPlugin(),
  	new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(baseConfig, devConfig);

console.log(module.exports)

