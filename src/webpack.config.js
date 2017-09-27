var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: [
    './app.tsx',
  ],
  output: {
    path: path.join(path.resolve('../'), 'dist/js'),
    filename: 'app.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: [ '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
      include: path.join(__dirname, './')
    },
    { 
      enforce: "pre", 
      test: /\.js$/, loader: "source-map-loader" 
    },
    {
      test: /\.css$/,
      include: [
        path.join(__dirname, './')
      ],
      loader: ExtractTextPlugin.extract({
        publicPath : path.join(path.resolve('../'), 'dist/css'),
        use : "css-loader"
      }),
    }]
  },
  plugins: [
    new ExtractTextPlugin("../css/app.css"),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessorOptions: { discardComments: { removeAll: true } }
    })
  ]
};