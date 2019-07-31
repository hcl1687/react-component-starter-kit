const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const path = require('path')
const lib = path.resolve(__dirname, './lib')

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    path: lib,
    filename: 'index.js',
    library: 'SimpleComp',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    }
  },
  plugins: [
    new ExtractTextPlugin('index.css')
  ]
})
