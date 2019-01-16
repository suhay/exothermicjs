const webpack = require('../../scripts/webpack')

module.exports = (env, options) => {
  return webpack(env, options, 'web', true)
}