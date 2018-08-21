const path = require('path');
// 自动新增html 并且引入依赖的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清楚dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 配置文件
const config = require('./config')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 用来获取文件夹路径
const glob = require('glob');

let fileslist = glob.sync('./src/**/*');

module.exports = {
  entry: getEntry(fileslist),
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, 'src'),
        use: path.resolve('./test-loader.js'),
        exclude: /node_modules/
      },
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, 'src'),
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: path.join(config.prod.assetsDirectory, 'js/[name].[hash].js'),
    chunkFilename: path.join(config.prod.assetsDirectory, 'js/[name].[hash].js'),
    publicPath: config.prod.assetsPublicPath
  },
  plugins: [
    ...getHtmlList(fileslist),
    new MiniCssExtractPlugin({
      filename: path.join(config.prod.assetsDirectory, "css/[name].css"),
      chunkFilename: "[id].css"
    })
  ]
};

function getEntry (fileslist) {
  if (!fileslist) {
    return {}
  }
  var entry = {}
  fileslist.forEach (filepath => {
    if (/\.js$/.test(filepath)) {
      entry[filepath.replace(/(\.|\/|js)/g, '')] = filepath
    }
  })
  return entry
}

function getHtmlList (fileslist) { // 多个HtmlWebpackPlugin写法
  var list = []
  fileslist.forEach (filepath => {
    if (/\.js$/.test(filepath)) {
      var htmlpath = filepath.replace(/\.js/, '.html');
      if (fileslist.find(d => htmlpath === d)) {
        var chunksName = filepath.replace(/(\.|\/|js)/g, '');
        list.push(new HtmlWebpackPlugin({
          template: htmlpath,
          filename: path.join('./', `${htmlpath.replace(/\S*src/, '')}`),
          chunks: [chunksName]
        }))
      }
    }
  })
  return list
}