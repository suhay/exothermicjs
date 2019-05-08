const webpack = require(`../../scripts/webpack`)

module.exports = (env, options) => webpack({
  env, options, target: `web`, forDemo: true,
})
