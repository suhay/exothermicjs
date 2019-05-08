const path = require(`path`)
const NodemonPlugin = require(`nodemon-webpack-plugin`)
const webpack = require(`../../scripts/webpack`)

module.exports = (env, options) => webpack({
  env,
  options,
  plugins: [
    !options.deploy && options.mode !== `production` && new NodemonPlugin({
      watch: [
        // path.resolve('./dist/exothermicjs-server-express.min.js'),
        path.resolve(`./src`),
      ],
      verbose: true,
      script: `./bin/exothermic-server`,
    }),
  ],
})
