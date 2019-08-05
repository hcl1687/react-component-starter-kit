const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const src = path.resolve(__dirname, './src')
const cssLoaders = [{
  loader: 'style-loader'
},
{
  loader: 'css-loader',
  options: {
    importLoaders: 1
  }
},
{
  loader: 'postcss-loader',
  options: {
    plugins: [
      require('postcss-import')(),
      require('postcss-url')(),
      require('postcss-nesting')(),
      require('postcss-cssnext')
    ]
  }
}]

module.exports = {
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: src,
      use: [{
        loader: 'eslint-loader',
        options: {
          emitWarning: true, // show warning in development, you must solve it
          formatter: require('eslint-friendly-formatter')
        }
      }],
      enforce: 'pre'
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: cssLoaders.shift().loader,
        use: cssLoaders
      })
    }, {
      test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[ext]?[hash:7]'
        }
      }]
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.json']
  }
}
