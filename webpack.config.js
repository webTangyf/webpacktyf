const path = require('path');
// 自动新增html 并且引入依赖的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清楚dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');
//webpack
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js'
    // print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 8080,
    before: function (app) {
      app.get('/mock/data', function (req, res) {
        res.json({test: true})
      })
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};