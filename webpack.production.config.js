const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      },
      {
        test: /\.scss$/,
        use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: []
                } // compiles Sass to CSS
            }]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: `${__dirname}/src/html/*.html`,
      to: `${__dirname}/dist`,
      flatten: true
    }, ]),
  ],

  devtool: 'cheap-module-source-map', // faster than 'source-map'
};