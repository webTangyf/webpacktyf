const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  // devtool: 'source-map',
  // optimization: {
  //     splitChunks: {
  //         cacheGroups: {
  //             commons: {
  //                 name: "commons",
  //                 chunks: "initial",
  //                 minChunks: 2
  //             }
  //         }
  //     }
  // },
  plugins: [
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common'
    // })
  ]
})