const path = require('path');
const webpack = require('webpack');
const createBabelConfig = require('./babelrc');
const nodeExternals = require('webpack-node-externals');
const PRODUCTION = process.env.NODE_ENV === 'production';
const MinifierPlugin = webpack.optimize.UglifyJsPlugin;

const serverConfig = {
  target: 'node',
  
  externals: [ nodeExternals({
    whitelist: PRODUCTION ? [ 'react', 'react-dom/server' ] : []
  }) ],

  node: {
    __dirname: true
  },

  entry: PRODUCTION ? path.resolve('./lib/reacty.js') : path.resolve('./lib/reacty.test.js'),
  output: {
    path: PRODUCTION ? path.resolve('./demo/dist/js') : path.resolve('./dist'),
    filename: 'server.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('./lib'),
        loader: 'babel-loader',
        query: createBabelConfig({ server: true }),
      },
      { 
        test: /\.css$/,
        use: [
          { loader: "css-loader" }
        ]
      },
      { 
        test: /\.svg/, 
        use: 'svg-inline-loader' 
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

module.exports = [serverConfig];
