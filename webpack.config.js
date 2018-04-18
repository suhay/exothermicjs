const path = require('path');
const webpack = require('webpack');
const createBabelConfig = require('./babelrc');
const nodeExternals = require('webpack-node-externals');
const PRODUCTION = process.env.NODE_ENV === 'production';
const MinifierPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  target: 'node',
  
  externals: [ nodeExternals({
    whitelist: PRODUCTION ? [ 'react', 'react-dom/server' ] : []
  }) ],

  node: {
    __dirname: true
  },

  entry: path.resolve('./index.js'),
  
  output: {
    path: path.resolve('./dist'),
    filename: PRODUCTION ? 'reacty.min.js' : 'reacty.js',
    library: 'reacty',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('./lib'),
        loader: 'babel-loader',
        query: createBabelConfig({ server: true }),
      },
    ],
  },
  
  plugins: [
    PRODUCTION && new MinifierPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ].filter(e => e),
};