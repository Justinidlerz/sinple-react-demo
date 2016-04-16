var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: false,//false,//'cheap-module-eval-source-map',
  entry: {
    "entry" : './src/entry'
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
//   plugins : [
//     new webpack.optimize.CommonsChunkPlugin('common.js')
//   ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: __dirname
    }]
  }
};