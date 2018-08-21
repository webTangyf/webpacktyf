const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
  	new CleanWebpackPlugin(['dist'])
  ]
})
