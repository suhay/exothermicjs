const path = require(`path`)
const webpack = require(`webpack`)
const nodeExternals = require(`webpack-node-externals`)
const OpenBrowserPlugin = require(`open-browser-webpack-plugin`)
const { BundleAnalyzerPlugin } = require(`webpack-bundle-analyzer`)

module.exports = (env, options) => [{
  // Server
  entry: {
    exothermic: path.resolve(`./index.js`),
  },
  output: {
    path: path.resolve(`./dist`),
    filename: options.mode === `production` ? `[name].min.js` : `[name].min.js`,
    library: `exothermic`,
    libraryTarget: `umd`,
    umdNamedDefine: true,
    publicPath: `/`,
  },
  devtool: `source-map`,
  target: `node`,
  node: {
    __dirname: true,
  },
  externals: [nodeExternals({
    whitelist: [`react`, `react-dom/server`],
  })],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
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
      use: [`css-loader`],
    }],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, `./src/components/`),
      modules: path.resolve(__dirname, `./src/components/`),
      Root: path.resolve(__dirname, `.`),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(options.mode),
    }),
  ].filter(e => e),
},

// Browser
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
    path: options.mode === `production` ? path.resolve(`./dist`) : path.resolve(`../../demo/public/static`),
    filename: options.mode === `production` ? `[name].min.js` : `browser.js`,
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
  resolve: {
    alias: {
      components: path.resolve(__dirname, `./src/components/`),
      modules: path.resolve(__dirname, `./src/components/`),
      Root: path.resolve(__dirname, `.`),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.WEBPACK_ENV': JSON.stringify(`browser`),
      'process.env.APP_ENV': (process.env.APP_ENV && JSON.stringify(process.env.APP_ENV)) || undefined,
    }),
    new webpack.IgnorePlugin(/^esprima$/, /js-yaml/),
    new OpenBrowserPlugin({ url: `http://localhost:3000` }),
    // new BundleAnalyzerPlugin(),
  ].filter(e => e),
},
]
