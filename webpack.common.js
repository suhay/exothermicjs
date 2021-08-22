const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      buffer: false,
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
}
