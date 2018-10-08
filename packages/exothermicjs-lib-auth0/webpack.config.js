const path = require('path')
const webpack = require('webpack')
const pkg = require(path.join(process.cwd(), 'package.json'));

module.exports = (env, options) => {
  return {
    entry: './src/index.js',
    output: {
      path: process.cwd(),
      filename: pkg.main,
      library: pkg.name,
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    target: 'node',
    node: {
      __dirname: true
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
      }, {
        test: /\.css$/,
        use: [ 'css-loader' ]
      }]
    },
    resolve: {
      alias: {
        Root: path.resolve(__dirname, '.'),
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(options.mode),
      }),
    ].filter(e => e),
  }
}