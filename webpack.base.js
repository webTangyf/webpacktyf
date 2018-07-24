const path = require('path');
// 自动新增html 并且引入依赖的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清楚dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, 'src'),
        use: path.resolve('./test-loader.js'),
        exclude: /node_modules/
      }
    ]
  },
  // resolve: {
  //   extensions: [ '.tsx', '.ts', '.js' ]
  // },  
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ts',
      template: path.resolve('./index.html'),
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};