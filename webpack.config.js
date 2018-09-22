const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devtool: 'source-map',
};
