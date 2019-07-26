const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const dist = path.resolve(__dirname, './dist')
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
  entry: './src/index.jsx',
  output: {
    path: dist,
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
  plugins: [
    new ExtractTextPlugin('index.css')
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css']
  }
}
