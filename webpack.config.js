const path = require(`path`)
const fs = require(`fs`)

const dirs = fs.readdirSync(path.resolve(__dirname, `./packages`)).filter(dir => !dir.includes(`server-`))

module.exports = () => (
  {
    output: {
      filename: `bundle.js`,
      libraryTarget: `umd`,
      publicPath: `/`,
      umdNamedDefine: true,
      library: `exothermic`,
    },
    node: {
      fs: `empty`,
      net: `empty`,
      tls: `empty`,
    },
    devtool: `source-map`,
    devServer: {
      contentBase: dirs.map(dir => path.resolve(__dirname, path.join(`./packages`, `${dir}/dist`))),
      port: 8081,
    },
    watchOptions: {
      ignored: [`**/dist/.*`, `**/tests/.*`],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: `babel-loader`,
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [`style-loader`, `css-loader`],
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          use: [`style-loader`, `css-loader`],
        },
      ],
    },
  }
)
