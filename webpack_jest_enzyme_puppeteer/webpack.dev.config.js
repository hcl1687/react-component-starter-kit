const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base.config')
const fs = require('fs')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const pkgPath = path.resolve(process.cwd(), 'package.json')
const fileContent = fs.readFileSync(pkgPath, 'utf-8')
const pkg = JSON.parse(fileContent)
const dist = path.resolve(__dirname, './dist')

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: './template/index.dev.jsx',
  output: {
    path: dist,
    filename: 'index.js'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new HtmlWebpackPlugin({
      template: './template/index.ejs',
      title: `${pkg.name} ${pkg.description}`
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
