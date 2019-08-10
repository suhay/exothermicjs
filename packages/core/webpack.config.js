const path = require(`path`)
const webpack = require(`webpack`)
// const { BundleAnalyzerPlugin } = require(`webpack-bundle-analyzer`)

module.exports = (env, options) => [
  {
    target: `web`,
    node: {
      __dirname: true,
      console: false,
      fs: `empty`,
      net: `empty`,
      tls: `empty`,
    },
    entry: {
      'browser.exothermic': path.resolve(`./src/browser.js`),
    },
    output: {
      path: path.resolve(`./dist`),
      filename: options.mode === `production` ? `[name].production.js` : `[name].development.js`,
      libraryTarget: `window`,
      library: [`exothermic`, `browser`],
      publicPath: `/`,
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components|dist)/,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [`@babel/preset-env`],
            plugins: [
              require(`@babel/plugin-transform-react-jsx`),
              require(`@babel/plugin-transform-react-jsx-source`),
              require(`@babel/plugin-transform-react-jsx-self`),
              require(`@babel/plugin-proposal-object-rest-spread`),
            ],
          },
        },
      }, {
        test: /\.css$/,
        use: [`style-loader`, `css-loader`],
      }],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: `vendors`,
            chunks: `all`,
          },
        },
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.WEBPACK_ENV': JSON.stringify(`browser`),
        'process.env.APP_ENV': (process.env.APP_ENV && JSON.stringify(process.env.APP_ENV)) || undefined,
      }),
      new webpack.IgnorePlugin(/^esprima$/, /js-yaml/),
      // new BundleAnalyzerPlugin(),
    ].filter(e => e),
  },
]
