const path = require('path');
const webpack = require('webpack');
const createBabelConfig = require('./babelrc');
const nodeExternals = require('webpack-node-externals');
const PRODUCTION = process.env.NODE_ENV === 'production';
const MinifierPlugin = webpack.optimize.UglifyJsPlugin;

const clientConfig = {
  entry: path.resolve('./src/index.browser.js'),
  
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('./src'),
        loader: 'babel-loader',
        query: createBabelConfig({ server: false }),
      },
      { 
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
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

const serverConfig = {
  target: 'node',
  
  externals: [ nodeExternals({
    whitelist: PRODUCTION ? [ 'react', 'react-dom/server' ] : []
  }) ],

  node: {
    __dirname: true
  },

  entry: path.resolve('./src/index.server.js'),
  output: {
    path: path.resolve('./dist'),
    filename: 'server.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('./src'),
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

// Notice that both configurations are exported
module.exports = [clientConfig, serverConfig];
