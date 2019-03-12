const path = require('path')
const webpack = require('../../scripts/webpack')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = (env, options) => {
  return webpack({
    env, 
    options,
    plugins: [
      !options.deploy && options.mode !== 'production' && new NodemonPlugin({
        watch: [
          path.resolve('./dist/exothermicjs-server-express.min.js'),
          path.resolve('./src')
        ],
        verbose: true,
        script: './bin/exothermic-server'
      })
    ]
  })
}