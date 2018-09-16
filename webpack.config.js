const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = (env, options) => {
  return [{
    // Server
    target: 'node',
    node: {
      __dirname: true
    },
    externals: [nodeExternals({
      whitelist: options.mode === 'production' ? ['react', 'react-dom/server'] : []
    })],
    entry: {
      exothermic: path.resolve('./src/exothermic.js'),
    },
    output: {
      path: path.resolve('./dist'),
      filename: options.mode === 'production' ? '[name].min.js' : '[name].js',
      library: 'exothermic',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              require("@babel/plugin-transform-react-jsx"),
              require("@babel/plugin-transform-react-jsx-source"),
              require("@babel/plugin-transform-react-jsx-self"),
              require("@babel/plugin-proposal-object-rest-spread")
            ]
          }
        }
      }]
    },
    resolve: {
      alias: {
        Components: path.resolve(__dirname, './src/components/'),
        Modules: path.resolve(__dirname, './src/components/'),
        Root: path.resolve(__dirname, '.')
      }
    },
    plugins: [
      options.mode === 'production' && new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      options.mode !== 'production' && new NodemonPlugin({
        watch: path.resolve('./dist/exothermic.js'),
        verbose: true,
        script: './demo/index.js'
      }),
    ].filter(e => e),
  },
          
  // Browser
  {
    target: "web",
    node: {
      __dirname: true,
      console: false,
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    entry: {
      'browser.exothermic': path.resolve('./src/browser.js'),
    },
    output: {
      path: path.resolve('./dist'),
      filename: options.mode === 'production' ? '[name].min.js' : '[name].js',
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              require("@babel/plugin-transform-react-jsx"),
              require("@babel/plugin-transform-react-jsx-source"),
              require("@babel/plugin-transform-react-jsx-self"),
              require("@babel/plugin-proposal-object-rest-spread")
            ]
          }
        }
      }]
    },
    resolve: {
      alias: {
        Components: path.resolve(__dirname, './src/components/'),
        Modules: path.resolve(__dirname, './src/components/'),
        Root: path.resolve(__dirname, '.')
      },
    },
    plugins: [
      options.mode !== 'production' && new CopyWebpackPlugin([{
        from: 'dist/browser.exothermic.js',
        to: '../demo/public/static/browser.js',
        fotce: true
      }, ]),
      options.mode === 'production' && new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
          WEBPACK_ENV: JSON.stringify('browser'),
          APP_ENV: (process.env.APP_ENV && JSON.stringify(process.env.APP_ENV)) || undefined,
        },
      }),
    ].filter(e => e),
  }]
}