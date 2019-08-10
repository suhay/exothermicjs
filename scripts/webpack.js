const path = require(`path`)
const webpack = require(`webpack`)

const pkg = require(path.join(process.cwd(), `package.json`))
const nodeExternals = require(`webpack-node-externals`)

module.exports = ({
  options, target = `node`, plugins = [],
}) => {
  const config = {
    entry: `./src/index.js`,
    output: {
      path: process.cwd(),
      filename: pkg.browser || pkg.main,
      library: pkg.name.replace(`@`, ``).split(/[/-]/),
      libraryTarget: `window`,
      publicPath: `/`,
    },
    target,
    externals: target !== `node` ? [] : [nodeExternals({
      whitelist: [`react`, `react-dom/server`],
    })],
    node: {
      __dirname: true,
    },
    optimization: {
      usedExports: true,
    },
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
              require(`@babel/plugin-proposal-class-properties`),
              require(`@babel/plugin-transform-arrow-functions`),
            ],
          },
        },
      }, {
        test: /\.css$/,
        use: target === `web` ? [`style-loader`, `css-loader`] : [`css-loader`],
      }],
    },
    resolve: {
      alias: {
        Root: path.resolve(__dirname, `.`),
        hiredis: path.join(__dirname, `aliases/hiredis.js`),
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(options.mode),
      }),
      new webpack.IgnorePlugin(/^esprima$/, /js-yaml/),
      ...plugins,
    ].filter(e => e),
  }

  if (target !== `node`) {
    config.node.fs = `empty`
    config.node.console = false
    config.node.fs = `empty`
    config.node.net = `empty`
    config.node.tls = `empty`
  }

  return config
}
