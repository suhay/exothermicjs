import configBuilder from './config'

const { auth } = configBuilder()

module.exports = require(`${auth}`)
