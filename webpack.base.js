const path = require('path');
// 自动新增html 并且引入依赖的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清楚dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
    // another: './src/another.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};