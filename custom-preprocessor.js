const babelJest = require(`babel-jest`)
const babelConfig = require(`./packages/exothermicjs/babel.config.js`)

module.exports = babelJest.createTransformer(babelConfig)
