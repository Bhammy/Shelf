var path = require('path');
var webpack = require('webpack');

var plugins = [];
var devPlugins = [];

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV || 'development' )
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);

module.exports = {
  entry: './frontend/entry.jsx',
  output: {
    filename: './app/assets/javascripts/bundle.js',
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
