const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    resources: './js/resources.js',
    engine: './js/engine.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Udacity Game',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
};
