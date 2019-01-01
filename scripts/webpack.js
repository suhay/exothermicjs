const path = require('path')
const webpack = require('webpack')
const pkg = require(path.join(process.cwd(), 'package.json'));
const nodeExternals = require('webpack-node-externals')

module.exports = (env, options, target = 'node') => {
  return {
    entry: './src/index.js',
    output: {
      path: options.mode === 'production' ? process.cwd() : path.resolve('../exothermicjs/demo/public/static'),
      filename: options.mode === 'production' ? pkg.main : pkg.main.replace('dist/', ''),
      library: pkg.name,
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    target: target,
    externals: target !== 'node' ? [] : [nodeExternals({
      whitelist: ['react', 'react-dom/server']
    })],
    node: {
      __dirname: true,
      fs: target !== 'node' ? 'empty' : true,
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
              require("@babel/plugin-proposal-object-rest-spread"),
              require("@babel/plugin-proposal-class-properties"),
            ]
          }
        }
      }, {
        test: /\.css$/,
        use: [ 'css-loader' ]
      }]
    },
    resolve: {
      alias: {
        Root: path.resolve(__dirname, '.'),
        'hiredis': path.join(__dirname, 'aliases/hiredis.js'),
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(options.mode),
      }),
      new webpack.IgnorePlugin(/^esprima$/, /js-yaml/),
    ].filter(e => e),
  }
}