const { merge } = require('webpack-merge')

const common = require('../../webpack.common.js')
const config = require('./webpack.config.js')

module.exports = merge(common, config, {
  mode: 'production',
  devtool: 'source-map',
})
