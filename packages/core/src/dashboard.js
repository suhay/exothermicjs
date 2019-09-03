import configBuilder from './config'

const { dashboard } = configBuilder()

module.exports = require(`${dashboard}`)
